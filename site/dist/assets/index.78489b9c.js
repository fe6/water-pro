import{_ as G,e as x,U as Ia}from"./index.f6b32fa6.js";import{d as L,k as w,aq as g,J as y,bN as B,bO as k,e as m,H as t,G as n,at as wt,E as Cn,bR as Ca,bL as fa,bM as ha,ck as ba,bP as vt,b$ as Aa,cb as Zt}from"./vendor.0f0e4632.js";import{I as S}from"./byted-upload.dacf72fa.js";const ya=L({components:{IconBytedUpload:S},setup(){const a=o=>{o.file.status!=="uploading"&&console.log(o.file,o.fileList),o.file.status==="done"?x.success(`${o.file.name} file uploaded successfully`):o.file.status==="error"&&x.error(`${o.file.name} file upload failed.`)};return{fileList:w([]),headers:{authorization:"authorization-text"},handleChange:a}}}),wa=t(" Click to Upload "),va=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-upload")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileList"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("file"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":multiple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":headers"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("headers"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleChange"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUpload")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      Click to Upload
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-upload")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" UploadChangeParam "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" message "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedUpload "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-upload'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedUpload`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("info"),n("span",{class:"token operator"},":"),t(" UploadChangeParam")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("status "),n("span",{class:"token operator"},"!=="),t(),n("span",{class:"token string"},"'uploading'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},","),t(" info"),n("span",{class:"token punctuation"},"."),t("fileList"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("status "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," file uploaded successfully"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("status "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," file upload failed."),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" fileList "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      fileList`),n("span",{class:"token punctuation"},","),t(`
      headers`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        authorization`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'authorization-text'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Za=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-upload")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileList"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("file"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":multiple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":headers"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("headers"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleChange"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUpload")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      Click to Upload
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-upload")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" message "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedUpload "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-upload'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedUpload`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"info"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("status "),n("span",{class:"token operator"},"!=="),t(),n("span",{class:"token string"},"'uploading'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},","),t(" info"),n("span",{class:"token punctuation"},"."),t("fileList"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`

      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("status "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," file uploaded successfully"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("status "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," file upload failed."),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" fileList "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      fileList`),n("span",{class:"token punctuation"},","),t(`
      headers`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        authorization`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'authorization-text'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function Ga(a,s,o,e,c,p){const l=g("IconBytedUpload"),u=g("a-button"),i=g("a-upload"),r=g("demo-box");return y(),B(r,{jsfiddle:{us:"Classic mode. File selection dialog pops up when upload button is clicked.",cn:"\u7ECF\u5178\u6B3E\u5F0F\uFF0C\u7528\u6237\u70B9\u51FB\u6309\u94AE\u5F39\u51FA\u6587\u4EF6\u9009\u62E9\u6846\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u7ECF\u5178\u6B3E\u5F0F\uFF0C\u7528\u6237\u70B9\u51FB\u6309\u94AE\u5F39\u51FA\u6587\u4EF6\u9009\u62E9\u6846\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Classic mode. File selection dialog pops up when upload button is clicked.</p>
`,order:0,title:{"zh-CN":"\u70B9\u51FB\u4E0A\u4F20","en-US":"Upload by clicking"},relativePath:"components/upload/demo/basic.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZAogICAgdi1tb2RlbDpmaWxlLWxpc3Q9ImZpbGVMaXN0IgogICAgbmFtZT0iZmlsZSIKICAgIDptdWx0aXBsZT0idHJ1ZSIKICAgIGFjdGlvbj0iaHR0cHM6Ly93d3cubW9ja3kuaW8vdjIvNWNjODAxOWQzMDAwMDA5ODBhMDU1ZTc2IgogICAgOmhlYWRlcnM9ImhlYWRlcnMiCiAgICBAY2hhbmdlPSJoYW5kbGVDaGFuZ2UiCiAgPgogICAgPGEtYnV0dG9uPgogICAgICA8SWNvbkJ5dGVkVXBsb2FkIC8+CiAgICAgIENsaWNrIHRvIFVwbG9hZAogICAgPC9hLWJ1dHRvbj4KICA8L2EtdXBsb2FkPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHR5cGUgeyBVcGxvYWRDaGFuZ2VQYXJhbSB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKaW1wb3J0IEljb25CeXRlZFVwbG9hZCBmcm9tICdAZmU2L2ljb24tdnVlL2xpYi9pY29ucy9ieXRlZC11cGxvYWQnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIEljb25CeXRlZFVwbG9hZCwKICB9LAogIHNldHVwKCkgewogICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGluZm86IFVwbG9hZENoYW5nZVBhcmFtKSA9PiB7CiAgICAgIGlmIChpbmZvLmZpbGUuc3RhdHVzICE9PSAndXBsb2FkaW5nJykgewogICAgICAgIGNvbnNvbGUubG9nKGluZm8uZmlsZSwgaW5mby5maWxlTGlzdCk7CiAgICAgIH0KICAgICAgaWYgKGluZm8uZmlsZS5zdGF0dXMgPT09ICdkb25lJykgewogICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhgJHtpbmZvLmZpbGUubmFtZX0gZmlsZSB1cGxvYWRlZCBzdWNjZXNzZnVsbHlgKTsKICAgICAgfSBlbHNlIGlmIChpbmZvLmZpbGUuc3RhdHVzID09PSAnZXJyb3InKSB7CiAgICAgICAgbWVzc2FnZS5lcnJvcihgJHtpbmZvLmZpbGUubmFtZX0gZmlsZSB1cGxvYWQgZmFpbGVkLmApOwogICAgICB9CiAgICB9OwoKICAgIGNvbnN0IGZpbGVMaXN0ID0gcmVmKFtdKTsKICAgIHJldHVybiB7CiAgICAgIGZpbGVMaXN0LAogICAgICBoZWFkZXJzOiB7CiAgICAgICAgYXV0aG9yaXphdGlvbjogJ2F1dGhvcml6YXRpb24tdGV4dCcsCiAgICAgIH0sCiAgICAgIGhhbmRsZUNoYW5nZSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZAogICAgdi1tb2RlbDpmaWxlLWxpc3Q9ImZpbGVMaXN0IgogICAgbmFtZT0iZmlsZSIKICAgIDptdWx0aXBsZT0idHJ1ZSIKICAgIGFjdGlvbj0iaHR0cHM6Ly93d3cubW9ja3kuaW8vdjIvNWNjODAxOWQzMDAwMDA5ODBhMDU1ZTc2IgogICAgOmhlYWRlcnM9ImhlYWRlcnMiCiAgICBAY2hhbmdlPSJoYW5kbGVDaGFuZ2UiCiAgPgogICAgPGEtYnV0dG9uPgogICAgICA8SWNvbkJ5dGVkVXBsb2FkIC8+CiAgICAgIENsaWNrIHRvIFVwbG9hZAogICAgPC9hLWJ1dHRvbj4KICA8L2EtdXBsb2FkPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwppbXBvcnQgSWNvbkJ5dGVkVXBsb2FkIGZyb20gJ0BmZTYvaWNvbi12dWUvbGliL2ljb25zL2J5dGVkLXVwbG9hZCc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBjb21wb25lbnRzOiB7CiAgICBJY29uQnl0ZWRVcGxvYWQsCiAgfSwKCiAgc2V0dXAoKSB7CiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSBpbmZvID0+IHsKICAgICAgaWYgKGluZm8uZmlsZS5zdGF0dXMgIT09ICd1cGxvYWRpbmcnKSB7CiAgICAgICAgY29uc29sZS5sb2coaW5mby5maWxlLCBpbmZvLmZpbGVMaXN0KTsKICAgICAgfQoKICAgICAgaWYgKGluZm8uZmlsZS5zdGF0dXMgPT09ICdkb25lJykgewogICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhgJHtpbmZvLmZpbGUubmFtZX0gZmlsZSB1cGxvYWRlZCBzdWNjZXNzZnVsbHlgKTsKICAgICAgfSBlbHNlIGlmIChpbmZvLmZpbGUuc3RhdHVzID09PSAnZXJyb3InKSB7CiAgICAgICAgbWVzc2FnZS5lcnJvcihgJHtpbmZvLmZpbGUubmFtZX0gZmlsZSB1cGxvYWQgZmFpbGVkLmApOwogICAgICB9CiAgICB9OwoKICAgIGNvbnN0IGZpbGVMaXN0ID0gcmVmKFtdKTsKICAgIHJldHVybiB7CiAgICAgIGZpbGVMaXN0LAogICAgICBoZWFkZXJzOiB7CiAgICAgICAgYXV0aG9yaXphdGlvbjogJ2F1dGhvcml6YXRpb24tdGV4dCcsCiAgICAgIH0sCiAgICAgIGhhbmRsZUNoYW5nZSwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:k(()=>[m(i,{"file-list":a.fileList,"onUpdate:file-list":s[0]||(s[0]=d=>a.fileList=d),name:"file",multiple:!0,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:a.headers,onChange:a.handleChange},{default:k(()=>[m(u,null,{default:k(()=>[m(l),wa]),_:1})]),_:1},8,["file-list","headers","onChange"])]),htmlCode:k(()=>[va]),jsVersionHtml:k(()=>[Za]),_:1},8,["jsfiddle"])}var Ba=G(ya,[["render",Ga]]);function Wa(a,s){const o=new FileReader;o.addEventListener("load",()=>s(o.result)),o.readAsDataURL(a)}const Va=L({components:{IconBytedPlus:wt},setup(){const a=w([]),s=w(!1),o=w("");return{fileList:a,loading:s,imageUrl:o,handleChange:p=>{if(p.file.status==="uploading"){s.value=!0;return}p.file.status==="done"&&Wa(p.file.originFileObj,l=>{o.value=l,s.value=!1}),p.file.status==="error"&&(s.value=!1,x.error("upload error"))},beforeUpload:p=>{const l=p.type==="image/jpeg"||p.type==="image/png";l||x.error("You can only upload JPG file!");const u=p.size/1024/1024<2;return u||x.error("Image must smaller than 2MB!"),l&&u}}}}),Fa=["src"],La={key:1},Ua=n("div",{class:"ant-upload-text"},"Upload",-1),Xa=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-upload")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileList"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("avatar"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"list-type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("picture-card"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("avatar-uploader"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":show-upload-list"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":before-upload"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("beforeUpload"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleChange"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("img")]),t(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("imageUrl"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("imageUrl"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"alt"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("avatar"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-spin")]),t(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("loading"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedPlus")]),t(),n("span",{class:"token attr-name"},"v-else"),t(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("20"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ant-upload-text"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Upload"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-upload")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" UploadChangeParam"),n("span",{class:"token punctuation"},","),t(" UploadProps "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" message "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedPlus "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-plus'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"getBase64"),n("span",{class:"token punctuation"},"("),t("img"),n("span",{class:"token operator"},":"),t(" Blob"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token function-variable function"},"callback"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("base64Url"),n("span",{class:"token operator"},":"),t(" string")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" reader "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"FileReader"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  reader`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addEventListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'load'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token function"},"callback"),n("span",{class:"token punctuation"},"("),t("reader"),n("span",{class:"token punctuation"},"."),t("result "),n("span",{class:"token keyword"},"as"),t(" string"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  reader`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"readAsDataURL"),n("span",{class:"token punctuation"},"("),t("img"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedPlus`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" fileList "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" loading "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("boolean"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" imageUrl "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("string"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("info"),n("span",{class:"token operator"},":"),t(" UploadChangeParam")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("status "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'uploading'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        loading`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("status "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token comment"},"// Get this url from response in real world."),t(`
        `),n("span",{class:"token function"},"getBase64"),n("span",{class:"token punctuation"},"("),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("originFileObj"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("base64Url"),n("span",{class:"token operator"},":"),t(" string")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
          imageUrl`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" base64Url"),n("span",{class:"token punctuation"},";"),t(`
          loading`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("status "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        loading`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'upload error'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" beforeUpload "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),t("file"),n("span",{class:"token operator"},":"),t(" UploadProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'fileList'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("number"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" isJpgOrPng "),n("span",{class:"token operator"},"="),t(" file"),n("span",{class:"token punctuation"},"."),t("type "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'image/jpeg'"),t(),n("span",{class:"token operator"},"||"),t(" file"),n("span",{class:"token punctuation"},"."),t("type "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'image/png'"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("isJpgOrPng"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'You can only upload JPG file!'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" isLt2M "),n("span",{class:"token operator"},"="),t(" file"),n("span",{class:"token punctuation"},"."),t("size "),n("span",{class:"token operator"},"/"),t(),n("span",{class:"token number"},"1024"),t(),n("span",{class:"token operator"},"/"),t(),n("span",{class:"token number"},"1024"),t(),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("isLt2M"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Image must smaller than 2MB!'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
      `),n("span",{class:"token keyword"},"return"),t(" isJpgOrPng "),n("span",{class:"token operator"},"&&"),t(" isLt2M"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      fileList`),n("span",{class:"token punctuation"},","),t(`
      loading`),n("span",{class:"token punctuation"},","),t(`
      imageUrl`),n("span",{class:"token punctuation"},","),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
      beforeUpload`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".avatar-uploader > .ant-upload"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 128px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 128px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".ant-upload-select-picture-card i"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),t(" 32px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #999"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".ant-upload-select-picture-card .ant-upload-text"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #666"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Ya=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-upload")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileList"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("avatar"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"list-type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("picture-card"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("avatar-uploader"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":show-upload-list"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("false"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":before-upload"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("beforeUpload"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleChange"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("img")]),t(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("imageUrl"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("imageUrl"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"alt"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("avatar"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"v-else"),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-spin")]),t(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("loading"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedPlus")]),t(),n("span",{class:"token attr-name"},"v-else"),t(),n("span",{class:"token attr-name"},":size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("20"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ant-upload-text"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Upload"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-upload")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" message "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedPlus "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-plus'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"getBase64"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("img"),n("span",{class:"token punctuation"},","),t(" callback")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"const"),t(" reader "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"FileReader"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  reader`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"addEventListener"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'load'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token function"},"callback"),n("span",{class:"token punctuation"},"("),t("reader"),n("span",{class:"token punctuation"},"."),t("result"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  reader`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"readAsDataURL"),n("span",{class:"token punctuation"},"("),t("img"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedPlus`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" fileList "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" loading "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" imageUrl "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"info"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("status "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'uploading'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        loading`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token keyword"},"return"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`

      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("status "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token comment"},"// Get this url from response in real world."),t(`
        `),n("span",{class:"token function"},"getBase64"),n("span",{class:"token punctuation"},"("),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("originFileObj"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token parameter"},"base64Url"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
          imageUrl`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" base64Url"),n("span",{class:"token punctuation"},";"),t(`
          loading`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`

      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("status "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        loading`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'upload error'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"beforeUpload"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"file"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" isJpgOrPng "),n("span",{class:"token operator"},"="),t(" file"),n("span",{class:"token punctuation"},"."),t("type "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'image/jpeg'"),t(),n("span",{class:"token operator"},"||"),t(" file"),n("span",{class:"token punctuation"},"."),t("type "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'image/png'"),n("span",{class:"token punctuation"},";"),t(`

      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("isJpgOrPng"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'You can only upload JPG file!'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`

      `),n("span",{class:"token keyword"},"const"),t(" isLt2M "),n("span",{class:"token operator"},"="),t(" file"),n("span",{class:"token punctuation"},"."),t("size "),n("span",{class:"token operator"},"/"),t(),n("span",{class:"token number"},"1024"),t(),n("span",{class:"token operator"},"/"),t(),n("span",{class:"token number"},"1024"),t(),n("span",{class:"token operator"},"<"),t(),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},";"),t(`

      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("isLt2M"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Image must smaller than 2MB!'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`

      `),n("span",{class:"token keyword"},"return"),t(" isJpgOrPng "),n("span",{class:"token operator"},"&&"),t(" isLt2M"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      fileList`),n("span",{class:"token punctuation"},","),t(`
      loading`),n("span",{class:"token punctuation"},","),t(`
      imageUrl`),n("span",{class:"token punctuation"},","),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
      beforeUpload`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token selector"},".avatar-uploader > .ant-upload"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 128px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"height"),n("span",{class:"token punctuation"},":"),t(" 128px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".ant-upload-select-picture-card i"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),t(" 32px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #999"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".ant-upload-select-picture-card .ant-upload-text"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #666"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function xa(a,s,o,e,c,p){const l=g("a-spin"),u=g("IconBytedPlus"),i=g("a-upload"),r=g("demo-box");return y(),B(r,{jsfiddle:{us:"Click to upload user's avatar, and validate size and format of picture with `beforeUpload`.",cn:"\u70B9\u51FB\u4E0A\u4F20\u7528\u6237\u5934\u50CF\uFF0C\u5E76\u4F7F\u7528 `beforeUpload` \u9650\u5236\u7528\u6237\u4E0A\u4F20\u7684\u56FE\u7247\u683C\u5F0F\u548C\u5927\u5C0F\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u70B9\u51FB\u4E0A\u4F20\u7528\u6237\u5934\u50CF\uFF0C\u5E76\u4F7F\u7528 <code>beforeUpload</code> \u9650\u5236\u7528\u6237\u4E0A\u4F20\u7684\u56FE\u7247\u683C\u5F0F\u548C\u5927\u5C0F\u3002</p>
<blockquote>
<p><code>beforeUpload</code> \u7684\u8FD4\u56DE\u503C\u53EF\u4EE5\u662F\u4E00\u4E2A Promise \u4EE5\u652F\u6301\u5F02\u6B65\u5904\u7406\uFF0C\u5982\u670D\u52A1\u7AEF\u6821\u9A8C\u7B49\uFF1A\u53EF\u53C2\u8003react\u7248\u672C<a href="http://react-component.github.io/upload/examples/beforeUpload.html" target="_blank" rel="noopener noreferrer">\u793A\u4F8B</a>\u3002</p>
</blockquote>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Click to upload user's avatar, and validate size and format of picture with <code>beforeUpload</code>.</p>
<blockquote>
<p>The return value of function <code>beforeUpload</code> can be a Promise to check asynchronously. <a href="http://react-component.github.io/upload/examples/beforeUpload.html" target="_blank" rel="noopener noreferrer">demo</a></p>
</blockquote>
`,order:1,title:{"zh-CN":"\u7528\u6237\u5934\u50CF","en-US":"Avatar"},relativePath:"components/upload/demo/avatar.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZAogICAgdi1tb2RlbDpmaWxlLWxpc3Q9ImZpbGVMaXN0IgogICAgbmFtZT0iYXZhdGFyIgogICAgbGlzdC10eXBlPSJwaWN0dXJlLWNhcmQiCiAgICBjbGFzcz0iYXZhdGFyLXVwbG9hZGVyIgogICAgOnNob3ctdXBsb2FkLWxpc3Q9ImZhbHNlIgogICAgYWN0aW9uPSJodHRwczovL3d3dy5tb2NreS5pby92Mi81Y2M4MDE5ZDMwMDAwMDk4MGEwNTVlNzYiCiAgICA6YmVmb3JlLXVwbG9hZD0iYmVmb3JlVXBsb2FkIgogICAgQGNoYW5nZT0iaGFuZGxlQ2hhbmdlIgogID4KICAgIDxpbWcgdi1pZj0iaW1hZ2VVcmwiIDpzcmM9ImltYWdlVXJsIiBhbHQ9ImF2YXRhciIgLz4KICAgIDxkaXYgdi1lbHNlPgogICAgICA8YS1zcGluIHYtaWY9ImxvYWRpbmciIC8+CiAgICAgIDxJY29uQnl0ZWRQbHVzIHYtZWxzZSA6c2l6ZT0iMjAiIC8+CiAgICAgIDxkaXYgY2xhc3M9ImFudC11cGxvYWQtdGV4dCI+VXBsb2FkPC9kaXY+CiAgICA8L2Rpdj4KICA8L2EtdXBsb2FkPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHR5cGUgeyBVcGxvYWRDaGFuZ2VQYXJhbSwgVXBsb2FkUHJvcHMgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CmltcG9ydCBJY29uQnl0ZWRQbHVzIGZyb20gJ0BmZTYvaWNvbi12dWUvbGliL2ljb25zL2J5dGVkLXBsdXMnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CgpmdW5jdGlvbiBnZXRCYXNlNjQoaW1nOiBCbG9iLCBjYWxsYmFjazogKGJhc2U2NFVybDogc3RyaW5nKSA9PiB2b2lkKSB7CiAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTsKICByZWFkZXIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IGNhbGxiYWNrKHJlYWRlci5yZXN1bHQgYXMgc3RyaW5nKSk7CiAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoaW1nKTsKfQpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIEljb25CeXRlZFBsdXMsCiAgfSwKICBzZXR1cCgpIHsKICAgIGNvbnN0IGZpbGVMaXN0ID0gcmVmKFtdKTsKICAgIGNvbnN0IGxvYWRpbmcgPSByZWY8Ym9vbGVhbj4oZmFsc2UpOwogICAgY29uc3QgaW1hZ2VVcmwgPSByZWY8c3RyaW5nPignJyk7CgogICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGluZm86IFVwbG9hZENoYW5nZVBhcmFtKSA9PiB7CiAgICAgIGlmIChpbmZvLmZpbGUuc3RhdHVzID09PSAndXBsb2FkaW5nJykgewogICAgICAgIGxvYWRpbmcudmFsdWUgPSB0cnVlOwogICAgICAgIHJldHVybjsKICAgICAgfQogICAgICBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gJ2RvbmUnKSB7CiAgICAgICAgLy8gR2V0IHRoaXMgdXJsIGZyb20gcmVzcG9uc2UgaW4gcmVhbCB3b3JsZC4KICAgICAgICBnZXRCYXNlNjQoaW5mby5maWxlLm9yaWdpbkZpbGVPYmosIChiYXNlNjRVcmw6IHN0cmluZykgPT4gewogICAgICAgICAgaW1hZ2VVcmwudmFsdWUgPSBiYXNlNjRVcmw7CiAgICAgICAgICBsb2FkaW5nLnZhbHVlID0gZmFsc2U7CiAgICAgICAgfSk7CiAgICAgIH0KICAgICAgaWYgKGluZm8uZmlsZS5zdGF0dXMgPT09ICdlcnJvcicpIHsKICAgICAgICBsb2FkaW5nLnZhbHVlID0gZmFsc2U7CiAgICAgICAgbWVzc2FnZS5lcnJvcigndXBsb2FkIGVycm9yJyk7CiAgICAgIH0KICAgIH07CgogICAgY29uc3QgYmVmb3JlVXBsb2FkID0gKGZpbGU6IFVwbG9hZFByb3BzWydmaWxlTGlzdCddW251bWJlcl0pID0+IHsKICAgICAgY29uc3QgaXNKcGdPclBuZyA9IGZpbGUudHlwZSA9PT0gJ2ltYWdlL2pwZWcnIHx8IGZpbGUudHlwZSA9PT0gJ2ltYWdlL3BuZyc7CiAgICAgIGlmICghaXNKcGdPclBuZykgewogICAgICAgIG1lc3NhZ2UuZXJyb3IoJ1lvdSBjYW4gb25seSB1cGxvYWQgSlBHIGZpbGUhJyk7CiAgICAgIH0KICAgICAgY29uc3QgaXNMdDJNID0gZmlsZS5zaXplIC8gMTAyNCAvIDEwMjQgPCAyOwogICAgICBpZiAoIWlzTHQyTSkgewogICAgICAgIG1lc3NhZ2UuZXJyb3IoJ0ltYWdlIG11c3Qgc21hbGxlciB0aGFuIDJNQiEnKTsKICAgICAgfQogICAgICByZXR1cm4gaXNKcGdPclBuZyAmJiBpc0x0Mk07CiAgICB9OwoKICAgIHJldHVybiB7CiAgICAgIGZpbGVMaXN0LAogICAgICBsb2FkaW5nLAogICAgICBpbWFnZVVybCwKICAgICAgaGFuZGxlQ2hhbmdlLAogICAgICBiZWZvcmVVcGxvYWQsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KPHN0eWxlPgouYXZhdGFyLXVwbG9hZGVyID4gLmFudC11cGxvYWQgewogIHdpZHRoOiAxMjhweDsKICBoZWlnaHQ6IDEyOHB4Owp9Ci5hbnQtdXBsb2FkLXNlbGVjdC1waWN0dXJlLWNhcmQgaSB7CiAgZm9udC1zaXplOiAzMnB4OwogIGNvbG9yOiAjOTk5Owp9CgouYW50LXVwbG9hZC1zZWxlY3QtcGljdHVyZS1jYXJkIC5hbnQtdXBsb2FkLXRleHQgewogIG1hcmdpbi10b3A6IDhweDsKICBjb2xvcjogIzY2NjsKfQo8L3N0eWxlPgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZAogICAgdi1tb2RlbDpmaWxlLWxpc3Q9ImZpbGVMaXN0IgogICAgbmFtZT0iYXZhdGFyIgogICAgbGlzdC10eXBlPSJwaWN0dXJlLWNhcmQiCiAgICBjbGFzcz0iYXZhdGFyLXVwbG9hZGVyIgogICAgOnNob3ctdXBsb2FkLWxpc3Q9ImZhbHNlIgogICAgYWN0aW9uPSJodHRwczovL3d3dy5tb2NreS5pby92Mi81Y2M4MDE5ZDMwMDAwMDk4MGEwNTVlNzYiCiAgICA6YmVmb3JlLXVwbG9hZD0iYmVmb3JlVXBsb2FkIgogICAgQGNoYW5nZT0iaGFuZGxlQ2hhbmdlIgogID4KICAgIDxpbWcgdi1pZj0iaW1hZ2VVcmwiIDpzcmM9ImltYWdlVXJsIiBhbHQ9ImF2YXRhciIgLz4KICAgIDxkaXYgdi1lbHNlPgogICAgICA8YS1zcGluIHYtaWY9ImxvYWRpbmciIC8+CiAgICAgIDxJY29uQnl0ZWRQbHVzIHYtZWxzZSA6c2l6ZT0iMjAiIC8+CiAgICAgIDxkaXYgY2xhc3M9ImFudC11cGxvYWQtdGV4dCI+VXBsb2FkPC9kaXY+CiAgICA8L2Rpdj4KICA8L2EtdXBsb2FkPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwppbXBvcnQgSWNvbkJ5dGVkUGx1cyBmcm9tICdAZmU2L2ljb24tdnVlL2xpYi9pY29ucy9ieXRlZC1wbHVzJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwoKZnVuY3Rpb24gZ2V0QmFzZTY0KGltZywgY2FsbGJhY2spIHsKICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpOwogIHJlYWRlci5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4gY2FsbGJhY2socmVhZGVyLnJlc3VsdCkpOwogIHJlYWRlci5yZWFkQXNEYXRhVVJMKGltZyk7Cn0KCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgSWNvbkJ5dGVkUGx1cywKICB9LAoKICBzZXR1cCgpIHsKICAgIGNvbnN0IGZpbGVMaXN0ID0gcmVmKFtdKTsKICAgIGNvbnN0IGxvYWRpbmcgPSByZWYoZmFsc2UpOwogICAgY29uc3QgaW1hZ2VVcmwgPSByZWYoJycpOwoKICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGluZm8gPT4gewogICAgICBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gJ3VwbG9hZGluZycpIHsKICAgICAgICBsb2FkaW5nLnZhbHVlID0gdHJ1ZTsKICAgICAgICByZXR1cm47CiAgICAgIH0KCiAgICAgIGlmIChpbmZvLmZpbGUuc3RhdHVzID09PSAnZG9uZScpIHsKICAgICAgICAvLyBHZXQgdGhpcyB1cmwgZnJvbSByZXNwb25zZSBpbiByZWFsIHdvcmxkLgogICAgICAgIGdldEJhc2U2NChpbmZvLmZpbGUub3JpZ2luRmlsZU9iaiwgYmFzZTY0VXJsID0+IHsKICAgICAgICAgIGltYWdlVXJsLnZhbHVlID0gYmFzZTY0VXJsOwogICAgICAgICAgbG9hZGluZy52YWx1ZSA9IGZhbHNlOwogICAgICAgIH0pOwogICAgICB9CgogICAgICBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gJ2Vycm9yJykgewogICAgICAgIGxvYWRpbmcudmFsdWUgPSBmYWxzZTsKICAgICAgICBtZXNzYWdlLmVycm9yKCd1cGxvYWQgZXJyb3InKTsKICAgICAgfQogICAgfTsKCiAgICBjb25zdCBiZWZvcmVVcGxvYWQgPSBmaWxlID0+IHsKICAgICAgY29uc3QgaXNKcGdPclBuZyA9IGZpbGUudHlwZSA9PT0gJ2ltYWdlL2pwZWcnIHx8IGZpbGUudHlwZSA9PT0gJ2ltYWdlL3BuZyc7CgogICAgICBpZiAoIWlzSnBnT3JQbmcpIHsKICAgICAgICBtZXNzYWdlLmVycm9yKCdZb3UgY2FuIG9ubHkgdXBsb2FkIEpQRyBmaWxlIScpOwogICAgICB9CgogICAgICBjb25zdCBpc0x0Mk0gPSBmaWxlLnNpemUgLyAxMDI0IC8gMTAyNCA8IDI7CgogICAgICBpZiAoIWlzTHQyTSkgewogICAgICAgIG1lc3NhZ2UuZXJyb3IoJ0ltYWdlIG11c3Qgc21hbGxlciB0aGFuIDJNQiEnKTsKICAgICAgfQoKICAgICAgcmV0dXJuIGlzSnBnT3JQbmcgJiYgaXNMdDJNOwogICAgfTsKCiAgICByZXR1cm4gewogICAgICBmaWxlTGlzdCwKICAgICAgbG9hZGluZywKICAgICAgaW1hZ2VVcmwsCiAgICAgIGhhbmRsZUNoYW5nZSwKICAgICAgYmVmb3JlVXBsb2FkLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pgo8c3R5bGU+Ci5hdmF0YXItdXBsb2FkZXIgPiAuYW50LXVwbG9hZCB7CiAgd2lkdGg6IDEyOHB4OwogIGhlaWdodDogMTI4cHg7Cn0KLmFudC11cGxvYWQtc2VsZWN0LXBpY3R1cmUtY2FyZCBpIHsKICBmb250LXNpemU6IDMycHg7CiAgY29sb3I6ICM5OTk7Cn0KCi5hbnQtdXBsb2FkLXNlbGVjdC1waWN0dXJlLWNhcmQgLmFudC11cGxvYWQtdGV4dCB7CiAgbWFyZ2luLXRvcDogOHB4OwogIGNvbG9yOiAjNjY2Owp9Cjwvc3R5bGU+"}},{default:k(()=>[m(i,{"file-list":a.fileList,"onUpdate:file-list":s[0]||(s[0]=d=>a.fileList=d),name:"avatar","list-type":"picture-card",class:"avatar-uploader","show-upload-list":!1,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76","before-upload":a.beforeUpload,onChange:a.handleChange},{default:k(()=>[a.imageUrl?(y(),Cn("img",{key:0,src:a.imageUrl,alt:"avatar"},null,8,Fa)):(y(),Cn("div",La,[a.loading?(y(),B(l,{key:0})):(y(),B(u,{key:1,size:20})),Ua]))]),_:1},8,["file-list","before-upload","onChange"])]),htmlCode:k(()=>[Xa]),jsVersionHtml:k(()=>[Ya]),_:1},8,["jsfiddle"])}var Sa=G(Va,[["render",xa]]);const Ra=L({components:{IconBytedUpload:S},setup(){return{fileList:w([{uid:"1",name:"xxx.png",status:"done",response:"Server Error 500",url:"http://www.baidu.com/xxx.png"},{uid:"2",name:"yyy.png",status:"done",url:"http://www.baidu.com/yyy.png"},{uid:"3",name:"zzz.png",status:"error",response:"Server Error 500",url:"http://www.baidu.com/zzz.png"}]),handleChange:({file:o,fileList:e})=>{o.status!=="uploading"&&console.log(o,e)}}}}),Ha=t(" Upload "),Ja=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-upload")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileList"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUpload")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      Upload
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-upload")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" UploadChangeParam"),n("span",{class:"token punctuation"},","),t(" UploadProps "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedUpload "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-upload'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedUpload`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" fileList "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("UploadProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'fileList'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'xxx.png'"),n("span",{class:"token punctuation"},","),t(`
        status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),t(`
        response`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Server Error 500'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token comment"},"// custom error message to show"),t(`
        url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'http://www.baidu.com/xxx.png'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'yyy.png'"),n("span",{class:"token punctuation"},","),t(`
        status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),t(`
        url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'http://www.baidu.com/yyy.png'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'zzz.png'"),n("span",{class:"token punctuation"},","),t(`
        status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},","),t(`
        response`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Server Error 500'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token comment"},"// custom error message to show"),t(`
        url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'http://www.baidu.com/zzz.png'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" file"),n("span",{class:"token punctuation"},","),t(" fileList "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),t(" UploadChangeParam")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("file"),n("span",{class:"token punctuation"},"."),t("status "),n("span",{class:"token operator"},"!=="),t(),n("span",{class:"token string"},"'uploading'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("file"),n("span",{class:"token punctuation"},","),t(" fileList"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      fileList`),n("span",{class:"token punctuation"},","),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Na=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-upload")]),t(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileList"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUpload")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      Upload
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-upload")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedUpload "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-upload'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedUpload`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" fileList "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
      uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'xxx.png'"),n("span",{class:"token punctuation"},","),t(`
      status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),t(`
      response`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Server Error 500'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token comment"},"// custom error message to show"),t(`
      url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'http://www.baidu.com/xxx.png'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'yyy.png'"),n("span",{class:"token punctuation"},","),t(`
      status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),t(`
      url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'http://www.baidu.com/yyy.png'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'zzz.png'"),n("span",{class:"token punctuation"},","),t(`
      status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},","),t(`
      response`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Server Error 500'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token comment"},"// custom error message to show"),t(`
      url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'http://www.baidu.com/zzz.png'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(`
      file`),n("span",{class:"token punctuation"},","),t(`
      fileList`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("file"),n("span",{class:"token punctuation"},"."),t("status "),n("span",{class:"token operator"},"!=="),t(),n("span",{class:"token string"},"'uploading'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("file"),n("span",{class:"token punctuation"},","),t(" fileList"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      fileList`),n("span",{class:"token punctuation"},","),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function Pa(a,s,o,e,c,p){const l=g("IconBytedUpload"),u=g("a-button"),i=g("a-upload"),r=g("demo-box");return y(),B(r,{jsfiddle:{us:"Use `fileList` for uploaded files when page init.",cn:"\u4F7F\u7528 `fileList` \u8BBE\u7F6E\u5DF2\u4E0A\u4F20\u7684\u5185\u5BB9\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4F7F\u7528 <code>fileList</code> \u8BBE\u7F6E\u5DF2\u4E0A\u4F20\u7684\u5185\u5BB9\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Use <code>fileList</code> for uploaded files when page init.</p>
`,order:2,title:{"zh-CN":"\u5DF2\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868","en-US":"Default Files"},relativePath:"components/upload/demo/defaultFileList.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZCB2LW1vZGVsOmZpbGUtbGlzdD0iZmlsZUxpc3QiIGFjdGlvbj0iaHR0cHM6Ly93d3cubW9ja3kuaW8vdjIvNWNjODAxOWQzMDAwMDA5ODBhMDU1ZTc2Ij4KICAgIDxhLWJ1dHRvbj4KICAgICAgPEljb25CeXRlZFVwbG9hZCAvPgogICAgICBVcGxvYWQKICAgIDwvYS1idXR0b24+CiAgPC9hLXVwbG9hZD4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB0eXBlIHsgVXBsb2FkQ2hhbmdlUGFyYW0sIFVwbG9hZFByb3BzIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwppbXBvcnQgSWNvbkJ5dGVkVXBsb2FkIGZyb20gJ0BmZTYvaWNvbi12dWUvbGliL2ljb25zL2J5dGVkLXVwbG9hZCc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgSWNvbkJ5dGVkVXBsb2FkLAogIH0sCiAgc2V0dXAoKSB7CiAgICBjb25zdCBmaWxlTGlzdCA9IHJlZjxVcGxvYWRQcm9wc1snZmlsZUxpc3QnXT4oWwogICAgICB7CiAgICAgICAgdWlkOiAnMScsCiAgICAgICAgbmFtZTogJ3h4eC5wbmcnLAogICAgICAgIHN0YXR1czogJ2RvbmUnLAogICAgICAgIHJlc3BvbnNlOiAnU2VydmVyIEVycm9yIDUwMCcsIC8vIGN1c3RvbSBlcnJvciBtZXNzYWdlIHRvIHNob3cKICAgICAgICB1cmw6ICdodHRwOi8vd3d3LmJhaWR1LmNvbS94eHgucG5nJywKICAgICAgfSwKICAgICAgewogICAgICAgIHVpZDogJzInLAogICAgICAgIG5hbWU6ICd5eXkucG5nJywKICAgICAgICBzdGF0dXM6ICdkb25lJywKICAgICAgICB1cmw6ICdodHRwOi8vd3d3LmJhaWR1LmNvbS95eXkucG5nJywKICAgICAgfSwKICAgICAgewogICAgICAgIHVpZDogJzMnLAogICAgICAgIG5hbWU6ICd6enoucG5nJywKICAgICAgICBzdGF0dXM6ICdlcnJvcicsCiAgICAgICAgcmVzcG9uc2U6ICdTZXJ2ZXIgRXJyb3IgNTAwJywgLy8gY3VzdG9tIGVycm9yIG1lc3NhZ2UgdG8gc2hvdwogICAgICAgIHVybDogJ2h0dHA6Ly93d3cuYmFpZHUuY29tL3p6ei5wbmcnLAogICAgICB9LAogICAgXSk7CgogICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHsgZmlsZSwgZmlsZUxpc3QgfTogVXBsb2FkQ2hhbmdlUGFyYW0pID0+IHsKICAgICAgaWYgKGZpbGUuc3RhdHVzICE9PSAndXBsb2FkaW5nJykgewogICAgICAgIGNvbnNvbGUubG9nKGZpbGUsIGZpbGVMaXN0KTsKICAgICAgfQogICAgfTsKICAgIHJldHVybiB7CiAgICAgIGZpbGVMaXN0LAogICAgICBoYW5kbGVDaGFuZ2UsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZCB2LW1vZGVsOmZpbGUtbGlzdD0iZmlsZUxpc3QiIGFjdGlvbj0iaHR0cHM6Ly93d3cubW9ja3kuaW8vdjIvNWNjODAxOWQzMDAwMDA5ODBhMDU1ZTc2Ij4KICAgIDxhLWJ1dHRvbj4KICAgICAgPEljb25CeXRlZFVwbG9hZCAvPgogICAgICBVcGxvYWQKICAgIDwvYS1idXR0b24+CiAgPC9hLXVwbG9hZD4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IEljb25CeXRlZFVwbG9hZCBmcm9tICdAZmU2L2ljb24tdnVlL2xpYi9pY29ucy9ieXRlZC11cGxvYWQnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgSWNvbkJ5dGVkVXBsb2FkLAogIH0sCgogIHNldHVwKCkgewogICAgY29uc3QgZmlsZUxpc3QgPSByZWYoW3sKICAgICAgdWlkOiAnMScsCiAgICAgIG5hbWU6ICd4eHgucG5nJywKICAgICAgc3RhdHVzOiAnZG9uZScsCiAgICAgIHJlc3BvbnNlOiAnU2VydmVyIEVycm9yIDUwMCcsCiAgICAgIC8vIGN1c3RvbSBlcnJvciBtZXNzYWdlIHRvIHNob3cKICAgICAgdXJsOiAnaHR0cDovL3d3dy5iYWlkdS5jb20veHh4LnBuZycsCiAgICB9LCB7CiAgICAgIHVpZDogJzInLAogICAgICBuYW1lOiAneXl5LnBuZycsCiAgICAgIHN0YXR1czogJ2RvbmUnLAogICAgICB1cmw6ICdodHRwOi8vd3d3LmJhaWR1LmNvbS95eXkucG5nJywKICAgIH0sIHsKICAgICAgdWlkOiAnMycsCiAgICAgIG5hbWU6ICd6enoucG5nJywKICAgICAgc3RhdHVzOiAnZXJyb3InLAogICAgICByZXNwb25zZTogJ1NlcnZlciBFcnJvciA1MDAnLAogICAgICAvLyBjdXN0b20gZXJyb3IgbWVzc2FnZSB0byBzaG93CiAgICAgIHVybDogJ2h0dHA6Ly93d3cuYmFpZHUuY29tL3p6ei5wbmcnLAogICAgfV0pOwoKICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh7CiAgICAgIGZpbGUsCiAgICAgIGZpbGVMaXN0LAogICAgfSkgPT4gewogICAgICBpZiAoZmlsZS5zdGF0dXMgIT09ICd1cGxvYWRpbmcnKSB7CiAgICAgICAgY29uc29sZS5sb2coZmlsZSwgZmlsZUxpc3QpOwogICAgICB9CiAgICB9OwoKICAgIHJldHVybiB7CiAgICAgIGZpbGVMaXN0LAogICAgICBoYW5kbGVDaGFuZ2UsCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:k(()=>[m(i,{"file-list":a.fileList,"onUpdate:file-list":s[0]||(s[0]=d=>a.fileList=d),action:"https://www.mocky.io/v2/5cc8019d300000980a055e76"},{default:k(()=>[m(u,null,{default:k(()=>[m(l),Ha]),_:1})]),_:1},8,["file-list"])]),htmlCode:k(()=>[Ja]),jsVersionHtml:k(()=>[Na]),_:1},8,["jsfiddle"])}var ja=G(Ra,[["render",Pa]]);function za(a){return new Promise((s,o)=>{const e=new FileReader;e.readAsDataURL(a),e.onload=()=>s(e.result),e.onerror=c=>o(c)})}const Ka=L({components:{IconBytedPlus:wt},setup(){const a=w(!1),s=w(""),o=w(""),e=w([{uid:"-1",name:"image.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-2",name:"image.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-3",name:"image.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-4",name:"image.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-xxx",percent:50,name:"image.png",status:"uploading",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-5",name:"image.png",status:"error"}]);return{previewVisible:a,previewImage:s,fileList:e,handleCancel:()=>{a.value=!1,o.value=""},handlePreview:async l=>{!l.url&&!l.preview&&(l.preview=await za(l.originFileObj)),s.value=l.url||l.preview,a.value=!0,o.value=l.name||l.url.substring(l.url.lastIndexOf("/")+1)},previewTitle:o}}}),Da={class:"clearfix"},Ea={key:0},Oa=n("div",{style:{"margin-top":"8px"}},"Upload",-1),Qa=["src"],_a=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("clearfix"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-upload")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileList"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"list-type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("picture-card"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@preview"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handlePreview"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileList.length < 8"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedPlus")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 8px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("Upload"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-upload")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-modal")]),t(),n("span",{class:"token attr-name"},":visible"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("previewVisible"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("previewTitle"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":footer"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("null"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@cancel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleCancel"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("img")]),t(),n("span",{class:"token attr-name"},"alt"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("example"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(),n("span",{class:"token attr-name"},":src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("previewImage"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-modal")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" UploadProps "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedPlus "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-plus'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"getBase64"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("file"),n("span",{class:"token operator"},":"),t(" File")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("resolve"),n("span",{class:"token punctuation"},","),t(" reject")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" reader "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"FileReader"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    reader`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"readAsDataURL"),n("span",{class:"token punctuation"},"("),t("file"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    reader`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"onload"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),t("reader"),n("span",{class:"token punctuation"},"."),t("result"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    reader`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"onerror"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"error"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token function"},"reject"),n("span",{class:"token punctuation"},"("),t("error"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedPlus`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" previewVisible "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" previewImage "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" previewTitle "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" fileList "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("UploadProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'fileList'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'-1'"),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'image.png'"),n("span",{class:"token punctuation"},","),t(`
        status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),t(`
        url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'-2'"),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'image.png'"),n("span",{class:"token punctuation"},","),t(`
        status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),t(`
        url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'-3'"),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'image.png'"),n("span",{class:"token punctuation"},","),t(`
        status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),t(`
        url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'-4'"),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'image.png'"),n("span",{class:"token punctuation"},","),t(`
        status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),t(`
        url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'-xxx'"),n("span",{class:"token punctuation"},","),t(`
        percent`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'image.png'"),n("span",{class:"token punctuation"},","),t(`
        status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'uploading'"),n("span",{class:"token punctuation"},","),t(`
        url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'-5'"),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'image.png'"),n("span",{class:"token punctuation"},","),t(`
        status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleCancel"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      previewVisible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
      previewTitle`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" handlePreview "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"async"),t(),n("span",{class:"token punctuation"},"("),t("file"),n("span",{class:"token operator"},":"),t(" UploadProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'fileList'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("number"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("file"),n("span",{class:"token punctuation"},"."),t("url "),n("span",{class:"token operator"},"&&"),t(),n("span",{class:"token operator"},"!"),t("file"),n("span",{class:"token punctuation"},"."),t("preview"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        file`),n("span",{class:"token punctuation"},"."),t("preview "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"await"),t(),n("span",{class:"token function"},"getBase64"),n("span",{class:"token punctuation"},"("),t("file"),n("span",{class:"token punctuation"},"."),t("originFileObj"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token keyword"},"as"),t(" string"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
      previewImage`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" file"),n("span",{class:"token punctuation"},"."),t("url "),n("span",{class:"token operator"},"||"),t(" file"),n("span",{class:"token punctuation"},"."),t("preview"),n("span",{class:"token punctuation"},";"),t(`
      previewVisible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
      previewTitle`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" file"),n("span",{class:"token punctuation"},"."),t("name "),n("span",{class:"token operator"},"||"),t(" file"),n("span",{class:"token punctuation"},"."),t("url"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"substring"),n("span",{class:"token punctuation"},"("),t("file"),n("span",{class:"token punctuation"},"."),t("url"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"lastIndexOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'/'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      previewVisible`),n("span",{class:"token punctuation"},","),t(`
      previewImage`),n("span",{class:"token punctuation"},","),t(`
      fileList`),n("span",{class:"token punctuation"},","),t(`
      handleCancel`),n("span",{class:"token punctuation"},","),t(`
      handlePreview`),n("span",{class:"token punctuation"},","),t(`
      previewTitle`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token comment"},"/* you can make up upload button and sample style by using stylesheets */"),t(`
`),n("span",{class:"token selector"},".ant-upload-select-picture-card i"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),t(" 32px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #999"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".ant-upload-select-picture-card .ant-upload-text"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #666"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Ta=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("clearfix"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-upload")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileList"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"list-type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("picture-card"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"@preview"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handlePreview"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"v-if"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileList.length < 8"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedPlus")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 8px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),t("Upload"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-upload")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-modal")]),t(),n("span",{class:"token attr-name"},":visible"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("previewVisible"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("previewTitle"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":footer"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("null"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@cancel"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleCancel"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("img")]),t(),n("span",{class:"token attr-name"},"alt"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("example"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(),n("span",{class:"token attr-name"},":src"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("previewImage"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-modal")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedPlus "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-plus'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"function"),t(),n("span",{class:"token function"},"getBase64"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"file"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("resolve"),n("span",{class:"token punctuation"},","),t(" reject")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" reader "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"FileReader"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    reader`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"readAsDataURL"),n("span",{class:"token punctuation"},"("),t("file"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    reader`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"onload"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),t("reader"),n("span",{class:"token punctuation"},"."),t("result"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    reader`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"onerror"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"error"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token function"},"reject"),n("span",{class:"token punctuation"},"("),t("error"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedPlus`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" previewVisible "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" previewImage "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" previewTitle "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" fileList "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
      uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'-1'"),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'image.png'"),n("span",{class:"token punctuation"},","),t(`
      status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),t(`
      url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'-2'"),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'image.png'"),n("span",{class:"token punctuation"},","),t(`
      status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),t(`
      url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'-3'"),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'image.png'"),n("span",{class:"token punctuation"},","),t(`
      status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),t(`
      url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'-4'"),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'image.png'"),n("span",{class:"token punctuation"},","),t(`
      status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),t(`
      url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'-xxx'"),n("span",{class:"token punctuation"},","),t(`
      percent`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"50"),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'image.png'"),n("span",{class:"token punctuation"},","),t(`
      status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'uploading'"),n("span",{class:"token punctuation"},","),t(`
      url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'-5'"),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'image.png'"),n("span",{class:"token punctuation"},","),t(`
      status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleCancel"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      previewVisible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
      previewTitle`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handlePreview"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"async"),t(),n("span",{class:"token parameter"},"file"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("file"),n("span",{class:"token punctuation"},"."),t("url "),n("span",{class:"token operator"},"&&"),t(),n("span",{class:"token operator"},"!"),t("file"),n("span",{class:"token punctuation"},"."),t("preview"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        file`),n("span",{class:"token punctuation"},"."),t("preview "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"await"),t(),n("span",{class:"token function"},"getBase64"),n("span",{class:"token punctuation"},"("),t("file"),n("span",{class:"token punctuation"},"."),t("originFileObj"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`

      previewImage`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" file"),n("span",{class:"token punctuation"},"."),t("url "),n("span",{class:"token operator"},"||"),t(" file"),n("span",{class:"token punctuation"},"."),t("preview"),n("span",{class:"token punctuation"},";"),t(`
      previewVisible`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`
      previewTitle`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" file"),n("span",{class:"token punctuation"},"."),t("name "),n("span",{class:"token operator"},"||"),t(" file"),n("span",{class:"token punctuation"},"."),t("url"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"substring"),n("span",{class:"token punctuation"},"("),t("file"),n("span",{class:"token punctuation"},"."),t("url"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"lastIndexOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'/'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"+"),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      previewVisible`),n("span",{class:"token punctuation"},","),t(`
      previewImage`),n("span",{class:"token punctuation"},","),t(`
      fileList`),n("span",{class:"token punctuation"},","),t(`
      handleCancel`),n("span",{class:"token punctuation"},","),t(`
      handlePreview`),n("span",{class:"token punctuation"},","),t(`
      previewTitle`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token comment"},"/* you can make up upload button and sample style by using stylesheets */"),t(`
`),n("span",{class:"token selector"},".ant-upload-select-picture-card i"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"font-size"),n("span",{class:"token punctuation"},":"),t(" 32px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #999"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`

`),n("span",{class:"token selector"},".ant-upload-select-picture-card .ant-upload-text"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"color"),n("span",{class:"token punctuation"},":"),t(" #666"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function Ma(a,s,o,e,c,p){const l=g("IconBytedPlus"),u=g("a-upload"),i=g("a-modal"),r=g("demo-box");return y(),B(r,{jsfiddle:{us:"After users upload picture, the thumbnail will be shown in list. The upload button will disappear when count meets limitation.",cn:"\u7528\u6237\u53EF\u4EE5\u4E0A\u4F20\u56FE\u7247\u5E76\u5728\u5217\u8868\u4E2D\u663E\u793A\u7F29\u7565\u56FE\u3002\u5F53\u4E0A\u4F20\u7167\u7247\u6570\u5230\u8FBE\u9650\u5236\u540E\uFF0C\u4E0A\u4F20\u6309\u94AE\u6D88\u5931\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u7528\u6237\u53EF\u4EE5\u4E0A\u4F20\u56FE\u7247\u5E76\u5728\u5217\u8868\u4E2D\u663E\u793A\u7F29\u7565\u56FE\u3002\u5F53\u4E0A\u4F20\u7167\u7247\u6570\u5230\u8FBE\u9650\u5236\u540E\uFF0C\u4E0A\u4F20\u6309\u94AE\u6D88\u5931\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>After users upload picture, the thumbnail will be shown in list. The upload button will disappear when count meets limitation.</p>
`,order:3,title:{"zh-CN":"\u7167\u7247\u5899","en-US":"Pictures Wall"},relativePath:"components/upload/demo/picture-card.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXYgY2xhc3M9ImNsZWFyZml4Ij4KICAgIDxhLXVwbG9hZAogICAgICB2LW1vZGVsOmZpbGUtbGlzdD0iZmlsZUxpc3QiCiAgICAgIGFjdGlvbj0iaHR0cHM6Ly93d3cubW9ja3kuaW8vdjIvNWNjODAxOWQzMDAwMDA5ODBhMDU1ZTc2IgogICAgICBsaXN0LXR5cGU9InBpY3R1cmUtY2FyZCIKICAgICAgQHByZXZpZXc9ImhhbmRsZVByZXZpZXciCiAgICA+CiAgICAgIDxkaXYgdi1pZj0iZmlsZUxpc3QubGVuZ3RoIDwgOCI+CiAgICAgICAgPEljb25CeXRlZFBsdXMgLz4KICAgICAgICA8ZGl2IHN0eWxlPSJtYXJnaW4tdG9wOiA4cHgiPlVwbG9hZDwvZGl2PgogICAgICA8L2Rpdj4KICAgIDwvYS11cGxvYWQ+CiAgICA8YS1tb2RhbCA6dmlzaWJsZT0icHJldmlld1Zpc2libGUiIDp0aXRsZT0icHJldmlld1RpdGxlIiA6Zm9vdGVyPSJudWxsIiBAY2FuY2VsPSJoYW5kbGVDYW5jZWwiPgogICAgICA8aW1nIGFsdD0iZXhhbXBsZSIgc3R5bGU9IndpZHRoOiAxMDAlIiA6c3JjPSJwcmV2aWV3SW1hZ2UiIC8+CiAgICA8L2EtbW9kYWw+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgdHlwZSB7IFVwbG9hZFByb3BzIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwppbXBvcnQgSWNvbkJ5dGVkUGx1cyBmcm9tICdAZmU2L2ljb24tdnVlL2xpYi9pY29ucy9ieXRlZC1wbHVzJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwoKZnVuY3Rpb24gZ2V0QmFzZTY0KGZpbGU6IEZpbGUpIHsKICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gewogICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTsKICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpOwogICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUocmVhZGVyLnJlc3VsdCk7CiAgICByZWFkZXIub25lcnJvciA9IChlcnJvcikgPT4gcmVqZWN0KGVycm9yKTsKICB9KTsKfQoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBjb21wb25lbnRzOiB7CiAgICBJY29uQnl0ZWRQbHVzLAogIH0sCiAgc2V0dXAoKSB7CiAgICBjb25zdCBwcmV2aWV3VmlzaWJsZSA9IHJlZihmYWxzZSk7CiAgICBjb25zdCBwcmV2aWV3SW1hZ2UgPSByZWYoJycpOwogICAgY29uc3QgcHJldmlld1RpdGxlID0gcmVmKCcnKTsKCiAgICBjb25zdCBmaWxlTGlzdCA9IHJlZjxVcGxvYWRQcm9wc1snZmlsZUxpc3QnXT4oWwogICAgICB7CiAgICAgICAgdWlkOiAnLTEnLAogICAgICAgIG5hbWU6ICdpbWFnZS5wbmcnLAogICAgICAgIHN0YXR1czogJ2RvbmUnLAogICAgICAgIHVybDogJ2h0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9qa2pna0VmdnBVUFZ5UmpVSW1uaVZzbFpmV1BuSnV1Wi5wbmcnLAogICAgICB9LAogICAgICB7CiAgICAgICAgdWlkOiAnLTInLAogICAgICAgIG5hbWU6ICdpbWFnZS5wbmcnLAogICAgICAgIHN0YXR1czogJ2RvbmUnLAogICAgICAgIHVybDogJ2h0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9qa2pna0VmdnBVUFZ5UmpVSW1uaVZzbFpmV1BuSnV1Wi5wbmcnLAogICAgICB9LAogICAgICB7CiAgICAgICAgdWlkOiAnLTMnLAogICAgICAgIG5hbWU6ICdpbWFnZS5wbmcnLAogICAgICAgIHN0YXR1czogJ2RvbmUnLAogICAgICAgIHVybDogJ2h0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9qa2pna0VmdnBVUFZ5UmpVSW1uaVZzbFpmV1BuSnV1Wi5wbmcnLAogICAgICB9LAogICAgICB7CiAgICAgICAgdWlkOiAnLTQnLAogICAgICAgIG5hbWU6ICdpbWFnZS5wbmcnLAogICAgICAgIHN0YXR1czogJ2RvbmUnLAogICAgICAgIHVybDogJ2h0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9qa2pna0VmdnBVUFZ5UmpVSW1uaVZzbFpmV1BuSnV1Wi5wbmcnLAogICAgICB9LAogICAgICB7CiAgICAgICAgdWlkOiAnLXh4eCcsCiAgICAgICAgcGVyY2VudDogNTAsCiAgICAgICAgbmFtZTogJ2ltYWdlLnBuZycsCiAgICAgICAgc3RhdHVzOiAndXBsb2FkaW5nJywKICAgICAgICB1cmw6ICdodHRwczovL3pvcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvamtqZ2tFZnZwVVBWeVJqVUltbmlWc2xaZldQbkp1dVoucG5nJywKICAgICAgfSwKICAgICAgewogICAgICAgIHVpZDogJy01JywKICAgICAgICBuYW1lOiAnaW1hZ2UucG5nJywKICAgICAgICBzdGF0dXM6ICdlcnJvcicsCiAgICAgIH0sCiAgICBdKTsKCiAgICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7CiAgICAgIHByZXZpZXdWaXNpYmxlLnZhbHVlID0gZmFsc2U7CiAgICAgIHByZXZpZXdUaXRsZS52YWx1ZSA9ICcnOwogICAgfTsKICAgIGNvbnN0IGhhbmRsZVByZXZpZXcgPSBhc3luYyAoZmlsZTogVXBsb2FkUHJvcHNbJ2ZpbGVMaXN0J11bbnVtYmVyXSkgPT4gewogICAgICBpZiAoIWZpbGUudXJsICYmICFmaWxlLnByZXZpZXcpIHsKICAgICAgICBmaWxlLnByZXZpZXcgPSAoYXdhaXQgZ2V0QmFzZTY0KGZpbGUub3JpZ2luRmlsZU9iaikpIGFzIHN0cmluZzsKICAgICAgfQogICAgICBwcmV2aWV3SW1hZ2UudmFsdWUgPSBmaWxlLnVybCB8fCBmaWxlLnByZXZpZXc7CiAgICAgIHByZXZpZXdWaXNpYmxlLnZhbHVlID0gdHJ1ZTsKICAgICAgcHJldmlld1RpdGxlLnZhbHVlID0gZmlsZS5uYW1lIHx8IGZpbGUudXJsLnN1YnN0cmluZyhmaWxlLnVybC5sYXN0SW5kZXhPZignLycpICsgMSk7CiAgICB9OwoKICAgIHJldHVybiB7CiAgICAgIHByZXZpZXdWaXNpYmxlLAogICAgICBwcmV2aWV3SW1hZ2UsCiAgICAgIGZpbGVMaXN0LAogICAgICBoYW5kbGVDYW5jZWwsCiAgICAgIGhhbmRsZVByZXZpZXcsCiAgICAgIHByZXZpZXdUaXRsZSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0Pgo8c3R5bGU+Ci8qIHlvdSBjYW4gbWFrZSB1cCB1cGxvYWQgYnV0dG9uIGFuZCBzYW1wbGUgc3R5bGUgYnkgdXNpbmcgc3R5bGVzaGVldHMgKi8KLmFudC11cGxvYWQtc2VsZWN0LXBpY3R1cmUtY2FyZCBpIHsKICBmb250LXNpemU6IDMycHg7CiAgY29sb3I6ICM5OTk7Cn0KCi5hbnQtdXBsb2FkLXNlbGVjdC1waWN0dXJlLWNhcmQgLmFudC11cGxvYWQtdGV4dCB7CiAgbWFyZ2luLXRvcDogOHB4OwogIGNvbG9yOiAjNjY2Owp9Cjwvc3R5bGU+Cg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXYgY2xhc3M9ImNsZWFyZml4Ij4KICAgIDxhLXVwbG9hZAogICAgICB2LW1vZGVsOmZpbGUtbGlzdD0iZmlsZUxpc3QiCiAgICAgIGFjdGlvbj0iaHR0cHM6Ly93d3cubW9ja3kuaW8vdjIvNWNjODAxOWQzMDAwMDA5ODBhMDU1ZTc2IgogICAgICBsaXN0LXR5cGU9InBpY3R1cmUtY2FyZCIKICAgICAgQHByZXZpZXc9ImhhbmRsZVByZXZpZXciCiAgICA+CiAgICAgIDxkaXYgdi1pZj0iZmlsZUxpc3QubGVuZ3RoIDwgOCI+CiAgICAgICAgPEljb25CeXRlZFBsdXMgLz4KICAgICAgICA8ZGl2IHN0eWxlPSJtYXJnaW4tdG9wOiA4cHgiPlVwbG9hZDwvZGl2PgogICAgICA8L2Rpdj4KICAgIDwvYS11cGxvYWQ+CiAgICA8YS1tb2RhbCA6dmlzaWJsZT0icHJldmlld1Zpc2libGUiIDp0aXRsZT0icHJldmlld1RpdGxlIiA6Zm9vdGVyPSJudWxsIiBAY2FuY2VsPSJoYW5kbGVDYW5jZWwiPgogICAgICA8aW1nIGFsdD0iZXhhbXBsZSIgc3R5bGU9IndpZHRoOiAxMDAlIiA6c3JjPSJwcmV2aWV3SW1hZ2UiIC8+CiAgICA8L2EtbW9kYWw+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCBJY29uQnl0ZWRQbHVzIGZyb20gJ0BmZTYvaWNvbi12dWUvbGliL2ljb25zL2J5dGVkLXBsdXMnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CgpmdW5jdGlvbiBnZXRCYXNlNjQoZmlsZSkgewogIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7CiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpOwogICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7CgogICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHJlc29sdmUocmVhZGVyLnJlc3VsdCk7CgogICAgcmVhZGVyLm9uZXJyb3IgPSBlcnJvciA9PiByZWplY3QoZXJyb3IpOwogIH0pOwp9CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIEljb25CeXRlZFBsdXMsCiAgfSwKCiAgc2V0dXAoKSB7CiAgICBjb25zdCBwcmV2aWV3VmlzaWJsZSA9IHJlZihmYWxzZSk7CiAgICBjb25zdCBwcmV2aWV3SW1hZ2UgPSByZWYoJycpOwogICAgY29uc3QgcHJldmlld1RpdGxlID0gcmVmKCcnKTsKICAgIGNvbnN0IGZpbGVMaXN0ID0gcmVmKFt7CiAgICAgIHVpZDogJy0xJywKICAgICAgbmFtZTogJ2ltYWdlLnBuZycsCiAgICAgIHN0YXR1czogJ2RvbmUnLAogICAgICB1cmw6ICdodHRwczovL3pvcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvamtqZ2tFZnZwVVBWeVJqVUltbmlWc2xaZldQbkp1dVoucG5nJywKICAgIH0sIHsKICAgICAgdWlkOiAnLTInLAogICAgICBuYW1lOiAnaW1hZ2UucG5nJywKICAgICAgc3RhdHVzOiAnZG9uZScsCiAgICAgIHVybDogJ2h0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9qa2pna0VmdnBVUFZ5UmpVSW1uaVZzbFpmV1BuSnV1Wi5wbmcnLAogICAgfSwgewogICAgICB1aWQ6ICctMycsCiAgICAgIG5hbWU6ICdpbWFnZS5wbmcnLAogICAgICBzdGF0dXM6ICdkb25lJywKICAgICAgdXJsOiAnaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL2pramdrRWZ2cFVQVnlSalVJbW5pVnNsWmZXUG5KdXVaLnBuZycsCiAgICB9LCB7CiAgICAgIHVpZDogJy00JywKICAgICAgbmFtZTogJ2ltYWdlLnBuZycsCiAgICAgIHN0YXR1czogJ2RvbmUnLAogICAgICB1cmw6ICdodHRwczovL3pvcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvamtqZ2tFZnZwVVBWeVJqVUltbmlWc2xaZldQbkp1dVoucG5nJywKICAgIH0sIHsKICAgICAgdWlkOiAnLXh4eCcsCiAgICAgIHBlcmNlbnQ6IDUwLAogICAgICBuYW1lOiAnaW1hZ2UucG5nJywKICAgICAgc3RhdHVzOiAndXBsb2FkaW5nJywKICAgICAgdXJsOiAnaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL2pramdrRWZ2cFVQVnlSalVJbW5pVnNsWmZXUG5KdXVaLnBuZycsCiAgICB9LCB7CiAgICAgIHVpZDogJy01JywKICAgICAgbmFtZTogJ2ltYWdlLnBuZycsCiAgICAgIHN0YXR1czogJ2Vycm9yJywKICAgIH1dKTsKCiAgICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7CiAgICAgIHByZXZpZXdWaXNpYmxlLnZhbHVlID0gZmFsc2U7CiAgICAgIHByZXZpZXdUaXRsZS52YWx1ZSA9ICcnOwogICAgfTsKCiAgICBjb25zdCBoYW5kbGVQcmV2aWV3ID0gYXN5bmMgZmlsZSA9PiB7CiAgICAgIGlmICghZmlsZS51cmwgJiYgIWZpbGUucHJldmlldykgewogICAgICAgIGZpbGUucHJldmlldyA9IGF3YWl0IGdldEJhc2U2NChmaWxlLm9yaWdpbkZpbGVPYmopOwogICAgICB9CgogICAgICBwcmV2aWV3SW1hZ2UudmFsdWUgPSBmaWxlLnVybCB8fCBmaWxlLnByZXZpZXc7CiAgICAgIHByZXZpZXdWaXNpYmxlLnZhbHVlID0gdHJ1ZTsKICAgICAgcHJldmlld1RpdGxlLnZhbHVlID0gZmlsZS5uYW1lIHx8IGZpbGUudXJsLnN1YnN0cmluZyhmaWxlLnVybC5sYXN0SW5kZXhPZignLycpICsgMSk7CiAgICB9OwoKICAgIHJldHVybiB7CiAgICAgIHByZXZpZXdWaXNpYmxlLAogICAgICBwcmV2aWV3SW1hZ2UsCiAgICAgIGZpbGVMaXN0LAogICAgICBoYW5kbGVDYW5jZWwsCiAgICAgIGhhbmRsZVByZXZpZXcsCiAgICAgIHByZXZpZXdUaXRsZSwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4KPHN0eWxlPgovKiB5b3UgY2FuIG1ha2UgdXAgdXBsb2FkIGJ1dHRvbiBhbmQgc2FtcGxlIHN0eWxlIGJ5IHVzaW5nIHN0eWxlc2hlZXRzICovCi5hbnQtdXBsb2FkLXNlbGVjdC1waWN0dXJlLWNhcmQgaSB7CiAgZm9udC1zaXplOiAzMnB4OwogIGNvbG9yOiAjOTk5Owp9CgouYW50LXVwbG9hZC1zZWxlY3QtcGljdHVyZS1jYXJkIC5hbnQtdXBsb2FkLXRleHQgewogIG1hcmdpbi10b3A6IDhweDsKICBjb2xvcjogIzY2NjsKfQo8L3N0eWxlPg=="}},{default:k(()=>[n("div",Da,[m(u,{"file-list":a.fileList,"onUpdate:file-list":s[0]||(s[0]=d=>a.fileList=d),action:"https://www.mocky.io/v2/5cc8019d300000980a055e76","list-type":"picture-card",onPreview:a.handlePreview},{default:k(()=>[a.fileList.length<8?(y(),Cn("div",Ea,[m(l),Oa])):Ca("",!0)]),_:1},8,["file-list","onPreview"]),m(i,{visible:a.previewVisible,title:a.previewTitle,footer:null,onCancel:a.handleCancel},{default:k(()=>[n("img",{alt:"example",style:{width:"100%"},src:a.previewImage},null,8,Qa)]),_:1},8,["visible","title","onCancel"])])]),htmlCode:k(()=>[_a]),jsVersionHtml:k(()=>[Ta]),_:1},8,["jsfiddle"])}var qa=G(Ka,[["render",Ma]]);const $a=L({components:{IconBytedUpload:S},setup(){const a=w([{uid:"-1",name:"xxx.png",status:"done",url:"http://www.baidu.com/xxx.png"}]);return{fileList:a,handleChange:o=>{let e=[...o.fileList];e=e.slice(-2),e=e.map(c=>(c.response&&(c.url=c.response.url),c)),a.value=e}}}}),ns=t(" Upload "),ts=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-upload")]),t(`
    `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":multiple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":file-list"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileList"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleChange"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUpload")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      Upload
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-upload")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" UploadChangeParam"),n("span",{class:"token punctuation"},","),t(" UploadProps "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedUpload "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-upload'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedUpload`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" fileList "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("UploadProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'fileList'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'-1'"),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'xxx.png'"),n("span",{class:"token punctuation"},","),t(`
        status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),t(`
        url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'http://www.baidu.com/xxx.png'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("info"),n("span",{class:"token operator"},":"),t(" UploadChangeParam")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"let"),t(" resFileList "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),t("info"),n("span",{class:"token punctuation"},"."),t("fileList"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`

      `),n("span",{class:"token comment"},"// 1. Limit the number of uploaded files"),t(`
      `),n("span",{class:"token comment"},"//    Only to show two recent uploaded files, and old ones will be replaced by the new"),t(`
      resFileList `),n("span",{class:"token operator"},"="),t(" resFileList"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

      `),n("span",{class:"token comment"},"// 2. read from response and show file link"),t(`
      resFileList `),n("span",{class:"token operator"},"="),t(" resFileList"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"file"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("file"),n("span",{class:"token punctuation"},"."),t("response"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token comment"},"// Component will show file.url as link"),t(`
          file`),n("span",{class:"token punctuation"},"."),t("url "),n("span",{class:"token operator"},"="),t(" file"),n("span",{class:"token punctuation"},"."),t("response"),n("span",{class:"token punctuation"},"."),t("url"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),t(`
        `),n("span",{class:"token keyword"},"return"),t(" file"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

      fileList`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" resFileList"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      fileList`),n("span",{class:"token punctuation"},","),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),as=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-upload")]),t(`
    `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":multiple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":file-list"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileList"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleChange"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUpload")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      Upload
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-upload")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedUpload "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-upload'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedUpload`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" fileList "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
      uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'-1'"),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'xxx.png'"),n("span",{class:"token punctuation"},","),t(`
      status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),t(`
      url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'http://www.baidu.com/xxx.png'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"info"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"let"),t(" resFileList "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),t("info"),n("span",{class:"token punctuation"},"."),t("fileList"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// 1. Limit the number of uploaded files"),t(`
      `),n("span",{class:"token comment"},"//    Only to show two recent uploaded files, and old ones will be replaced by the new"),t(`

      resFileList `),n("span",{class:"token operator"},"="),t(" resFileList"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// 2. read from response and show file link"),t(`

      resFileList `),n("span",{class:"token operator"},"="),t(" resFileList"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"file"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("file"),n("span",{class:"token punctuation"},"."),t("response"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token comment"},"// Component will show file.url as link"),t(`
          file`),n("span",{class:"token punctuation"},"."),t("url "),n("span",{class:"token operator"},"="),t(" file"),n("span",{class:"token punctuation"},"."),t("response"),n("span",{class:"token punctuation"},"."),t("url"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),t(`

        `),n("span",{class:"token keyword"},"return"),t(" file"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      fileList`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" resFileList"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      fileList`),n("span",{class:"token punctuation"},","),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function ss(a,s,o,e,c,p){const l=g("IconBytedUpload"),u=g("a-button"),i=g("a-upload"),r=g("demo-box");return y(),B(r,{jsfiddle:{us:"You can gain full control over filelist by configuring `fileList`. You can accomplish all kinds of customed functions. The following shows two circumstances:",cn:"\u4F7F\u7528 `fileList` \u5BF9\u5217\u8868\u8FDB\u884C\u5B8C\u5168\u63A7\u5236\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u5404\u79CD\u81EA\u5B9A\u4E49\u529F\u80FD\uFF0C\u4EE5\u4E0B\u6F14\u793A\u4E8C\u79CD\u60C5\u51B5\uFF1A",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4F7F\u7528 <code>fileList</code> \u5BF9\u5217\u8868\u8FDB\u884C\u5B8C\u5168\u63A7\u5236\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u5404\u79CD\u81EA\u5B9A\u4E49\u529F\u80FD\uFF0C\u4EE5\u4E0B\u6F14\u793A\u4E8C\u79CD\u60C5\u51B5\uFF1A</p>
<ol>
<li>
<p>\u4E0A\u4F20\u5217\u8868\u6570\u91CF\u7684\u9650\u5236\u3002</p>
</li>
<li>
<p>\u8BFB\u53D6\u8FDC\u7A0B\u8DEF\u5F84\u5E76\u663E\u793A\u94FE\u63A5\u3002</p>
</li>
</ol>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>You can gain full control over filelist by configuring <code>fileList</code>. You can accomplish all kinds of customed functions. The following shows two circumstances:</p>
<ol>
<li>
<p>limit the number of uploaded files.</p>
</li>
<li>
<p>read from response and show file link.</p>
</li>
</ol>
`,order:4,title:{"zh-CN":"\u5B8C\u5168\u63A7\u5236\u7684\u4E0A\u4F20\u5217\u8868","en-US":"Complete control over file list"},relativePath:"components/upload/demo/fileList.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZAogICAgYWN0aW9uPSJodHRwczovL3d3dy5tb2NreS5pby92Mi81Y2M4MDE5ZDMwMDAwMDk4MGEwNTVlNzYiCiAgICA6bXVsdGlwbGU9InRydWUiCiAgICA6ZmlsZS1saXN0PSJmaWxlTGlzdCIKICAgIEBjaGFuZ2U9ImhhbmRsZUNoYW5nZSIKICA+CiAgICA8YS1idXR0b24+CiAgICAgIDxJY29uQnl0ZWRVcGxvYWQgLz4KICAgICAgVXBsb2FkCiAgICA8L2EtYnV0dG9uPgogIDwvYS11cGxvYWQ+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgdHlwZSB7IFVwbG9hZENoYW5nZVBhcmFtLCBVcGxvYWRQcm9wcyB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKaW1wb3J0IEljb25CeXRlZFVwbG9hZCBmcm9tICdAZmU2L2ljb24tdnVlL2xpYi9pY29ucy9ieXRlZC11cGxvYWQnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIEljb25CeXRlZFVwbG9hZCwKICB9LAogIHNldHVwKCkgewogICAgY29uc3QgZmlsZUxpc3QgPSByZWY8VXBsb2FkUHJvcHNbJ2ZpbGVMaXN0J10+KFsKICAgICAgewogICAgICAgIHVpZDogJy0xJywKICAgICAgICBuYW1lOiAneHh4LnBuZycsCiAgICAgICAgc3RhdHVzOiAnZG9uZScsCiAgICAgICAgdXJsOiAnaHR0cDovL3d3dy5iYWlkdS5jb20veHh4LnBuZycsCiAgICAgIH0sCiAgICBdKTsKICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChpbmZvOiBVcGxvYWRDaGFuZ2VQYXJhbSkgPT4gewogICAgICBsZXQgcmVzRmlsZUxpc3QgPSBbLi4uaW5mby5maWxlTGlzdF07CgogICAgICAvLyAxLiBMaW1pdCB0aGUgbnVtYmVyIG9mIHVwbG9hZGVkIGZpbGVzCiAgICAgIC8vICAgIE9ubHkgdG8gc2hvdyB0d28gcmVjZW50IHVwbG9hZGVkIGZpbGVzLCBhbmQgb2xkIG9uZXMgd2lsbCBiZSByZXBsYWNlZCBieSB0aGUgbmV3CiAgICAgIHJlc0ZpbGVMaXN0ID0gcmVzRmlsZUxpc3Quc2xpY2UoLTIpOwoKICAgICAgLy8gMi4gcmVhZCBmcm9tIHJlc3BvbnNlIGFuZCBzaG93IGZpbGUgbGluawogICAgICByZXNGaWxlTGlzdCA9IHJlc0ZpbGVMaXN0Lm1hcCgoZmlsZSkgPT4gewogICAgICAgIGlmIChmaWxlLnJlc3BvbnNlKSB7CiAgICAgICAgICAvLyBDb21wb25lbnQgd2lsbCBzaG93IGZpbGUudXJsIGFzIGxpbmsKICAgICAgICAgIGZpbGUudXJsID0gZmlsZS5yZXNwb25zZS51cmw7CiAgICAgICAgfQogICAgICAgIHJldHVybiBmaWxlOwogICAgICB9KTsKCiAgICAgIGZpbGVMaXN0LnZhbHVlID0gcmVzRmlsZUxpc3Q7CiAgICB9OwogICAgcmV0dXJuIHsKICAgICAgZmlsZUxpc3QsCiAgICAgIGhhbmRsZUNoYW5nZSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZAogICAgYWN0aW9uPSJodHRwczovL3d3dy5tb2NreS5pby92Mi81Y2M4MDE5ZDMwMDAwMDk4MGEwNTVlNzYiCiAgICA6bXVsdGlwbGU9InRydWUiCiAgICA6ZmlsZS1saXN0PSJmaWxlTGlzdCIKICAgIEBjaGFuZ2U9ImhhbmRsZUNoYW5nZSIKICA+CiAgICA8YS1idXR0b24+CiAgICAgIDxJY29uQnl0ZWRVcGxvYWQgLz4KICAgICAgVXBsb2FkCiAgICA8L2EtYnV0dG9uPgogIDwvYS11cGxvYWQ+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCBJY29uQnl0ZWRVcGxvYWQgZnJvbSAnQGZlNi9pY29uLXZ1ZS9saWIvaWNvbnMvYnl0ZWQtdXBsb2FkJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIEljb25CeXRlZFVwbG9hZCwKICB9LAoKICBzZXR1cCgpIHsKICAgIGNvbnN0IGZpbGVMaXN0ID0gcmVmKFt7CiAgICAgIHVpZDogJy0xJywKICAgICAgbmFtZTogJ3h4eC5wbmcnLAogICAgICBzdGF0dXM6ICdkb25lJywKICAgICAgdXJsOiAnaHR0cDovL3d3dy5iYWlkdS5jb20veHh4LnBuZycsCiAgICB9XSk7CgogICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gaW5mbyA9PiB7CiAgICAgIGxldCByZXNGaWxlTGlzdCA9IFsuLi5pbmZvLmZpbGVMaXN0XTsgLy8gMS4gTGltaXQgdGhlIG51bWJlciBvZiB1cGxvYWRlZCBmaWxlcwogICAgICAvLyAgICBPbmx5IHRvIHNob3cgdHdvIHJlY2VudCB1cGxvYWRlZCBmaWxlcywgYW5kIG9sZCBvbmVzIHdpbGwgYmUgcmVwbGFjZWQgYnkgdGhlIG5ldwoKICAgICAgcmVzRmlsZUxpc3QgPSByZXNGaWxlTGlzdC5zbGljZSgtMik7IC8vIDIuIHJlYWQgZnJvbSByZXNwb25zZSBhbmQgc2hvdyBmaWxlIGxpbmsKCiAgICAgIHJlc0ZpbGVMaXN0ID0gcmVzRmlsZUxpc3QubWFwKGZpbGUgPT4gewogICAgICAgIGlmIChmaWxlLnJlc3BvbnNlKSB7CiAgICAgICAgICAvLyBDb21wb25lbnQgd2lsbCBzaG93IGZpbGUudXJsIGFzIGxpbmsKICAgICAgICAgIGZpbGUudXJsID0gZmlsZS5yZXNwb25zZS51cmw7CiAgICAgICAgfQoKICAgICAgICByZXR1cm4gZmlsZTsKICAgICAgfSk7CiAgICAgIGZpbGVMaXN0LnZhbHVlID0gcmVzRmlsZUxpc3Q7CiAgICB9OwoKICAgIHJldHVybiB7CiAgICAgIGZpbGVMaXN0LAogICAgICBoYW5kbGVDaGFuZ2UsCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:k(()=>[m(i,{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",multiple:!0,"file-list":a.fileList,onChange:a.handleChange},{default:k(()=>[m(u,null,{default:k(()=>[m(l),ns]),_:1})]),_:1},8,["file-list","onChange"])]),htmlCode:k(()=>[ts]),jsVersionHtml:k(()=>[as]),_:1},8,["jsfiddle"])}var os=G($a,[["render",ss]]);const es=L({components:{IconBytedUpload:S},setup(){return{handleChange:s=>{const o=s.file.status;o!=="uploading"&&console.log(s.file,s.fileList),o==="done"?x.success(`${s.file.name} file uploaded successfully.`):o==="error"&&x.error(`${s.file.name} file upload failed.`)},fileList:w([]),handleDrop:s=>{console.log(s)}}}}),cs={class:"ant-upload-drag-icon"},ps=n("p",{class:"ant-upload-text"},"Click or drag file to this area to upload",-1),ls=n("p",{class:"ant-upload-hint"}," Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files ",-1),us=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-upload-dragger")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("fileList")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileList"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("file"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":multiple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleChange"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@drop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleDrop"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ant-upload-drag-icon"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUpload")]),t(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("["),n("span",{class:"token punctuation"},"'"),t("#1996f9"),n("span",{class:"token punctuation"},"'"),t("]"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ant-upload-text"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Click or drag file to this area to upload"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ant-upload-hint"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      Support for a single or bulk upload. Strictly prohibit from uploading company data or other
      band files
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-upload-dragger")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" UploadChangeParam "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedUpload "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-upload'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" message "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedUpload`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("info"),n("span",{class:"token operator"},":"),t(" UploadChangeParam")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" status "),n("span",{class:"token operator"},"="),t(" info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("status"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("status "),n("span",{class:"token operator"},"!=="),t(),n("span",{class:"token string"},"'uploading'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},","),t(" info"),n("span",{class:"token punctuation"},"."),t("fileList"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("status "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," file uploaded successfully."),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("status "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," file upload failed."),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
      fileList`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token function-variable function"},"handleDrop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("e"),n("span",{class:"token operator"},":"),t(" DragEvent")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),is=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-upload-dragger")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("fileList")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileList"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("file"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":multiple"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("true"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleChange"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@drop"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleDrop"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ant-upload-drag-icon"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUpload")]),t(),n("span",{class:"token attr-name"},":colors"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("["),n("span",{class:"token punctuation"},"'"),t("#1996f9"),n("span",{class:"token punctuation"},"'"),t("]"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ant-upload-text"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("Click or drag file to this area to upload"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("p")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ant-upload-hint"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      Support for a single or bulk upload. Strictly prohibit from uploading company data or other
      band files
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("p")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-upload-dragger")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedUpload "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-upload'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" message "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedUpload`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"info"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" status "),n("span",{class:"token operator"},"="),t(" info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("status"),n("span",{class:"token punctuation"},";"),t(`

      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("status "),n("span",{class:"token operator"},"!=="),t(),n("span",{class:"token string"},"'uploading'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},","),t(" info"),n("span",{class:"token punctuation"},"."),t("fileList"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`

      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("status "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," file uploaded successfully."),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("status "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," file upload failed."),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
      fileList`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token function-variable function"},"handleDrop"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token parameter"},"e"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("e"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function rs(a,s,o,e,c,p){const l=g("IconBytedUpload"),u=g("a-upload-dragger"),i=g("demo-box");return y(),B(i,{jsfiddle:{us:"You can drag files to a specific area, to upload. Alternatively, you can also upload by selecting.",cn:"\u628A\u6587\u4EF6\u62D6\u5165\u6307\u5B9A\u533A\u57DF\uFF0C\u5B8C\u6210\u4E0A\u4F20\uFF0C\u540C\u6837\u652F\u6301\u70B9\u51FB\u4E0A\u4F20\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u628A\u6587\u4EF6\u62D6\u5165\u6307\u5B9A\u533A\u57DF\uFF0C\u5B8C\u6210\u4E0A\u4F20\uFF0C\u540C\u6837\u652F\u6301\u70B9\u51FB\u4E0A\u4F20\u3002</p>
<p>\u8BBE\u7F6E <code>multiple</code> \u540E\uFF0C\u53EF\u4EE5\u4E00\u6B21\u4E0A\u4F20\u591A\u4E2A\u6587\u4EF6\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>You can drag files to a specific area, to upload. Alternatively, you can also upload by selecting.</p>
<p>We can upload serveral files at once by giving the input the <code>multiple</code> attribute.</p>
`,order:5,title:{"zh-CN":"\u62D6\u62FD\u4E0A\u4F20","en-US":"Drag and Drop"},relativePath:"components/upload/demo/drag.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZC1kcmFnZ2VyCiAgICB2LW1vZGVsOmZpbGVMaXN0PSJmaWxlTGlzdCIKICAgIG5hbWU9ImZpbGUiCiAgICA6bXVsdGlwbGU9InRydWUiCiAgICBhY3Rpb249Imh0dHBzOi8vd3d3Lm1vY2t5LmlvL3YyLzVjYzgwMTlkMzAwMDAwOTgwYTA1NWU3NiIKICAgIEBjaGFuZ2U9ImhhbmRsZUNoYW5nZSIKICAgIEBkcm9wPSJoYW5kbGVEcm9wIgogID4KICAgIDxwIGNsYXNzPSJhbnQtdXBsb2FkLWRyYWctaWNvbiI+CiAgICAgIDxJY29uQnl0ZWRVcGxvYWQgOmNvbG9ycz0iWycjMTk5NmY5J10iIC8+CiAgICA8L3A+CiAgICA8cCBjbGFzcz0iYW50LXVwbG9hZC10ZXh0Ij5DbGljayBvciBkcmFnIGZpbGUgdG8gdGhpcyBhcmVhIHRvIHVwbG9hZDwvcD4KICAgIDxwIGNsYXNzPSJhbnQtdXBsb2FkLWhpbnQiPgogICAgICBTdXBwb3J0IGZvciBhIHNpbmdsZSBvciBidWxrIHVwbG9hZC4gU3RyaWN0bHkgcHJvaGliaXQgZnJvbSB1cGxvYWRpbmcgY29tcGFueSBkYXRhIG9yIG90aGVyCiAgICAgIGJhbmQgZmlsZXMKICAgIDwvcD4KICA8L2EtdXBsb2FkLWRyYWdnZXI+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgdHlwZSB7IFVwbG9hZENoYW5nZVBhcmFtIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmltcG9ydCBJY29uQnl0ZWRVcGxvYWQgZnJvbSAnQGZlNi9pY29uLXZ1ZS9saWIvaWNvbnMvYnl0ZWQtdXBsb2FkJzsKaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgSWNvbkJ5dGVkVXBsb2FkLAogIH0sCiAgc2V0dXAoKSB7CiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoaW5mbzogVXBsb2FkQ2hhbmdlUGFyYW0pID0+IHsKICAgICAgY29uc3Qgc3RhdHVzID0gaW5mby5maWxlLnN0YXR1czsKICAgICAgaWYgKHN0YXR1cyAhPT0gJ3VwbG9hZGluZycpIHsKICAgICAgICBjb25zb2xlLmxvZyhpbmZvLmZpbGUsIGluZm8uZmlsZUxpc3QpOwogICAgICB9CiAgICAgIGlmIChzdGF0dXMgPT09ICdkb25lJykgewogICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhgJHtpbmZvLmZpbGUubmFtZX0gZmlsZSB1cGxvYWRlZCBzdWNjZXNzZnVsbHkuYCk7CiAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSAnZXJyb3InKSB7CiAgICAgICAgbWVzc2FnZS5lcnJvcihgJHtpbmZvLmZpbGUubmFtZX0gZmlsZSB1cGxvYWQgZmFpbGVkLmApOwogICAgICB9CiAgICB9OwogICAgcmV0dXJuIHsKICAgICAgaGFuZGxlQ2hhbmdlLAogICAgICBmaWxlTGlzdDogcmVmKFtdKSwKICAgICAgaGFuZGxlRHJvcDogKGU6IERyYWdFdmVudCkgPT4gewogICAgICAgIGNvbnNvbGUubG9nKGUpOwogICAgICB9LAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZC1kcmFnZ2VyCiAgICB2LW1vZGVsOmZpbGVMaXN0PSJmaWxlTGlzdCIKICAgIG5hbWU9ImZpbGUiCiAgICA6bXVsdGlwbGU9InRydWUiCiAgICBhY3Rpb249Imh0dHBzOi8vd3d3Lm1vY2t5LmlvL3YyLzVjYzgwMTlkMzAwMDAwOTgwYTA1NWU3NiIKICAgIEBjaGFuZ2U9ImhhbmRsZUNoYW5nZSIKICAgIEBkcm9wPSJoYW5kbGVEcm9wIgogID4KICAgIDxwIGNsYXNzPSJhbnQtdXBsb2FkLWRyYWctaWNvbiI+CiAgICAgIDxJY29uQnl0ZWRVcGxvYWQgOmNvbG9ycz0iWycjMTk5NmY5J10iIC8+CiAgICA8L3A+CiAgICA8cCBjbGFzcz0iYW50LXVwbG9hZC10ZXh0Ij5DbGljayBvciBkcmFnIGZpbGUgdG8gdGhpcyBhcmVhIHRvIHVwbG9hZDwvcD4KICAgIDxwIGNsYXNzPSJhbnQtdXBsb2FkLWhpbnQiPgogICAgICBTdXBwb3J0IGZvciBhIHNpbmdsZSBvciBidWxrIHVwbG9hZC4gU3RyaWN0bHkgcHJvaGliaXQgZnJvbSB1cGxvYWRpbmcgY29tcGFueSBkYXRhIG9yIG90aGVyCiAgICAgIGJhbmQgZmlsZXMKICAgIDwvcD4KICA8L2EtdXBsb2FkLWRyYWdnZXI+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKaW1wb3J0IEljb25CeXRlZFVwbG9hZCBmcm9tICdAZmU2L2ljb24tdnVlL2xpYi9pY29ucy9ieXRlZC11cGxvYWQnOwppbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIEljb25CeXRlZFVwbG9hZCwKICB9LAoKICBzZXR1cCgpIHsKICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGluZm8gPT4gewogICAgICBjb25zdCBzdGF0dXMgPSBpbmZvLmZpbGUuc3RhdHVzOwoKICAgICAgaWYgKHN0YXR1cyAhPT0gJ3VwbG9hZGluZycpIHsKICAgICAgICBjb25zb2xlLmxvZyhpbmZvLmZpbGUsIGluZm8uZmlsZUxpc3QpOwogICAgICB9CgogICAgICBpZiAoc3RhdHVzID09PSAnZG9uZScpIHsKICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoYCR7aW5mby5maWxlLm5hbWV9IGZpbGUgdXBsb2FkZWQgc3VjY2Vzc2Z1bGx5LmApOwogICAgICB9IGVsc2UgaWYgKHN0YXR1cyA9PT0gJ2Vycm9yJykgewogICAgICAgIG1lc3NhZ2UuZXJyb3IoYCR7aW5mby5maWxlLm5hbWV9IGZpbGUgdXBsb2FkIGZhaWxlZC5gKTsKICAgICAgfQogICAgfTsKCiAgICByZXR1cm4gewogICAgICBoYW5kbGVDaGFuZ2UsCiAgICAgIGZpbGVMaXN0OiByZWYoW10pLAogICAgICBoYW5kbGVEcm9wOiBlID0+IHsKICAgICAgICBjb25zb2xlLmxvZyhlKTsKICAgICAgfSwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:k(()=>[m(u,{fileList:a.fileList,"onUpdate:fileList":s[0]||(s[0]=r=>a.fileList=r),name:"file",multiple:!0,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",onChange:a.handleChange,onDrop:a.handleDrop},{default:k(()=>[n("p",cs,[m(l,{colors:["#1996f9"]})]),ps,ls]),_:1},8,["fileList","onChange","onDrop"])]),htmlCode:k(()=>[us]),jsVersionHtml:k(()=>[is]),_:1},8,["jsfiddle"])}var ks=G(es,[["render",rs]]);const ds=L({components:{IconBytedUpload:S},setup(){const a=w([{uid:"-1",name:"xxx.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",thumbUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-2",name:"yyy.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",thumbUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}]),s=w([{uid:"-1",name:"xxx.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",thumbUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-2",name:"yyy.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",thumbUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}]);return{fileList:a,fileList1:s}}}),Vn=a=>(fa("data-v-7edce3c3"),a=a(),ha(),a),gs=t(" upload "),ms=Vn(()=>n("br",null,null,-1)),Is=Vn(()=>n("br",null,null,-1)),Cs=t(" upload "),fs=Vn(()=>n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-upload")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileList"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"list-type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("picture"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUpload")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
        upload
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-upload")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-upload")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileList1"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"list-type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("picture"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("upload-list-inline"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUpload")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
        upload
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-upload")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" UploadProps "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedUpload "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-upload'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedUpload`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" fileList "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("UploadProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'fileList'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'-1'"),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'xxx.png'"),n("span",{class:"token punctuation"},","),t(`
        status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),t(`
        url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),t(`
        thumbUrl`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'-2'"),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'yyy.png'"),n("span",{class:"token punctuation"},","),t(`
        status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),t(`
        url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),t(`
        thumbUrl`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" fileList1 "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("UploadProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'fileList'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'-1'"),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'xxx.png'"),n("span",{class:"token punctuation"},","),t(`
        status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),t(`
        url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),t(`
        thumbUrl`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'-2'"),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'yyy.png'"),n("span",{class:"token punctuation"},","),t(`
        status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),t(`
        url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),t(`
        thumbUrl`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      fileList`),n("span",{class:"token punctuation"},","),t(`
      fileList1`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token comment"},"/* tile uploaded pictures */"),t(`
`),n("span",{class:"token selector"},".upload-list-inline :deep(.ant-upload-list-item)"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),t(" left"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 200px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".upload-list-inline [class*='-upload-list-rtl'] :deep(.ant-upload-list-item)"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),t(" right"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1)),hs=Vn(()=>n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-upload")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileList"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"list-type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("picture"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUpload")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
        upload
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-upload")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("br")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-upload")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileList1"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"list-type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("picture"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("upload-list-inline"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUpload")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
        upload
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-upload")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedUpload "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-upload'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedUpload`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" fileList "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
      uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'-1'"),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'xxx.png'"),n("span",{class:"token punctuation"},","),t(`
      status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),t(`
      url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),t(`
      thumbUrl`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'-2'"),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'yyy.png'"),n("span",{class:"token punctuation"},","),t(`
      status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),t(`
      url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),t(`
      thumbUrl`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" fileList1 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
      uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'-1'"),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'xxx.png'"),n("span",{class:"token punctuation"},","),t(`
      status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),t(`
      url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),t(`
      thumbUrl`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'-2'"),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'yyy.png'"),n("span",{class:"token punctuation"},","),t(`
      status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),t(`
      url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),t(`
      thumbUrl`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      fileList`),n("span",{class:"token punctuation"},","),t(`
      fileList1`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("style")]),t(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[t(`
`),n("span",{class:"token comment"},"/* tile uploaded pictures */"),t(`
`),n("span",{class:"token selector"},".upload-list-inline :deep(.ant-upload-list-item)"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),t(" left"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 200px"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),t(" 8px"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`),n("span",{class:"token selector"},".upload-list-inline [class*='-upload-list-rtl'] :deep(.ant-upload-list-item)"),t(),n("span",{class:"token punctuation"},"{"),t(`
  `),n("span",{class:"token property"},"float"),n("span",{class:"token punctuation"},":"),t(" right"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token punctuation"},"}"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("style")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1));function bs(a,s,o,e,c,p){const l=g("IconBytedUpload"),u=g("a-button"),i=g("a-upload"),r=g("demo-box");return y(),B(r,{jsfiddle:{us:"If uploaded file is a picture, the thumbnail can be shown.",cn:"\u4E0A\u4F20\u6587\u4EF6\u4E3A\u56FE\u7247\uFF0C\u53EF\u5C55\u793A\u672C\u5730\u7F29\u7565\u56FE\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4E0A\u4F20\u6587\u4EF6\u4E3A\u56FE\u7247\uFF0C\u53EF\u5C55\u793A\u672C\u5730\u7F29\u7565\u56FE\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>If uploaded file is a picture, the thumbnail can be shown.</p>
`,order:6,title:{"zh-CN":"\u56FE\u7247\u5217\u8868\u6837\u5F0F","en-US":"Pictures with list style"},relativePath:"components/upload/demo/picture-style.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS11cGxvYWQKICAgICAgdi1tb2RlbDpmaWxlLWxpc3Q9ImZpbGVMaXN0IgogICAgICBhY3Rpb249Imh0dHBzOi8vd3d3Lm1vY2t5LmlvL3YyLzVjYzgwMTlkMzAwMDAwOTgwYTA1NWU3NiIKICAgICAgbGlzdC10eXBlPSJwaWN0dXJlIgogICAgPgogICAgICA8YS1idXR0b24+CiAgICAgICAgPEljb25CeXRlZFVwbG9hZCAvPgogICAgICAgIHVwbG9hZAogICAgICA8L2EtYnV0dG9uPgogICAgPC9hLXVwbG9hZD4KICAgIDxiciAvPgogICAgPGJyIC8+CiAgICA8YS11cGxvYWQKICAgICAgdi1tb2RlbDpmaWxlLWxpc3Q9ImZpbGVMaXN0MSIKICAgICAgYWN0aW9uPSJodHRwczovL3d3dy5tb2NreS5pby92Mi81Y2M4MDE5ZDMwMDAwMDk4MGEwNTVlNzYiCiAgICAgIGxpc3QtdHlwZT0icGljdHVyZSIKICAgICAgY2xhc3M9InVwbG9hZC1saXN0LWlubGluZSIKICAgID4KICAgICAgPGEtYnV0dG9uPgogICAgICAgIDxJY29uQnl0ZWRVcGxvYWQgLz4KICAgICAgICB1cGxvYWQKICAgICAgPC9hLWJ1dHRvbj4KICAgIDwvYS11cGxvYWQ+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgdHlwZSB7IFVwbG9hZFByb3BzIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwppbXBvcnQgSWNvbkJ5dGVkVXBsb2FkIGZyb20gJ0BmZTYvaWNvbi12dWUvbGliL2ljb25zL2J5dGVkLXVwbG9hZCc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgSWNvbkJ5dGVkVXBsb2FkLAogIH0sCiAgc2V0dXAoKSB7CiAgICBjb25zdCBmaWxlTGlzdCA9IHJlZjxVcGxvYWRQcm9wc1snZmlsZUxpc3QnXT4oWwogICAgICB7CiAgICAgICAgdWlkOiAnLTEnLAogICAgICAgIG5hbWU6ICd4eHgucG5nJywKICAgICAgICBzdGF0dXM6ICdkb25lJywKICAgICAgICB1cmw6ICdodHRwczovL3pvcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvamtqZ2tFZnZwVVBWeVJqVUltbmlWc2xaZldQbkp1dVoucG5nJywKICAgICAgICB0aHVtYlVybDogJ2h0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9qa2pna0VmdnBVUFZ5UmpVSW1uaVZzbFpmV1BuSnV1Wi5wbmcnLAogICAgICB9LAogICAgICB7CiAgICAgICAgdWlkOiAnLTInLAogICAgICAgIG5hbWU6ICd5eXkucG5nJywKICAgICAgICBzdGF0dXM6ICdkb25lJywKICAgICAgICB1cmw6ICdodHRwczovL3pvcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvamtqZ2tFZnZwVVBWeVJqVUltbmlWc2xaZldQbkp1dVoucG5nJywKICAgICAgICB0aHVtYlVybDogJ2h0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9qa2pna0VmdnBVUFZ5UmpVSW1uaVZzbFpmV1BuSnV1Wi5wbmcnLAogICAgICB9LAogICAgXSk7CiAgICBjb25zdCBmaWxlTGlzdDEgPSByZWY8VXBsb2FkUHJvcHNbJ2ZpbGVMaXN0J10+KFsKICAgICAgewogICAgICAgIHVpZDogJy0xJywKICAgICAgICBuYW1lOiAneHh4LnBuZycsCiAgICAgICAgc3RhdHVzOiAnZG9uZScsCiAgICAgICAgdXJsOiAnaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL2pramdrRWZ2cFVQVnlSalVJbW5pVnNsWmZXUG5KdXVaLnBuZycsCiAgICAgICAgdGh1bWJVcmw6ICdodHRwczovL3pvcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvamtqZ2tFZnZwVVBWeVJqVUltbmlWc2xaZldQbkp1dVoucG5nJywKICAgICAgfSwKICAgICAgewogICAgICAgIHVpZDogJy0yJywKICAgICAgICBuYW1lOiAneXl5LnBuZycsCiAgICAgICAgc3RhdHVzOiAnZG9uZScsCiAgICAgICAgdXJsOiAnaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL2pramdrRWZ2cFVQVnlSalVJbW5pVnNsWmZXUG5KdXVaLnBuZycsCiAgICAgICAgdGh1bWJVcmw6ICdodHRwczovL3pvcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvamtqZ2tFZnZwVVBWeVJqVUltbmlWc2xaZldQbkp1dVoucG5nJywKICAgICAgfSwKICAgIF0pOwogICAgcmV0dXJuIHsKICAgICAgZmlsZUxpc3QsCiAgICAgIGZpbGVMaXN0MSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0Pgo8c3R5bGUgc2NvcGVkPgovKiB0aWxlIHVwbG9hZGVkIHBpY3R1cmVzICovCi51cGxvYWQtbGlzdC1pbmxpbmUgOmRlZXAoLmFudC11cGxvYWQtbGlzdC1pdGVtKSB7CiAgZmxvYXQ6IGxlZnQ7CiAgd2lkdGg6IDIwMHB4OwogIG1hcmdpbi1yaWdodDogOHB4Owp9Ci51cGxvYWQtbGlzdC1pbmxpbmUgW2NsYXNzKj0nLXVwbG9hZC1saXN0LXJ0bCddIDpkZWVwKC5hbnQtdXBsb2FkLWxpc3QtaXRlbSkgewogIGZsb2F0OiByaWdodDsKfQo8L3N0eWxlPgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS11cGxvYWQKICAgICAgdi1tb2RlbDpmaWxlLWxpc3Q9ImZpbGVMaXN0IgogICAgICBhY3Rpb249Imh0dHBzOi8vd3d3Lm1vY2t5LmlvL3YyLzVjYzgwMTlkMzAwMDAwOTgwYTA1NWU3NiIKICAgICAgbGlzdC10eXBlPSJwaWN0dXJlIgogICAgPgogICAgICA8YS1idXR0b24+CiAgICAgICAgPEljb25CeXRlZFVwbG9hZCAvPgogICAgICAgIHVwbG9hZAogICAgICA8L2EtYnV0dG9uPgogICAgPC9hLXVwbG9hZD4KICAgIDxiciAvPgogICAgPGJyIC8+CiAgICA8YS11cGxvYWQKICAgICAgdi1tb2RlbDpmaWxlLWxpc3Q9ImZpbGVMaXN0MSIKICAgICAgYWN0aW9uPSJodHRwczovL3d3dy5tb2NreS5pby92Mi81Y2M4MDE5ZDMwMDAwMDk4MGEwNTVlNzYiCiAgICAgIGxpc3QtdHlwZT0icGljdHVyZSIKICAgICAgY2xhc3M9InVwbG9hZC1saXN0LWlubGluZSIKICAgID4KICAgICAgPGEtYnV0dG9uPgogICAgICAgIDxJY29uQnl0ZWRVcGxvYWQgLz4KICAgICAgICB1cGxvYWQKICAgICAgPC9hLWJ1dHRvbj4KICAgIDwvYS11cGxvYWQ+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCBJY29uQnl0ZWRVcGxvYWQgZnJvbSAnQGZlNi9pY29uLXZ1ZS9saWIvaWNvbnMvYnl0ZWQtdXBsb2FkJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIEljb25CeXRlZFVwbG9hZCwKICB9LAoKICBzZXR1cCgpIHsKICAgIGNvbnN0IGZpbGVMaXN0ID0gcmVmKFt7CiAgICAgIHVpZDogJy0xJywKICAgICAgbmFtZTogJ3h4eC5wbmcnLAogICAgICBzdGF0dXM6ICdkb25lJywKICAgICAgdXJsOiAnaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL2pramdrRWZ2cFVQVnlSalVJbW5pVnNsWmZXUG5KdXVaLnBuZycsCiAgICAgIHRodW1iVXJsOiAnaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL2pramdrRWZ2cFVQVnlSalVJbW5pVnNsWmZXUG5KdXVaLnBuZycsCiAgICB9LCB7CiAgICAgIHVpZDogJy0yJywKICAgICAgbmFtZTogJ3l5eS5wbmcnLAogICAgICBzdGF0dXM6ICdkb25lJywKICAgICAgdXJsOiAnaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL2pramdrRWZ2cFVQVnlSalVJbW5pVnNsWmZXUG5KdXVaLnBuZycsCiAgICAgIHRodW1iVXJsOiAnaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL2pramdrRWZ2cFVQVnlSalVJbW5pVnNsWmZXUG5KdXVaLnBuZycsCiAgICB9XSk7CiAgICBjb25zdCBmaWxlTGlzdDEgPSByZWYoW3sKICAgICAgdWlkOiAnLTEnLAogICAgICBuYW1lOiAneHh4LnBuZycsCiAgICAgIHN0YXR1czogJ2RvbmUnLAogICAgICB1cmw6ICdodHRwczovL3pvcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvamtqZ2tFZnZwVVBWeVJqVUltbmlWc2xaZldQbkp1dVoucG5nJywKICAgICAgdGh1bWJVcmw6ICdodHRwczovL3pvcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvamtqZ2tFZnZwVVBWeVJqVUltbmlWc2xaZldQbkp1dVoucG5nJywKICAgIH0sIHsKICAgICAgdWlkOiAnLTInLAogICAgICBuYW1lOiAneXl5LnBuZycsCiAgICAgIHN0YXR1czogJ2RvbmUnLAogICAgICB1cmw6ICdodHRwczovL3pvcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvamtqZ2tFZnZwVVBWeVJqVUltbmlWc2xaZldQbkp1dVoucG5nJywKICAgICAgdGh1bWJVcmw6ICdodHRwczovL3pvcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvamtqZ2tFZnZwVVBWeVJqVUltbmlWc2xaZldQbkp1dVoucG5nJywKICAgIH1dKTsKICAgIHJldHVybiB7CiAgICAgIGZpbGVMaXN0LAogICAgICBmaWxlTGlzdDEsCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+CjxzdHlsZSBzY29wZWQ+Ci8qIHRpbGUgdXBsb2FkZWQgcGljdHVyZXMgKi8KLnVwbG9hZC1saXN0LWlubGluZSA6ZGVlcCguYW50LXVwbG9hZC1saXN0LWl0ZW0pIHsKICBmbG9hdDogbGVmdDsKICB3aWR0aDogMjAwcHg7CiAgbWFyZ2luLXJpZ2h0OiA4cHg7Cn0KLnVwbG9hZC1saXN0LWlubGluZSBbY2xhc3MqPSctdXBsb2FkLWxpc3QtcnRsJ10gOmRlZXAoLmFudC11cGxvYWQtbGlzdC1pdGVtKSB7CiAgZmxvYXQ6IHJpZ2h0Owp9Cjwvc3R5bGU+"}},{default:k(()=>[n("div",null,[m(i,{"file-list":a.fileList,"onUpdate:file-list":s[0]||(s[0]=d=>a.fileList=d),action:"https://www.mocky.io/v2/5cc8019d300000980a055e76","list-type":"picture"},{default:k(()=>[m(u,null,{default:k(()=>[m(l),gs]),_:1})]),_:1},8,["file-list"]),ms,Is,m(i,{"file-list":a.fileList1,"onUpdate:file-list":s[1]||(s[1]=d=>a.fileList1=d),action:"https://www.mocky.io/v2/5cc8019d300000980a055e76","list-type":"picture",class:"upload-list-inline"},{default:k(()=>[m(u,null,{default:k(()=>[m(l),Cs]),_:1})]),_:1},8,["file-list"])])]),htmlCode:k(()=>[fs]),jsVersionHtml:k(()=>[hs]),_:1},8,["jsfiddle"])}var As=G(ds,[["render",bs],["__scopeId","data-v-7edce3c3"]]),ys=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var s={},o=Symbol("test"),e=Object(o);if(typeof o=="string"||Object.prototype.toString.call(o)!=="[object Symbol]"||Object.prototype.toString.call(e)!=="[object Symbol]")return!1;var c=42;s[o]=c;for(o in s)return!1;if(typeof Object.keys=="function"&&Object.keys(s).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(s).length!==0)return!1;var p=Object.getOwnPropertySymbols(s);if(p.length!==1||p[0]!==o||!Object.prototype.propertyIsEnumerable.call(s,o))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var l=Object.getOwnPropertyDescriptor(s,o);if(l.value!==c||l.enumerable!==!0)return!1}return!0},Gt=typeof Symbol!="undefined"&&Symbol,ws=ys,vs=function(){return typeof Gt!="function"||typeof Symbol!="function"||typeof Gt("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:ws()},Zs="Function.prototype.bind called on incompatible ",zn=Array.prototype.slice,Gs=Object.prototype.toString,Bs="[object Function]",Ws=function(s){var o=this;if(typeof o!="function"||Gs.call(o)!==Bs)throw new TypeError(Zs+o);for(var e=zn.call(arguments,1),c,p=function(){if(this instanceof c){var d=o.apply(this,e.concat(zn.call(arguments)));return Object(d)===d?d:this}else return o.apply(s,e.concat(zn.call(arguments)))},l=Math.max(0,o.length-e.length),u=[],i=0;i<l;i++)u.push("$"+i);if(c=Function("binder","return function ("+u.join(",")+"){ return binder.apply(this,arguments); }")(p),o.prototype){var r=function(){};r.prototype=o.prototype,c.prototype=new r,r.prototype=null}return c},Vs=Ws,Kn=Function.prototype.bind||Vs,Fs=Kn,Ls=Fs.call(Function.call,Object.prototype.hasOwnProperty),h,fn=SyntaxError,Bt=Function,un=TypeError,Dn=function(a){try{return Bt('"use strict"; return ('+a+").constructor;")()}catch{}},sn=Object.getOwnPropertyDescriptor;if(sn)try{sn({},"")}catch{sn=null}var En=function(){throw new un},Us=sn?function(){try{return arguments.callee,En}catch{try{return sn(arguments,"callee").get}catch{return En}}}():En,rn=vs(),$=Object.getPrototypeOf||function(a){return a.__proto__},kn={},Xs=typeof Uint8Array=="undefined"?h:$(Uint8Array),dn={"%AggregateError%":typeof AggregateError=="undefined"?h:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer=="undefined"?h:ArrayBuffer,"%ArrayIteratorPrototype%":rn?$([][Symbol.iterator]()):h,"%AsyncFromSyncIteratorPrototype%":h,"%AsyncFunction%":kn,"%AsyncGenerator%":kn,"%AsyncGeneratorFunction%":kn,"%AsyncIteratorPrototype%":kn,"%Atomics%":typeof Atomics=="undefined"?h:Atomics,"%BigInt%":typeof BigInt=="undefined"?h:BigInt,"%Boolean%":Boolean,"%DataView%":typeof DataView=="undefined"?h:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":typeof Float32Array=="undefined"?h:Float32Array,"%Float64Array%":typeof Float64Array=="undefined"?h:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry=="undefined"?h:FinalizationRegistry,"%Function%":Bt,"%GeneratorFunction%":kn,"%Int8Array%":typeof Int8Array=="undefined"?h:Int8Array,"%Int16Array%":typeof Int16Array=="undefined"?h:Int16Array,"%Int32Array%":typeof Int32Array=="undefined"?h:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":rn?$($([][Symbol.iterator]())):h,"%JSON%":typeof JSON=="object"?JSON:h,"%Map%":typeof Map=="undefined"?h:Map,"%MapIteratorPrototype%":typeof Map=="undefined"||!rn?h:$(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise=="undefined"?h:Promise,"%Proxy%":typeof Proxy=="undefined"?h:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":typeof Reflect=="undefined"?h:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set=="undefined"?h:Set,"%SetIteratorPrototype%":typeof Set=="undefined"||!rn?h:$(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer=="undefined"?h:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":rn?$(""[Symbol.iterator]()):h,"%Symbol%":rn?Symbol:h,"%SyntaxError%":fn,"%ThrowTypeError%":Us,"%TypedArray%":Xs,"%TypeError%":un,"%Uint8Array%":typeof Uint8Array=="undefined"?h:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray=="undefined"?h:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array=="undefined"?h:Uint16Array,"%Uint32Array%":typeof Uint32Array=="undefined"?h:Uint32Array,"%URIError%":URIError,"%WeakMap%":typeof WeakMap=="undefined"?h:WeakMap,"%WeakRef%":typeof WeakRef=="undefined"?h:WeakRef,"%WeakSet%":typeof WeakSet=="undefined"?h:WeakSet},Ys=function a(s){var o;if(s==="%AsyncFunction%")o=Dn("async function () {}");else if(s==="%GeneratorFunction%")o=Dn("function* () {}");else if(s==="%AsyncGeneratorFunction%")o=Dn("async function* () {}");else if(s==="%AsyncGenerator%"){var e=a("%AsyncGeneratorFunction%");e&&(o=e.prototype)}else if(s==="%AsyncIteratorPrototype%"){var c=a("%AsyncGenerator%");c&&(o=$(c.prototype))}return dn[s]=o,o},Wt={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},Fn=Kn,Ln=Ls,xs=Fn.call(Function.call,Array.prototype.concat),Ss=Fn.call(Function.apply,Array.prototype.splice),Vt=Fn.call(Function.call,String.prototype.replace),Un=Fn.call(Function.call,String.prototype.slice),Rs=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,Hs=/\\(\\)?/g,Js=function(s){var o=Un(s,0,1),e=Un(s,-1);if(o==="%"&&e!=="%")throw new fn("invalid intrinsic syntax, expected closing `%`");if(e==="%"&&o!=="%")throw new fn("invalid intrinsic syntax, expected opening `%`");var c=[];return Vt(s,Rs,function(p,l,u,i){c[c.length]=u?Vt(i,Hs,"$1"):l||p}),c},Ns=function(s,o){var e=s,c;if(Ln(Wt,e)&&(c=Wt[e],e="%"+c[0]+"%"),Ln(dn,e)){var p=dn[e];if(p===kn&&(p=Ys(e)),typeof p=="undefined"&&!o)throw new un("intrinsic "+s+" exists, but is not available. Please file an issue!");return{alias:c,name:e,value:p}}throw new fn("intrinsic "+s+" does not exist!")},On=function(s,o){if(typeof s!="string"||s.length===0)throw new un("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof o!="boolean")throw new un('"allowMissing" argument must be a boolean');var e=Js(s),c=e.length>0?e[0]:"",p=Ns("%"+c+"%",o),l=p.name,u=p.value,i=!1,r=p.alias;r&&(c=r[0],Ss(e,xs([0,1],r)));for(var d=1,I=!0;d<e.length;d+=1){var C=e[d],f=Un(C,0,1),b=Un(C,-1);if((f==='"'||f==="'"||f==="`"||b==='"'||b==="'"||b==="`")&&f!==b)throw new fn("property names with quotes must have matching quotes");if((C==="constructor"||!I)&&(i=!0),c+="."+C,l="%"+c+"%",Ln(dn,l))u=dn[l];else if(u!=null){if(!(C in u)){if(!o)throw new un("base intrinsic for "+s+" exists, but the property is not available.");return}if(sn&&d+1>=e.length){var v=sn(u,C);I=!!v,I&&"get"in v&&!("originalValue"in v.get)?u=v.get:u=u[C]}else I=Ln(u,C),u=u[C];I&&!i&&(dn[l]=u)}}return u},Ft={exports:{}};(function(a){var s=Kn,o=On,e=o("%Function.prototype.apply%"),c=o("%Function.prototype.call%"),p=o("%Reflect.apply%",!0)||s.call(c,e),l=o("%Object.getOwnPropertyDescriptor%",!0),u=o("%Object.defineProperty%",!0),i=o("%Math.max%");if(u)try{u({},"a",{value:1})}catch{u=null}a.exports=function(I){var C=p(s,c,arguments);if(l&&u){var f=l(C,"length");f.configurable&&u(C,"length",{value:1+i(0,I.length-(arguments.length-1))})}return C};var r=function(){return p(s,e,arguments)};u?u(a.exports,"apply",{value:r}):a.exports.apply=r})(Ft);var Lt=On,Ut=Ft.exports,Ps=Ut(Lt("String.prototype.indexOf")),js=function(s,o){var e=Lt(s,!!o);return typeof e=="function"&&Ps(s,".prototype.")>-1?Ut(e):e},zs={},Ks=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:zs}),Ds=ba(Ks),Qn=typeof Map=="function"&&Map.prototype,_n=Object.getOwnPropertyDescriptor&&Qn?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,Xn=Qn&&_n&&typeof _n.get=="function"?_n.get:null,Es=Qn&&Map.prototype.forEach,Tn=typeof Set=="function"&&Set.prototype,Mn=Object.getOwnPropertyDescriptor&&Tn?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,Yn=Tn&&Mn&&typeof Mn.get=="function"?Mn.get:null,Os=Tn&&Set.prototype.forEach,Qs=typeof WeakMap=="function"&&WeakMap.prototype,hn=Qs?WeakMap.prototype.has:null,_s=typeof WeakSet=="function"&&WeakSet.prototype,bn=_s?WeakSet.prototype.has:null,Ts=typeof WeakRef=="function"&&WeakRef.prototype,Xt=Ts?WeakRef.prototype.deref:null,Ms=Boolean.prototype.valueOf,qs=Object.prototype.toString,$s=Function.prototype.toString,no=String.prototype.match,qn=typeof BigInt=="function"?BigInt.prototype.valueOf:null,$n=Object.getOwnPropertySymbols,nt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,gn=typeof Symbol=="function"&&typeof Symbol.iterator=="object",X=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===gn?"object":"symbol")?Symbol.toStringTag:null,to=Object.prototype.propertyIsEnumerable,Yt=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(a){return a.__proto__}:null),tt=Ds.custom,at=tt&&St(tt)?tt:null,ao=function a(s,o,e,c){var p=o||{};if(on(p,"quoteStyle")&&p.quoteStyle!=="single"&&p.quoteStyle!=="double")throw new TypeError('option "quoteStyle" must be "single" or "double"');if(on(p,"maxStringLength")&&(typeof p.maxStringLength=="number"?p.maxStringLength<0&&p.maxStringLength!==1/0:p.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var l=on(p,"customInspect")?p.customInspect:!0;if(typeof l!="boolean"&&l!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(on(p,"indent")&&p.indent!==null&&p.indent!=="	"&&!(parseInt(p.indent,10)===p.indent&&p.indent>0))throw new TypeError('options "indent" must be "\\t", an integer > 0, or `null`');if(typeof s=="undefined")return"undefined";if(s===null)return"null";if(typeof s=="boolean")return s?"true":"false";if(typeof s=="string")return Ht(s,p);if(typeof s=="number")return s===0?1/0/s>0?"0":"-0":String(s);if(typeof s=="bigint")return String(s)+"n";var u=typeof p.depth=="undefined"?5:p.depth;if(typeof e=="undefined"&&(e=0),e>=u&&u>0&&typeof s=="object")return st(s)?"[Array]":"[Object]";var i=yo(p,e);if(typeof c=="undefined")c=[];else if(Rt(c,s)>=0)return"[Circular]";function r(V,N,z){if(N&&(c=c.slice(),c.push(N)),z){var K={depth:p.depth};return on(p,"quoteStyle")&&(K.quoteStyle=p.quoteStyle),a(V,K,e+1,c)}return a(V,p,e+1,c)}if(typeof s=="function"){var d=ko(s),I=xn(s,r);return"[Function"+(d?": "+d:" (anonymous)")+"]"+(I.length>0?" { "+I.join(", ")+" }":"")}if(St(s)){var C=gn?String(s).replace(/^(Symbol\(.*\))_[^)]*$/,"$1"):nt.call(s);return typeof s=="object"&&!gn?An(C):C}if(ho(s)){for(var f="<"+String(s.nodeName).toLowerCase(),b=s.attributes||[],v=0;v<b.length;v++)f+=" "+b[v].name+"="+xt(so(b[v].value),"double",p);return f+=">",s.childNodes&&s.childNodes.length&&(f+="..."),f+="</"+String(s.nodeName).toLowerCase()+">",f}if(st(s)){if(s.length===0)return"[]";var A=xn(s,r);return i&&!Ao(A)?"["+et(A,i)+"]":"[ "+A.join(", ")+" ]"}if(co(s)){var Z=xn(s,r);return Z.length===0?"["+String(s)+"]":"{ ["+String(s)+"] "+Z.join(", ")+" }"}if(typeof s=="object"&&l){if(at&&typeof s[at]=="function")return s[at]();if(l!=="symbol"&&typeof s.inspect=="function")return s.inspect()}if(go(s)){var P=[];return Es.call(s,function(V,N){P.push(r(N,s,!0)+" => "+r(V,s))}),Jt("Map",Xn.call(s),P,i)}if(Co(s)){var T=[];return Os.call(s,function(V){T.push(r(V,s))}),Jt("Set",Yn.call(s),T,i)}if(mo(s))return ot("WeakMap");if(fo(s))return ot("WeakSet");if(Io(s))return ot("WeakRef");if(lo(s))return An(r(Number(s)));if(io(s))return An(r(qn.call(s)));if(uo(s))return An(Ms.call(s));if(po(s))return An(r(String(s)));if(!oo(s)&&!eo(s)){var D=xn(s,r),M=Yt?Yt(s)===Object.prototype:s instanceof Object||s.constructor===Object,j=s instanceof Object?"":"null prototype",an=!M&&X&&Object(s)===s&&X in s?nn(s).slice(8,-1):j?"Object":"",q=M||typeof s.constructor!="function"?"":s.constructor.name?s.constructor.name+" ":"",J=q+(an||j?"["+[].concat(an||[],j||[]).join(": ")+"] ":"");return D.length===0?J+"{}":i?J+"{"+et(D,i)+"}":J+"{ "+D.join(", ")+" }"}return String(s)};function xt(a,s,o){var e=(o.quoteStyle||s)==="double"?'"':"'";return e+a+e}function so(a){return String(a).replace(/"/g,"&quot;")}function st(a){return nn(a)==="[object Array]"&&(!X||!(typeof a=="object"&&X in a))}function oo(a){return nn(a)==="[object Date]"&&(!X||!(typeof a=="object"&&X in a))}function eo(a){return nn(a)==="[object RegExp]"&&(!X||!(typeof a=="object"&&X in a))}function co(a){return nn(a)==="[object Error]"&&(!X||!(typeof a=="object"&&X in a))}function po(a){return nn(a)==="[object String]"&&(!X||!(typeof a=="object"&&X in a))}function lo(a){return nn(a)==="[object Number]"&&(!X||!(typeof a=="object"&&X in a))}function uo(a){return nn(a)==="[object Boolean]"&&(!X||!(typeof a=="object"&&X in a))}function St(a){if(gn)return a&&typeof a=="object"&&a instanceof Symbol;if(typeof a=="symbol")return!0;if(!a||typeof a!="object"||!nt)return!1;try{return nt.call(a),!0}catch{}return!1}function io(a){if(!a||typeof a!="object"||!qn)return!1;try{return qn.call(a),!0}catch{}return!1}var ro=Object.prototype.hasOwnProperty||function(a){return a in this};function on(a,s){return ro.call(a,s)}function nn(a){return qs.call(a)}function ko(a){if(a.name)return a.name;var s=no.call($s.call(a),/^function\s*([\w$]+)/);return s?s[1]:null}function Rt(a,s){if(a.indexOf)return a.indexOf(s);for(var o=0,e=a.length;o<e;o++)if(a[o]===s)return o;return-1}function go(a){if(!Xn||!a||typeof a!="object")return!1;try{Xn.call(a);try{Yn.call(a)}catch{return!0}return a instanceof Map}catch{}return!1}function mo(a){if(!hn||!a||typeof a!="object")return!1;try{hn.call(a,hn);try{bn.call(a,bn)}catch{return!0}return a instanceof WeakMap}catch{}return!1}function Io(a){if(!Xt||!a||typeof a!="object")return!1;try{return Xt.call(a),!0}catch{}return!1}function Co(a){if(!Yn||!a||typeof a!="object")return!1;try{Yn.call(a);try{Xn.call(a)}catch{return!0}return a instanceof Set}catch{}return!1}function fo(a){if(!bn||!a||typeof a!="object")return!1;try{bn.call(a,bn);try{hn.call(a,hn)}catch{return!0}return a instanceof WeakSet}catch{}return!1}function ho(a){return!a||typeof a!="object"?!1:typeof HTMLElement!="undefined"&&a instanceof HTMLElement?!0:typeof a.nodeName=="string"&&typeof a.getAttribute=="function"}function Ht(a,s){if(a.length>s.maxStringLength){var o=a.length-s.maxStringLength,e="... "+o+" more character"+(o>1?"s":"");return Ht(a.slice(0,s.maxStringLength),s)+e}var c=a.replace(/(['\\])/g,"\\$1").replace(/[\x00-\x1f]/g,bo);return xt(c,"single",s)}function bo(a){var s=a.charCodeAt(0),o={8:"b",9:"t",10:"n",12:"f",13:"r"}[s];return o?"\\"+o:"\\x"+(s<16?"0":"")+s.toString(16).toUpperCase()}function An(a){return"Object("+a+")"}function ot(a){return a+" { ? }"}function Jt(a,s,o,e){var c=e?et(o,e):o.join(", ");return a+" ("+s+") {"+c+"}"}function Ao(a){for(var s=0;s<a.length;s++)if(Rt(a[s],`
`)>=0)return!1;return!0}function yo(a,s){var o;if(a.indent==="	")o="	";else if(typeof a.indent=="number"&&a.indent>0)o=Array(a.indent+1).join(" ");else return null;return{base:o,prev:Array(s+1).join(o)}}function et(a,s){if(a.length===0)return"";var o=`
`+s.prev+s.base;return o+a.join(","+o)+`
`+s.prev}function xn(a,s){var o=st(a),e=[];if(o){e.length=a.length;for(var c=0;c<a.length;c++)e[c]=on(a,c)?s(a[c],a):""}var p=typeof $n=="function"?$n(a):[],l;if(gn){l={};for(var u=0;u<p.length;u++)l["$"+p[u]]=p[u]}for(var i in a)!on(a,i)||o&&String(Number(i))===i&&i<a.length||gn&&l["$"+i]instanceof Symbol||(/[^\w$]/.test(i)?e.push(s(i,a)+": "+s(a[i],a)):e.push(i+": "+s(a[i],a)));if(typeof $n=="function")for(var r=0;r<p.length;r++)to.call(a,p[r])&&e.push("["+s(p[r])+"]: "+s(a[p[r]],a));return e}var ct=On,mn=js,wo=ao,vo=ct("%TypeError%"),Sn=ct("%WeakMap%",!0),Rn=ct("%Map%",!0),Zo=mn("WeakMap.prototype.get",!0),Go=mn("WeakMap.prototype.set",!0),Bo=mn("WeakMap.prototype.has",!0),Wo=mn("Map.prototype.get",!0),Vo=mn("Map.prototype.set",!0),Fo=mn("Map.prototype.has",!0),pt=function(a,s){for(var o=a,e;(e=o.next)!==null;o=e)if(e.key===s)return o.next=e.next,e.next=a.next,a.next=e,e},Lo=function(a,s){var o=pt(a,s);return o&&o.value},Uo=function(a,s,o){var e=pt(a,s);e?e.value=o:a.next={key:s,next:a.next,value:o}},Xo=function(a,s){return!!pt(a,s)},Yo=function(){var s,o,e,c={assert:function(p){if(!c.has(p))throw new vo("Side channel does not contain "+wo(p))},get:function(p){if(Sn&&p&&(typeof p=="object"||typeof p=="function")){if(s)return Zo(s,p)}else if(Rn){if(o)return Wo(o,p)}else if(e)return Lo(e,p)},has:function(p){if(Sn&&p&&(typeof p=="object"||typeof p=="function")){if(s)return Bo(s,p)}else if(Rn){if(o)return Fo(o,p)}else if(e)return Xo(e,p);return!1},set:function(p,l){Sn&&p&&(typeof p=="object"||typeof p=="function")?(s||(s=new Sn),Go(s,p,l)):Rn?(o||(o=new Rn),Vo(o,p,l)):(e||(e={key:{},next:null}),Uo(e,p,l))}};return c},xo=String.prototype.replace,So=/%20/g,lt={RFC1738:"RFC1738",RFC3986:"RFC3986"},ut={default:lt.RFC3986,formatters:{RFC1738:function(a){return xo.call(a,So,"+")},RFC3986:function(a){return String(a)}},RFC1738:lt.RFC1738,RFC3986:lt.RFC3986},Ro=ut,it=Object.prototype.hasOwnProperty,en=Array.isArray,O=function(){for(var a=[],s=0;s<256;++s)a.push("%"+((s<16?"0":"")+s.toString(16)).toUpperCase());return a}(),Ho=function(s){for(;s.length>1;){var o=s.pop(),e=o.obj[o.prop];if(en(e)){for(var c=[],p=0;p<e.length;++p)typeof e[p]!="undefined"&&c.push(e[p]);o.obj[o.prop]=c}}},Nt=function(s,o){for(var e=o&&o.plainObjects?Object.create(null):{},c=0;c<s.length;++c)typeof s[c]!="undefined"&&(e[c]=s[c]);return e},Jo=function a(s,o,e){if(!o)return s;if(typeof o!="object"){if(en(s))s.push(o);else if(s&&typeof s=="object")(e&&(e.plainObjects||e.allowPrototypes)||!it.call(Object.prototype,o))&&(s[o]=!0);else return[s,o];return s}if(!s||typeof s!="object")return[s].concat(o);var c=s;return en(s)&&!en(o)&&(c=Nt(s,e)),en(s)&&en(o)?(o.forEach(function(p,l){if(it.call(s,l)){var u=s[l];u&&typeof u=="object"&&p&&typeof p=="object"?s[l]=a(u,p,e):s.push(p)}else s[l]=p}),s):Object.keys(o).reduce(function(p,l){var u=o[l];return it.call(p,l)?p[l]=a(p[l],u,e):p[l]=u,p},c)},No=function(s,o){return Object.keys(o).reduce(function(e,c){return e[c]=o[c],e},s)},Po=function(a,s,o){var e=a.replace(/\+/g," ");if(o==="iso-8859-1")return e.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(e)}catch{return e}},jo=function(s,o,e,c,p){if(s.length===0)return s;var l=s;if(typeof s=="symbol"?l=Symbol.prototype.toString.call(s):typeof s!="string"&&(l=String(s)),e==="iso-8859-1")return escape(l).replace(/%u[0-9a-f]{4}/gi,function(d){return"%26%23"+parseInt(d.slice(2),16)+"%3B"});for(var u="",i=0;i<l.length;++i){var r=l.charCodeAt(i);if(r===45||r===46||r===95||r===126||r>=48&&r<=57||r>=65&&r<=90||r>=97&&r<=122||p===Ro.RFC1738&&(r===40||r===41)){u+=l.charAt(i);continue}if(r<128){u=u+O[r];continue}if(r<2048){u=u+(O[192|r>>6]+O[128|r&63]);continue}if(r<55296||r>=57344){u=u+(O[224|r>>12]+O[128|r>>6&63]+O[128|r&63]);continue}i+=1,r=65536+((r&1023)<<10|l.charCodeAt(i)&1023),u+=O[240|r>>18]+O[128|r>>12&63]+O[128|r>>6&63]+O[128|r&63]}return u},zo=function(s){for(var o=[{obj:{o:s},prop:"o"}],e=[],c=0;c<o.length;++c)for(var p=o[c],l=p.obj[p.prop],u=Object.keys(l),i=0;i<u.length;++i){var r=u[i],d=l[r];typeof d=="object"&&d!==null&&e.indexOf(d)===-1&&(o.push({obj:l,prop:r}),e.push(d))}return Ho(o),s},Ko=function(s){return Object.prototype.toString.call(s)==="[object RegExp]"},Do=function(s){return!s||typeof s!="object"?!1:!!(s.constructor&&s.constructor.isBuffer&&s.constructor.isBuffer(s))},Eo=function(s,o){return[].concat(s,o)},Oo=function(s,o){if(en(s)){for(var e=[],c=0;c<s.length;c+=1)e.push(o(s[c]));return e}return o(s)},Pt={arrayToObject:Nt,assign:No,combine:Eo,compact:zo,decode:Po,encode:jo,isBuffer:Do,isRegExp:Ko,maybeMap:Oo,merge:Jo},jt=Yo,rt=Pt,yn=ut,Qo=Object.prototype.hasOwnProperty,zt={brackets:function(s){return s+"[]"},comma:"comma",indices:function(s,o){return s+"["+o+"]"},repeat:function(s){return s}},cn=Array.isArray,_o=String.prototype.split,To=Array.prototype.push,Kt=function(a,s){To.apply(a,cn(s)?s:[s])},Mo=Date.prototype.toISOString,Dt=yn.default,U={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:rt.encode,encodeValuesOnly:!1,format:Dt,formatter:yn.formatters[Dt],indices:!1,serializeDate:function(s){return Mo.call(s)},skipNulls:!1,strictNullHandling:!1},qo=function(s){return typeof s=="string"||typeof s=="number"||typeof s=="boolean"||typeof s=="symbol"||typeof s=="bigint"},kt={},$o=function a(s,o,e,c,p,l,u,i,r,d,I,C,f,b,v){for(var A=s,Z=v,P=0,T=!1;(Z=Z.get(kt))!==void 0&&!T;){var D=Z.get(s);if(P+=1,typeof D!="undefined"){if(D===P)throw new RangeError("Cyclic object value");T=!0}typeof Z.get(kt)=="undefined"&&(P=0)}if(typeof u=="function"?A=u(o,A):A instanceof Date?A=d(A):e==="comma"&&cn(A)&&(A=rt.maybeMap(A,function(jn){return jn instanceof Date?d(jn):jn})),A===null){if(c)return l&&!f?l(o,U.encoder,b,"key",I):o;A=""}if(qo(A)||rt.isBuffer(A)){if(l){var M=f?o:l(o,U.encoder,b,"key",I);if(e==="comma"&&f){for(var j=_o.call(String(A),","),an="",q=0;q<j.length;++q)an+=(q===0?"":",")+C(l(j[q],U.encoder,b,"value",I));return[C(M)+"="+an]}return[C(M)+"="+C(l(A,U.encoder,b,"value",I))]}return[C(o)+"="+C(String(A))]}var J=[];if(typeof A=="undefined")return J;var V;if(e==="comma"&&cn(A))V=[{value:A.length>0?A.join(",")||null:void 0}];else if(cn(u))V=u;else{var N=Object.keys(A);V=i?N.sort(i):N}for(var z=0;z<V.length;++z){var K=V[z],At=typeof K=="object"&&K.value!==void 0?K.value:A[K];if(!(p&&At===null)){var ma=cn(A)?typeof e=="function"?e(o,K):o:o+(r?"."+K:"["+K+"]");v.set(s,P);var yt=jt();yt.set(kt,v),Kt(J,a(At,ma,e,c,p,l,u,i,r,d,I,C,f,b,yt))}}return J},ne=function(s){if(!s)return U;if(s.encoder!==null&&s.encoder!==void 0&&typeof s.encoder!="function")throw new TypeError("Encoder has to be a function.");var o=s.charset||U.charset;if(typeof s.charset!="undefined"&&s.charset!=="utf-8"&&s.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var e=yn.default;if(typeof s.format!="undefined"){if(!Qo.call(yn.formatters,s.format))throw new TypeError("Unknown format option provided.");e=s.format}var c=yn.formatters[e],p=U.filter;return(typeof s.filter=="function"||cn(s.filter))&&(p=s.filter),{addQueryPrefix:typeof s.addQueryPrefix=="boolean"?s.addQueryPrefix:U.addQueryPrefix,allowDots:typeof s.allowDots=="undefined"?U.allowDots:!!s.allowDots,charset:o,charsetSentinel:typeof s.charsetSentinel=="boolean"?s.charsetSentinel:U.charsetSentinel,delimiter:typeof s.delimiter=="undefined"?U.delimiter:s.delimiter,encode:typeof s.encode=="boolean"?s.encode:U.encode,encoder:typeof s.encoder=="function"?s.encoder:U.encoder,encodeValuesOnly:typeof s.encodeValuesOnly=="boolean"?s.encodeValuesOnly:U.encodeValuesOnly,filter:p,format:e,formatter:c,serializeDate:typeof s.serializeDate=="function"?s.serializeDate:U.serializeDate,skipNulls:typeof s.skipNulls=="boolean"?s.skipNulls:U.skipNulls,sort:typeof s.sort=="function"?s.sort:null,strictNullHandling:typeof s.strictNullHandling=="boolean"?s.strictNullHandling:U.strictNullHandling}},te=function(a,s){var o=a,e=ne(s),c,p;typeof e.filter=="function"?(p=e.filter,o=p("",o)):cn(e.filter)&&(p=e.filter,c=p);var l=[];if(typeof o!="object"||o===null)return"";var u;s&&s.arrayFormat in zt?u=s.arrayFormat:s&&"indices"in s?u=s.indices?"indices":"repeat":u="indices";var i=zt[u];c||(c=Object.keys(o)),e.sort&&c.sort(e.sort);for(var r=jt(),d=0;d<c.length;++d){var I=c[d];e.skipNulls&&o[I]===null||Kt(l,$o(o[I],I,i,e.strictNullHandling,e.skipNulls,e.encode?e.encoder:null,e.filter,e.sort,e.allowDots,e.serializeDate,e.format,e.formatter,e.encodeValuesOnly,e.charset,r))}var C=l.join(e.delimiter),f=e.addQueryPrefix===!0?"?":"";return e.charsetSentinel&&(e.charset==="iso-8859-1"?f+="utf8=%26%2310003%3B&":f+="utf8=%E2%9C%93&"),C.length>0?f+C:""},In=Pt,dt=Object.prototype.hasOwnProperty,ae=Array.isArray,F={allowDots:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:In.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},se=function(a){return a.replace(/&#(\d+);/g,function(s,o){return String.fromCharCode(parseInt(o,10))})},Et=function(a,s){return a&&typeof a=="string"&&s.comma&&a.indexOf(",")>-1?a.split(","):a},oe="utf8=%26%2310003%3B",ee="utf8=%E2%9C%93",ce=function(s,o){var e={},c=o.ignoreQueryPrefix?s.replace(/^\?/,""):s,p=o.parameterLimit===1/0?void 0:o.parameterLimit,l=c.split(o.delimiter,p),u=-1,i,r=o.charset;if(o.charsetSentinel)for(i=0;i<l.length;++i)l[i].indexOf("utf8=")===0&&(l[i]===ee?r="utf-8":l[i]===oe&&(r="iso-8859-1"),u=i,i=l.length);for(i=0;i<l.length;++i)if(i!==u){var d=l[i],I=d.indexOf("]="),C=I===-1?d.indexOf("="):I+1,f,b;C===-1?(f=o.decoder(d,F.decoder,r,"key"),b=o.strictNullHandling?null:""):(f=o.decoder(d.slice(0,C),F.decoder,r,"key"),b=In.maybeMap(Et(d.slice(C+1),o),function(v){return o.decoder(v,F.decoder,r,"value")})),b&&o.interpretNumericEntities&&r==="iso-8859-1"&&(b=se(b)),d.indexOf("[]=")>-1&&(b=ae(b)?[b]:b),dt.call(e,f)?e[f]=In.combine(e[f],b):e[f]=b}return e},pe=function(a,s,o,e){for(var c=e?s:Et(s,o),p=a.length-1;p>=0;--p){var l,u=a[p];if(u==="[]"&&o.parseArrays)l=[].concat(c);else{l=o.plainObjects?Object.create(null):{};var i=u.charAt(0)==="["&&u.charAt(u.length-1)==="]"?u.slice(1,-1):u,r=parseInt(i,10);!o.parseArrays&&i===""?l={0:c}:!isNaN(r)&&u!==i&&String(r)===i&&r>=0&&o.parseArrays&&r<=o.arrayLimit?(l=[],l[r]=c):l[i]=c}c=l}return c},le=function(s,o,e,c){if(!!s){var p=e.allowDots?s.replace(/\.([^.[]+)/g,"[$1]"):s,l=/(\[[^[\]]*])/,u=/(\[[^[\]]*])/g,i=e.depth>0&&l.exec(p),r=i?p.slice(0,i.index):p,d=[];if(r){if(!e.plainObjects&&dt.call(Object.prototype,r)&&!e.allowPrototypes)return;d.push(r)}for(var I=0;e.depth>0&&(i=u.exec(p))!==null&&I<e.depth;){if(I+=1,!e.plainObjects&&dt.call(Object.prototype,i[1].slice(1,-1))&&!e.allowPrototypes)return;d.push(i[1])}return i&&d.push("["+p.slice(i.index)+"]"),pe(d,o,e,c)}},ue=function(s){if(!s)return F;if(s.decoder!==null&&s.decoder!==void 0&&typeof s.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof s.charset!="undefined"&&s.charset!=="utf-8"&&s.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var o=typeof s.charset=="undefined"?F.charset:s.charset;return{allowDots:typeof s.allowDots=="undefined"?F.allowDots:!!s.allowDots,allowPrototypes:typeof s.allowPrototypes=="boolean"?s.allowPrototypes:F.allowPrototypes,allowSparse:typeof s.allowSparse=="boolean"?s.allowSparse:F.allowSparse,arrayLimit:typeof s.arrayLimit=="number"?s.arrayLimit:F.arrayLimit,charset:o,charsetSentinel:typeof s.charsetSentinel=="boolean"?s.charsetSentinel:F.charsetSentinel,comma:typeof s.comma=="boolean"?s.comma:F.comma,decoder:typeof s.decoder=="function"?s.decoder:F.decoder,delimiter:typeof s.delimiter=="string"||In.isRegExp(s.delimiter)?s.delimiter:F.delimiter,depth:typeof s.depth=="number"||s.depth===!1?+s.depth:F.depth,ignoreQueryPrefix:s.ignoreQueryPrefix===!0,interpretNumericEntities:typeof s.interpretNumericEntities=="boolean"?s.interpretNumericEntities:F.interpretNumericEntities,parameterLimit:typeof s.parameterLimit=="number"?s.parameterLimit:F.parameterLimit,parseArrays:s.parseArrays!==!1,plainObjects:typeof s.plainObjects=="boolean"?s.plainObjects:F.plainObjects,strictNullHandling:typeof s.strictNullHandling=="boolean"?s.strictNullHandling:F.strictNullHandling}},ie=function(a,s){var o=ue(s);if(a===""||a===null||typeof a=="undefined")return o.plainObjects?Object.create(null):{};for(var e=typeof a=="string"?ce(a,o):a,c=o.plainObjects?Object.create(null):{},p=Object.keys(e),l=0;l<p.length;++l){var u=p[l],i=le(u,e[u],o,typeof a=="string");c=In.merge(c,i,o)}return o.allowSparse===!0?c:In.compact(c)},re=te,ke=ie,de=ut,Ot={formats:de,parse:ke,stringify:re},Y=typeof globalThis!="undefined"&&globalThis||typeof self!="undefined"&&self||typeof Y!="undefined"&&Y,R={searchParams:"URLSearchParams"in Y,iterable:"Symbol"in Y&&"iterator"in Symbol,blob:"FileReader"in Y&&"Blob"in Y&&function(){try{return new Blob,!0}catch{return!1}}(),formData:"FormData"in Y,arrayBuffer:"ArrayBuffer"in Y};function ge(a){return a&&DataView.prototype.isPrototypeOf(a)}if(R.arrayBuffer)var me=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],Ie=ArrayBuffer.isView||function(a){return a&&me.indexOf(Object.prototype.toString.call(a))>-1};function wn(a){if(typeof a!="string"&&(a=String(a)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(a)||a==="")throw new TypeError('Invalid character in header field name: "'+a+'"');return a.toLowerCase()}function gt(a){return typeof a!="string"&&(a=String(a)),a}function mt(a){var s={next:function(){var o=a.shift();return{done:o===void 0,value:o}}};return R.iterable&&(s[Symbol.iterator]=function(){return s}),s}function W(a){this.map={},a instanceof W?a.forEach(function(s,o){this.append(o,s)},this):Array.isArray(a)?a.forEach(function(s){this.append(s[0],s[1])},this):a&&Object.getOwnPropertyNames(a).forEach(function(s){this.append(s,a[s])},this)}W.prototype.append=function(a,s){a=wn(a),s=gt(s);var o=this.map[a];this.map[a]=o?o+", "+s:s};W.prototype.delete=function(a){delete this.map[wn(a)]};W.prototype.get=function(a){return a=wn(a),this.has(a)?this.map[a]:null};W.prototype.has=function(a){return this.map.hasOwnProperty(wn(a))};W.prototype.set=function(a,s){this.map[wn(a)]=gt(s)};W.prototype.forEach=function(a,s){for(var o in this.map)this.map.hasOwnProperty(o)&&a.call(s,this.map[o],o,this)};W.prototype.keys=function(){var a=[];return this.forEach(function(s,o){a.push(o)}),mt(a)};W.prototype.values=function(){var a=[];return this.forEach(function(s){a.push(s)}),mt(a)};W.prototype.entries=function(){var a=[];return this.forEach(function(s,o){a.push([o,s])}),mt(a)};R.iterable&&(W.prototype[Symbol.iterator]=W.prototype.entries);function It(a){if(a.bodyUsed)return Promise.reject(new TypeError("Already read"));a.bodyUsed=!0}function Qt(a){return new Promise(function(s,o){a.onload=function(){s(a.result)},a.onerror=function(){o(a.error)}})}function Ce(a){var s=new FileReader,o=Qt(s);return s.readAsArrayBuffer(a),o}function fe(a){var s=new FileReader,o=Qt(s);return s.readAsText(a),o}function he(a){for(var s=new Uint8Array(a),o=new Array(s.length),e=0;e<s.length;e++)o[e]=String.fromCharCode(s[e]);return o.join("")}function _t(a){if(a.slice)return a.slice(0);var s=new Uint8Array(a.byteLength);return s.set(new Uint8Array(a)),s.buffer}function Tt(){return this.bodyUsed=!1,this._initBody=function(a){this.bodyUsed=this.bodyUsed,this._bodyInit=a,a?typeof a=="string"?this._bodyText=a:R.blob&&Blob.prototype.isPrototypeOf(a)?this._bodyBlob=a:R.formData&&FormData.prototype.isPrototypeOf(a)?this._bodyFormData=a:R.searchParams&&URLSearchParams.prototype.isPrototypeOf(a)?this._bodyText=a.toString():R.arrayBuffer&&R.blob&&ge(a)?(this._bodyArrayBuffer=_t(a.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):R.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(a)||Ie(a))?this._bodyArrayBuffer=_t(a):this._bodyText=a=Object.prototype.toString.call(a):this._bodyText="",this.headers.get("content-type")||(typeof a=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):R.searchParams&&URLSearchParams.prototype.isPrototypeOf(a)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},R.blob&&(this.blob=function(){var a=It(this);if(a)return a;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var a=It(this);return a||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}else return this.blob().then(Ce)}),this.text=function(){var a=It(this);if(a)return a;if(this._bodyBlob)return fe(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(he(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},R.formData&&(this.formData=function(){return this.text().then(ye)}),this.json=function(){return this.text().then(JSON.parse)},this}var be=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function Ae(a){var s=a.toUpperCase();return be.indexOf(s)>-1?s:a}function pn(a,s){if(!(this instanceof pn))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');s=s||{};var o=s.body;if(a instanceof pn){if(a.bodyUsed)throw new TypeError("Already read");this.url=a.url,this.credentials=a.credentials,s.headers||(this.headers=new W(a.headers)),this.method=a.method,this.mode=a.mode,this.signal=a.signal,!o&&a._bodyInit!=null&&(o=a._bodyInit,a.bodyUsed=!0)}else this.url=String(a);if(this.credentials=s.credentials||this.credentials||"same-origin",(s.headers||!this.headers)&&(this.headers=new W(s.headers)),this.method=Ae(s.method||this.method||"GET"),this.mode=s.mode||this.mode||null,this.signal=s.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&o)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(o),(this.method==="GET"||this.method==="HEAD")&&(s.cache==="no-store"||s.cache==="no-cache")){var e=/([?&])_=[^&]*/;if(e.test(this.url))this.url=this.url.replace(e,"$1_="+new Date().getTime());else{var c=/\?/;this.url+=(c.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}pn.prototype.clone=function(){return new pn(this,{body:this._bodyInit})};function ye(a){var s=new FormData;return a.trim().split("&").forEach(function(o){if(o){var e=o.split("="),c=e.shift().replace(/\+/g," "),p=e.join("=").replace(/\+/g," ");s.append(decodeURIComponent(c),decodeURIComponent(p))}}),s}function we(a){var s=new W,o=a.replace(/\r?\n[\t ]+/g," ");return o.split("\r").map(function(e){return e.indexOf(`
`)===0?e.substr(1,e.length):e}).forEach(function(e){var c=e.split(":"),p=c.shift().trim();if(p){var l=c.join(":").trim();s.append(p,l)}}),s}Tt.call(pn.prototype);function Q(a,s){if(!(this instanceof Q))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');s||(s={}),this.type="default",this.status=s.status===void 0?200:s.status,this.ok=this.status>=200&&this.status<300,this.statusText=s.statusText===void 0?"":""+s.statusText,this.headers=new W(s.headers),this.url=s.url||"",this._initBody(a)}Tt.call(Q.prototype);Q.prototype.clone=function(){return new Q(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new W(this.headers),url:this.url})};Q.error=function(){var a=new Q(null,{status:0,statusText:""});return a.type="error",a};var ve=[301,302,303,307,308];Q.redirect=function(a,s){if(ve.indexOf(s)===-1)throw new RangeError("Invalid status code");return new Q(null,{status:s,headers:{location:a}})};var ln=Y.DOMException;try{new ln}catch{ln=function(s,o){this.message=s,this.name=o;var e=Error(s);this.stack=e.stack},ln.prototype=Object.create(Error.prototype),ln.prototype.constructor=ln}function Mt(a,s){return new Promise(function(o,e){var c=new pn(a,s);if(c.signal&&c.signal.aborted)return e(new ln("Aborted","AbortError"));var p=new XMLHttpRequest;function l(){p.abort()}p.onload=function(){var i={status:p.status,statusText:p.statusText,headers:we(p.getAllResponseHeaders()||"")};i.url="responseURL"in p?p.responseURL:i.headers.get("X-Request-URL");var r="response"in p?p.response:p.responseText;setTimeout(function(){o(new Q(r,i))},0)},p.onerror=function(){setTimeout(function(){e(new TypeError("Network request failed"))},0)},p.ontimeout=function(){setTimeout(function(){e(new TypeError("Network request failed"))},0)},p.onabort=function(){setTimeout(function(){e(new ln("Aborted","AbortError"))},0)};function u(i){try{return i===""&&Y.location.href?Y.location.href:i}catch{return i}}p.open(c.method,u(c.url),!0),c.credentials==="include"?p.withCredentials=!0:c.credentials==="omit"&&(p.withCredentials=!1),"responseType"in p&&(R.blob?p.responseType="blob":R.arrayBuffer&&c.headers.get("Content-Type")&&c.headers.get("Content-Type").indexOf("application/octet-stream")!==-1&&(p.responseType="arraybuffer")),s&&typeof s.headers=="object"&&!(s.headers instanceof W)?Object.getOwnPropertyNames(s.headers).forEach(function(i){p.setRequestHeader(i,gt(s.headers[i]))}):c.headers.forEach(function(i,r){p.setRequestHeader(r,i)}),c.signal&&(c.signal.addEventListener("abort",l),p.onreadystatechange=function(){p.readyState===4&&c.signal.removeEventListener("abort",l)}),p.send(typeof c._bodyInit=="undefined"?null:c._bodyInit)})}Mt.polyfill=!0;Y.fetch||(Y.fetch=Mt,Y.Headers=W,Y.Request=pn,Y.Response=Q);self.fetch.bind(self);function qt(a,s){var o=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);s&&(e=e.filter(function(c){return Object.getOwnPropertyDescriptor(a,c).enumerable})),o.push.apply(o,e)}return o}function H(a){for(var s=1;s<arguments.length;s++){var o=arguments[s]!=null?arguments[s]:{};s%2?qt(Object(o),!0).forEach(function(e){Ze(a,e,o[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(o)):qt(Object(o)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(o,e))})}return a}function tn(a){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?tn=function(s){return typeof s}:tn=function(s){return s&&typeof Symbol=="function"&&s.constructor===Symbol&&s!==Symbol.prototype?"symbol":typeof s},tn(a)}function vn(a,s){if(!(a instanceof s))throw new TypeError("Cannot call a class as a function")}function $t(a,s){for(var o=0;o<s.length;o++){var e=s[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(a,e.key,e)}}function Ct(a,s,o){return s&&$t(a.prototype,s),o&&$t(a,o),a}function Ze(a,s,o){return s in a?Object.defineProperty(a,s,{value:o,enumerable:!0,configurable:!0,writable:!0}):a[s]=o,a}function na(a,s){if(typeof s!="function"&&s!==null)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(s&&s.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),s&&Gn(a,s)}function Zn(a){return Zn=Object.setPrototypeOf?Object.getPrototypeOf:function(o){return o.__proto__||Object.getPrototypeOf(o)},Zn(a)}function Gn(a,s){return Gn=Object.setPrototypeOf||function(e,c){return e.__proto__=c,e},Gn(a,s)}function ta(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Hn(a,s,o){return ta()?Hn=Reflect.construct:Hn=function(c,p,l){var u=[null];u.push.apply(u,p);var i=Function.bind.apply(c,u),r=new i;return l&&Gn(r,l.prototype),r},Hn.apply(null,arguments)}function Ge(a){return Function.toString.call(a).indexOf("[native code]")!==-1}function Jn(a){var s=typeof Map=="function"?new Map:void 0;return Jn=function(e){if(e===null||!Ge(e))return e;if(typeof e!="function")throw new TypeError("Super expression must either be null or a function");if(typeof s!="undefined"){if(s.has(e))return s.get(e);s.set(e,c)}function c(){return Hn(e,arguments,Zn(this).constructor)}return c.prototype=Object.create(e.prototype,{constructor:{value:c,enumerable:!1,writable:!0,configurable:!0}}),Gn(c,e)},Jn(a)}function Be(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function We(a,s){if(s&&(typeof s=="object"||typeof s=="function"))return s;if(s!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return Be(a)}function aa(a){var s=ta();return function(){var e=Zn(a),c;if(s){var p=Zn(this).constructor;c=Reflect.construct(e,arguments,p)}else c=e.apply(this,arguments);return We(this,c)}}function _(a){return Ve(a)||Fe(a)||Le(a)||Ue()}function Ve(a){if(Array.isArray(a))return ft(a)}function Fe(a){if(typeof Symbol!="undefined"&&a[Symbol.iterator]!=null||a["@@iterator"]!=null)return Array.from(a)}function Le(a,s){if(!!a){if(typeof a=="string")return ft(a,s);var o=Object.prototype.toString.call(a).slice(8,-1);if(o==="Object"&&a.constructor&&(o=a.constructor.name),o==="Map"||o==="Set")return Array.from(a);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return ft(a,s)}}function ft(a,s){(s==null||s>a.length)&&(s=a.length);for(var o=0,e=new Array(s);o<s;o++)e[o]=a[o];return e}function Ue(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Xe(a){if(!Array.isArray(a))throw new TypeError("Middlewares must be an array!");for(var s=a.length,o=0;o<s;o++)if(typeof a[o]!="function")throw new TypeError("Middleware must be componsed of function");return function(c,p){var l=-1;function u(i){if(i<=l)return Promise.reject(new Error("next() should not be called multiple times in one middleware!"));l=i;var r=a[i]||p;if(!r)return Promise.resolve();try{return Promise.resolve(r(c,function(){return u(i+1)}))}catch(d){return Promise.reject(d)}}return u(0)}}var E=function(){function a(s){if(vn(this,a),!Array.isArray(s))throw new TypeError("Default middlewares must be an array!");this.defaultMiddlewares=_(s),this.middlewares=[]}return Ct(a,[{key:"use",value:function(o){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{global:!1,core:!1,defaultInstance:!1},c=!1,p=!1,l=!1;if(typeof e=="number"?(process&&process.env,c=!0,p=!1):tn(e)==="object"&&e&&(p=e.global||!1,c=e.core||!1,l=e.defaultInstance||!1),p){a.globalMiddlewares.splice(a.globalMiddlewares.length-a.defaultGlobalMiddlewaresLength,0,o);return}if(c){a.coreMiddlewares.splice(a.coreMiddlewares.length-a.defaultCoreMiddlewaresLength,0,o);return}if(l){this.defaultMiddlewares.push(o);return}this.middlewares.push(o)}},{key:"execute",value:function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,e=Xe([].concat(_(this.middlewares),_(this.defaultMiddlewares),_(a.globalMiddlewares),_(a.coreMiddlewares)));return e(o)}}]),a}();E.globalMiddlewares=[];E.defaultGlobalMiddlewaresLength=0;E.coreMiddlewares=[];E.defaultCoreMiddlewaresLength=0;var Ye=function(){function a(s){vn(this,a),this.cache=new Map,this.timer={},this.extendOptions(s)}return Ct(a,[{key:"extendOptions",value:function(o){this.maxCache=o.maxCache||0}},{key:"get",value:function(o){return this.cache.get(JSON.stringify(o))}},{key:"set",value:function(o,e){var c=this,p=arguments.length>2&&arguments[2]!==void 0?arguments[2]:6e4;if(this.maxCache>0&&this.cache.size>=this.maxCache){var l=_(this.cache.keys())[0];this.cache.delete(l),this.timer[l]&&clearTimeout(this.timer[l])}var u=JSON.stringify(o);this.cache.set(u,e),p>0&&(this.timer[u]=setTimeout(function(){c.cache.delete(u),delete c.timer[u]},p))}},{key:"delete",value:function(o){var e=JSON.stringify(o);return delete this.timer[e],this.cache.delete(e)}},{key:"clear",value:function(){return this.timer={},this.cache.clear()}}]),a}(),sa=function(a){na(o,a);var s=aa(o);function o(e,c){var p,l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"RequestError";return vn(this,o),p=s.call(this,e),p.name="RequestError",p.request=c,p.type=l,p}return o}(Jn(Error)),Bn=function(a){na(o,a);var s=aa(o);function o(e,c,p,l){var u,i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:"ResponseError";return vn(this,o),u=s.call(this,c||e.statusText),u.name="ResponseError",u.data=p,u.response=e,u.request=l,u.type=i,u}return o}(Jn(Error));function xe(a){return new Promise(function(s,o){var e=new FileReader;e.onload=function(){s(e.result)},e.onerror=o,e.readAsText(a,"GBK")})}function oa(a){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,e=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;try{return JSON.parse(a)}catch{if(s)throw new Bn(o,"JSON.parse fail",a,e,"ParseError")}return a}function Se(a,s,o){return new Promise(function(e,c){setTimeout(function(){c(new sa(s||"timeout of ".concat(a,"ms exceeded"),o,"Timeout"))},a)})}function ea(a){return new Promise(function(s,o){a.cancelToken&&a.cancelToken.promise.then(function(e){o(e)})})}var Re=Object.prototype.toString;function ca(){var a;return typeof process!="undefined"&&Re.call(process)==="[object process]"&&(a="NODE"),typeof XMLHttpRequest!="undefined"&&(a="BROWSER"),a}function ht(a){return tn(a)==="object"&&Object.prototype.toString.call(a)==="[object Array]"}function pa(a){return typeof URLSearchParams!="undefined"&&a instanceof URLSearchParams}function He(a){return tn(a)==="object"&&Object.prototype.toString.call(a)==="[object Date]"}function la(a){return a!==null&&tn(a)==="object"}function ua(a,s){if(!!a)if(tn(a)!=="object"&&(a=[a]),ht(a))for(var o=0;o<a.length;o++)s.call(null,a[o],o,a);else for(var e in a)Object.prototype.hasOwnProperty.call(a,e)&&s.call(null,a[e],e,a)}function ia(a){return pa(a)?Ot.parse(a.toString(),{strictNullHandling:!0}):typeof a=="string"?[a]:a}function bt(a){return Ot.stringify(a,{arrayFormat:"repeat",strictNullHandling:!0})}function ra(a,s){return H(H(H({},a),s),{},{headers:H(H({},a.headers),s.headers),params:H(H({},ia(a.params)),ia(s.params)),method:(s.method||a.method||"get").toLowerCase()})}var Je=function(s){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=o.prefix,c=o.suffix;return e&&(s="".concat(e).concat(s)),c&&(s="".concat(s).concat(c)),{url:s,options:o}};function Ne(a,s){var o=s.method,e=o===void 0?"get":o;return e.toLowerCase()==="get"}function Pe(a,s){if(!a)return s();var o=a.req;o=o===void 0?{}:o;var e=o.options,c=e===void 0?{}:e,p=o.url,l=p===void 0?"":p,u=a.cache,i=a.responseInterceptors,r=c.timeout,d=r===void 0?0:r,I=c.timeoutMessage,C=c.__umiRequestCoreType__,f=C===void 0?"normal":C,b=c.useCache,v=b===void 0?!1:b,A=c.method,Z=A===void 0?"get":A,P=c.params,T=c.ttl,D=c.validateCache,M=D===void 0?Ne:D;if(f!=="normal")return process&&process.env,s();var j=fetch;if(!j)throw new Error("Global fetch not exist!");var an=ca()==="BROWSER",q=M(l,c)&&v&&an;if(q){var J=u.get({url:l,params:P,method:Z});if(J)return J=J.clone(),J.useCache=!0,a.res=J,s()}var V;return d>0?V=Promise.race([ea(c),j(l,c),Se(d,I,a.req)]):V=Promise.race([ea(c),j(l,c)]),i.forEach(function(N){V=V.then(function(z){var K=typeof z.clone=="function"?z.clone():z;return N(K,c)})}),V.then(function(N){if(q&&N.status===200){var z=N.clone();z.useCache=!0,u.set({url:l,params:P,method:Z},z,T)}return a.res=N,s()})}function je(a,s){var o;return s().then(function(){if(!!a){var e=a.res,c=e===void 0?{}:e,p=a.req,l=p===void 0?{}:p,u=l||{},i=u.options;i=i===void 0?{}:i;var r=i.responseType,d=r===void 0?"json":r,I=i.charset,C=I===void 0?"utf8":I;i.getResponse;var f=i.throwErrIfParseFail,b=f===void 0?!1:f,v=i.parseResponse,A=v===void 0?!0:v;if(!!A&&!(!c||!c.clone)){if(o=ca()==="BROWSER"?c.clone():c,o.useCache=c.useCache||!1,C==="gbk")try{return c.blob().then(xe).then(function(Z){return oa(Z,!1,o,l)})}catch(Z){throw new Bn(o,Z.message,null,l,"ParseError")}else if(d==="json")return c.text().then(function(Z){return oa(Z,b,o,l)});try{return c[d]()}catch{throw new Bn(o,"responseType not support",null,l,"ParseError")}}}}).then(function(e){if(!!a){a.res;var c=a.req,p=c===void 0?{}:c,l=p||{},u=l.options;u=u===void 0?{}:u;var i=u.getResponse,r=i===void 0?!1:i;if(!!o){if(o.status>=200&&o.status<300){if(r){a.res={data:e,response:o};return}a.res=e;return}throw new Bn(o,"http error",e,p,"HttpError")}}}).catch(function(e){if(e instanceof sa||e instanceof Bn)throw e;var c=a.req,p=a.res;throw e.request=e.request||c,e.response=e.response||p,e.type=e.type||e.name,e.data=e.data||void 0,e})}function ze(a,s){if(!a)return s();var o=a.req;o=o===void 0?{}:o;var e=o.options,c=e===void 0?{}:e,p=c.method,l=p===void 0?"get":p;if(["post","put","patch","delete"].indexOf(l.toLowerCase())===-1)return s();var u=c.requestType,i=u===void 0?"json":u,r=c.data;if(r){var d=Object.prototype.toString.call(r);d==="[object Object]"||d==="[object Array]"?i==="json"?(c.headers=H({Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},c.headers),c.body=JSON.stringify(r)):i==="form"&&(c.headers=H({Accept:"application/json","Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},c.headers),c.body=bt(r)):(c.headers=H({Accept:"application/json"},c.headers),c.body=r)}return a.req.options=c,s()}function Ke(a,s){var o,e;if(a)if(s)o=s(a);else if(pa(a))o=a.toString();else if(ht(a))e=[],ua(a,function(p){p===null||typeof p=="undefined"?e.push(p):e.push(la(p)?JSON.stringify(p):p)}),o=bt(e);else{e={},ua(a,function(p,l){var u=p;p===null||typeof p=="undefined"?e[l]=p:He(p)?u=p.toISOString():ht(p)?u=p:la(p)&&(u=JSON.stringify(p)),e[l]=u});var c=bt(e);o=c}return o}function De(a,s){if(!a)return s();var o=a.req;o=o===void 0?{}:o;var e=o.options,c=e===void 0?{}:e,p=c.paramsSerializer,l=c.params,u=a.req;u=u===void 0?{}:u;var i=u.url,r=i===void 0?"":i;c.method=c.method?c.method.toUpperCase():"GET",c.credentials=c.credentials||"same-origin";var d=Ke(l,p);if(a.req.originUrl=r,d){var I=r.indexOf("?")!==-1?"&":"?";a.req.url="".concat(r).concat(I).concat(d)}return a.req.options=c,s()}var ka=[ze,De,je],da=[Pe];E.globalMiddlewares=ka;E.defaultGlobalMiddlewaresLength=ka.length;E.coreMiddlewares=da;E.defaultCoreMiddlewaresLength=da.length;var Wn=function(){function a(s){vn(this,a),this.onion=new E([]),this.fetchIndex=0,this.mapCache=new Ye(s),this.initOptions=s,this.instanceRequestInterceptors=[],this.instanceResponseInterceptors=[]}return Ct(a,[{key:"use",value:function(o){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{global:!1,core:!1};return this.onion.use(o,e),this}},{key:"extendOptions",value:function(o){this.initOptions=ra(this.initOptions,o),this.mapCache.extendOptions(o)}},{key:"dealRequestInterceptors",value:function(o){var e=function(l,u){return l.then(function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return o.req.url=i.url||o.req.url,o.req.options=i.options||o.req.options,u(o.req.url,o.req.options)})},c=[].concat(_(a.requestInterceptors),_(this.instanceRequestInterceptors));return c.reduce(e,Promise.resolve()).then(function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return o.req.url=p.url||o.req.url,o.req.options=p.options||o.req.options,Promise.resolve()})}},{key:"request",value:function(o,e){var c=this,p=this.onion,l={req:{url:o,options:H(H({},e),{},{url:o})},res:null,cache:this.mapCache,responseInterceptors:[].concat(_(a.responseInterceptors),_(this.instanceResponseInterceptors))};if(typeof o!="string")throw new Error("url MUST be a string");return new Promise(function(u,i){c.dealRequestInterceptors(l).then(function(){return p.execute(l)}).then(function(){u(l.res)}).catch(function(r){var d=l.req.options.errorHandler;if(d)try{var I=d(r);u(I)}catch(C){i(C)}else i(r)})})}}],[{key:"requestUse",value:function(o){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{global:!0};if(typeof o!="function")throw new TypeError("Interceptor must be function!");e.global?a.requestInterceptors.push(o):this.instanceRequestInterceptors.push(o)}},{key:"responseUse",value:function(o){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{global:!0};if(typeof o!="function")throw new TypeError("Interceptor must be function!");e.global?a.responseInterceptors.push(o):this.instanceResponseInterceptors.push(o)}}]),a}();Wn.requestInterceptors=[Je];Wn.responseInterceptors=[];function Nn(a){this.message=a}Nn.prototype.toString=function(){return this.message?"Cancel: ".concat(this.message):"Cancel"};Nn.prototype.__CANCEL__=!0;function Pn(a){if(typeof a!="function")throw new TypeError("executor must be a function.");var s;this.promise=new Promise(function(c){s=c});var o=this;a(function(c){o.reason||(o.reason=new Nn(c),s(o.reason))})}Pn.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};Pn.source=function(){var s,o=new Pn(function(c){s=c});return{token:o,cancel:s}};function Ee(a){return!!(a&&a.__CANCEL__)}var ga=function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},o=new Wn(s),e=function(l){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=ra(o.initOptions,u);return o.request(l,i)};e.use=o.use.bind(o),e.fetchIndex=o.fetchIndex,e.interceptors={request:{use:Wn.requestUse.bind(o)},response:{use:Wn.responseUse.bind(o)}};var c=["get","post","delete","put","patch","head","options","rpc"];return c.forEach(function(p){e[p]=function(l,u){return e(l,H(H({},u),{},{method:p}))}}),e.Cancel=Nn,e.CancelToken=Pn,e.isCancel=Ee,e.extendOptions=o.extendOptions.bind(o),e.middlewares={instance:o.onion.middlewares,defaultInstance:o.onion.defaultMiddlewares,global:E.globalMiddlewares,core:E.coreMiddlewares},e};ga({parseResponse:!1});var Oe=ga({});const Qe=L({components:{IconBytedUpload:S},setup(){const a=w([]),s=w(!1);return{fileList:a,uploading:s,handleRemove:p=>{const l=a.value.indexOf(p),u=a.value.slice();u.splice(l,1),a.value=u},beforeUpload:p=>(a.value=[...a.value,p],!1),handleUpload:()=>{const p=new FormData;a.value.forEach(l=>{p.append("files[]",l)}),s.value=!0,Oe("https://www.mocky.io/v2/5cc8019d300000980a055e76",{method:"post",data:p}).then(()=>{a.value=[],s.value=!1,x.success("upload successfully.")}).catch(()=>{s.value=!1,x.error("upload failed.")})}}}}),_e={class:"clearfix"},Te=t(" Select File "),Me=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("clearfix"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-upload")]),t(),n("span",{class:"token attr-name"},":file-list"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileList"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":before-upload"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("beforeUpload"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@remove"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleRemove"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUpload")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
        Select File
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-upload")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(`
      `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileList.length === 0"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":loading"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("uploading"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 16px")]),n("span",{class:"token punctuation"},'"')])]),t(`
      `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleUpload"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      {{ uploading ? 'Uploading' : 'Start Upload' }}
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" UploadProps "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" request "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'umi-request'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedUpload "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-upload'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" message "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedUpload`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" fileList "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("UploadProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'fileList'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" uploading "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("boolean"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" handleRemove"),n("span",{class:"token operator"},":"),t(" UploadProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'onRemove'"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"file"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" index "),n("span",{class:"token operator"},"="),t(" fileList"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),t("file"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" newFileList "),n("span",{class:"token operator"},"="),t(" fileList"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      newFileList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"splice"),n("span",{class:"token punctuation"},"("),t("index"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      fileList`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" newFileList"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" beforeUpload"),n("span",{class:"token operator"},":"),t(" UploadProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'beforeUpload'"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"file"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      fileList`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),t("fileList"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},","),t(" file"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleUpload"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" formData "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"FormData"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      fileList`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),t("file"),n("span",{class:"token operator"},":"),t(" UploadProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'fileList'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"["),t("number"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        formData`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'files[]'"),n("span",{class:"token punctuation"},","),t(" file "),n("span",{class:"token keyword"},"as"),t(" any"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      uploading`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(`

      `),n("span",{class:"token comment"},"// You can use any AJAX library you like"),t(`
      `),n("span",{class:"token function"},"request"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'https://www.mocky.io/v2/5cc8019d300000980a055e76'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        method`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'post'"),n("span",{class:"token punctuation"},","),t(`
        data`),n("span",{class:"token operator"},":"),t(" formData"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
          fileList`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
          uploading`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
          message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'upload successfully.'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),t(`
        `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"catch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
          uploading`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
          message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'upload failed.'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      fileList`),n("span",{class:"token punctuation"},","),t(`
      uploading`),n("span",{class:"token punctuation"},","),t(`
      handleRemove`),n("span",{class:"token punctuation"},","),t(`
      beforeUpload`),n("span",{class:"token punctuation"},","),t(`
      handleUpload`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),qe=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),t(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("clearfix"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-upload")]),t(),n("span",{class:"token attr-name"},":file-list"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileList"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},":before-upload"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("beforeUpload"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@remove"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleRemove"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUpload")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
        Select File
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-upload")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(`
      `),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("primary"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileList.length === 0"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":loading"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("uploading"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-top"),n("span",{class:"token punctuation"},":"),t(" 16px")]),n("span",{class:"token punctuation"},'"')])]),t(`
      `),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleUpload"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      {{ uploading ? 'Uploading' : 'Start Upload' }}
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" request "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'umi-request'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedUpload "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-upload'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" message "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedUpload`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" fileList "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" uploading "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleRemove"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"file"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" index "),n("span",{class:"token operator"},"="),t(" fileList"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),t("file"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" newFileList "),n("span",{class:"token operator"},"="),t(" fileList"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"slice"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      newFileList`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"splice"),n("span",{class:"token punctuation"},"("),t("index"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      fileList`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(" newFileList"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"beforeUpload"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"file"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      fileList`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token operator"},"..."),t("fileList"),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},","),t(" file"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleUpload"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" formData "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"FormData"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      fileList`),n("span",{class:"token punctuation"},"."),t("value"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"file"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        formData`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'files[]'"),n("span",{class:"token punctuation"},","),t(" file"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      uploading`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// You can use any AJAX library you like"),t(`

      `),n("span",{class:"token function"},"request"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'https://www.mocky.io/v2/5cc8019d300000980a055e76'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        method`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'post'"),n("span",{class:"token punctuation"},","),t(`
        data`),n("span",{class:"token operator"},":"),t(" formData"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        fileList`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),t(`
        uploading`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'upload successfully.'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"catch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        uploading`),n("span",{class:"token punctuation"},"."),t("value "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},";"),t(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'upload failed.'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      fileList`),n("span",{class:"token punctuation"},","),t(`
      uploading`),n("span",{class:"token punctuation"},","),t(`
      handleRemove`),n("span",{class:"token punctuation"},","),t(`
      beforeUpload`),n("span",{class:"token punctuation"},","),t(`
      handleUpload`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function $e(a,s,o,e,c,p){const l=g("IconBytedUpload"),u=g("a-button"),i=g("a-upload"),r=g("demo-box");return y(),B(r,{jsfiddle:{us:"Upload files manually after `beforeUpload` returns `false`.",cn:"`beforeUpload` \u8FD4\u56DE `false` \u540E\uFF0C\u624B\u52A8\u4E0A\u4F20\u6587\u4EF6\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p><code>beforeUpload</code> \u8FD4\u56DE <code>false</code> \u540E\uFF0C\u624B\u52A8\u4E0A\u4F20\u6587\u4EF6\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Upload files manually after <code>beforeUpload</code> returns <code>false</code>.</p>
`,order:7,title:{"zh-CN":"\u624B\u52A8\u4E0A\u4F20","en-US":"Upload manually"},relativePath:"components/upload/demo/upload-manually.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXYgY2xhc3M9ImNsZWFyZml4Ij4KICAgIDxhLXVwbG9hZCA6ZmlsZS1saXN0PSJmaWxlTGlzdCIgOmJlZm9yZS11cGxvYWQ9ImJlZm9yZVVwbG9hZCIgQHJlbW92ZT0iaGFuZGxlUmVtb3ZlIj4KICAgICAgPGEtYnV0dG9uPgogICAgICAgIDxJY29uQnl0ZWRVcGxvYWQgLz4KICAgICAgICBTZWxlY3QgRmlsZQogICAgICA8L2EtYnV0dG9uPgogICAgPC9hLXVwbG9hZD4KICAgIDxhLWJ1dHRvbgogICAgICB0eXBlPSJwcmltYXJ5IgogICAgICA6ZGlzYWJsZWQ9ImZpbGVMaXN0Lmxlbmd0aCA9PT0gMCIKICAgICAgOmxvYWRpbmc9InVwbG9hZGluZyIKICAgICAgc3R5bGU9Im1hcmdpbi10b3A6IDE2cHgiCiAgICAgIEBjbGljaz0iaGFuZGxlVXBsb2FkIgogICAgPgogICAgICB7eyB1cGxvYWRpbmcgPyAnVXBsb2FkaW5nJyA6ICdTdGFydCBVcGxvYWQnIH19CiAgICA8L2EtYnV0dG9uPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHR5cGUgeyBVcGxvYWRQcm9wcyB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKaW1wb3J0IHJlcXVlc3QgZnJvbSAndW1pLXJlcXVlc3QnOwppbXBvcnQgSWNvbkJ5dGVkVXBsb2FkIGZyb20gJ0BmZTYvaWNvbi12dWUvbGliL2ljb25zL2J5dGVkLXVwbG9hZCc7CmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdAZmU2L3dhdGVyLXBybyc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgSWNvbkJ5dGVkVXBsb2FkLAogIH0sCiAgc2V0dXAoKSB7CiAgICBjb25zdCBmaWxlTGlzdCA9IHJlZjxVcGxvYWRQcm9wc1snZmlsZUxpc3QnXT4oW10pOwogICAgY29uc3QgdXBsb2FkaW5nID0gcmVmPGJvb2xlYW4+KGZhbHNlKTsKCiAgICBjb25zdCBoYW5kbGVSZW1vdmU6IFVwbG9hZFByb3BzWydvblJlbW92ZSddID0gKGZpbGUpID0+IHsKICAgICAgY29uc3QgaW5kZXggPSBmaWxlTGlzdC52YWx1ZS5pbmRleE9mKGZpbGUpOwogICAgICBjb25zdCBuZXdGaWxlTGlzdCA9IGZpbGVMaXN0LnZhbHVlLnNsaWNlKCk7CiAgICAgIG5ld0ZpbGVMaXN0LnNwbGljZShpbmRleCwgMSk7CiAgICAgIGZpbGVMaXN0LnZhbHVlID0gbmV3RmlsZUxpc3Q7CiAgICB9OwoKICAgIGNvbnN0IGJlZm9yZVVwbG9hZDogVXBsb2FkUHJvcHNbJ2JlZm9yZVVwbG9hZCddID0gKGZpbGUpID0+IHsKICAgICAgZmlsZUxpc3QudmFsdWUgPSBbLi4uZmlsZUxpc3QudmFsdWUsIGZpbGVdOwogICAgICByZXR1cm4gZmFsc2U7CiAgICB9OwoKICAgIGNvbnN0IGhhbmRsZVVwbG9hZCA9ICgpID0+IHsKICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTsKICAgICAgZmlsZUxpc3QudmFsdWUuZm9yRWFjaCgoZmlsZTogVXBsb2FkUHJvcHNbJ2ZpbGVMaXN0J11bbnVtYmVyXSkgPT4gewogICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZXNbXScsIGZpbGUgYXMgYW55KTsKICAgICAgfSk7CiAgICAgIHVwbG9hZGluZy52YWx1ZSA9IHRydWU7CgogICAgICAvLyBZb3UgY2FuIHVzZSBhbnkgQUpBWCBsaWJyYXJ5IHlvdSBsaWtlCiAgICAgIHJlcXVlc3QoJ2h0dHBzOi8vd3d3Lm1vY2t5LmlvL3YyLzVjYzgwMTlkMzAwMDAwOTgwYTA1NWU3NicsIHsKICAgICAgICBtZXRob2Q6ICdwb3N0JywKICAgICAgICBkYXRhOiBmb3JtRGF0YSwKICAgICAgfSkKICAgICAgICAudGhlbigoKSA9PiB7CiAgICAgICAgICBmaWxlTGlzdC52YWx1ZSA9IFtdOwogICAgICAgICAgdXBsb2FkaW5nLnZhbHVlID0gZmFsc2U7CiAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoJ3VwbG9hZCBzdWNjZXNzZnVsbHkuJyk7CiAgICAgICAgfSkKICAgICAgICAuY2F0Y2goKCkgPT4gewogICAgICAgICAgdXBsb2FkaW5nLnZhbHVlID0gZmFsc2U7CiAgICAgICAgICBtZXNzYWdlLmVycm9yKCd1cGxvYWQgZmFpbGVkLicpOwogICAgICAgIH0pOwogICAgfTsKCiAgICByZXR1cm4gewogICAgICBmaWxlTGlzdCwKICAgICAgdXBsb2FkaW5nLAogICAgICBoYW5kbGVSZW1vdmUsCiAgICAgIGJlZm9yZVVwbG9hZCwKICAgICAgaGFuZGxlVXBsb2FkLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXYgY2xhc3M9ImNsZWFyZml4Ij4KICAgIDxhLXVwbG9hZCA6ZmlsZS1saXN0PSJmaWxlTGlzdCIgOmJlZm9yZS11cGxvYWQ9ImJlZm9yZVVwbG9hZCIgQHJlbW92ZT0iaGFuZGxlUmVtb3ZlIj4KICAgICAgPGEtYnV0dG9uPgogICAgICAgIDxJY29uQnl0ZWRVcGxvYWQgLz4KICAgICAgICBTZWxlY3QgRmlsZQogICAgICA8L2EtYnV0dG9uPgogICAgPC9hLXVwbG9hZD4KICAgIDxhLWJ1dHRvbgogICAgICB0eXBlPSJwcmltYXJ5IgogICAgICA6ZGlzYWJsZWQ9ImZpbGVMaXN0Lmxlbmd0aCA9PT0gMCIKICAgICAgOmxvYWRpbmc9InVwbG9hZGluZyIKICAgICAgc3R5bGU9Im1hcmdpbi10b3A6IDE2cHgiCiAgICAgIEBjbGljaz0iaGFuZGxlVXBsb2FkIgogICAgPgogICAgICB7eyB1cGxvYWRpbmcgPyAnVXBsb2FkaW5nJyA6ICdTdGFydCBVcGxvYWQnIH19CiAgICA8L2EtYnV0dG9uPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgcmVxdWVzdCBmcm9tICd1bWktcmVxdWVzdCc7CmltcG9ydCBJY29uQnl0ZWRVcGxvYWQgZnJvbSAnQGZlNi9pY29uLXZ1ZS9saWIvaWNvbnMvYnl0ZWQtdXBsb2FkJzsKaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIEljb25CeXRlZFVwbG9hZCwKICB9LAoKICBzZXR1cCgpIHsKICAgIGNvbnN0IGZpbGVMaXN0ID0gcmVmKFtdKTsKICAgIGNvbnN0IHVwbG9hZGluZyA9IHJlZihmYWxzZSk7CgogICAgY29uc3QgaGFuZGxlUmVtb3ZlID0gZmlsZSA9PiB7CiAgICAgIGNvbnN0IGluZGV4ID0gZmlsZUxpc3QudmFsdWUuaW5kZXhPZihmaWxlKTsKICAgICAgY29uc3QgbmV3RmlsZUxpc3QgPSBmaWxlTGlzdC52YWx1ZS5zbGljZSgpOwogICAgICBuZXdGaWxlTGlzdC5zcGxpY2UoaW5kZXgsIDEpOwogICAgICBmaWxlTGlzdC52YWx1ZSA9IG5ld0ZpbGVMaXN0OwogICAgfTsKCiAgICBjb25zdCBiZWZvcmVVcGxvYWQgPSBmaWxlID0+IHsKICAgICAgZmlsZUxpc3QudmFsdWUgPSBbLi4uZmlsZUxpc3QudmFsdWUsIGZpbGVdOwogICAgICByZXR1cm4gZmFsc2U7CiAgICB9OwoKICAgIGNvbnN0IGhhbmRsZVVwbG9hZCA9ICgpID0+IHsKICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTsKICAgICAgZmlsZUxpc3QudmFsdWUuZm9yRWFjaChmaWxlID0+IHsKICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2ZpbGVzW10nLCBmaWxlKTsKICAgICAgfSk7CiAgICAgIHVwbG9hZGluZy52YWx1ZSA9IHRydWU7IC8vIFlvdSBjYW4gdXNlIGFueSBBSkFYIGxpYnJhcnkgeW91IGxpa2UKCiAgICAgIHJlcXVlc3QoJ2h0dHBzOi8vd3d3Lm1vY2t5LmlvL3YyLzVjYzgwMTlkMzAwMDAwOTgwYTA1NWU3NicsIHsKICAgICAgICBtZXRob2Q6ICdwb3N0JywKICAgICAgICBkYXRhOiBmb3JtRGF0YSwKICAgICAgfSkudGhlbigoKSA9PiB7CiAgICAgICAgZmlsZUxpc3QudmFsdWUgPSBbXTsKICAgICAgICB1cGxvYWRpbmcudmFsdWUgPSBmYWxzZTsKICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoJ3VwbG9hZCBzdWNjZXNzZnVsbHkuJyk7CiAgICAgIH0pLmNhdGNoKCgpID0+IHsKICAgICAgICB1cGxvYWRpbmcudmFsdWUgPSBmYWxzZTsKICAgICAgICBtZXNzYWdlLmVycm9yKCd1cGxvYWQgZmFpbGVkLicpOwogICAgICB9KTsKICAgIH07CgogICAgcmV0dXJuIHsKICAgICAgZmlsZUxpc3QsCiAgICAgIHVwbG9hZGluZywKICAgICAgaGFuZGxlUmVtb3ZlLAogICAgICBiZWZvcmVVcGxvYWQsCiAgICAgIGhhbmRsZVVwbG9hZCwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:k(()=>[n("div",_e,[m(i,{"file-list":a.fileList,"before-upload":a.beforeUpload,onRemove:a.handleRemove},{default:k(()=>[m(u,null,{default:k(()=>[m(l),Te]),_:1})]),_:1},8,["file-list","before-upload","onRemove"]),m(u,{type:"primary",disabled:a.fileList.length===0,loading:a.uploading,style:{"margin-top":"16px"},onClick:a.handleUpload},{default:k(()=>[t(vt(a.uploading?"Uploading":"Start Upload"),1)]),_:1},8,["disabled","loading","onClick"])])]),htmlCode:k(()=>[Me]),jsVersionHtml:k(()=>[qe]),_:1},8,["jsfiddle"])}var nc=G(Qe,[["render",$e]]);const tc=L({components:{IconBytedUpload:S}}),ac=t(" Upload Directory "),sc=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-upload")]),t(),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"directory"),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUpload")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      Upload Directory
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-upload")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedUpload "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-upload'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedUpload`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),oc=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-upload")]),t(),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"directory"),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUpload")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      Upload Directory
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-upload")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedUpload "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-upload'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedUpload`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function ec(a,s,o,e,c,p){const l=g("IconBytedUpload"),u=g("a-button"),i=g("a-upload"),r=g("demo-box");return y(),B(r,{jsfiddle:{us:"You can select and upload a whole directory.",cn:"\u652F\u6301\u4E0A\u4F20\u4E00\u4E2A\u6587\u4EF6\u5939\u91CC\u7684\u6240\u6709\u6587\u4EF6\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u652F\u6301\u4E0A\u4F20\u4E00\u4E2A\u6587\u4EF6\u5939\u91CC\u7684\u6240\u6709\u6587\u4EF6\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>You can select and upload a whole directory.</p>
`,order:8,title:{"zh-CN":"\u6587\u4EF6\u5939\u4E0A\u4F20","en-US":"Upload directory"},relativePath:"components/upload/demo/directory.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZCBhY3Rpb249Imh0dHBzOi8vd3d3Lm1vY2t5LmlvL3YyLzVjYzgwMTlkMzAwMDAwOTgwYTA1NWU3NiIgZGlyZWN0b3J5PgogICAgPGEtYnV0dG9uPgogICAgICA8SWNvbkJ5dGVkVXBsb2FkIC8+CiAgICAgIFVwbG9hZCBEaXJlY3RvcnkKICAgIDwvYS1idXR0b24+CiAgPC9hLXVwbG9hZD4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7CmltcG9ydCBJY29uQnl0ZWRVcGxvYWQgZnJvbSAnQGZlNi9pY29uLXZ1ZS9saWIvaWNvbnMvYnl0ZWQtdXBsb2FkJzsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgSWNvbkJ5dGVkVXBsb2FkLAogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZCBhY3Rpb249Imh0dHBzOi8vd3d3Lm1vY2t5LmlvL3YyLzVjYzgwMTlkMzAwMDAwOTgwYTA1NWU3NiIgZGlyZWN0b3J5PgogICAgPGEtYnV0dG9uPgogICAgICA8SWNvbkJ5dGVkVXBsb2FkIC8+CiAgICAgIFVwbG9hZCBEaXJlY3RvcnkKICAgIDwvYS1idXR0b24+CiAgPC9hLXVwbG9hZD4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKaW1wb3J0IEljb25CeXRlZFVwbG9hZCBmcm9tICdAZmU2L2ljb24tdnVlL2xpYi9pY29ucy9ieXRlZC11cGxvYWQnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIEljb25CeXRlZFVwbG9hZCwKICB9LAp9KTsKPC9zY3JpcHQ+"}},{default:k(()=>[m(i,{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",directory:""},{default:k(()=>[m(u,null,{default:k(()=>[m(l),ac]),_:1})]),_:1})]),htmlCode:k(()=>[sc]),jsVersionHtml:k(()=>[oc]),_:1},8,["jsfiddle"])}var cc=G(tc,[["render",ec]]);const pc=L({components:{IconBytedUpload:S},setup(){return{previewFile:async s=>{console.log("Your upload file:",s);const o=await fetch("https://next.json-generator.com/api/json/get/4ytyBoLK8",{method:"POST",body:s}),{thumbnail:e}=await o.json();return e},fileList:w([])}}}),lc=t(" Upload "),uc=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-upload")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileList"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"list-type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("picture"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("//jsonplaceholder.typicode.com/posts/"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":preview-file"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("previewFile"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUpload")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
        Upload
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-upload")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" UploadProps "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedUpload "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-upload'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedUpload`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" previewFile"),n("span",{class:"token operator"},":"),t(" UploadProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'previewFile'"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"async"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"file"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Your upload file:'"),n("span",{class:"token punctuation"},","),t(" file"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token comment"},"// Your process logic. Here we just mock to the same file"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" res "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"await"),t(),n("span",{class:"token function"},"fetch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'https://next.json-generator.com/api/json/get/4ytyBoLK8'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        method`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'POST'"),n("span",{class:"token punctuation"},","),t(`
        body`),n("span",{class:"token operator"},":"),t(" file"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"{"),t(" thumbnail "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"await"),t(" res"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"json"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"return"),t(" thumbnail"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      previewFile`),n("span",{class:"token punctuation"},","),t(`
      fileList`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),ic=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-upload")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileList"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"list-type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("picture"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("//jsonplaceholder.typicode.com/posts/"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":preview-file"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("previewFile"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUpload")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
        Upload
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-upload")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedUpload "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-upload'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedUpload`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"previewFile"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"async"),t(),n("span",{class:"token parameter"},"file"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Your upload file:'"),n("span",{class:"token punctuation"},","),t(" file"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(),n("span",{class:"token comment"},"// Your process logic. Here we just mock to the same file"),t(`

      `),n("span",{class:"token keyword"},"const"),t(" res "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"await"),t(),n("span",{class:"token function"},"fetch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'https://next.json-generator.com/api/json/get/4ytyBoLK8'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
        method`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'POST'"),n("span",{class:"token punctuation"},","),t(`
        body`),n("span",{class:"token operator"},":"),t(" file"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token punctuation"},"{"),t(`
        thumbnail`),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"await"),t(" res"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"json"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"return"),t(" thumbnail"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      previewFile`),n("span",{class:"token punctuation"},","),t(`
      fileList`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function rc(a,s,o,e,c,p){const l=g("IconBytedUpload"),u=g("a-button"),i=g("a-upload"),r=g("demo-box");return y(),B(r,{jsfiddle:{us:"Customize local preview. Can handle with non-image format files such as video.",cn:"\u81EA\u5B9A\u4E49\u672C\u5730\u9884\u89C8\uFF0C\u7528\u4E8E\u5904\u7406\u975E\u56FE\u7247\u683C\u5F0F\u6587\u4EF6\uFF08\u4F8B\u5982\u89C6\u9891\u6587\u4EF6\uFF09\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u81EA\u5B9A\u4E49\u672C\u5730\u9884\u89C8\uFF0C\u7528\u4E8E\u5904\u7406\u975E\u56FE\u7247\u683C\u5F0F\u6587\u4EF6\uFF08\u4F8B\u5982\u89C6\u9891\u6587\u4EF6\uFF09\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Customize local preview. Can handle with non-image format files such as video.</p>
`,order:9,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u9884\u89C8","en-US":"Customize preview file"},relativePath:"components/upload/demo/preview-file.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS11cGxvYWQKICAgICAgdi1tb2RlbDpmaWxlLWxpc3Q9ImZpbGVMaXN0IgogICAgICBsaXN0LXR5cGU9InBpY3R1cmUiCiAgICAgIGFjdGlvbj0iLy9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLyIKICAgICAgOnByZXZpZXctZmlsZT0icHJldmlld0ZpbGUiCiAgICA+CiAgICAgIDxhLWJ1dHRvbj4KICAgICAgICA8SWNvbkJ5dGVkVXBsb2FkIC8+CiAgICAgICAgVXBsb2FkCiAgICAgIDwvYS1idXR0b24+CiAgICA8L2EtdXBsb2FkPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHR5cGUgeyBVcGxvYWRQcm9wcyB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKaW1wb3J0IEljb25CeXRlZFVwbG9hZCBmcm9tICdAZmU2L2ljb24tdnVlL2xpYi9pY29ucy9ieXRlZC11cGxvYWQnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIEljb25CeXRlZFVwbG9hZCwKICB9LAogIHNldHVwKCkgewogICAgY29uc3QgcHJldmlld0ZpbGU6IFVwbG9hZFByb3BzWydwcmV2aWV3RmlsZSddID0gYXN5bmMgKGZpbGUpID0+IHsKICAgICAgY29uc29sZS5sb2coJ1lvdXIgdXBsb2FkIGZpbGU6JywgZmlsZSk7CiAgICAgIC8vIFlvdXIgcHJvY2VzcyBsb2dpYy4gSGVyZSB3ZSBqdXN0IG1vY2sgdG8gdGhlIHNhbWUgZmlsZQogICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9uZXh0Lmpzb24tZ2VuZXJhdG9yLmNvbS9hcGkvanNvbi9nZXQvNHl0eUJvTEs4JywgewogICAgICAgIG1ldGhvZDogJ1BPU1QnLAogICAgICAgIGJvZHk6IGZpbGUsCiAgICAgIH0pOwogICAgICBjb25zdCB7IHRodW1ibmFpbCB9ID0gYXdhaXQgcmVzLmpzb24oKTsKICAgICAgcmV0dXJuIHRodW1ibmFpbDsKICAgIH07CiAgICByZXR1cm4gewogICAgICBwcmV2aWV3RmlsZSwKICAgICAgZmlsZUxpc3Q6IHJlZihbXSksCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS11cGxvYWQKICAgICAgdi1tb2RlbDpmaWxlLWxpc3Q9ImZpbGVMaXN0IgogICAgICBsaXN0LXR5cGU9InBpY3R1cmUiCiAgICAgIGFjdGlvbj0iLy9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzLyIKICAgICAgOnByZXZpZXctZmlsZT0icHJldmlld0ZpbGUiCiAgICA+CiAgICAgIDxhLWJ1dHRvbj4KICAgICAgICA8SWNvbkJ5dGVkVXBsb2FkIC8+CiAgICAgICAgVXBsb2FkCiAgICAgIDwvYS1idXR0b24+CiAgICA8L2EtdXBsb2FkPgogIDwvZGl2Pgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgSWNvbkJ5dGVkVXBsb2FkIGZyb20gJ0BmZTYvaWNvbi12dWUvbGliL2ljb25zL2J5dGVkLXVwbG9hZCc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBjb21wb25lbnRzOiB7CiAgICBJY29uQnl0ZWRVcGxvYWQsCiAgfSwKCiAgc2V0dXAoKSB7CiAgICBjb25zdCBwcmV2aWV3RmlsZSA9IGFzeW5jIGZpbGUgPT4gewogICAgICBjb25zb2xlLmxvZygnWW91ciB1cGxvYWQgZmlsZTonLCBmaWxlKTsgLy8gWW91ciBwcm9jZXNzIGxvZ2ljLiBIZXJlIHdlIGp1c3QgbW9jayB0byB0aGUgc2FtZSBmaWxlCgogICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9uZXh0Lmpzb24tZ2VuZXJhdG9yLmNvbS9hcGkvanNvbi9nZXQvNHl0eUJvTEs4JywgewogICAgICAgIG1ldGhvZDogJ1BPU1QnLAogICAgICAgIGJvZHk6IGZpbGUsCiAgICAgIH0pOwogICAgICBjb25zdCB7CiAgICAgICAgdGh1bWJuYWlsLAogICAgICB9ID0gYXdhaXQgcmVzLmpzb24oKTsKICAgICAgcmV0dXJuIHRodW1ibmFpbDsKICAgIH07CgogICAgcmV0dXJuIHsKICAgICAgcHJldmlld0ZpbGUsCiAgICAgIGZpbGVMaXN0OiByZWYoW10pLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:k(()=>[n("div",null,[m(i,{"file-list":a.fileList,"onUpdate:file-list":s[0]||(s[0]=d=>a.fileList=d),"list-type":"picture",action:"//jsonplaceholder.typicode.com/posts/","preview-file":a.previewFile},{default:k(()=>[m(u,null,{default:k(()=>[m(l),lc]),_:1})]),_:1},8,["file-list","preview-file"])])]),htmlCode:k(()=>[uc]),jsVersionHtml:k(()=>[ic]),_:1},8,["jsfiddle"])}var kc=G(pc,[["render",rc]]);const dc=L({components:{IconBytedUpload:S},setup(){return{beforeUpload:s=>new Promise(o=>{const e=new FileReader;e.readAsDataURL(s),e.onload=()=>{const c=document.createElement("img");c.src=e.result,c.onload=()=>{const p=document.createElement("canvas");p.width=c.naturalWidth,p.height=c.naturalHeight;const l=p.getContext("2d");l.drawImage(c,0,0),l.fillStyle="red",l.textBaseline="middle",l.font="33px Arial",l.fillText("Ant Design Vue",20,20),p.toBlob(o)}}}),fileList:w([])}}}),gc=t(" Upload "),mc=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-upload")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileList"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":before-upload"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("beforeUpload"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUpload")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
        Upload
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-upload")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" UploadProps "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedUpload "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-upload'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedUpload`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" beforeUpload"),n("span",{class:"token operator"},":"),t(" UploadProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'beforeUpload'"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"file"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"resolve"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"const"),t(" reader "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"FileReader"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        reader`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"readAsDataURL"),n("span",{class:"token punctuation"},"("),t("file"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        reader`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"onload"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token keyword"},"const"),t(" img"),n("span",{class:"token operator"},":"),t(" HTMLImageElement "),n("span",{class:"token operator"},"="),t(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"createElement"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'img'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
          img`),n("span",{class:"token punctuation"},"."),t("src "),n("span",{class:"token operator"},"="),t(" reader"),n("span",{class:"token punctuation"},"."),t("result "),n("span",{class:"token keyword"},"as"),t(" string"),n("span",{class:"token punctuation"},";"),t(`
          img`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"onload"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token keyword"},"const"),t(" canvas "),n("span",{class:"token operator"},"="),t(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"createElement"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'canvas'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
            canvas`),n("span",{class:"token punctuation"},"."),t("width "),n("span",{class:"token operator"},"="),t(" img"),n("span",{class:"token punctuation"},"."),t("naturalWidth"),n("span",{class:"token punctuation"},";"),t(`
            canvas`),n("span",{class:"token punctuation"},"."),t("height "),n("span",{class:"token operator"},"="),t(" img"),n("span",{class:"token punctuation"},"."),t("naturalHeight"),n("span",{class:"token punctuation"},";"),t(`
            `),n("span",{class:"token keyword"},"const"),t(" ctx "),n("span",{class:"token operator"},"="),t(" canvas"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getContext"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'2d'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
            ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"drawImage"),n("span",{class:"token punctuation"},"("),t("img"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
            ctx`),n("span",{class:"token punctuation"},"."),t("fillStyle "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'red'"),n("span",{class:"token punctuation"},";"),t(`
            ctx`),n("span",{class:"token punctuation"},"."),t("textBaseline "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'middle'"),n("span",{class:"token punctuation"},";"),t(`
            ctx`),n("span",{class:"token punctuation"},"."),t("font "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'33px Arial'"),n("span",{class:"token punctuation"},";"),t(`
            ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fillText"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Ant Design Vue'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
            canvas`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toBlob"),n("span",{class:"token punctuation"},"("),t("resolve"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      beforeUpload`),n("span",{class:"token punctuation"},","),t(`
      fileList`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Ic=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-upload")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileList"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":before-upload"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("beforeUpload"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUpload")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
        Upload
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-upload")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("div")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedUpload "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-upload'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedUpload`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"beforeUpload"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"file"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"resolve"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token keyword"},"const"),t(" reader "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token keyword"},"new"),t(),n("span",{class:"token class-name"},"FileReader"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
        reader`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"readAsDataURL"),n("span",{class:"token punctuation"},"("),t("file"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

        reader`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"onload"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
          `),n("span",{class:"token keyword"},"const"),t(" img "),n("span",{class:"token operator"},"="),t(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"createElement"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'img'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
          img`),n("span",{class:"token punctuation"},"."),t("src "),n("span",{class:"token operator"},"="),t(" reader"),n("span",{class:"token punctuation"},"."),t("result"),n("span",{class:"token punctuation"},";"),t(`

          img`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"onload"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
            `),n("span",{class:"token keyword"},"const"),t(" canvas "),n("span",{class:"token operator"},"="),t(" document"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"createElement"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'canvas'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
            canvas`),n("span",{class:"token punctuation"},"."),t("width "),n("span",{class:"token operator"},"="),t(" img"),n("span",{class:"token punctuation"},"."),t("naturalWidth"),n("span",{class:"token punctuation"},";"),t(`
            canvas`),n("span",{class:"token punctuation"},"."),t("height "),n("span",{class:"token operator"},"="),t(" img"),n("span",{class:"token punctuation"},"."),t("naturalHeight"),n("span",{class:"token punctuation"},";"),t(`
            `),n("span",{class:"token keyword"},"const"),t(" ctx "),n("span",{class:"token operator"},"="),t(" canvas"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"getContext"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'2d'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
            ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"drawImage"),n("span",{class:"token punctuation"},"("),t("img"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
            ctx`),n("span",{class:"token punctuation"},"."),t("fillStyle "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'red'"),n("span",{class:"token punctuation"},";"),t(`
            ctx`),n("span",{class:"token punctuation"},"."),t("textBaseline "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'middle'"),n("span",{class:"token punctuation"},";"),t(`
            ctx`),n("span",{class:"token punctuation"},"."),t("font "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token string"},"'33px Arial'"),n("span",{class:"token punctuation"},";"),t(`
            ctx`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"fillText"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'Ant Design Vue'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token number"},"20"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
            canvas`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toBlob"),n("span",{class:"token punctuation"},"("),t("resolve"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
          `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      beforeUpload`),n("span",{class:"token punctuation"},","),t(`
      fileList`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function Cc(a,s,o,e,c,p){const l=g("IconBytedUpload"),u=g("a-button"),i=g("a-upload"),r=g("demo-box");return y(),B(r,{jsfiddle:{us:"Use `beforeUpload` for transform file before request such as add a watermark.",cn:"\u4F7F\u7528 `beforeUpload` \u8F6C\u6362\u4E0A\u4F20\u7684\u6587\u4EF6\uFF08\u4F8B\u5982\u6DFB\u52A0\u6C34\u5370\uFF09\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4F7F\u7528 <code>beforeUpload</code> \u8F6C\u6362\u4E0A\u4F20\u7684\u6587\u4EF6\uFF08\u4F8B\u5982\u6DFB\u52A0\u6C34\u5370\uFF09\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Use <code>beforeUpload</code> for transform file before request such as add a watermark.</p>
`,order:10,title:{"zh-CN":"\u4E0A\u4F20\u524D\u8F6C\u6362\u6587\u4EF6","en-US":"Transform file before request"},relativePath:"components/upload/demo/transform-file.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS11cGxvYWQKICAgICAgdi1tb2RlbDpmaWxlLWxpc3Q9ImZpbGVMaXN0IgogICAgICBhY3Rpb249Imh0dHBzOi8vd3d3Lm1vY2t5LmlvL3YyLzVjYzgwMTlkMzAwMDAwOTgwYTA1NWU3NiIKICAgICAgOmJlZm9yZS11cGxvYWQ9ImJlZm9yZVVwbG9hZCIKICAgID4KICAgICAgPGEtYnV0dG9uPgogICAgICAgIDxJY29uQnl0ZWRVcGxvYWQgLz4KICAgICAgICBVcGxvYWQKICAgICAgPC9hLWJ1dHRvbj4KICAgIDwvYS11cGxvYWQ+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgdHlwZSB7IFVwbG9hZFByb3BzIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwppbXBvcnQgSWNvbkJ5dGVkVXBsb2FkIGZyb20gJ0BmZTYvaWNvbi12dWUvbGliL2ljb25zL2J5dGVkLXVwbG9hZCc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgSWNvbkJ5dGVkVXBsb2FkLAogIH0sCiAgc2V0dXAoKSB7CiAgICBjb25zdCBiZWZvcmVVcGxvYWQ6IFVwbG9hZFByb3BzWydiZWZvcmVVcGxvYWQnXSA9IChmaWxlKSA9PiB7CiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gewogICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7CiAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoZmlsZSk7CiAgICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHsKICAgICAgICAgIGNvbnN0IGltZzogSFRNTEltYWdlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpOwogICAgICAgICAgaW1nLnNyYyA9IHJlYWRlci5yZXN1bHQgYXMgc3RyaW5nOwogICAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHsKICAgICAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7CiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGltZy5uYXR1cmFsV2lkdGg7CiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbWcubmF0dXJhbEhlaWdodDsKICAgICAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7CiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTsKICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZWQnOwogICAgICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7CiAgICAgICAgICAgIGN0eC5mb250ID0gJzMzcHggQXJpYWwnOwogICAgICAgICAgICBjdHguZmlsbFRleHQoJ0FudCBEZXNpZ24gVnVlJywgMjAsIDIwKTsKICAgICAgICAgICAgY2FudmFzLnRvQmxvYihyZXNvbHZlKTsKICAgICAgICAgIH07CiAgICAgICAgfTsKICAgICAgfSk7CiAgICB9OwogICAgcmV0dXJuIHsKICAgICAgYmVmb3JlVXBsb2FkLAogICAgICBmaWxlTGlzdDogcmVmKFtdKSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXY+CiAgICA8YS11cGxvYWQKICAgICAgdi1tb2RlbDpmaWxlLWxpc3Q9ImZpbGVMaXN0IgogICAgICBhY3Rpb249Imh0dHBzOi8vd3d3Lm1vY2t5LmlvL3YyLzVjYzgwMTlkMzAwMDAwOTgwYTA1NWU3NiIKICAgICAgOmJlZm9yZS11cGxvYWQ9ImJlZm9yZVVwbG9hZCIKICAgID4KICAgICAgPGEtYnV0dG9uPgogICAgICAgIDxJY29uQnl0ZWRVcGxvYWQgLz4KICAgICAgICBVcGxvYWQKICAgICAgPC9hLWJ1dHRvbj4KICAgIDwvYS11cGxvYWQ+CiAgPC9kaXY+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCBJY29uQnl0ZWRVcGxvYWQgZnJvbSAnQGZlNi9pY29uLXZ1ZS9saWIvaWNvbnMvYnl0ZWQtdXBsb2FkJzsKaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIEljb25CeXRlZFVwbG9hZCwKICB9LAoKICBzZXR1cCgpIHsKICAgIGNvbnN0IGJlZm9yZVVwbG9hZCA9IGZpbGUgPT4gewogICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7CiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTsKICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTsKCiAgICAgICAgcmVhZGVyLm9ubG9hZCA9ICgpID0+IHsKICAgICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpOwogICAgICAgICAgaW1nLnNyYyA9IHJlYWRlci5yZXN1bHQ7CgogICAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHsKICAgICAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7CiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGltZy5uYXR1cmFsV2lkdGg7CiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBpbWcubmF0dXJhbEhlaWdodDsKICAgICAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7CiAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoaW1nLCAwLCAwKTsKICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZWQnOwogICAgICAgICAgICBjdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7CiAgICAgICAgICAgIGN0eC5mb250ID0gJzMzcHggQXJpYWwnOwogICAgICAgICAgICBjdHguZmlsbFRleHQoJ0FudCBEZXNpZ24gVnVlJywgMjAsIDIwKTsKICAgICAgICAgICAgY2FudmFzLnRvQmxvYihyZXNvbHZlKTsKICAgICAgICAgIH07CiAgICAgICAgfTsKICAgICAgfSk7CiAgICB9OwoKICAgIHJldHVybiB7CiAgICAgIGJlZm9yZVVwbG9hZCwKICAgICAgZmlsZUxpc3Q6IHJlZihbXSksCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:k(()=>[n("div",null,[m(i,{"file-list":a.fileList,"onUpdate:file-list":s[0]||(s[0]=d=>a.fileList=d),action:"https://www.mocky.io/v2/5cc8019d300000980a055e76","before-upload":a.beforeUpload},{default:k(()=>[m(u,null,{default:k(()=>[m(l),gc]),_:1})]),_:1},8,["file-list","before-upload"])])]),htmlCode:k(()=>[mc]),jsVersionHtml:k(()=>[Ic]),_:1},8,["jsfiddle"])}var fc=G(dc,[["render",Cc]]);const hc=L({components:{IconBytedUpload:S},setup(){const a=e=>{e.file.status!=="uploading"&&console.log(e.file,e.fileList),e.file.status==="done"?x.success(`${e.file.name} file uploaded successfully`):e.file.status==="error"&&x.error(`${e.file.name} file upload failed.`)};return{fileList:w([]),headers:{authorization:"authorization-text"},handleChange:a,progress:{strokeColor:{"0%":"#108ee9","100%":"#87d068"},strokeWidth:3,format:e=>`${parseFloat(e.toFixed(2))}%`,class:"test"}}}}),bc=t(" Click to Upload "),Ac=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-upload")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileList"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("file"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":headers"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("headers"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":progress"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("progress"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleChange"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUpload")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      Click to Upload
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-upload")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" UploadChangeParam"),n("span",{class:"token punctuation"},","),t(" UploadProps "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" message "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedUpload "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-upload'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedUpload`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("info"),n("span",{class:"token operator"},":"),t(" UploadChangeParam")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("status "),n("span",{class:"token operator"},"!=="),t(),n("span",{class:"token string"},"'uploading'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},","),t(" info"),n("span",{class:"token punctuation"},"."),t("fileList"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("status "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," file uploaded successfully"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("status "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," file upload failed."),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" fileList "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" progress"),n("span",{class:"token operator"},":"),t(" UploadProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'progress'"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(`
      strokeColor`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token string"},"'0%'"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'#108ee9'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token string"},"'100%'"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'#87d068'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      strokeWidth`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token function-variable function"},"format"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"percent"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),n("span",{class:"token function"},"parseFloat"),n("span",{class:"token punctuation"},"("),t("percent"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toFixed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"%"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'test'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      fileList`),n("span",{class:"token punctuation"},","),t(`
      headers`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        authorization`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'authorization-text'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
      progress`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),yc=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-upload")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileList"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("file"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":headers"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("headers"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":progress"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("progress"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleChange"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUpload")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      Click to Upload
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-upload")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" message "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedUpload "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-upload'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedUpload`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"info"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("status "),n("span",{class:"token operator"},"!=="),t(),n("span",{class:"token string"},"'uploading'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},","),t(" info"),n("span",{class:"token punctuation"},"."),t("fileList"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`

      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("status "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," file uploaded successfully"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("status "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," file upload failed."),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" fileList "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" progress "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"{"),t(`
      strokeColor`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        `),n("span",{class:"token string"},"'0%'"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'#108ee9'"),n("span",{class:"token punctuation"},","),t(`
        `),n("span",{class:"token string"},"'100%'"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'#87d068'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      strokeWidth`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token number"},"3"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token function-variable function"},"format"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token parameter"},"percent"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),n("span",{class:"token function"},"parseFloat"),n("span",{class:"token punctuation"},"("),t("percent"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toFixed"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"2"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"},"%"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token keyword"},"class"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'test'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      fileList`),n("span",{class:"token punctuation"},","),t(`
      headers`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        authorization`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'authorization-text'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
      progress`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function wc(a,s,o,e,c,p){const l=g("IconBytedUpload"),u=g("a-button"),i=g("a-upload"),r=g("demo-box");return y(),B(r,{jsfiddle:{us:"Use `progress` for customize progress bar.",cn:"\u4F7F\u7528 `progress` \u5C5E\u6027\u81EA\u5B9A\u4E49\u8FDB\u5EA6\u6761\u6837\u5F0F\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4F7F\u7528 <code>progress</code> \u5C5E\u6027\u81EA\u5B9A\u4E49\u8FDB\u5EA6\u6761\u6837\u5F0F\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Use <code>progress</code> for customize progress bar.</p>
`,order:15,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u8FDB\u5EA6\u6761\u6837\u5F0F","en-US":"Customize Progress Bar"},relativePath:"components/upload/demo/customize-progress-bar.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZAogICAgdi1tb2RlbDpmaWxlLWxpc3Q9ImZpbGVMaXN0IgogICAgbmFtZT0iZmlsZSIKICAgIGFjdGlvbj0iaHR0cHM6Ly93d3cubW9ja3kuaW8vdjIvNWNjODAxOWQzMDAwMDA5ODBhMDU1ZTc2IgogICAgOmhlYWRlcnM9ImhlYWRlcnMiCiAgICA6cHJvZ3Jlc3M9InByb2dyZXNzIgogICAgQGNoYW5nZT0iaGFuZGxlQ2hhbmdlIgogID4KICAgIDxhLWJ1dHRvbj4KICAgICAgPEljb25CeXRlZFVwbG9hZCAvPgogICAgICBDbGljayB0byBVcGxvYWQKICAgIDwvYS1idXR0b24+CiAgPC9hLXVwbG9hZD4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB0eXBlIHsgVXBsb2FkQ2hhbmdlUGFyYW0sIFVwbG9hZFByb3BzIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwppbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwppbXBvcnQgSWNvbkJ5dGVkVXBsb2FkIGZyb20gJ0BmZTYvaWNvbi12dWUvbGliL2ljb25zL2J5dGVkLXVwbG9hZCc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgSWNvbkJ5dGVkVXBsb2FkLAogIH0sCiAgc2V0dXAoKSB7CiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoaW5mbzogVXBsb2FkQ2hhbmdlUGFyYW0pID0+IHsKICAgICAgaWYgKGluZm8uZmlsZS5zdGF0dXMgIT09ICd1cGxvYWRpbmcnKSB7CiAgICAgICAgY29uc29sZS5sb2coaW5mby5maWxlLCBpbmZvLmZpbGVMaXN0KTsKICAgICAgfQogICAgICBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gJ2RvbmUnKSB7CiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKGAke2luZm8uZmlsZS5uYW1lfSBmaWxlIHVwbG9hZGVkIHN1Y2Nlc3NmdWxseWApOwogICAgICB9IGVsc2UgaWYgKGluZm8uZmlsZS5zdGF0dXMgPT09ICdlcnJvcicpIHsKICAgICAgICBtZXNzYWdlLmVycm9yKGAke2luZm8uZmlsZS5uYW1lfSBmaWxlIHVwbG9hZCBmYWlsZWQuYCk7CiAgICAgIH0KICAgIH07CgogICAgY29uc3QgZmlsZUxpc3QgPSByZWYoW10pOwogICAgY29uc3QgcHJvZ3Jlc3M6IFVwbG9hZFByb3BzWydwcm9ncmVzcyddID0gewogICAgICBzdHJva2VDb2xvcjogewogICAgICAgICcwJSc6ICcjMTA4ZWU5JywKICAgICAgICAnMTAwJSc6ICcjODdkMDY4JywKICAgICAgfSwKICAgICAgc3Ryb2tlV2lkdGg6IDMsCiAgICAgIGZvcm1hdDogKHBlcmNlbnQpID0+IGAke3BhcnNlRmxvYXQocGVyY2VudC50b0ZpeGVkKDIpKX0lYCwKICAgICAgY2xhc3M6ICd0ZXN0JywKICAgIH07CiAgICByZXR1cm4gewogICAgICBmaWxlTGlzdCwKICAgICAgaGVhZGVyczogewogICAgICAgIGF1dGhvcml6YXRpb246ICdhdXRob3JpemF0aW9uLXRleHQnLAogICAgICB9LAogICAgICBoYW5kbGVDaGFuZ2UsCiAgICAgIHByb2dyZXNzLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZAogICAgdi1tb2RlbDpmaWxlLWxpc3Q9ImZpbGVMaXN0IgogICAgbmFtZT0iZmlsZSIKICAgIGFjdGlvbj0iaHR0cHM6Ly93d3cubW9ja3kuaW8vdjIvNWNjODAxOWQzMDAwMDA5ODBhMDU1ZTc2IgogICAgOmhlYWRlcnM9ImhlYWRlcnMiCiAgICA6cHJvZ3Jlc3M9InByb2dyZXNzIgogICAgQGNoYW5nZT0iaGFuZGxlQ2hhbmdlIgogID4KICAgIDxhLWJ1dHRvbj4KICAgICAgPEljb25CeXRlZFVwbG9hZCAvPgogICAgICBDbGljayB0byBVcGxvYWQKICAgIDwvYS1idXR0b24+CiAgPC9hLXVwbG9hZD4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKaW1wb3J0IEljb25CeXRlZFVwbG9hZCBmcm9tICdAZmU2L2ljb24tdnVlL2xpYi9pY29ucy9ieXRlZC11cGxvYWQnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgSWNvbkJ5dGVkVXBsb2FkLAogIH0sCgogIHNldHVwKCkgewogICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gaW5mbyA9PiB7CiAgICAgIGlmIChpbmZvLmZpbGUuc3RhdHVzICE9PSAndXBsb2FkaW5nJykgewogICAgICAgIGNvbnNvbGUubG9nKGluZm8uZmlsZSwgaW5mby5maWxlTGlzdCk7CiAgICAgIH0KCiAgICAgIGlmIChpbmZvLmZpbGUuc3RhdHVzID09PSAnZG9uZScpIHsKICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoYCR7aW5mby5maWxlLm5hbWV9IGZpbGUgdXBsb2FkZWQgc3VjY2Vzc2Z1bGx5YCk7CiAgICAgIH0gZWxzZSBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gJ2Vycm9yJykgewogICAgICAgIG1lc3NhZ2UuZXJyb3IoYCR7aW5mby5maWxlLm5hbWV9IGZpbGUgdXBsb2FkIGZhaWxlZC5gKTsKICAgICAgfQogICAgfTsKCiAgICBjb25zdCBmaWxlTGlzdCA9IHJlZihbXSk7CiAgICBjb25zdCBwcm9ncmVzcyA9IHsKICAgICAgc3Ryb2tlQ29sb3I6IHsKICAgICAgICAnMCUnOiAnIzEwOGVlOScsCiAgICAgICAgJzEwMCUnOiAnIzg3ZDA2OCcsCiAgICAgIH0sCiAgICAgIHN0cm9rZVdpZHRoOiAzLAogICAgICBmb3JtYXQ6IHBlcmNlbnQgPT4gYCR7cGFyc2VGbG9hdChwZXJjZW50LnRvRml4ZWQoMikpfSVgLAogICAgICBjbGFzczogJ3Rlc3QnLAogICAgfTsKICAgIHJldHVybiB7CiAgICAgIGZpbGVMaXN0LAogICAgICBoZWFkZXJzOiB7CiAgICAgICAgYXV0aG9yaXphdGlvbjogJ2F1dGhvcml6YXRpb24tdGV4dCcsCiAgICAgIH0sCiAgICAgIGhhbmRsZUNoYW5nZSwKICAgICAgcHJvZ3Jlc3MsCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:k(()=>[m(i,{"file-list":a.fileList,"onUpdate:file-list":s[0]||(s[0]=d=>a.fileList=d),name:"file",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:a.headers,progress:a.progress,onChange:a.handleChange},{default:k(()=>[m(u,null,{default:k(()=>[m(l),bc]),_:1})]),_:1},8,["file-list","headers","progress","onChange"])]),htmlCode:k(()=>[Ac]),jsVersionHtml:k(()=>[yc]),_:1},8,["jsfiddle"])}var vc=G(hc,[["render",wc]]);const Zc=L({components:{IconBytedUpload:S},setup(){const a=w([]),s=w([]);return{fileList:a,fileList2:s}}}),Gc=t(" Upload (Max: 1) "),Bc=t(" Upload (Max: 3) "),Wc=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("vertical"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("large"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-upload")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileList"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"list-type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("picture"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":max-count"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUpload")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
        Upload (Max: 1)
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-upload")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-upload")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileList2"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"list-type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("picture"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":max-count"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileList2.length > 2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUpload")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
        Upload (Max: 3)
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-upload")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" UploadProps "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedUpload "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-upload'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedUpload`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" fileList "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("UploadProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'fileList'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" fileList2 "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("UploadProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'fileList'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      fileList`),n("span",{class:"token punctuation"},","),t(`
      fileList2`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Vc=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),t(),n("span",{class:"token attr-name"},"direction"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("vertical"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),t(" 100%")]),n("span",{class:"token punctuation"},'"')])]),t(),n("span",{class:"token attr-name"},"size"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("large"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-upload")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileList"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"list-type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("picture"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":max-count"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("1"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUpload")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
        Upload (Max: 1)
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-upload")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-upload")]),t(`
      `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileList2"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"list-type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("picture"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},":max-count"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("3"),n("span",{class:"token punctuation"},'"')]),t(`
      `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),t(),n("span",{class:"token attr-name"},":disabled"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileList2.length > 2"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUpload")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
        Upload (Max: 3)
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-upload")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedUpload "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-upload'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedUpload`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" fileList "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" fileList2 "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      fileList`),n("span",{class:"token punctuation"},","),t(`
      fileList2`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function Fc(a,s,o,e,c,p){const l=g("IconBytedUpload"),u=g("a-button"),i=g("a-upload"),r=g("a-space"),d=g("demo-box");return y(),B(d,{jsfiddle:{us:"Limit files with `maxCount`. Will replace current one when `maxCount` is `1`.",cn:"\u901A\u8FC7 `maxCount` \u9650\u5236\u4E0A\u4F20\u6570\u91CF\u3002\u5F53\u4E3A `1` \u65F6\uFF0C\u59CB\u7EC8\u7528\u6700\u65B0\u4E0A\u4F20\u7684\u4EE3\u66FF\u5F53\u524D\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u901A\u8FC7 <code>maxCount</code> \u9650\u5236\u4E0A\u4F20\u6570\u91CF\u3002\u5F53\u4E3A <code>1</code> \u65F6\uFF0C\u59CB\u7EC8\u7528\u6700\u65B0\u4E0A\u4F20\u7684\u4EE3\u66FF\u5F53\u524D\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Limit files with <code>maxCount</code>. Will replace current one when <code>maxCount</code> is <code>1</code>.</p>
`,order:10,title:{"zh-CN":"\u9650\u5236\u6570\u91CF","en-US":"Max Count"},relativePath:"components/upload/demo/max-count.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiIHN0eWxlPSJ3aWR0aDogMTAwJSIgc2l6ZT0ibGFyZ2UiPgogICAgPGEtdXBsb2FkCiAgICAgIHYtbW9kZWw6ZmlsZS1saXN0PSJmaWxlTGlzdCIKICAgICAgbGlzdC10eXBlPSJwaWN0dXJlIgogICAgICA6bWF4LWNvdW50PSIxIgogICAgICBhY3Rpb249Imh0dHBzOi8vd3d3Lm1vY2t5LmlvL3YyLzVjYzgwMTlkMzAwMDAwOTgwYTA1NWU3NiIKICAgID4KICAgICAgPGEtYnV0dG9uPgogICAgICAgIDxJY29uQnl0ZWRVcGxvYWQgLz4KICAgICAgICBVcGxvYWQgKE1heDogMSkKICAgICAgPC9hLWJ1dHRvbj4KICAgIDwvYS11cGxvYWQ+CiAgICA8YS11cGxvYWQKICAgICAgdi1tb2RlbDpmaWxlLWxpc3Q9ImZpbGVMaXN0MiIKICAgICAgbGlzdC10eXBlPSJwaWN0dXJlIgogICAgICA6bWF4LWNvdW50PSIzIgogICAgICBhY3Rpb249Imh0dHBzOi8vd3d3Lm1vY2t5LmlvL3YyLzVjYzgwMTlkMzAwMDAwOTgwYTA1NWU3NiIKICAgID4KICAgICAgPGEtYnV0dG9uIDpkaXNhYmxlZD0iZmlsZUxpc3QyLmxlbmd0aCA+IDIiPgogICAgICAgIDxJY29uQnl0ZWRVcGxvYWQgLz4KICAgICAgICBVcGxvYWQgKE1heDogMykKICAgICAgPC9hLWJ1dHRvbj4KICAgIDwvYS11cGxvYWQ+CiAgPC9hLXNwYWNlPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHR5cGUgeyBVcGxvYWRQcm9wcyB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKaW1wb3J0IEljb25CeXRlZFVwbG9hZCBmcm9tICdAZmU2L2ljb24tdnVlL2xpYi9pY29ucy9ieXRlZC11cGxvYWQnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIEljb25CeXRlZFVwbG9hZCwKICB9LAogIHNldHVwKCkgewogICAgY29uc3QgZmlsZUxpc3QgPSByZWY8VXBsb2FkUHJvcHNbJ2ZpbGVMaXN0J10+KFtdKTsKICAgIGNvbnN0IGZpbGVMaXN0MiA9IHJlZjxVcGxvYWRQcm9wc1snZmlsZUxpc3QnXT4oW10pOwoKICAgIHJldHVybiB7CiAgICAgIGZpbGVMaXN0LAogICAgICBmaWxlTGlzdDIsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiIHN0eWxlPSJ3aWR0aDogMTAwJSIgc2l6ZT0ibGFyZ2UiPgogICAgPGEtdXBsb2FkCiAgICAgIHYtbW9kZWw6ZmlsZS1saXN0PSJmaWxlTGlzdCIKICAgICAgbGlzdC10eXBlPSJwaWN0dXJlIgogICAgICA6bWF4LWNvdW50PSIxIgogICAgICBhY3Rpb249Imh0dHBzOi8vd3d3Lm1vY2t5LmlvL3YyLzVjYzgwMTlkMzAwMDAwOTgwYTA1NWU3NiIKICAgID4KICAgICAgPGEtYnV0dG9uPgogICAgICAgIDxJY29uQnl0ZWRVcGxvYWQgLz4KICAgICAgICBVcGxvYWQgKE1heDogMSkKICAgICAgPC9hLWJ1dHRvbj4KICAgIDwvYS11cGxvYWQ+CiAgICA8YS11cGxvYWQKICAgICAgdi1tb2RlbDpmaWxlLWxpc3Q9ImZpbGVMaXN0MiIKICAgICAgbGlzdC10eXBlPSJwaWN0dXJlIgogICAgICA6bWF4LWNvdW50PSIzIgogICAgICBhY3Rpb249Imh0dHBzOi8vd3d3Lm1vY2t5LmlvL3YyLzVjYzgwMTlkMzAwMDAwOTgwYTA1NWU3NiIKICAgID4KICAgICAgPGEtYnV0dG9uIDpkaXNhYmxlZD0iZmlsZUxpc3QyLmxlbmd0aCA+IDIiPgogICAgICAgIDxJY29uQnl0ZWRVcGxvYWQgLz4KICAgICAgICBVcGxvYWQgKE1heDogMykKICAgICAgPC9hLWJ1dHRvbj4KICAgIDwvYS11cGxvYWQ+CiAgPC9hLXNwYWNlPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgSWNvbkJ5dGVkVXBsb2FkIGZyb20gJ0BmZTYvaWNvbi12dWUvbGliL2ljb25zL2J5dGVkLXVwbG9hZCc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBjb21wb25lbnRzOiB7CiAgICBJY29uQnl0ZWRVcGxvYWQsCiAgfSwKCiAgc2V0dXAoKSB7CiAgICBjb25zdCBmaWxlTGlzdCA9IHJlZihbXSk7CiAgICBjb25zdCBmaWxlTGlzdDIgPSByZWYoW10pOwogICAgcmV0dXJuIHsKICAgICAgZmlsZUxpc3QsCiAgICAgIGZpbGVMaXN0MiwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:k(()=>[m(r,{direction:"vertical",style:{width:"100%"},size:"large"},{default:k(()=>[m(i,{"file-list":a.fileList,"onUpdate:file-list":s[0]||(s[0]=I=>a.fileList=I),"list-type":"picture","max-count":1,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76"},{default:k(()=>[m(u,null,{default:k(()=>[m(l),Gc]),_:1})]),_:1},8,["file-list"]),m(i,{"file-list":a.fileList2,"onUpdate:file-list":s[1]||(s[1]=I=>a.fileList2=I),"list-type":"picture","max-count":3,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76"},{default:k(()=>[m(u,{disabled:a.fileList2.length>2},{default:k(()=>[m(l),Bc]),_:1},8,["disabled"])]),_:1},8,["file-list"])]),_:1})]),htmlCode:k(()=>[Wc]),jsVersionHtml:k(()=>[Vc]),_:1},8,["jsfiddle"])}var Lc=G(Zc,[["render",Fc]]);const Uc=L({components:{IconBytedUpload:S},setup(){return{fileList:w([{uid:"1",name:"xxx.png",status:"done",response:"Server Error 500",url:"http://www.baidu.com/xxx.png"},{uid:"2",name:"yyy.png",status:"done",url:"http://www.baidu.com/yyy.png"},{uid:"3",name:"zzz.png",status:"error",response:"Server Error 500",url:"http://www.baidu.com/zzz.png"}]),handleChange:({file:o,fileList:e})=>{o.status!=="uploading"&&console.log(o,e)},handleClick:o=>{console.log(o,"custom removeIcon event")}}}}),Xc=t(" Upload "),Yc=t("download"),xc=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-upload")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileList"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":show-upload-list"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ showDownloadIcon: true, showRemoveIcon: true }"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleChange"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUpload")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      Upload
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#downloadIcon"),n("span",{class:"token punctuation"},">")]),t("download"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#removeIcon"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUpload")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleClick"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-upload")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" UploadChangeParam"),n("span",{class:"token punctuation"},","),t(" UploadProps "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedUpload "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-upload'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedUpload`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" fileList "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("UploadProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'fileList'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'xxx.png'"),n("span",{class:"token punctuation"},","),t(`
        status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),t(`
        response`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Server Error 500'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token comment"},"// custom error message to show"),t(`
        url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'http://www.baidu.com/xxx.png'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'yyy.png'"),n("span",{class:"token punctuation"},","),t(`
        status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),t(`
        url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'http://www.baidu.com/yyy.png'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'zzz.png'"),n("span",{class:"token punctuation"},","),t(`
        status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},","),t(`
        response`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Server Error 500'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token comment"},"// custom error message to show"),t(`
        url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'http://www.baidu.com/zzz.png'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" file"),n("span",{class:"token punctuation"},","),t(" fileList "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),t(" UploadChangeParam")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("file"),n("span",{class:"token punctuation"},"."),t("status "),n("span",{class:"token operator"},"!=="),t(),n("span",{class:"token string"},"'uploading'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("file"),n("span",{class:"token punctuation"},","),t(" fileList"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      fileList`),n("span",{class:"token punctuation"},","),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token function-variable function"},"handleClick"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("e"),n("span",{class:"token operator"},":"),t(" MouseEvent")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("e"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'custom removeIcon event'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Sc=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-upload")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileList"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":show-upload-list"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ showDownloadIcon: true, showRemoveIcon: true }"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleChange"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUpload")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      Upload
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#downloadIcon"),n("span",{class:"token punctuation"},">")]),t("download"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#removeIcon"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUpload")]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleClick"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token punctuation"},"/>")]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-upload")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedUpload "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-upload'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedUpload`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" fileList "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
      uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'xxx.png'"),n("span",{class:"token punctuation"},","),t(`
      status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),t(`
      response`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Server Error 500'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token comment"},"// custom error message to show"),t(`
      url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'http://www.baidu.com/xxx.png'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'yyy.png'"),n("span",{class:"token punctuation"},","),t(`
      status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),t(`
      url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'http://www.baidu.com/yyy.png'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'zzz.png'"),n("span",{class:"token punctuation"},","),t(`
      status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},","),t(`
      response`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Server Error 500'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token comment"},"// custom error message to show"),t(`
      url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'http://www.baidu.com/zzz.png'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(`
      file`),n("span",{class:"token punctuation"},","),t(`
      fileList`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("file"),n("span",{class:"token punctuation"},"."),t("status "),n("span",{class:"token operator"},"!=="),t(),n("span",{class:"token string"},"'uploading'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("file"),n("span",{class:"token punctuation"},","),t(" fileList"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      fileList`),n("span",{class:"token punctuation"},","),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token function-variable function"},"handleClick"),n("span",{class:"token operator"},":"),t(),n("span",{class:"token parameter"},"e"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("e"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token string"},"'custom removeIcon event'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function Rc(a,s,o,e,c,p){const l=g("IconBytedUpload"),u=g("a-button"),i=g("a-upload"),r=g("demo-box");return y(),B(r,{jsfiddle:{us:"Use slot for custom action icons of files.",cn:"\u4F7F\u7528\u76F8\u5E94\u63D2\u69FD\u8BBE\u7F6E\u5217\u8868\u4EA4\u4E92\u56FE\u6807\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4F7F\u7528\u76F8\u5E94\u63D2\u69FD\u8BBE\u7F6E\u5217\u8868\u4EA4\u4E92\u56FE\u6807\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Use slot for custom action icons of files.</p>
`,order:12,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u4EA4\u4E92\u56FE\u6807","en-US":"custom action icon"},relativePath:"components/upload/demo/upload-custom-action-icon.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZAogICAgdi1tb2RlbDpmaWxlLWxpc3Q9ImZpbGVMaXN0IgogICAgYWN0aW9uPSJodHRwczovL3d3dy5tb2NreS5pby92Mi81Y2M4MDE5ZDMwMDAwMDk4MGEwNTVlNzYiCiAgICA6c2hvdy11cGxvYWQtbGlzdD0ieyBzaG93RG93bmxvYWRJY29uOiB0cnVlLCBzaG93UmVtb3ZlSWNvbjogdHJ1ZSB9IgogICAgQGNoYW5nZT0iaGFuZGxlQ2hhbmdlIgogID4KICAgIDxhLWJ1dHRvbj4KICAgICAgPEljb25CeXRlZFVwbG9hZCAvPgogICAgICBVcGxvYWQKICAgIDwvYS1idXR0b24+CiAgICA8dGVtcGxhdGUgI2Rvd25sb2FkSWNvbj5kb3dubG9hZDwvdGVtcGxhdGU+CiAgICA8dGVtcGxhdGUgI3JlbW92ZUljb24+PEljb25CeXRlZFVwbG9hZCBAY2xpY2s9ImhhbmRsZUNsaWNrIiAvPjwvdGVtcGxhdGU+CiAgPC9hLXVwbG9hZD4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB0eXBlIHsgVXBsb2FkQ2hhbmdlUGFyYW0sIFVwbG9hZFByb3BzIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwppbXBvcnQgSWNvbkJ5dGVkVXBsb2FkIGZyb20gJ0BmZTYvaWNvbi12dWUvbGliL2ljb25zL2J5dGVkLXVwbG9hZCc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgSWNvbkJ5dGVkVXBsb2FkLAogIH0sCiAgc2V0dXAoKSB7CiAgICBjb25zdCBmaWxlTGlzdCA9IHJlZjxVcGxvYWRQcm9wc1snZmlsZUxpc3QnXT4oWwogICAgICB7CiAgICAgICAgdWlkOiAnMScsCiAgICAgICAgbmFtZTogJ3h4eC5wbmcnLAogICAgICAgIHN0YXR1czogJ2RvbmUnLAogICAgICAgIHJlc3BvbnNlOiAnU2VydmVyIEVycm9yIDUwMCcsIC8vIGN1c3RvbSBlcnJvciBtZXNzYWdlIHRvIHNob3cKICAgICAgICB1cmw6ICdodHRwOi8vd3d3LmJhaWR1LmNvbS94eHgucG5nJywKICAgICAgfSwKICAgICAgewogICAgICAgIHVpZDogJzInLAogICAgICAgIG5hbWU6ICd5eXkucG5nJywKICAgICAgICBzdGF0dXM6ICdkb25lJywKICAgICAgICB1cmw6ICdodHRwOi8vd3d3LmJhaWR1LmNvbS95eXkucG5nJywKICAgICAgfSwKICAgICAgewogICAgICAgIHVpZDogJzMnLAogICAgICAgIG5hbWU6ICd6enoucG5nJywKICAgICAgICBzdGF0dXM6ICdlcnJvcicsCiAgICAgICAgcmVzcG9uc2U6ICdTZXJ2ZXIgRXJyb3IgNTAwJywgLy8gY3VzdG9tIGVycm9yIG1lc3NhZ2UgdG8gc2hvdwogICAgICAgIHVybDogJ2h0dHA6Ly93d3cuYmFpZHUuY29tL3p6ei5wbmcnLAogICAgICB9LAogICAgXSk7CgogICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHsgZmlsZSwgZmlsZUxpc3QgfTogVXBsb2FkQ2hhbmdlUGFyYW0pID0+IHsKICAgICAgaWYgKGZpbGUuc3RhdHVzICE9PSAndXBsb2FkaW5nJykgewogICAgICAgIGNvbnNvbGUubG9nKGZpbGUsIGZpbGVMaXN0KTsKICAgICAgfQogICAgfTsKICAgIHJldHVybiB7CiAgICAgIGZpbGVMaXN0LAogICAgICBoYW5kbGVDaGFuZ2UsCiAgICAgIGhhbmRsZUNsaWNrOiAoZTogTW91c2VFdmVudCkgPT4gewogICAgICAgIGNvbnNvbGUubG9nKGUsICdjdXN0b20gcmVtb3ZlSWNvbiBldmVudCcpOwogICAgICB9LAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZAogICAgdi1tb2RlbDpmaWxlLWxpc3Q9ImZpbGVMaXN0IgogICAgYWN0aW9uPSJodHRwczovL3d3dy5tb2NreS5pby92Mi81Y2M4MDE5ZDMwMDAwMDk4MGEwNTVlNzYiCiAgICA6c2hvdy11cGxvYWQtbGlzdD0ieyBzaG93RG93bmxvYWRJY29uOiB0cnVlLCBzaG93UmVtb3ZlSWNvbjogdHJ1ZSB9IgogICAgQGNoYW5nZT0iaGFuZGxlQ2hhbmdlIgogID4KICAgIDxhLWJ1dHRvbj4KICAgICAgPEljb25CeXRlZFVwbG9hZCAvPgogICAgICBVcGxvYWQKICAgIDwvYS1idXR0b24+CiAgICA8dGVtcGxhdGUgI2Rvd25sb2FkSWNvbj5kb3dubG9hZDwvdGVtcGxhdGU+CiAgICA8dGVtcGxhdGUgI3JlbW92ZUljb24+PEljb25CeXRlZFVwbG9hZCBAY2xpY2s9ImhhbmRsZUNsaWNrIiAvPjwvdGVtcGxhdGU+CiAgPC9hLXVwbG9hZD4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IEljb25CeXRlZFVwbG9hZCBmcm9tICdAZmU2L2ljb24tdnVlL2xpYi9pY29ucy9ieXRlZC11cGxvYWQnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgSWNvbkJ5dGVkVXBsb2FkLAogIH0sCgogIHNldHVwKCkgewogICAgY29uc3QgZmlsZUxpc3QgPSByZWYoW3sKICAgICAgdWlkOiAnMScsCiAgICAgIG5hbWU6ICd4eHgucG5nJywKICAgICAgc3RhdHVzOiAnZG9uZScsCiAgICAgIHJlc3BvbnNlOiAnU2VydmVyIEVycm9yIDUwMCcsCiAgICAgIC8vIGN1c3RvbSBlcnJvciBtZXNzYWdlIHRvIHNob3cKICAgICAgdXJsOiAnaHR0cDovL3d3dy5iYWlkdS5jb20veHh4LnBuZycsCiAgICB9LCB7CiAgICAgIHVpZDogJzInLAogICAgICBuYW1lOiAneXl5LnBuZycsCiAgICAgIHN0YXR1czogJ2RvbmUnLAogICAgICB1cmw6ICdodHRwOi8vd3d3LmJhaWR1LmNvbS95eXkucG5nJywKICAgIH0sIHsKICAgICAgdWlkOiAnMycsCiAgICAgIG5hbWU6ICd6enoucG5nJywKICAgICAgc3RhdHVzOiAnZXJyb3InLAogICAgICByZXNwb25zZTogJ1NlcnZlciBFcnJvciA1MDAnLAogICAgICAvLyBjdXN0b20gZXJyb3IgbWVzc2FnZSB0byBzaG93CiAgICAgIHVybDogJ2h0dHA6Ly93d3cuYmFpZHUuY29tL3p6ei5wbmcnLAogICAgfV0pOwoKICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh7CiAgICAgIGZpbGUsCiAgICAgIGZpbGVMaXN0LAogICAgfSkgPT4gewogICAgICBpZiAoZmlsZS5zdGF0dXMgIT09ICd1cGxvYWRpbmcnKSB7CiAgICAgICAgY29uc29sZS5sb2coZmlsZSwgZmlsZUxpc3QpOwogICAgICB9CiAgICB9OwoKICAgIHJldHVybiB7CiAgICAgIGZpbGVMaXN0LAogICAgICBoYW5kbGVDaGFuZ2UsCiAgICAgIGhhbmRsZUNsaWNrOiBlID0+IHsKICAgICAgICBjb25zb2xlLmxvZyhlLCAnY3VzdG9tIHJlbW92ZUljb24gZXZlbnQnKTsKICAgICAgfSwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:k(()=>[m(i,{"file-list":a.fileList,"onUpdate:file-list":s[0]||(s[0]=d=>a.fileList=d),action:"https://www.mocky.io/v2/5cc8019d300000980a055e76","show-upload-list":{showDownloadIcon:!0,showRemoveIcon:!0},onChange:a.handleChange},{downloadIcon:k(()=>[Yc]),removeIcon:k(()=>[m(l,{onClick:a.handleClick},null,8,["onClick"])]),default:k(()=>[m(u,null,{default:k(()=>[m(l),Xc]),_:1})]),_:1},8,["file-list","onChange"])]),htmlCode:k(()=>[xc]),jsVersionHtml:k(()=>[Sc]),_:1},8,["jsfiddle"])}var Hc=G(Uc,[["render",Rc]]);const Jc=L({components:{IconBytedUpload:S},setup(){return{fileList:w([{uid:"1",name:"xxx.png",status:"done",response:"Server Error 500",url:"http://www.baidu.com/xxx.png"},{uid:"2",name:"yyy.png",status:"done",url:"http://www.baidu.com/yyy.png"},{uid:"3",name:"zzz.png",status:"error",response:"Server Error 500",url:"http://www.baidu.com/zzz.png"}]),handleChange:({file:e,fileList:c})=>{e.status!=="uploading"&&console.log(e,c)},beforeUpload:e=>{const c=e.type==="image/png";return c||x.error(`${e.name} is not a png file`),c||Ia.LIST_IGNORE}}}}),Nc=t(" Upload png only "),Pc=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-upload")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileList"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":before-upload"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("beforeUpload"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleChange"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUpload")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      Upload png only
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-upload")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" UploadChangeParam"),n("span",{class:"token punctuation"},","),t(" UploadProps "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedUpload "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-upload'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" message"),n("span",{class:"token punctuation"},","),t(" Upload "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedUpload`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" fileList "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("UploadProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'fileList'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'xxx.png'"),n("span",{class:"token punctuation"},","),t(`
        status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),t(`
        response`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Server Error 500'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token comment"},"// custom error message to show"),t(`
        url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'http://www.baidu.com/xxx.png'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'yyy.png'"),n("span",{class:"token punctuation"},","),t(`
        status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),t(`
        url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'http://www.baidu.com/yyy.png'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'zzz.png'"),n("span",{class:"token punctuation"},","),t(`
        status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},","),t(`
        response`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Server Error 500'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token comment"},"// custom error message to show"),t(`
        url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'http://www.baidu.com/zzz.png'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(" file"),n("span",{class:"token punctuation"},","),t(" fileList "),n("span",{class:"token punctuation"},"}"),n("span",{class:"token operator"},":"),t(" UploadChangeParam")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("file"),n("span",{class:"token punctuation"},"."),t("status "),n("span",{class:"token operator"},"!=="),t(),n("span",{class:"token string"},"'uploading'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("file"),n("span",{class:"token punctuation"},","),t(" fileList"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" beforeUpload"),n("span",{class:"token operator"},":"),t(" UploadProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'beforeUpload'"),n("span",{class:"token punctuation"},"]"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"file"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" isPNG "),n("span",{class:"token operator"},"="),t(" file"),n("span",{class:"token punctuation"},"."),t("type "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'image/png'"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("isPNG"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("file"),n("span",{class:"token punctuation"},"."),t("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," is not a png file"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
      `),n("span",{class:"token keyword"},"return"),t(" isPNG "),n("span",{class:"token operator"},"||"),t(" Upload"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"LIST_IGNORE"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      fileList`),n("span",{class:"token punctuation"},","),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
      beforeUpload`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),jc=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-upload")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileList"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":before-upload"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("beforeUpload"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleChange"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUpload")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      Upload png only
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-upload")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedUpload "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-upload'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" message"),n("span",{class:"token punctuation"},","),t(" Upload "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedUpload`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(" fileList "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
      uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'1'"),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'xxx.png'"),n("span",{class:"token punctuation"},","),t(`
      status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),t(`
      response`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Server Error 500'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token comment"},"// custom error message to show"),t(`
      url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'http://www.baidu.com/xxx.png'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'2'"),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'yyy.png'"),n("span",{class:"token punctuation"},","),t(`
      status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),t(`
      url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'http://www.baidu.com/yyy.png'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'zzz.png'"),n("span",{class:"token punctuation"},","),t(`
      status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},","),t(`
      response`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Server Error 500'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token comment"},"// custom error message to show"),t(`
      url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'http://www.baidu.com/zzz.png'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),t(`
      file`),n("span",{class:"token punctuation"},","),t(`
      fileList`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("file"),n("span",{class:"token punctuation"},"."),t("status "),n("span",{class:"token operator"},"!=="),t(),n("span",{class:"token string"},"'uploading'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("file"),n("span",{class:"token punctuation"},","),t(" fileList"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"beforeUpload"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"file"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"const"),t(" isPNG "),n("span",{class:"token operator"},"="),t(" file"),n("span",{class:"token punctuation"},"."),t("type "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'image/png'"),n("span",{class:"token punctuation"},";"),t(`

      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"!"),t("isPNG"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("file"),n("span",{class:"token punctuation"},"."),t("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," is not a png file"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`

      `),n("span",{class:"token keyword"},"return"),t(" isPNG "),n("span",{class:"token operator"},"||"),t(" Upload"),n("span",{class:"token punctuation"},"."),n("span",{class:"token constant"},"LIST_IGNORE"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      fileList`),n("span",{class:"token punctuation"},","),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
      beforeUpload`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function zc(a,s,o,e,c,p){const l=g("IconBytedUpload"),u=g("a-button"),i=g("a-upload"),r=g("demo-box");return y(),B(r,{jsfiddle:{us:"`beforeUpload` only prevent upload behavior when return false or reject promise, the prevented file would still show in file list. Here is the example you can keep prevented files out of list by return `UPLOAD.LIST_IGNORE`.",cn:"`beforeUpload` \u8FD4\u56DE `false` \u6216 `Promise.reject` \u65F6\uFF0C\u53EA\u7528\u4E8E\u62E6\u622A\u4E0A\u4F20\u884C\u4E3A\uFF0C\u4E0D\u4F1A\u963B\u6B62\u6587\u4EF6\u8FDB\u5165\u4E0A\u4F20\u5217\u8868\uFF08[\u539F\u56E0](https://github.com/ant-design/ant-design/issues/15561#issuecomment-475108235)\uFF09\u3002\u5982\u679C\u9700\u8981\u963B\u6B62\u5217\u8868\u5C55\u73B0\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8FD4\u56DE `Upload.LIST_IGNORE` \u5B9E\u73B0\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p><code>beforeUpload</code> \u8FD4\u56DE <code>false</code> \u6216 <code>Promise.reject</code> \u65F6\uFF0C\u53EA\u7528\u4E8E\u62E6\u622A\u4E0A\u4F20\u884C\u4E3A\uFF0C\u4E0D\u4F1A\u963B\u6B62\u6587\u4EF6\u8FDB\u5165\u4E0A\u4F20\u5217\u8868\uFF08<a href="https://github.com/ant-design/ant-design/issues/15561#issuecomment-475108235" target="_blank" rel="noopener noreferrer">\u539F\u56E0</a>\uFF09\u3002\u5982\u679C\u9700\u8981\u963B\u6B62\u5217\u8868\u5C55\u73B0\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8FD4\u56DE <code>Upload.LIST_IGNORE</code> \u5B9E\u73B0\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p><code>beforeUpload</code> only prevent upload behavior when return false or reject promise, the prevented file would still show in file list. Here is the example you can keep prevented files out of list by return <code>UPLOAD.LIST_IGNORE</code>.</p>
`,order:7.1,title:{"zh-CN":"\u53EA\u4E0A\u4F20 png \u56FE\u7247","en-US":"Upload png file only"},relativePath:"components/upload/demo/upload-png-only.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZAogICAgdi1tb2RlbDpmaWxlLWxpc3Q9ImZpbGVMaXN0IgogICAgYWN0aW9uPSJodHRwczovL3d3dy5tb2NreS5pby92Mi81Y2M4MDE5ZDMwMDAwMDk4MGEwNTVlNzYiCiAgICA6YmVmb3JlLXVwbG9hZD0iYmVmb3JlVXBsb2FkIgogICAgQGNoYW5nZT0iaGFuZGxlQ2hhbmdlIgogID4KICAgIDxhLWJ1dHRvbj4KICAgICAgPEljb25CeXRlZFVwbG9hZCAvPgogICAgICBVcGxvYWQgcG5nIG9ubHkKICAgIDwvYS1idXR0b24+CiAgPC9hLXVwbG9hZD4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB0eXBlIHsgVXBsb2FkQ2hhbmdlUGFyYW0sIFVwbG9hZFByb3BzIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwppbXBvcnQgSWNvbkJ5dGVkVXBsb2FkIGZyb20gJ0BmZTYvaWNvbi12dWUvbGliL2ljb25zL2J5dGVkLXVwbG9hZCc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKaW1wb3J0IHsgbWVzc2FnZSwgVXBsb2FkIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBjb21wb25lbnRzOiB7CiAgICBJY29uQnl0ZWRVcGxvYWQsCiAgfSwKICBzZXR1cCgpIHsKICAgIGNvbnN0IGZpbGVMaXN0ID0gcmVmPFVwbG9hZFByb3BzWydmaWxlTGlzdCddPihbCiAgICAgIHsKICAgICAgICB1aWQ6ICcxJywKICAgICAgICBuYW1lOiAneHh4LnBuZycsCiAgICAgICAgc3RhdHVzOiAnZG9uZScsCiAgICAgICAgcmVzcG9uc2U6ICdTZXJ2ZXIgRXJyb3IgNTAwJywgLy8gY3VzdG9tIGVycm9yIG1lc3NhZ2UgdG8gc2hvdwogICAgICAgIHVybDogJ2h0dHA6Ly93d3cuYmFpZHUuY29tL3h4eC5wbmcnLAogICAgICB9LAogICAgICB7CiAgICAgICAgdWlkOiAnMicsCiAgICAgICAgbmFtZTogJ3l5eS5wbmcnLAogICAgICAgIHN0YXR1czogJ2RvbmUnLAogICAgICAgIHVybDogJ2h0dHA6Ly93d3cuYmFpZHUuY29tL3l5eS5wbmcnLAogICAgICB9LAogICAgICB7CiAgICAgICAgdWlkOiAnMycsCiAgICAgICAgbmFtZTogJ3p6ei5wbmcnLAogICAgICAgIHN0YXR1czogJ2Vycm9yJywKICAgICAgICByZXNwb25zZTogJ1NlcnZlciBFcnJvciA1MDAnLCAvLyBjdXN0b20gZXJyb3IgbWVzc2FnZSB0byBzaG93CiAgICAgICAgdXJsOiAnaHR0cDovL3d3dy5iYWlkdS5jb20venp6LnBuZycsCiAgICAgIH0sCiAgICBdKTsKCiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoeyBmaWxlLCBmaWxlTGlzdCB9OiBVcGxvYWRDaGFuZ2VQYXJhbSkgPT4gewogICAgICBpZiAoZmlsZS5zdGF0dXMgIT09ICd1cGxvYWRpbmcnKSB7CiAgICAgICAgY29uc29sZS5sb2coZmlsZSwgZmlsZUxpc3QpOwogICAgICB9CiAgICB9OwogICAgY29uc3QgYmVmb3JlVXBsb2FkOiBVcGxvYWRQcm9wc1snYmVmb3JlVXBsb2FkJ10gPSAoZmlsZSkgPT4gewogICAgICBjb25zdCBpc1BORyA9IGZpbGUudHlwZSA9PT0gJ2ltYWdlL3BuZyc7CiAgICAgIGlmICghaXNQTkcpIHsKICAgICAgICBtZXNzYWdlLmVycm9yKGAke2ZpbGUubmFtZX0gaXMgbm90IGEgcG5nIGZpbGVgKTsKICAgICAgfQogICAgICByZXR1cm4gaXNQTkcgfHwgVXBsb2FkLkxJU1RfSUdOT1JFOwogICAgfTsKICAgIHJldHVybiB7CiAgICAgIGZpbGVMaXN0LAogICAgICBoYW5kbGVDaGFuZ2UsCiAgICAgIGJlZm9yZVVwbG9hZCwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZAogICAgdi1tb2RlbDpmaWxlLWxpc3Q9ImZpbGVMaXN0IgogICAgYWN0aW9uPSJodHRwczovL3d3dy5tb2NreS5pby92Mi81Y2M4MDE5ZDMwMDAwMDk4MGEwNTVlNzYiCiAgICA6YmVmb3JlLXVwbG9hZD0iYmVmb3JlVXBsb2FkIgogICAgQGNoYW5nZT0iaGFuZGxlQ2hhbmdlIgogID4KICAgIDxhLWJ1dHRvbj4KICAgICAgPEljb25CeXRlZFVwbG9hZCAvPgogICAgICBVcGxvYWQgcG5nIG9ubHkKICAgIDwvYS1idXR0b24+CiAgPC9hLXVwbG9hZD4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IEljb25CeXRlZFVwbG9hZCBmcm9tICdAZmU2L2ljb24tdnVlL2xpYi9pY29ucy9ieXRlZC11cGxvYWQnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmltcG9ydCB7IG1lc3NhZ2UsIFVwbG9hZCB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBjb21wb25lbnRzOiB7CiAgICBJY29uQnl0ZWRVcGxvYWQsCiAgfSwKCiAgc2V0dXAoKSB7CiAgICBjb25zdCBmaWxlTGlzdCA9IHJlZihbewogICAgICB1aWQ6ICcxJywKICAgICAgbmFtZTogJ3h4eC5wbmcnLAogICAgICBzdGF0dXM6ICdkb25lJywKICAgICAgcmVzcG9uc2U6ICdTZXJ2ZXIgRXJyb3IgNTAwJywKICAgICAgLy8gY3VzdG9tIGVycm9yIG1lc3NhZ2UgdG8gc2hvdwogICAgICB1cmw6ICdodHRwOi8vd3d3LmJhaWR1LmNvbS94eHgucG5nJywKICAgIH0sIHsKICAgICAgdWlkOiAnMicsCiAgICAgIG5hbWU6ICd5eXkucG5nJywKICAgICAgc3RhdHVzOiAnZG9uZScsCiAgICAgIHVybDogJ2h0dHA6Ly93d3cuYmFpZHUuY29tL3l5eS5wbmcnLAogICAgfSwgewogICAgICB1aWQ6ICczJywKICAgICAgbmFtZTogJ3p6ei5wbmcnLAogICAgICBzdGF0dXM6ICdlcnJvcicsCiAgICAgIHJlc3BvbnNlOiAnU2VydmVyIEVycm9yIDUwMCcsCiAgICAgIC8vIGN1c3RvbSBlcnJvciBtZXNzYWdlIHRvIHNob3cKICAgICAgdXJsOiAnaHR0cDovL3d3dy5iYWlkdS5jb20venp6LnBuZycsCiAgICB9XSk7CgogICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKHsKICAgICAgZmlsZSwKICAgICAgZmlsZUxpc3QsCiAgICB9KSA9PiB7CiAgICAgIGlmIChmaWxlLnN0YXR1cyAhPT0gJ3VwbG9hZGluZycpIHsKICAgICAgICBjb25zb2xlLmxvZyhmaWxlLCBmaWxlTGlzdCk7CiAgICAgIH0KICAgIH07CgogICAgY29uc3QgYmVmb3JlVXBsb2FkID0gZmlsZSA9PiB7CiAgICAgIGNvbnN0IGlzUE5HID0gZmlsZS50eXBlID09PSAnaW1hZ2UvcG5nJzsKCiAgICAgIGlmICghaXNQTkcpIHsKICAgICAgICBtZXNzYWdlLmVycm9yKGAke2ZpbGUubmFtZX0gaXMgbm90IGEgcG5nIGZpbGVgKTsKICAgICAgfQoKICAgICAgcmV0dXJuIGlzUE5HIHx8IFVwbG9hZC5MSVNUX0lHTk9SRTsKICAgIH07CgogICAgcmV0dXJuIHsKICAgICAgZmlsZUxpc3QsCiAgICAgIGhhbmRsZUNoYW5nZSwKICAgICAgYmVmb3JlVXBsb2FkLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:k(()=>[m(i,{"file-list":a.fileList,"onUpdate:file-list":s[0]||(s[0]=d=>a.fileList=d),action:"https://www.mocky.io/v2/5cc8019d300000980a055e76","before-upload":a.beforeUpload,onChange:a.handleChange},{default:k(()=>[m(u,null,{default:k(()=>[m(l),Nc]),_:1})]),_:1},8,["file-list","before-upload","onChange"])]),htmlCode:k(()=>[Pc]),jsVersionHtml:k(()=>[jc]),_:1},8,["jsfiddle"])}var Kc=G(Jc,[["render",zc]]);const Dc=L({components:{IconBytedUpload:S},setup(){const a=o=>{o.file.status!=="uploading"&&console.log(o.file,o.fileList),o.file.status==="done"?x.success(`${o.file.name} file uploaded successfully`):o.file.status==="error"&&x.error(`${o.file.name} file upload failed.`)};return{fileList:w([{uid:"-1",name:"xxx.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",thumbUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-2",name:"yyy.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",thumbUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"3",name:"zzz.png",status:"error",response:"Server Error 500",url:"http://www.baidu.com/zzz.png"}]),headers:{authorization:"authorization-text"},handleChange:a}}}),Ec=t(" Click to Upload "),Oc=["onClick"],Qc=["onClick"],_c=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-upload")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileList"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("file"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":headers"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("headers"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleChange"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUpload")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      Click to Upload
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#itemRender"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ file, actions }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("file.status === "),n("span",{class:"token punctuation"},"'"),t("error"),n("span",{class:"token punctuation"},"'"),t(" ? "),n("span",{class:"token punctuation"},"'"),t("color: red"),n("span",{class:"token punctuation"},"'"),t(" : "),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("{{ file.name }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("javascript:;"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("actions.download"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("download"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("javascript:;"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("actions.remove"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("delete"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-upload")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),t(),n("span",{class:"token attr-name"},"lang"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("ts"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(" type "),n("span",{class:"token punctuation"},"{"),t(" UploadChangeParam"),n("span",{class:"token punctuation"},","),t(" UploadProps "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" message "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedUpload "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-upload'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`

`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedUpload`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[t("info"),n("span",{class:"token operator"},":"),t(" UploadChangeParam")]),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("status "),n("span",{class:"token operator"},"!=="),t(),n("span",{class:"token string"},"'uploading'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},","),t(" info"),n("span",{class:"token punctuation"},"."),t("fileList"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("status "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," file uploaded successfully"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("status "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," file upload failed."),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" fileList "),n("span",{class:"token operator"},"="),t(" ref"),n("span",{class:"token operator"},"<"),t("UploadProps"),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},"'fileList'"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'-1'"),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'xxx.png'"),n("span",{class:"token punctuation"},","),t(`
        status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),t(`
        url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),t(`
        thumbUrl`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'-2'"),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'yyy.png'"),n("span",{class:"token punctuation"},","),t(`
        status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),t(`
        url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),t(`
        thumbUrl`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"{"),t(`
        uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),t(`
        name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'zzz.png'"),n("span",{class:"token punctuation"},","),t(`
        status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},","),t(`
        response`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Server Error 500'"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token comment"},"// custom error message to show"),t(`
        url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'http://www.baidu.com/zzz.png'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      fileList`),n("span",{class:"token punctuation"},","),t(`
      headers`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        authorization`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'authorization-text'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1),Tc=n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-upload")]),t(`
    `),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),t("file-list")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("fileList"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"name"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("file"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"action"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("https://www.mocky.io/v2/5cc8019d300000980a055e76"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},":headers"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("headers"),n("span",{class:"token punctuation"},'"')]),t(`
    `),n("span",{class:"token attr-name"},"@change"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("handleChange"),n("span",{class:"token punctuation"},'"')]),t(`
  `),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("IconBytedUpload")]),t(),n("span",{class:"token punctuation"},"/>")]),t(`
      Click to Upload
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-button")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("template")]),t(),n("span",{class:"token attr-name"},"#itemRender"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("{ file, actions }"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("span")]),t(),n("span",{class:"token attr-name"},":style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("file.status === "),n("span",{class:"token punctuation"},"'"),t("error"),n("span",{class:"token punctuation"},"'"),t(" ? "),n("span",{class:"token punctuation"},"'"),t("color: red"),n("span",{class:"token punctuation"},"'"),t(" : "),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},"'"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("{{ file.name }}"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("span")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("javascript:;"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("actions.download"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("download"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("a")]),t(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("javascript:;"),n("span",{class:"token punctuation"},'"')]),t(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),t("actions.remove"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),t("delete"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a")]),n("span",{class:"token punctuation"},">")]),t(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-space")]),n("span",{class:"token punctuation"},">")]),t(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("a-upload")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("template")]),n("span",{class:"token punctuation"},">")]),t(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),t("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" message "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(" IconBytedUpload "),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-upload'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"import"),t(),n("span",{class:"token punctuation"},"{"),t(" defineComponent"),n("span",{class:"token punctuation"},","),t(" ref "),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"from"),t(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),t(`
`),n("span",{class:"token keyword"},"export"),t(),n("span",{class:"token keyword"},"default"),t(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),t(`
  components`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
    IconBytedUpload`),n("span",{class:"token punctuation"},","),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
    `),n("span",{class:"token keyword"},"const"),t(),n("span",{class:"token function-variable function"},"handleChange"),t(),n("span",{class:"token operator"},"="),t(),n("span",{class:"token parameter"},"info"),t(),n("span",{class:"token operator"},"=>"),t(),n("span",{class:"token punctuation"},"{"),t(`
      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("status "),n("span",{class:"token operator"},"!=="),t(),n("span",{class:"token string"},"'uploading'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        console`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"log"),n("span",{class:"token punctuation"},"("),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},","),t(" info"),n("span",{class:"token punctuation"},"."),t("fileList"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`

      `),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("status "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," file uploaded successfully"),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(),n("span",{class:"token keyword"},"else"),t(),n("span",{class:"token keyword"},"if"),t(),n("span",{class:"token punctuation"},"("),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("status "),n("span",{class:"token operator"},"==="),t(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},")"),t(),n("span",{class:"token punctuation"},"{"),t(`
        message`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"error"),n("span",{class:"token punctuation"},"("),n("span",{class:"token template-string"},[n("span",{class:"token template-punctuation string"},"`"),n("span",{class:"token interpolation"},[n("span",{class:"token interpolation-punctuation punctuation"},"${"),t("info"),n("span",{class:"token punctuation"},"."),t("file"),n("span",{class:"token punctuation"},"."),t("name"),n("span",{class:"token interpolation-punctuation punctuation"},"}")]),n("span",{class:"token string"}," file upload failed."),n("span",{class:"token template-punctuation string"},"`")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
      `),n("span",{class:"token punctuation"},"}"),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`

    `),n("span",{class:"token keyword"},"const"),t(" fileList "),n("span",{class:"token operator"},"="),t(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),t(`
      uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'-1'"),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'xxx.png'"),n("span",{class:"token punctuation"},","),t(`
      status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),t(`
      url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),t(`
      thumbUrl`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'-2'"),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'yyy.png'"),n("span",{class:"token punctuation"},","),t(`
      status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'done'"),n("span",{class:"token punctuation"},","),t(`
      url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),t(`
      thumbUrl`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(),n("span",{class:"token punctuation"},"{"),t(`
      uid`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'3'"),n("span",{class:"token punctuation"},","),t(`
      name`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'zzz.png'"),n("span",{class:"token punctuation"},","),t(`
      status`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'error'"),n("span",{class:"token punctuation"},","),t(`
      response`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'Server Error 500'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token comment"},"// custom error message to show"),t(`
      url`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'http://www.baidu.com/zzz.png'"),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
    `),n("span",{class:"token keyword"},"return"),t(),n("span",{class:"token punctuation"},"{"),t(`
      fileList`),n("span",{class:"token punctuation"},","),t(`
      headers`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token punctuation"},"{"),t(`
        authorization`),n("span",{class:"token operator"},":"),t(),n("span",{class:"token string"},"'authorization-text'"),n("span",{class:"token punctuation"},","),t(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`
      handleChange`),n("span",{class:"token punctuation"},","),t(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),t(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),t(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),t(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),t("script")]),n("span",{class:"token punctuation"},">")]),t(`
`)])],-1);function Mc(a,s,o,e,c,p){const l=g("IconBytedUpload"),u=g("a-button"),i=g("a-space"),r=g("a-upload"),d=g("demo-box");return y(),B(d,{jsfiddle:{us:"Custom render by using `itemRender` slot.",cn:"\u4F7F\u7528 `itemRender` \u63D2\u69FD\u8FDB\u884C\u5B8C\u5168\u81EA\u5B9A\u4E49\u5217\u8868",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4F7F\u7528 <code>itemRender</code> \u63D2\u69FD\u8FDB\u884C\u5B8C\u5168\u81EA\u5B9A\u4E49\u5217\u8868</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Custom render by using <code>itemRender</code> slot.</p>
`,order:0,title:{"zh-CN":"\u81EA\u5B9A\u4E49\u4E0A\u4F20\u5217\u8868","en-US":"Custom Render"},relativePath:"components/upload/demo/custom-render.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZAogICAgdi1tb2RlbDpmaWxlLWxpc3Q9ImZpbGVMaXN0IgogICAgbmFtZT0iZmlsZSIKICAgIGFjdGlvbj0iaHR0cHM6Ly93d3cubW9ja3kuaW8vdjIvNWNjODAxOWQzMDAwMDA5ODBhMDU1ZTc2IgogICAgOmhlYWRlcnM9ImhlYWRlcnMiCiAgICBAY2hhbmdlPSJoYW5kbGVDaGFuZ2UiCiAgPgogICAgPGEtYnV0dG9uPgogICAgICA8SWNvbkJ5dGVkVXBsb2FkIC8+CiAgICAgIENsaWNrIHRvIFVwbG9hZAogICAgPC9hLWJ1dHRvbj4KICAgIDx0ZW1wbGF0ZSAjaXRlbVJlbmRlcj0ieyBmaWxlLCBhY3Rpb25zIH0iPgogICAgICA8YS1zcGFjZT4KICAgICAgICA8c3BhbiA6c3R5bGU9ImZpbGUuc3RhdHVzID09PSAnZXJyb3InID8gJ2NvbG9yOiByZWQnIDogJyciPnt7IGZpbGUubmFtZSB9fTwvc3Bhbj4KICAgICAgICA8YSBocmVmPSJqYXZhc2NyaXB0OjsiIEBjbGljaz0iYWN0aW9ucy5kb3dubG9hZCI+ZG93bmxvYWQ8L2E+CiAgICAgICAgPGEgaHJlZj0iamF2YXNjcmlwdDo7IiBAY2xpY2s9ImFjdGlvbnMucmVtb3ZlIj5kZWxldGU8L2E+CiAgICAgIDwvYS1zcGFjZT4KICAgIDwvdGVtcGxhdGU+CiAgPC9hLXVwbG9hZD4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB0eXBlIHsgVXBsb2FkQ2hhbmdlUGFyYW0sIFVwbG9hZFByb3BzIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwppbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSAnQGZlNi93YXRlci1wcm8nOwppbXBvcnQgSWNvbkJ5dGVkVXBsb2FkIGZyb20gJ0BmZTYvaWNvbi12dWUvbGliL2ljb25zL2J5dGVkLXVwbG9hZCc7CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgSWNvbkJ5dGVkVXBsb2FkLAogIH0sCiAgc2V0dXAoKSB7CiAgICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoaW5mbzogVXBsb2FkQ2hhbmdlUGFyYW0pID0+IHsKICAgICAgaWYgKGluZm8uZmlsZS5zdGF0dXMgIT09ICd1cGxvYWRpbmcnKSB7CiAgICAgICAgY29uc29sZS5sb2coaW5mby5maWxlLCBpbmZvLmZpbGVMaXN0KTsKICAgICAgfQogICAgICBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gJ2RvbmUnKSB7CiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKGAke2luZm8uZmlsZS5uYW1lfSBmaWxlIHVwbG9hZGVkIHN1Y2Nlc3NmdWxseWApOwogICAgICB9IGVsc2UgaWYgKGluZm8uZmlsZS5zdGF0dXMgPT09ICdlcnJvcicpIHsKICAgICAgICBtZXNzYWdlLmVycm9yKGAke2luZm8uZmlsZS5uYW1lfSBmaWxlIHVwbG9hZCBmYWlsZWQuYCk7CiAgICAgIH0KICAgIH07CgogICAgY29uc3QgZmlsZUxpc3QgPSByZWY8VXBsb2FkUHJvcHNbJ2ZpbGVMaXN0J10+KFsKICAgICAgewogICAgICAgIHVpZDogJy0xJywKICAgICAgICBuYW1lOiAneHh4LnBuZycsCiAgICAgICAgc3RhdHVzOiAnZG9uZScsCiAgICAgICAgdXJsOiAnaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL2pramdrRWZ2cFVQVnlSalVJbW5pVnNsWmZXUG5KdXVaLnBuZycsCiAgICAgICAgdGh1bWJVcmw6ICdodHRwczovL3pvcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvamtqZ2tFZnZwVVBWeVJqVUltbmlWc2xaZldQbkp1dVoucG5nJywKICAgICAgfSwKICAgICAgewogICAgICAgIHVpZDogJy0yJywKICAgICAgICBuYW1lOiAneXl5LnBuZycsCiAgICAgICAgc3RhdHVzOiAnZG9uZScsCiAgICAgICAgdXJsOiAnaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL2pramdrRWZ2cFVQVnlSalVJbW5pVnNsWmZXUG5KdXVaLnBuZycsCiAgICAgICAgdGh1bWJVcmw6ICdodHRwczovL3pvcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvamtqZ2tFZnZwVVBWeVJqVUltbmlWc2xaZldQbkp1dVoucG5nJywKICAgICAgfSwKICAgICAgewogICAgICAgIHVpZDogJzMnLAogICAgICAgIG5hbWU6ICd6enoucG5nJywKICAgICAgICBzdGF0dXM6ICdlcnJvcicsCiAgICAgICAgcmVzcG9uc2U6ICdTZXJ2ZXIgRXJyb3IgNTAwJywgLy8gY3VzdG9tIGVycm9yIG1lc3NhZ2UgdG8gc2hvdwogICAgICAgIHVybDogJ2h0dHA6Ly93d3cuYmFpZHUuY29tL3p6ei5wbmcnLAogICAgICB9LAogICAgXSk7CiAgICByZXR1cm4gewogICAgICBmaWxlTGlzdCwKICAgICAgaGVhZGVyczogewogICAgICAgIGF1dGhvcml6YXRpb246ICdhdXRob3JpemF0aW9uLXRleHQnLAogICAgICB9LAogICAgICBoYW5kbGVDaGFuZ2UsCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXVwbG9hZAogICAgdi1tb2RlbDpmaWxlLWxpc3Q9ImZpbGVMaXN0IgogICAgbmFtZT0iZmlsZSIKICAgIGFjdGlvbj0iaHR0cHM6Ly93d3cubW9ja3kuaW8vdjIvNWNjODAxOWQzMDAwMDA5ODBhMDU1ZTc2IgogICAgOmhlYWRlcnM9ImhlYWRlcnMiCiAgICBAY2hhbmdlPSJoYW5kbGVDaGFuZ2UiCiAgPgogICAgPGEtYnV0dG9uPgogICAgICA8SWNvbkJ5dGVkVXBsb2FkIC8+CiAgICAgIENsaWNrIHRvIFVwbG9hZAogICAgPC9hLWJ1dHRvbj4KICAgIDx0ZW1wbGF0ZSAjaXRlbVJlbmRlcj0ieyBmaWxlLCBhY3Rpb25zIH0iPgogICAgICA8YS1zcGFjZT4KICAgICAgICA8c3BhbiA6c3R5bGU9ImZpbGUuc3RhdHVzID09PSAnZXJyb3InID8gJ2NvbG9yOiByZWQnIDogJyciPnt7IGZpbGUubmFtZSB9fTwvc3Bhbj4KICAgICAgICA8YSBocmVmPSJqYXZhc2NyaXB0OjsiIEBjbGljaz0iYWN0aW9ucy5kb3dubG9hZCI+ZG93bmxvYWQ8L2E+CiAgICAgICAgPGEgaHJlZj0iamF2YXNjcmlwdDo7IiBAY2xpY2s9ImFjdGlvbnMucmVtb3ZlIj5kZWxldGU8L2E+CiAgICAgIDwvYS1zcGFjZT4KICAgIDwvdGVtcGxhdGU+CiAgPC9hLXVwbG9hZD4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKaW1wb3J0IEljb25CeXRlZFVwbG9hZCBmcm9tICdAZmU2L2ljb24tdnVlL2xpYi9pY29ucy9ieXRlZC11cGxvYWQnOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgSWNvbkJ5dGVkVXBsb2FkLAogIH0sCgogIHNldHVwKCkgewogICAgY29uc3QgaGFuZGxlQ2hhbmdlID0gaW5mbyA9PiB7CiAgICAgIGlmIChpbmZvLmZpbGUuc3RhdHVzICE9PSAndXBsb2FkaW5nJykgewogICAgICAgIGNvbnNvbGUubG9nKGluZm8uZmlsZSwgaW5mby5maWxlTGlzdCk7CiAgICAgIH0KCiAgICAgIGlmIChpbmZvLmZpbGUuc3RhdHVzID09PSAnZG9uZScpIHsKICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoYCR7aW5mby5maWxlLm5hbWV9IGZpbGUgdXBsb2FkZWQgc3VjY2Vzc2Z1bGx5YCk7CiAgICAgIH0gZWxzZSBpZiAoaW5mby5maWxlLnN0YXR1cyA9PT0gJ2Vycm9yJykgewogICAgICAgIG1lc3NhZ2UuZXJyb3IoYCR7aW5mby5maWxlLm5hbWV9IGZpbGUgdXBsb2FkIGZhaWxlZC5gKTsKICAgICAgfQogICAgfTsKCiAgICBjb25zdCBmaWxlTGlzdCA9IHJlZihbewogICAgICB1aWQ6ICctMScsCiAgICAgIG5hbWU6ICd4eHgucG5nJywKICAgICAgc3RhdHVzOiAnZG9uZScsCiAgICAgIHVybDogJ2h0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9qa2pna0VmdnBVUFZ5UmpVSW1uaVZzbFpmV1BuSnV1Wi5wbmcnLAogICAgICB0aHVtYlVybDogJ2h0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9qa2pna0VmdnBVUFZ5UmpVSW1uaVZzbFpmV1BuSnV1Wi5wbmcnLAogICAgfSwgewogICAgICB1aWQ6ICctMicsCiAgICAgIG5hbWU6ICd5eXkucG5nJywKICAgICAgc3RhdHVzOiAnZG9uZScsCiAgICAgIHVybDogJ2h0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9qa2pna0VmdnBVUFZ5UmpVSW1uaVZzbFpmV1BuSnV1Wi5wbmcnLAogICAgICB0aHVtYlVybDogJ2h0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9qa2pna0VmdnBVUFZ5UmpVSW1uaVZzbFpmV1BuSnV1Wi5wbmcnLAogICAgfSwgewogICAgICB1aWQ6ICczJywKICAgICAgbmFtZTogJ3p6ei5wbmcnLAogICAgICBzdGF0dXM6ICdlcnJvcicsCiAgICAgIHJlc3BvbnNlOiAnU2VydmVyIEVycm9yIDUwMCcsCiAgICAgIC8vIGN1c3RvbSBlcnJvciBtZXNzYWdlIHRvIHNob3cKICAgICAgdXJsOiAnaHR0cDovL3d3dy5iYWlkdS5jb20venp6LnBuZycsCiAgICB9XSk7CiAgICByZXR1cm4gewogICAgICBmaWxlTGlzdCwKICAgICAgaGVhZGVyczogewogICAgICAgIGF1dGhvcml6YXRpb246ICdhdXRob3JpemF0aW9uLXRleHQnLAogICAgICB9LAogICAgICBoYW5kbGVDaGFuZ2UsCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:k(()=>[m(r,{"file-list":a.fileList,"onUpdate:file-list":s[0]||(s[0]=I=>a.fileList=I),name:"file",action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:a.headers,onChange:a.handleChange},{itemRender:k(({file:I,actions:C})=>[m(i,null,{default:k(()=>[n("span",{style:Aa(I.status==="error"?"color: red":"")},vt(I.name),5),n("a",{href:"javascript:;",onClick:C.download},"download",8,Oc),n("a",{href:"javascript:;",onClick:C.remove},"delete",8,Qc)]),_:2},1024)]),default:k(()=>[m(u,null,{default:k(()=>[m(l),Ec]),_:1})]),_:1},8,["file-list","headers","onChange"])]),htmlCode:k(()=>[_c]),jsVersionHtml:k(()=>[Tc]),_:1},8,["jsfiddle"])}var qc=G(Dc,[["render",Mc]]);const $c={pageData:{title:"Upload",description:"",frontmatter:{category:"Components",subtitle:"\u4E0A\u4F20",type:"\u6570\u636E\u5F55\u5165",title:"Upload",cover:"https://gw.alipayobjects.com/zos/alicdn/QaeBt_ZMg/Upload.svg"},headers:[{level:2,title:"\u4F55\u65F6\u4F7F\u7528",slug:"\u4F55\u65F6\u4F7F\u7528",content:"\u4E0A\u4F20\u662F\u5C06\u4FE1\u606F\uFF08\u7F51\u9875\u3001\u6587\u5B57\u3001\u56FE\u7247\u3001\u89C6\u9891\u7B49\uFF09\u901A\u8FC7\u7F51\u9875\u6216\u8005\u4E0A\u4F20\u5DE5\u5177\u53D1\u5E03\u5230\u8FDC\u7A0B\u670D\u52A1\u5668\u4E0A\u7684\u8FC7\u7A0B\u3002"},{level:2,title:"API",slug:"API",content:""},{level:3,title:"\u4E8B\u4EF6",slug:"\u4E8B\u4EF6",content:""},{level:3,title:"UploadFile",slug:"UploadFile",content:"\u7EE7\u627F\u81EA File\uFF0C\u9644\u5E26\u989D\u5916\u5C5E\u6027\u7528\u4E8E\u6E32\u67D3\u3002"},{level:3,title:"change",slug:"change",content:""},{level:2,title:"FAQ",slug:"FAQ",content:"\u670D\u52A1\u7AEF\u5982\u4F55\u5B9E\u73B0\uFF1F"},{level:3,title:"\u670D\u52A1\u7AEF\u5982\u4F55\u5B9E\u73B0\uFF1F",slug:"\u670D\u52A1\u7AEF\u5982\u4F55\u5B9E\u73B0\uFF1F",content:""},{level:3,title:"\u5982\u4F55\u663E\u793A\u4E0B\u8F7D\u94FE\u63A5\uFF1F",slug:"\u5982\u4F55\u663E\u793A\u4E0B\u8F7D\u94FE\u63A5\uFF1F",content:"\u8BF7\u4F7F\u7528 fileList \u5C5E\u6027\u8BBE\u7F6E\u6570\u7EC4\u9879\u7684 url \u5C5E\u6027\u8FDB\u884C\u5C55\u793A\u63A7\u5236\u3002"},{level:3,title:"customRequest \u600E\u4E48\u4F7F\u7528\uFF1F",slug:"customRequest-\u600E\u4E48\u4F7F\u7528\uFF1F",content:"\u8BF7\u53C2\u8003 <https://github.com/react-component/upload#customrequest>\u3002"},{level:3,title:"\u4E3A\u4F55 fileList \u53D7\u63A7\u65F6\uFF0C\u4E0A\u4F20\u4E0D\u5728\u5217\u8868\u4E2D\u7684\u6587\u4EF6\u4E0D\u4F1A\u89E6\u53D1 onChange \u540E\u7EED\u7684 status \u66F4\u65B0\u4E8B\u4EF6\uFF1F",slug:"\u4E3A\u4F55-fileList-\u53D7\u63A7\u65F6\uFF0C\u4E0A\u4F20\u4E0D\u5728\u5217\u8868\u4E2D\u7684\u6587\u4EF6\u4E0D\u4F1A\u89E6\u53D1-onChange-\u540E\u7EED\u7684-status-\u66F4\u65B0\u4E8B\u4EF6\uFF1F",content:"`onChange` \u4E8B\u4EF6\u4EC5\u4F1A\u4F5C\u7528\u4E8E\u5728\u5217\u8868\u4E2D\u7684\u6587\u4EF6\uFF0C\u56E0\u800C `fileList` \u4E0D\u5B58\u5728\u5BF9\u5E94\u6587\u4EF6\u65F6\u540E\u7EED\u4E8B\u4EF6\u4F1A\u88AB\u5FFD\u7565\u3002\u8BF7\u6CE8\u610F\uFF0C\u5728 `3.0.0-beta.10` \u7248\u672C\u4E4B\u524D\u53D7\u63A7\u72B6\u6001\u5B58\u5728 bug \u5BFC\u81F4\u4E0D\u5728\u5217\u8868\u4E2D\u7684\u6587\u4EF6\u4E5F\u4F1A\u89E6\u53D1\u3002"},{level:3,title:"onChange \u4E3A\u4EC0\u4E48\u6709\u65F6\u5019\u8FD4\u56DE File \u6709\u65F6\u5019\u8FD4\u56DE { originFileObj: File }\uFF1F",slug:"onChange-\u4E3A\u4EC0\u4E48\u6709\u65F6\u5019\u8FD4\u56DE-File-\u6709\u65F6\u5019\u8FD4\u56DE-originFileObj-File-\uFF1F",content:"\u5386\u53F2\u539F\u56E0\uFF0C\u5728 `beforeUpload` \u8FD4\u56DE `false` \u65F6\uFF0C\u4F1A\u8FD4\u56DE File \u5BF9\u8C61\u3002\u5728\u4E0B\u4E2A\u5927\u7248\u672C\u6211\u4EEC\u4F1A\u7EDF\u4E00\u8FD4\u56DE `{ originFileObj: File }` \u5BF9\u8C61\u3002\u5F53\u524D\u7248\u672C\u5DF2\u7ECF\u517C\u5BB9\u6240\u6709\u573A\u666F\u4E0B `info.file.originFileObj` \u83B7\u53D6\u539F File \u5199\u6CD5\u3002\u4F60\u53EF\u4EE5\u63D0\u524D\u5207\u6362\u3002"}],relativePath:"components/upload/index.zh-CN.md",content:`
\u6587\u4EF6\u9009\u62E9\u4E0A\u4F20\u548C\u62D6\u62FD\u4E0A\u4F20\u63A7\u4EF6\u3002

## \u4F55\u65F6\u4F7F\u7528

\u4E0A\u4F20\u662F\u5C06\u4FE1\u606F\uFF08\u7F51\u9875\u3001\u6587\u5B57\u3001\u56FE\u7247\u3001\u89C6\u9891\u7B49\uFF09\u901A\u8FC7\u7F51\u9875\u6216\u8005\u4E0A\u4F20\u5DE5\u5177\u53D1\u5E03\u5230\u8FDC\u7A0B\u670D\u52A1\u5668\u4E0A\u7684\u8FC7\u7A0B\u3002

- \u5F53\u9700\u8981\u4E0A\u4F20\u4E00\u4E2A\u6216\u4E00\u4E9B\u6587\u4EF6\u65F6\u3002
- \u5F53\u9700\u8981\u5C55\u73B0\u4E0A\u4F20\u7684\u8FDB\u5EA6\u65F6\u3002
- \u5F53\u9700\u8981\u4F7F\u7528\u62D6\u62FD\u4EA4\u4E92\u65F6\u3002

## API

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |  |
| --- | --- | --- | --- | --- | --- |
| accept | \u63A5\u53D7\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B, \u8BE6\u89C1 [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) | string | \u65E0 |  |  |
| action | \u4E0A\u4F20\u7684\u5730\u5740 | string\\|(file) =&gt; \`Promise\` | \u65E0 |  |  |
| beforeUpload | \u4E0A\u4F20\u6587\u4EF6\u4E4B\u524D\u7684\u94A9\u5B50\uFF0C\u53C2\u6570\u4E3A\u4E0A\u4F20\u7684\u6587\u4EF6\uFF0C\u82E5\u8FD4\u56DE \`false\` \u5219\u505C\u6B62\u4E0A\u4F20\u3002\u652F\u6301\u8FD4\u56DE\u4E00\u4E2A Promise \u5BF9\u8C61\uFF0CPromise \u5BF9\u8C61 reject \u65F6\u5219\u505C\u6B62\u4E0A\u4F20\uFF0Cresolve \u65F6\u5F00\u59CB\u4E0A\u4F20\uFF08 resolve \u4F20\u5165 \`File\` \u6216 \`Blob\` \u5BF9\u8C61\u5219\u4E0A\u4F20 resolve \u4F20\u5165\u5BF9\u8C61\uFF09\u3002 | (file, fileList) =&gt; \`boolean\` \\| \`Promise\` | \u65E0 |  |
| customRequest | \u901A\u8FC7\u8986\u76D6\u9ED8\u8BA4\u7684\u4E0A\u4F20\u884C\u4E3A\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u81EA\u5DF1\u7684\u4E0A\u4F20\u5B9E\u73B0 | Function | \u65E0 |  |  |
| data | \u4E0A\u4F20\u6240\u9700\u53C2\u6570\u6216\u8FD4\u56DE\u4E0A\u4F20\u53C2\u6570\u7684\u65B9\u6CD5 | object\\|(file) =&gt; object | \u65E0 |  |  |
| directory | \u652F\u6301\u4E0A\u4F20\u6587\u4EF6\u5939\uFF08[caniuse](https://caniuse.com/#feat=input-file-directory)\uFF09 | boolean | false |  |  |
| directory | \u652F\u6301\u4E0A\u4F20\u6587\u4EF6\u5939\uFF08[caniuse](https://caniuse.com/#feat=input-file-directory)\uFF09 | boolean | false | 3.0 |  |
| disabled | \u662F\u5426\u7981\u7528 | boolean | false |  |  |
| downloadIcon | \u81EA\u5B9A\u4E49\u4E0B\u8F7D icon | v-slot:iconRender=&quot;{file: UploadFile}&quot; | - | 3.0 |  |
| fileList | \u5DF2\u7ECF\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868\uFF08\u53D7\u63A7\uFF09 | object\\[] | \u65E0 |  |  |
| headers | \u8BBE\u7F6E\u4E0A\u4F20\u7684\u8BF7\u6C42\u5934\u90E8\uFF0CIE10 \u4EE5\u4E0A\u6709\u6548 | object | \u65E0 |  |  |
| iconRender | \u81EA\u5B9A\u4E49\u663E\u793A icon | v-slot:iconRender=&quot;{file: UploadFile, listType?: UploadListType}&quot; | - | 3.0 |  |
| isImageUrl | \u81EA\u5B9A\u4E49\u7F29\u7565\u56FE\u662F\u5426\u4F7F\u7528 &amp;lt;img /&gt; \u6807\u7B7E\u8FDB\u884C\u663E\u793A | (file: UploadFile) =&gt; boolean | - | 3.0 |  |
| itemRender | \u81EA\u5B9A\u4E49\u4E0A\u4F20\u5217\u8868\u9879 | v-slot:itemRender=&quot;{originNode: ReactElement, file: UploadFile, fileList: object\\[], actions: { download: function, preview: function, remove: function }&quot; | - | 3.0 |  |
| listType | \u4E0A\u4F20\u5217\u8868\u7684\u5185\u5EFA\u6837\u5F0F\uFF0C\u652F\u6301\u4E09\u79CD\u57FA\u672C\u6837\u5F0F \`text\`, \`picture\` \u548C \`picture-card\` | string | \`text\` |  |  |
| maxCount | \u9650\u5236\u4E0A\u4F20\u6570\u91CF\u3002\u5F53\u4E3A 1 \u65F6\uFF0C\u59CB\u7EC8\u7528\u6700\u65B0\u4E0A\u4F20\u7684\u6587\u4EF6\u4EE3\u66FF\u5F53\u524D\u6587\u4EF6 | number | - | 3.0 |  |
| method | \u4E0A\u4F20\u8BF7\u6C42\u7684 http method | string | \`post\` | 1.5.0 |  |
| multiple | \u662F\u5426\u652F\u6301\u591A\u9009\u6587\u4EF6\uFF0C\`ie10+\` \u652F\u6301\u3002\u5F00\u542F\u540E\u6309\u4F4F ctrl \u53EF\u9009\u62E9\u591A\u4E2A\u6587\u4EF6\u3002 | boolean | false |  |  |
| name | \u53D1\u5230\u540E\u53F0\u7684\u6587\u4EF6\u53C2\u6570\u540D | string | \`file\` |  |  |
| openFileDialogOnClick | \u70B9\u51FB\u6253\u5F00\u6587\u4EF6\u5BF9\u8BDD\u6846 | boolean | true |  |  |
| openFileDialogOnClick | \u70B9\u51FB\u6253\u5F00\u6587\u4EF6\u5BF9\u8BDD\u6846 | boolean | true | 3.0 |  |
| previewFile | \u81EA\u5B9A\u4E49\u6587\u4EF6\u9884\u89C8\u903B\u8F91 | (file: File \\| Blob) =&gt; Promise&amp;lt;dataURL: string&gt; | \u65E0 | 1.5.0 |  |
| previewIcon | \u81EA\u5B9A\u4E49\u9884\u89C8 icon | v-slot:iconRender=&quot;{file: UploadFile}&quot; | - | 3.0 |  |
| progress | \u81EA\u5B9A\u4E49\u8FDB\u5EA6\u6761\u6837\u5F0F | [ProgressProps](/components/progress/#API)\uFF08\u4EC5\u652F\u6301 \`type=&quot;line&quot;\`\uFF09 | { strokeWidth: 2, showInfo: false } | 3.0 |  |
| removeIcon | \u81EA\u5B9A\u4E49\u5220\u9664 icon | v-slot:iconRender=&quot;{file: UploadFile}&quot; | - | 3.0 |  |
| showUploadList | \u662F\u5426\u5C55\u793A uploadList, \u53EF\u8BBE\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u7528\u4E8E\u5355\u72EC\u8BBE\u5B9A showPreviewIcon, showRemoveIcon \u548C showDownloadIcon | Boolean or { showPreviewIcon?: boolean, showRemoveIcon?: boolean, showDownloadIcon?: boolean } | true | showDownloadIcon(3.0) |  |
| supportServerRender | \u670D\u52A1\u7AEF\u6E32\u67D3\u65F6\u9700\u8981\u6253\u5F00\u8FD9\u4E2A | boolean | false |  |  |
| withCredentials | \u4E0A\u4F20\u8BF7\u6C42\u65F6\u662F\u5426\u643A\u5E26 cookie | boolean | false |  |  |
| cropper | \u88C1\u5207\u529F\u80FD | boolean | false |  | 4.30.0 |
| cropperProps | \u88C1\u5207\u529F\u80FD\u7EC4\u4EF6\u7684\u914D\u7F6E | object | - |  | 4.30.0 |

### \u4E8B\u4EF6

| \u4E8B\u4EF6\u540D\u79F0 | \u8BF4\u660E | \u56DE\u8C03\u53C2\u6570 | \u7248\u672C |  |
| --- | --- | --- | --- | --- |
| change | \u4E0A\u4F20\u6587\u4EF6\u6539\u53D8\u65F6\u7684\u72B6\u6001\uFF0C\u8BE6\u89C1 [change](#change) | Function | \u65E0 |  |
| download | \u70B9\u51FB\u4E0B\u8F7D\u6587\u4EF6\u65F6\u7684\u56DE\u8C03\uFF0C\u5982\u679C\u6CA1\u6709\u6307\u5B9A\uFF0C\u5219\u9ED8\u8BA4\u8DF3\u8F6C\u5230\u6587\u4EF6 url \u5BF9\u5E94\u7684\u6807\u7B7E\u9875\u3002 | Function(file): void | \u8DF3\u8F6C\u65B0\u6807\u7B7E\u9875 | 1.5.0 |
| drop | \u5F53\u6587\u4EF6\u88AB\u62D6\u5165\u4E0A\u4F20\u533A\u57DF\u65F6\u6267\u884C\u7684\u56DE\u8C03\u529F\u80FD | (event: DragEvent) =&gt; void | - | 3.0 |
| preview | \u70B9\u51FB\u6587\u4EF6\u94FE\u63A5\u6216\u9884\u89C8\u56FE\u6807\u65F6\u7684\u56DE\u8C03 | Function(file) | \u65E0 |  |
| reject | \u62D6\u62FD\u6587\u4EF6\u4E0D\u7B26\u5408 accept \u7C7B\u578B\u65F6\u7684\u56DE\u8C03 | Function(fileList) | \u65E0 |  |
| remove \xA0 | \u70B9\u51FB\u79FB\u9664\u6587\u4EF6\u65F6\u7684\u56DE\u8C03\uFF0C\u8FD4\u56DE\u503C\u4E3A false \u65F6\u4E0D\u79FB\u9664\u3002\u652F\u6301\u8FD4\u56DE\u4E00\u4E2A Promise \u5BF9\u8C61\uFF0CPromise \u5BF9\u8C61 resolve(false) \u6216 reject \u65F6\u4E0D\u79FB\u9664 | function(file): boolean \\| Promise | - \xA0 | 3.0 |

### UploadFile

\u7EE7\u627F\u81EA File\uFF0C\u9644\u5E26\u989D\u5916\u5C5E\u6027\u7528\u4E8E\u6E32\u67D3\u3002

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C |
| --- | --- | --- | --- |
| name | \u6587\u4EF6\u540D | string | - |
| percent | \u4E0A\u4F20\u8FDB\u5EA6 | number | - |
| status | \u4E0A\u4F20\u72B6\u6001\uFF0C\u4E0D\u540C\u72B6\u6001\u5C55\u793A\u989C\u8272\u4E5F\u4F1A\u6709\u6240\u4E0D\u540C | \`error\` \\| \`success\` \\| \`done\` \\| \`uploading\` \\| \`removed\` | - |
| thumbUrl | \u7F29\u7565\u56FE\u5730\u5740 | string | - |
| uid | \u552F\u4E00\u6807\u8BC6\u7B26\uFF0C\u4E0D\u8BBE\u7F6E\u65F6\u4F1A\u81EA\u52A8\u751F\u6210 | string | - |
| url | \u4E0B\u8F7D\u5730\u5740 | string | - |

### change

&gt; \u4E0A\u4F20\u4E2D\u3001\u5B8C\u6210\u3001\u5931\u8D25\u90FD\u4F1A\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570\u3002

\u6587\u4EF6\u72B6\u6001\u6539\u53D8\u7684\u56DE\u8C03\uFF0C\u8FD4\u56DE\u4E3A\uFF1A

\`\`\`jsx
{
  file: { /* ... */ },
  fileList: [ /* ... */ ],
  event: { /* ... */ },
}
\`\`\`

1. \`file\` \u5F53\u524D\u64CD\u4F5C\u7684\u6587\u4EF6\u5BF9\u8C61\u3002

   \`\`\`jsx
   {
      uid: &#39;uid&#39;,      // \u6587\u4EF6\u552F\u4E00\u6807\u8BC6\uFF0C\u5EFA\u8BAE\u8BBE\u7F6E\u4E3A\u8D1F\u6570\uFF0C\u9632\u6B62\u548C\u5185\u90E8\u4EA7\u751F\u7684 id \u51B2\u7A81
      name: &#39;xx.png&#39;,   // \u6587\u4EF6\u540D
      status: &#39;done&#39;, // \u72B6\u6001\u6709\uFF1Auploading done error removed
      response: &#39;{&quot;status&quot;: &quot;success&quot;}&#39;, // \u670D\u52A1\u7AEF\u54CD\u5E94\u5185\u5BB9
      linkProps: &#39;{&quot;download&quot;: &quot;image&quot;}&#39;, // \u4E0B\u8F7D\u94FE\u63A5\u989D\u5916\u7684 HTML \u5C5E\u6027
      xhr: &#39;XMLHttpRequest{ ... }&#39;, // XMLHttpRequest Header
   }
   \`\`\`

2. \`fileList\` \u5F53\u524D\u7684\u6587\u4EF6\u5217\u8868\u3002

3. \`event\` \u4E0A\u4F20\u4E2D\u7684\u670D\u52A1\u7AEF\u54CD\u5E94\u5185\u5BB9\uFF0C\u5305\u542B\u4E86\u4E0A\u4F20\u8FDB\u5EA6\u7B49\u4FE1\u606F\uFF0C\u9AD8\u7EA7\u6D4F\u89C8\u5668\u652F\u6301\u3002

## FAQ

### \u670D\u52A1\u7AEF\u5982\u4F55\u5B9E\u73B0\uFF1F

- \u670D\u52A1\u7AEF\u4E0A\u4F20\u63A5\u53E3\u5B9E\u73B0\u53EF\u4EE5\u53C2\u8003 [jQuery-File-Upload](https://github.com/blueimp/jQuery-File-Upload/wiki#server-side)\u3002
- \u5982\u679C\u8981\u505A\u672C\u5730 mock \u53EF\u4EE5\u53C2\u8003\u8FD9\u4E2A [express \u7684\u4F8B\u5B50](https://github.com/react-component/upload/blob/master/server.js)\u3002

### \u5982\u4F55\u663E\u793A\u4E0B\u8F7D\u94FE\u63A5\uFF1F

\u8BF7\u4F7F\u7528 fileList \u5C5E\u6027\u8BBE\u7F6E\u6570\u7EC4\u9879\u7684 url \u5C5E\u6027\u8FDB\u884C\u5C55\u793A\u63A7\u5236\u3002

### \`customRequest\` \u600E\u4E48\u4F7F\u7528\uFF1F

\u8BF7\u53C2\u8003 &lt;https://github.com/react-component/upload#customrequest&gt;\u3002

### \u4E3A\u4F55 \`fileList\` \u53D7\u63A7\u65F6\uFF0C\u4E0A\u4F20\u4E0D\u5728\u5217\u8868\u4E2D\u7684\u6587\u4EF6\u4E0D\u4F1A\u89E6\u53D1 \`onChange\` \u540E\u7EED\u7684 \`status\` \u66F4\u65B0\u4E8B\u4EF6\uFF1F

\`onChange\` \u4E8B\u4EF6\u4EC5\u4F1A\u4F5C\u7528\u4E8E\u5728\u5217\u8868\u4E2D\u7684\u6587\u4EF6\uFF0C\u56E0\u800C \`fileList\` \u4E0D\u5B58\u5728\u5BF9\u5E94\u6587\u4EF6\u65F6\u540E\u7EED\u4E8B\u4EF6\u4F1A\u88AB\u5FFD\u7565\u3002\u8BF7\u6CE8\u610F\uFF0C\u5728 \`3.0.0-beta.10\` \u7248\u672C\u4E4B\u524D\u53D7\u63A7\u72B6\u6001\u5B58\u5728 bug \u5BFC\u81F4\u4E0D\u5728\u5217\u8868\u4E2D\u7684\u6587\u4EF6\u4E5F\u4F1A\u89E6\u53D1\u3002

### \`onChange\` \u4E3A\u4EC0\u4E48\u6709\u65F6\u5019\u8FD4\u56DE File \u6709\u65F6\u5019\u8FD4\u56DE { originFileObj: File }\uFF1F

\u5386\u53F2\u539F\u56E0\uFF0C\u5728 \`beforeUpload\` \u8FD4\u56DE \`false\` \u65F6\uFF0C\u4F1A\u8FD4\u56DE File \u5BF9\u8C61\u3002\u5728\u4E0B\u4E2A\u5927\u7248\u672C\u6211\u4EEC\u4F1A\u7EDF\u4E00\u8FD4\u56DE \`{ originFileObj: File }\` \u5BF9\u8C61\u3002\u5F53\u524D\u7248\u672C\u5DF2\u7ECF\u517C\u5BB9\u6240\u6709\u573A\u666F\u4E0B \`info.file.originFileObj\` \u83B7\u53D6\u539F File \u5199\u6CD5\u3002\u4F60\u53EF\u4EE5\u63D0\u524D\u5207\u6362\u3002
`,html:`<p>\u6587\u4EF6\u9009\u62E9\u4E0A\u4F20\u548C\u62D6\u62FD\u4E0A\u4F20\u63A7\u4EF6\u3002</p>
<h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u4E0A\u4F20\u662F\u5C06\u4FE1\u606F\uFF08\u7F51\u9875\u3001\u6587\u5B57\u3001\u56FE\u7247\u3001\u89C6\u9891\u7B49\uFF09\u901A\u8FC7\u7F51\u9875\u6216\u8005\u4E0A\u4F20\u5DE5\u5177\u53D1\u5E03\u5230\u8FDC\u7A0B\u670D\u52A1\u5668\u4E0A\u7684\u8FC7\u7A0B\u3002</p>
<ul>
<li>\u5F53\u9700\u8981\u4E0A\u4F20\u4E00\u4E2A\u6216\u4E00\u4E9B\u6587\u4EF6\u65F6\u3002</li>
<li>\u5F53\u9700\u8981\u5C55\u73B0\u4E0A\u4F20\u7684\u8FDB\u5EA6\u65F6\u3002</li>
<li>\u5F53\u9700\u8981\u4F7F\u7528\u62D6\u62FD\u4EA4\u4E92\u65F6\u3002</li>
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
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>accept</td>
<td>\u63A5\u53D7\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B, \u8BE6\u89C1 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept" target="_blank" rel="noopener noreferrer">input accept Attribute</a></td>
<td>string</td>
<td>\u65E0</td>
<td></td>
<td></td>
</tr>
<tr>
<td>action</td>
<td>\u4E0A\u4F20\u7684\u5730\u5740</td>
<td>string|(file) =&gt; <code>Promise</code></td>
<td>\u65E0</td>
<td></td>
<td></td>
</tr>
<tr>
<td>beforeUpload</td>
<td>\u4E0A\u4F20\u6587\u4EF6\u4E4B\u524D\u7684\u94A9\u5B50\uFF0C\u53C2\u6570\u4E3A\u4E0A\u4F20\u7684\u6587\u4EF6\uFF0C\u82E5\u8FD4\u56DE <code>false</code> \u5219\u505C\u6B62\u4E0A\u4F20\u3002\u652F\u6301\u8FD4\u56DE\u4E00\u4E2A Promise \u5BF9\u8C61\uFF0CPromise \u5BF9\u8C61 reject \u65F6\u5219\u505C\u6B62\u4E0A\u4F20\uFF0Cresolve \u65F6\u5F00\u59CB\u4E0A\u4F20\uFF08 resolve \u4F20\u5165 <code>File</code> \u6216 <code>Blob</code> \u5BF9\u8C61\u5219\u4E0A\u4F20 resolve \u4F20\u5165\u5BF9\u8C61\uFF09\u3002</td>
<td>(file, fileList) =&gt; <code>boolean</code> | <code>Promise</code></td>
<td>\u65E0</td>
<td></td>
<td></td>
</tr>
<tr>
<td>customRequest</td>
<td>\u901A\u8FC7\u8986\u76D6\u9ED8\u8BA4\u7684\u4E0A\u4F20\u884C\u4E3A\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u81EA\u5DF1\u7684\u4E0A\u4F20\u5B9E\u73B0</td>
<td>Function</td>
<td>\u65E0</td>
<td></td>
<td></td>
</tr>
<tr>
<td>data</td>
<td>\u4E0A\u4F20\u6240\u9700\u53C2\u6570\u6216\u8FD4\u56DE\u4E0A\u4F20\u53C2\u6570\u7684\u65B9\u6CD5</td>
<td>object|(file) =&gt; object</td>
<td>\u65E0</td>
<td></td>
<td></td>
</tr>
<tr>
<td>directory</td>
<td>\u652F\u6301\u4E0A\u4F20\u6587\u4EF6\u5939\uFF08<a href="https://caniuse.com/#feat=input-file-directory" target="_blank" rel="noopener noreferrer">caniuse</a>\uFF09</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>directory</td>
<td>\u652F\u6301\u4E0A\u4F20\u6587\u4EF6\u5939\uFF08<a href="https://caniuse.com/#feat=input-file-directory" target="_blank" rel="noopener noreferrer">caniuse</a>\uFF09</td>
<td>boolean</td>
<td>false</td>
<td>3.0</td>
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
<td>downloadIcon</td>
<td>\u81EA\u5B9A\u4E49\u4E0B\u8F7D icon</td>
<td>v-slot:iconRender=&quot;{file: UploadFile}&quot;</td>
<td>-</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>fileList</td>
<td>\u5DF2\u7ECF\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868\uFF08\u53D7\u63A7\uFF09</td>
<td>object[]</td>
<td>\u65E0</td>
<td></td>
<td></td>
</tr>
<tr>
<td>headers</td>
<td>\u8BBE\u7F6E\u4E0A\u4F20\u7684\u8BF7\u6C42\u5934\u90E8\uFF0CIE10 \u4EE5\u4E0A\u6709\u6548</td>
<td>object</td>
<td>\u65E0</td>
<td></td>
<td></td>
</tr>
<tr>
<td>iconRender</td>
<td>\u81EA\u5B9A\u4E49\u663E\u793A icon</td>
<td>v-slot:iconRender=&quot;{file: UploadFile, listType?: UploadListType}&quot;</td>
<td>-</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>isImageUrl</td>
<td>\u81EA\u5B9A\u4E49\u7F29\u7565\u56FE\u662F\u5426\u4F7F\u7528 &lt;img /&gt; \u6807\u7B7E\u8FDB\u884C\u663E\u793A</td>
<td>(file: UploadFile) =&gt; boolean</td>
<td>-</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>itemRender</td>
<td>\u81EA\u5B9A\u4E49\u4E0A\u4F20\u5217\u8868\u9879</td>
<td>v-slot:itemRender=&quot;{originNode: ReactElement, file: UploadFile, fileList: object[], actions: { download: function, preview: function, remove: function }&quot;</td>
<td>-</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>listType</td>
<td>\u4E0A\u4F20\u5217\u8868\u7684\u5185\u5EFA\u6837\u5F0F\uFF0C\u652F\u6301\u4E09\u79CD\u57FA\u672C\u6837\u5F0F <code>text</code>, <code>picture</code> \u548C <code>picture-card</code></td>
<td>string</td>
<td><code>text</code></td>
<td></td>
<td></td>
</tr>
<tr>
<td>maxCount</td>
<td>\u9650\u5236\u4E0A\u4F20\u6570\u91CF\u3002\u5F53\u4E3A 1 \u65F6\uFF0C\u59CB\u7EC8\u7528\u6700\u65B0\u4E0A\u4F20\u7684\u6587\u4EF6\u4EE3\u66FF\u5F53\u524D\u6587\u4EF6</td>
<td>number</td>
<td>-</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>method</td>
<td>\u4E0A\u4F20\u8BF7\u6C42\u7684 http method</td>
<td>string</td>
<td><code>post</code></td>
<td>1.5.0</td>
<td></td>
</tr>
<tr>
<td>multiple</td>
<td>\u662F\u5426\u652F\u6301\u591A\u9009\u6587\u4EF6\uFF0C<code>ie10+</code> \u652F\u6301\u3002\u5F00\u542F\u540E\u6309\u4F4F ctrl \u53EF\u9009\u62E9\u591A\u4E2A\u6587\u4EF6\u3002</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>name</td>
<td>\u53D1\u5230\u540E\u53F0\u7684\u6587\u4EF6\u53C2\u6570\u540D</td>
<td>string</td>
<td><code>file</code></td>
<td></td>
<td></td>
</tr>
<tr>
<td>openFileDialogOnClick</td>
<td>\u70B9\u51FB\u6253\u5F00\u6587\u4EF6\u5BF9\u8BDD\u6846</td>
<td>boolean</td>
<td>true</td>
<td></td>
<td></td>
</tr>
<tr>
<td>openFileDialogOnClick</td>
<td>\u70B9\u51FB\u6253\u5F00\u6587\u4EF6\u5BF9\u8BDD\u6846</td>
<td>boolean</td>
<td>true</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>previewFile</td>
<td>\u81EA\u5B9A\u4E49\u6587\u4EF6\u9884\u89C8\u903B\u8F91</td>
<td>(file: File | Blob) =&gt; Promise&lt;dataURL: string&gt;</td>
<td>\u65E0</td>
<td>1.5.0</td>
<td></td>
</tr>
<tr>
<td>previewIcon</td>
<td>\u81EA\u5B9A\u4E49\u9884\u89C8 icon</td>
<td>v-slot:iconRender=&quot;{file: UploadFile}&quot;</td>
<td>-</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>progress</td>
<td>\u81EA\u5B9A\u4E49\u8FDB\u5EA6\u6761\u6837\u5F0F</td>
<td><a href="/components/progress/#API">ProgressProps</a>\uFF08\u4EC5\u652F\u6301 <code>type=&quot;line&quot;</code>\uFF09</td>
<td>{ strokeWidth: 2, showInfo: false }</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>removeIcon</td>
<td>\u81EA\u5B9A\u4E49\u5220\u9664 icon</td>
<td>v-slot:iconRender=&quot;{file: UploadFile}&quot;</td>
<td>-</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>showUploadList</td>
<td>\u662F\u5426\u5C55\u793A uploadList, \u53EF\u8BBE\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u7528\u4E8E\u5355\u72EC\u8BBE\u5B9A showPreviewIcon, showRemoveIcon \u548C showDownloadIcon</td>
<td>Boolean or { showPreviewIcon?: boolean, showRemoveIcon?: boolean, showDownloadIcon?: boolean }</td>
<td>true</td>
<td>showDownloadIcon(3.0)</td>
<td></td>
</tr>
<tr>
<td>supportServerRender</td>
<td>\u670D\u52A1\u7AEF\u6E32\u67D3\u65F6\u9700\u8981\u6253\u5F00\u8FD9\u4E2A</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>withCredentials</td>
<td>\u4E0A\u4F20\u8BF7\u6C42\u65F6\u662F\u5426\u643A\u5E26 cookie</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>cropper</td>
<td>\u88C1\u5207\u529F\u80FD</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td>4.30.0</td>
</tr>
<tr>
<td>cropperProps</td>
<td>\u88C1\u5207\u529F\u80FD\u7EC4\u4EF6\u7684\u914D\u7F6E</td>
<td>object</td>
<td>-</td>
<td></td>
<td>4.30.0</td>
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
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>change</td>
<td>\u4E0A\u4F20\u6587\u4EF6\u6539\u53D8\u65F6\u7684\u72B6\u6001\uFF0C\u8BE6\u89C1 <a href="#change">change</a></td>
<td>Function</td>
<td>\u65E0</td>
<td></td>
</tr>
<tr>
<td>download</td>
<td>\u70B9\u51FB\u4E0B\u8F7D\u6587\u4EF6\u65F6\u7684\u56DE\u8C03\uFF0C\u5982\u679C\u6CA1\u6709\u6307\u5B9A\uFF0C\u5219\u9ED8\u8BA4\u8DF3\u8F6C\u5230\u6587\u4EF6 url \u5BF9\u5E94\u7684\u6807\u7B7E\u9875\u3002</td>
<td>Function(file): void</td>
<td>\u8DF3\u8F6C\u65B0\u6807\u7B7E\u9875</td>
<td>1.5.0</td>
</tr>
<tr>
<td>drop</td>
<td>\u5F53\u6587\u4EF6\u88AB\u62D6\u5165\u4E0A\u4F20\u533A\u57DF\u65F6\u6267\u884C\u7684\u56DE\u8C03\u529F\u80FD</td>
<td>(event: DragEvent) =&gt; void</td>
<td>-</td>
<td>3.0</td>
</tr>
<tr>
<td>preview</td>
<td>\u70B9\u51FB\u6587\u4EF6\u94FE\u63A5\u6216\u9884\u89C8\u56FE\u6807\u65F6\u7684\u56DE\u8C03</td>
<td>Function(file)</td>
<td>\u65E0</td>
<td></td>
</tr>
<tr>
<td>reject</td>
<td>\u62D6\u62FD\u6587\u4EF6\u4E0D\u7B26\u5408 accept \u7C7B\u578B\u65F6\u7684\u56DE\u8C03</td>
<td>Function(fileList)</td>
<td>\u65E0</td>
<td></td>
</tr>
<tr>
<td>remove</td>
<td>\u70B9\u51FB\u79FB\u9664\u6587\u4EF6\u65F6\u7684\u56DE\u8C03\uFF0C\u8FD4\u56DE\u503C\u4E3A false \u65F6\u4E0D\u79FB\u9664\u3002\u652F\u6301\u8FD4\u56DE\u4E00\u4E2A Promise \u5BF9\u8C61\uFF0CPromise \u5BF9\u8C61 resolve(false) \u6216 reject \u65F6\u4E0D\u79FB\u9664</td>
<td>function(file): boolean | Promise</td>
<td>-</td>
<td>3.0</td>
</tr>
</tbody>
</table>
<h3 id="UploadFile">UploadFile <a class="header-anchor" href="#UploadFile">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>\u7EE7\u627F\u81EA File\uFF0C\u9644\u5E26\u989D\u5916\u5C5E\u6027\u7528\u4E8E\u6E32\u67D3\u3002</p>
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
<td>name</td>
<td>\u6587\u4EF6\u540D</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>percent</td>
<td>\u4E0A\u4F20\u8FDB\u5EA6</td>
<td>number</td>
<td>-</td>
</tr>
<tr>
<td>status</td>
<td>\u4E0A\u4F20\u72B6\u6001\uFF0C\u4E0D\u540C\u72B6\u6001\u5C55\u793A\u989C\u8272\u4E5F\u4F1A\u6709\u6240\u4E0D\u540C</td>
<td><code>error</code> | <code>success</code> | <code>done</code> | <code>uploading</code> | <code>removed</code></td>
<td>-</td>
</tr>
<tr>
<td>thumbUrl</td>
<td>\u7F29\u7565\u56FE\u5730\u5740</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>uid</td>
<td>\u552F\u4E00\u6807\u8BC6\u7B26\uFF0C\u4E0D\u8BBE\u7F6E\u65F6\u4F1A\u81EA\u52A8\u751F\u6210</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>url</td>
<td>\u4E0B\u8F7D\u5730\u5740</td>
<td>string</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="change">change <a class="header-anchor" href="#change">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<blockquote>
<p>\u4E0A\u4F20\u4E2D\u3001\u5B8C\u6210\u3001\u5931\u8D25\u90FD\u4F1A\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570\u3002</p>
</blockquote>
<p>\u6587\u4EF6\u72B6\u6001\u6539\u53D8\u7684\u56DE\u8C03\uFF0C\u8FD4\u56DE\u4E3A\uFF1A</p>
<pre class="language-jsx" v-pre><code><span class="token punctuation">{</span>
  file<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  fileList<span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">/* ... */</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
  event<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre>
<ol>
<li>
<p><code>file</code> \u5F53\u524D\u64CD\u4F5C\u7684\u6587\u4EF6\u5BF9\u8C61\u3002</p>
<pre class="language-jsx" v-pre><code><span class="token punctuation">{</span>
   uid<span class="token operator">:</span> <span class="token string">'uid'</span><span class="token punctuation">,</span>      <span class="token comment">// \u6587\u4EF6\u552F\u4E00\u6807\u8BC6\uFF0C\u5EFA\u8BAE\u8BBE\u7F6E\u4E3A\u8D1F\u6570\uFF0C\u9632\u6B62\u548C\u5185\u90E8\u4EA7\u751F\u7684 id \u51B2\u7A81</span>
   name<span class="token operator">:</span> <span class="token string">'xx.png'</span><span class="token punctuation">,</span>   <span class="token comment">// \u6587\u4EF6\u540D</span>
   status<span class="token operator">:</span> <span class="token string">'done'</span><span class="token punctuation">,</span> <span class="token comment">// \u72B6\u6001\u6709\uFF1Auploading done error removed</span>
   response<span class="token operator">:</span> <span class="token string">'{"status": "success"}'</span><span class="token punctuation">,</span> <span class="token comment">// \u670D\u52A1\u7AEF\u54CD\u5E94\u5185\u5BB9</span>
   linkProps<span class="token operator">:</span> <span class="token string">'{"download": "image"}'</span><span class="token punctuation">,</span> <span class="token comment">// \u4E0B\u8F7D\u94FE\u63A5\u989D\u5916\u7684 HTML \u5C5E\u6027</span>
   xhr<span class="token operator">:</span> <span class="token string">'XMLHttpRequest{ ... }'</span><span class="token punctuation">,</span> <span class="token comment">// XMLHttpRequest Header</span>
<span class="token punctuation">}</span>
</code></pre>
</li>
<li>
<p><code>fileList</code> \u5F53\u524D\u7684\u6587\u4EF6\u5217\u8868\u3002</p>
</li>
<li>
<p><code>event</code> \u4E0A\u4F20\u4E2D\u7684\u670D\u52A1\u7AEF\u54CD\u5E94\u5185\u5BB9\uFF0C\u5305\u542B\u4E86\u4E0A\u4F20\u8FDB\u5EA6\u7B49\u4FE1\u606F\uFF0C\u9AD8\u7EA7\u6D4F\u89C8\u5668\u652F\u6301\u3002</p>
</li>
</ol>
<h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<h3 id="\u670D\u52A1\u7AEF\u5982\u4F55\u5B9E\u73B0\uFF1F">\u670D\u52A1\u7AEF\u5982\u4F55\u5B9E\u73B0\uFF1F <a class="header-anchor" href="#\u670D\u52A1\u7AEF\u5982\u4F55\u5B9E\u73B0\uFF1F">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<ul>
<li>\u670D\u52A1\u7AEF\u4E0A\u4F20\u63A5\u53E3\u5B9E\u73B0\u53EF\u4EE5\u53C2\u8003 <a href="https://github.com/blueimp/jQuery-File-Upload/wiki#server-side" target="_blank" rel="noopener noreferrer">jQuery-File-Upload</a>\u3002</li>
<li>\u5982\u679C\u8981\u505A\u672C\u5730 mock \u53EF\u4EE5\u53C2\u8003\u8FD9\u4E2A <a href="https://github.com/react-component/upload/blob/master/server.js" target="_blank" rel="noopener noreferrer">express \u7684\u4F8B\u5B50</a>\u3002</li>
</ul>
<h3 id="\u5982\u4F55\u663E\u793A\u4E0B\u8F7D\u94FE\u63A5\uFF1F">\u5982\u4F55\u663E\u793A\u4E0B\u8F7D\u94FE\u63A5\uFF1F <a class="header-anchor" href="#\u5982\u4F55\u663E\u793A\u4E0B\u8F7D\u94FE\u63A5\uFF1F">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>\u8BF7\u4F7F\u7528 fileList \u5C5E\u6027\u8BBE\u7F6E\u6570\u7EC4\u9879\u7684 url \u5C5E\u6027\u8FDB\u884C\u5C55\u793A\u63A7\u5236\u3002</p>
<h3 id="customRequest-\u600E\u4E48\u4F7F\u7528\uFF1F"><code>customRequest</code> \u600E\u4E48\u4F7F\u7528\uFF1F <a class="header-anchor" href="#customRequest-\u600E\u4E48\u4F7F\u7528\uFF1F">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>\u8BF7\u53C2\u8003 <a href="https://github.com/react-component/upload#customrequest" target="_blank" rel="noopener noreferrer">https://github.com/react-component/upload#customrequest</a>\u3002</p>
<h3 id="\u4E3A\u4F55-fileList-\u53D7\u63A7\u65F6\uFF0C\u4E0A\u4F20\u4E0D\u5728\u5217\u8868\u4E2D\u7684\u6587\u4EF6\u4E0D\u4F1A\u89E6\u53D1-onChange-\u540E\u7EED\u7684-status-\u66F4\u65B0\u4E8B\u4EF6\uFF1F">\u4E3A\u4F55 <code>fileList</code> \u53D7\u63A7\u65F6\uFF0C\u4E0A\u4F20\u4E0D\u5728\u5217\u8868\u4E2D\u7684\u6587\u4EF6\u4E0D\u4F1A\u89E6\u53D1 <code>onChange</code> \u540E\u7EED\u7684 <code>status</code> \u66F4\u65B0\u4E8B\u4EF6\uFF1F <a class="header-anchor" href="#\u4E3A\u4F55-fileList-\u53D7\u63A7\u65F6\uFF0C\u4E0A\u4F20\u4E0D\u5728\u5217\u8868\u4E2D\u7684\u6587\u4EF6\u4E0D\u4F1A\u89E6\u53D1-onChange-\u540E\u7EED\u7684-status-\u66F4\u65B0\u4E8B\u4EF6\uFF1F">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p><code>onChange</code> \u4E8B\u4EF6\u4EC5\u4F1A\u4F5C\u7528\u4E8E\u5728\u5217\u8868\u4E2D\u7684\u6587\u4EF6\uFF0C\u56E0\u800C <code>fileList</code> \u4E0D\u5B58\u5728\u5BF9\u5E94\u6587\u4EF6\u65F6\u540E\u7EED\u4E8B\u4EF6\u4F1A\u88AB\u5FFD\u7565\u3002\u8BF7\u6CE8\u610F\uFF0C\u5728 <code>3.0.0-beta.10</code> \u7248\u672C\u4E4B\u524D\u53D7\u63A7\u72B6\u6001\u5B58\u5728 bug \u5BFC\u81F4\u4E0D\u5728\u5217\u8868\u4E2D\u7684\u6587\u4EF6\u4E5F\u4F1A\u89E6\u53D1\u3002</p>
<h3 id="onChange-\u4E3A\u4EC0\u4E48\u6709\u65F6\u5019\u8FD4\u56DE-File-\u6709\u65F6\u5019\u8FD4\u56DE-originFileObj-File-\uFF1F"><code>onChange</code> \u4E3A\u4EC0\u4E48\u6709\u65F6\u5019\u8FD4\u56DE File \u6709\u65F6\u5019\u8FD4\u56DE { originFileObj: File }\uFF1F <a class="header-anchor" href="#onChange-\u4E3A\u4EC0\u4E48\u6709\u65F6\u5019\u8FD4\u56DE-File-\u6709\u65F6\u5019\u8FD4\u56DE-originFileObj-File-\uFF1F">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>\u5386\u53F2\u539F\u56E0\uFF0C\u5728 <code>beforeUpload</code> \u8FD4\u56DE <code>false</code> \u65F6\uFF0C\u4F1A\u8FD4\u56DE File \u5BF9\u8C61\u3002\u5728\u4E0B\u4E2A\u5927\u7248\u672C\u6211\u4EEC\u4F1A\u7EDF\u4E00\u8FD4\u56DE <code>{ originFileObj: File }</code> \u5BF9\u8C61\u3002\u5F53\u524D\u7248\u672C\u5DF2\u7ECF\u517C\u5BB9\u6240\u6709\u573A\u666F\u4E0B <code>info.file.originFileObj</code> \u83B7\u53D6\u539F File \u5199\u6CD5\u3002\u4F60\u53EF\u4EE5\u63D0\u524D\u5207\u6362\u3002</p>
`,lastUpdated:1713329467684}},np={class:"markdown"},tp=Zt(`<p>\u6587\u4EF6\u9009\u62E9\u4E0A\u4F20\u548C\u62D6\u62FD\u4E0A\u4F20\u63A7\u4EF6\u3002</p><h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528"><span aria-hidden="true" class="anchor">#</span></a></h2><p>\u4E0A\u4F20\u662F\u5C06\u4FE1\u606F\uFF08\u7F51\u9875\u3001\u6587\u5B57\u3001\u56FE\u7247\u3001\u89C6\u9891\u7B49\uFF09\u901A\u8FC7\u7F51\u9875\u6216\u8005\u4E0A\u4F20\u5DE5\u5177\u53D1\u5E03\u5230\u8FDC\u7A0B\u670D\u52A1\u5668\u4E0A\u7684\u8FC7\u7A0B\u3002</p><ul><li>\u5F53\u9700\u8981\u4E0A\u4F20\u4E00\u4E2A\u6216\u4E00\u4E9B\u6587\u4EF6\u65F6\u3002</li><li>\u5F53\u9700\u8981\u5C55\u73B0\u4E0A\u4F20\u7684\u8FDB\u5EA6\u65F6\u3002</li><li>\u5F53\u9700\u8981\u4F7F\u7528\u62D6\u62FD\u4EA4\u4E92\u65F6\u3002</li></ul><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th><th></th></tr></thead><tbody><tr><td>accept</td><td>\u63A5\u53D7\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B, \u8BE6\u89C1 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept" target="_blank" rel="noopener noreferrer">input accept Attribute</a></td><td>string</td><td>\u65E0</td><td></td><td></td></tr><tr><td>action</td><td>\u4E0A\u4F20\u7684\u5730\u5740</td><td>string|(file) =&gt; <code>Promise</code></td><td>\u65E0</td><td></td><td></td></tr><tr><td>beforeUpload</td><td>\u4E0A\u4F20\u6587\u4EF6\u4E4B\u524D\u7684\u94A9\u5B50\uFF0C\u53C2\u6570\u4E3A\u4E0A\u4F20\u7684\u6587\u4EF6\uFF0C\u82E5\u8FD4\u56DE <code>false</code> \u5219\u505C\u6B62\u4E0A\u4F20\u3002\u652F\u6301\u8FD4\u56DE\u4E00\u4E2A Promise \u5BF9\u8C61\uFF0CPromise \u5BF9\u8C61 reject \u65F6\u5219\u505C\u6B62\u4E0A\u4F20\uFF0Cresolve \u65F6\u5F00\u59CB\u4E0A\u4F20\uFF08 resolve \u4F20\u5165 <code>File</code> \u6216 <code>Blob</code> \u5BF9\u8C61\u5219\u4E0A\u4F20 resolve \u4F20\u5165\u5BF9\u8C61\uFF09\u3002</td><td>(file, fileList) =&gt; <code>boolean</code> | <code>Promise</code></td><td>\u65E0</td><td></td><td></td></tr><tr><td>customRequest</td><td>\u901A\u8FC7\u8986\u76D6\u9ED8\u8BA4\u7684\u4E0A\u4F20\u884C\u4E3A\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u81EA\u5DF1\u7684\u4E0A\u4F20\u5B9E\u73B0</td><td>Function</td><td>\u65E0</td><td></td><td></td></tr><tr><td>data</td><td>\u4E0A\u4F20\u6240\u9700\u53C2\u6570\u6216\u8FD4\u56DE\u4E0A\u4F20\u53C2\u6570\u7684\u65B9\u6CD5</td><td>object|(file) =&gt; object</td><td>\u65E0</td><td></td><td></td></tr><tr><td>directory</td><td>\u652F\u6301\u4E0A\u4F20\u6587\u4EF6\u5939\uFF08<a href="https://caniuse.com/#feat=input-file-directory" target="_blank" rel="noopener noreferrer">caniuse</a>\uFF09</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>directory</td><td>\u652F\u6301\u4E0A\u4F20\u6587\u4EF6\u5939\uFF08<a href="https://caniuse.com/#feat=input-file-directory" target="_blank" rel="noopener noreferrer">caniuse</a>\uFF09</td><td>boolean</td><td>false</td><td>3.0</td><td></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>downloadIcon</td><td>\u81EA\u5B9A\u4E49\u4E0B\u8F7D icon</td><td>v-slot:iconRender=&quot;{file: UploadFile}&quot;</td><td>-</td><td>3.0</td><td></td></tr><tr><td>fileList</td><td>\u5DF2\u7ECF\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868\uFF08\u53D7\u63A7\uFF09</td><td>object[]</td><td>\u65E0</td><td></td><td></td></tr><tr><td>headers</td><td>\u8BBE\u7F6E\u4E0A\u4F20\u7684\u8BF7\u6C42\u5934\u90E8\uFF0CIE10 \u4EE5\u4E0A\u6709\u6548</td><td>object</td><td>\u65E0</td><td></td><td></td></tr><tr><td>iconRender</td><td>\u81EA\u5B9A\u4E49\u663E\u793A icon</td><td>v-slot:iconRender=&quot;{file: UploadFile, listType?: UploadListType}&quot;</td><td>-</td><td>3.0</td><td></td></tr><tr><td>isImageUrl</td><td>\u81EA\u5B9A\u4E49\u7F29\u7565\u56FE\u662F\u5426\u4F7F\u7528 &lt;img /&gt; \u6807\u7B7E\u8FDB\u884C\u663E\u793A</td><td>(file: UploadFile) =&gt; boolean</td><td>-</td><td>3.0</td><td></td></tr><tr><td>itemRender</td><td>\u81EA\u5B9A\u4E49\u4E0A\u4F20\u5217\u8868\u9879</td><td>v-slot:itemRender=&quot;{originNode: ReactElement, file: UploadFile, fileList: object[], actions: { download: function, preview: function, remove: function }&quot;</td><td>-</td><td>3.0</td><td></td></tr><tr><td>listType</td><td>\u4E0A\u4F20\u5217\u8868\u7684\u5185\u5EFA\u6837\u5F0F\uFF0C\u652F\u6301\u4E09\u79CD\u57FA\u672C\u6837\u5F0F <code>text</code>, <code>picture</code> \u548C <code>picture-card</code></td><td>string</td><td><code>text</code></td><td></td><td></td></tr><tr><td>maxCount</td><td>\u9650\u5236\u4E0A\u4F20\u6570\u91CF\u3002\u5F53\u4E3A 1 \u65F6\uFF0C\u59CB\u7EC8\u7528\u6700\u65B0\u4E0A\u4F20\u7684\u6587\u4EF6\u4EE3\u66FF\u5F53\u524D\u6587\u4EF6</td><td>number</td><td>-</td><td>3.0</td><td></td></tr><tr><td>method</td><td>\u4E0A\u4F20\u8BF7\u6C42\u7684 http method</td><td>string</td><td><code>post</code></td><td>1.5.0</td><td></td></tr><tr><td>multiple</td><td>\u662F\u5426\u652F\u6301\u591A\u9009\u6587\u4EF6\uFF0C<code>ie10+</code> \u652F\u6301\u3002\u5F00\u542F\u540E\u6309\u4F4F ctrl \u53EF\u9009\u62E9\u591A\u4E2A\u6587\u4EF6\u3002</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>name</td><td>\u53D1\u5230\u540E\u53F0\u7684\u6587\u4EF6\u53C2\u6570\u540D</td><td>string</td><td><code>file</code></td><td></td><td></td></tr><tr><td>openFileDialogOnClick</td><td>\u70B9\u51FB\u6253\u5F00\u6587\u4EF6\u5BF9\u8BDD\u6846</td><td>boolean</td><td>true</td><td></td><td></td></tr><tr><td>openFileDialogOnClick</td><td>\u70B9\u51FB\u6253\u5F00\u6587\u4EF6\u5BF9\u8BDD\u6846</td><td>boolean</td><td>true</td><td>3.0</td><td></td></tr><tr><td>previewFile</td><td>\u81EA\u5B9A\u4E49\u6587\u4EF6\u9884\u89C8\u903B\u8F91</td><td>(file: File | Blob) =&gt; Promise&lt;dataURL: string&gt;</td><td>\u65E0</td><td>1.5.0</td><td></td></tr><tr><td>previewIcon</td><td>\u81EA\u5B9A\u4E49\u9884\u89C8 icon</td><td>v-slot:iconRender=&quot;{file: UploadFile}&quot;</td><td>-</td><td>3.0</td><td></td></tr><tr><td>progress</td><td>\u81EA\u5B9A\u4E49\u8FDB\u5EA6\u6761\u6837\u5F0F</td><td><a href="/components/progress/#API">ProgressProps</a>\uFF08\u4EC5\u652F\u6301 <code>type=&quot;line&quot;</code>\uFF09</td><td>{ strokeWidth: 2, showInfo: false }</td><td>3.0</td><td></td></tr><tr><td>removeIcon</td><td>\u81EA\u5B9A\u4E49\u5220\u9664 icon</td><td>v-slot:iconRender=&quot;{file: UploadFile}&quot;</td><td>-</td><td>3.0</td><td></td></tr><tr><td>showUploadList</td><td>\u662F\u5426\u5C55\u793A uploadList, \u53EF\u8BBE\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u7528\u4E8E\u5355\u72EC\u8BBE\u5B9A showPreviewIcon, showRemoveIcon \u548C showDownloadIcon</td><td>Boolean or { showPreviewIcon?: boolean, showRemoveIcon?: boolean, showDownloadIcon?: boolean }</td><td>true</td><td>showDownloadIcon(3.0)</td><td></td></tr><tr><td>supportServerRender</td><td>\u670D\u52A1\u7AEF\u6E32\u67D3\u65F6\u9700\u8981\u6253\u5F00\u8FD9\u4E2A</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>withCredentials</td><td>\u4E0A\u4F20\u8BF7\u6C42\u65F6\u662F\u5426\u643A\u5E26 cookie</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>cropper</td><td>\u88C1\u5207\u529F\u80FD</td><td>boolean</td><td>false</td><td></td><td>4.30.0</td></tr><tr><td>cropperProps</td><td>\u88C1\u5207\u529F\u80FD\u7EC4\u4EF6\u7684\u914D\u7F6E</td><td>object</td><td>-</td><td></td><td>4.30.0</td></tr></tbody></table><h3 id="\u4E8B\u4EF6">\u4E8B\u4EF6 <a class="header-anchor" href="#\u4E8B\u4EF6"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u7248\u672C</th><th></th></tr></thead><tbody><tr><td>change</td><td>\u4E0A\u4F20\u6587\u4EF6\u6539\u53D8\u65F6\u7684\u72B6\u6001\uFF0C\u8BE6\u89C1 <a href="#change">change</a></td><td>Function</td><td>\u65E0</td><td></td></tr><tr><td>download</td><td>\u70B9\u51FB\u4E0B\u8F7D\u6587\u4EF6\u65F6\u7684\u56DE\u8C03\uFF0C\u5982\u679C\u6CA1\u6709\u6307\u5B9A\uFF0C\u5219\u9ED8\u8BA4\u8DF3\u8F6C\u5230\u6587\u4EF6 url \u5BF9\u5E94\u7684\u6807\u7B7E\u9875\u3002</td><td>Function(file): void</td><td>\u8DF3\u8F6C\u65B0\u6807\u7B7E\u9875</td><td>1.5.0</td></tr><tr><td>drop</td><td>\u5F53\u6587\u4EF6\u88AB\u62D6\u5165\u4E0A\u4F20\u533A\u57DF\u65F6\u6267\u884C\u7684\u56DE\u8C03\u529F\u80FD</td><td>(event: DragEvent) =&gt; void</td><td>-</td><td>3.0</td></tr><tr><td>preview</td><td>\u70B9\u51FB\u6587\u4EF6\u94FE\u63A5\u6216\u9884\u89C8\u56FE\u6807\u65F6\u7684\u56DE\u8C03</td><td>Function(file)</td><td>\u65E0</td><td></td></tr><tr><td>reject</td><td>\u62D6\u62FD\u6587\u4EF6\u4E0D\u7B26\u5408 accept \u7C7B\u578B\u65F6\u7684\u56DE\u8C03</td><td>Function(fileList)</td><td>\u65E0</td><td></td></tr><tr><td>remove</td><td>\u70B9\u51FB\u79FB\u9664\u6587\u4EF6\u65F6\u7684\u56DE\u8C03\uFF0C\u8FD4\u56DE\u503C\u4E3A false \u65F6\u4E0D\u79FB\u9664\u3002\u652F\u6301\u8FD4\u56DE\u4E00\u4E2A Promise \u5BF9\u8C61\uFF0CPromise \u5BF9\u8C61 resolve(false) \u6216 reject \u65F6\u4E0D\u79FB\u9664</td><td>function(file): boolean | Promise</td><td>-</td><td>3.0</td></tr></tbody></table><h3 id="UploadFile">UploadFile <a class="header-anchor" href="#UploadFile"><span aria-hidden="true" class="anchor">#</span></a></h3><p>\u7EE7\u627F\u81EA File\uFF0C\u9644\u5E26\u989D\u5916\u5C5E\u6027\u7528\u4E8E\u6E32\u67D3\u3002</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>name</td><td>\u6587\u4EF6\u540D</td><td>string</td><td>-</td></tr><tr><td>percent</td><td>\u4E0A\u4F20\u8FDB\u5EA6</td><td>number</td><td>-</td></tr><tr><td>status</td><td>\u4E0A\u4F20\u72B6\u6001\uFF0C\u4E0D\u540C\u72B6\u6001\u5C55\u793A\u989C\u8272\u4E5F\u4F1A\u6709\u6240\u4E0D\u540C</td><td><code>error</code> | <code>success</code> | <code>done</code> | <code>uploading</code> | <code>removed</code></td><td>-</td></tr><tr><td>thumbUrl</td><td>\u7F29\u7565\u56FE\u5730\u5740</td><td>string</td><td>-</td></tr><tr><td>uid</td><td>\u552F\u4E00\u6807\u8BC6\u7B26\uFF0C\u4E0D\u8BBE\u7F6E\u65F6\u4F1A\u81EA\u52A8\u751F\u6210</td><td>string</td><td>-</td></tr><tr><td>url</td><td>\u4E0B\u8F7D\u5730\u5740</td><td>string</td><td>-</td></tr></tbody></table><h3 id="change">change <a class="header-anchor" href="#change"><span aria-hidden="true" class="anchor">#</span></a></h3><blockquote><p>\u4E0A\u4F20\u4E2D\u3001\u5B8C\u6210\u3001\u5931\u8D25\u90FD\u4F1A\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570\u3002</p></blockquote><p>\u6587\u4EF6\u72B6\u6001\u6539\u53D8\u7684\u56DE\u8C03\uFF0C\u8FD4\u56DE\u4E3A\uFF1A</p><pre class="language-jsx"><code><span class="token punctuation">{</span>
  file<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  fileList<span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">/* ... */</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
  event<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><ol><li><p><code>file</code> \u5F53\u524D\u64CD\u4F5C\u7684\u6587\u4EF6\u5BF9\u8C61\u3002</p><pre class="language-jsx"><code><span class="token punctuation">{</span>
   uid<span class="token operator">:</span> <span class="token string">&#39;uid&#39;</span><span class="token punctuation">,</span>      <span class="token comment">// \u6587\u4EF6\u552F\u4E00\u6807\u8BC6\uFF0C\u5EFA\u8BAE\u8BBE\u7F6E\u4E3A\u8D1F\u6570\uFF0C\u9632\u6B62\u548C\u5185\u90E8\u4EA7\u751F\u7684 id \u51B2\u7A81</span>
   name<span class="token operator">:</span> <span class="token string">&#39;xx.png&#39;</span><span class="token punctuation">,</span>   <span class="token comment">// \u6587\u4EF6\u540D</span>
   status<span class="token operator">:</span> <span class="token string">&#39;done&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u72B6\u6001\u6709\uFF1Auploading done error removed</span>
   response<span class="token operator">:</span> <span class="token string">&#39;{&quot;status&quot;: &quot;success&quot;}&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u670D\u52A1\u7AEF\u54CD\u5E94\u5185\u5BB9</span>
   linkProps<span class="token operator">:</span> <span class="token string">&#39;{&quot;download&quot;: &quot;image&quot;}&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u4E0B\u8F7D\u94FE\u63A5\u989D\u5916\u7684 HTML \u5C5E\u6027</span>
   xhr<span class="token operator">:</span> <span class="token string">&#39;XMLHttpRequest{ ... }&#39;</span><span class="token punctuation">,</span> <span class="token comment">// XMLHttpRequest Header</span>
<span class="token punctuation">}</span>
</code></pre></li><li><p><code>fileList</code> \u5F53\u524D\u7684\u6587\u4EF6\u5217\u8868\u3002</p></li><li><p><code>event</code> \u4E0A\u4F20\u4E2D\u7684\u670D\u52A1\u7AEF\u54CD\u5E94\u5185\u5BB9\uFF0C\u5305\u542B\u4E86\u4E0A\u4F20\u8FDB\u5EA6\u7B49\u4FE1\u606F\uFF0C\u9AD8\u7EA7\u6D4F\u89C8\u5668\u652F\u6301\u3002</p></li></ol><h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="\u670D\u52A1\u7AEF\u5982\u4F55\u5B9E\u73B0\uFF1F">\u670D\u52A1\u7AEF\u5982\u4F55\u5B9E\u73B0\uFF1F <a class="header-anchor" href="#\u670D\u52A1\u7AEF\u5982\u4F55\u5B9E\u73B0\uFF1F"><span aria-hidden="true" class="anchor">#</span></a></h3><ul><li>\u670D\u52A1\u7AEF\u4E0A\u4F20\u63A5\u53E3\u5B9E\u73B0\u53EF\u4EE5\u53C2\u8003 <a href="https://github.com/blueimp/jQuery-File-Upload/wiki#server-side" target="_blank" rel="noopener noreferrer">jQuery-File-Upload</a>\u3002</li><li>\u5982\u679C\u8981\u505A\u672C\u5730 mock \u53EF\u4EE5\u53C2\u8003\u8FD9\u4E2A <a href="https://github.com/react-component/upload/blob/master/server.js" target="_blank" rel="noopener noreferrer">express \u7684\u4F8B\u5B50</a>\u3002</li></ul><h3 id="\u5982\u4F55\u663E\u793A\u4E0B\u8F7D\u94FE\u63A5\uFF1F">\u5982\u4F55\u663E\u793A\u4E0B\u8F7D\u94FE\u63A5\uFF1F <a class="header-anchor" href="#\u5982\u4F55\u663E\u793A\u4E0B\u8F7D\u94FE\u63A5\uFF1F"><span aria-hidden="true" class="anchor">#</span></a></h3><p>\u8BF7\u4F7F\u7528 fileList \u5C5E\u6027\u8BBE\u7F6E\u6570\u7EC4\u9879\u7684 url \u5C5E\u6027\u8FDB\u884C\u5C55\u793A\u63A7\u5236\u3002</p><h3 id="customRequest-\u600E\u4E48\u4F7F\u7528\uFF1F"><code>customRequest</code> \u600E\u4E48\u4F7F\u7528\uFF1F <a class="header-anchor" href="#customRequest-\u600E\u4E48\u4F7F\u7528\uFF1F"><span aria-hidden="true" class="anchor">#</span></a></h3><p>\u8BF7\u53C2\u8003 <a href="https://github.com/react-component/upload#customrequest" target="_blank" rel="noopener noreferrer">https://github.com/react-component/upload#customrequest</a>\u3002</p><h3 id="\u4E3A\u4F55-fileList-\u53D7\u63A7\u65F6\uFF0C\u4E0A\u4F20\u4E0D\u5728\u5217\u8868\u4E2D\u7684\u6587\u4EF6\u4E0D\u4F1A\u89E6\u53D1-onChange-\u540E\u7EED\u7684-status-\u66F4\u65B0\u4E8B\u4EF6\uFF1F">\u4E3A\u4F55 <code>fileList</code> \u53D7\u63A7\u65F6\uFF0C\u4E0A\u4F20\u4E0D\u5728\u5217\u8868\u4E2D\u7684\u6587\u4EF6\u4E0D\u4F1A\u89E6\u53D1 <code>onChange</code> \u540E\u7EED\u7684 <code>status</code> \u66F4\u65B0\u4E8B\u4EF6\uFF1F <a class="header-anchor" href="#\u4E3A\u4F55-fileList-\u53D7\u63A7\u65F6\uFF0C\u4E0A\u4F20\u4E0D\u5728\u5217\u8868\u4E2D\u7684\u6587\u4EF6\u4E0D\u4F1A\u89E6\u53D1-onChange-\u540E\u7EED\u7684-status-\u66F4\u65B0\u4E8B\u4EF6\uFF1F"><span aria-hidden="true" class="anchor">#</span></a></h3><p><code>onChange</code> \u4E8B\u4EF6\u4EC5\u4F1A\u4F5C\u7528\u4E8E\u5728\u5217\u8868\u4E2D\u7684\u6587\u4EF6\uFF0C\u56E0\u800C <code>fileList</code> \u4E0D\u5B58\u5728\u5BF9\u5E94\u6587\u4EF6\u65F6\u540E\u7EED\u4E8B\u4EF6\u4F1A\u88AB\u5FFD\u7565\u3002\u8BF7\u6CE8\u610F\uFF0C\u5728 <code>3.0.0-beta.10</code> \u7248\u672C\u4E4B\u524D\u53D7\u63A7\u72B6\u6001\u5B58\u5728 bug \u5BFC\u81F4\u4E0D\u5728\u5217\u8868\u4E2D\u7684\u6587\u4EF6\u4E5F\u4F1A\u89E6\u53D1\u3002</p><h3 id="onChange-\u4E3A\u4EC0\u4E48\u6709\u65F6\u5019\u8FD4\u56DE-File-\u6709\u65F6\u5019\u8FD4\u56DE-originFileObj-File-\uFF1F"><code>onChange</code> \u4E3A\u4EC0\u4E48\u6709\u65F6\u5019\u8FD4\u56DE File \u6709\u65F6\u5019\u8FD4\u56DE { originFileObj: File }\uFF1F <a class="header-anchor" href="#onChange-\u4E3A\u4EC0\u4E48\u6709\u65F6\u5019\u8FD4\u56DE-File-\u6709\u65F6\u5019\u8FD4\u56DE-originFileObj-File-\uFF1F"><span aria-hidden="true" class="anchor">#</span></a></h3><p>\u5386\u53F2\u539F\u56E0\uFF0C\u5728 <code>beforeUpload</code> \u8FD4\u56DE <code>false</code> \u65F6\uFF0C\u4F1A\u8FD4\u56DE File \u5BF9\u8C61\u3002\u5728\u4E0B\u4E2A\u5927\u7248\u672C\u6211\u4EEC\u4F1A\u7EDF\u4E00\u8FD4\u56DE <code>{ originFileObj: File }</code> \u5BF9\u8C61\u3002\u5F53\u524D\u7248\u672C\u5DF2\u7ECF\u517C\u5BB9\u6240\u6709\u573A\u666F\u4E0B <code>info.file.originFileObj</code> \u83B7\u53D6\u539F File \u5199\u6CD5\u3002\u4F60\u53EF\u4EE5\u63D0\u524D\u5207\u6362\u3002</p>`,27),ap=[tp];function sp(a,s,o,e,c,p){return y(),Cn("article",np,ap)}var op=G($c,[["render",sp]]);const ep={pageData:{title:"Upload",description:"",frontmatter:{category:"Components",type:"Data Entry",title:"Upload",cover:"https://gw.alipayobjects.com/zos/alicdn/QaeBt_ZMg/Upload.svg"},headers:[{level:2,title:"When To Use",slug:"When-To-Use",content:"Uploading is the process of publishing information (web pages, text, pictures, video, etc.) to a remote server via a web page or upload tool."},{level:2,title:"API",slug:"API",content:""},{level:3,title:"events",slug:"events",content:""},{level:3,title:"UploadFile",slug:"UploadFile",content:"Extends File with additional props."},{level:3,title:"change",slug:"change",content:""},{level:2,title:"FAQ",slug:"FAQ",content:"How do I implement upload server side?"},{level:3,title:"How do I implement upload server side?",slug:"How-do-I-implement-upload-server-side",content:""},{level:3,title:"I want to display download links.",slug:"I-want-to-display-download-links",content:"Please set property `url` of each item in `fileList` to control content of link."},{level:3,title:"How to use customRequest?",slug:"How-to-use-customRequest",content:"See <https://github.com/react-component/upload#customrequest>."},{level:3,title:"Why will the fileList that's in control not trigger change status update when the file is not in the list?",slug:"Why-will-the-fileList-that-s-in-control-not-trigger-change-status-update-when-the-file-is-not-in-the-list",content:"`change` only trigger when file in the list, it will ignore left events when removed from the list. Please note that there exist bug which makes event still trigger even the file is not in the list before `3.0.0-beta.10`."},{level:3,title:"Why does change sometimes return File object and other times return { originFileObj: File }?",slug:"Why-does-change-sometimes-return-File-object-and-other-times-return-originFileObj-File",content:"For compatible case, we return File object when `beforeUpload` return `false`. It will merge to `{ originFileObj: File }` in next major version. Current version is compatible to get origin file by `info.file.originFileObj`. You can change this before major release."}],relativePath:"components/upload/index.en-US.md",content:`
Upload file by selecting or dragging.

## When To Use

Uploading is the process of publishing information (web pages, text, pictures, video, etc.) to a remote server via a web page or upload tool.

- When you need to upload one or more files.
- When you need to show the process of uploading.
- When you need to upload files by dragging and dropping.

## API

| Property | Description | Type | Default | Version |  |
| --- | --- | --- | --- | --- | --- |
| accept | File types that can be accepted. See [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) | string | - |  |  |
| action | Uploading URL | string\\|(file) =&gt; \`Promise\` | - |  |  |
| beforeUpload | Hook function which will be executed before uploading. Uploading will be stopped with \`false\` or a rejected Promise returned. | (file, fileList) =&gt; \`boolean\` \\| \`Promise\` | - |  |
| customRequest | override for the default xhr behavior allowing for additional customization and ability to implement your own XMLHttpRequest | Function | - |  |  |
| data | Uploading params or function which can return uploading params. | object\\|function(file) | - |  |  |
| directory | support upload whole directory ([caniuse](https://caniuse.com/#feat=input-file-directory)) | boolean | false |  |  |
| directory | Support upload whole directory\uFF08[caniuse](https://caniuse.com/#feat=input-file-directory)\uFF09 | boolean | false | 3.0 |  |
| disabled | disable upload button | boolean | false |  |  |
| downloadIcon | custom download icon | v-slot:iconRender=&quot;{file: UploadFile}&quot; | - | 3.0 |  |
| fileList | List of files that have been uploaded (controlled). Here is a common issue [#2423](https://github.com/ant-design/ant-design/issues/2423) when using it | object\\[] | - |  |  |
| headers | Set request headers, valid above IE10. | object | - |  |  |
| iconRender | Custom show icon | v-slot:iconRender=&quot;{file: UploadFile, listType?: UploadListType}&quot; | - | 3.0 |  |
| isImageUrl | Customize if render &amp;lt;img /&gt; in thumbnail | (file: UploadFile) =&gt; boolean | - | 3.0 |  |
| itemRender | Custom item of uploadList | v-slot:itemRender=&quot;{originNode: ReactElement, file: UploadFile, fileList: object\\[], actions: { download: function, preview: function, remove: function }&quot; | - | 3.0 |  |
| listType | Built-in stylesheets, support for three types: \`text\`, \`picture\` or \`picture-card\` | string | \`text\` |  |  |
| maxCount | Limit the number of uploaded files. Will replace current one when \`maxCount\` is \`1\` | number | - | 3.0 |  |
| method | http method of upload request | string | \`post\` | 1.5.0 |  |
| multiple | Whether to support selected multiple file. \`IE10+\` supported. You can select multiple files with CTRL holding down while multiple is set to be true | boolean | false |  |  |
| name | The name of uploading file | string | \`file\` |  |  |
| openFileDialogOnClick | click open file dialog | boolean | true |  |  |
| openFileDialogOnClick | Click open file dialog | boolean | true | 3.0 |  |
| previewFile | Customize preview file logic | (file: File \\| Blob) =&gt; Promise&amp;lt;dataURL: string&gt; | - | 1.5.0 |  |
| previewIcon | custom preview icon | v-slot:iconRender=&quot;{file: UploadFile}&quot; | - | 3.0 |  |
| progress | Custom progress bar | [ProgressProps](/components/progress/#API) (support \`type=&quot;line&quot;\` only) | { strokeWidth: 2, showInfo: false } | 3.0 |  |
| removeIcon | custom remove icon | v-slot:iconRender=&quot;{file: UploadFile}&quot; | - | 3.0 |  |
| showUploadList | Whether to show default upload list, could be an object to specify \`showPreviewIcon\`, \`showRemoveIcon\` and \`showDownloadIcon\` individually | Boolean or { showPreviewIcon?: boolean, showRemoveIcon?: boolean, showDownloadIcon?: boolean } | true | showDownloadIcon(3.0) |  |
| supportServerRender | Need to be turned on while the server side is rendering. | boolean | false |  |  |
| withCredentials | ajax upload with cookie sent | boolean | false |  |  |

### events

| Events Name | Description | Arguments | Version |  |
| --- | --- | --- | --- | --- |
| change | A callback function, can be executed when uploading state is changing. See [change](#change) | Function | - |  |
| download | Click the method to download the file, pass the method to perform the method logic, do not pass the default jump to the new TAB. | Function(file): void | Jump to new TAB | 1.5.0 |
| drop | A callback function executed when files are dragged and dropped into upload area | (event: DragEvent) =&gt; void | - | 3.0 |
| preview | A callback function, will be executed when file link or preview icon is clicked. | Function(file) | - |  |
| reject | A callback function, will be executed when drop files is not accept. | Function(fileList) | - |  |
| remove \xA0 | A callback function, will be executed when removing file button is clicked, remove event will be prevented when return value is false or a Promise which resolve(false) or reject | function(file): boolean \\| Promise | - \xA0 | 3.0 |

### UploadFile

Extends File with additional props.

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| name | File name | string | - |
| percent | Upload progress percent | number | - |
| status | Upload status. Show different style when configured | \`error\` \\| \`success\` \\| \`done\` \\| \`uploading\` \\| \`removed\` | - |
| thumbUrl | Thumb image url | string | - |
| uid | unique id. Will auto generate when not provided | string | - |
| url | Download url | string | - |

### change

&gt; The function will be called when uploading is in progress, completed or failed

When uploading state change, it returns:

\`\`\`jsx
{
  file: { /* ... */ },
  fileList: [ /* ... */ ],
  event: { /* ... */ },
}
\`\`\`

1. \`file\` File object for the current operation.

   \`\`\`jsx
   {
      uid: &#39;uid&#39;,   // unique identifier, negative is recommend, to prevent interference with internal generated id
      name: &#39;xx.png&#39;,   // file name
      status: &#39;done&#39;, // options\uFF1Auploading, done, error, removed
      response: &#39;{&quot;status&quot;: &quot;success&quot;}&#39;, // response from server
      linkProps: &#39;{&quot;download&quot;: &quot;image&quot;}&#39;, // additional html props of file link
      xhr: &#39;XMLHttpRequest{ ... }&#39;, // XMLHttpRequest Header
   }
   \`\`\`

2. \`fileList\` current list of files

3. \`event\` response from server, including uploading progress, supported by advanced browsers.

## FAQ

### How do I implement upload server side?

- You can consult [jQuery-File-Upload](https://github.com/blueimp/jQuery-File-Upload/wiki#server-side) about how to implement server side upload interface.
- There is a mock example of [express](https://github.com/react-component/upload/blob/master/server.js) in rc-upload.

### I want to display download links.

Please set property \`url\` of each item in \`fileList\` to control content of link.

### How to use \`customRequest\`?

See &lt;https://github.com/react-component/upload#customrequest&gt;.

### Why will the \`fileList\` that&#39;s in control not trigger \`change\` \`status\` update when the file is not in the list?

\`change\` only trigger when file in the list, it will ignore left events when removed from the list. Please note that there exist bug which makes event still trigger even the file is not in the list before \`3.0.0-beta.10\`.

### Why does \`change\` sometimes return File object and other times return { originFileObj: File }?

For compatible case, we return File object when \`beforeUpload\` return \`false\`. It will merge to \`{ originFileObj: File }\` in next major version. Current version is compatible to get origin file by \`info.file.originFileObj\`. You can change this before major release.
`,html:`<p>Upload file by selecting or dragging.</p>
<h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Uploading is the process of publishing information (web pages, text, pictures, video, etc.) to a remote server via a web page or upload tool.</p>
<ul>
<li>When you need to upload one or more files.</li>
<li>When you need to show the process of uploading.</li>
<li>When you need to upload files by dragging and dropping.</li>
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
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>accept</td>
<td>File types that can be accepted. See <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept" target="_blank" rel="noopener noreferrer">input accept Attribute</a></td>
<td>string</td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>action</td>
<td>Uploading URL</td>
<td>string|(file) =&gt; <code>Promise</code></td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>beforeUpload</td>
<td>Hook function which will be executed before uploading. Uploading will be stopped with <code>false</code> or a rejected Promise returned.</td>
<td>(file, fileList) =&gt; <code>boolean</code> | <code>Promise</code></td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>customRequest</td>
<td>override for the default xhr behavior allowing for additional customization and ability to implement your own XMLHttpRequest</td>
<td>Function</td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>data</td>
<td>Uploading params or function which can return uploading params.</td>
<td>object|function(file)</td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>directory</td>
<td>support upload whole directory (<a href="https://caniuse.com/#feat=input-file-directory" target="_blank" rel="noopener noreferrer">caniuse</a>)</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>directory</td>
<td>Support upload whole directory\uFF08<a href="https://caniuse.com/#feat=input-file-directory" target="_blank" rel="noopener noreferrer">caniuse</a>\uFF09</td>
<td>boolean</td>
<td>false</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>disable upload button</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>downloadIcon</td>
<td>custom download icon</td>
<td>v-slot:iconRender=&quot;{file: UploadFile}&quot;</td>
<td>-</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>fileList</td>
<td>List of files that have been uploaded (controlled). Here is a common issue <a href="https://github.com/ant-design/ant-design/issues/2423" target="_blank" rel="noopener noreferrer">#2423</a> when using it</td>
<td>object[]</td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>headers</td>
<td>Set request headers, valid above IE10.</td>
<td>object</td>
<td>-</td>
<td></td>
<td></td>
</tr>
<tr>
<td>iconRender</td>
<td>Custom show icon</td>
<td>v-slot:iconRender=&quot;{file: UploadFile, listType?: UploadListType}&quot;</td>
<td>-</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>isImageUrl</td>
<td>Customize if render &lt;img /&gt; in thumbnail</td>
<td>(file: UploadFile) =&gt; boolean</td>
<td>-</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>itemRender</td>
<td>Custom item of uploadList</td>
<td>v-slot:itemRender=&quot;{originNode: ReactElement, file: UploadFile, fileList: object[], actions: { download: function, preview: function, remove: function }&quot;</td>
<td>-</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>listType</td>
<td>Built-in stylesheets, support for three types: <code>text</code>, <code>picture</code> or <code>picture-card</code></td>
<td>string</td>
<td><code>text</code></td>
<td></td>
<td></td>
</tr>
<tr>
<td>maxCount</td>
<td>Limit the number of uploaded files. Will replace current one when <code>maxCount</code> is <code>1</code></td>
<td>number</td>
<td>-</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>method</td>
<td>http method of upload request</td>
<td>string</td>
<td><code>post</code></td>
<td>1.5.0</td>
<td></td>
</tr>
<tr>
<td>multiple</td>
<td>Whether to support selected multiple file. <code>IE10+</code> supported. You can select multiple files with CTRL holding down while multiple is set to be true</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>name</td>
<td>The name of uploading file</td>
<td>string</td>
<td><code>file</code></td>
<td></td>
<td></td>
</tr>
<tr>
<td>openFileDialogOnClick</td>
<td>click open file dialog</td>
<td>boolean</td>
<td>true</td>
<td></td>
<td></td>
</tr>
<tr>
<td>openFileDialogOnClick</td>
<td>Click open file dialog</td>
<td>boolean</td>
<td>true</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>previewFile</td>
<td>Customize preview file logic</td>
<td>(file: File | Blob) =&gt; Promise&lt;dataURL: string&gt;</td>
<td>-</td>
<td>1.5.0</td>
<td></td>
</tr>
<tr>
<td>previewIcon</td>
<td>custom preview icon</td>
<td>v-slot:iconRender=&quot;{file: UploadFile}&quot;</td>
<td>-</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>progress</td>
<td>Custom progress bar</td>
<td><a href="/components/progress/#API">ProgressProps</a> (support <code>type=&quot;line&quot;</code> only)</td>
<td>{ strokeWidth: 2, showInfo: false }</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>removeIcon</td>
<td>custom remove icon</td>
<td>v-slot:iconRender=&quot;{file: UploadFile}&quot;</td>
<td>-</td>
<td>3.0</td>
<td></td>
</tr>
<tr>
<td>showUploadList</td>
<td>Whether to show default upload list, could be an object to specify <code>showPreviewIcon</code>, <code>showRemoveIcon</code> and <code>showDownloadIcon</code> individually</td>
<td>Boolean or { showPreviewIcon?: boolean, showRemoveIcon?: boolean, showDownloadIcon?: boolean }</td>
<td>true</td>
<td>showDownloadIcon(3.0)</td>
<td></td>
</tr>
<tr>
<td>supportServerRender</td>
<td>Need to be turned on while the server side is rendering.</td>
<td>boolean</td>
<td>false</td>
<td></td>
<td></td>
</tr>
<tr>
<td>withCredentials</td>
<td>ajax upload with cookie sent</td>
<td>boolean</td>
<td>false</td>
<td></td>
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
<td>change</td>
<td>A callback function, can be executed when uploading state is changing. See <a href="#change">change</a></td>
<td>Function</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>download</td>
<td>Click the method to download the file, pass the method to perform the method logic, do not pass the default jump to the new TAB.</td>
<td>Function(file): void</td>
<td>Jump to new TAB</td>
<td>1.5.0</td>
</tr>
<tr>
<td>drop</td>
<td>A callback function executed when files are dragged and dropped into upload area</td>
<td>(event: DragEvent) =&gt; void</td>
<td>-</td>
<td>3.0</td>
</tr>
<tr>
<td>preview</td>
<td>A callback function, will be executed when file link or preview icon is clicked.</td>
<td>Function(file)</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>reject</td>
<td>A callback function, will be executed when drop files is not accept.</td>
<td>Function(fileList)</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>remove</td>
<td>A callback function, will be executed when removing file button is clicked, remove event will be prevented when return value is false or a Promise which resolve(false) or reject</td>
<td>function(file): boolean | Promise</td>
<td>-</td>
<td>3.0</td>
</tr>
</tbody>
</table>
<h3 id="UploadFile">UploadFile <a class="header-anchor" href="#UploadFile">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>Extends File with additional props.</p>
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
<td>name</td>
<td>File name</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>percent</td>
<td>Upload progress percent</td>
<td>number</td>
<td>-</td>
</tr>
<tr>
<td>status</td>
<td>Upload status. Show different style when configured</td>
<td><code>error</code> | <code>success</code> | <code>done</code> | <code>uploading</code> | <code>removed</code></td>
<td>-</td>
</tr>
<tr>
<td>thumbUrl</td>
<td>Thumb image url</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>uid</td>
<td>unique id. Will auto generate when not provided</td>
<td>string</td>
<td>-</td>
</tr>
<tr>
<td>url</td>
<td>Download url</td>
<td>string</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="change">change <a class="header-anchor" href="#change">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<blockquote>
<p>The function will be called when uploading is in progress, completed or failed</p>
</blockquote>
<p>When uploading state change, it returns:</p>
<pre class="language-jsx" v-pre><code><span class="token punctuation">{</span>
  file<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  fileList<span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">/* ... */</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
  event<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre>
<ol>
<li>
<p><code>file</code> File object for the current operation.</p>
<pre class="language-jsx" v-pre><code><span class="token punctuation">{</span>
   uid<span class="token operator">:</span> <span class="token string">'uid'</span><span class="token punctuation">,</span>   <span class="token comment">// unique identifier, negative is recommend, to prevent interference with internal generated id</span>
   name<span class="token operator">:</span> <span class="token string">'xx.png'</span><span class="token punctuation">,</span>   <span class="token comment">// file name</span>
   status<span class="token operator">:</span> <span class="token string">'done'</span><span class="token punctuation">,</span> <span class="token comment">// options\uFF1Auploading, done, error, removed</span>
   response<span class="token operator">:</span> <span class="token string">'{"status": "success"}'</span><span class="token punctuation">,</span> <span class="token comment">// response from server</span>
   linkProps<span class="token operator">:</span> <span class="token string">'{"download": "image"}'</span><span class="token punctuation">,</span> <span class="token comment">// additional html props of file link</span>
   xhr<span class="token operator">:</span> <span class="token string">'XMLHttpRequest{ ... }'</span><span class="token punctuation">,</span> <span class="token comment">// XMLHttpRequest Header</span>
<span class="token punctuation">}</span>
</code></pre>
</li>
<li>
<p><code>fileList</code> current list of files</p>
</li>
<li>
<p><code>event</code> response from server, including uploading progress, supported by advanced browsers.</p>
</li>
</ol>
<h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<h3 id="How-do-I-implement-upload-server-side">How do I implement upload server side? <a class="header-anchor" href="#How-do-I-implement-upload-server-side">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<ul>
<li>You can consult <a href="https://github.com/blueimp/jQuery-File-Upload/wiki#server-side" target="_blank" rel="noopener noreferrer">jQuery-File-Upload</a> about how to implement server side upload interface.</li>
<li>There is a mock example of <a href="https://github.com/react-component/upload/blob/master/server.js" target="_blank" rel="noopener noreferrer">express</a> in rc-upload.</li>
</ul>
<h3 id="I-want-to-display-download-links">I want to display download links. <a class="header-anchor" href="#I-want-to-display-download-links">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>Please set property <code>url</code> of each item in <code>fileList</code> to control content of link.</p>
<h3 id="How-to-use-customRequest">How to use <code>customRequest</code>? <a class="header-anchor" href="#How-to-use-customRequest">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>See <a href="https://github.com/react-component/upload#customrequest" target="_blank" rel="noopener noreferrer">https://github.com/react-component/upload#customrequest</a>.</p>
<h3 id="Why-will-the-fileList-that-s-in-control-not-trigger-change-status-update-when-the-file-is-not-in-the-list">Why will the <code>fileList</code> that's in control not trigger <code>change</code> <code>status</code> update when the file is not in the list? <a class="header-anchor" href="#Why-will-the-fileList-that-s-in-control-not-trigger-change-status-update-when-the-file-is-not-in-the-list">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p><code>change</code> only trigger when file in the list, it will ignore left events when removed from the list. Please note that there exist bug which makes event still trigger even the file is not in the list before <code>3.0.0-beta.10</code>.</p>
<h3 id="Why-does-change-sometimes-return-File-object-and-other-times-return-originFileObj-File">Why does <code>change</code> sometimes return File object and other times return { originFileObj: File }? <a class="header-anchor" href="#Why-does-change-sometimes-return-File-object-and-other-times-return-originFileObj-File">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>For compatible case, we return File object when <code>beforeUpload</code> return <code>false</code>. It will merge to <code>{ originFileObj: File }</code> in next major version. Current version is compatible to get origin file by <code>info.file.originFileObj</code>. You can change this before major release.</p>
`,lastUpdated:1701878243992}},cp={class:"markdown"},pp=Zt(`<p>Upload file by selecting or dragging.</p><h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use"><span aria-hidden="true" class="anchor">#</span></a></h2><p>Uploading is the process of publishing information (web pages, text, pictures, video, etc.) to a remote server via a web page or upload tool.</p><ul><li>When you need to upload one or more files.</li><li>When you need to show the process of uploading.</li><li>When you need to upload files by dragging and dropping.</li></ul><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th><th></th></tr></thead><tbody><tr><td>accept</td><td>File types that can be accepted. See <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept" target="_blank" rel="noopener noreferrer">input accept Attribute</a></td><td>string</td><td>-</td><td></td><td></td></tr><tr><td>action</td><td>Uploading URL</td><td>string|(file) =&gt; <code>Promise</code></td><td>-</td><td></td><td></td></tr><tr><td>beforeUpload</td><td>Hook function which will be executed before uploading. Uploading will be stopped with <code>false</code> or a rejected Promise returned.</td><td>(file, fileList) =&gt; <code>boolean</code> | <code>Promise</code></td><td>-</td><td></td><td></td></tr><tr><td>customRequest</td><td>override for the default xhr behavior allowing for additional customization and ability to implement your own XMLHttpRequest</td><td>Function</td><td>-</td><td></td><td></td></tr><tr><td>data</td><td>Uploading params or function which can return uploading params.</td><td>object|function(file)</td><td>-</td><td></td><td></td></tr><tr><td>directory</td><td>support upload whole directory (<a href="https://caniuse.com/#feat=input-file-directory" target="_blank" rel="noopener noreferrer">caniuse</a>)</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>directory</td><td>Support upload whole directory\uFF08<a href="https://caniuse.com/#feat=input-file-directory" target="_blank" rel="noopener noreferrer">caniuse</a>\uFF09</td><td>boolean</td><td>false</td><td>3.0</td><td></td></tr><tr><td>disabled</td><td>disable upload button</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>downloadIcon</td><td>custom download icon</td><td>v-slot:iconRender=&quot;{file: UploadFile}&quot;</td><td>-</td><td>3.0</td><td></td></tr><tr><td>fileList</td><td>List of files that have been uploaded (controlled). Here is a common issue <a href="https://github.com/ant-design/ant-design/issues/2423" target="_blank" rel="noopener noreferrer">#2423</a> when using it</td><td>object[]</td><td>-</td><td></td><td></td></tr><tr><td>headers</td><td>Set request headers, valid above IE10.</td><td>object</td><td>-</td><td></td><td></td></tr><tr><td>iconRender</td><td>Custom show icon</td><td>v-slot:iconRender=&quot;{file: UploadFile, listType?: UploadListType}&quot;</td><td>-</td><td>3.0</td><td></td></tr><tr><td>isImageUrl</td><td>Customize if render &lt;img /&gt; in thumbnail</td><td>(file: UploadFile) =&gt; boolean</td><td>-</td><td>3.0</td><td></td></tr><tr><td>itemRender</td><td>Custom item of uploadList</td><td>v-slot:itemRender=&quot;{originNode: ReactElement, file: UploadFile, fileList: object[], actions: { download: function, preview: function, remove: function }&quot;</td><td>-</td><td>3.0</td><td></td></tr><tr><td>listType</td><td>Built-in stylesheets, support for three types: <code>text</code>, <code>picture</code> or <code>picture-card</code></td><td>string</td><td><code>text</code></td><td></td><td></td></tr><tr><td>maxCount</td><td>Limit the number of uploaded files. Will replace current one when <code>maxCount</code> is <code>1</code></td><td>number</td><td>-</td><td>3.0</td><td></td></tr><tr><td>method</td><td>http method of upload request</td><td>string</td><td><code>post</code></td><td>1.5.0</td><td></td></tr><tr><td>multiple</td><td>Whether to support selected multiple file. <code>IE10+</code> supported. You can select multiple files with CTRL holding down while multiple is set to be true</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>name</td><td>The name of uploading file</td><td>string</td><td><code>file</code></td><td></td><td></td></tr><tr><td>openFileDialogOnClick</td><td>click open file dialog</td><td>boolean</td><td>true</td><td></td><td></td></tr><tr><td>openFileDialogOnClick</td><td>Click open file dialog</td><td>boolean</td><td>true</td><td>3.0</td><td></td></tr><tr><td>previewFile</td><td>Customize preview file logic</td><td>(file: File | Blob) =&gt; Promise&lt;dataURL: string&gt;</td><td>-</td><td>1.5.0</td><td></td></tr><tr><td>previewIcon</td><td>custom preview icon</td><td>v-slot:iconRender=&quot;{file: UploadFile}&quot;</td><td>-</td><td>3.0</td><td></td></tr><tr><td>progress</td><td>Custom progress bar</td><td><a href="/components/progress/#API">ProgressProps</a> (support <code>type=&quot;line&quot;</code> only)</td><td>{ strokeWidth: 2, showInfo: false }</td><td>3.0</td><td></td></tr><tr><td>removeIcon</td><td>custom remove icon</td><td>v-slot:iconRender=&quot;{file: UploadFile}&quot;</td><td>-</td><td>3.0</td><td></td></tr><tr><td>showUploadList</td><td>Whether to show default upload list, could be an object to specify <code>showPreviewIcon</code>, <code>showRemoveIcon</code> and <code>showDownloadIcon</code> individually</td><td>Boolean or { showPreviewIcon?: boolean, showRemoveIcon?: boolean, showDownloadIcon?: boolean }</td><td>true</td><td>showDownloadIcon(3.0)</td><td></td></tr><tr><td>supportServerRender</td><td>Need to be turned on while the server side is rendering.</td><td>boolean</td><td>false</td><td></td><td></td></tr><tr><td>withCredentials</td><td>ajax upload with cookie sent</td><td>boolean</td><td>false</td><td></td><td></td></tr></tbody></table><h3 id="events">events <a class="header-anchor" href="#events"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Events Name</th><th>Description</th><th>Arguments</th><th>Version</th><th></th></tr></thead><tbody><tr><td>change</td><td>A callback function, can be executed when uploading state is changing. See <a href="#change">change</a></td><td>Function</td><td>-</td><td></td></tr><tr><td>download</td><td>Click the method to download the file, pass the method to perform the method logic, do not pass the default jump to the new TAB.</td><td>Function(file): void</td><td>Jump to new TAB</td><td>1.5.0</td></tr><tr><td>drop</td><td>A callback function executed when files are dragged and dropped into upload area</td><td>(event: DragEvent) =&gt; void</td><td>-</td><td>3.0</td></tr><tr><td>preview</td><td>A callback function, will be executed when file link or preview icon is clicked.</td><td>Function(file)</td><td>-</td><td></td></tr><tr><td>reject</td><td>A callback function, will be executed when drop files is not accept.</td><td>Function(fileList)</td><td>-</td><td></td></tr><tr><td>remove</td><td>A callback function, will be executed when removing file button is clicked, remove event will be prevented when return value is false or a Promise which resolve(false) or reject</td><td>function(file): boolean | Promise</td><td>-</td><td>3.0</td></tr></tbody></table><h3 id="UploadFile">UploadFile <a class="header-anchor" href="#UploadFile"><span aria-hidden="true" class="anchor">#</span></a></h3><p>Extends File with additional props.</p><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>name</td><td>File name</td><td>string</td><td>-</td></tr><tr><td>percent</td><td>Upload progress percent</td><td>number</td><td>-</td></tr><tr><td>status</td><td>Upload status. Show different style when configured</td><td><code>error</code> | <code>success</code> | <code>done</code> | <code>uploading</code> | <code>removed</code></td><td>-</td></tr><tr><td>thumbUrl</td><td>Thumb image url</td><td>string</td><td>-</td></tr><tr><td>uid</td><td>unique id. Will auto generate when not provided</td><td>string</td><td>-</td></tr><tr><td>url</td><td>Download url</td><td>string</td><td>-</td></tr></tbody></table><h3 id="change">change <a class="header-anchor" href="#change"><span aria-hidden="true" class="anchor">#</span></a></h3><blockquote><p>The function will be called when uploading is in progress, completed or failed</p></blockquote><p>When uploading state change, it returns:</p><pre class="language-jsx"><code><span class="token punctuation">{</span>
  file<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  fileList<span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">/* ... */</span> <span class="token punctuation">]</span><span class="token punctuation">,</span>
  event<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">/* ... */</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><ol><li><p><code>file</code> File object for the current operation.</p><pre class="language-jsx"><code><span class="token punctuation">{</span>
   uid<span class="token operator">:</span> <span class="token string">&#39;uid&#39;</span><span class="token punctuation">,</span>   <span class="token comment">// unique identifier, negative is recommend, to prevent interference with internal generated id</span>
   name<span class="token operator">:</span> <span class="token string">&#39;xx.png&#39;</span><span class="token punctuation">,</span>   <span class="token comment">// file name</span>
   status<span class="token operator">:</span> <span class="token string">&#39;done&#39;</span><span class="token punctuation">,</span> <span class="token comment">// options\uFF1Auploading, done, error, removed</span>
   response<span class="token operator">:</span> <span class="token string">&#39;{&quot;status&quot;: &quot;success&quot;}&#39;</span><span class="token punctuation">,</span> <span class="token comment">// response from server</span>
   linkProps<span class="token operator">:</span> <span class="token string">&#39;{&quot;download&quot;: &quot;image&quot;}&#39;</span><span class="token punctuation">,</span> <span class="token comment">// additional html props of file link</span>
   xhr<span class="token operator">:</span> <span class="token string">&#39;XMLHttpRequest{ ... }&#39;</span><span class="token punctuation">,</span> <span class="token comment">// XMLHttpRequest Header</span>
<span class="token punctuation">}</span>
</code></pre></li><li><p><code>fileList</code> current list of files</p></li><li><p><code>event</code> response from server, including uploading progress, supported by advanced browsers.</p></li></ol><h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="How-do-I-implement-upload-server-side">How do I implement upload server side? <a class="header-anchor" href="#How-do-I-implement-upload-server-side"><span aria-hidden="true" class="anchor">#</span></a></h3><ul><li>You can consult <a href="https://github.com/blueimp/jQuery-File-Upload/wiki#server-side" target="_blank" rel="noopener noreferrer">jQuery-File-Upload</a> about how to implement server side upload interface.</li><li>There is a mock example of <a href="https://github.com/react-component/upload/blob/master/server.js" target="_blank" rel="noopener noreferrer">express</a> in rc-upload.</li></ul><h3 id="I-want-to-display-download-links">I want to display download links. <a class="header-anchor" href="#I-want-to-display-download-links"><span aria-hidden="true" class="anchor">#</span></a></h3><p>Please set property <code>url</code> of each item in <code>fileList</code> to control content of link.</p><h3 id="How-to-use-customRequest">How to use <code>customRequest</code>? <a class="header-anchor" href="#How-to-use-customRequest"><span aria-hidden="true" class="anchor">#</span></a></h3><p>See <a href="https://github.com/react-component/upload#customrequest" target="_blank" rel="noopener noreferrer">https://github.com/react-component/upload#customrequest</a>.</p><h3 id="Why-will-the-fileList-that-s-in-control-not-trigger-change-status-update-when-the-file-is-not-in-the-list">Why will the <code>fileList</code> that&#39;s in control not trigger <code>change</code> <code>status</code> update when the file is not in the list? <a class="header-anchor" href="#Why-will-the-fileList-that-s-in-control-not-trigger-change-status-update-when-the-file-is-not-in-the-list"><span aria-hidden="true" class="anchor">#</span></a></h3><p><code>change</code> only trigger when file in the list, it will ignore left events when removed from the list. Please note that there exist bug which makes event still trigger even the file is not in the list before <code>3.0.0-beta.10</code>.</p><h3 id="Why-does-change-sometimes-return-File-object-and-other-times-return-originFileObj-File">Why does <code>change</code> sometimes return File object and other times return { originFileObj: File }? <a class="header-anchor" href="#Why-does-change-sometimes-return-File-object-and-other-times-return-originFileObj-File"><span aria-hidden="true" class="anchor">#</span></a></h3><p>For compatible case, we return File object when <code>beforeUpload</code> return <code>false</code>. It will merge to <code>{ originFileObj: File }</code> in next major version. Current version is compatible to get origin file by <code>info.file.originFileObj</code>. You can change this before major release.</p>`,27),lp=[pp];function up(a,s,o,e,c,p){return y(),Cn("article",cp,lp)}var ip=G(ep,[["render",up]]);const rp=L({CN:op,US:ip,components:{Basic:Ba,Avatar:Sa,DefaultFileList:ja,PictureCard:qa,FileList:os,Drag:ks,PictureStyle:As,UploadManually:nc,Directory:cc,PreviewFile:kc,TransformFile:fc,customizeProgressBarVue:vc,maxCountVue:Lc,uploadCustomActionIconVue:Hc,uploadPngOnlyVue:Kc,customRenderVue:qc},setup(){return{}}});function kp(a,s,o,e,c,p){const l=g("Basic"),u=g("Avatar"),i=g("DefaultFileList"),r=g("PictureCard"),d=g("FileList"),I=g("Drag"),C=g("PictureStyle"),f=g("UploadManually"),b=g("Directory"),v=g("PreviewFile"),A=g("TransformFile"),Z=g("customizeProgressBarVue"),P=g("maxCountVue"),T=g("uploadCustomActionIconVue"),D=g("uploadPngOnlyVue"),M=g("customRenderVue"),j=g("demo-sort");return y(),B(j,null,{default:k(()=>[m(l),m(u),m(i),m(r),m(d),m(I),m(C),m(f),m(b),m(v),m(A),m(Z),m(P),m(T),m(D),m(M)]),_:1})}var Ip=G(rp,[["render",kp]]);export{Ip as default};

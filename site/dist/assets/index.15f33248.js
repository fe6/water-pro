import{l as v,d as V,_ as g,M as b}from"./index.f6b32fa6.js";import{ab as m,d as A,k as y,w as R,aq as o,J as C,bN as P,bO as e,G as n,e as t,bL as K,bM as F,H as a,E as w,cb as x}from"./vendor.0f0e4632.js";m.locale("en");const L=[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou"}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing"}]}],D=[{title:"Name",dataIndex:"name",filters:[{text:"filter1",value:"filter1"}]},{title:"Age",dataIndex:"age"}],U=A({setup(){const s=y(!1),p=y(v.locale);return R(p,c=>{m.locale(c)}),{columns:D,visible:s,locale:p,dayjs:m,enUS:v,zhCN:V,info:()=>{b.info({title:"some info",content:"some info"})},confirm:()=>{b.confirm({title:"some info",content:"some info"})},options:L,filter:(c,i)=>i.some(l=>l.label.toLowerCase().indexOf(c.toLowerCase())>-1)}}}),r=s=>(K("data-v-67e2442f"),s=s(),F(),s),M={class:"change-locale"},q=r(()=>n("span",{style:{"margin-right":"16px"}},"Change locale of components:",-1)),T=a("English"),Q=a("\u4E2D\u6587"),O={class:"locale-components"},E={class:"example"},$={class:"example"},nn={class:"example"},an=a("jack"),sn=a("lucy"),tn={class:"example"},on=a("Show Modal"),en=a("Show info"),pn=a("Show confirm"),cn=r(()=>n("a",{href:"#"},"Click to confirm",-1)),ln={class:"example"},un={class:"site-config-provider-calendar-wrapper"},rn={class:"example"},kn=r(()=>n("p",null,"Locale Modal",-1)),dn=r(()=>n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("change-locale"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 16px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a("Change locale of components:"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-radio-group")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("locale"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-radio-button")]),a(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("en"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("enUS.locale"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("English"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-radio-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-radio-button")]),a(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("cn"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("zhCN.locale"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u4E2D\u6587"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-radio-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-radio-group")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-config-provider")]),a(),n("span",{class:"token attr-name"},":locale"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("locale === "),n("span",{class:"token punctuation"},"'"),a("en"),n("span",{class:"token punctuation"},"'"),a(" ? enUS : zhCN"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("locale-components"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("example"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-pagination")]),a(),n("span",{class:"token attr-name"},":total"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("50"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"show-size-changer"),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("example"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(`
          `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 400px")]),n("span",{class:"token punctuation"},'"')])]),a(`
          `),n("span",{class:"token attr-name"},":show-search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ filter }"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("example"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(),n("span",{class:"token attr-name"},"show-search"),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 200px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("jack"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("jack"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lucy"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("lucy"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-time-picker")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 200px")]),n("span",{class:"token punctuation"},'"')])]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("example"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("visible = true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Show Modal"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("info"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Show info"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("confirm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Show confirm"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-popconfirm")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Question?"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("#"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Click to confirm"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-popconfirm")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("example"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-transfer")]),a(`
          `),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("[]"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"show-search"),a(`
          `),n("span",{class:"token attr-name"},":target-keys"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("[]"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},":render"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("(item) => item.title"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("site-config-provider-calendar-wrapper"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-calendar")]),a(),n("span",{class:"token attr-name"},":fullscreen"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("example"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-table")]),a(),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("[]"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("columns"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-modal")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("visible")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("visible"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Locale Modal"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),a("Locale Modal"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-modal")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-config-provider")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Modal "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" enUS "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro/es/locale/en_US'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" zhCN "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro/es/locale/zh_CN'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" dayjs "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'dayjs'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token string"},"'dayjs/locale/zh-cn'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},","),a(" watch "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`

dayjs`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"locale"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'en'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhejiang'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhejiang'"),n("span",{class:"token punctuation"},","),a(`
    children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'hangzhou'"),n("span",{class:"token punctuation"},","),a(`
        label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Hangzhou'"),n("span",{class:"token punctuation"},","),a(`
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
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`

`),n("span",{class:"token keyword"},"const"),a(" columns "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    title`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Name'"),n("span",{class:"token punctuation"},","),a(`
    dataIndex`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),a(`
    filters`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
      `),n("span",{class:"token punctuation"},"{"),a(`
        text`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'filter1'"),n("span",{class:"token punctuation"},","),a(`
        value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'filter1'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"{"),a(`
    title`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Age'"),n("span",{class:"token punctuation"},","),a(`
    dataIndex`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" visible "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" locale "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),a("enUS"),n("span",{class:"token punctuation"},"."),a("locale"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),a("locale"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"val"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dayjs`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"locale"),n("span",{class:"token punctuation"},"("),a("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"info"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      Modal`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"info"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
        title`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'some info'"),n("span",{class:"token punctuation"},","),a(`
        content`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'some info'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"confirm"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      Modal`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"confirm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
        title`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'some info'"),n("span",{class:"token punctuation"},","),a(`
        content`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'some info'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      columns`),n("span",{class:"token punctuation"},","),a(`
      visible`),n("span",{class:"token punctuation"},","),a(`
      locale`),n("span",{class:"token punctuation"},","),a(`
      dayjs`),n("span",{class:"token punctuation"},","),a(`
      enUS`),n("span",{class:"token punctuation"},","),a(`
      zhCN`),n("span",{class:"token punctuation"},","),a(`
      info`),n("span",{class:"token punctuation"},","),a(`
      confirm`),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"filter"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("inputValue"),n("span",{class:"token punctuation"},","),a(" path")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"return"),a(" path"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"some"),n("span",{class:"token punctuation"},"("),a(`
          `),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"option"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(" option"),n("span",{class:"token punctuation"},"."),a("label"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLowerCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),a("inputValue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLowerCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},">"),a(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),a(`
        `),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),a(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".site-config-provider-calendar-wrapper"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 319px"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),a(" 1px solid #d9d9d9"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),a(" 2px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".locale-components"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"border-top"),n("span",{class:"token punctuation"},":"),a(" 1px solid #d9d9d9"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"padding-top"),n("span",{class:"token punctuation"},":"),a(" 16px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token selector"},".example"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),a(" 16px 0"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token selector"},".example > *"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 8px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token selector"},".change-locale"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),a(" 16px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},"[data-theme='dark'] .locale-components"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"border-top"),n("span",{class:"token punctuation"},":"),a(" 1px solid #303030"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},"[data-theme='dark'] .site-config-provider-calendar-wrapper"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),a(" 1px solid #303030"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1)),gn=r(()=>n("pre",{class:"language-vue"},[n("code",null,[n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("change-locale"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("span")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 16px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a("Change locale of components:"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("span")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-radio-group")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("value")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("locale"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-radio-button")]),a(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("en"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("enUS.locale"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("English"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-radio-button")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-radio-button")]),a(),n("span",{class:"token attr-name"},"key"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("cn"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("zhCN.locale"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("\u4E2D\u6587"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-radio-button")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-radio-group")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-config-provider")]),a(),n("span",{class:"token attr-name"},":locale"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("locale === "),n("span",{class:"token punctuation"},"'"),a("en"),n("span",{class:"token punctuation"},"'"),a(" ? enUS : zhCN"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("locale-components"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("example"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-pagination")]),a(),n("span",{class:"token attr-name"},":total"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("50"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"show-size-changer"),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("example"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-cascader")]),a(`
          `),n("span",{class:"token attr-name"},":options"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("options"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 400px")]),n("span",{class:"token punctuation"},'"')])]),a(`
          `),n("span",{class:"token attr-name"},":show-search"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("{ filter }"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"placeholder"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Please select"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("example"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select")]),a(),n("span",{class:"token attr-name"},"show-search"),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 200px")]),n("span",{class:"token punctuation"},'"')])]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("jack"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("jack"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-select-option")]),a(),n("span",{class:"token attr-name"},"value"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("lucy"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("lucy"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select-option")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-select")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-date-picker")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-time-picker")]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-range-picker")]),a(),n("span",{class:"token special-attr"},[n("span",{class:"token attr-name"},"style"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),n("span",{class:"token value css language-css"},[n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 200px")]),n("span",{class:"token punctuation"},'"')])]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("example"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"type"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("primary"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("visible = true"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Show Modal"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("info"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Show info"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-button")]),a(),n("span",{class:"token attr-name"},"@click"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("confirm"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Show confirm"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-button")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-popconfirm")]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Question?"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
          `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a")]),a(),n("span",{class:"token attr-name"},"href"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("#"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a("Click to confirm"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a")]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-popconfirm")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("example"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-transfer")]),a(`
          `),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("[]"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},"show-search"),a(`
          `),n("span",{class:"token attr-name"},":target-keys"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("[]"),n("span",{class:"token punctuation"},'"')]),a(`
          `),n("span",{class:"token attr-name"},":render"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("(item) => item.title"),n("span",{class:"token punctuation"},'"')]),a(`
        `),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("site-config-provider-calendar-wrapper"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-calendar")]),a(),n("span",{class:"token attr-name"},":fullscreen"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("false"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("div")]),a(),n("span",{class:"token attr-name"},"class"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("example"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-table")]),a(),n("span",{class:"token attr-name"},":data-source"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("[]"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},":columns"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("columns"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token punctuation"},"/>")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("a-modal")]),a(),n("span",{class:"token attr-name"},[n("span",{class:"token namespace"},"v-model:"),a("visible")]),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("visible"),n("span",{class:"token punctuation"},'"')]),a(),n("span",{class:"token attr-name"},"title"),n("span",{class:"token attr-value"},[n("span",{class:"token punctuation attr-equals"},"="),n("span",{class:"token punctuation"},'"'),a("Locale Modal"),n("span",{class:"token punctuation"},'"')]),n("span",{class:"token punctuation"},">")]),a(`
        `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("p")]),n("span",{class:"token punctuation"},">")]),a("Locale Modal"),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("p")]),n("span",{class:"token punctuation"},">")]),a(`
      `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-modal")]),n("span",{class:"token punctuation"},">")]),a(`
    `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("div")]),n("span",{class:"token punctuation"},">")]),a(`
  `),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("a-config-provider")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("template")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("script")]),n("span",{class:"token punctuation"},">")]),n("span",{class:"token script"},[n("span",{class:"token language-javascript"},[a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" Modal "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" enUS "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro/es/locale/en_US'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" zhCN "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'@fe6/water-pro/es/locale/zh_CN'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(" dayjs "),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'dayjs'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token string"},"'dayjs/locale/zh-cn'"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"import"),a(),n("span",{class:"token punctuation"},"{"),a(" defineComponent"),n("span",{class:"token punctuation"},","),a(" ref"),n("span",{class:"token punctuation"},","),a(" watch "),n("span",{class:"token punctuation"},"}"),a(),n("span",{class:"token keyword"},"from"),a(),n("span",{class:"token string"},"'vue'"),n("span",{class:"token punctuation"},";"),a(`
dayjs`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"locale"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"'en'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" options "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
  value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'zhejiang'"),n("span",{class:"token punctuation"},","),a(`
  label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Zhejiang'"),n("span",{class:"token punctuation"},","),a(`
  children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'hangzhou'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Hangzhou'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
  value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'jiangsu'"),n("span",{class:"token punctuation"},","),a(`
  label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Jiangsu'"),n("span",{class:"token punctuation"},","),a(`
  children`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'nanjing'"),n("span",{class:"token punctuation"},","),a(`
    label`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Nanjing'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"const"),a(" columns "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
  title`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Name'"),n("span",{class:"token punctuation"},","),a(`
  dataIndex`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'name'"),n("span",{class:"token punctuation"},","),a(`
  filters`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"{"),a(`
    text`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'filter1'"),n("span",{class:"token punctuation"},","),a(`
    value`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'filter1'"),n("span",{class:"token punctuation"},","),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token punctuation"},"{"),a(`
  title`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'Age'"),n("span",{class:"token punctuation"},","),a(`
  dataIndex`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'age'"),n("span",{class:"token punctuation"},","),a(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token keyword"},"export"),a(),n("span",{class:"token keyword"},"default"),a(),n("span",{class:"token function"},"defineComponent"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token function"},"setup"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" visible "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),n("span",{class:"token boolean"},"false"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token keyword"},"const"),a(" locale "),n("span",{class:"token operator"},"="),a(),n("span",{class:"token function"},"ref"),n("span",{class:"token punctuation"},"("),a("enUS"),n("span",{class:"token punctuation"},"."),a("locale"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token function"},"watch"),n("span",{class:"token punctuation"},"("),a("locale"),n("span",{class:"token punctuation"},","),a(),n("span",{class:"token parameter"},"val"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      dayjs`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"locale"),n("span",{class:"token punctuation"},"("),a("val"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"info"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      Modal`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"info"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
        title`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'some info'"),n("span",{class:"token punctuation"},","),a(`
        content`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'some info'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"const"),a(),n("span",{class:"token function-variable function"},"confirm"),a(),n("span",{class:"token operator"},"="),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
      Modal`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"confirm"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),a(`
        title`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'some info'"),n("span",{class:"token punctuation"},","),a(`
        content`),n("span",{class:"token operator"},":"),a(),n("span",{class:"token string"},"'some info'"),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`

    `),n("span",{class:"token keyword"},"return"),a(),n("span",{class:"token punctuation"},"{"),a(`
      columns`),n("span",{class:"token punctuation"},","),a(`
      visible`),n("span",{class:"token punctuation"},","),a(`
      locale`),n("span",{class:"token punctuation"},","),a(`
      dayjs`),n("span",{class:"token punctuation"},","),a(`
      enUS`),n("span",{class:"token punctuation"},","),a(`
      zhCN`),n("span",{class:"token punctuation"},","),a(`
      info`),n("span",{class:"token punctuation"},","),a(`
      confirm`),n("span",{class:"token punctuation"},","),a(`
      options`),n("span",{class:"token punctuation"},","),a(`
      `),n("span",{class:"token function-variable function"},"filter"),n("span",{class:"token operator"},":"),a(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[a("inputValue"),n("span",{class:"token punctuation"},","),a(" path")]),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token punctuation"},"{"),a(`
        `),n("span",{class:"token keyword"},"return"),a(" path"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"some"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"option"),a(),n("span",{class:"token operator"},"=>"),a(" option"),n("span",{class:"token punctuation"},"."),a("label"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLowerCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),a("inputValue"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"toLowerCase"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},">"),a(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),a(`

`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("script")]),n("span",{class:"token punctuation"},">")]),a(`
`),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"<"),a("style")]),a(),n("span",{class:"token attr-name"},"scoped"),n("span",{class:"token punctuation"},">")]),n("span",{class:"token style"},[n("span",{class:"token language-css"},[a(`
`),n("span",{class:"token selector"},".site-config-provider-calendar-wrapper"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"width"),n("span",{class:"token punctuation"},":"),a(" 319px"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),a(" 1px solid #d9d9d9"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"border-radius"),n("span",{class:"token punctuation"},":"),a(" 2px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},".locale-components"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"border-top"),n("span",{class:"token punctuation"},":"),a(" 1px solid #d9d9d9"),n("span",{class:"token punctuation"},";"),a(`
  `),n("span",{class:"token property"},"padding-top"),n("span",{class:"token punctuation"},":"),a(" 16px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token selector"},".example"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin"),n("span",{class:"token punctuation"},":"),a(" 16px 0"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token selector"},".example > *"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-right"),n("span",{class:"token punctuation"},":"),a(" 8px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`

`),n("span",{class:"token selector"},".change-locale"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"margin-bottom"),n("span",{class:"token punctuation"},":"),a(" 16px"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},"[data-theme='dark'] .locale-components"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"border-top"),n("span",{class:"token punctuation"},":"),a(" 1px solid #303030"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`),n("span",{class:"token selector"},"[data-theme='dark'] .site-config-provider-calendar-wrapper"),a(),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token property"},"border"),n("span",{class:"token punctuation"},":"),a(" 1px solid #303030"),n("span",{class:"token punctuation"},";"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("span",{class:"token tag"},[n("span",{class:"token tag"},[n("span",{class:"token punctuation"},"</"),a("style")]),n("span",{class:"token punctuation"},">")]),a(`
`)])],-1));function Cn(s,p,k,d,c,i){const l=o("a-radio-button"),h=o("a-radio-group"),Z=o("a-pagination"),G=o("a-cascader"),f=o("a-select-option"),W=o("a-select"),N=o("a-date-picker"),S=o("a-time-picker"),Y=o("a-range-picker"),I=o("a-button"),j=o("a-popconfirm"),X=o("a-transfer"),B=o("a-calendar"),H=o("a-table"),_=o("a-modal"),J=o("a-config-provider"),z=o("demo-box");return C(),P(z,{jsfiddle:{us:"Components which need localization support are listed here, you can toggle the language in the demo.",cn:"\u6B64\u5904\u5217\u51FA Water Pro \u4E2D\u9700\u8981\u56FD\u9645\u5316\u652F\u6301\u7684\u7EC4\u4EF6\uFF0C\u4F60\u53EF\u4EE5\u5728\u6F14\u793A\u91CC\u5207\u6362\u8BED\u8A00\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u6B64\u5904\u5217\u51FA Water Pro \u4E2D\u9700\u8981\u56FD\u9645\u5316\u652F\u6301\u7684\u7EC4\u4EF6\uFF0C\u4F60\u53EF\u4EE5\u5728\u6F14\u793A\u91CC\u5207\u6362\u8BED\u8A00\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Components which need localization support are listed here, you can toggle the language in the demo.</p>
`,order:1,title:{"zh-CN":"\u56FD\u9645\u5316","en-US":"Locale"},relativePath:"components/config-provider/demo/locale.vue",sourceCode:"PHRlbXBsYXRlPgogIDxkaXYgY2xhc3M9ImNoYW5nZS1sb2NhbGUiPgogICAgPHNwYW4gc3R5bGU9Im1hcmdpbi1yaWdodDogMTZweCI+Q2hhbmdlIGxvY2FsZSBvZiBjb21wb25lbnRzOjwvc3Bhbj4KICAgIDxhLXJhZGlvLWdyb3VwIHYtbW9kZWw6dmFsdWU9ImxvY2FsZSI+CiAgICAgIDxhLXJhZGlvLWJ1dHRvbiBrZXk9ImVuIiA6dmFsdWU9ImVuVVMubG9jYWxlIj5FbmdsaXNoPC9hLXJhZGlvLWJ1dHRvbj4KICAgICAgPGEtcmFkaW8tYnV0dG9uIGtleT0iY24iIDp2YWx1ZT0iemhDTi5sb2NhbGUiPuS4reaWhzwvYS1yYWRpby1idXR0b24+CiAgICA8L2EtcmFkaW8tZ3JvdXA+CiAgPC9kaXY+CiAgPGEtY29uZmlnLXByb3ZpZGVyIDpsb2NhbGU9ImxvY2FsZSA9PT0gJ2VuJyA/IGVuVVMgOiB6aENOIj4KICAgIDxkaXYgY2xhc3M9ImxvY2FsZS1jb21wb25lbnRzIj4KICAgICAgPGRpdiBjbGFzcz0iZXhhbXBsZSI+CiAgICAgICAgPGEtcGFnaW5hdGlvbiA6dG90YWw9IjUwIiBzaG93LXNpemUtY2hhbmdlciAvPgogICAgICA8L2Rpdj4KICAgICAgPGRpdiBjbGFzcz0iZXhhbXBsZSI+CiAgICAgICAgPGEtY2FzY2FkZXIKICAgICAgICAgIDpvcHRpb25zPSJvcHRpb25zIgogICAgICAgICAgc3R5bGU9IndpZHRoOiA0MDBweCIKICAgICAgICAgIDpzaG93LXNlYXJjaD0ieyBmaWx0ZXIgfSIKICAgICAgICAgIHBsYWNlaG9sZGVyPSJQbGVhc2Ugc2VsZWN0IgogICAgICAgIC8+CiAgICAgIDwvZGl2PgogICAgICA8ZGl2IGNsYXNzPSJleGFtcGxlIj4KICAgICAgICA8YS1zZWxlY3Qgc2hvdy1zZWFyY2ggc3R5bGU9IndpZHRoOiAyMDBweCI+CiAgICAgICAgICA8YS1zZWxlY3Qtb3B0aW9uIHZhbHVlPSJqYWNrIj5qYWNrPC9hLXNlbGVjdC1vcHRpb24+CiAgICAgICAgICA8YS1zZWxlY3Qtb3B0aW9uIHZhbHVlPSJsdWN5Ij5sdWN5PC9hLXNlbGVjdC1vcHRpb24+CiAgICAgICAgPC9hLXNlbGVjdD4KICAgICAgICA8YS1kYXRlLXBpY2tlciAvPgogICAgICAgIDxhLXRpbWUtcGlja2VyIC8+CiAgICAgICAgPGEtcmFuZ2UtcGlja2VyIHN0eWxlPSJ3aWR0aDogMjAwcHgiIC8+CiAgICAgIDwvZGl2PgogICAgICA8ZGl2IGNsYXNzPSJleGFtcGxlIj4KICAgICAgICA8YS1idXR0b24gdHlwZT0icHJpbWFyeSIgQGNsaWNrPSJ2aXNpYmxlID0gdHJ1ZSI+U2hvdyBNb2RhbDwvYS1idXR0b24+CiAgICAgICAgPGEtYnV0dG9uIEBjbGljaz0iaW5mbyI+U2hvdyBpbmZvPC9hLWJ1dHRvbj4KICAgICAgICA8YS1idXR0b24gQGNsaWNrPSJjb25maXJtIj5TaG93IGNvbmZpcm08L2EtYnV0dG9uPgogICAgICAgIDxhLXBvcGNvbmZpcm0gdGl0bGU9IlF1ZXN0aW9uPyI+CiAgICAgICAgICA8YSBocmVmPSIjIj5DbGljayB0byBjb25maXJtPC9hPgogICAgICAgIDwvYS1wb3Bjb25maXJtPgogICAgICA8L2Rpdj4KICAgICAgPGRpdiBjbGFzcz0iZXhhbXBsZSI+CiAgICAgICAgPGEtdHJhbnNmZXIKICAgICAgICAgIDpkYXRhLXNvdXJjZT0iW10iCiAgICAgICAgICBzaG93LXNlYXJjaAogICAgICAgICAgOnRhcmdldC1rZXlzPSJbXSIKICAgICAgICAgIDpyZW5kZXI9IihpdGVtKSA9PiBpdGVtLnRpdGxlIgogICAgICAgIC8+CiAgICAgIDwvZGl2PgogICAgICA8ZGl2IGNsYXNzPSJzaXRlLWNvbmZpZy1wcm92aWRlci1jYWxlbmRhci13cmFwcGVyIj4KICAgICAgICA8YS1jYWxlbmRhciA6ZnVsbHNjcmVlbj0iZmFsc2UiIC8+CiAgICAgIDwvZGl2PgogICAgICA8ZGl2IGNsYXNzPSJleGFtcGxlIj4KICAgICAgICA8YS10YWJsZSA6ZGF0YS1zb3VyY2U9IltdIiA6Y29sdW1ucz0iY29sdW1ucyIgLz4KICAgICAgPC9kaXY+CiAgICAgIDxhLW1vZGFsIHYtbW9kZWw6dmlzaWJsZT0idmlzaWJsZSIgdGl0bGU9IkxvY2FsZSBNb2RhbCI+CiAgICAgICAgPHA+TG9jYWxlIE1vZGFsPC9wPgogICAgICA8L2EtbW9kYWw+CiAgICA8L2Rpdj4KICA8L2EtY29uZmlnLXByb3ZpZGVyPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBNb2RhbCB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKaW1wb3J0IGVuVVMgZnJvbSAnQGZlNi93YXRlci1wcm8vZXMvbG9jYWxlL2VuX1VTJzsKaW1wb3J0IHpoQ04gZnJvbSAnQGZlNi93YXRlci1wcm8vZXMvbG9jYWxlL3poX0NOJzsKaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJzsKaW1wb3J0ICdkYXlqcy9sb2NhbGUvemgtY24nOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiwgd2F0Y2ggfSBmcm9tICd2dWUnOwoKZGF5anMubG9jYWxlKCdlbicpOwoKY29uc3Qgb3B0aW9ucyA9IFsKICB7CiAgICB2YWx1ZTogJ3poZWppYW5nJywKICAgIGxhYmVsOiAnWmhlamlhbmcnLAogICAgY2hpbGRyZW46IFsKICAgICAgewogICAgICAgIHZhbHVlOiAnaGFuZ3pob3UnLAogICAgICAgIGxhYmVsOiAnSGFuZ3pob3UnLAogICAgICB9LAogICAgXSwKICB9LAogIHsKICAgIHZhbHVlOiAnamlhbmdzdScsCiAgICBsYWJlbDogJ0ppYW5nc3UnLAogICAgY2hpbGRyZW46IFsKICAgICAgewogICAgICAgIHZhbHVlOiAnbmFuamluZycsCiAgICAgICAgbGFiZWw6ICdOYW5qaW5nJywKICAgICAgfSwKICAgIF0sCiAgfSwKXTsKCmNvbnN0IGNvbHVtbnMgPSBbCiAgewogICAgdGl0bGU6ICdOYW1lJywKICAgIGRhdGFJbmRleDogJ25hbWUnLAogICAgZmlsdGVyczogWwogICAgICB7CiAgICAgICAgdGV4dDogJ2ZpbHRlcjEnLAogICAgICAgIHZhbHVlOiAnZmlsdGVyMScsCiAgICAgIH0sCiAgICBdLAogIH0sCiAgewogICAgdGl0bGU6ICdBZ2UnLAogICAgZGF0YUluZGV4OiAnYWdlJywKICB9LApdOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3QgdmlzaWJsZSA9IHJlZihmYWxzZSk7CiAgICBjb25zdCBsb2NhbGUgPSByZWYoZW5VUy5sb2NhbGUpOwogICAgd2F0Y2gobG9jYWxlLCAodmFsKSA9PiB7CiAgICAgIGRheWpzLmxvY2FsZSh2YWwpOwogICAgfSk7CiAgICBjb25zdCBpbmZvID0gKCkgPT4gewogICAgICBNb2RhbC5pbmZvKHsKICAgICAgICB0aXRsZTogJ3NvbWUgaW5mbycsCiAgICAgICAgY29udGVudDogJ3NvbWUgaW5mbycsCiAgICAgIH0pOwogICAgfTsKICAgIGNvbnN0IGNvbmZpcm0gPSAoKSA9PiB7CiAgICAgIE1vZGFsLmNvbmZpcm0oewogICAgICAgIHRpdGxlOiAnc29tZSBpbmZvJywKICAgICAgICBjb250ZW50OiAnc29tZSBpbmZvJywKICAgICAgfSk7CiAgICB9OwogICAgcmV0dXJuIHsKICAgICAgY29sdW1ucywKICAgICAgdmlzaWJsZSwKICAgICAgbG9jYWxlLAogICAgICBkYXlqcywKICAgICAgZW5VUywKICAgICAgemhDTiwKICAgICAgaW5mbywKICAgICAgY29uZmlybSwKICAgICAgb3B0aW9ucywKICAgICAgZmlsdGVyOiAoaW5wdXRWYWx1ZSwgcGF0aCkgPT4gewogICAgICAgIHJldHVybiBwYXRoLnNvbWUoCiAgICAgICAgICAob3B0aW9uKSA9PiBvcHRpb24ubGFiZWwudG9Mb3dlckNhc2UoKS5pbmRleE9mKGlucHV0VmFsdWUudG9Mb3dlckNhc2UoKSkgPiAtMSwKICAgICAgICApOwogICAgICB9LAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+CjxzdHlsZSBzY29wZWQ+Ci5zaXRlLWNvbmZpZy1wcm92aWRlci1jYWxlbmRhci13cmFwcGVyIHsKICB3aWR0aDogMzE5cHg7CiAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTsKICBib3JkZXItcmFkaXVzOiAycHg7Cn0KLmxvY2FsZS1jb21wb25lbnRzIHsKICBib3JkZXItdG9wOiAxcHggc29saWQgI2Q5ZDlkOTsKICBwYWRkaW5nLXRvcDogMTZweDsKfQoKLmV4YW1wbGUgewogIG1hcmdpbjogMTZweCAwOwp9CgouZXhhbXBsZSA+ICogewogIG1hcmdpbi1yaWdodDogOHB4Owp9CgouY2hhbmdlLWxvY2FsZSB7CiAgbWFyZ2luLWJvdHRvbTogMTZweDsKfQpbZGF0YS10aGVtZT0nZGFyayddIC5sb2NhbGUtY29tcG9uZW50cyB7CiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzMDMwMzA7Cn0KW2RhdGEtdGhlbWU9J2RhcmsnXSAuc2l0ZS1jb25maWctcHJvdmlkZXItY2FsZW5kYXItd3JhcHBlciB7CiAgYm9yZGVyOiAxcHggc29saWQgIzMwMzAzMDsKfQo8L3N0eWxlPgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxkaXYgY2xhc3M9ImNoYW5nZS1sb2NhbGUiPgogICAgPHNwYW4gc3R5bGU9Im1hcmdpbi1yaWdodDogMTZweCI+Q2hhbmdlIGxvY2FsZSBvZiBjb21wb25lbnRzOjwvc3Bhbj4KICAgIDxhLXJhZGlvLWdyb3VwIHYtbW9kZWw6dmFsdWU9ImxvY2FsZSI+CiAgICAgIDxhLXJhZGlvLWJ1dHRvbiBrZXk9ImVuIiA6dmFsdWU9ImVuVVMubG9jYWxlIj5FbmdsaXNoPC9hLXJhZGlvLWJ1dHRvbj4KICAgICAgPGEtcmFkaW8tYnV0dG9uIGtleT0iY24iIDp2YWx1ZT0iemhDTi5sb2NhbGUiPuS4reaWhzwvYS1yYWRpby1idXR0b24+CiAgICA8L2EtcmFkaW8tZ3JvdXA+CiAgPC9kaXY+CiAgPGEtY29uZmlnLXByb3ZpZGVyIDpsb2NhbGU9ImxvY2FsZSA9PT0gJ2VuJyA/IGVuVVMgOiB6aENOIj4KICAgIDxkaXYgY2xhc3M9ImxvY2FsZS1jb21wb25lbnRzIj4KICAgICAgPGRpdiBjbGFzcz0iZXhhbXBsZSI+CiAgICAgICAgPGEtcGFnaW5hdGlvbiA6dG90YWw9IjUwIiBzaG93LXNpemUtY2hhbmdlciAvPgogICAgICA8L2Rpdj4KICAgICAgPGRpdiBjbGFzcz0iZXhhbXBsZSI+CiAgICAgICAgPGEtY2FzY2FkZXIKICAgICAgICAgIDpvcHRpb25zPSJvcHRpb25zIgogICAgICAgICAgc3R5bGU9IndpZHRoOiA0MDBweCIKICAgICAgICAgIDpzaG93LXNlYXJjaD0ieyBmaWx0ZXIgfSIKICAgICAgICAgIHBsYWNlaG9sZGVyPSJQbGVhc2Ugc2VsZWN0IgogICAgICAgIC8+CiAgICAgIDwvZGl2PgogICAgICA8ZGl2IGNsYXNzPSJleGFtcGxlIj4KICAgICAgICA8YS1zZWxlY3Qgc2hvdy1zZWFyY2ggc3R5bGU9IndpZHRoOiAyMDBweCI+CiAgICAgICAgICA8YS1zZWxlY3Qtb3B0aW9uIHZhbHVlPSJqYWNrIj5qYWNrPC9hLXNlbGVjdC1vcHRpb24+CiAgICAgICAgICA8YS1zZWxlY3Qtb3B0aW9uIHZhbHVlPSJsdWN5Ij5sdWN5PC9hLXNlbGVjdC1vcHRpb24+CiAgICAgICAgPC9hLXNlbGVjdD4KICAgICAgICA8YS1kYXRlLXBpY2tlciAvPgogICAgICAgIDxhLXRpbWUtcGlja2VyIC8+CiAgICAgICAgPGEtcmFuZ2UtcGlja2VyIHN0eWxlPSJ3aWR0aDogMjAwcHgiIC8+CiAgICAgIDwvZGl2PgogICAgICA8ZGl2IGNsYXNzPSJleGFtcGxlIj4KICAgICAgICA8YS1idXR0b24gdHlwZT0icHJpbWFyeSIgQGNsaWNrPSJ2aXNpYmxlID0gdHJ1ZSI+U2hvdyBNb2RhbDwvYS1idXR0b24+CiAgICAgICAgPGEtYnV0dG9uIEBjbGljaz0iaW5mbyI+U2hvdyBpbmZvPC9hLWJ1dHRvbj4KICAgICAgICA8YS1idXR0b24gQGNsaWNrPSJjb25maXJtIj5TaG93IGNvbmZpcm08L2EtYnV0dG9uPgogICAgICAgIDxhLXBvcGNvbmZpcm0gdGl0bGU9IlF1ZXN0aW9uPyI+CiAgICAgICAgICA8YSBocmVmPSIjIj5DbGljayB0byBjb25maXJtPC9hPgogICAgICAgIDwvYS1wb3Bjb25maXJtPgogICAgICA8L2Rpdj4KICAgICAgPGRpdiBjbGFzcz0iZXhhbXBsZSI+CiAgICAgICAgPGEtdHJhbnNmZXIKICAgICAgICAgIDpkYXRhLXNvdXJjZT0iW10iCiAgICAgICAgICBzaG93LXNlYXJjaAogICAgICAgICAgOnRhcmdldC1rZXlzPSJbXSIKICAgICAgICAgIDpyZW5kZXI9IihpdGVtKSA9PiBpdGVtLnRpdGxlIgogICAgICAgIC8+CiAgICAgIDwvZGl2PgogICAgICA8ZGl2IGNsYXNzPSJzaXRlLWNvbmZpZy1wcm92aWRlci1jYWxlbmRhci13cmFwcGVyIj4KICAgICAgICA8YS1jYWxlbmRhciA6ZnVsbHNjcmVlbj0iZmFsc2UiIC8+CiAgICAgIDwvZGl2PgogICAgICA8ZGl2IGNsYXNzPSJleGFtcGxlIj4KICAgICAgICA8YS10YWJsZSA6ZGF0YS1zb3VyY2U9IltdIiA6Y29sdW1ucz0iY29sdW1ucyIgLz4KICAgICAgPC9kaXY+CiAgICAgIDxhLW1vZGFsIHYtbW9kZWw6dmlzaWJsZT0idmlzaWJsZSIgdGl0bGU9IkxvY2FsZSBNb2RhbCI+CiAgICAgICAgPHA+TG9jYWxlIE1vZGFsPC9wPgogICAgICA8L2EtbW9kYWw+CiAgICA8L2Rpdj4KICA8L2EtY29uZmlnLXByb3ZpZGVyPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBNb2RhbCB9IGZyb20gJ0BmZTYvd2F0ZXItcHJvJzsKaW1wb3J0IGVuVVMgZnJvbSAnQGZlNi93YXRlci1wcm8vZXMvbG9jYWxlL2VuX1VTJzsKaW1wb3J0IHpoQ04gZnJvbSAnQGZlNi93YXRlci1wcm8vZXMvbG9jYWxlL3poX0NOJzsKaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJzsKaW1wb3J0ICdkYXlqcy9sb2NhbGUvemgtY24nOwppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiwgd2F0Y2ggfSBmcm9tICd2dWUnOwpkYXlqcy5sb2NhbGUoJ2VuJyk7CmNvbnN0IG9wdGlvbnMgPSBbewogIHZhbHVlOiAnemhlamlhbmcnLAogIGxhYmVsOiAnWmhlamlhbmcnLAogIGNoaWxkcmVuOiBbewogICAgdmFsdWU6ICdoYW5nemhvdScsCiAgICBsYWJlbDogJ0hhbmd6aG91JywKICB9XSwKfSwgewogIHZhbHVlOiAnamlhbmdzdScsCiAgbGFiZWw6ICdKaWFuZ3N1JywKICBjaGlsZHJlbjogW3sKICAgIHZhbHVlOiAnbmFuamluZycsCiAgICBsYWJlbDogJ05hbmppbmcnLAogIH1dLAp9XTsKY29uc3QgY29sdW1ucyA9IFt7CiAgdGl0bGU6ICdOYW1lJywKICBkYXRhSW5kZXg6ICduYW1lJywKICBmaWx0ZXJzOiBbewogICAgdGV4dDogJ2ZpbHRlcjEnLAogICAgdmFsdWU6ICdmaWx0ZXIxJywKICB9XSwKfSwgewogIHRpdGxlOiAnQWdlJywKICBkYXRhSW5kZXg6ICdhZ2UnLAp9XTsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IHZpc2libGUgPSByZWYoZmFsc2UpOwogICAgY29uc3QgbG9jYWxlID0gcmVmKGVuVVMubG9jYWxlKTsKICAgIHdhdGNoKGxvY2FsZSwgdmFsID0+IHsKICAgICAgZGF5anMubG9jYWxlKHZhbCk7CiAgICB9KTsKCiAgICBjb25zdCBpbmZvID0gKCkgPT4gewogICAgICBNb2RhbC5pbmZvKHsKICAgICAgICB0aXRsZTogJ3NvbWUgaW5mbycsCiAgICAgICAgY29udGVudDogJ3NvbWUgaW5mbycsCiAgICAgIH0pOwogICAgfTsKCiAgICBjb25zdCBjb25maXJtID0gKCkgPT4gewogICAgICBNb2RhbC5jb25maXJtKHsKICAgICAgICB0aXRsZTogJ3NvbWUgaW5mbycsCiAgICAgICAgY29udGVudDogJ3NvbWUgaW5mbycsCiAgICAgIH0pOwogICAgfTsKCiAgICByZXR1cm4gewogICAgICBjb2x1bW5zLAogICAgICB2aXNpYmxlLAogICAgICBsb2NhbGUsCiAgICAgIGRheWpzLAogICAgICBlblVTLAogICAgICB6aENOLAogICAgICBpbmZvLAogICAgICBjb25maXJtLAogICAgICBvcHRpb25zLAogICAgICBmaWx0ZXI6IChpbnB1dFZhbHVlLCBwYXRoKSA9PiB7CiAgICAgICAgcmV0dXJuIHBhdGguc29tZShvcHRpb24gPT4gb3B0aW9uLmxhYmVsLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihpbnB1dFZhbHVlLnRvTG93ZXJDYXNlKCkpID4gLTEpOwogICAgICB9LAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pgo8c3R5bGUgc2NvcGVkPgouc2l0ZS1jb25maWctcHJvdmlkZXItY2FsZW5kYXItd3JhcHBlciB7CiAgd2lkdGg6IDMxOXB4OwogIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7CiAgYm9yZGVyLXJhZGl1czogMnB4Owp9Ci5sb2NhbGUtY29tcG9uZW50cyB7CiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkOWQ5ZDk7CiAgcGFkZGluZy10b3A6IDE2cHg7Cn0KCi5leGFtcGxlIHsKICBtYXJnaW46IDE2cHggMDsKfQoKLmV4YW1wbGUgPiAqIHsKICBtYXJnaW4tcmlnaHQ6IDhweDsKfQoKLmNoYW5nZS1sb2NhbGUgewogIG1hcmdpbi1ib3R0b206IDE2cHg7Cn0KW2RhdGEtdGhlbWU9J2RhcmsnXSAubG9jYWxlLWNvbXBvbmVudHMgewogIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMzAzMDMwOwp9CltkYXRhLXRoZW1lPSdkYXJrJ10gLnNpdGUtY29uZmlnLXByb3ZpZGVyLWNhbGVuZGFyLXdyYXBwZXIgewogIGJvcmRlcjogMXB4IHNvbGlkICMzMDMwMzA7Cn0KPC9zdHlsZT4="}},{default:e(()=>[n("div",M,[q,t(h,{value:s.locale,"onUpdate:value":p[0]||(p[0]=u=>s.locale=u)},{default:e(()=>[t(l,{key:"en",value:s.enUS.locale},{default:e(()=>[T]),_:1},8,["value"]),t(l,{key:"cn",value:s.zhCN.locale},{default:e(()=>[Q]),_:1},8,["value"])]),_:1},8,["value"])]),t(J,{locale:s.locale==="en"?s.enUS:s.zhCN},{default:e(()=>[n("div",O,[n("div",E,[t(Z,{total:50,"show-size-changer":""})]),n("div",$,[t(G,{options:s.options,style:{width:"400px"},"show-search":{filter:s.filter},placeholder:"Please select"},null,8,["options","show-search"])]),n("div",nn,[t(W,{"show-search":"",style:{width:"200px"}},{default:e(()=>[t(f,{value:"jack"},{default:e(()=>[an]),_:1}),t(f,{value:"lucy"},{default:e(()=>[sn]),_:1})]),_:1}),t(N),t(S),t(Y,{style:{width:"200px"}})]),n("div",tn,[t(I,{type:"primary",onClick:p[1]||(p[1]=u=>s.visible=!0)},{default:e(()=>[on]),_:1}),t(I,{onClick:s.info},{default:e(()=>[en]),_:1},8,["onClick"]),t(I,{onClick:s.confirm},{default:e(()=>[pn]),_:1},8,["onClick"]),t(j,{title:"Question?"},{default:e(()=>[cn]),_:1})]),n("div",ln,[t(X,{"data-source":[],"show-search":"","target-keys":[],render:u=>u.title},null,8,["render"])]),n("div",un,[t(B,{fullscreen:!1})]),n("div",rn,[t(H,{"data-source":[],columns:s.columns},null,8,["columns"])]),t(_,{visible:s.visible,"onUpdate:visible":p[2]||(p[2]=u=>s.visible=u),title:"Locale Modal"},{default:e(()=>[kn]),_:1},8,["visible"])])]),_:1},8,["locale"])]),htmlCode:e(()=>[dn]),jsVersionHtml:e(()=>[gn]),_:1},8,["jsfiddle"])}var hn=g(U,[["render",Cn],["__scopeId","data-v-67e2442f"]]);const In={pageData:{title:"ConfigProvider",description:"",frontmatter:{category:"Components",subtitle:"\u5168\u5C40\u5316\u914D\u7F6E",cols:1,type:"\u5176\u4ED6",title:"ConfigProvider",cover:"https://gw.alipayobjects.com/zos/alicdn/kegYxl1wj/ConfigProvider.svg"},headers:[{level:2,title:"\u4F7F\u7528",slug:"\u4F7F\u7528",content:"ConfigProvider \u4F7F\u7528 Vue \u7684 [provide / inject](https://vuejs.org/v2/api/#provide-inject) \u7279\u6027\uFF0C\u53EA\u9700\u5728\u5E94\u7528\u5916\u56F4\u5305\u88F9\u4E00\u6B21\u5373\u53EF\u5168\u5C40\u751F\u6548\u3002"},{level:3,title:"Content Security Policy",slug:"Content-Security-Policy",content:"\u90E8\u5206\u7EC4\u4EF6\u4E3A\u4E86\u652F\u6301\u6CE2\u7EB9\u6548\u679C\uFF0C\u4F7F\u7528\u4E86\u52A8\u6001\u6837\u5F0F\u3002\u5982\u679C\u5F00\u542F\u4E86 Content Security Policy (CSP)\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7 `csp` \u5C5E\u6027\u6765\u8FDB\u884C\u914D\u7F6E\uFF1A"},{level:2,title:"API",slug:"API",content:""},{level:3,title:"ConfigProvider.config() 3.0.0+",slug:"ConfigProvider-config-3-0-0",content:"\u8BBE\u7F6E `Modal`\u3001`Message`\u3001`Notification` rootPrefixCls\u3002"},{level:2,title:"FAQ",slug:"FAQ",content:"\u4E3A\u4EC0\u4E48\u6211\u4F7F\u7528\u4E86 ConfigProvider `locale`\uFF0C\u65F6\u95F4\u7C7B\u7EC4\u4EF6\u7684\u56FD\u9645\u5316\u8FD8\u6709\u95EE\u9898\uFF1F"}],relativePath:"components/config-provider/index.zh-CN.md",content:`
\u4E3A\u7EC4\u4EF6\u63D0\u4F9B\u7EDF\u4E00\u7684\u5168\u5C40\u5316\u914D\u7F6E\u3002

## \u4F7F\u7528

ConfigProvider \u4F7F\u7528 Vue \u7684 [provide / inject](https://vuejs.org/v2/api/#provide-inject) \u7279\u6027\uFF0C\u53EA\u9700\u5728\u5E94\u7528\u5916\u56F4\u5305\u88F9\u4E00\u6B21\u5373\u53EF\u5168\u5C40\u751F\u6548\u3002

\`\`\`html
&lt;template&gt;
  &lt;a-config-provider :getPopupContainer=&quot;getPopupContainer&quot;&gt;
    &lt;app /&gt;
  &lt;/a-config-provider&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    methods: {
      getPopupContainer(el, dialogContext) {
        if (dialogContext) {
          return dialogContext.getDialogWrap();
        } else {
          return document.body;
        }
      },
    },
  };
&lt;/script&gt;
\`\`\`

### Content Security Policy

\u90E8\u5206\u7EC4\u4EF6\u4E3A\u4E86\u652F\u6301\u6CE2\u7EB9\u6548\u679C\uFF0C\u4F7F\u7528\u4E86\u52A8\u6001\u6837\u5F0F\u3002\u5982\u679C\u5F00\u542F\u4E86 Content Security Policy (CSP)\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7 \`csp\` \u5C5E\u6027\u6765\u8FDB\u884C\u914D\u7F6E\uFF1A

\`\`\`html
&lt;a-config-provider :csp=&quot;{ nonce: &#39;YourNonceCode&#39; }&quot;&gt;
  &lt;a-button&gt;My Button&lt;/a-button&gt;
&lt;/a-config-provider&gt;
\`\`\`

## API

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |
| --- | --- | --- | --- | --- | --- |
| autoInsertSpaceInButton | \u8BBE\u7F6E\u4E3A \`false\` \u65F6\uFF0C\u79FB\u9664\u6309\u94AE\u4E2D 2 \u4E2A\u6C49\u5B57\u4E4B\u95F4\u7684\u7A7A\u683C | boolean | true |  |
| csp | \u8BBE\u7F6E [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) \u914D\u7F6E | { nonce: string } | - |  |
| renderEmpty | \u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7A7A\u72B6\u6001\u3002\u53C2\u8003 [\u7A7A\u72B6\u6001](/components/empty/) | slot-scope \\| Function(componentName: string): VNode | - |  |
| getPopupContainer | \u5F39\u51FA\u6846\uFF08Select, Tooltip, Menu \u7B49\u7B49\uFF09\u6E32\u67D3\u7236\u8282\u70B9\uFF0C\u9ED8\u8BA4\u6E32\u67D3\u5230 body \u4E0A\u3002 | Function(triggerNode, dialogContext) | () =&gt; document.body |  |
| locale | \u8BED\u8A00\u5305\u914D\u7F6E\uFF0C\u8BED\u8A00\u5305\u53EF\u5230 [@fe6/water-pro/es/locale](http://unpkg.com/ant-design-vue/es/locale/) \u76EE\u5F55\u4E0B\u5BFB\u627E | object | - | 1.5.0 |
| pageHeader | \u7EDF\u4E00\u8BBE\u7F6E pageHeader \u7684 ghost\uFF0C\u53C2\u8003 [pageHeader](&lt;(/components/page-header)&gt;) | { ghost: boolean } | &#39;true&#39; | 1.5.0 |
| prefixCls | \u8BBE\u7F6E\u7EDF\u4E00\u6837\u5F0F\u524D\u7F00\u3002\u6CE8\u610F\uFF1A\u9700\u8981\u914D\u5408 \`less\` \u53D8\u91CF \`@ant-prefix\` \u4F7F\u7528 | string | \`ant\` |  |
| theme | \u7531\u4E8E\u4F7F\u7528 @fe6/icon-vue \uFF0C\u6240\u4EE5\u9700\u8981\u8BBE\u7F6E\u4E00\u4E0B | &#39;default&#39; | &#39;dark&#39; | \`default\` | 4.9.0 |
| transformCellText | Table \u6570\u636E\u6E32\u67D3\u524D\u53EF\u4EE5\u518D\u6B21\u6539\u53D8\uFF0C\u4E00\u822C\u7528\u6237\u7A7A\u6570\u636E\u7684\u9ED8\u8BA4\u914D\u7F6E | Function({ text, column, record, index }) =&gt; any | - | 1.5.4 \uFF5C |
| virtual | \u8BBE\u7F6E \`false\` \u65F6\u5173\u95ED\u865A\u62DF\u6EDA\u52A8 | boolean | - | 4.0.0 |

### ConfigProvider.config() \`3.0.0+\`

\u8BBE\u7F6E \`Modal\`\u3001\`Message\`\u3001\`Notification\` rootPrefixCls\u3002

\`\`\`jsx
ConfigProvider.config({
  prefixCls: &#39;ant&#39;,
});
\`\`\`

or

\`\`\`jsx
// \u5982\u4E0B\u914D\u7F6E\u652F\u6301\u54CD\u5E94\u5F0F\u6570\u636E\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7 prefixCls.value = &#39;other&#39; \u76F4\u63A5\u6539\u53D8
const prefixCls = ref(&#39;ant&#39;);
ConfigProvider.config({
  prefixCls,
});
\`\`\`

## FAQ

#### \u4E3A\u4EC0\u4E48\u6211\u4F7F\u7528\u4E86 ConfigProvider \`locale\`\uFF0C\u65F6\u95F4\u7C7B\u7EC4\u4EF6\u7684\u56FD\u9645\u5316\u8FD8\u6709\u95EE\u9898\uFF1F

\u8BF7\u68C0\u67E5\u662F\u5426\u8BBE\u7F6E\u4E86 \`dayjs.locale(&#39;zh-cn&#39;)\`\uFF0C\u6216\u8005\u662F\u5426\u6709\u4E24\u4E2A\u7248\u672C\u7684 dayjs \u5171\u5B58\u3002

#### \u914D\u7F6E \`getPopupContainer\` \u5BFC\u81F4 Modal \u62A5\u9519\uFF1F

\u5F53\u5982\u4E0B\u5168\u5C40\u8BBE\u7F6E \`getPopupContainer\` \u4E3A\u89E6\u53D1\u8282\u70B9\u7684 parentNode \u65F6\uFF0C\u7531\u4E8E Modal \u7684\u7528\u6CD5\u4E0D\u5B58\u5728 \`triggerNode\`\uFF0C\u8FD9\u6837\u4F1A\u5BFC\u81F4 \`triggerNode is undefined\` \u7684\u62A5\u9519\uFF0C\u9700\u8981\u589E\u52A0\u4E00\u4E2A\u5224\u65AD\u6761\u4EF6\u3002

\`\`\`diff
 &lt;ConfigProvider
-  getPopupContainer={triggerNode =&gt; triggerNode.parentNode}
+  getPopupContainer={node =&gt; {
+    if (node) {
+      return node.parentNode;
+    }
+    return document.body;
+  }}
 &gt;
   &lt;App /&gt;
 &lt;/ConfigProvider&gt;
\`\`\`
`,html:`<p>\u4E3A\u7EC4\u4EF6\u63D0\u4F9B\u7EDF\u4E00\u7684\u5168\u5C40\u5316\u914D\u7F6E\u3002</p>
<h2 id="\u4F7F\u7528">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>ConfigProvider \u4F7F\u7528 Vue \u7684 <a href="https://vuejs.org/v2/api/#provide-inject" target="_blank" rel="noopener noreferrer">provide / inject</a> \u7279\u6027\uFF0C\u53EA\u9700\u5728\u5E94\u7528\u5916\u56F4\u5305\u88F9\u4E00\u6B21\u5373\u53EF\u5168\u5C40\u751F\u6548\u3002</p>
<pre class="language-html" v-pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-config-provider</span> <span class="token attr-name">:getPopupContainer</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getPopupContainer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-config-provider</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    methods<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">getPopupContainer</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> dialogContext</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>dialogContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> dialogContext<span class="token punctuation">.</span><span class="token function">getDialogWrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> document<span class="token punctuation">.</span>body<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre>
<h3 id="Content-Security-Policy">Content Security Policy <a class="header-anchor" href="#Content-Security-Policy">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>\u90E8\u5206\u7EC4\u4EF6\u4E3A\u4E86\u652F\u6301\u6CE2\u7EB9\u6548\u679C\uFF0C\u4F7F\u7528\u4E86\u52A8\u6001\u6837\u5F0F\u3002\u5982\u679C\u5F00\u542F\u4E86 Content Security Policy (CSP)\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7 <code>csp</code> \u5C5E\u6027\u6765\u8FDB\u884C\u914D\u7F6E\uFF1A</p>
<pre class="language-html" v-pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-config-provider</span> <span class="token attr-name">:csp</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ nonce: <span class="token punctuation">'</span>YourNonceCode<span class="token punctuation">'</span> }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span><span class="token punctuation">></span></span>My Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-config-provider</span><span class="token punctuation">></span></span>
</code></pre>
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
<td>autoInsertSpaceInButton</td>
<td>\u8BBE\u7F6E\u4E3A <code>false</code> \u65F6\uFF0C\u79FB\u9664\u6309\u94AE\u4E2D 2 \u4E2A\u6C49\u5B57\u4E4B\u95F4\u7684\u7A7A\u683C</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>csp</td>
<td>\u8BBE\u7F6E <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP" target="_blank" rel="noopener noreferrer">Content Security Policy</a> \u914D\u7F6E</td>
<td>{ nonce: string }</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>renderEmpty</td>
<td>\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7A7A\u72B6\u6001\u3002\u53C2\u8003 <a href="/components/empty/">\u7A7A\u72B6\u6001</a></td>
<td>slot-scope | Function(componentName: string): VNode</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>getPopupContainer</td>
<td>\u5F39\u51FA\u6846\uFF08Select, Tooltip, Menu \u7B49\u7B49\uFF09\u6E32\u67D3\u7236\u8282\u70B9\uFF0C\u9ED8\u8BA4\u6E32\u67D3\u5230 body \u4E0A\u3002</td>
<td>Function(triggerNode, dialogContext)</td>
<td>() =&gt; document.body</td>
<td></td>
</tr>
<tr>
<td>locale</td>
<td>\u8BED\u8A00\u5305\u914D\u7F6E\uFF0C\u8BED\u8A00\u5305\u53EF\u5230 <a href="http://unpkg.com/ant-design-vue/es/locale/" target="_blank" rel="noopener noreferrer">@fe6/water-pro/es/locale</a> \u76EE\u5F55\u4E0B\u5BFB\u627E</td>
<td>object</td>
<td>-</td>
<td>1.5.0</td>
</tr>
<tr>
<td>pageHeader</td>
<td>\u7EDF\u4E00\u8BBE\u7F6E pageHeader \u7684 ghost\uFF0C\u53C2\u8003 <a href="./(/components/page-header).html">pageHeader</a></td>
<td>{ ghost: boolean }</td>
<td>'true'</td>
<td>1.5.0</td>
</tr>
<tr>
<td>prefixCls</td>
<td>\u8BBE\u7F6E\u7EDF\u4E00\u6837\u5F0F\u524D\u7F00\u3002\u6CE8\u610F\uFF1A\u9700\u8981\u914D\u5408 <code>less</code> \u53D8\u91CF <code>@ant-prefix</code> \u4F7F\u7528</td>
<td>string</td>
<td><code>ant</code></td>
<td></td>
</tr>
<tr>
<td>theme</td>
<td>\u7531\u4E8E\u4F7F\u7528 @fe6/icon-vue \uFF0C\u6240\u4EE5\u9700\u8981\u8BBE\u7F6E\u4E00\u4E0B</td>
<td>'default'</td>
<td>'dark'</td>
<td><code>default</code></td>
</tr>
<tr>
<td>transformCellText</td>
<td>Table \u6570\u636E\u6E32\u67D3\u524D\u53EF\u4EE5\u518D\u6B21\u6539\u53D8\uFF0C\u4E00\u822C\u7528\u6237\u7A7A\u6570\u636E\u7684\u9ED8\u8BA4\u914D\u7F6E</td>
<td>Function({ text, column, record, index }) =&gt; any</td>
<td>-</td>
<td>1.5.4 \uFF5C</td>
</tr>
<tr>
<td>virtual</td>
<td>\u8BBE\u7F6E <code>false</code> \u65F6\u5173\u95ED\u865A\u62DF\u6EDA\u52A8</td>
<td>boolean</td>
<td>-</td>
<td>4.0.0</td>
</tr>
</tbody>
</table>
<h3 id="ConfigProvider-config-3-0-0">ConfigProvider.config() <code>3.0.0+</code> <a class="header-anchor" href="#ConfigProvider-config-3-0-0">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>\u8BBE\u7F6E <code>Modal</code>\u3001<code>Message</code>\u3001<code>Notification</code> rootPrefixCls\u3002</p>
<pre class="language-jsx" v-pre><code>ConfigProvider<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  prefixCls<span class="token operator">:</span> <span class="token string">'ant'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>or</p>
<pre class="language-jsx" v-pre><code><span class="token comment">// \u5982\u4E0B\u914D\u7F6E\u652F\u6301\u54CD\u5E94\u5F0F\u6570\u636E\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7 prefixCls.value = 'other' \u76F4\u63A5\u6539\u53D8</span>
<span class="token keyword">const</span> prefixCls <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'ant'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ConfigProvider<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  prefixCls<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<h4 id="\u4E3A\u4EC0\u4E48\u6211\u4F7F\u7528\u4E86-ConfigProvider-locale\uFF0C\u65F6\u95F4\u7C7B\u7EC4\u4EF6\u7684\u56FD\u9645\u5316\u8FD8\u6709\u95EE\u9898\uFF1F">\u4E3A\u4EC0\u4E48\u6211\u4F7F\u7528\u4E86 ConfigProvider <code>locale</code>\uFF0C\u65F6\u95F4\u7C7B\u7EC4\u4EF6\u7684\u56FD\u9645\u5316\u8FD8\u6709\u95EE\u9898\uFF1F <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u6211\u4F7F\u7528\u4E86-ConfigProvider-locale\uFF0C\u65F6\u95F4\u7C7B\u7EC4\u4EF6\u7684\u56FD\u9645\u5316\u8FD8\u6709\u95EE\u9898\uFF1F">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h4>
<p>\u8BF7\u68C0\u67E5\u662F\u5426\u8BBE\u7F6E\u4E86 <code>dayjs.locale('zh-cn')</code>\uFF0C\u6216\u8005\u662F\u5426\u6709\u4E24\u4E2A\u7248\u672C\u7684 dayjs \u5171\u5B58\u3002</p>
<h4 id="\u914D\u7F6E-getPopupContainer-\u5BFC\u81F4-Modal-\u62A5\u9519\uFF1F">\u914D\u7F6E <code>getPopupContainer</code> \u5BFC\u81F4 Modal \u62A5\u9519\uFF1F <a class="header-anchor" href="#\u914D\u7F6E-getPopupContainer-\u5BFC\u81F4-Modal-\u62A5\u9519\uFF1F">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h4>
<p>\u5F53\u5982\u4E0B\u5168\u5C40\u8BBE\u7F6E <code>getPopupContainer</code> \u4E3A\u89E6\u53D1\u8282\u70B9\u7684 parentNode \u65F6\uFF0C\u7531\u4E8E Modal \u7684\u7528\u6CD5\u4E0D\u5B58\u5728 <code>triggerNode</code>\uFF0C\u8FD9\u6837\u4F1A\u5BFC\u81F4 <code>triggerNode is undefined</code> \u7684\u62A5\u9519\uFF0C\u9700\u8981\u589E\u52A0\u4E00\u4E2A\u5224\u65AD\u6761\u4EF6\u3002</p>
<pre class="language-diff" v-pre><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">&lt;ConfigProvider
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">  getPopupContainer={triggerNode => triggerNode.parentNode}
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  getPopupContainer={node => {
</span><span class="token prefix inserted">+</span><span class="token line">    if (node) {
</span><span class="token prefix inserted">+</span><span class="token line">      return node.parentNode;
</span><span class="token prefix inserted">+</span><span class="token line">    }
</span><span class="token prefix inserted">+</span><span class="token line">    return document.body;
</span><span class="token prefix inserted">+</span><span class="token line">  }}
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">>
</span><span class="token prefix unchanged"> </span><span class="token line">  &lt;App />
</span><span class="token prefix unchanged"> </span><span class="token line">&lt;/ConfigProvider>
</span></span></code></pre>
`,lastUpdated:1701878243717}},mn={class:"markdown"},fn=x(`<p>\u4E3A\u7EC4\u4EF6\u63D0\u4F9B\u7EDF\u4E00\u7684\u5168\u5C40\u5316\u914D\u7F6E\u3002</p><h2 id="\u4F7F\u7528">\u4F7F\u7528 <a class="header-anchor" href="#\u4F7F\u7528"><span aria-hidden="true" class="anchor">#</span></a></h2><p>ConfigProvider \u4F7F\u7528 Vue \u7684 <a href="https://vuejs.org/v2/api/#provide-inject" target="_blank" rel="noopener noreferrer">provide / inject</a> \u7279\u6027\uFF0C\u53EA\u9700\u5728\u5E94\u7528\u5916\u56F4\u5305\u88F9\u4E00\u6B21\u5373\u53EF\u5168\u5C40\u751F\u6548\u3002</p><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-config-provider</span> <span class="token attr-name">:getPopupContainer</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getPopupContainer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-config-provider</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    methods<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">getPopupContainer</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> dialogContext</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>dialogContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> dialogContext<span class="token punctuation">.</span><span class="token function">getDialogWrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> document<span class="token punctuation">.</span>body<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="Content-Security-Policy">Content Security Policy <a class="header-anchor" href="#Content-Security-Policy"><span aria-hidden="true" class="anchor">#</span></a></h3><p>\u90E8\u5206\u7EC4\u4EF6\u4E3A\u4E86\u652F\u6301\u6CE2\u7EB9\u6548\u679C\uFF0C\u4F7F\u7528\u4E86\u52A8\u6001\u6837\u5F0F\u3002\u5982\u679C\u5F00\u542F\u4E86 Content Security Policy (CSP)\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7 <code>csp</code> \u5C5E\u6027\u6765\u8FDB\u884C\u914D\u7F6E\uFF1A</p><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-config-provider</span> <span class="token attr-name">:csp</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ nonce: <span class="token punctuation">&#39;</span>YourNonceCode<span class="token punctuation">&#39;</span> }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span><span class="token punctuation">&gt;</span></span>My Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-config-provider</span><span class="token punctuation">&gt;</span></span>
</code></pre><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>autoInsertSpaceInButton</td><td>\u8BBE\u7F6E\u4E3A <code>false</code> \u65F6\uFF0C\u79FB\u9664\u6309\u94AE\u4E2D 2 \u4E2A\u6C49\u5B57\u4E4B\u95F4\u7684\u7A7A\u683C</td><td>boolean</td><td>true</td><td></td></tr><tr><td>csp</td><td>\u8BBE\u7F6E <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP" target="_blank" rel="noopener noreferrer">Content Security Policy</a> \u914D\u7F6E</td><td>{ nonce: string }</td><td>-</td><td></td></tr><tr><td>renderEmpty</td><td>\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u7A7A\u72B6\u6001\u3002\u53C2\u8003 <a href="/components/empty/">\u7A7A\u72B6\u6001</a></td><td>slot-scope | Function(componentName: string): VNode</td><td>-</td><td></td></tr><tr><td>getPopupContainer</td><td>\u5F39\u51FA\u6846\uFF08Select, Tooltip, Menu \u7B49\u7B49\uFF09\u6E32\u67D3\u7236\u8282\u70B9\uFF0C\u9ED8\u8BA4\u6E32\u67D3\u5230 body \u4E0A\u3002</td><td>Function(triggerNode, dialogContext)</td><td>() =&gt; document.body</td><td></td></tr><tr><td>locale</td><td>\u8BED\u8A00\u5305\u914D\u7F6E\uFF0C\u8BED\u8A00\u5305\u53EF\u5230 <a href="http://unpkg.com/ant-design-vue/es/locale/" target="_blank" rel="noopener noreferrer">@fe6/water-pro/es/locale</a> \u76EE\u5F55\u4E0B\u5BFB\u627E</td><td>object</td><td>-</td><td>1.5.0</td></tr><tr><td>pageHeader</td><td>\u7EDF\u4E00\u8BBE\u7F6E pageHeader \u7684 ghost\uFF0C\u53C2\u8003 <a href="./(/components/page-header).html">pageHeader</a></td><td>{ ghost: boolean }</td><td>&#39;true&#39;</td><td>1.5.0</td></tr><tr><td>prefixCls</td><td>\u8BBE\u7F6E\u7EDF\u4E00\u6837\u5F0F\u524D\u7F00\u3002\u6CE8\u610F\uFF1A\u9700\u8981\u914D\u5408 <code>less</code> \u53D8\u91CF <code>@ant-prefix</code> \u4F7F\u7528</td><td>string</td><td><code>ant</code></td><td></td></tr><tr><td>theme</td><td>\u7531\u4E8E\u4F7F\u7528 @fe6/icon-vue \uFF0C\u6240\u4EE5\u9700\u8981\u8BBE\u7F6E\u4E00\u4E0B</td><td>&#39;default&#39;</td><td>&#39;dark&#39;</td><td><code>default</code></td></tr><tr><td>transformCellText</td><td>Table \u6570\u636E\u6E32\u67D3\u524D\u53EF\u4EE5\u518D\u6B21\u6539\u53D8\uFF0C\u4E00\u822C\u7528\u6237\u7A7A\u6570\u636E\u7684\u9ED8\u8BA4\u914D\u7F6E</td><td>Function({ text, column, record, index }) =&gt; any</td><td>-</td><td>1.5.4 \uFF5C</td></tr><tr><td>virtual</td><td>\u8BBE\u7F6E <code>false</code> \u65F6\u5173\u95ED\u865A\u62DF\u6EDA\u52A8</td><td>boolean</td><td>-</td><td>4.0.0</td></tr></tbody></table><h3 id="ConfigProvider-config-3-0-0">ConfigProvider.config() <code>3.0.0+</code> <a class="header-anchor" href="#ConfigProvider-config-3-0-0"><span aria-hidden="true" class="anchor">#</span></a></h3><p>\u8BBE\u7F6E <code>Modal</code>\u3001<code>Message</code>\u3001<code>Notification</code> rootPrefixCls\u3002</p><pre class="language-jsx"><code>ConfigProvider<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  prefixCls<span class="token operator">:</span> <span class="token string">&#39;ant&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>or</p><pre class="language-jsx"><code><span class="token comment">// \u5982\u4E0B\u914D\u7F6E\u652F\u6301\u54CD\u5E94\u5F0F\u6570\u636E\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7 prefixCls.value = &#39;other&#39; \u76F4\u63A5\u6539\u53D8</span>
<span class="token keyword">const</span> prefixCls <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;ant&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ConfigProvider<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  prefixCls<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ"><span aria-hidden="true" class="anchor">#</span></a></h2><h4 id="\u4E3A\u4EC0\u4E48\u6211\u4F7F\u7528\u4E86-ConfigProvider-locale\uFF0C\u65F6\u95F4\u7C7B\u7EC4\u4EF6\u7684\u56FD\u9645\u5316\u8FD8\u6709\u95EE\u9898\uFF1F">\u4E3A\u4EC0\u4E48\u6211\u4F7F\u7528\u4E86 ConfigProvider <code>locale</code>\uFF0C\u65F6\u95F4\u7C7B\u7EC4\u4EF6\u7684\u56FD\u9645\u5316\u8FD8\u6709\u95EE\u9898\uFF1F <a class="header-anchor" href="#\u4E3A\u4EC0\u4E48\u6211\u4F7F\u7528\u4E86-ConfigProvider-locale\uFF0C\u65F6\u95F4\u7C7B\u7EC4\u4EF6\u7684\u56FD\u9645\u5316\u8FD8\u6709\u95EE\u9898\uFF1F"><span aria-hidden="true" class="anchor">#</span></a></h4><p>\u8BF7\u68C0\u67E5\u662F\u5426\u8BBE\u7F6E\u4E86 <code>dayjs.locale(&#39;zh-cn&#39;)</code>\uFF0C\u6216\u8005\u662F\u5426\u6709\u4E24\u4E2A\u7248\u672C\u7684 dayjs \u5171\u5B58\u3002</p><h4 id="\u914D\u7F6E-getPopupContainer-\u5BFC\u81F4-Modal-\u62A5\u9519\uFF1F">\u914D\u7F6E <code>getPopupContainer</code> \u5BFC\u81F4 Modal \u62A5\u9519\uFF1F <a class="header-anchor" href="#\u914D\u7F6E-getPopupContainer-\u5BFC\u81F4-Modal-\u62A5\u9519\uFF1F"><span aria-hidden="true" class="anchor">#</span></a></h4><p>\u5F53\u5982\u4E0B\u5168\u5C40\u8BBE\u7F6E <code>getPopupContainer</code> \u4E3A\u89E6\u53D1\u8282\u70B9\u7684 parentNode \u65F6\uFF0C\u7531\u4E8E Modal \u7684\u7528\u6CD5\u4E0D\u5B58\u5728 <code>triggerNode</code>\uFF0C\u8FD9\u6837\u4F1A\u5BFC\u81F4 <code>triggerNode is undefined</code> \u7684\u62A5\u9519\uFF0C\u9700\u8981\u589E\u52A0\u4E00\u4E2A\u5224\u65AD\u6761\u4EF6\u3002</p><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">&lt;ConfigProvider
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">  getPopupContainer={triggerNode =&gt; triggerNode.parentNode}
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  getPopupContainer={node =&gt; {
</span><span class="token prefix inserted">+</span><span class="token line">    if (node) {
</span><span class="token prefix inserted">+</span><span class="token line">      return node.parentNode;
</span><span class="token prefix inserted">+</span><span class="token line">    }
</span><span class="token prefix inserted">+</span><span class="token line">    return document.body;
</span><span class="token prefix inserted">+</span><span class="token line">  }}
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">&gt;
</span><span class="token prefix unchanged"> </span><span class="token line">  &lt;App /&gt;
</span><span class="token prefix unchanged"> </span><span class="token line">&lt;/ConfigProvider&gt;
</span></span></code></pre>`,20),vn=[fn];function bn(s,p,k,d,c,i){return C(),w("article",mn,vn)}var An=g(In,[["render",bn]]);const yn={pageData:{title:"ConfigProvider",description:"",frontmatter:{category:"Components",type:"Other",cols:1,title:"ConfigProvider",cover:"https://gw.alipayobjects.com/zos/alicdn/kegYxl1wj/ConfigProvider.svg"},headers:[{level:2,title:"Usage",slug:"Usage",content:"This component provides a configuration to all Vue components underneath itself via the [provide / inject](https://vuejs.org/v2/api/#provide-inject), In the render tree all components will have access to the provided config."},{level:3,title:"Content Security Policy",slug:"Content-Security-Policy",content:"Some components use dynamic style to support wave effect. You can config `csp` prop if Content Security Policy (CSP) is enabled:"},{level:2,title:"API",slug:"API",content:""},{level:3,title:"ConfigProvider.config() 3.0.0+",slug:"ConfigProvider-config-3-0-0",content:"Setting `Modal`\u3001`Message`\u3001`Notification` rootPrefixCls."},{level:2,title:"FAQ",slug:"FAQ",content:"Does the locale problem still exist in DatePicker even if ConfigProvider `locale` is used?"}],relativePath:"components/config-provider/index.en-US.md",content:`
\`ConfigProvider\` provides a uniform configuration support for components.

## Usage

This component provides a configuration to all Vue components underneath itself via the [provide / inject](https://vuejs.org/v2/api/#provide-inject), In the render tree all components will have access to the provided config.

\`\`\`html
&lt;template&gt;
  &lt;a-config-provider :getPopupContainer=&quot;getPopupContainer&quot;&gt;
    &lt;app /&gt;
  &lt;/a-config-provider&gt;
&lt;/template&gt;
&lt;script&gt;
  export default {
    methods: {
      getPopupContainer(el, dialogContext) {
        if (dialogContext) {
          return dialogContext.getDialogWrap();
        } else {
          return document.body;
        }
      },
    },
  };
&lt;/script&gt;
\`\`\`

### Content Security Policy

Some components use dynamic style to support wave effect. You can config \`csp\` prop if Content Security Policy (CSP) is enabled:

\`\`\`html
&lt;a-config-provider :csp=&quot;{ nonce: &#39;YourNonceCode&#39; }&quot;&gt;
  &lt;a-button&gt;My Button&lt;/a-button&gt;
&lt;/a-config-provider&gt;
\`\`\`

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| autoInsertSpaceInButton | Set \`false\` to remove space between 2 chinese characters on Button | boolean | true |  |
| csp | Set [Content Security Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) config | { nonce: string } | - |  |
| renderEmpty | set empty content of components. Ref [Empty](/components/empty/) | slot-scope \\| Function(componentName: string): ReactNode | - |  |
| getPopupContainer | to set the container of the popup element. The default is to create a \`div\` element in \`body\`. | Function(triggerNode, dialogContext) | \`() =&gt; document.body\` |  |
| locale | language package setting, you can find the packages in [@fe6/water-pro/es/locale](http://unpkg.com/ant-design-vue/es/locale/) | object | - | 1.5.0 |
| prefixCls | set prefix class | string | ant |  |
| pageHeader | Unify the ghost of pageHeader ,Ref [pageHeader](&lt;(/components/page-header)&gt; | { ghost:boolean } | &#39;true&#39; | 1.5.0 |
| transformCellText | Table data can be changed again before rendering. The default configuration of general user empty data. | Function({ text, column, record, index }) =&gt; any | - | 1.5.4 \uFF5C |
| virtual | Disable virtual scroll when set to false | boolean | true | 4.0.0 |

### ConfigProvider.config() \`3.0.0+\`

Setting \`Modal\`\u3001\`Message\`\u3001\`Notification\` rootPrefixCls.

\`\`\`jsx
ConfigProvider.config({
  prefixCls: &#39;ant&#39;,
});
\`\`\`

or

\`\`\`jsx
// some cinfig support reactively, you can change prefixCls.value = &#39;other&#39;
const prefixCls = ref(&#39;ant&#39;);
ConfigProvider.config({
  prefixCls,
});
\`\`\`

## FAQ

#### Does the locale problem still exist in DatePicker even if ConfigProvider \`locale\` is used?

Please make sure you set dayjs locale by \`dayjs.locale(&#39;zh-cn&#39;)\` or that you don&#39;t have two different versions of dayjs.

#### Modal throw error when setting \`getPopupContainer\`?

When you config \`getPopupContainer\` to parentNode globally, Modal will throw error of \`triggerNode is undefined\` because it did not have a triggerNode.

\`\`\`diff
 &lt;ConfigProvider
-  getPopupContainer={triggerNode =&gt; triggerNode.parentNode}
+  getPopupContainer={node =&gt; {
+    if (node) {
+      return node.parentNode;
+    }
+    return document.body;
+  }}
 &gt;
   &lt;App /&gt;
 &lt;/ConfigProvider&gt;
\`\`\`
`,html:`<p><code>ConfigProvider</code> provides a uniform configuration support for components.</p>
<h2 id="Usage">Usage <a class="header-anchor" href="#Usage">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>This component provides a configuration to all Vue components underneath itself via the <a href="https://vuejs.org/v2/api/#provide-inject" target="_blank" rel="noopener noreferrer">provide / inject</a>, In the render tree all components will have access to the provided config.</p>
<pre class="language-html" v-pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-config-provider</span> <span class="token attr-name">:getPopupContainer</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getPopupContainer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-config-provider</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    methods<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">getPopupContainer</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> dialogContext</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>dialogContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> dialogContext<span class="token punctuation">.</span><span class="token function">getDialogWrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> document<span class="token punctuation">.</span>body<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
</code></pre>
<h3 id="Content-Security-Policy">Content Security Policy <a class="header-anchor" href="#Content-Security-Policy">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>Some components use dynamic style to support wave effect. You can config <code>csp</code> prop if Content Security Policy (CSP) is enabled:</p>
<pre class="language-html" v-pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-config-provider</span> <span class="token attr-name">:csp</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>{ nonce: <span class="token punctuation">'</span>YourNonceCode<span class="token punctuation">'</span> }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span><span class="token punctuation">></span></span>My Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-config-provider</span><span class="token punctuation">></span></span>
</code></pre>
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
<td>autoInsertSpaceInButton</td>
<td>Set <code>false</code> to remove space between 2 chinese characters on Button</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>csp</td>
<td>Set <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP" target="_blank" rel="noopener noreferrer">Content Security Policy</a> config</td>
<td>{ nonce: string }</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>renderEmpty</td>
<td>set empty content of components. Ref <a href="/components/empty/">Empty</a></td>
<td>slot-scope | Function(componentName: string): ReactNode</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>getPopupContainer</td>
<td>to set the container of the popup element. The default is to create a <code>div</code> element in <code>body</code>.</td>
<td>Function(triggerNode, dialogContext)</td>
<td><code>() =&gt; document.body</code></td>
<td></td>
</tr>
<tr>
<td>locale</td>
<td>language package setting, you can find the packages in <a href="http://unpkg.com/ant-design-vue/es/locale/" target="_blank" rel="noopener noreferrer">@fe6/water-pro/es/locale</a></td>
<td>object</td>
<td>-</td>
<td>1.5.0</td>
</tr>
<tr>
<td>prefixCls</td>
<td>set prefix class</td>
<td>string</td>
<td>ant</td>
<td></td>
</tr>
<tr>
<td>pageHeader</td>
<td>Unify the ghost of pageHeader ,Ref [pageHeader](&lt;(/components/page-header)&gt;</td>
<td>{ ghost:boolean }</td>
<td>'true'</td>
<td>1.5.0</td>
</tr>
<tr>
<td>transformCellText</td>
<td>Table data can be changed again before rendering. The default configuration of general user empty data.</td>
<td>Function({ text, column, record, index }) =&gt; any</td>
<td>-</td>
<td>1.5.4 \uFF5C</td>
</tr>
<tr>
<td>virtual</td>
<td>Disable virtual scroll when set to false</td>
<td>boolean</td>
<td>true</td>
<td>4.0.0</td>
</tr>
</tbody>
</table>
<h3 id="ConfigProvider-config-3-0-0">ConfigProvider.config() <code>3.0.0+</code> <a class="header-anchor" href="#ConfigProvider-config-3-0-0">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<p>Setting <code>Modal</code>\u3001<code>Message</code>\u3001<code>Notification</code> rootPrefixCls.</p>
<pre class="language-jsx" v-pre><code>ConfigProvider<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  prefixCls<span class="token operator">:</span> <span class="token string">'ant'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<p>or</p>
<pre class="language-jsx" v-pre><code><span class="token comment">// some cinfig support reactively, you can change prefixCls.value = 'other'</span>
<span class="token keyword">const</span> prefixCls <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">'ant'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ConfigProvider<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  prefixCls<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<h4 id="Does-the-locale-problem-still-exist-in-DatePicker-even-if-ConfigProvider-locale-is-used">Does the locale problem still exist in DatePicker even if ConfigProvider <code>locale</code> is used? <a class="header-anchor" href="#Does-the-locale-problem-still-exist-in-DatePicker-even-if-ConfigProvider-locale-is-used">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h4>
<p>Please make sure you set dayjs locale by <code>dayjs.locale('zh-cn')</code> or that you don't have two different versions of dayjs.</p>
<h4 id="Modal-throw-error-when-setting-getPopupContainer">Modal throw error when setting <code>getPopupContainer</code>? <a class="header-anchor" href="#Modal-throw-error-when-setting-getPopupContainer">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h4>
<p>When you config <code>getPopupContainer</code> to parentNode globally, Modal will throw error of <code>triggerNode is undefined</code> because it did not have a triggerNode.</p>
<pre class="language-diff" v-pre><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">&lt;ConfigProvider
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">  getPopupContainer={triggerNode => triggerNode.parentNode}
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  getPopupContainer={node => {
</span><span class="token prefix inserted">+</span><span class="token line">    if (node) {
</span><span class="token prefix inserted">+</span><span class="token line">      return node.parentNode;
</span><span class="token prefix inserted">+</span><span class="token line">    }
</span><span class="token prefix inserted">+</span><span class="token line">    return document.body;
</span><span class="token prefix inserted">+</span><span class="token line">  }}
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">>
</span><span class="token prefix unchanged"> </span><span class="token line">  &lt;App />
</span><span class="token prefix unchanged"> </span><span class="token line">&lt;/ConfigProvider>
</span></span></code></pre>
`,lastUpdated:1701878243717}},Pn={class:"markdown"},wn=x(`<p><code>ConfigProvider</code> provides a uniform configuration support for components.</p><h2 id="Usage">Usage <a class="header-anchor" href="#Usage"><span aria-hidden="true" class="anchor">#</span></a></h2><p>This component provides a configuration to all Vue components underneath itself via the <a href="https://vuejs.org/v2/api/#provide-inject" target="_blank" rel="noopener noreferrer">provide / inject</a>, In the render tree all components will have access to the provided config.</p><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-config-provider</span> <span class="token attr-name">:getPopupContainer</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>getPopupContainer<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>app</span> <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-config-provider</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
  <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    methods<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token function">getPopupContainer</span><span class="token punctuation">(</span><span class="token parameter">el<span class="token punctuation">,</span> dialogContext</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>dialogContext<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> dialogContext<span class="token punctuation">.</span><span class="token function">getDialogWrap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          <span class="token keyword">return</span> document<span class="token punctuation">.</span>body<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><h3 id="Content-Security-Policy">Content Security Policy <a class="header-anchor" href="#Content-Security-Policy"><span aria-hidden="true" class="anchor">#</span></a></h3><p>Some components use dynamic style to support wave effect. You can config <code>csp</code> prop if Content Security Policy (CSP) is enabled:</p><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-config-provider</span> <span class="token attr-name">:csp</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{ nonce: <span class="token punctuation">&#39;</span>YourNonceCode<span class="token punctuation">&#39;</span> }<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a-button</span><span class="token punctuation">&gt;</span></span>My Button<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-button</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a-config-provider</span><span class="token punctuation">&gt;</span></span>
</code></pre><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>autoInsertSpaceInButton</td><td>Set <code>false</code> to remove space between 2 chinese characters on Button</td><td>boolean</td><td>true</td><td></td></tr><tr><td>csp</td><td>Set <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP" target="_blank" rel="noopener noreferrer">Content Security Policy</a> config</td><td>{ nonce: string }</td><td>-</td><td></td></tr><tr><td>renderEmpty</td><td>set empty content of components. Ref <a href="/components/empty/">Empty</a></td><td>slot-scope | Function(componentName: string): ReactNode</td><td>-</td><td></td></tr><tr><td>getPopupContainer</td><td>to set the container of the popup element. The default is to create a <code>div</code> element in <code>body</code>.</td><td>Function(triggerNode, dialogContext)</td><td><code>() =&gt; document.body</code></td><td></td></tr><tr><td>locale</td><td>language package setting, you can find the packages in <a href="http://unpkg.com/ant-design-vue/es/locale/" target="_blank" rel="noopener noreferrer">@fe6/water-pro/es/locale</a></td><td>object</td><td>-</td><td>1.5.0</td></tr><tr><td>prefixCls</td><td>set prefix class</td><td>string</td><td>ant</td><td></td></tr><tr><td>pageHeader</td><td>Unify the ghost of pageHeader ,Ref [pageHeader](&lt;(/components/page-header)&gt;</td><td>{ ghost:boolean }</td><td>&#39;true&#39;</td><td>1.5.0</td></tr><tr><td>transformCellText</td><td>Table data can be changed again before rendering. The default configuration of general user empty data.</td><td>Function({ text, column, record, index }) =&gt; any</td><td>-</td><td>1.5.4 \uFF5C</td></tr><tr><td>virtual</td><td>Disable virtual scroll when set to false</td><td>boolean</td><td>true</td><td>4.0.0</td></tr></tbody></table><h3 id="ConfigProvider-config-3-0-0">ConfigProvider.config() <code>3.0.0+</code> <a class="header-anchor" href="#ConfigProvider-config-3-0-0"><span aria-hidden="true" class="anchor">#</span></a></h3><p>Setting <code>Modal</code>\u3001<code>Message</code>\u3001<code>Notification</code> rootPrefixCls.</p><pre class="language-jsx"><code>ConfigProvider<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  prefixCls<span class="token operator">:</span> <span class="token string">&#39;ant&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><p>or</p><pre class="language-jsx"><code><span class="token comment">// some cinfig support reactively, you can change prefixCls.value = &#39;other&#39;</span>
<span class="token keyword">const</span> prefixCls <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token string">&#39;ant&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
ConfigProvider<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  prefixCls<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><h2 id="FAQ">FAQ <a class="header-anchor" href="#FAQ"><span aria-hidden="true" class="anchor">#</span></a></h2><h4 id="Does-the-locale-problem-still-exist-in-DatePicker-even-if-ConfigProvider-locale-is-used">Does the locale problem still exist in DatePicker even if ConfigProvider <code>locale</code> is used? <a class="header-anchor" href="#Does-the-locale-problem-still-exist-in-DatePicker-even-if-ConfigProvider-locale-is-used"><span aria-hidden="true" class="anchor">#</span></a></h4><p>Please make sure you set dayjs locale by <code>dayjs.locale(&#39;zh-cn&#39;)</code> or that you don&#39;t have two different versions of dayjs.</p><h4 id="Modal-throw-error-when-setting-getPopupContainer">Modal throw error when setting <code>getPopupContainer</code>? <a class="header-anchor" href="#Modal-throw-error-when-setting-getPopupContainer"><span aria-hidden="true" class="anchor">#</span></a></h4><p>When you config <code>getPopupContainer</code> to parentNode globally, Modal will throw error of <code>triggerNode is undefined</code> because it did not have a triggerNode.</p><pre class="language-diff"><code><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">&lt;ConfigProvider
</span></span><span class="token deleted-sign deleted"><span class="token prefix deleted">-</span><span class="token line">  getPopupContainer={triggerNode =&gt; triggerNode.parentNode}
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">  getPopupContainer={node =&gt; {
</span><span class="token prefix inserted">+</span><span class="token line">    if (node) {
</span><span class="token prefix inserted">+</span><span class="token line">      return node.parentNode;
</span><span class="token prefix inserted">+</span><span class="token line">    }
</span><span class="token prefix inserted">+</span><span class="token line">    return document.body;
</span><span class="token prefix inserted">+</span><span class="token line">  }}
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">&gt;
</span><span class="token prefix unchanged"> </span><span class="token line">  &lt;App /&gt;
</span><span class="token prefix unchanged"> </span><span class="token line">&lt;/ConfigProvider&gt;
</span></span></code></pre>`,20),xn=[wn];function Zn(s,p,k,d,c,i){return C(),w("article",Pn,xn)}var Gn=g(yn,[["render",Zn]]);const Wn=A({CN:An,US:Gn,components:{Locale:hn}});function Nn(s,p,k,d,c,i){const l=o("Locale"),h=o("demo-sort");return C(),P(h,{cols:1},{default:e(()=>[t(l)]),_:1})}var jn=g(Wn,[["render",Nn]]);export{jn as default};

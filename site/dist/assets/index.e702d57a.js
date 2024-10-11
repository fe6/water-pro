var w=Object.defineProperty;var f=Object.getOwnPropertySymbols;var _=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable;var v=(a,s,e)=>s in a?w(a,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[s]=e,h=(a,s)=>{for(var e in s||(s={}))_.call(s,e)&&v(a,e,s[e]);if(f)for(var e of f(s))Z.call(s,e)&&v(a,e,s[e]);return a};import{d as C,az as G,aq as d,J as g,bN as I,bO as i,e as o,G as t,H as n,r as x,k as F,E as A,cb as B}from"./vendor.0f0e4632.js";import{_ as m}from"./index.f6b32fa6.js";const W=C({setup(){const a=[];for(let s=0;s<1e3;s+=1)a.push({id:String(s)});return{data:a,theChildren:s=>G("div",s.id)}}}),H=t("pre",{class:"language-vue"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-container-list")]),n(`
    `),t("span",{class:"token attr-name"},"id"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("basic"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":height"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("200"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":itemHeight"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("20"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"itemKey"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("id"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n(`{
      border: `),t("span",{class:"token punctuation"},"'"),n("1px solid red"),t("span",{class:"token punctuation"},"'"),n(`,
      boxSizing: `),t("span",{class:"token punctuation"},"'"),n("border-box"),t("span",{class:"token punctuation"},"'"),n(`,
    }`),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":children"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("theChildren"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-container-list")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" h "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" data "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"for"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),n(" i "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(" i "),t("span",{class:"token operator"},"<"),n(),t("span",{class:"token number"},"1000"),t("span",{class:"token punctuation"},";"),n(" i "),t("span",{class:"token operator"},"+="),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
      data`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
        id`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token function"},"String"),t("span",{class:"token punctuation"},"("),n("i"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      data`),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token function-variable function"},"theChildren"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[n("item"),t("span",{class:"token operator"},":"),n(" any")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token function"},"h"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'div'"),t("span",{class:"token punctuation"},","),n(" item"),t("span",{class:"token punctuation"},"."),n("id"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),P=t("pre",{class:"language-vue"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-container-list")]),n(`
    `),t("span",{class:"token attr-name"},"id"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("basic"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":data"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("data"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":height"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("200"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":itemHeight"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("20"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"itemKey"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("id"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n(`{
      border: `),t("span",{class:"token punctuation"},"'"),n("1px solid red"),t("span",{class:"token punctuation"},"'"),n(`,
      boxSizing: `),t("span",{class:"token punctuation"},"'"),n("border-box"),t("span",{class:"token punctuation"},"'"),n(`,
    }`),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":children"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("theChildren"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-container-list")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" h "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" data "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),n(`

    `),t("span",{class:"token keyword"},"for"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),n(" i "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),n(" i "),t("span",{class:"token operator"},"<"),n(),t("span",{class:"token number"},"1000"),t("span",{class:"token punctuation"},";"),n(" i "),t("span",{class:"token operator"},"+="),n(),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
      data`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
        id`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token function"},"String"),t("span",{class:"token punctuation"},"("),n("i"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token punctuation"},"}"),n(`

    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      data`),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token function-variable function"},"theChildren"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token parameter"},"item"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token function"},"h"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'div'"),t("span",{class:"token punctuation"},","),n(" item"),t("span",{class:"token punctuation"},"."),n("id"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`

`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1);function V(a,s,e,c,l,u){const r=d("a-container-list"),k=d("demo-box");return g(),I(k,{jsfiddle:{us:"Basic.",cn:"\u57FA\u672C\u7528\u6CD5\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u57FA\u672C\u7528\u6CD5\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Basic.</p>
`,order:0,title:{"zh-CN":"\u57FA\u672C","en-US":"Basic"},relativePath:"components/container-list/demo/basic.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLWNvbnRhaW5lci1saXN0CiAgICBpZD0iYmFzaWMiCiAgICA6ZGF0YT0iZGF0YSIKICAgIDpoZWlnaHQ9IjIwMCIKICAgIDppdGVtSGVpZ2h0PSIyMCIKICAgIGl0ZW1LZXk9ImlkIgogICAgOnN0eWxlPSJ7CiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCByZWQnLAogICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JywKICAgIH0iCiAgICA6Y2hpbGRyZW49InRoZUNoaWxkcmVuIgogID48L2EtY29udGFpbmVyLWxpc3Q+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIGggfSBmcm9tICd2dWUnOwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IGRhdGEgPSBbXTsKICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwMDsgaSArPSAxKSB7CiAgICAgIGRhdGEucHVzaCh7CiAgICAgICAgaWQ6IFN0cmluZyhpKSwKICAgICAgfSk7CiAgICB9CgogICAgcmV0dXJuIHsKICAgICAgZGF0YSwKICAgICAgdGhlQ2hpbGRyZW46IChpdGVtOiBhbnkpID0+IGgoJ2RpdicsIGl0ZW0uaWQpLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLWNvbnRhaW5lci1saXN0CiAgICBpZD0iYmFzaWMiCiAgICA6ZGF0YT0iZGF0YSIKICAgIDpoZWlnaHQ9IjIwMCIKICAgIDppdGVtSGVpZ2h0PSIyMCIKICAgIGl0ZW1LZXk9ImlkIgogICAgOnN0eWxlPSJ7CiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCByZWQnLAogICAgICBib3hTaXppbmc6ICdib3JkZXItYm94JywKICAgIH0iCiAgICA6Y2hpbGRyZW49InRoZUNoaWxkcmVuIgogID48L2EtY29udGFpbmVyLWxpc3Q+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgaCB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCBkYXRhID0gW107CgogICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDAwOyBpICs9IDEpIHsKICAgICAgZGF0YS5wdXNoKHsKICAgICAgICBpZDogU3RyaW5nKGkpLAogICAgICB9KTsKICAgIH0KCiAgICByZXR1cm4gewogICAgICBkYXRhLAogICAgICB0aGVDaGlsZHJlbjogaXRlbSA9PiBoKCdkaXYnLCBpdGVtLmlkKSwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:i(()=>[o(r,{id:"basic",data:a.data,height:200,itemHeight:20,itemKey:"id",style:{border:"1px solid red",boxSizing:"border-box"},children:a.theChildren},null,8,["data","children"])]),htmlCode:i(()=>[H]),jsVersionHtml:i(()=>[P]),_:1},8,["jsfiddle"])}var M=m(W,[["render",V]]);const K=(a,{attrs:{id:s}})=>o("span",{class:"fixed-item",onClick:()=>{console.log("Click:",s)}},[s]),N={render(){return o("div",{style:{lineHeight:"30px"}},[this.$attrs.id])}},y=[];for(let a=0;a<1e3;a+=1)y.push({id:String(a)});const X=[{name:"ref real dom element",type:"dom"},{name:"ref vue node",type:"vue"}],T=a=>{console.log("scroll:",a.currentTarget.scrollTop)},b=x({destroy:!1,visible:!0,type:"dom"}),p=F(null);var R={render(){const{destroy:a,visible:s,type:e}=b;return o("div",null,[X.map(({name:c,type:l})=>o("label",{key:l},[o("input",{name:"type",type:"radio",checked:e===l,onChange:()=>{b.type=l}},null),c])),o("button",{type:"button",onClick:()=>{console.log(p.value,"listRef.value"),p.value.scrollTo(100)}},[n("Scroll To 100px")]),o("button",{type:"button",onClick:()=>{p.value.scrollTo({index:50,align:"top"})}},[n("Scroll To 50 (top)")]),o("button",{type:"button",onClick:()=>{p.value.scrollTo({index:50,align:"bottom"})}},[n("Scroll To 50 (bottom)")]),o("button",{type:"button",onClick:()=>{p.value.scrollTo({index:50,align:"auto"})}},[n("Scroll To 50 (auto)")]),o("button",{type:"button",onClick:()=>{p.value.scrollTo({index:50,align:"top",offset:15})}},[n("Scroll To 50 (top) + 15 offset")]),o("button",{type:"button",onClick:()=>{p.value.scrollTo({index:50,align:"bottom",offset:15})}},[n("Scroll To 50 (bottom) + 15 offset")]),o("button",{type:"button",onClick:()=>{p.value.scrollTo({key:"50",align:"auto"})}},[n("Scroll To key 50 (auto)")]),o("button",{type:"button",onClick:()=>{b.visible=!b.visible}},[n("visible")]),o("button",{type:"button",onClick:()=>{p.value.scrollTo({index:y.length-2,align:"top"})}},[n("Scroll To Last (top)")]),o("button",{type:"button",onClick:()=>{p.value.scrollTo({index:0,align:"bottom"})}},[n("Scroll To First (bottom)")]),!a&&o(d("a-container-list"),{id:"list",ref:c=>p.value=c,data:y,height:200,itemHeight:20,itemKey:"id",style:{border:"1px solid red",boxSizing:"border-box",display:s?null:"none"},onScroll:T,children:(c,l,u)=>e==="dom"?o(K,h(h({},c),u),null):o(N,h(h({},c),u),null)},null)])}};const D=C({components:{MethodsBase:R}}),j=t("pre",{class:"language-vue"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("MethodsBase")]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token keyword"},"import"),n(" MethodsBase "),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'./methods-base'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  components`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
    MethodsBase`),t("span",{class:"token punctuation"},","),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),z=t("pre",{class:"language-vue"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("MethodsBase")]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token keyword"},"import"),n(" MethodsBase "),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'./methods-base'"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  components`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
    MethodsBase`),t("span",{class:"token punctuation"},","),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1);function $(a,s,e,c,l,u){const r=d("MethodsBase"),k=d("demo-box");return g(),I(k,{jsfiddle:{us:"Basic.",cn:"\u66F4\u591A\u5B9E\u73B0\u8BF7\u770B [MethodsBase]() \u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u66F4\u591A\u5B9E\u73B0\u8BF7\u770B <a href="./.html">MethodsBase</a> \u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Basic.</p>
`,order:0,title:{"zh-CN":"\u6EDA\u52A8\u65B9\u6CD5","en-US":"Scroll"},relativePath:"components/container-list/demo/methods.vue",sourceCode:"PHRlbXBsYXRlPgogIDxNZXRob2RzQmFzZSAvPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50IH0gZnJvbSAndnVlJzsKaW1wb3J0IE1ldGhvZHNCYXNlIGZyb20gJy4vbWV0aG9kcy1iYXNlJzsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgY29tcG9uZW50czogewogICAgTWV0aG9kc0Jhc2UsCiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxNZXRob2RzQmFzZSAvPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tICd2dWUnOwppbXBvcnQgTWV0aG9kc0Jhc2UgZnJvbSAnLi9tZXRob2RzLWJhc2UnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIGNvbXBvbmVudHM6IHsKICAgIE1ldGhvZHNCYXNlLAogIH0sCn0pOwo8L3NjcmlwdD4="}},{default:i(()=>[o(r)]),htmlCode:i(()=>[j]),jsVersionHtml:i(()=>[z]),_:1},8,["jsfiddle"])}var U=m(D,[["render",$]]);const Y={pageData:{title:"ContainerList",description:"",frontmatter:{category:"Components",type:"\u901A\u7528",title:"ContainerList",subtitle:"\u5217\u8868\u5BB9\u5668",cover:"https://gw.alipayobjects.com/zos/alicdn/Vyyeu8jq2/Tooltp.svg"},headers:[{level:2,title:"\u4F55\u65F6\u4F7F\u7528",slug:"\u4F55\u65F6\u4F7F\u7528",content:"\u5927\u6570\u636E\u7684\u65F6\u5019."},{level:2,title:"API",slug:"API",content:""}],relativePath:"components/container-list/index.zh-CN.md",content:`
\u865A\u62DF\u6EDA\u52A8\u7684\u5217\u8868\u5BB9\u5668\u3002 4.0 \u65B0\u589E\u3002

## \u4F55\u65F6\u4F7F\u7528

\u5927\u6570\u636E\u7684\u65F6\u5019.

## API

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |
| --- | --- | --- | --- | --- |
| data | \u6700\u5927\u5BBD\u5EA6 | any[] |  | - |
| height | \u5BB9\u5668\u9AD8\u5EA6 | number | - |  |
| itemHeight | \u6BCF\u6761\u6570\u636E\u9AD8\u5EA6 | number | - |  |
| fullHeight | \u82E5\u4E0D\u5339\u914D\u865A\u62DF\u6EDA\u52A8\u6761\u4EF6\uFF0C\u5219\u8BBE\u7F6E\u5217\u8868\u4ECD\u4F7F\u7528\u5BB9\u5668\u7684\u9AD8\u5EA6\u3002 | boolean | - |  |
| itemKey | key | String \\| Number \\| Function | - |  |
| component | \u5916\u5C42\u7684\u7EC4\u4EF6 | String, Object | - |  |
| virtual | \u662F\u5426\u4F7F\u7528\u865A\u62DF\u6EDA\u52A8 | boolean | - |  |
| children | \u6BCF\u6761\u6570\u636E\u7684\u5185\u5BB9 | Function | - |  |
| onScroll | \u6EDA\u52A8\u76D1\u542C | Function | - |  |
| onMousedown | onMousedown \u76D1\u542C | Function | - |  |
| onMouseenter | onMouseenter \u76D1\u542C | Function | - |  |
`,html:`<p>\u865A\u62DF\u6EDA\u52A8\u7684\u5217\u8868\u5BB9\u5668\u3002 4.0 \u65B0\u589E\u3002</p>
<h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5927\u6570\u636E\u7684\u65F6\u5019.</p>
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
<td>data</td>
<td>\u6700\u5927\u5BBD\u5EA6</td>
<td>any[]</td>
<td></td>
<td>-</td>
</tr>
<tr>
<td>height</td>
<td>\u5BB9\u5668\u9AD8\u5EA6</td>
<td>number</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>itemHeight</td>
<td>\u6BCF\u6761\u6570\u636E\u9AD8\u5EA6</td>
<td>number</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>fullHeight</td>
<td>\u82E5\u4E0D\u5339\u914D\u865A\u62DF\u6EDA\u52A8\u6761\u4EF6\uFF0C\u5219\u8BBE\u7F6E\u5217\u8868\u4ECD\u4F7F\u7528\u5BB9\u5668\u7684\u9AD8\u5EA6\u3002</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>itemKey</td>
<td>key</td>
<td>String | Number | Function</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>component</td>
<td>\u5916\u5C42\u7684\u7EC4\u4EF6</td>
<td>String, Object</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>virtual</td>
<td>\u662F\u5426\u4F7F\u7528\u865A\u62DF\u6EDA\u52A8</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>children</td>
<td>\u6BCF\u6761\u6570\u636E\u7684\u5185\u5BB9</td>
<td>Function</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>onScroll</td>
<td>\u6EDA\u52A8\u76D1\u542C</td>
<td>Function</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>onMousedown</td>
<td>onMousedown \u76D1\u542C</td>
<td>Function</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>onMouseenter</td>
<td>onMouseenter \u76D1\u542C</td>
<td>Function</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
`,lastUpdated:1701878243721}},L={class:"markdown"},J=B('<p>\u865A\u62DF\u6EDA\u52A8\u7684\u5217\u8868\u5BB9\u5668\u3002 4.0 \u65B0\u589E\u3002</p><h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528"><span aria-hidden="true" class="anchor">#</span></a></h2><p>\u5927\u6570\u636E\u7684\u65F6\u5019.</p><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>data</td><td>\u6700\u5927\u5BBD\u5EA6</td><td>any[]</td><td></td><td>-</td></tr><tr><td>height</td><td>\u5BB9\u5668\u9AD8\u5EA6</td><td>number</td><td>-</td><td></td></tr><tr><td>itemHeight</td><td>\u6BCF\u6761\u6570\u636E\u9AD8\u5EA6</td><td>number</td><td>-</td><td></td></tr><tr><td>fullHeight</td><td>\u82E5\u4E0D\u5339\u914D\u865A\u62DF\u6EDA\u52A8\u6761\u4EF6\uFF0C\u5219\u8BBE\u7F6E\u5217\u8868\u4ECD\u4F7F\u7528\u5BB9\u5668\u7684\u9AD8\u5EA6\u3002</td><td>boolean</td><td>-</td><td></td></tr><tr><td>itemKey</td><td>key</td><td>String | Number | Function</td><td>-</td><td></td></tr><tr><td>component</td><td>\u5916\u5C42\u7684\u7EC4\u4EF6</td><td>String, Object</td><td>-</td><td></td></tr><tr><td>virtual</td><td>\u662F\u5426\u4F7F\u7528\u865A\u62DF\u6EDA\u52A8</td><td>boolean</td><td>-</td><td></td></tr><tr><td>children</td><td>\u6BCF\u6761\u6570\u636E\u7684\u5185\u5BB9</td><td>Function</td><td>-</td><td></td></tr><tr><td>onScroll</td><td>\u6EDA\u52A8\u76D1\u542C</td><td>Function</td><td>-</td><td></td></tr><tr><td>onMousedown</td><td>onMousedown \u76D1\u542C</td><td>Function</td><td>-</td><td></td></tr><tr><td>onMouseenter</td><td>onMouseenter \u76D1\u542C</td><td>Function</td><td>-</td><td></td></tr></tbody></table>',5),Q=[J];function q(a,s,e,c,l,u){return g(),A("article",L,Q)}var O=m(Y,[["render",q]]);const E={pageData:{title:"ContainerList",description:"",frontmatter:{category:"Components",type:"General",title:"ContainerList",cover:"https://gw.alipayobjects.com/zos/alicdn/Vyyeu8jq2/Tooltp.svg"},headers:[{level:2,title:"When To Use",slug:"When-To-Use",content:"Big data"},{level:2,title:"API",slug:"API",content:""}],relativePath:"components/container-list/index.en_US.md",content:`
Virtual list.

## When To Use

Big data

## API

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| data | Data | any[] |  | - |
| height | container height | number | - |  |
| itemHeight | item height | number | - |  |
| fullHeight | If not match virtual scroll condition, Set List still use height of container. | boolean | - |  |
| itemKey | key | String \\| Number \\| Function | - |  |
| component | Component | String, Object | - |  |
| virtual | Virtual | boolean | - |  |
| children | Children | Function | - |  |
| onScroll | onScroll | Function | - |  |
| onMousedown | onMousedown | Function | - |  |
| onMouseenter | onMouseenter | Function | - |  |
`,html:`<p>Virtual list.</p>
<h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Big data</p>
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
<td>data</td>
<td>Data</td>
<td>any[]</td>
<td></td>
<td>-</td>
</tr>
<tr>
<td>height</td>
<td>container height</td>
<td>number</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>itemHeight</td>
<td>item height</td>
<td>number</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>fullHeight</td>
<td>If not match virtual scroll condition, Set List still use height of container.</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>itemKey</td>
<td>key</td>
<td>String | Number | Function</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>component</td>
<td>Component</td>
<td>String, Object</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>virtual</td>
<td>Virtual</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>children</td>
<td>Children</td>
<td>Function</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>onScroll</td>
<td>onScroll</td>
<td>Function</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>onMousedown</td>
<td>onMousedown</td>
<td>Function</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>onMouseenter</td>
<td>onMouseenter</td>
<td>Function</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
`,lastUpdated:1701878243721}},tt={class:"markdown"},nt=B('<p>Virtual list.</p><h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use"><span aria-hidden="true" class="anchor">#</span></a></h2><p>Big data</p><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>data</td><td>Data</td><td>any[]</td><td></td><td>-</td></tr><tr><td>height</td><td>container height</td><td>number</td><td>-</td><td></td></tr><tr><td>itemHeight</td><td>item height</td><td>number</td><td>-</td><td></td></tr><tr><td>fullHeight</td><td>If not match virtual scroll condition, Set List still use height of container.</td><td>boolean</td><td>-</td><td></td></tr><tr><td>itemKey</td><td>key</td><td>String | Number | Function</td><td>-</td><td></td></tr><tr><td>component</td><td>Component</td><td>String, Object</td><td>-</td><td></td></tr><tr><td>virtual</td><td>Virtual</td><td>boolean</td><td>-</td><td></td></tr><tr><td>children</td><td>Children</td><td>Function</td><td>-</td><td></td></tr><tr><td>onScroll</td><td>onScroll</td><td>Function</td><td>-</td><td></td></tr><tr><td>onMousedown</td><td>onMousedown</td><td>Function</td><td>-</td><td></td></tr><tr><td>onMouseenter</td><td>onMouseenter</td><td>Function</td><td>-</td><td></td></tr></tbody></table>',5),at=[nt];function st(a,s,e,c,l,u){return g(),A("article",tt,at)}var ot=m(E,[["render",st]]);const et=C({CN:O,US:ot,components:{Basic:M,Mehtods:U}});function ct(a,s,e,c,l,u){const r=d("Basic"),k=d("Mehtods"),S=d("demo-sort");return g(),I(S,{cols:1},{default:i(()=>[o(r),o(k)]),_:1})}var ut=m(et,[["render",ct]]);export{ut as default};

import{d as G,k as b,aq as o,J as h,bN as I,bO as e,e as s,G as t,bP as X,H as n,b$ as F,ca as W,w,E as Z,c as E,cb as f}from"./vendor.0f0e4632.js";import{_ as y}from"./index.f6b32fa6.js";const S=G({setup(){return{size:b("default"),blockContent:`AntV \u662F\u8682\u8681\u91D1\u670D\u5168\u65B0\u4E00\u4EE3\u6570\u636E\u53EF\u89C6\u5316\u89E3\u51B3\u65B9\u6848\uFF0C\u81F4\u529B\u4E8E\u63D0\u4F9B\u4E00\u5957\u7B80\u5355\u65B9\u4FBF\u3001\u4E13\u4E1A\u53EF\u9760\u3001\u4E0D\u9650\u53EF\u80FD\u7684\u6570\u636E\u53EF\u89C6\u5316\u6700\u4F73\u5B9E\u8DF5\u3002\u5F97\u76CA\u4E8E\u4E30\u5BCC\u7684\u4E1A\u52A1\u573A\u666F\u548C\u7528\u6237\u9700\u6C42\u6311\u6218\uFF0CAntV \u7ECF\u5386\u591A\u5E74\u79EF\u7D2F\u4E0E\u4E0D\u65AD\u6253\u78E8\uFF0C\u5DF2\u652F\u6491\u6574\u4E2A\u963F\u91CC\u96C6\u56E2\u5185\u5916 20000+ \u4E1A\u52A1\u7CFB\u7EDF\uFF0C\u901A\u8FC7\u4E86\u65E5\u5747\u5343\u4E07\u7EA7 UV \u4EA7\u54C1\u7684\u4E25\u82DB\u8003\u9A8C\u3002
\u6211\u4EEC\u6B63\u5728\u57FA\u7840\u56FE\u8868\uFF0C\u56FE\u5206\u6790\uFF0C\u56FE\u7F16\u8F91\uFF0C\u5730\u7406\u7A7A\u95F4\u53EF\u89C6\u5316\uFF0C\u667A\u80FD\u53EF\u89C6\u5316\u7B49\u5404\u4E2A\u53EF\u89C6\u5316\u7684\u9886\u57DF\u8015\u8018\uFF0C\u6B22\u8FCE\u540C\u8DEF\u4EBA\u4E00\u8D77\u524D\u884C\u3002`}}}),R=n("Small"),J=n("Default"),x=n("Large"),H=n("Introduction"),V=n(" In the process of internal desktop applications development, many different design specs and implementations would be involved, which might cause designers and developers difficulties and duplication and reduce the efficiency of development. "),D=n(" After massive project practice and summaries, Ant Design, a design language for background applications, is refined by Ant UED Team, which aims to "),z=n(" uniform the user interface specs for internal background projects, lower the unnecessary cost of design differences and implementation and liberate the resources of design and front-end development. "),P=n("Guidelines and Resources"),L=n(" We supply a series of design principles, practical patterns and high quality design resources ( "),N=n("Sketch"),T=n(" and "),U=n("Axure"),j=n(" ), to help people create their product prototypes beautifully and efficiently. "),q=n("Resource Download"),_=n(" Press "),K=n("Esc"),Q=n(" to exit... "),O=n("\u4ECB\u7ECD"),M=n(" \u8682\u8681\u7684\u4F01\u4E1A\u7EA7\u4EA7\u54C1\u662F\u4E00\u4E2A\u5E9E\u5927\u4E14\u590D\u6742\u7684\u4F53\u7CFB\u3002\u8FD9\u7C7B\u4EA7\u54C1\u4E0D\u4EC5\u91CF\u7EA7\u5DE8\u5927\u4E14\u529F\u80FD\u590D\u6742\uFF0C\u800C\u4E14\u53D8\u52A8\u548C\u5E76\u53D1\u9891\u7E41\uFF0C\u5E38\u5E38\u9700\u8981\u8BBE\u8BA1\u4E0E\u5F00\u53D1\u80FD\u591F\u5FEB\u901F\u7684\u505A\u51FA\u54CD\u5E94\u3002\u540C\u65F6\u8FD9\u7C7B\u4EA7\u54C1\u4E2D\u6709\u5B58\u5728\u5F88\u591A\u7C7B\u4F3C\u7684\u9875\u9762\u4EE5\u53CA\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u62BD\u8C61\u5F97\u5230\u4E00\u4E9B\u7A33\u5B9A\u4E14\u9AD8\u590D\u7528\u6027\u7684\u5185\u5BB9\u3002 "),$=n(" \u968F\u7740\u5546\u4E1A\u5316\u7684\u8D8B\u52BF\uFF0C\u8D8A\u6765\u8D8A\u591A\u7684\u4F01\u4E1A\u7EA7\u4EA7\u54C1\u5BF9\u66F4\u597D\u7684\u7528\u6237\u4F53\u9A8C\u6709\u4E86\u8FDB\u4E00\u6B65\u7684\u8981\u6C42\u3002\u5E26\u7740\u8FD9\u6837\u7684\u4E00\u4E2A\u7EC8\u6781\u76EE\u6807\uFF0C\u6211\u4EEC\uFF08\u8682\u8681\u91D1\u670D\u4F53\u9A8C\u6280\u672F\u90E8\uFF09\u7ECF\u8FC7\u5927\u91CF\u7684\u9879\u76EE\u5B9E\u8DF5\u548C\u603B\u7ED3\uFF0C\u9010\u6B65\u6253\u78E8\u51FA\u4E00\u4E2A\u670D\u52A1\u4E8E\u4F01\u4E1A\u7EA7\u4EA7\u54C1\u7684\u8BBE\u8BA1\u4F53\u7CFB Ant Design\u3002\u57FA\u4E8E "),tt=n("\u300E\u786E\u5B9A\u300F\u548C\u300E\u81EA\u7136\u300F"),nt=n(" \u7684\u8BBE\u8BA1\u4EF7\u503C\u89C2\uFF0C\u901A\u8FC7\u6A21\u5757\u5316\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u964D\u4F4E\u5197\u4F59\u7684\u751F\u4EA7\u6210\u672C\uFF0C\u8BA9\u8BBE\u8BA1\u8005\u4E13\u6CE8\u4E8E "),at=n("\u66F4\u597D\u7684\u7528\u6237\u4F53\u9A8C"),st=n(" \u3002 "),et=n("\u8BBE\u8BA1\u8D44\u6E90"),ot=n(" \u6211\u4EEC\u63D0\u4F9B\u5B8C\u5584\u7684\u8BBE\u8BA1\u539F\u5219\u3001\u6700\u4F73\u5B9E\u8DF5\u548C\u8BBE\u8BA1\u8D44\u6E90\u6587\u4EF6\uFF08 "),lt=n("Sketch"),ct=n(" \u548C "),pt=n("Axure"),ut=n(" \uFF09\uFF0C\u6765\u5E2E\u52A9\u4E1A\u52A1\u5FEB\u901F\u8BBE\u8BA1\u51FA\u9AD8\u8D28\u91CF\u7684\u4EA7\u54C1\u539F\u578B\u3002 "),it=n("\u8BBE\u8BA1\u8D44\u6E90"),dt=n(" \u6309 "),kt=n("Esc"),rt=n(" \u952E\u9000\u51FA\u9605\u8BFB\u2026\u2026 "),gt=t("pre",{class:"language-vue"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-radio-group")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("value")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"button-style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("solid"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-radio-button")]),n(),t("span",{class:"token attr-name"},"value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("small"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Small"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-radio-button")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-radio-button")]),n(),t("span",{class:"token attr-name"},"value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("default"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Default"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-radio-button")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-radio-button")]),n(),t("span",{class:"token attr-name"},"value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("large"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Large"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-radio-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-radio-group")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),t("span",{class:"token punctuation"},">")]),n("Introduction"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      In the process of internal desktop applications development, many different design specs and
      implementations would be involved, which might cause designers and developers difficulties and
      duplication and reduce the efficiency of development.
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-paragraph")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      After massive project practice and summaries, Ant Design, a design language for background
      applications, is refined by Ant UED Team, which aims to
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},"strong"),t("span",{class:"token punctuation"},">")]),n(`
        uniform the user interface specs for internal background projects, lower the unnecessary
        cost of design differences and implementation and liberate the resources of design and
        front-end development.
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-paragraph")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),n(),t("span",{class:"token attr-name"},":level"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("2"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Guidelines and Resources"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      We supply a series of design principles, practical patterns and high quality design resources
      (
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},"code"),t("span",{class:"token punctuation"},">")]),n("Sketch"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
      and
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},"code"),t("span",{class:"token punctuation"},">")]),n("Axure"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
      ), to help people create their product prototypes beautifully and efficiently.
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-paragraph")]),t("span",{class:"token punctuation"},">")]),n(`

    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("ul")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("li")]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-link")]),n(),t("span",{class:"token attr-name"},"href"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("/docs/resources"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Resource Download"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-link")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("li")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("ul")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-paragraph")]),t("span",{class:"token punctuation"},">")]),n(`

    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      Press
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},"keyboard"),t("span",{class:"token punctuation"},">")]),n("Esc"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
      to exit...
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-paragraph")]),t("span",{class:"token punctuation"},">")]),n(`

    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-divider")]),n(),t("span",{class:"token punctuation"},"/>")]),n(`

    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),t("span",{class:"token punctuation"},">")]),n("\u4ECB\u7ECD"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      \u8682\u8681\u7684\u4F01\u4E1A\u7EA7\u4EA7\u54C1\u662F\u4E00\u4E2A\u5E9E\u5927\u4E14\u590D\u6742\u7684\u4F53\u7CFB\u3002\u8FD9\u7C7B\u4EA7\u54C1\u4E0D\u4EC5\u91CF\u7EA7\u5DE8\u5927\u4E14\u529F\u80FD\u590D\u6742\uFF0C\u800C\u4E14\u53D8\u52A8\u548C\u5E76\u53D1\u9891\u7E41\uFF0C\u5E38\u5E38\u9700\u8981\u8BBE\u8BA1\u4E0E\u5F00\u53D1\u80FD\u591F\u5FEB\u901F\u7684\u505A\u51FA\u54CD\u5E94\u3002\u540C\u65F6\u8FD9\u7C7B\u4EA7\u54C1\u4E2D\u6709\u5B58\u5728\u5F88\u591A\u7C7B\u4F3C\u7684\u9875\u9762\u4EE5\u53CA\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u62BD\u8C61\u5F97\u5230\u4E00\u4E9B\u7A33\u5B9A\u4E14\u9AD8\u590D\u7528\u6027\u7684\u5185\u5BB9\u3002
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-paragraph")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      \u968F\u7740\u5546\u4E1A\u5316\u7684\u8D8B\u52BF\uFF0C\u8D8A\u6765\u8D8A\u591A\u7684\u4F01\u4E1A\u7EA7\u4EA7\u54C1\u5BF9\u66F4\u597D\u7684\u7528\u6237\u4F53\u9A8C\u6709\u4E86\u8FDB\u4E00\u6B65\u7684\u8981\u6C42\u3002\u5E26\u7740\u8FD9\u6837\u7684\u4E00\u4E2A\u7EC8\u6781\u76EE\u6807\uFF0C\u6211\u4EEC\uFF08\u8682\u8681\u91D1\u670D\u4F53\u9A8C\u6280\u672F\u90E8\uFF09\u7ECF\u8FC7\u5927\u91CF\u7684\u9879\u76EE\u5B9E\u8DF5\u548C\u603B\u7ED3\uFF0C\u9010\u6B65\u6253\u78E8\u51FA\u4E00\u4E2A\u670D\u52A1\u4E8E\u4F01\u4E1A\u7EA7\u4EA7\u54C1\u7684\u8BBE\u8BA1\u4F53\u7CFB
      Ant Design\u3002\u57FA\u4E8E
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},"mark"),t("span",{class:"token punctuation"},">")]),n("\u300E\u786E\u5B9A\u300F\u548C\u300E\u81EA\u7136\u300F"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
      \u7684\u8BBE\u8BA1\u4EF7\u503C\u89C2\uFF0C\u901A\u8FC7\u6A21\u5757\u5316\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u964D\u4F4E\u5197\u4F59\u7684\u751F\u4EA7\u6210\u672C\uFF0C\u8BA9\u8BBE\u8BA1\u8005\u4E13\u6CE8\u4E8E
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},"strong"),t("span",{class:"token punctuation"},">")]),n("\u66F4\u597D\u7684\u7528\u6237\u4F53\u9A8C"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
      \u3002
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-paragraph")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),n(),t("span",{class:"token attr-name"},":level"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("2"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("\u8BBE\u8BA1\u8D44\u6E90"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      \u6211\u4EEC\u63D0\u4F9B\u5B8C\u5584\u7684\u8BBE\u8BA1\u539F\u5219\u3001\u6700\u4F73\u5B9E\u8DF5\u548C\u8BBE\u8BA1\u8D44\u6E90\u6587\u4EF6\uFF08
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},"code"),t("span",{class:"token punctuation"},">")]),n("Sketch"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
      \u548C
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},"code"),t("span",{class:"token punctuation"},">")]),n("Axure"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
      \uFF09\uFF0C\u6765\u5E2E\u52A9\u4E1A\u52A1\u5FEB\u901F\u8BBE\u8BA1\u51FA\u9AD8\u8D28\u91CF\u7684\u4EA7\u54C1\u539F\u578B\u3002
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-paragraph")]),t("span",{class:"token punctuation"},">")]),n(`

    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("ul")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("li")]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-link")]),n(),t("span",{class:"token attr-name"},"href"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("/docs/resources-cn"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("\u8BBE\u8BA1\u8D44\u6E90"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-link")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("li")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("ul")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-paragraph")]),t("span",{class:"token punctuation"},">")]),n(`

    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("blockquote")]),t("span",{class:"token punctuation"},">")]),n("{{ blockContent }}"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("blockquote")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("pre")]),t("span",{class:"token punctuation"},">")]),n("{{ blockContent }}"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("pre")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-paragraph")]),t("span",{class:"token punctuation"},">")]),n(`

    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      \u6309
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},"keyboard"),t("span",{class:"token punctuation"},">")]),n("Esc"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
      \u952E\u9000\u51FA\u9605\u8BFB\u2026\u2026
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-paragraph")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      size`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'default'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(`
      blockContent`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token template-string"},[t("span",{class:"token template-punctuation string"},"`"),t("span",{class:"token string"},`AntV \u662F\u8682\u8681\u91D1\u670D\u5168\u65B0\u4E00\u4EE3\u6570\u636E\u53EF\u89C6\u5316\u89E3\u51B3\u65B9\u6848\uFF0C\u81F4\u529B\u4E8E\u63D0\u4F9B\u4E00\u5957\u7B80\u5355\u65B9\u4FBF\u3001\u4E13\u4E1A\u53EF\u9760\u3001\u4E0D\u9650\u53EF\u80FD\u7684\u6570\u636E\u53EF\u89C6\u5316\u6700\u4F73\u5B9E\u8DF5\u3002\u5F97\u76CA\u4E8E\u4E30\u5BCC\u7684\u4E1A\u52A1\u573A\u666F\u548C\u7528\u6237\u9700\u6C42\u6311\u6218\uFF0CAntV \u7ECF\u5386\u591A\u5E74\u79EF\u7D2F\u4E0E\u4E0D\u65AD\u6253\u78E8\uFF0C\u5DF2\u652F\u6491\u6574\u4E2A\u963F\u91CC\u96C6\u56E2\u5185\u5916 20000+ \u4E1A\u52A1\u7CFB\u7EDF\uFF0C\u901A\u8FC7\u4E86\u65E5\u5747\u5343\u4E07\u7EA7 UV \u4EA7\u54C1\u7684\u4E25\u82DB\u8003\u9A8C\u3002
\u6211\u4EEC\u6B63\u5728\u57FA\u7840\u56FE\u8868\uFF0C\u56FE\u5206\u6790\uFF0C\u56FE\u7F16\u8F91\uFF0C\u5730\u7406\u7A7A\u95F4\u53EF\u89C6\u5316\uFF0C\u667A\u80FD\u53EF\u89C6\u5316\u7B49\u5404\u4E2A\u53EF\u89C6\u5316\u7684\u9886\u57DF\u8015\u8018\uFF0C\u6B22\u8FCE\u540C\u8DEF\u4EBA\u4E00\u8D77\u524D\u884C\u3002`),t("span",{class:"token template-punctuation string"},"`")]),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),bt=t("pre",{class:"language-vue"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-radio-group")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("value")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"button-style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("solid"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-radio-button")]),n(),t("span",{class:"token attr-name"},"value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("small"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Small"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-radio-button")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-radio-button")]),n(),t("span",{class:"token attr-name"},"value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("default"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Default"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-radio-button")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-radio-button")]),n(),t("span",{class:"token attr-name"},"value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("large"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Large"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-radio-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-radio-group")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),t("span",{class:"token punctuation"},">")]),n("Introduction"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      In the process of internal desktop applications development, many different design specs and
      implementations would be involved, which might cause designers and developers difficulties and
      duplication and reduce the efficiency of development.
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-paragraph")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      After massive project practice and summaries, Ant Design, a design language for background
      applications, is refined by Ant UED Team, which aims to
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},"strong"),t("span",{class:"token punctuation"},">")]),n(`
        uniform the user interface specs for internal background projects, lower the unnecessary
        cost of design differences and implementation and liberate the resources of design and
        front-end development.
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-paragraph")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),n(),t("span",{class:"token attr-name"},":level"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("2"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Guidelines and Resources"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      We supply a series of design principles, practical patterns and high quality design resources
      (
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},"code"),t("span",{class:"token punctuation"},">")]),n("Sketch"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
      and
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},"code"),t("span",{class:"token punctuation"},">")]),n("Axure"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
      ), to help people create their product prototypes beautifully and efficiently.
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-paragraph")]),t("span",{class:"token punctuation"},">")]),n(`

    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("ul")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("li")]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-link")]),n(),t("span",{class:"token attr-name"},"href"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("/docs/resources"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Resource Download"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-link")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("li")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("ul")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-paragraph")]),t("span",{class:"token punctuation"},">")]),n(`

    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      Press
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},"keyboard"),t("span",{class:"token punctuation"},">")]),n("Esc"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
      to exit...
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-paragraph")]),t("span",{class:"token punctuation"},">")]),n(`

    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-divider")]),n(),t("span",{class:"token punctuation"},"/>")]),n(`

    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),t("span",{class:"token punctuation"},">")]),n("\u4ECB\u7ECD"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      \u8682\u8681\u7684\u4F01\u4E1A\u7EA7\u4EA7\u54C1\u662F\u4E00\u4E2A\u5E9E\u5927\u4E14\u590D\u6742\u7684\u4F53\u7CFB\u3002\u8FD9\u7C7B\u4EA7\u54C1\u4E0D\u4EC5\u91CF\u7EA7\u5DE8\u5927\u4E14\u529F\u80FD\u590D\u6742\uFF0C\u800C\u4E14\u53D8\u52A8\u548C\u5E76\u53D1\u9891\u7E41\uFF0C\u5E38\u5E38\u9700\u8981\u8BBE\u8BA1\u4E0E\u5F00\u53D1\u80FD\u591F\u5FEB\u901F\u7684\u505A\u51FA\u54CD\u5E94\u3002\u540C\u65F6\u8FD9\u7C7B\u4EA7\u54C1\u4E2D\u6709\u5B58\u5728\u5F88\u591A\u7C7B\u4F3C\u7684\u9875\u9762\u4EE5\u53CA\u7EC4\u4EF6\uFF0C\u53EF\u4EE5\u901A\u8FC7\u62BD\u8C61\u5F97\u5230\u4E00\u4E9B\u7A33\u5B9A\u4E14\u9AD8\u590D\u7528\u6027\u7684\u5185\u5BB9\u3002
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-paragraph")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      \u968F\u7740\u5546\u4E1A\u5316\u7684\u8D8B\u52BF\uFF0C\u8D8A\u6765\u8D8A\u591A\u7684\u4F01\u4E1A\u7EA7\u4EA7\u54C1\u5BF9\u66F4\u597D\u7684\u7528\u6237\u4F53\u9A8C\u6709\u4E86\u8FDB\u4E00\u6B65\u7684\u8981\u6C42\u3002\u5E26\u7740\u8FD9\u6837\u7684\u4E00\u4E2A\u7EC8\u6781\u76EE\u6807\uFF0C\u6211\u4EEC\uFF08\u8682\u8681\u91D1\u670D\u4F53\u9A8C\u6280\u672F\u90E8\uFF09\u7ECF\u8FC7\u5927\u91CF\u7684\u9879\u76EE\u5B9E\u8DF5\u548C\u603B\u7ED3\uFF0C\u9010\u6B65\u6253\u78E8\u51FA\u4E00\u4E2A\u670D\u52A1\u4E8E\u4F01\u4E1A\u7EA7\u4EA7\u54C1\u7684\u8BBE\u8BA1\u4F53\u7CFB
      Ant Design\u3002\u57FA\u4E8E
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},"mark"),t("span",{class:"token punctuation"},">")]),n("\u300E\u786E\u5B9A\u300F\u548C\u300E\u81EA\u7136\u300F"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
      \u7684\u8BBE\u8BA1\u4EF7\u503C\u89C2\uFF0C\u901A\u8FC7\u6A21\u5757\u5316\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u964D\u4F4E\u5197\u4F59\u7684\u751F\u4EA7\u6210\u672C\uFF0C\u8BA9\u8BBE\u8BA1\u8005\u4E13\u6CE8\u4E8E
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},"strong"),t("span",{class:"token punctuation"},">")]),n("\u66F4\u597D\u7684\u7528\u6237\u4F53\u9A8C"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
      \u3002
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-paragraph")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),n(),t("span",{class:"token attr-name"},":level"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("2"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("\u8BBE\u8BA1\u8D44\u6E90"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      \u6211\u4EEC\u63D0\u4F9B\u5B8C\u5584\u7684\u8BBE\u8BA1\u539F\u5219\u3001\u6700\u4F73\u5B9E\u8DF5\u548C\u8BBE\u8BA1\u8D44\u6E90\u6587\u4EF6\uFF08
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},"code"),t("span",{class:"token punctuation"},">")]),n("Sketch"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
      \u548C
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},"code"),t("span",{class:"token punctuation"},">")]),n("Axure"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
      \uFF09\uFF0C\u6765\u5E2E\u52A9\u4E1A\u52A1\u5FEB\u901F\u8BBE\u8BA1\u51FA\u9AD8\u8D28\u91CF\u7684\u4EA7\u54C1\u539F\u578B\u3002
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-paragraph")]),t("span",{class:"token punctuation"},">")]),n(`

    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("ul")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("li")]),t("span",{class:"token punctuation"},">")]),n(`
          `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-link")]),n(),t("span",{class:"token attr-name"},"href"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("/docs/resources-cn"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("\u8BBE\u8BA1\u8D44\u6E90"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-link")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("li")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("ul")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-paragraph")]),t("span",{class:"token punctuation"},">")]),n(`

    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("blockquote")]),t("span",{class:"token punctuation"},">")]),n("{{ blockContent }}"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("blockquote")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("pre")]),t("span",{class:"token punctuation"},">")]),n("{{ blockContent }}"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("pre")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-paragraph")]),t("span",{class:"token punctuation"},">")]),n(`

    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      \u6309
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},"keyboard"),t("span",{class:"token punctuation"},">")]),n("Esc"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
      \u952E\u9000\u51FA\u9605\u8BFB\u2026\u2026
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-paragraph")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      size`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'default'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(`
      blockContent`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token template-string"},[t("span",{class:"token template-punctuation string"},"`"),t("span",{class:"token string"},`AntV \u662F\u8682\u8681\u91D1\u670D\u5168\u65B0\u4E00\u4EE3\u6570\u636E\u53EF\u89C6\u5316\u89E3\u51B3\u65B9\u6848\uFF0C\u81F4\u529B\u4E8E\u63D0\u4F9B\u4E00\u5957\u7B80\u5355\u65B9\u4FBF\u3001\u4E13\u4E1A\u53EF\u9760\u3001\u4E0D\u9650\u53EF\u80FD\u7684\u6570\u636E\u53EF\u89C6\u5316\u6700\u4F73\u5B9E\u8DF5\u3002\u5F97\u76CA\u4E8E\u4E30\u5BCC\u7684\u4E1A\u52A1\u573A\u666F\u548C\u7528\u6237\u9700\u6C42\u6311\u6218\uFF0CAntV \u7ECF\u5386\u591A\u5E74\u79EF\u7D2F\u4E0E\u4E0D\u65AD\u6253\u78E8\uFF0C\u5DF2\u652F\u6491\u6574\u4E2A\u963F\u91CC\u96C6\u56E2\u5185\u5916 20000+ \u4E1A\u52A1\u7CFB\u7EDF\uFF0C\u901A\u8FC7\u4E86\u65E5\u5747\u5343\u4E07\u7EA7 UV \u4EA7\u54C1\u7684\u4E25\u82DB\u8003\u9A8C\u3002
\u6211\u4EEC\u6B63\u5728\u57FA\u7840\u56FE\u8868\uFF0C\u56FE\u5206\u6790\uFF0C\u56FE\u7F16\u8F91\uFF0C\u5730\u7406\u7A7A\u95F4\u53EF\u89C6\u5316\uFF0C\u667A\u80FD\u53EF\u89C6\u5316\u7B49\u5404\u4E2A\u53EF\u89C6\u5316\u7684\u9886\u57DF\u8015\u8018\uFF0C\u6B22\u8FCE\u540C\u8DEF\u4EBA\u4E00\u8D77\u524D\u884C\u3002`),t("span",{class:"token template-punctuation string"},"`")]),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`

`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1);function ht(a,l,i,m,C,A){const d=o("a-radio-button"),r=o("a-radio-group"),c=o("a-typography-title"),p=o("a-typography-paragraph"),k=o("a-typography-text"),g=o("a-typography-link"),u=o("a-divider"),v=o("a-typography"),B=o("demo-box");return h(),I(B,{jsfiddle:{us:"Display the document sample.",cn:"\u5C55\u793A\u6587\u6863\u6837\u4F8B\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5C55\u793A\u6587\u6863\u6837\u4F8B\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Display the document sample.</p>
`,order:0,title:{"zh-CN":"\u57FA\u672C","en-US":"Basic"},relativePath:"components/typography/demo/basic.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXR5cG9ncmFwaHk+CiAgICA8YS1yYWRpby1ncm91cCB2LW1vZGVsOnZhbHVlPSJzaXplIiBidXR0b24tc3R5bGU9InNvbGlkIj4KICAgICAgPGEtcmFkaW8tYnV0dG9uIHZhbHVlPSJzbWFsbCI+U21hbGw8L2EtcmFkaW8tYnV0dG9uPgogICAgICA8YS1yYWRpby1idXR0b24gdmFsdWU9ImRlZmF1bHQiPkRlZmF1bHQ8L2EtcmFkaW8tYnV0dG9uPgogICAgICA8YS1yYWRpby1idXR0b24gdmFsdWU9ImxhcmdlIj5MYXJnZTwvYS1yYWRpby1idXR0b24+CiAgICA8L2EtcmFkaW8tZ3JvdXA+CiAgICA8YS10eXBvZ3JhcGh5LXRpdGxlPkludHJvZHVjdGlvbjwvYS10eXBvZ3JhcGh5LXRpdGxlPgogICAgPGEtdHlwb2dyYXBoeS1wYXJhZ3JhcGggOnNpemU9InNpemUiPgogICAgICBJbiB0aGUgcHJvY2VzcyBvZiBpbnRlcm5hbCBkZXNrdG9wIGFwcGxpY2F0aW9ucyBkZXZlbG9wbWVudCwgbWFueSBkaWZmZXJlbnQgZGVzaWduIHNwZWNzIGFuZAogICAgICBpbXBsZW1lbnRhdGlvbnMgd291bGQgYmUgaW52b2x2ZWQsIHdoaWNoIG1pZ2h0IGNhdXNlIGRlc2lnbmVycyBhbmQgZGV2ZWxvcGVycyBkaWZmaWN1bHRpZXMgYW5kCiAgICAgIGR1cGxpY2F0aW9uIGFuZCByZWR1Y2UgdGhlIGVmZmljaWVuY3kgb2YgZGV2ZWxvcG1lbnQuCiAgICA8L2EtdHlwb2dyYXBoeS1wYXJhZ3JhcGg+CiAgICA8YS10eXBvZ3JhcGh5LXBhcmFncmFwaCA6c2l6ZT0ic2l6ZSI+CiAgICAgIEFmdGVyIG1hc3NpdmUgcHJvamVjdCBwcmFjdGljZSBhbmQgc3VtbWFyaWVzLCBBbnQgRGVzaWduLCBhIGRlc2lnbiBsYW5ndWFnZSBmb3IgYmFja2dyb3VuZAogICAgICBhcHBsaWNhdGlvbnMsIGlzIHJlZmluZWQgYnkgQW50IFVFRCBUZWFtLCB3aGljaCBhaW1zIHRvCiAgICAgIDxhLXR5cG9ncmFwaHktdGV4dCBzdHJvbmc+CiAgICAgICAgdW5pZm9ybSB0aGUgdXNlciBpbnRlcmZhY2Ugc3BlY3MgZm9yIGludGVybmFsIGJhY2tncm91bmQgcHJvamVjdHMsIGxvd2VyIHRoZSB1bm5lY2Vzc2FyeQogICAgICAgIGNvc3Qgb2YgZGVzaWduIGRpZmZlcmVuY2VzIGFuZCBpbXBsZW1lbnRhdGlvbiBhbmQgbGliZXJhdGUgdGhlIHJlc291cmNlcyBvZiBkZXNpZ24gYW5kCiAgICAgICAgZnJvbnQtZW5kIGRldmVsb3BtZW50LgogICAgICA8L2EtdHlwb2dyYXBoeS10ZXh0PgogICAgPC9hLXR5cG9ncmFwaHktcGFyYWdyYXBoPgogICAgPGEtdHlwb2dyYXBoeS10aXRsZSA6bGV2ZWw9IjIiPkd1aWRlbGluZXMgYW5kIFJlc291cmNlczwvYS10eXBvZ3JhcGh5LXRpdGxlPgogICAgPGEtdHlwb2dyYXBoeS1wYXJhZ3JhcGggOnNpemU9InNpemUiPgogICAgICBXZSBzdXBwbHkgYSBzZXJpZXMgb2YgZGVzaWduIHByaW5jaXBsZXMsIHByYWN0aWNhbCBwYXR0ZXJucyBhbmQgaGlnaCBxdWFsaXR5IGRlc2lnbiByZXNvdXJjZXMKICAgICAgKAogICAgICA8YS10eXBvZ3JhcGh5LXRleHQgY29kZT5Ta2V0Y2g8L2EtdHlwb2dyYXBoeS10ZXh0PgogICAgICBhbmQKICAgICAgPGEtdHlwb2dyYXBoeS10ZXh0IGNvZGU+QXh1cmU8L2EtdHlwb2dyYXBoeS10ZXh0PgogICAgICApLCB0byBoZWxwIHBlb3BsZSBjcmVhdGUgdGhlaXIgcHJvZHVjdCBwcm90b3R5cGVzIGJlYXV0aWZ1bGx5IGFuZCBlZmZpY2llbnRseS4KICAgIDwvYS10eXBvZ3JhcGh5LXBhcmFncmFwaD4KCiAgICA8YS10eXBvZ3JhcGh5LXBhcmFncmFwaCA6c2l6ZT0ic2l6ZSI+CiAgICAgIDx1bD4KICAgICAgICA8bGk+CiAgICAgICAgICA8YS10eXBvZ3JhcGh5LWxpbmsgaHJlZj0iL2RvY3MvcmVzb3VyY2VzIj5SZXNvdXJjZSBEb3dubG9hZDwvYS10eXBvZ3JhcGh5LWxpbms+CiAgICAgICAgPC9saT4KICAgICAgPC91bD4KICAgIDwvYS10eXBvZ3JhcGh5LXBhcmFncmFwaD4KCiAgICA8YS10eXBvZ3JhcGh5LXBhcmFncmFwaCA6c2l6ZT0ic2l6ZSI+CiAgICAgIFByZXNzCiAgICAgIDxhLXR5cG9ncmFwaHktdGV4dCBrZXlib2FyZD5Fc2M8L2EtdHlwb2dyYXBoeS10ZXh0PgogICAgICB0byBleGl0Li4uCiAgICA8L2EtdHlwb2dyYXBoeS1wYXJhZ3JhcGg+CgogICAgPGEtZGl2aWRlciAvPgoKICAgIDxhLXR5cG9ncmFwaHktdGl0bGU+5LuL57uNPC9hLXR5cG9ncmFwaHktdGl0bGU+CiAgICA8YS10eXBvZ3JhcGh5LXBhcmFncmFwaCA6c2l6ZT0ic2l6ZSI+CiAgICAgIOiaguiageeahOS8geS4mue6p+S6p+WTgeaYr+S4gOS4quW6nuWkp+S4lOWkjeadgueahOS9k+ezu+OAgui/meexu+S6p+WTgeS4jeS7hemHj+e6p+W3qOWkp+S4lOWKn+iDveWkjeadgu+8jOiAjOS4lOWPmOWKqOWSjOW5tuWPkemikee5ge+8jOW4uOW4uOmcgOimgeiuvuiuoeS4juW8gOWPkeiDveWkn+W/q+mAn+eahOWBmuWHuuWTjeW6lOOAguWQjOaXtui/meexu+S6p+WTgeS4reacieWtmOWcqOW+iOWkmuexu+S8vOeahOmhtemdouS7peWPiue7hOS7tu+8jOWPr+S7pemAmui/h+aKveixoeW+l+WIsOS4gOS6m+eos+WumuS4lOmrmOWkjeeUqOaAp+eahOWGheWuueOAggogICAgPC9hLXR5cG9ncmFwaHktcGFyYWdyYXBoPgogICAgPGEtdHlwb2dyYXBoeS1wYXJhZ3JhcGggOnNpemU9InNpemUiPgogICAgICDpmo/nnYDllYbkuJrljJbnmoTotovlir/vvIzotormnaXotorlpJrnmoTkvIHkuJrnuqfkuqflk4Hlr7nmm7Tlpb3nmoTnlKjmiLfkvZPpqozmnInkuobov5vkuIDmraXnmoTopoHmsYLjgILluKbnnYDov5nmoLfnmoTkuIDkuKrnu4jmnoHnm67moIfvvIzmiJHku6zvvIjomoLomoHph5HmnI3kvZPpqozmioDmnK/pg6jvvInnu4/ov4flpKfph4/nmoTpobnnm67lrp7ot7XlkozmgLvnu5PvvIzpgJDmraXmiZPno6jlh7rkuIDkuKrmnI3liqHkuo7kvIHkuJrnuqfkuqflk4HnmoTorr7orqHkvZPns7sKICAgICAgQW50IERlc2lnbuOAguWfuuS6jgogICAgICA8YS10eXBvZ3JhcGh5LXRleHQgbWFyaz7jgI7noa7lrprjgI/lkozjgI7oh6rnhLbjgI88L2EtdHlwb2dyYXBoeS10ZXh0PgogICAgICDnmoTorr7orqHku7flgLzop4LvvIzpgJrov4fmqKHlnZfljJbnmoTop6PlhrPmlrnmoYjvvIzpmY3kvY7lhpfkvZnnmoTnlJ/kuqfmiJDmnKzvvIzorqnorr7orqHogIXkuJPms6jkuo4KICAgICAgPGEtdHlwb2dyYXBoeS10ZXh0IHN0cm9uZz7mm7Tlpb3nmoTnlKjmiLfkvZPpqow8L2EtdHlwb2dyYXBoeS10ZXh0PgogICAgICDjgIIKICAgIDwvYS10eXBvZ3JhcGh5LXBhcmFncmFwaD4KICAgIDxhLXR5cG9ncmFwaHktdGl0bGUgOmxldmVsPSIyIj7orr7orqHotYTmupA8L2EtdHlwb2dyYXBoeS10aXRsZT4KICAgIDxhLXR5cG9ncmFwaHktcGFyYWdyYXBoIDpzaXplPSJzaXplIj4KICAgICAg5oiR5Lus5o+Q5L6b5a6M5ZaE55qE6K6+6K6h5Y6f5YiZ44CB5pyA5L2z5a6e6Le15ZKM6K6+6K6h6LWE5rqQ5paH5Lu277yICiAgICAgIDxhLXR5cG9ncmFwaHktdGV4dCBjb2RlPlNrZXRjaDwvYS10eXBvZ3JhcGh5LXRleHQ+CiAgICAgIOWSjAogICAgICA8YS10eXBvZ3JhcGh5LXRleHQgY29kZT5BeHVyZTwvYS10eXBvZ3JhcGh5LXRleHQ+CiAgICAgIO+8ie+8jOadpeW4ruWKqeS4muWKoeW/q+mAn+iuvuiuoeWHuumrmOi0qOmHj+eahOS6p+WTgeWOn+Wei+OAggogICAgPC9hLXR5cG9ncmFwaHktcGFyYWdyYXBoPgoKICAgIDxhLXR5cG9ncmFwaHktcGFyYWdyYXBoIDpzaXplPSJzaXplIj4KICAgICAgPHVsPgogICAgICAgIDxsaT4KICAgICAgICAgIDxhLXR5cG9ncmFwaHktbGluayBocmVmPSIvZG9jcy9yZXNvdXJjZXMtY24iPuiuvuiuoei1hOa6kDwvYS10eXBvZ3JhcGh5LWxpbms+CiAgICAgICAgPC9saT4KICAgICAgPC91bD4KICAgIDwvYS10eXBvZ3JhcGh5LXBhcmFncmFwaD4KCiAgICA8YS10eXBvZ3JhcGh5LXBhcmFncmFwaCA6c2l6ZT0ic2l6ZSI+CiAgICAgIDxibG9ja3F1b3RlPnt7IGJsb2NrQ29udGVudCB9fTwvYmxvY2txdW90ZT4KICAgICAgPHByZT57eyBibG9ja0NvbnRlbnQgfX08L3ByZT4KICAgIDwvYS10eXBvZ3JhcGh5LXBhcmFncmFwaD4KCiAgICA8YS10eXBvZ3JhcGh5LXBhcmFncmFwaCA6c2l6ZT0ic2l6ZSI+CiAgICAgIOaMiQogICAgICA8YS10eXBvZ3JhcGh5LXRleHQga2V5Ym9hcmQ+RXNjPC9hLXR5cG9ncmFwaHktdGV4dD4KICAgICAg6ZSu6YCA5Ye66ZiF6K+74oCm4oCmCiAgICA8L2EtdHlwb2dyYXBoeS1wYXJhZ3JhcGg+CiAgPC9hLXR5cG9ncmFwaHk+CjwvdGVtcGxhdGU+CjxzY3JpcHQgbGFuZz0idHMiPgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CgpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgcmV0dXJuIHsKICAgICAgc2l6ZTogcmVmKCdkZWZhdWx0JyksCiAgICAgIGJsb2NrQ29udGVudDogYEFudFYg5piv6JqC6JqB6YeR5pyN5YWo5paw5LiA5Luj5pWw5o2u5Y+v6KeG5YyW6Kej5Yaz5pa55qGI77yM6Ie05Yqb5LqO5o+Q5L6b5LiA5aWX566A5Y2V5pa55L6/44CB5LiT5Lia5Y+v6Z2g44CB5LiN6ZmQ5Y+v6IO955qE5pWw5o2u5Y+v6KeG5YyW5pyA5L2z5a6e6Le144CC5b6X55uK5LqO5Liw5a+M55qE5Lia5Yqh5Zy65pmv5ZKM55So5oi36ZyA5rGC5oyR5oiY77yMQW50ViDnu4/ljoblpJrlubTnp6/ntK/kuI7kuI3mlq3miZPno6jvvIzlt7LmlK/mkpHmlbTkuKrpmL/ph4zpm4blm6LlhoXlpJYgMjAwMDArIOS4muWKoeezu+e7n++8jOmAmui/h+S6huaXpeWdh+WNg+S4h+e6pyBVViDkuqflk4HnmoTkuKXoi5vogIPpqozjgIIK5oiR5Lus5q2j5Zyo5Z+656GA5Zu+6KGo77yM5Zu+5YiG5p6Q77yM5Zu+57yW6L6R77yM5Zyw55CG56m66Ze05Y+v6KeG5YyW77yM5pm66IO95Y+v6KeG5YyW562J5ZCE5Liq5Y+v6KeG5YyW55qE6aKG5Z+f6ICV6ICY77yM5qyi6L+O5ZCM6Lev5Lq65LiA6LW35YmN6KGM44CCYCwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXR5cG9ncmFwaHk+CiAgICA8YS1yYWRpby1ncm91cCB2LW1vZGVsOnZhbHVlPSJzaXplIiBidXR0b24tc3R5bGU9InNvbGlkIj4KICAgICAgPGEtcmFkaW8tYnV0dG9uIHZhbHVlPSJzbWFsbCI+U21hbGw8L2EtcmFkaW8tYnV0dG9uPgogICAgICA8YS1yYWRpby1idXR0b24gdmFsdWU9ImRlZmF1bHQiPkRlZmF1bHQ8L2EtcmFkaW8tYnV0dG9uPgogICAgICA8YS1yYWRpby1idXR0b24gdmFsdWU9ImxhcmdlIj5MYXJnZTwvYS1yYWRpby1idXR0b24+CiAgICA8L2EtcmFkaW8tZ3JvdXA+CiAgICA8YS10eXBvZ3JhcGh5LXRpdGxlPkludHJvZHVjdGlvbjwvYS10eXBvZ3JhcGh5LXRpdGxlPgogICAgPGEtdHlwb2dyYXBoeS1wYXJhZ3JhcGggOnNpemU9InNpemUiPgogICAgICBJbiB0aGUgcHJvY2VzcyBvZiBpbnRlcm5hbCBkZXNrdG9wIGFwcGxpY2F0aW9ucyBkZXZlbG9wbWVudCwgbWFueSBkaWZmZXJlbnQgZGVzaWduIHNwZWNzIGFuZAogICAgICBpbXBsZW1lbnRhdGlvbnMgd291bGQgYmUgaW52b2x2ZWQsIHdoaWNoIG1pZ2h0IGNhdXNlIGRlc2lnbmVycyBhbmQgZGV2ZWxvcGVycyBkaWZmaWN1bHRpZXMgYW5kCiAgICAgIGR1cGxpY2F0aW9uIGFuZCByZWR1Y2UgdGhlIGVmZmljaWVuY3kgb2YgZGV2ZWxvcG1lbnQuCiAgICA8L2EtdHlwb2dyYXBoeS1wYXJhZ3JhcGg+CiAgICA8YS10eXBvZ3JhcGh5LXBhcmFncmFwaCA6c2l6ZT0ic2l6ZSI+CiAgICAgIEFmdGVyIG1hc3NpdmUgcHJvamVjdCBwcmFjdGljZSBhbmQgc3VtbWFyaWVzLCBBbnQgRGVzaWduLCBhIGRlc2lnbiBsYW5ndWFnZSBmb3IgYmFja2dyb3VuZAogICAgICBhcHBsaWNhdGlvbnMsIGlzIHJlZmluZWQgYnkgQW50IFVFRCBUZWFtLCB3aGljaCBhaW1zIHRvCiAgICAgIDxhLXR5cG9ncmFwaHktdGV4dCBzdHJvbmc+CiAgICAgICAgdW5pZm9ybSB0aGUgdXNlciBpbnRlcmZhY2Ugc3BlY3MgZm9yIGludGVybmFsIGJhY2tncm91bmQgcHJvamVjdHMsIGxvd2VyIHRoZSB1bm5lY2Vzc2FyeQogICAgICAgIGNvc3Qgb2YgZGVzaWduIGRpZmZlcmVuY2VzIGFuZCBpbXBsZW1lbnRhdGlvbiBhbmQgbGliZXJhdGUgdGhlIHJlc291cmNlcyBvZiBkZXNpZ24gYW5kCiAgICAgICAgZnJvbnQtZW5kIGRldmVsb3BtZW50LgogICAgICA8L2EtdHlwb2dyYXBoeS10ZXh0PgogICAgPC9hLXR5cG9ncmFwaHktcGFyYWdyYXBoPgogICAgPGEtdHlwb2dyYXBoeS10aXRsZSA6bGV2ZWw9IjIiPkd1aWRlbGluZXMgYW5kIFJlc291cmNlczwvYS10eXBvZ3JhcGh5LXRpdGxlPgogICAgPGEtdHlwb2dyYXBoeS1wYXJhZ3JhcGggOnNpemU9InNpemUiPgogICAgICBXZSBzdXBwbHkgYSBzZXJpZXMgb2YgZGVzaWduIHByaW5jaXBsZXMsIHByYWN0aWNhbCBwYXR0ZXJucyBhbmQgaGlnaCBxdWFsaXR5IGRlc2lnbiByZXNvdXJjZXMKICAgICAgKAogICAgICA8YS10eXBvZ3JhcGh5LXRleHQgY29kZT5Ta2V0Y2g8L2EtdHlwb2dyYXBoeS10ZXh0PgogICAgICBhbmQKICAgICAgPGEtdHlwb2dyYXBoeS10ZXh0IGNvZGU+QXh1cmU8L2EtdHlwb2dyYXBoeS10ZXh0PgogICAgICApLCB0byBoZWxwIHBlb3BsZSBjcmVhdGUgdGhlaXIgcHJvZHVjdCBwcm90b3R5cGVzIGJlYXV0aWZ1bGx5IGFuZCBlZmZpY2llbnRseS4KICAgIDwvYS10eXBvZ3JhcGh5LXBhcmFncmFwaD4KCiAgICA8YS10eXBvZ3JhcGh5LXBhcmFncmFwaCA6c2l6ZT0ic2l6ZSI+CiAgICAgIDx1bD4KICAgICAgICA8bGk+CiAgICAgICAgICA8YS10eXBvZ3JhcGh5LWxpbmsgaHJlZj0iL2RvY3MvcmVzb3VyY2VzIj5SZXNvdXJjZSBEb3dubG9hZDwvYS10eXBvZ3JhcGh5LWxpbms+CiAgICAgICAgPC9saT4KICAgICAgPC91bD4KICAgIDwvYS10eXBvZ3JhcGh5LXBhcmFncmFwaD4KCiAgICA8YS10eXBvZ3JhcGh5LXBhcmFncmFwaCA6c2l6ZT0ic2l6ZSI+CiAgICAgIFByZXNzCiAgICAgIDxhLXR5cG9ncmFwaHktdGV4dCBrZXlib2FyZD5Fc2M8L2EtdHlwb2dyYXBoeS10ZXh0PgogICAgICB0byBleGl0Li4uCiAgICA8L2EtdHlwb2dyYXBoeS1wYXJhZ3JhcGg+CgogICAgPGEtZGl2aWRlciAvPgoKICAgIDxhLXR5cG9ncmFwaHktdGl0bGU+5LuL57uNPC9hLXR5cG9ncmFwaHktdGl0bGU+CiAgICA8YS10eXBvZ3JhcGh5LXBhcmFncmFwaCA6c2l6ZT0ic2l6ZSI+CiAgICAgIOiaguiageeahOS8geS4mue6p+S6p+WTgeaYr+S4gOS4quW6nuWkp+S4lOWkjeadgueahOS9k+ezu+OAgui/meexu+S6p+WTgeS4jeS7hemHj+e6p+W3qOWkp+S4lOWKn+iDveWkjeadgu+8jOiAjOS4lOWPmOWKqOWSjOW5tuWPkemikee5ge+8jOW4uOW4uOmcgOimgeiuvuiuoeS4juW8gOWPkeiDveWkn+W/q+mAn+eahOWBmuWHuuWTjeW6lOOAguWQjOaXtui/meexu+S6p+WTgeS4reacieWtmOWcqOW+iOWkmuexu+S8vOeahOmhtemdouS7peWPiue7hOS7tu+8jOWPr+S7pemAmui/h+aKveixoeW+l+WIsOS4gOS6m+eos+WumuS4lOmrmOWkjeeUqOaAp+eahOWGheWuueOAggogICAgPC9hLXR5cG9ncmFwaHktcGFyYWdyYXBoPgogICAgPGEtdHlwb2dyYXBoeS1wYXJhZ3JhcGggOnNpemU9InNpemUiPgogICAgICDpmo/nnYDllYbkuJrljJbnmoTotovlir/vvIzotormnaXotorlpJrnmoTkvIHkuJrnuqfkuqflk4Hlr7nmm7Tlpb3nmoTnlKjmiLfkvZPpqozmnInkuobov5vkuIDmraXnmoTopoHmsYLjgILluKbnnYDov5nmoLfnmoTkuIDkuKrnu4jmnoHnm67moIfvvIzmiJHku6zvvIjomoLomoHph5HmnI3kvZPpqozmioDmnK/pg6jvvInnu4/ov4flpKfph4/nmoTpobnnm67lrp7ot7XlkozmgLvnu5PvvIzpgJDmraXmiZPno6jlh7rkuIDkuKrmnI3liqHkuo7kvIHkuJrnuqfkuqflk4HnmoTorr7orqHkvZPns7sKICAgICAgQW50IERlc2lnbuOAguWfuuS6jgogICAgICA8YS10eXBvZ3JhcGh5LXRleHQgbWFyaz7jgI7noa7lrprjgI/lkozjgI7oh6rnhLbjgI88L2EtdHlwb2dyYXBoeS10ZXh0PgogICAgICDnmoTorr7orqHku7flgLzop4LvvIzpgJrov4fmqKHlnZfljJbnmoTop6PlhrPmlrnmoYjvvIzpmY3kvY7lhpfkvZnnmoTnlJ/kuqfmiJDmnKzvvIzorqnorr7orqHogIXkuJPms6jkuo4KICAgICAgPGEtdHlwb2dyYXBoeS10ZXh0IHN0cm9uZz7mm7Tlpb3nmoTnlKjmiLfkvZPpqow8L2EtdHlwb2dyYXBoeS10ZXh0PgogICAgICDjgIIKICAgIDwvYS10eXBvZ3JhcGh5LXBhcmFncmFwaD4KICAgIDxhLXR5cG9ncmFwaHktdGl0bGUgOmxldmVsPSIyIj7orr7orqHotYTmupA8L2EtdHlwb2dyYXBoeS10aXRsZT4KICAgIDxhLXR5cG9ncmFwaHktcGFyYWdyYXBoIDpzaXplPSJzaXplIj4KICAgICAg5oiR5Lus5o+Q5L6b5a6M5ZaE55qE6K6+6K6h5Y6f5YiZ44CB5pyA5L2z5a6e6Le15ZKM6K6+6K6h6LWE5rqQ5paH5Lu277yICiAgICAgIDxhLXR5cG9ncmFwaHktdGV4dCBjb2RlPlNrZXRjaDwvYS10eXBvZ3JhcGh5LXRleHQ+CiAgICAgIOWSjAogICAgICA8YS10eXBvZ3JhcGh5LXRleHQgY29kZT5BeHVyZTwvYS10eXBvZ3JhcGh5LXRleHQ+CiAgICAgIO+8ie+8jOadpeW4ruWKqeS4muWKoeW/q+mAn+iuvuiuoeWHuumrmOi0qOmHj+eahOS6p+WTgeWOn+Wei+OAggogICAgPC9hLXR5cG9ncmFwaHktcGFyYWdyYXBoPgoKICAgIDxhLXR5cG9ncmFwaHktcGFyYWdyYXBoIDpzaXplPSJzaXplIj4KICAgICAgPHVsPgogICAgICAgIDxsaT4KICAgICAgICAgIDxhLXR5cG9ncmFwaHktbGluayBocmVmPSIvZG9jcy9yZXNvdXJjZXMtY24iPuiuvuiuoei1hOa6kDwvYS10eXBvZ3JhcGh5LWxpbms+CiAgICAgICAgPC9saT4KICAgICAgPC91bD4KICAgIDwvYS10eXBvZ3JhcGh5LXBhcmFncmFwaD4KCiAgICA8YS10eXBvZ3JhcGh5LXBhcmFncmFwaCA6c2l6ZT0ic2l6ZSI+CiAgICAgIDxibG9ja3F1b3RlPnt7IGJsb2NrQ29udGVudCB9fTwvYmxvY2txdW90ZT4KICAgICAgPHByZT57eyBibG9ja0NvbnRlbnQgfX08L3ByZT4KICAgIDwvYS10eXBvZ3JhcGh5LXBhcmFncmFwaD4KCiAgICA8YS10eXBvZ3JhcGh5LXBhcmFncmFwaCA6c2l6ZT0ic2l6ZSI+CiAgICAgIOaMiQogICAgICA8YS10eXBvZ3JhcGh5LXRleHQga2V5Ym9hcmQ+RXNjPC9hLXR5cG9ncmFwaHktdGV4dD4KICAgICAg6ZSu6YCA5Ye66ZiF6K+74oCm4oCmCiAgICA8L2EtdHlwb2dyYXBoeS1wYXJhZ3JhcGg+CiAgPC9hLXR5cG9ncmFwaHk+CjwvdGVtcGxhdGU+CjxzY3JpcHQ+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIHJldHVybiB7CiAgICAgIHNpemU6IHJlZignZGVmYXVsdCcpLAogICAgICBibG9ja0NvbnRlbnQ6IGBBbnRWIOaYr+iaguiagemHkeacjeWFqOaWsOS4gOS7o+aVsOaNruWPr+inhuWMluino+WGs+aWueahiO+8jOiHtOWKm+S6juaPkOS+m+S4gOWll+eugOWNleaWueS+v+OAgeS4k+S4muWPr+mdoOOAgeS4jemZkOWPr+iDveeahOaVsOaNruWPr+inhuWMluacgOS9s+Wunui3teOAguW+l+ebiuS6juS4sOWvjOeahOS4muWKoeWcuuaZr+WSjOeUqOaIt+mcgOaxguaMkeaImO+8jEFudFYg57uP5Y6G5aSa5bm056ev57Sv5LiO5LiN5pat5omT56Oo77yM5bey5pSv5pKR5pW05Liq6Zi/6YeM6ZuG5Zui5YaF5aSWIDIwMDAwKyDkuJrliqHns7vnu5/vvIzpgJrov4fkuobml6XlnYfljYPkuIfnuqcgVVYg5Lqn5ZOB55qE5Lil6Iub6ICD6aqM44CCCuaIkeS7rOato+WcqOWfuuehgOWbvuihqO+8jOWbvuWIhuaekO+8jOWbvue8lui+ke+8jOWcsOeQhuepuumXtOWPr+inhuWMlu+8jOaZuuiDveWPr+inhuWMluetieWQhOS4quWPr+inhuWMlueahOmihuWfn+iAleiAmO+8jOasoui/juWQjOi3r+S6uuS4gOi1t+WJjeihjOOAgmAsCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:e(()=>[s(v,null,{default:e(()=>[s(r,{value:a.size,"onUpdate:value":l[0]||(l[0]=Y=>a.size=Y),"button-style":"solid"},{default:e(()=>[s(d,{value:"small"},{default:e(()=>[R]),_:1}),s(d,{value:"default"},{default:e(()=>[J]),_:1}),s(d,{value:"large"},{default:e(()=>[x]),_:1})]),_:1},8,["value"]),s(c,null,{default:e(()=>[H]),_:1}),s(p,{size:a.size},{default:e(()=>[V]),_:1},8,["size"]),s(p,{size:a.size},{default:e(()=>[D,s(k,{strong:""},{default:e(()=>[z]),_:1})]),_:1},8,["size"]),s(c,{level:2},{default:e(()=>[P]),_:1}),s(p,{size:a.size},{default:e(()=>[L,s(k,{code:""},{default:e(()=>[N]),_:1}),T,s(k,{code:""},{default:e(()=>[U]),_:1}),j]),_:1},8,["size"]),s(p,{size:a.size},{default:e(()=>[t("ul",null,[t("li",null,[s(g,{href:"/docs/resources"},{default:e(()=>[q]),_:1})])])]),_:1},8,["size"]),s(p,{size:a.size},{default:e(()=>[_,s(k,{keyboard:""},{default:e(()=>[K]),_:1}),Q]),_:1},8,["size"]),s(u),s(c,null,{default:e(()=>[O]),_:1}),s(p,{size:a.size},{default:e(()=>[M]),_:1},8,["size"]),s(p,{size:a.size},{default:e(()=>[$,s(k,{mark:""},{default:e(()=>[tt]),_:1}),nt,s(k,{strong:""},{default:e(()=>[at]),_:1}),st]),_:1},8,["size"]),s(c,{level:2},{default:e(()=>[et]),_:1}),s(p,{size:a.size},{default:e(()=>[ot,s(k,{code:""},{default:e(()=>[lt]),_:1}),ct,s(k,{code:""},{default:e(()=>[pt]),_:1}),ut]),_:1},8,["size"]),s(p,{size:a.size},{default:e(()=>[t("ul",null,[t("li",null,[s(g,{href:"/docs/resources-cn"},{default:e(()=>[it]),_:1})])])]),_:1},8,["size"]),s(p,{size:a.size},{default:e(()=>[t("blockquote",null,X(a.blockContent),1),t("pre",null,X(a.blockContent),1)]),_:1},8,["size"]),s(p,{size:a.size},{default:e(()=>[dt,s(k,{keyboard:""},{default:e(()=>[kt]),_:1}),rt]),_:1},8,["size"])]),_:1})]),htmlCode:e(()=>[gt]),jsVersionHtml:e(()=>[bt]),_:1},8,["jsfiddle"])}var mt=y(S,[["render",ht]]);const yt=G({setup(){return{size:b("default"),blockable:b(!1),resetable:b(!1),centerable:b(!1)}}}),It=t("span",null,"\u5757\u7EA7",-1),Ct=t("span",null,"\u91CD\u7F6E\u6837\u5F0F",-1),At=t("span",null,"\u5C45\u4E2D",-1),vt=n("h1. Water Pro"),Gt=n("h2. Water Pro"),Zt=n("h3. Water Pro"),Bt=n("h4. Water Pro"),Xt=n("h5. Water Pro"),Wt=n("h6. Water Pro"),ft=n("Water Pro (default)"),Yt=n("Water Pro (secondary)"),Ft=n("Water Pro (success)"),wt=n("Water Pro (warning)"),Et=n("Water Pro (danger)"),St=n("Water Pro (disabled)"),Rt=n("Water Pro (mark)"),Jt=n("Water Pro (code)"),xt=n("Water Pro (keyboard)"),Ht=n("Water Pro (underline)"),Vt=n("Water Pro (delete)"),Dt=n("Water Pro (strong)"),zt=n(" Water Pro (Link) "),Pt=t("pre",{class:"language-vue"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-space")]),n(),t("span",{class:"token attr-name"},"direction"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("vertical"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"blockable"),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-space")]),n(),t("span",{class:"token attr-name"},"direction"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("vertical"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"blockable"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-space")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("span")]),t("span",{class:"token punctuation"},">")]),n("\u5757\u7EA7"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("span")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-switch")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("checked")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("blockable"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-space")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-space")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("span")]),t("span",{class:"token punctuation"},">")]),n("\u91CD\u7F6E\u6837\u5F0F"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("span")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-switch")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("checked")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resetable"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-space")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-space")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("span")]),t("span",{class:"token punctuation"},">")]),n("\u5C45\u4E2D"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("span")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-switch")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("checked")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("centerable"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-space")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-space")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),n(),t("span",{class:"token attr-name"},":blockable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("blockable"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":resetable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resetable"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":centerable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("centerable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token punctuation"},">")]),n("h1. Water Pro"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),n(`
      `),t("span",{class:"token attr-name"},":blockable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("blockable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":resetable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resetable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":centerable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("centerable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":level"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("2"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token punctuation"},">")]),n("h2. Water Pro"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),n(`
      `),t("span",{class:"token attr-name"},":blockable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("blockable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":resetable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resetable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":centerable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("centerable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":level"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("3"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token punctuation"},">")]),n("h3. Water Pro"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),n(`
      `),t("span",{class:"token attr-name"},":blockable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("blockable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":resetable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resetable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":centerable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("centerable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":level"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("4"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token punctuation"},">")]),n("h4. Water Pro"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),n(`
      `),t("span",{class:"token attr-name"},":blockable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("blockable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":resetable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resetable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":centerable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("centerable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":level"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("5"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token punctuation"},">")]),n("h5. Water Pro"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),n(`
      `),t("span",{class:"token attr-name"},":blockable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("blockable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":resetable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resetable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":centerable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("centerable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":level"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("6"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token punctuation"},">")]),n("h6. Water Pro"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},":blockable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("blockable"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":resetable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resetable"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":centerable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("centerable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token punctuation"},">")]),n("Water Pro (default)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(`
      `),t("span",{class:"token attr-name"},":blockable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("blockable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":resetable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resetable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":centerable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("centerable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("secondary"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token punctuation"},">")]),n("Water Pro (secondary)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(`
      `),t("span",{class:"token attr-name"},":blockable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("blockable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":resetable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resetable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":centerable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("centerable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("success"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token punctuation"},">")]),n("Water Pro (success)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(`
      `),t("span",{class:"token attr-name"},":blockable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("blockable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":resetable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resetable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":centerable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("centerable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("warning"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token punctuation"},">")]),n("Water Pro (warning)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(`
      `),t("span",{class:"token attr-name"},":blockable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("blockable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":resetable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resetable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":centerable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("centerable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("danger"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token punctuation"},">")]),n("Water Pro (danger)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(`
      `),t("span",{class:"token attr-name"},":blockable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("blockable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":resetable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resetable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":centerable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("centerable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},"disabled"),n(`
      `),t("span",{class:"token punctuation"},">")]),n("Water Pro (disabled)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},":blockable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("blockable"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":resetable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resetable"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":centerable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("centerable"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"mark"),n(`
      `),t("span",{class:"token punctuation"},">")]),n("Water Pro (mark)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},":blockable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("blockable"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":resetable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resetable"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":centerable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("centerable"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"code"),n(`
      `),t("span",{class:"token punctuation"},">")]),n("Water Pro (code)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(`
      `),t("span",{class:"token attr-name"},":blockable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("blockable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":resetable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resetable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":centerable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("centerable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},"keyboard"),n(`
      `),t("span",{class:"token punctuation"},">")]),n("Water Pro (keyboard)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(`
      `),t("span",{class:"token attr-name"},":blockable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("blockable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":resetable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resetable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":centerable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("centerable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},"underline"),n(`
      `),t("span",{class:"token punctuation"},">")]),n("Water Pro (underline)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},":blockable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("blockable"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":resetable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resetable"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":centerable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("centerable"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"delete"),n(`
      `),t("span",{class:"token punctuation"},">")]),n("Water Pro (delete)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},":blockable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("blockable"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":resetable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resetable"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":centerable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("centerable"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"strong"),n(`
      `),t("span",{class:"token punctuation"},">")]),n("Water Pro (strong)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-link")]),n(`
      `),t("span",{class:"token attr-name"},":blockable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("blockable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":resetable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resetable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":centerable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("centerable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},"href"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("https://water-v4.chjgo.com/"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},"target"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("_blank"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
      Water Pro (Link)
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-link")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-space")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      size`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'default'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(`
      blockable`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(`
      resetable`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(`
      centerable`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),Lt=t("pre",{class:"language-vue"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-space")]),n(),t("span",{class:"token attr-name"},"direction"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("vertical"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"blockable"),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-space")]),n(),t("span",{class:"token attr-name"},"direction"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("vertical"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"blockable"),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-space")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("span")]),t("span",{class:"token punctuation"},">")]),n("\u5757\u7EA7"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("span")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-switch")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("checked")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("blockable"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-space")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-space")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("span")]),t("span",{class:"token punctuation"},">")]),n("\u91CD\u7F6E\u6837\u5F0F"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("span")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-switch")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("checked")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resetable"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-space")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-space")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("span")]),t("span",{class:"token punctuation"},">")]),n("\u5C45\u4E2D"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("span")]),t("span",{class:"token punctuation"},">")]),n(`
        `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-switch")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("checked")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("centerable"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-space")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-space")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),n(),t("span",{class:"token attr-name"},":blockable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("blockable"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":resetable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resetable"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":centerable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("centerable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token punctuation"},">")]),n("h1. Water Pro"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),n(`
      `),t("span",{class:"token attr-name"},":blockable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("blockable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":resetable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resetable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":centerable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("centerable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":level"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("2"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token punctuation"},">")]),n("h2. Water Pro"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),n(`
      `),t("span",{class:"token attr-name"},":blockable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("blockable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":resetable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resetable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":centerable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("centerable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":level"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("3"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token punctuation"},">")]),n("h3. Water Pro"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),n(`
      `),t("span",{class:"token attr-name"},":blockable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("blockable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":resetable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resetable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":centerable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("centerable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":level"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("4"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token punctuation"},">")]),n("h4. Water Pro"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),n(`
      `),t("span",{class:"token attr-name"},":blockable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("blockable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":resetable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resetable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":centerable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("centerable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":level"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("5"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token punctuation"},">")]),n("h5. Water Pro"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),n(`
      `),t("span",{class:"token attr-name"},":blockable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("blockable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":resetable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resetable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":centerable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("centerable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":level"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("6"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token punctuation"},">")]),n("h6. Water Pro"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},":blockable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("blockable"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":resetable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resetable"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":centerable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("centerable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token punctuation"},">")]),n("Water Pro (default)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(`
      `),t("span",{class:"token attr-name"},":blockable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("blockable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":resetable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resetable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":centerable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("centerable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("secondary"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token punctuation"},">")]),n("Water Pro (secondary)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(`
      `),t("span",{class:"token attr-name"},":blockable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("blockable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":resetable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resetable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":centerable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("centerable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("success"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token punctuation"},">")]),n("Water Pro (success)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(`
      `),t("span",{class:"token attr-name"},":blockable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("blockable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":resetable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resetable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":centerable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("centerable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("warning"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token punctuation"},">")]),n("Water Pro (warning)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(`
      `),t("span",{class:"token attr-name"},":blockable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("blockable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":resetable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resetable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":centerable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("centerable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("danger"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token punctuation"},">")]),n("Water Pro (danger)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(`
      `),t("span",{class:"token attr-name"},":blockable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("blockable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":resetable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resetable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":centerable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("centerable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},"disabled"),n(`
      `),t("span",{class:"token punctuation"},">")]),n("Water Pro (disabled)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},":blockable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("blockable"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":resetable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resetable"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":centerable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("centerable"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"mark"),n(`
      `),t("span",{class:"token punctuation"},">")]),n("Water Pro (mark)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},":blockable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("blockable"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":resetable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resetable"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":centerable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("centerable"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"code"),n(`
      `),t("span",{class:"token punctuation"},">")]),n("Water Pro (code)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(`
      `),t("span",{class:"token attr-name"},":blockable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("blockable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":resetable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resetable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":centerable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("centerable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},"keyboard"),n(`
      `),t("span",{class:"token punctuation"},">")]),n("Water Pro (keyboard)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(`
      `),t("span",{class:"token attr-name"},":blockable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("blockable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":resetable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resetable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":centerable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("centerable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},"underline"),n(`
      `),t("span",{class:"token punctuation"},">")]),n("Water Pro (underline)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},":blockable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("blockable"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":resetable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resetable"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":centerable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("centerable"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"delete"),n(`
      `),t("span",{class:"token punctuation"},">")]),n("Water Pro (delete)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},":blockable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("blockable"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":resetable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resetable"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":centerable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("centerable"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"strong"),n(`
      `),t("span",{class:"token punctuation"},">")]),n("Water Pro (strong)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-link")]),n(`
      `),t("span",{class:"token attr-name"},":blockable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("blockable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":resetable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("resetable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},":centerable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("centerable"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},"href"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("https://water-v4.chjgo.com/"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token attr-name"},"target"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("_blank"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token punctuation"},">")]),n(`
      Water Pro (Link)
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-link")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-space")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      size`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'default'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(`
      blockable`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(`
      resetable`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(`
      centerable`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"false"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`

`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1);function Nt(a,l,i,m,C,A){const d=o("a-switch"),r=o("a-space"),c=o("a-typography-title"),p=o("a-typography-text"),k=o("a-typography-link"),g=o("demo-box");return h(),I(g,{jsfiddle:{us:"Provides multiple types of text and link.",cn:"resetable , blockable \u548C centerable",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>resetable , blockable \u548C centerable</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Provides multiple types of text and link.</p>
`,order:2,title:{"zh-CN":"\u5757\u7EA7\u5C45\u4E2D","en-US":"Block and center"},relativePath:"components/typography/demo/block.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiIGJsb2NrYWJsZT4KICAgIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiIGJsb2NrYWJsZT4KICAgICAgPGEtc3BhY2U+CiAgICAgICAgPHNwYW4+5Z2X57qnPC9zcGFuPgogICAgICAgIDxhLXN3aXRjaCB2LW1vZGVsOmNoZWNrZWQ9ImJsb2NrYWJsZSIgLz4KICAgICAgPC9hLXNwYWNlPgogICAgICA8YS1zcGFjZT4KICAgICAgICA8c3Bhbj7ph43nva7moLflvI88L3NwYW4+CiAgICAgICAgPGEtc3dpdGNoIHYtbW9kZWw6Y2hlY2tlZD0icmVzZXRhYmxlIiAvPgogICAgICA8L2Etc3BhY2U+CiAgICAgIDxhLXNwYWNlPgogICAgICAgIDxzcGFuPuWxheS4rTwvc3Bhbj4KICAgICAgICA8YS1zd2l0Y2ggdi1tb2RlbDpjaGVja2VkPSJjZW50ZXJhYmxlIiAvPgogICAgICA8L2Etc3BhY2U+CiAgICA8L2Etc3BhY2U+CiAgICA8YS10eXBvZ3JhcGh5LXRpdGxlIDpibG9ja2FibGU9ImJsb2NrYWJsZSIgOnJlc2V0YWJsZT0icmVzZXRhYmxlIiA6Y2VudGVyYWJsZT0iY2VudGVyYWJsZSIKICAgICAgPmgxLiBXYXRlciBQcm88L2EtdHlwb2dyYXBoeS10aXRsZQogICAgPgogICAgPGEtdHlwb2dyYXBoeS10aXRsZQogICAgICA6YmxvY2thYmxlPSJibG9ja2FibGUiCiAgICAgIDpyZXNldGFibGU9InJlc2V0YWJsZSIKICAgICAgOmNlbnRlcmFibGU9ImNlbnRlcmFibGUiCiAgICAgIDpsZXZlbD0iMiIKICAgICAgPmgyLiBXYXRlciBQcm88L2EtdHlwb2dyYXBoeS10aXRsZQogICAgPgogICAgPGEtdHlwb2dyYXBoeS10aXRsZQogICAgICA6YmxvY2thYmxlPSJibG9ja2FibGUiCiAgICAgIDpyZXNldGFibGU9InJlc2V0YWJsZSIKICAgICAgOmNlbnRlcmFibGU9ImNlbnRlcmFibGUiCiAgICAgIDpsZXZlbD0iMyIKICAgICAgPmgzLiBXYXRlciBQcm88L2EtdHlwb2dyYXBoeS10aXRsZQogICAgPgogICAgPGEtdHlwb2dyYXBoeS10aXRsZQogICAgICA6YmxvY2thYmxlPSJibG9ja2FibGUiCiAgICAgIDpyZXNldGFibGU9InJlc2V0YWJsZSIKICAgICAgOmNlbnRlcmFibGU9ImNlbnRlcmFibGUiCiAgICAgIDpsZXZlbD0iNCIKICAgICAgPmg0LiBXYXRlciBQcm88L2EtdHlwb2dyYXBoeS10aXRsZQogICAgPgogICAgPGEtdHlwb2dyYXBoeS10aXRsZQogICAgICA6YmxvY2thYmxlPSJibG9ja2FibGUiCiAgICAgIDpyZXNldGFibGU9InJlc2V0YWJsZSIKICAgICAgOmNlbnRlcmFibGU9ImNlbnRlcmFibGUiCiAgICAgIDpsZXZlbD0iNSIKICAgICAgPmg1LiBXYXRlciBQcm88L2EtdHlwb2dyYXBoeS10aXRsZQogICAgPgogICAgPGEtdHlwb2dyYXBoeS10aXRsZQogICAgICA6YmxvY2thYmxlPSJibG9ja2FibGUiCiAgICAgIDpyZXNldGFibGU9InJlc2V0YWJsZSIKICAgICAgOmNlbnRlcmFibGU9ImNlbnRlcmFibGUiCiAgICAgIDpsZXZlbD0iNiIKICAgICAgPmg2LiBXYXRlciBQcm88L2EtdHlwb2dyYXBoeS10aXRsZQogICAgPgogICAgPGEtdHlwb2dyYXBoeS10ZXh0IDpibG9ja2FibGU9ImJsb2NrYWJsZSIgOnJlc2V0YWJsZT0icmVzZXRhYmxlIiA6Y2VudGVyYWJsZT0iY2VudGVyYWJsZSIKICAgICAgPldhdGVyIFBybyAoZGVmYXVsdCk8L2EtdHlwb2dyYXBoeS10ZXh0CiAgICA+CiAgICA8YS10eXBvZ3JhcGh5LXRleHQKICAgICAgOmJsb2NrYWJsZT0iYmxvY2thYmxlIgogICAgICA6cmVzZXRhYmxlPSJyZXNldGFibGUiCiAgICAgIDpjZW50ZXJhYmxlPSJjZW50ZXJhYmxlIgogICAgICB0eXBlPSJzZWNvbmRhcnkiCiAgICAgID5XYXRlciBQcm8gKHNlY29uZGFyeSk8L2EtdHlwb2dyYXBoeS10ZXh0CiAgICA+CiAgICA8YS10eXBvZ3JhcGh5LXRleHQKICAgICAgOmJsb2NrYWJsZT0iYmxvY2thYmxlIgogICAgICA6cmVzZXRhYmxlPSJyZXNldGFibGUiCiAgICAgIDpjZW50ZXJhYmxlPSJjZW50ZXJhYmxlIgogICAgICB0eXBlPSJzdWNjZXNzIgogICAgICA+V2F0ZXIgUHJvIChzdWNjZXNzKTwvYS10eXBvZ3JhcGh5LXRleHQKICAgID4KICAgIDxhLXR5cG9ncmFwaHktdGV4dAogICAgICA6YmxvY2thYmxlPSJibG9ja2FibGUiCiAgICAgIDpyZXNldGFibGU9InJlc2V0YWJsZSIKICAgICAgOmNlbnRlcmFibGU9ImNlbnRlcmFibGUiCiAgICAgIHR5cGU9Indhcm5pbmciCiAgICAgID5XYXRlciBQcm8gKHdhcm5pbmcpPC9hLXR5cG9ncmFwaHktdGV4dAogICAgPgogICAgPGEtdHlwb2dyYXBoeS10ZXh0CiAgICAgIDpibG9ja2FibGU9ImJsb2NrYWJsZSIKICAgICAgOnJlc2V0YWJsZT0icmVzZXRhYmxlIgogICAgICA6Y2VudGVyYWJsZT0iY2VudGVyYWJsZSIKICAgICAgdHlwZT0iZGFuZ2VyIgogICAgICA+V2F0ZXIgUHJvIChkYW5nZXIpPC9hLXR5cG9ncmFwaHktdGV4dAogICAgPgogICAgPGEtdHlwb2dyYXBoeS10ZXh0CiAgICAgIDpibG9ja2FibGU9ImJsb2NrYWJsZSIKICAgICAgOnJlc2V0YWJsZT0icmVzZXRhYmxlIgogICAgICA6Y2VudGVyYWJsZT0iY2VudGVyYWJsZSIKICAgICAgZGlzYWJsZWQKICAgICAgPldhdGVyIFBybyAoZGlzYWJsZWQpPC9hLXR5cG9ncmFwaHktdGV4dAogICAgPgogICAgPGEtdHlwb2dyYXBoeS10ZXh0IDpibG9ja2FibGU9ImJsb2NrYWJsZSIgOnJlc2V0YWJsZT0icmVzZXRhYmxlIiA6Y2VudGVyYWJsZT0iY2VudGVyYWJsZSIgbWFyawogICAgICA+V2F0ZXIgUHJvIChtYXJrKTwvYS10eXBvZ3JhcGh5LXRleHQKICAgID4KICAgIDxhLXR5cG9ncmFwaHktdGV4dCA6YmxvY2thYmxlPSJibG9ja2FibGUiIDpyZXNldGFibGU9InJlc2V0YWJsZSIgOmNlbnRlcmFibGU9ImNlbnRlcmFibGUiIGNvZGUKICAgICAgPldhdGVyIFBybyAoY29kZSk8L2EtdHlwb2dyYXBoeS10ZXh0CiAgICA+CiAgICA8YS10eXBvZ3JhcGh5LXRleHQKICAgICAgOmJsb2NrYWJsZT0iYmxvY2thYmxlIgogICAgICA6cmVzZXRhYmxlPSJyZXNldGFibGUiCiAgICAgIDpjZW50ZXJhYmxlPSJjZW50ZXJhYmxlIgogICAgICBrZXlib2FyZAogICAgICA+V2F0ZXIgUHJvIChrZXlib2FyZCk8L2EtdHlwb2dyYXBoeS10ZXh0CiAgICA+CiAgICA8YS10eXBvZ3JhcGh5LXRleHQKICAgICAgOmJsb2NrYWJsZT0iYmxvY2thYmxlIgogICAgICA6cmVzZXRhYmxlPSJyZXNldGFibGUiCiAgICAgIDpjZW50ZXJhYmxlPSJjZW50ZXJhYmxlIgogICAgICB1bmRlcmxpbmUKICAgICAgPldhdGVyIFBybyAodW5kZXJsaW5lKTwvYS10eXBvZ3JhcGh5LXRleHQKICAgID4KICAgIDxhLXR5cG9ncmFwaHktdGV4dCA6YmxvY2thYmxlPSJibG9ja2FibGUiIDpyZXNldGFibGU9InJlc2V0YWJsZSIgOmNlbnRlcmFibGU9ImNlbnRlcmFibGUiIGRlbGV0ZQogICAgICA+V2F0ZXIgUHJvIChkZWxldGUpPC9hLXR5cG9ncmFwaHktdGV4dAogICAgPgogICAgPGEtdHlwb2dyYXBoeS10ZXh0IDpibG9ja2FibGU9ImJsb2NrYWJsZSIgOnJlc2V0YWJsZT0icmVzZXRhYmxlIiA6Y2VudGVyYWJsZT0iY2VudGVyYWJsZSIgc3Ryb25nCiAgICAgID5XYXRlciBQcm8gKHN0cm9uZyk8L2EtdHlwb2dyYXBoeS10ZXh0CiAgICA+CiAgICA8YS10eXBvZ3JhcGh5LWxpbmsKICAgICAgOmJsb2NrYWJsZT0iYmxvY2thYmxlIgogICAgICA6cmVzZXRhYmxlPSJyZXNldGFibGUiCiAgICAgIDpjZW50ZXJhYmxlPSJjZW50ZXJhYmxlIgogICAgICBocmVmPSJodHRwczovL3dhdGVyLXY0LmNoamdvLmNvbS8iCiAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgPgogICAgICBXYXRlciBQcm8gKExpbmspCiAgICA8L2EtdHlwb2dyYXBoeS1saW5rPgogIDwvYS1zcGFjZT4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIHJldHVybiB7CiAgICAgIHNpemU6IHJlZignZGVmYXVsdCcpLAogICAgICBibG9ja2FibGU6IHJlZihmYWxzZSksCiAgICAgIHJlc2V0YWJsZTogcmVmKGZhbHNlKSwKICAgICAgY2VudGVyYWJsZTogcmVmKGZhbHNlKSwKICAgIH07CiAgfSwKfSk7Cjwvc2NyaXB0PgoK",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiIGJsb2NrYWJsZT4KICAgIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiIGJsb2NrYWJsZT4KICAgICAgPGEtc3BhY2U+CiAgICAgICAgPHNwYW4+5Z2X57qnPC9zcGFuPgogICAgICAgIDxhLXN3aXRjaCB2LW1vZGVsOmNoZWNrZWQ9ImJsb2NrYWJsZSIgLz4KICAgICAgPC9hLXNwYWNlPgogICAgICA8YS1zcGFjZT4KICAgICAgICA8c3Bhbj7ph43nva7moLflvI88L3NwYW4+CiAgICAgICAgPGEtc3dpdGNoIHYtbW9kZWw6Y2hlY2tlZD0icmVzZXRhYmxlIiAvPgogICAgICA8L2Etc3BhY2U+CiAgICAgIDxhLXNwYWNlPgogICAgICAgIDxzcGFuPuWxheS4rTwvc3Bhbj4KICAgICAgICA8YS1zd2l0Y2ggdi1tb2RlbDpjaGVja2VkPSJjZW50ZXJhYmxlIiAvPgogICAgICA8L2Etc3BhY2U+CiAgICA8L2Etc3BhY2U+CiAgICA8YS10eXBvZ3JhcGh5LXRpdGxlIDpibG9ja2FibGU9ImJsb2NrYWJsZSIgOnJlc2V0YWJsZT0icmVzZXRhYmxlIiA6Y2VudGVyYWJsZT0iY2VudGVyYWJsZSIKICAgICAgPmgxLiBXYXRlciBQcm88L2EtdHlwb2dyYXBoeS10aXRsZQogICAgPgogICAgPGEtdHlwb2dyYXBoeS10aXRsZQogICAgICA6YmxvY2thYmxlPSJibG9ja2FibGUiCiAgICAgIDpyZXNldGFibGU9InJlc2V0YWJsZSIKICAgICAgOmNlbnRlcmFibGU9ImNlbnRlcmFibGUiCiAgICAgIDpsZXZlbD0iMiIKICAgICAgPmgyLiBXYXRlciBQcm88L2EtdHlwb2dyYXBoeS10aXRsZQogICAgPgogICAgPGEtdHlwb2dyYXBoeS10aXRsZQogICAgICA6YmxvY2thYmxlPSJibG9ja2FibGUiCiAgICAgIDpyZXNldGFibGU9InJlc2V0YWJsZSIKICAgICAgOmNlbnRlcmFibGU9ImNlbnRlcmFibGUiCiAgICAgIDpsZXZlbD0iMyIKICAgICAgPmgzLiBXYXRlciBQcm88L2EtdHlwb2dyYXBoeS10aXRsZQogICAgPgogICAgPGEtdHlwb2dyYXBoeS10aXRsZQogICAgICA6YmxvY2thYmxlPSJibG9ja2FibGUiCiAgICAgIDpyZXNldGFibGU9InJlc2V0YWJsZSIKICAgICAgOmNlbnRlcmFibGU9ImNlbnRlcmFibGUiCiAgICAgIDpsZXZlbD0iNCIKICAgICAgPmg0LiBXYXRlciBQcm88L2EtdHlwb2dyYXBoeS10aXRsZQogICAgPgogICAgPGEtdHlwb2dyYXBoeS10aXRsZQogICAgICA6YmxvY2thYmxlPSJibG9ja2FibGUiCiAgICAgIDpyZXNldGFibGU9InJlc2V0YWJsZSIKICAgICAgOmNlbnRlcmFibGU9ImNlbnRlcmFibGUiCiAgICAgIDpsZXZlbD0iNSIKICAgICAgPmg1LiBXYXRlciBQcm88L2EtdHlwb2dyYXBoeS10aXRsZQogICAgPgogICAgPGEtdHlwb2dyYXBoeS10aXRsZQogICAgICA6YmxvY2thYmxlPSJibG9ja2FibGUiCiAgICAgIDpyZXNldGFibGU9InJlc2V0YWJsZSIKICAgICAgOmNlbnRlcmFibGU9ImNlbnRlcmFibGUiCiAgICAgIDpsZXZlbD0iNiIKICAgICAgPmg2LiBXYXRlciBQcm88L2EtdHlwb2dyYXBoeS10aXRsZQogICAgPgogICAgPGEtdHlwb2dyYXBoeS10ZXh0IDpibG9ja2FibGU9ImJsb2NrYWJsZSIgOnJlc2V0YWJsZT0icmVzZXRhYmxlIiA6Y2VudGVyYWJsZT0iY2VudGVyYWJsZSIKICAgICAgPldhdGVyIFBybyAoZGVmYXVsdCk8L2EtdHlwb2dyYXBoeS10ZXh0CiAgICA+CiAgICA8YS10eXBvZ3JhcGh5LXRleHQKICAgICAgOmJsb2NrYWJsZT0iYmxvY2thYmxlIgogICAgICA6cmVzZXRhYmxlPSJyZXNldGFibGUiCiAgICAgIDpjZW50ZXJhYmxlPSJjZW50ZXJhYmxlIgogICAgICB0eXBlPSJzZWNvbmRhcnkiCiAgICAgID5XYXRlciBQcm8gKHNlY29uZGFyeSk8L2EtdHlwb2dyYXBoeS10ZXh0CiAgICA+CiAgICA8YS10eXBvZ3JhcGh5LXRleHQKICAgICAgOmJsb2NrYWJsZT0iYmxvY2thYmxlIgogICAgICA6cmVzZXRhYmxlPSJyZXNldGFibGUiCiAgICAgIDpjZW50ZXJhYmxlPSJjZW50ZXJhYmxlIgogICAgICB0eXBlPSJzdWNjZXNzIgogICAgICA+V2F0ZXIgUHJvIChzdWNjZXNzKTwvYS10eXBvZ3JhcGh5LXRleHQKICAgID4KICAgIDxhLXR5cG9ncmFwaHktdGV4dAogICAgICA6YmxvY2thYmxlPSJibG9ja2FibGUiCiAgICAgIDpyZXNldGFibGU9InJlc2V0YWJsZSIKICAgICAgOmNlbnRlcmFibGU9ImNlbnRlcmFibGUiCiAgICAgIHR5cGU9Indhcm5pbmciCiAgICAgID5XYXRlciBQcm8gKHdhcm5pbmcpPC9hLXR5cG9ncmFwaHktdGV4dAogICAgPgogICAgPGEtdHlwb2dyYXBoeS10ZXh0CiAgICAgIDpibG9ja2FibGU9ImJsb2NrYWJsZSIKICAgICAgOnJlc2V0YWJsZT0icmVzZXRhYmxlIgogICAgICA6Y2VudGVyYWJsZT0iY2VudGVyYWJsZSIKICAgICAgdHlwZT0iZGFuZ2VyIgogICAgICA+V2F0ZXIgUHJvIChkYW5nZXIpPC9hLXR5cG9ncmFwaHktdGV4dAogICAgPgogICAgPGEtdHlwb2dyYXBoeS10ZXh0CiAgICAgIDpibG9ja2FibGU9ImJsb2NrYWJsZSIKICAgICAgOnJlc2V0YWJsZT0icmVzZXRhYmxlIgogICAgICA6Y2VudGVyYWJsZT0iY2VudGVyYWJsZSIKICAgICAgZGlzYWJsZWQKICAgICAgPldhdGVyIFBybyAoZGlzYWJsZWQpPC9hLXR5cG9ncmFwaHktdGV4dAogICAgPgogICAgPGEtdHlwb2dyYXBoeS10ZXh0IDpibG9ja2FibGU9ImJsb2NrYWJsZSIgOnJlc2V0YWJsZT0icmVzZXRhYmxlIiA6Y2VudGVyYWJsZT0iY2VudGVyYWJsZSIgbWFyawogICAgICA+V2F0ZXIgUHJvIChtYXJrKTwvYS10eXBvZ3JhcGh5LXRleHQKICAgID4KICAgIDxhLXR5cG9ncmFwaHktdGV4dCA6YmxvY2thYmxlPSJibG9ja2FibGUiIDpyZXNldGFibGU9InJlc2V0YWJsZSIgOmNlbnRlcmFibGU9ImNlbnRlcmFibGUiIGNvZGUKICAgICAgPldhdGVyIFBybyAoY29kZSk8L2EtdHlwb2dyYXBoeS10ZXh0CiAgICA+CiAgICA8YS10eXBvZ3JhcGh5LXRleHQKICAgICAgOmJsb2NrYWJsZT0iYmxvY2thYmxlIgogICAgICA6cmVzZXRhYmxlPSJyZXNldGFibGUiCiAgICAgIDpjZW50ZXJhYmxlPSJjZW50ZXJhYmxlIgogICAgICBrZXlib2FyZAogICAgICA+V2F0ZXIgUHJvIChrZXlib2FyZCk8L2EtdHlwb2dyYXBoeS10ZXh0CiAgICA+CiAgICA8YS10eXBvZ3JhcGh5LXRleHQKICAgICAgOmJsb2NrYWJsZT0iYmxvY2thYmxlIgogICAgICA6cmVzZXRhYmxlPSJyZXNldGFibGUiCiAgICAgIDpjZW50ZXJhYmxlPSJjZW50ZXJhYmxlIgogICAgICB1bmRlcmxpbmUKICAgICAgPldhdGVyIFBybyAodW5kZXJsaW5lKTwvYS10eXBvZ3JhcGh5LXRleHQKICAgID4KICAgIDxhLXR5cG9ncmFwaHktdGV4dCA6YmxvY2thYmxlPSJibG9ja2FibGUiIDpyZXNldGFibGU9InJlc2V0YWJsZSIgOmNlbnRlcmFibGU9ImNlbnRlcmFibGUiIGRlbGV0ZQogICAgICA+V2F0ZXIgUHJvIChkZWxldGUpPC9hLXR5cG9ncmFwaHktdGV4dAogICAgPgogICAgPGEtdHlwb2dyYXBoeS10ZXh0IDpibG9ja2FibGU9ImJsb2NrYWJsZSIgOnJlc2V0YWJsZT0icmVzZXRhYmxlIiA6Y2VudGVyYWJsZT0iY2VudGVyYWJsZSIgc3Ryb25nCiAgICAgID5XYXRlciBQcm8gKHN0cm9uZyk8L2EtdHlwb2dyYXBoeS10ZXh0CiAgICA+CiAgICA8YS10eXBvZ3JhcGh5LWxpbmsKICAgICAgOmJsb2NrYWJsZT0iYmxvY2thYmxlIgogICAgICA6cmVzZXRhYmxlPSJyZXNldGFibGUiCiAgICAgIDpjZW50ZXJhYmxlPSJjZW50ZXJhYmxlIgogICAgICBocmVmPSJodHRwczovL3dhdGVyLXY0LmNoamdvLmNvbS8iCiAgICAgIHRhcmdldD0iX2JsYW5rIgogICAgPgogICAgICBXYXRlciBQcm8gKExpbmspCiAgICA8L2EtdHlwb2dyYXBoeS1saW5rPgogIDwvYS1zcGFjZT4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgcmV0dXJuIHsKICAgICAgc2l6ZTogcmVmKCdkZWZhdWx0JyksCiAgICAgIGJsb2NrYWJsZTogcmVmKGZhbHNlKSwKICAgICAgcmVzZXRhYmxlOiByZWYoZmFsc2UpLAogICAgICBjZW50ZXJhYmxlOiByZWYoZmFsc2UpLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:e(()=>[s(r,{direction:"vertical",blockable:""},{default:e(()=>[s(r,{direction:"vertical",blockable:""},{default:e(()=>[s(r,null,{default:e(()=>[It,s(d,{checked:a.blockable,"onUpdate:checked":l[0]||(l[0]=u=>a.blockable=u)},null,8,["checked"])]),_:1}),s(r,null,{default:e(()=>[Ct,s(d,{checked:a.resetable,"onUpdate:checked":l[1]||(l[1]=u=>a.resetable=u)},null,8,["checked"])]),_:1}),s(r,null,{default:e(()=>[At,s(d,{checked:a.centerable,"onUpdate:checked":l[2]||(l[2]=u=>a.centerable=u)},null,8,["checked"])]),_:1})]),_:1}),s(c,{blockable:a.blockable,resetable:a.resetable,centerable:a.centerable},{default:e(()=>[vt]),_:1},8,["blockable","resetable","centerable"]),s(c,{blockable:a.blockable,resetable:a.resetable,centerable:a.centerable,level:2},{default:e(()=>[Gt]),_:1},8,["blockable","resetable","centerable"]),s(c,{blockable:a.blockable,resetable:a.resetable,centerable:a.centerable,level:3},{default:e(()=>[Zt]),_:1},8,["blockable","resetable","centerable"]),s(c,{blockable:a.blockable,resetable:a.resetable,centerable:a.centerable,level:4},{default:e(()=>[Bt]),_:1},8,["blockable","resetable","centerable"]),s(c,{blockable:a.blockable,resetable:a.resetable,centerable:a.centerable,level:5},{default:e(()=>[Xt]),_:1},8,["blockable","resetable","centerable"]),s(c,{blockable:a.blockable,resetable:a.resetable,centerable:a.centerable,level:6},{default:e(()=>[Wt]),_:1},8,["blockable","resetable","centerable"]),s(p,{blockable:a.blockable,resetable:a.resetable,centerable:a.centerable},{default:e(()=>[ft]),_:1},8,["blockable","resetable","centerable"]),s(p,{blockable:a.blockable,resetable:a.resetable,centerable:a.centerable,type:"secondary"},{default:e(()=>[Yt]),_:1},8,["blockable","resetable","centerable"]),s(p,{blockable:a.blockable,resetable:a.resetable,centerable:a.centerable,type:"success"},{default:e(()=>[Ft]),_:1},8,["blockable","resetable","centerable"]),s(p,{blockable:a.blockable,resetable:a.resetable,centerable:a.centerable,type:"warning"},{default:e(()=>[wt]),_:1},8,["blockable","resetable","centerable"]),s(p,{blockable:a.blockable,resetable:a.resetable,centerable:a.centerable,type:"danger"},{default:e(()=>[Et]),_:1},8,["blockable","resetable","centerable"]),s(p,{blockable:a.blockable,resetable:a.resetable,centerable:a.centerable,disabled:""},{default:e(()=>[St]),_:1},8,["blockable","resetable","centerable"]),s(p,{blockable:a.blockable,resetable:a.resetable,centerable:a.centerable,mark:""},{default:e(()=>[Rt]),_:1},8,["blockable","resetable","centerable"]),s(p,{blockable:a.blockable,resetable:a.resetable,centerable:a.centerable,code:""},{default:e(()=>[Jt]),_:1},8,["blockable","resetable","centerable"]),s(p,{blockable:a.blockable,resetable:a.resetable,centerable:a.centerable,keyboard:""},{default:e(()=>[xt]),_:1},8,["blockable","resetable","centerable"]),s(p,{blockable:a.blockable,resetable:a.resetable,centerable:a.centerable,underline:""},{default:e(()=>[Ht]),_:1},8,["blockable","resetable","centerable"]),s(p,{blockable:a.blockable,resetable:a.resetable,centerable:a.centerable,delete:""},{default:e(()=>[Vt]),_:1},8,["blockable","resetable","centerable"]),s(p,{blockable:a.blockable,resetable:a.resetable,centerable:a.centerable,strong:""},{default:e(()=>[Dt]),_:1},8,["blockable","resetable","centerable"]),s(k,{blockable:a.blockable,resetable:a.resetable,centerable:a.centerable,href:"https://water-v4.chjgo.com/",target:"_blank"},{default:e(()=>[zt]),_:1},8,["blockable","resetable","centerable"])]),_:1})]),htmlCode:e(()=>[Pt]),jsVersionHtml:e(()=>[Lt]),_:1},8,["jsfiddle"])}var Tt=y(yt,[["render",Nt]]);const Ut=G({setup(){return{size:b("default"),ellipsis:b(!0)}}}),jt=n("Small"),qt=n("Default"),_t=n("Large"),Kt=t("pre",{class:"language-vue"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-space")]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"margin-bottom"),t("span",{class:"token punctuation"},":"),n(" 24px")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-radio-group")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("value")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"button-style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("solid"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-radio-button")]),n(),t("span",{class:"token attr-name"},"value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("small"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Small"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-radio-button")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-radio-button")]),n(),t("span",{class:"token attr-name"},"value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("default"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Default"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-radio-button")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-radio-button")]),n(),t("span",{class:"token attr-name"},"value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("large"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Large"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-radio-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-radio-group")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-switch")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("checked")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ellipsis"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-space")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(`
    `),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":ellipsis"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ellipsis"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"content"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n(` Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team.`),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`

  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(`
    `),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":ellipsis"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ellipsis ? { rows: 2, expandable: true, symbol: "),t("span",{class:"token punctuation"},"'"),n("more"),t("span",{class:"token punctuation"},"'"),n(" } : false"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"content"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n(`Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team.`),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`

  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(`
    `),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ellipsis ? { width: "),t("span",{class:"token punctuation"},"'"),n("100px"),t("span",{class:"token punctuation"},"'"),n(" } : {}"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":ellipsis"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ellipsis ? { rows: 2, tooltip: "),t("span",{class:"token punctuation"},"'"),n("I am ellipsis now!"),t("span",{class:"token punctuation"},"'"),n(" } : false"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"content"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("Ant Design, a design language for background applications, is refined by Ant UED Team."),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      size`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'default'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(`
      ellipsis`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),Qt=t("pre",{class:"language-vue"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-space")]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"margin-bottom"),t("span",{class:"token punctuation"},":"),n(" 24px")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-radio-group")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("value")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"button-style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("solid"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-radio-button")]),n(),t("span",{class:"token attr-name"},"value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("small"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Small"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-radio-button")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-radio-button")]),n(),t("span",{class:"token attr-name"},"value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("default"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Default"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-radio-button")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-radio-button")]),n(),t("span",{class:"token attr-name"},"value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("large"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Large"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-radio-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-radio-group")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-switch")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("checked")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ellipsis"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-space")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(`
    `),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":ellipsis"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ellipsis"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"content"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n(` Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team.`),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`

  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(`
    `),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":ellipsis"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ellipsis ? { rows: 2, expandable: true, symbol: "),t("span",{class:"token punctuation"},"'"),n("more"),t("span",{class:"token punctuation"},"'"),n(" } : false"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"content"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n(`Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team.`),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`

  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(`
    `),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ellipsis ? { width: "),t("span",{class:"token punctuation"},"'"),n("100px"),t("span",{class:"token punctuation"},"'"),n(" } : {}"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":ellipsis"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ellipsis ? { rows: 2, tooltip: "),t("span",{class:"token punctuation"},"'"),n("I am ellipsis now!"),t("span",{class:"token punctuation"},"'"),n(" } : false"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"content"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("Ant Design, a design language for background applications, is refined by Ant UED Team."),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      size`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'default'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(`
      ellipsis`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`

`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1);function Ot(a,l,i,m,C,A){const d=o("a-radio-button"),r=o("a-radio-group"),c=o("a-switch"),p=o("a-space"),k=o("a-typography-paragraph"),g=o("a-typography-text"),u=o("demo-box");return h(),I(u,{jsfiddle:{us:"Multiple line ellipsis support. You can use `tooltip` to config ellipsis tooltip. Recommend `expandable` when have lots of content.",cn:"\u591A\u884C\u6587\u672C\u7701\u7565\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7 `tooltip` \u5C5E\u6027\u914D\u7F6E\u7701\u7565\u5C55\u793A\u5185\u5BB9\uFF0C\u5927\u91CF\u6587\u672C\u65F6\u63A8\u8350\u4F18\u5148\u4F7F\u7528 `expandable`\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u591A\u884C\u6587\u672C\u7701\u7565\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7 <code>tooltip</code> \u5C5E\u6027\u914D\u7F6E\u7701\u7565\u5C55\u793A\u5185\u5BB9\uFF0C\u5927\u91CF\u6587\u672C\u65F6\u63A8\u8350\u4F18\u5148\u4F7F\u7528 <code>expandable</code>\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Multiple line ellipsis support. You can use <code>tooltip</code> to config ellipsis tooltip. Recommend <code>expandable</code> when have lots of content.</p>
`,order:4,title:{"zh-CN":"\u7701\u7565\u53F7","en-US":"Ellipsis"},relativePath:"components/typography/demo/ellipsis.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIHN0eWxlPSJtYXJnaW4tYm90dG9tOiAyNHB4Ij4KICAgIDxhLXJhZGlvLWdyb3VwIHYtbW9kZWw6dmFsdWU9InNpemUiIGJ1dHRvbi1zdHlsZT0ic29saWQiPgogICAgICA8YS1yYWRpby1idXR0b24gdmFsdWU9InNtYWxsIj5TbWFsbDwvYS1yYWRpby1idXR0b24+CiAgICAgIDxhLXJhZGlvLWJ1dHRvbiB2YWx1ZT0iZGVmYXVsdCI+RGVmYXVsdDwvYS1yYWRpby1idXR0b24+CiAgICAgIDxhLXJhZGlvLWJ1dHRvbiB2YWx1ZT0ibGFyZ2UiPkxhcmdlPC9hLXJhZGlvLWJ1dHRvbj4KICAgIDwvYS1yYWRpby1ncm91cD4KICAgIDxhLXN3aXRjaCB2LW1vZGVsOmNoZWNrZWQ9ImVsbGlwc2lzIiAvPgogIDwvYS1zcGFjZT4KICA8YS10eXBvZ3JhcGh5LXBhcmFncmFwaAogICAgOnNpemU9InNpemUiCiAgICA6ZWxsaXBzaXM9ImVsbGlwc2lzIgogICAgY29udGVudD0iIEFudCBEZXNpZ24sIGEgZGVzaWduIGxhbmd1YWdlIGZvciBiYWNrZ3JvdW5kIGFwcGxpY2F0aW9ucywgaXMgcmVmaW5lZCBieSBBbnQgVUVEIFRlYW0uIEFudAogICAgRGVzaWduLCBhIGRlc2lnbiBsYW5ndWFnZSBmb3IgYmFja2dyb3VuZCBhcHBsaWNhdGlvbnMsIGlzIHJlZmluZWQgYnkgQW50IFVFRCBUZWFtLiBBbnQKICAgIERlc2lnbiwgYSBkZXNpZ24gbGFuZ3VhZ2UgZm9yIGJhY2tncm91bmQgYXBwbGljYXRpb25zLCBpcyByZWZpbmVkIGJ5IEFudCBVRUQgVGVhbS4gQW50CiAgICBEZXNpZ24sIGEgZGVzaWduIGxhbmd1YWdlIGZvciBiYWNrZ3JvdW5kIGFwcGxpY2F0aW9ucywgaXMgcmVmaW5lZCBieSBBbnQgVUVEIFRlYW0uIEFudAogICAgRGVzaWduLCBhIGRlc2lnbiBsYW5ndWFnZSBmb3IgYmFja2dyb3VuZCBhcHBsaWNhdGlvbnMsIGlzIHJlZmluZWQgYnkgQW50IFVFRCBUZWFtLiBBbnQKICAgIERlc2lnbiwgYSBkZXNpZ24gbGFuZ3VhZ2UgZm9yIGJhY2tncm91bmQgYXBwbGljYXRpb25zLCBpcyByZWZpbmVkIGJ5IEFudCBVRUQgVGVhbS4iCiAgLz4KCiAgPGEtdHlwb2dyYXBoeS1wYXJhZ3JhcGgKICAgIDpzaXplPSJzaXplIgogICAgOmVsbGlwc2lzPSJlbGxpcHNpcyA/IHsgcm93czogMiwgZXhwYW5kYWJsZTogdHJ1ZSwgc3ltYm9sOiAnbW9yZScgfSA6IGZhbHNlIgogICAgY29udGVudD0iQW50IERlc2lnbiwgYSBkZXNpZ24gbGFuZ3VhZ2UgZm9yIGJhY2tncm91bmQgYXBwbGljYXRpb25zLCBpcyByZWZpbmVkIGJ5IEFudCBVRUQgVGVhbS4gQW50CiAgICBEZXNpZ24sIGEgZGVzaWduIGxhbmd1YWdlIGZvciBiYWNrZ3JvdW5kIGFwcGxpY2F0aW9ucywgaXMgcmVmaW5lZCBieSBBbnQgVUVEIFRlYW0uIEFudAogICAgRGVzaWduLCBhIGRlc2lnbiBsYW5ndWFnZSBmb3IgYmFja2dyb3VuZCBhcHBsaWNhdGlvbnMsIGlzIHJlZmluZWQgYnkgQW50IFVFRCBUZWFtLiBBbnQKICAgIERlc2lnbiwgYSBkZXNpZ24gbGFuZ3VhZ2UgZm9yIGJhY2tncm91bmQgYXBwbGljYXRpb25zLCBpcyByZWZpbmVkIGJ5IEFudCBVRUQgVGVhbS4gQW50CiAgICBEZXNpZ24sIGEgZGVzaWduIGxhbmd1YWdlIGZvciBiYWNrZ3JvdW5kIGFwcGxpY2F0aW9ucywgaXMgcmVmaW5lZCBieSBBbnQgVUVEIFRlYW0uIEFudAogICAgRGVzaWduLCBhIGRlc2lnbiBsYW5ndWFnZSBmb3IgYmFja2dyb3VuZCBhcHBsaWNhdGlvbnMsIGlzIHJlZmluZWQgYnkgQW50IFVFRCBUZWFtLiIKICAvPgoKICA8YS10eXBvZ3JhcGh5LXRleHQKICAgIDpzaXplPSJzaXplIgogICAgOnN0eWxlPSJlbGxpcHNpcyA/IHsgd2lkdGg6ICcxMDBweCcgfSA6IHt9IgogICAgOmVsbGlwc2lzPSJlbGxpcHNpcyA/IHsgcm93czogMiwgdG9vbHRpcDogJ0kgYW0gZWxsaXBzaXMgbm93IScgfSA6IGZhbHNlIgogICAgY29udGVudD0iQW50IERlc2lnbiwgYSBkZXNpZ24gbGFuZ3VhZ2UgZm9yIGJhY2tncm91bmQgYXBwbGljYXRpb25zLCBpcyByZWZpbmVkIGJ5IEFudCBVRUQgVGVhbS4iCiAgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdCBsYW5nPSJ0cyI+CmltcG9ydCB7IGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIHJldHVybiB7CiAgICAgIHNpemU6IHJlZignZGVmYXVsdCcpLAogICAgICBlbGxpcHNpczogcmVmKHRydWUpLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIHN0eWxlPSJtYXJnaW4tYm90dG9tOiAyNHB4Ij4KICAgIDxhLXJhZGlvLWdyb3VwIHYtbW9kZWw6dmFsdWU9InNpemUiIGJ1dHRvbi1zdHlsZT0ic29saWQiPgogICAgICA8YS1yYWRpby1idXR0b24gdmFsdWU9InNtYWxsIj5TbWFsbDwvYS1yYWRpby1idXR0b24+CiAgICAgIDxhLXJhZGlvLWJ1dHRvbiB2YWx1ZT0iZGVmYXVsdCI+RGVmYXVsdDwvYS1yYWRpby1idXR0b24+CiAgICAgIDxhLXJhZGlvLWJ1dHRvbiB2YWx1ZT0ibGFyZ2UiPkxhcmdlPC9hLXJhZGlvLWJ1dHRvbj4KICAgIDwvYS1yYWRpby1ncm91cD4KICAgIDxhLXN3aXRjaCB2LW1vZGVsOmNoZWNrZWQ9ImVsbGlwc2lzIiAvPgogIDwvYS1zcGFjZT4KICA8YS10eXBvZ3JhcGh5LXBhcmFncmFwaAogICAgOnNpemU9InNpemUiCiAgICA6ZWxsaXBzaXM9ImVsbGlwc2lzIgogICAgY29udGVudD0iIEFudCBEZXNpZ24sIGEgZGVzaWduIGxhbmd1YWdlIGZvciBiYWNrZ3JvdW5kIGFwcGxpY2F0aW9ucywgaXMgcmVmaW5lZCBieSBBbnQgVUVEIFRlYW0uIEFudAogICAgRGVzaWduLCBhIGRlc2lnbiBsYW5ndWFnZSBmb3IgYmFja2dyb3VuZCBhcHBsaWNhdGlvbnMsIGlzIHJlZmluZWQgYnkgQW50IFVFRCBUZWFtLiBBbnQKICAgIERlc2lnbiwgYSBkZXNpZ24gbGFuZ3VhZ2UgZm9yIGJhY2tncm91bmQgYXBwbGljYXRpb25zLCBpcyByZWZpbmVkIGJ5IEFudCBVRUQgVGVhbS4gQW50CiAgICBEZXNpZ24sIGEgZGVzaWduIGxhbmd1YWdlIGZvciBiYWNrZ3JvdW5kIGFwcGxpY2F0aW9ucywgaXMgcmVmaW5lZCBieSBBbnQgVUVEIFRlYW0uIEFudAogICAgRGVzaWduLCBhIGRlc2lnbiBsYW5ndWFnZSBmb3IgYmFja2dyb3VuZCBhcHBsaWNhdGlvbnMsIGlzIHJlZmluZWQgYnkgQW50IFVFRCBUZWFtLiBBbnQKICAgIERlc2lnbiwgYSBkZXNpZ24gbGFuZ3VhZ2UgZm9yIGJhY2tncm91bmQgYXBwbGljYXRpb25zLCBpcyByZWZpbmVkIGJ5IEFudCBVRUQgVGVhbS4iCiAgLz4KCiAgPGEtdHlwb2dyYXBoeS1wYXJhZ3JhcGgKICAgIDpzaXplPSJzaXplIgogICAgOmVsbGlwc2lzPSJlbGxpcHNpcyA/IHsgcm93czogMiwgZXhwYW5kYWJsZTogdHJ1ZSwgc3ltYm9sOiAnbW9yZScgfSA6IGZhbHNlIgogICAgY29udGVudD0iQW50IERlc2lnbiwgYSBkZXNpZ24gbGFuZ3VhZ2UgZm9yIGJhY2tncm91bmQgYXBwbGljYXRpb25zLCBpcyByZWZpbmVkIGJ5IEFudCBVRUQgVGVhbS4gQW50CiAgICBEZXNpZ24sIGEgZGVzaWduIGxhbmd1YWdlIGZvciBiYWNrZ3JvdW5kIGFwcGxpY2F0aW9ucywgaXMgcmVmaW5lZCBieSBBbnQgVUVEIFRlYW0uIEFudAogICAgRGVzaWduLCBhIGRlc2lnbiBsYW5ndWFnZSBmb3IgYmFja2dyb3VuZCBhcHBsaWNhdGlvbnMsIGlzIHJlZmluZWQgYnkgQW50IFVFRCBUZWFtLiBBbnQKICAgIERlc2lnbiwgYSBkZXNpZ24gbGFuZ3VhZ2UgZm9yIGJhY2tncm91bmQgYXBwbGljYXRpb25zLCBpcyByZWZpbmVkIGJ5IEFudCBVRUQgVGVhbS4gQW50CiAgICBEZXNpZ24sIGEgZGVzaWduIGxhbmd1YWdlIGZvciBiYWNrZ3JvdW5kIGFwcGxpY2F0aW9ucywgaXMgcmVmaW5lZCBieSBBbnQgVUVEIFRlYW0uIEFudAogICAgRGVzaWduLCBhIGRlc2lnbiBsYW5ndWFnZSBmb3IgYmFja2dyb3VuZCBhcHBsaWNhdGlvbnMsIGlzIHJlZmluZWQgYnkgQW50IFVFRCBUZWFtLiIKICAvPgoKICA8YS10eXBvZ3JhcGh5LXRleHQKICAgIDpzaXplPSJzaXplIgogICAgOnN0eWxlPSJlbGxpcHNpcyA/IHsgd2lkdGg6ICcxMDBweCcgfSA6IHt9IgogICAgOmVsbGlwc2lzPSJlbGxpcHNpcyA/IHsgcm93czogMiwgdG9vbHRpcDogJ0kgYW0gZWxsaXBzaXMgbm93IScgfSA6IGZhbHNlIgogICAgY29udGVudD0iQW50IERlc2lnbiwgYSBkZXNpZ24gbGFuZ3VhZ2UgZm9yIGJhY2tncm91bmQgYXBwbGljYXRpb25zLCBpcyByZWZpbmVkIGJ5IEFudCBVRUQgVGVhbS4iCiAgLz4KPC90ZW1wbGF0ZT4KPHNjcmlwdD4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgcmV0dXJuIHsKICAgICAgc2l6ZTogcmVmKCdkZWZhdWx0JyksCiAgICAgIGVsbGlwc2lzOiByZWYodHJ1ZSksCiAgICB9OwogIH0sCgp9KTsKPC9zY3JpcHQ+"}},{default:e(()=>[s(p,{style:{"margin-bottom":"24px"}},{default:e(()=>[s(r,{value:a.size,"onUpdate:value":l[0]||(l[0]=v=>a.size=v),"button-style":"solid"},{default:e(()=>[s(d,{value:"small"},{default:e(()=>[jt]),_:1}),s(d,{value:"default"},{default:e(()=>[qt]),_:1}),s(d,{value:"large"},{default:e(()=>[_t]),_:1})]),_:1},8,["value"]),s(c,{checked:a.ellipsis,"onUpdate:checked":l[1]||(l[1]=v=>a.ellipsis=v)},null,8,["checked"])]),_:1}),s(k,{size:a.size,ellipsis:a.ellipsis,content:` Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team.`},null,8,["size","ellipsis"]),s(k,{size:a.size,ellipsis:a.ellipsis?{rows:2,expandable:!0,symbol:"more"}:!1,content:`Ant Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team. Ant
    Design, a design language for background applications, is refined by Ant UED Team.`},null,8,["size","ellipsis"]),s(g,{size:a.size,style:F(a.ellipsis?{width:"100px"}:{}),ellipsis:a.ellipsis?{rows:2,tooltip:"I am ellipsis now!"}:!1,content:"Ant Design, a design language for background applications, is refined by Ant UED Team."},null,8,["size","style","ellipsis"])]),htmlCode:e(()=>[Kt]),jsVersionHtml:e(()=>[Qt]),_:1},8,["jsfiddle"])}var Mt=y(Ut,[["render",Ot]]),$t=W("byted-edit-two",!1,function(a){return s("svg",{width:a.size,height:a.size,viewBox:"0 0 48 48",fill:"none"},[s("path",{d:"M42 26V40C42 41.1046 41.1046 42 40 42H8C6.89543 42 6 41.1046 6 40V8C6 6.89543 6.89543 6 8 6L22 6",stroke:a.colors[0],"stroke-width":a.strokeWidth,"stroke-linecap":a.strokeLinecap,"stroke-linejoin":a.strokeLinejoin},null),s("path",{d:"M14 26.7199V34H21.3172L42 13.3081L34.6951 6L14 26.7199Z",fill:a.colors[1],stroke:a.colors[0],"stroke-width":a.strokeWidth,"stroke-linejoin":a.strokeLinejoin},null)])}),tn=$t,nn=W("byted-emotion-happy",!1,function(a){return s("svg",{width:a.size,height:a.size,viewBox:"0 0 48 48",fill:"none"},[s("path",{d:"M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",fill:a.colors[1],stroke:a.colors[0],"stroke-width":a.strokeWidth,"stroke-linejoin":a.strokeLinejoin},null),s("path",{d:"M31 18V19",stroke:a.colors[2],"stroke-width":a.strokeWidth,"stroke-linecap":a.strokeLinecap,"stroke-linejoin":a.strokeLinejoin},null),s("path",{d:"M17 18V19",stroke:a.colors[2],"stroke-width":a.strokeWidth,"stroke-linecap":a.strokeLinecap,"stroke-linejoin":a.strokeLinejoin},null),s("path",{d:"M31 31C31 31 29 35 24 35C19 35 17 31 17 31",stroke:a.colors[2],"stroke-width":a.strokeWidth,"stroke-linecap":a.strokeLinecap,"stroke-linejoin":a.strokeLinejoin},null)])}),an=nn;const sn=G({setup(){const a=b("This is an editable text.");return w(a,()=>{console.log("editableStr",a.value)}),{size:b("default"),editableStr:a,customIconStr:b("Custom Edit icon and replace tooltip text."),hideTooltipStr:b("Hide Edit tooltip."),lengthLimitedStr:b("This is an editable text with limited length.")}},components:{IconBytedEditTwo:tn,IconBytedEmotionHappy:an}}),en=n("Small"),on=n("Default"),ln=n("Large"),cn=n("click to edit text"),pn=n("This is a copyable text."),un=n(" Replace copy text. "),dn={key:"copy-tooltip"},kn={key:"copied-tooltip"},rn=n(" Hide Copy tooltips. "),gn=t("pre",{class:"language-vue"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-radio-group")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("value")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"button-style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("solid"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"margin-bottom"),t("span",{class:"token punctuation"},":"),n(" 24px")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-radio-button")]),n(),t("span",{class:"token attr-name"},"value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("small"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Small"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-radio-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-radio-button")]),n(),t("span",{class:"token attr-name"},"value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("default"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Default"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-radio-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-radio-button")]),n(),t("span",{class:"token attr-name"},"value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("large"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Large"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-radio-button")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-radio-group")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("content")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("editableStr"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"editable"),n(),t("span",{class:"token punctuation"},"/>")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("content")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("customIconStr"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"editable"),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-slot:"),n("editableIcon")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IconBytedEditTwo")]),n(),t("span",{class:"token attr-name"},":colors"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("["),t("span",{class:"token punctuation"},"'"),n("currentColor"),t("span",{class:"token punctuation"},"'"),n("]"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-slot:"),n("editableTooltip")]),t("span",{class:"token punctuation"},">")]),n("click to edit text"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-paragraph")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(`
    `),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("content")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("hideTooltipStr"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":editable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ tooltip: false }"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(`
    `),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("content")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("lengthLimitedStr"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":editable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ maxlength: 50, autoSize: { maxRows: 5, minRows: 3 } }"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`

  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"copyable"),t("span",{class:"token punctuation"},">")]),n("This is a copyable text."),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-paragraph")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":copyable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ text: "),t("span",{class:"token punctuation"},"'"),n("Hello, Ant Design!"),t("span",{class:"token punctuation"},"'"),n(" }"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    Replace copy text.
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-paragraph")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(`
    `),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"copyable"),n(`
    `),t("span",{class:"token attr-name"},"content"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("Custom Copy icon and replace tooltips text."),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-slot:"),n("copyableIcon")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ copied }"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IconBytedEmotionHappy")]),n(`
        `),t("span",{class:"token attr-name"},":theme"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("copied ? "),t("span",{class:"token punctuation"},"'"),t("span",{class:"token punctuation"},"'"),n(" : "),t("span",{class:"token punctuation"},"'"),n("filled"),t("span",{class:"token punctuation"},"'"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},":colors"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("["),t("span",{class:"token punctuation"},"'"),n("currentColor"),t("span",{class:"token punctuation"},"'"),n("]"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},"key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("copy-icon"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token punctuation"},"/>")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-slot:"),n("copyableTooltip")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ copied }"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("span")]),n(),t("span",{class:"token attr-name"},"v-if"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("!copied"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("copy-tooltip"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("click here"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("span")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("span")]),n(),t("span",{class:"token attr-name"},"v-else"),n(),t("span",{class:"token attr-name"},"key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("copied-tooltip"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("you clicked!!"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("span")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-paragraph")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":copyable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ tooltip: false }"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    Hide Copy tooltips.
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-paragraph")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref"),t("span",{class:"token punctuation"},","),n(" watch "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token keyword"},"import"),n(" IconBytedEditTwo "),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-edit-two'"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token keyword"},"import"),n(" IconBytedEmotionHappy "),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-emotion-happy'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" editableStr "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'This is an editable text.'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token function"},"watch"),t("span",{class:"token punctuation"},"("),n("editableStr"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'editableStr'"),t("span",{class:"token punctuation"},","),n(" editableStr"),t("span",{class:"token punctuation"},"."),n("value"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      size`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'default'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(`
      editableStr`),t("span",{class:"token punctuation"},","),n(`
      customIconStr`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'Custom Edit icon and replace tooltip text.'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(`
      hideTooltipStr`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'Hide Edit tooltip.'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(`
      lengthLimitedStr`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'This is an editable text with limited length.'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
  components`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
    IconBytedEditTwo`),t("span",{class:"token punctuation"},","),n(`
    IconBytedEmotionHappy`),t("span",{class:"token punctuation"},","),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),bn=t("pre",{class:"language-vue"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-radio-group")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("value")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"button-style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("solid"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"margin-bottom"),t("span",{class:"token punctuation"},":"),n(" 24px")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-radio-button")]),n(),t("span",{class:"token attr-name"},"value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("small"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Small"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-radio-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-radio-button")]),n(),t("span",{class:"token attr-name"},"value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("default"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Default"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-radio-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-radio-button")]),n(),t("span",{class:"token attr-name"},"value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("large"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Large"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-radio-button")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-radio-group")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("content")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("editableStr"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"editable"),n(),t("span",{class:"token punctuation"},"/>")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("content")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("customIconStr"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"editable"),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-slot:"),n("editableIcon")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IconBytedEditTwo")]),n(),t("span",{class:"token attr-name"},":colors"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("["),t("span",{class:"token punctuation"},"'"),n("currentColor"),t("span",{class:"token punctuation"},"'"),n("]"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-slot:"),n("editableTooltip")]),t("span",{class:"token punctuation"},">")]),n("click to edit text"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-paragraph")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(`
    `),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("content")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("hideTooltipStr"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":editable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ tooltip: false }"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(`
    `),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("content")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("lengthLimitedStr"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":editable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ maxlength: 50, autoSize: { maxRows: 5, minRows: 3 } }"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},"/>")]),n(`

  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"copyable"),t("span",{class:"token punctuation"},">")]),n("This is a copyable text."),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-paragraph")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":copyable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ text: "),t("span",{class:"token punctuation"},"'"),n("Hello, Ant Design!"),t("span",{class:"token punctuation"},"'"),n(" }"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    Replace copy text.
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-paragraph")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(`
    `),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},"copyable"),n(`
    `),t("span",{class:"token attr-name"},"content"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("Custom Copy icon and replace tooltips text."),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-slot:"),n("copyableIcon")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ copied }"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("IconBytedEmotionHappy")]),n(`
        `),t("span",{class:"token attr-name"},":theme"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("copied ? "),t("span",{class:"token punctuation"},"'"),t("span",{class:"token punctuation"},"'"),n(" : "),t("span",{class:"token punctuation"},"'"),n("filled"),t("span",{class:"token punctuation"},"'"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},":colors"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("["),t("span",{class:"token punctuation"},"'"),n("currentColor"),t("span",{class:"token punctuation"},"'"),n("]"),t("span",{class:"token punctuation"},'"')]),n(`
        `),t("span",{class:"token attr-name"},"key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("copy-icon"),t("span",{class:"token punctuation"},'"')]),n(`
      `),t("span",{class:"token punctuation"},"/>")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-slot:"),n("copyableTooltip")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ copied }"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("span")]),n(),t("span",{class:"token attr-name"},"v-if"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("!copied"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("copy-tooltip"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("click here"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("span")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("span")]),n(),t("span",{class:"token attr-name"},"v-else"),n(),t("span",{class:"token attr-name"},"key"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("copied-tooltip"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("you clicked!!"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("span")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-paragraph")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":copyable"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("{ tooltip: false }"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    Hide Copy tooltips.
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-paragraph")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref"),t("span",{class:"token punctuation"},","),n(" watch "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token keyword"},"import"),n(" IconBytedEditTwo "),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-edit-two'"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token keyword"},"import"),n(" IconBytedEmotionHappy "),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'@fe6/icon-vue/lib/icons/byted-emotion-happy'"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`

  components`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"{"),n(`
    IconBytedEditTwo`),t("span",{class:"token punctuation"},","),n(`
    IconBytedEmotionHappy`),t("span",{class:"token punctuation"},","),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" editableStr "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'This is an editable text.'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token function"},"watch"),t("span",{class:"token punctuation"},"("),n("editableStr"),t("span",{class:"token punctuation"},","),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'editableStr'"),t("span",{class:"token punctuation"},","),n(" editableStr"),t("span",{class:"token punctuation"},"."),n("value"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      size`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'default'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(`
      editableStr`),t("span",{class:"token punctuation"},","),n(`
      customIconStr`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'Custom Edit icon and replace tooltip text.'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(`
      hideTooltipStr`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'Hide Edit tooltip.'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(`
      lengthLimitedStr`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'This is an editable text with limited length.'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1);function hn(a,l,i,m,C,A){const d=o("a-radio-button"),r=o("a-radio-group"),c=o("a-typography-paragraph"),p=o("IconBytedEditTwo"),k=o("IconBytedEmotionHappy"),g=o("demo-box");return h(),I(g,{jsfiddle:{us:"TODO",cn:"\u63D0\u4F9B\u53EF\u7F16\u8F91\u548C\u53EF\u590D\u5236\u7B49\u989D\u5916\u7684\u4EA4\u4E92\u80FD\u529B\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u63D0\u4F9B\u53EF\u7F16\u8F91\u548C\u53EF\u590D\u5236\u7B49\u989D\u5916\u7684\u4EA4\u4E92\u80FD\u529B\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>TODO</p>
`,order:0,title:{"zh-CN":"\u53EF\u4EA4\u4E92","en-US":"Edit"},relativePath:"components/typography/demo/edit.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXJhZGlvLWdyb3VwIHYtbW9kZWw6dmFsdWU9InNpemUiIGJ1dHRvbi1zdHlsZT0ic29saWQiIHN0eWxlPSJtYXJnaW4tYm90dG9tOiAyNHB4Ij4KICAgIDxhLXJhZGlvLWJ1dHRvbiB2YWx1ZT0ic21hbGwiPlNtYWxsPC9hLXJhZGlvLWJ1dHRvbj4KICAgIDxhLXJhZGlvLWJ1dHRvbiB2YWx1ZT0iZGVmYXVsdCI+RGVmYXVsdDwvYS1yYWRpby1idXR0b24+CiAgICA8YS1yYWRpby1idXR0b24gdmFsdWU9ImxhcmdlIj5MYXJnZTwvYS1yYWRpby1idXR0b24+CiAgPC9hLXJhZGlvLWdyb3VwPgogIDxhLXR5cG9ncmFwaHktcGFyYWdyYXBoIDpzaXplPSJzaXplIiB2LW1vZGVsOmNvbnRlbnQ9ImVkaXRhYmxlU3RyIiBlZGl0YWJsZSAvPgogIDxhLXR5cG9ncmFwaHktcGFyYWdyYXBoIDpzaXplPSJzaXplIiB2LW1vZGVsOmNvbnRlbnQ9ImN1c3RvbUljb25TdHIiIGVkaXRhYmxlPgogICAgPHRlbXBsYXRlIHYtc2xvdDplZGl0YWJsZUljb24+PEljb25CeXRlZEVkaXRUd28gOmNvbG9ycz0iWydjdXJyZW50Q29sb3InXSIgLz48L3RlbXBsYXRlPgogICAgPHRlbXBsYXRlIHYtc2xvdDplZGl0YWJsZVRvb2x0aXA+Y2xpY2sgdG8gZWRpdCB0ZXh0PC90ZW1wbGF0ZT4KICA8L2EtdHlwb2dyYXBoeS1wYXJhZ3JhcGg+CiAgPGEtdHlwb2dyYXBoeS1wYXJhZ3JhcGgKICAgIDpzaXplPSJzaXplIgogICAgdi1tb2RlbDpjb250ZW50PSJoaWRlVG9vbHRpcFN0ciIKICAgIDplZGl0YWJsZT0ieyB0b29sdGlwOiBmYWxzZSB9IgogIC8+CiAgPGEtdHlwb2dyYXBoeS1wYXJhZ3JhcGgKICAgIDpzaXplPSJzaXplIgogICAgdi1tb2RlbDpjb250ZW50PSJsZW5ndGhMaW1pdGVkU3RyIgogICAgOmVkaXRhYmxlPSJ7IG1heGxlbmd0aDogNTAsIGF1dG9TaXplOiB7IG1heFJvd3M6IDUsIG1pblJvd3M6IDMgfSB9IgogIC8+CgogIDxhLXR5cG9ncmFwaHktcGFyYWdyYXBoIDpzaXplPSJzaXplIiBjb3B5YWJsZT5UaGlzIGlzIGEgY29weWFibGUgdGV4dC48L2EtdHlwb2dyYXBoeS1wYXJhZ3JhcGg+CiAgPGEtdHlwb2dyYXBoeS1wYXJhZ3JhcGggOnNpemU9InNpemUiIDpjb3B5YWJsZT0ieyB0ZXh0OiAnSGVsbG8sIEFudCBEZXNpZ24hJyB9Ij4KICAgIFJlcGxhY2UgY29weSB0ZXh0LgogIDwvYS10eXBvZ3JhcGh5LXBhcmFncmFwaD4KICA8YS10eXBvZ3JhcGh5LXBhcmFncmFwaAogICAgOnNpemU9InNpemUiCiAgICBjb3B5YWJsZQogICAgY29udGVudD0iQ3VzdG9tIENvcHkgaWNvbiBhbmQgcmVwbGFjZSB0b29sdGlwcyB0ZXh0LiIKICA+CiAgICA8dGVtcGxhdGUgdi1zbG90OmNvcHlhYmxlSWNvbj0ieyBjb3BpZWQgfSI+CiAgICAgIDxJY29uQnl0ZWRFbW90aW9uSGFwcHkKICAgICAgICA6dGhlbWU9ImNvcGllZCA/ICcnIDogJ2ZpbGxlZCciCiAgICAgICAgOmNvbG9ycz0iWydjdXJyZW50Q29sb3InXSIKICAgICAgICBrZXk9ImNvcHktaWNvbiIKICAgICAgLz4KICAgIDwvdGVtcGxhdGU+CiAgICA8dGVtcGxhdGUgdi1zbG90OmNvcHlhYmxlVG9vbHRpcD0ieyBjb3BpZWQgfSI+CiAgICAgIDxzcGFuIHYtaWY9IiFjb3BpZWQiIGtleT0iY29weS10b29sdGlwIj5jbGljayBoZXJlPC9zcGFuPgogICAgICA8c3BhbiB2LWVsc2Uga2V5PSJjb3BpZWQtdG9vbHRpcCI+eW91IGNsaWNrZWQhITwvc3Bhbj4KICAgIDwvdGVtcGxhdGU+CiAgPC9hLXR5cG9ncmFwaHktcGFyYWdyYXBoPgogIDxhLXR5cG9ncmFwaHktcGFyYWdyYXBoIDpzaXplPSJzaXplIiA6Y29weWFibGU9InsgdG9vbHRpcDogZmFsc2UgfSI+CiAgICBIaWRlIENvcHkgdG9vbHRpcHMuCiAgPC9hLXR5cG9ncmFwaHktcGFyYWdyYXBoPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYsIHdhdGNoIH0gZnJvbSAndnVlJzsKaW1wb3J0IEljb25CeXRlZEVkaXRUd28gZnJvbSAnQGZlNi9pY29uLXZ1ZS9saWIvaWNvbnMvYnl0ZWQtZWRpdC10d28nOwppbXBvcnQgSWNvbkJ5dGVkRW1vdGlvbkhhcHB5IGZyb20gJ0BmZTYvaWNvbi12dWUvbGliL2ljb25zL2J5dGVkLWVtb3Rpb24taGFwcHknOwoKZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29tcG9uZW50KHsKICBzZXR1cCgpIHsKICAgIGNvbnN0IGVkaXRhYmxlU3RyID0gcmVmKCdUaGlzIGlzIGFuIGVkaXRhYmxlIHRleHQuJyk7CiAgICB3YXRjaChlZGl0YWJsZVN0ciwgKCkgPT4gewogICAgICBjb25zb2xlLmxvZygnZWRpdGFibGVTdHInLCBlZGl0YWJsZVN0ci52YWx1ZSk7CiAgICB9KTsKICAgIHJldHVybiB7CiAgICAgIHNpemU6IHJlZignZGVmYXVsdCcpLAogICAgICBlZGl0YWJsZVN0ciwKICAgICAgY3VzdG9tSWNvblN0cjogcmVmKCdDdXN0b20gRWRpdCBpY29uIGFuZCByZXBsYWNlIHRvb2x0aXAgdGV4dC4nKSwKICAgICAgaGlkZVRvb2x0aXBTdHI6IHJlZignSGlkZSBFZGl0IHRvb2x0aXAuJyksCiAgICAgIGxlbmd0aExpbWl0ZWRTdHI6IHJlZignVGhpcyBpcyBhbiBlZGl0YWJsZSB0ZXh0IHdpdGggbGltaXRlZCBsZW5ndGguJyksCiAgICB9OwogIH0sCiAgY29tcG9uZW50czogewogICAgSWNvbkJ5dGVkRWRpdFR3bywKICAgIEljb25CeXRlZEVtb3Rpb25IYXBweSwKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXJhZGlvLWdyb3VwIHYtbW9kZWw6dmFsdWU9InNpemUiIGJ1dHRvbi1zdHlsZT0ic29saWQiIHN0eWxlPSJtYXJnaW4tYm90dG9tOiAyNHB4Ij4KICAgIDxhLXJhZGlvLWJ1dHRvbiB2YWx1ZT0ic21hbGwiPlNtYWxsPC9hLXJhZGlvLWJ1dHRvbj4KICAgIDxhLXJhZGlvLWJ1dHRvbiB2YWx1ZT0iZGVmYXVsdCI+RGVmYXVsdDwvYS1yYWRpby1idXR0b24+CiAgICA8YS1yYWRpby1idXR0b24gdmFsdWU9ImxhcmdlIj5MYXJnZTwvYS1yYWRpby1idXR0b24+CiAgPC9hLXJhZGlvLWdyb3VwPgogIDxhLXR5cG9ncmFwaHktcGFyYWdyYXBoIDpzaXplPSJzaXplIiB2LW1vZGVsOmNvbnRlbnQ9ImVkaXRhYmxlU3RyIiBlZGl0YWJsZSAvPgogIDxhLXR5cG9ncmFwaHktcGFyYWdyYXBoIDpzaXplPSJzaXplIiB2LW1vZGVsOmNvbnRlbnQ9ImN1c3RvbUljb25TdHIiIGVkaXRhYmxlPgogICAgPHRlbXBsYXRlIHYtc2xvdDplZGl0YWJsZUljb24+PEljb25CeXRlZEVkaXRUd28gOmNvbG9ycz0iWydjdXJyZW50Q29sb3InXSIgLz48L3RlbXBsYXRlPgogICAgPHRlbXBsYXRlIHYtc2xvdDplZGl0YWJsZVRvb2x0aXA+Y2xpY2sgdG8gZWRpdCB0ZXh0PC90ZW1wbGF0ZT4KICA8L2EtdHlwb2dyYXBoeS1wYXJhZ3JhcGg+CiAgPGEtdHlwb2dyYXBoeS1wYXJhZ3JhcGgKICAgIDpzaXplPSJzaXplIgogICAgdi1tb2RlbDpjb250ZW50PSJoaWRlVG9vbHRpcFN0ciIKICAgIDplZGl0YWJsZT0ieyB0b29sdGlwOiBmYWxzZSB9IgogIC8+CiAgPGEtdHlwb2dyYXBoeS1wYXJhZ3JhcGgKICAgIDpzaXplPSJzaXplIgogICAgdi1tb2RlbDpjb250ZW50PSJsZW5ndGhMaW1pdGVkU3RyIgogICAgOmVkaXRhYmxlPSJ7IG1heGxlbmd0aDogNTAsIGF1dG9TaXplOiB7IG1heFJvd3M6IDUsIG1pblJvd3M6IDMgfSB9IgogIC8+CgogIDxhLXR5cG9ncmFwaHktcGFyYWdyYXBoIDpzaXplPSJzaXplIiBjb3B5YWJsZT5UaGlzIGlzIGEgY29weWFibGUgdGV4dC48L2EtdHlwb2dyYXBoeS1wYXJhZ3JhcGg+CiAgPGEtdHlwb2dyYXBoeS1wYXJhZ3JhcGggOnNpemU9InNpemUiIDpjb3B5YWJsZT0ieyB0ZXh0OiAnSGVsbG8sIEFudCBEZXNpZ24hJyB9Ij4KICAgIFJlcGxhY2UgY29weSB0ZXh0LgogIDwvYS10eXBvZ3JhcGh5LXBhcmFncmFwaD4KICA8YS10eXBvZ3JhcGh5LXBhcmFncmFwaAogICAgOnNpemU9InNpemUiCiAgICBjb3B5YWJsZQogICAgY29udGVudD0iQ3VzdG9tIENvcHkgaWNvbiBhbmQgcmVwbGFjZSB0b29sdGlwcyB0ZXh0LiIKICA+CiAgICA8dGVtcGxhdGUgdi1zbG90OmNvcHlhYmxlSWNvbj0ieyBjb3BpZWQgfSI+CiAgICAgIDxJY29uQnl0ZWRFbW90aW9uSGFwcHkKICAgICAgICA6dGhlbWU9ImNvcGllZCA/ICcnIDogJ2ZpbGxlZCciCiAgICAgICAgOmNvbG9ycz0iWydjdXJyZW50Q29sb3InXSIKICAgICAgICBrZXk9ImNvcHktaWNvbiIKICAgICAgLz4KICAgIDwvdGVtcGxhdGU+CiAgICA8dGVtcGxhdGUgdi1zbG90OmNvcHlhYmxlVG9vbHRpcD0ieyBjb3BpZWQgfSI+CiAgICAgIDxzcGFuIHYtaWY9IiFjb3BpZWQiIGtleT0iY29weS10b29sdGlwIj5jbGljayBoZXJlPC9zcGFuPgogICAgICA8c3BhbiB2LWVsc2Uga2V5PSJjb3BpZWQtdG9vbHRpcCI+eW91IGNsaWNrZWQhITwvc3Bhbj4KICAgIDwvdGVtcGxhdGU+CiAgPC9hLXR5cG9ncmFwaHktcGFyYWdyYXBoPgogIDxhLXR5cG9ncmFwaHktcGFyYWdyYXBoIDpzaXplPSJzaXplIiA6Y29weWFibGU9InsgdG9vbHRpcDogZmFsc2UgfSI+CiAgICBIaWRlIENvcHkgdG9vbHRpcHMuCiAgPC9hLXR5cG9ncmFwaHktcGFyYWdyYXBoPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiwgd2F0Y2ggfSBmcm9tICd2dWUnOwppbXBvcnQgSWNvbkJ5dGVkRWRpdFR3byBmcm9tICdAZmU2L2ljb24tdnVlL2xpYi9pY29ucy9ieXRlZC1lZGl0LXR3byc7CmltcG9ydCBJY29uQnl0ZWRFbW90aW9uSGFwcHkgZnJvbSAnQGZlNi9pY29uLXZ1ZS9saWIvaWNvbnMvYnl0ZWQtZW1vdGlvbi1oYXBweSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CgogIGNvbXBvbmVudHM6IHsKICAgIEljb25CeXRlZEVkaXRUd28sCiAgICBJY29uQnl0ZWRFbW90aW9uSGFwcHksCiAgfSwKICBzZXR1cCgpIHsKICAgIGNvbnN0IGVkaXRhYmxlU3RyID0gcmVmKCdUaGlzIGlzIGFuIGVkaXRhYmxlIHRleHQuJyk7CiAgICB3YXRjaChlZGl0YWJsZVN0ciwgKCkgPT4gewogICAgICBjb25zb2xlLmxvZygnZWRpdGFibGVTdHInLCBlZGl0YWJsZVN0ci52YWx1ZSk7CiAgICB9KTsKICAgIHJldHVybiB7CiAgICAgIHNpemU6IHJlZignZGVmYXVsdCcpLAogICAgICBlZGl0YWJsZVN0ciwKICAgICAgY3VzdG9tSWNvblN0cjogcmVmKCdDdXN0b20gRWRpdCBpY29uIGFuZCByZXBsYWNlIHRvb2x0aXAgdGV4dC4nKSwKICAgICAgaGlkZVRvb2x0aXBTdHI6IHJlZignSGlkZSBFZGl0IHRvb2x0aXAuJyksCiAgICAgIGxlbmd0aExpbWl0ZWRTdHI6IHJlZignVGhpcyBpcyBhbiBlZGl0YWJsZSB0ZXh0IHdpdGggbGltaXRlZCBsZW5ndGguJyksCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4="}},{default:e(()=>[s(r,{value:a.size,"onUpdate:value":l[0]||(l[0]=u=>a.size=u),"button-style":"solid",style:{"margin-bottom":"24px"}},{default:e(()=>[s(d,{value:"small"},{default:e(()=>[en]),_:1}),s(d,{value:"default"},{default:e(()=>[on]),_:1}),s(d,{value:"large"},{default:e(()=>[ln]),_:1})]),_:1},8,["value"]),s(c,{size:a.size,content:a.editableStr,"onUpdate:content":l[1]||(l[1]=u=>a.editableStr=u),editable:""},null,8,["size","content"]),s(c,{size:a.size,content:a.customIconStr,"onUpdate:content":l[2]||(l[2]=u=>a.customIconStr=u),editable:""},{editableIcon:e(()=>[s(p,{colors:["currentColor"]})]),editableTooltip:e(()=>[cn]),_:1},8,["size","content"]),s(c,{size:a.size,content:a.hideTooltipStr,"onUpdate:content":l[3]||(l[3]=u=>a.hideTooltipStr=u),editable:{tooltip:!1}},null,8,["size","content"]),s(c,{size:a.size,content:a.lengthLimitedStr,"onUpdate:content":l[4]||(l[4]=u=>a.lengthLimitedStr=u),editable:{maxlength:50,autoSize:{maxRows:5,minRows:3}}},null,8,["size","content"]),s(c,{size:a.size,copyable:""},{default:e(()=>[pn]),_:1},8,["size"]),s(c,{size:a.size,copyable:{text:"Hello, Ant Design!"}},{default:e(()=>[un]),_:1},8,["size"]),s(c,{size:a.size,copyable:"",content:"Custom Copy icon and replace tooltips text."},{copyableIcon:e(({copied:u})=>[s(k,{theme:u?"":"filled",colors:["currentColor"],key:"copy-icon"},null,8,["theme"])]),copyableTooltip:e(({copied:u})=>[u?(h(),Z("span",kn,"you clicked!!")):(h(),Z("span",dn,"click here"))]),_:1},8,["size"]),s(c,{size:a.size,copyable:{tooltip:!1}},{default:e(()=>[rn]),_:1},8,["size"])]),htmlCode:e(()=>[gn]),jsVersionHtml:e(()=>[bn]),_:1},8,["jsfiddle"])}var mn=y(sn,[["render",hn]]);const yn=G({setup(){const a=b(1),l=E(()=>({rows:a.value,expandable:!0,suffix:"--William Shakespeare",onEllipsis:i=>{console.log("Ellipsis changed:",i)}}));return{size:b("default"),rows:a,ellipsis:l,article:"To be, or not to be, that is a question: Whether it is nobler in the mind to suffer. The slings and arrows of outrageous fortune Or to take arms against a sea of troubles, And by opposing end them? To die: to sleep; No more; and by a sleep to say we end The heart-ache and the thousand natural shocks That flesh is heir to, 'tis a consummation Devoutly to be wish'd. To die, to sleep To sleep- perchance to dream: ay, there's the rub! For in that sleep of death what dreams may come When we have shuffled off this mortal coil, Must give us pause. There 's the respect That makes calamity of so long life"}}}),In=n("Small"),Cn=n("Default"),An=n("Large"),vn=t("pre",{class:"language-vue"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-slider")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("value")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("rows"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":min"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("1"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":max"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("10"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-radio-group")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("value")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"button-style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("solid"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"margin-bottom"),t("span",{class:"token punctuation"},":"),n(" 24px")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-radio-button")]),n(),t("span",{class:"token attr-name"},"value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("small"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Small"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-radio-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-radio-button")]),n(),t("span",{class:"token attr-name"},"value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("default"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Default"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-radio-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-radio-button")]),n(),t("span",{class:"token attr-name"},"value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("large"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Large"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-radio-button")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-radio-group")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(`
    `),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":ellipsis"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ellipsis"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("`${article}--William Shakespeare`"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":content"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("article"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-paragraph")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" computed"),t("span",{class:"token punctuation"},","),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`

`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" rows "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" ellipsis "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"computed"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
        rows`),t("span",{class:"token operator"},":"),n(" rows"),t("span",{class:"token punctuation"},"."),n("value"),t("span",{class:"token punctuation"},","),n(`
        expandable`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
        suffix`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'--William Shakespeare'"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token function-variable function"},"onEllipsis"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[n("ellipsis"),t("span",{class:"token operator"},":"),n(" boolean")]),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
          console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'Ellipsis changed:'"),t("span",{class:"token punctuation"},","),n(" ellipsis"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      size`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'default'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(`
      rows`),t("span",{class:"token punctuation"},","),n(`
      ellipsis`),t("span",{class:"token punctuation"},","),n(`
      article`),t("span",{class:"token operator"},":"),n(`
        `),t("span",{class:"token string"},`"To be, or not to be, that is a question: Whether it is nobler in the mind to suffer. The slings and arrows of outrageous fortune Or to take arms against a sea of troubles, And by opposing end them? To die: to sleep; No more; and by a sleep to say we end The heart-ache and the thousand natural shocks That flesh is heir to, 'tis a consummation Devoutly to be wish'd. To die, to sleep To sleep- perchance to dream: ay, there's the rub! For in that sleep of death what dreams may come When we have shuffled off this mortal coil, Must give us pause. There 's the respect That makes calamity of so long life"`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),Gn=t("pre",{class:"language-vue"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-slider")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("value")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("rows"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":min"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("1"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":max"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("10"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token punctuation"},"/>")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-radio-group")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("value")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"button-style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("solid"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"margin-bottom"),t("span",{class:"token punctuation"},":"),n(" 24px")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-radio-button")]),n(),t("span",{class:"token attr-name"},"value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("small"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Small"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-radio-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-radio-button")]),n(),t("span",{class:"token attr-name"},"value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("default"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Default"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-radio-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-radio-button")]),n(),t("span",{class:"token attr-name"},"value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("large"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Large"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-radio-button")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-radio-group")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-paragraph")]),n(`
    `),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":ellipsis"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ellipsis"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":title"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("`${article}--William Shakespeare`"),t("span",{class:"token punctuation"},'"')]),n(`
    `),t("span",{class:"token attr-name"},":content"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("article"),t("span",{class:"token punctuation"},'"')]),n(`
  `),t("span",{class:"token punctuation"},">")]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-paragraph")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" computed"),t("span",{class:"token punctuation"},","),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" rows "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"1"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"const"),n(" ellipsis "),t("span",{class:"token operator"},"="),n(),t("span",{class:"token function"},"computed"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
      `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
        rows`),t("span",{class:"token operator"},":"),n(" rows"),t("span",{class:"token punctuation"},"."),n("value"),t("span",{class:"token punctuation"},","),n(`
        expandable`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token boolean"},"true"),t("span",{class:"token punctuation"},","),n(`
        suffix`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},"'--William Shakespeare'"),t("span",{class:"token punctuation"},","),n(`
        `),t("span",{class:"token function-variable function"},"onEllipsis"),t("span",{class:"token operator"},":"),n(),t("span",{class:"token parameter"},"ellipsis"),n(),t("span",{class:"token operator"},"=>"),n(),t("span",{class:"token punctuation"},"{"),n(`
          console`),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'Ellipsis changed:'"),t("span",{class:"token punctuation"},","),n(" ellipsis"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
        `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
      `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      size`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'default'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(`
      rows`),t("span",{class:"token punctuation"},","),n(`
      ellipsis`),t("span",{class:"token punctuation"},","),n(`
      article`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token string"},`"To be, or not to be, that is a question: Whether it is nobler in the mind to suffer. The slings and arrows of outrageous fortune Or to take arms against a sea of troubles, And by opposing end them? To die: to sleep; No more; and by a sleep to say we end The heart-ache and the thousand natural shocks That flesh is heir to, 'tis a consummation Devoutly to be wish'd. To die, to sleep To sleep- perchance to dream: ay, there's the rub! For in that sleep of death what dreams may come When we have shuffled off this mortal coil, Must give us pause. There 's the respect That makes calamity of so long life"`),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`

`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1);function Zn(a,l,i,m,C,A){const d=o("a-slider"),r=o("a-radio-button"),c=o("a-radio-group"),p=o("a-typography-paragraph"),k=o("demo-box");return h(),I(k,{jsfiddle:{us:"add suffix ellipsis support.",cn:"\u6DFB\u52A0\u540E\u7F00\u7684\u7701\u7565\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u6DFB\u52A0\u540E\u7F00\u7684\u7701\u7565\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>add suffix ellipsis support.</p>
`,order:100,title:{"zh-CN":"\u540E\u7F00","en-US":"suffix"},relativePath:"components/typography/demo/suffix.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNsaWRlciB2LW1vZGVsOnZhbHVlPSJyb3dzIiA6bWluPSIxIiA6bWF4PSIxMCIgLz4KICA8YS1yYWRpby1ncm91cCB2LW1vZGVsOnZhbHVlPSJzaXplIiBidXR0b24tc3R5bGU9InNvbGlkIiBzdHlsZT0ibWFyZ2luLWJvdHRvbTogMjRweCI+CiAgICA8YS1yYWRpby1idXR0b24gdmFsdWU9InNtYWxsIj5TbWFsbDwvYS1yYWRpby1idXR0b24+CiAgICA8YS1yYWRpby1idXR0b24gdmFsdWU9ImRlZmF1bHQiPkRlZmF1bHQ8L2EtcmFkaW8tYnV0dG9uPgogICAgPGEtcmFkaW8tYnV0dG9uIHZhbHVlPSJsYXJnZSI+TGFyZ2U8L2EtcmFkaW8tYnV0dG9uPgogIDwvYS1yYWRpby1ncm91cD4KICA8YS10eXBvZ3JhcGh5LXBhcmFncmFwaAogICAgOnNpemU9InNpemUiCiAgICA6ZWxsaXBzaXM9ImVsbGlwc2lzIgogICAgOnRpdGxlPSJgJHthcnRpY2xlfS0tV2lsbGlhbSBTaGFrZXNwZWFyZWAiCiAgICA6Y29udGVudD0iYXJ0aWNsZSIKICA+PC9hLXR5cG9ncmFwaHktcGFyYWdyYXBoPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgY29tcHV0ZWQsIGRlZmluZUNvbXBvbmVudCwgcmVmIH0gZnJvbSAndnVlJzsKCmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICBjb25zdCByb3dzID0gcmVmKDEpOwogICAgY29uc3QgZWxsaXBzaXMgPSBjb21wdXRlZCgoKSA9PiB7CiAgICAgIHJldHVybiB7CiAgICAgICAgcm93czogcm93cy52YWx1ZSwKICAgICAgICBleHBhbmRhYmxlOiB0cnVlLAogICAgICAgIHN1ZmZpeDogJy0tV2lsbGlhbSBTaGFrZXNwZWFyZScsCiAgICAgICAgb25FbGxpcHNpczogKGVsbGlwc2lzOiBib29sZWFuKSA9PiB7CiAgICAgICAgICBjb25zb2xlLmxvZygnRWxsaXBzaXMgY2hhbmdlZDonLCBlbGxpcHNpcyk7CiAgICAgICAgfSwKICAgICAgfTsKICAgIH0pOwogICAgcmV0dXJuIHsKICAgICAgc2l6ZTogcmVmKCdkZWZhdWx0JyksCiAgICAgIHJvd3MsCiAgICAgIGVsbGlwc2lzLAogICAgICBhcnRpY2xlOgogICAgICAgICJUbyBiZSwgb3Igbm90IHRvIGJlLCB0aGF0IGlzIGEgcXVlc3Rpb246IFdoZXRoZXIgaXQgaXMgbm9ibGVyIGluIHRoZSBtaW5kIHRvIHN1ZmZlci4gVGhlIHNsaW5ncyBhbmQgYXJyb3dzIG9mIG91dHJhZ2VvdXMgZm9ydHVuZSBPciB0byB0YWtlIGFybXMgYWdhaW5zdCBhIHNlYSBvZiB0cm91YmxlcywgQW5kIGJ5IG9wcG9zaW5nIGVuZCB0aGVtPyBUbyBkaWU6IHRvIHNsZWVwOyBObyBtb3JlOyBhbmQgYnkgYSBzbGVlcCB0byBzYXkgd2UgZW5kIFRoZSBoZWFydC1hY2hlIGFuZCB0aGUgdGhvdXNhbmQgbmF0dXJhbCBzaG9ja3MgVGhhdCBmbGVzaCBpcyBoZWlyIHRvLCAndGlzIGEgY29uc3VtbWF0aW9uIERldm91dGx5IHRvIGJlIHdpc2gnZC4gVG8gZGllLCB0byBzbGVlcCBUbyBzbGVlcC0gcGVyY2hhbmNlIHRvIGRyZWFtOiBheSwgdGhlcmUncyB0aGUgcnViISBGb3IgaW4gdGhhdCBzbGVlcCBvZiBkZWF0aCB3aGF0IGRyZWFtcyBtYXkgY29tZSBXaGVuIHdlIGhhdmUgc2h1ZmZsZWQgb2ZmIHRoaXMgbW9ydGFsIGNvaWwsIE11c3QgZ2l2ZSB1cyBwYXVzZS4gVGhlcmUgJ3MgdGhlIHJlc3BlY3QgVGhhdCBtYWtlcyBjYWxhbWl0eSBvZiBzbyBsb25nIGxpZmUiLAogICAgfTsKICB9LAp9KTsKPC9zY3JpcHQ+Cgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNsaWRlciB2LW1vZGVsOnZhbHVlPSJyb3dzIiA6bWluPSIxIiA6bWF4PSIxMCIgLz4KICA8YS1yYWRpby1ncm91cCB2LW1vZGVsOnZhbHVlPSJzaXplIiBidXR0b24tc3R5bGU9InNvbGlkIiBzdHlsZT0ibWFyZ2luLWJvdHRvbTogMjRweCI+CiAgICA8YS1yYWRpby1idXR0b24gdmFsdWU9InNtYWxsIj5TbWFsbDwvYS1yYWRpby1idXR0b24+CiAgICA8YS1yYWRpby1idXR0b24gdmFsdWU9ImRlZmF1bHQiPkRlZmF1bHQ8L2EtcmFkaW8tYnV0dG9uPgogICAgPGEtcmFkaW8tYnV0dG9uIHZhbHVlPSJsYXJnZSI+TGFyZ2U8L2EtcmFkaW8tYnV0dG9uPgogIDwvYS1yYWRpby1ncm91cD4KICA8YS10eXBvZ3JhcGh5LXBhcmFncmFwaAogICAgOnNpemU9InNpemUiCiAgICA6ZWxsaXBzaXM9ImVsbGlwc2lzIgogICAgOnRpdGxlPSJgJHthcnRpY2xlfS0tV2lsbGlhbSBTaGFrZXNwZWFyZWAiCiAgICA6Y29udGVudD0iYXJ0aWNsZSIKICA+PC9hLXR5cG9ncmFwaHktcGFyYWdyYXBoPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBjb21wdXRlZCwgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgY29uc3Qgcm93cyA9IHJlZigxKTsKICAgIGNvbnN0IGVsbGlwc2lzID0gY29tcHV0ZWQoKCkgPT4gewogICAgICByZXR1cm4gewogICAgICAgIHJvd3M6IHJvd3MudmFsdWUsCiAgICAgICAgZXhwYW5kYWJsZTogdHJ1ZSwKICAgICAgICBzdWZmaXg6ICctLVdpbGxpYW0gU2hha2VzcGVhcmUnLAogICAgICAgIG9uRWxsaXBzaXM6IGVsbGlwc2lzID0+IHsKICAgICAgICAgIGNvbnNvbGUubG9nKCdFbGxpcHNpcyBjaGFuZ2VkOicsIGVsbGlwc2lzKTsKICAgICAgICB9LAogICAgICB9OwogICAgfSk7CiAgICByZXR1cm4gewogICAgICBzaXplOiByZWYoJ2RlZmF1bHQnKSwKICAgICAgcm93cywKICAgICAgZWxsaXBzaXMsCiAgICAgIGFydGljbGU6ICJUbyBiZSwgb3Igbm90IHRvIGJlLCB0aGF0IGlzIGEgcXVlc3Rpb246IFdoZXRoZXIgaXQgaXMgbm9ibGVyIGluIHRoZSBtaW5kIHRvIHN1ZmZlci4gVGhlIHNsaW5ncyBhbmQgYXJyb3dzIG9mIG91dHJhZ2VvdXMgZm9ydHVuZSBPciB0byB0YWtlIGFybXMgYWdhaW5zdCBhIHNlYSBvZiB0cm91YmxlcywgQW5kIGJ5IG9wcG9zaW5nIGVuZCB0aGVtPyBUbyBkaWU6IHRvIHNsZWVwOyBObyBtb3JlOyBhbmQgYnkgYSBzbGVlcCB0byBzYXkgd2UgZW5kIFRoZSBoZWFydC1hY2hlIGFuZCB0aGUgdGhvdXNhbmQgbmF0dXJhbCBzaG9ja3MgVGhhdCBmbGVzaCBpcyBoZWlyIHRvLCAndGlzIGEgY29uc3VtbWF0aW9uIERldm91dGx5IHRvIGJlIHdpc2gnZC4gVG8gZGllLCB0byBzbGVlcCBUbyBzbGVlcC0gcGVyY2hhbmNlIHRvIGRyZWFtOiBheSwgdGhlcmUncyB0aGUgcnViISBGb3IgaW4gdGhhdCBzbGVlcCBvZiBkZWF0aCB3aGF0IGRyZWFtcyBtYXkgY29tZSBXaGVuIHdlIGhhdmUgc2h1ZmZsZWQgb2ZmIHRoaXMgbW9ydGFsIGNvaWwsIE11c3QgZ2l2ZSB1cyBwYXVzZS4gVGhlcmUgJ3MgdGhlIHJlc3BlY3QgVGhhdCBtYWtlcyBjYWxhbWl0eSBvZiBzbyBsb25nIGxpZmUiLAogICAgfTsKICB9LAoKfSk7Cjwvc2NyaXB0Pg=="}},{default:e(()=>[s(d,{value:a.rows,"onUpdate:value":l[0]||(l[0]=g=>a.rows=g),min:1,max:10},null,8,["value"]),s(c,{value:a.size,"onUpdate:value":l[1]||(l[1]=g=>a.size=g),"button-style":"solid",style:{"margin-bottom":"24px"}},{default:e(()=>[s(r,{value:"small"},{default:e(()=>[In]),_:1}),s(r,{value:"default"},{default:e(()=>[Cn]),_:1}),s(r,{value:"large"},{default:e(()=>[An]),_:1})]),_:1},8,["value"]),s(p,{size:a.size,ellipsis:a.ellipsis,title:`${a.article}--William Shakespeare`,content:a.article},null,8,["size","ellipsis","title","content"])]),htmlCode:e(()=>[vn]),jsVersionHtml:e(()=>[Gn]),_:1},8,["jsfiddle"])}var Bn=y(yn,[["render",Zn]]);const Xn=G({setup(){return{size:b("default")}}}),Wn=n("Small"),fn=n("Default"),Yn=n("Large"),Fn=n("Water Pro (default)"),wn=n("Water Pro (secondary)"),En=n("Water Pro (primary)"),Sn=n("Water Pro (success)"),Rn=n("Water Pro (warning)"),Jn=n("Water Pro (danger)"),xn=n("Water Pro (disabled)"),Hn=n("Water Pro (mark)"),Vn=n("Water Pro (code)"),Dn=n("Water Pro (keyboard)"),zn=n("Water Pro (underline)"),Pn=n("Water Pro (delete)"),Ln=n("Water Pro (strong)"),Nn=n(" Water Pro (Link) "),Tn=t("pre",{class:"language-vue"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-space")]),n(),t("span",{class:"token attr-name"},"direction"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("vertical"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-radio-group")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("value")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"button-style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("solid"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"margin-bottom"),t("span",{class:"token punctuation"},":"),n(" 24px")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-radio-button")]),n(),t("span",{class:"token attr-name"},"value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("small"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Small"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-radio-button")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-radio-button")]),n(),t("span",{class:"token attr-name"},"value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("default"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Default"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-radio-button")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-radio-button")]),n(),t("span",{class:"token attr-name"},"value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("large"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Large"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-radio-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-radio-group")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Water Pro (default)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("secondary"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Water Pro (secondary)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("primary"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Water Pro (primary)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("success"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Water Pro (success)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("warning"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Water Pro (warning)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("danger"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Water Pro (danger)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"disabled"),t("span",{class:"token punctuation"},">")]),n("Water Pro (disabled)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"mark"),t("span",{class:"token punctuation"},">")]),n("Water Pro (mark)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"code"),t("span",{class:"token punctuation"},">")]),n("Water Pro (code)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"keyboard"),t("span",{class:"token punctuation"},">")]),n("Water Pro (keyboard)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"underline"),t("span",{class:"token punctuation"},">")]),n("Water Pro (underline)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"delete"),t("span",{class:"token punctuation"},">")]),n("Water Pro (delete)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"strong"),t("span",{class:"token punctuation"},">")]),n("Water Pro (strong)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-link")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"href"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("https://water-v4.chjgo.com/"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"target"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("_blank"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      Water Pro (Link)
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-link")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-space")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),n(),t("span",{class:"token attr-name"},"lang"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("ts"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      size`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'default'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`
`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),Un=t("pre",{class:"language-vue"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-space")]),n(),t("span",{class:"token attr-name"},"direction"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("vertical"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-radio-group")]),n(),t("span",{class:"token attr-name"},[t("span",{class:"token namespace"},"v-model:"),n("value")]),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"button-style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("solid"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token special-attr"},[t("span",{class:"token attr-name"},"style"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),t("span",{class:"token value css language-css"},[t("span",{class:"token property"},"margin-bottom"),t("span",{class:"token punctuation"},":"),n(" 24px")]),t("span",{class:"token punctuation"},'"')])]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-radio-button")]),n(),t("span",{class:"token attr-name"},"value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("small"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Small"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-radio-button")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-radio-button")]),n(),t("span",{class:"token attr-name"},"value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("default"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Default"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-radio-button")]),t("span",{class:"token punctuation"},">")]),n(`
      `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-radio-button")]),n(),t("span",{class:"token attr-name"},"value"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("large"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Large"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-radio-button")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-radio-group")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Water Pro (default)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("secondary"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Water Pro (secondary)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("primary"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Water Pro (primary)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("success"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Water Pro (success)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("warning"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Water Pro (warning)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"type"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("danger"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("Water Pro (danger)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"disabled"),t("span",{class:"token punctuation"},">")]),n("Water Pro (disabled)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"mark"),t("span",{class:"token punctuation"},">")]),n("Water Pro (mark)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"code"),t("span",{class:"token punctuation"},">")]),n("Water Pro (code)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"keyboard"),t("span",{class:"token punctuation"},">")]),n("Water Pro (keyboard)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"underline"),t("span",{class:"token punctuation"},">")]),n("Water Pro (underline)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"delete"),t("span",{class:"token punctuation"},">")]),n("Water Pro (delete)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-text")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"strong"),t("span",{class:"token punctuation"},">")]),n("Water Pro (strong)"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-text")]),t("span",{class:"token punctuation"},">")]),n(`
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-link")]),n(),t("span",{class:"token attr-name"},":size"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("size"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"href"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("https://water-v4.chjgo.com/"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},"target"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("_blank"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n(`
      Water Pro (Link)
    `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-link")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-space")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("script")]),t("span",{class:"token punctuation"},">")]),t("span",{class:"token script"},[t("span",{class:"token language-javascript"},[n(`
`),t("span",{class:"token keyword"},"import"),n(),t("span",{class:"token punctuation"},"{"),n(" defineComponent"),t("span",{class:"token punctuation"},","),n(" ref "),t("span",{class:"token punctuation"},"}"),n(),t("span",{class:"token keyword"},"from"),n(),t("span",{class:"token string"},"'vue'"),t("span",{class:"token punctuation"},";"),n(`
`),t("span",{class:"token keyword"},"export"),n(),t("span",{class:"token keyword"},"default"),n(),t("span",{class:"token function"},"defineComponent"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),n(`
  `),t("span",{class:"token function"},"setup"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),n(),t("span",{class:"token punctuation"},"{"),n(`
    `),t("span",{class:"token keyword"},"return"),n(),t("span",{class:"token punctuation"},"{"),n(`
      size`),t("span",{class:"token operator"},":"),n(),t("span",{class:"token function"},"ref"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'default'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),n(`
    `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),n(`
  `),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),n(`

`),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),n(`
`)])]),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("script")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1);function jn(a,l,i,m,C,A){const d=o("a-radio-button"),r=o("a-radio-group"),c=o("a-typography-text"),p=o("a-typography-link"),k=o("a-space"),g=o("demo-box");return h(),I(g,{jsfiddle:{us:"Provides multiple types of text and link.",cn:"\u5185\u7F6E\u4E0D\u540C\u6837\u5F0F\u7684\u6587\u672C\u4EE5\u53CA\u8D85\u94FE\u63A5\u7EC4\u4EF6\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5185\u7F6E\u4E0D\u540C\u6837\u5F0F\u7684\u6587\u672C\u4EE5\u53CA\u8D85\u94FE\u63A5\u7EC4\u4EF6\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Provides multiple types of text and link.</p>
`,order:2,title:{"zh-CN":"\u6587\u672C\u4E0E\u8D85\u94FE\u63A5\u7EC4\u4EF6","en-US":"Text and Link Component"},relativePath:"components/typography/demo/text.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiPgogICAgPGEtcmFkaW8tZ3JvdXAgdi1tb2RlbDp2YWx1ZT0ic2l6ZSIgYnV0dG9uLXN0eWxlPSJzb2xpZCIgc3R5bGU9Im1hcmdpbi1ib3R0b206IDI0cHgiPgogICAgICA8YS1yYWRpby1idXR0b24gdmFsdWU9InNtYWxsIj5TbWFsbDwvYS1yYWRpby1idXR0b24+CiAgICAgIDxhLXJhZGlvLWJ1dHRvbiB2YWx1ZT0iZGVmYXVsdCI+RGVmYXVsdDwvYS1yYWRpby1idXR0b24+CiAgICAgIDxhLXJhZGlvLWJ1dHRvbiB2YWx1ZT0ibGFyZ2UiPkxhcmdlPC9hLXJhZGlvLWJ1dHRvbj4KICAgIDwvYS1yYWRpby1ncm91cD4KICAgIDxhLXR5cG9ncmFwaHktdGV4dCA6c2l6ZT0ic2l6ZSI+V2F0ZXIgUHJvIChkZWZhdWx0KTwvYS10eXBvZ3JhcGh5LXRleHQ+CiAgICA8YS10eXBvZ3JhcGh5LXRleHQgOnNpemU9InNpemUiIHR5cGU9InNlY29uZGFyeSI+V2F0ZXIgUHJvIChzZWNvbmRhcnkpPC9hLXR5cG9ncmFwaHktdGV4dD4KICAgIDxhLXR5cG9ncmFwaHktdGV4dCA6c2l6ZT0ic2l6ZSIgdHlwZT0icHJpbWFyeSI+V2F0ZXIgUHJvIChwcmltYXJ5KTwvYS10eXBvZ3JhcGh5LXRleHQ+CiAgICA8YS10eXBvZ3JhcGh5LXRleHQgOnNpemU9InNpemUiIHR5cGU9InN1Y2Nlc3MiPldhdGVyIFBybyAoc3VjY2Vzcyk8L2EtdHlwb2dyYXBoeS10ZXh0PgogICAgPGEtdHlwb2dyYXBoeS10ZXh0IDpzaXplPSJzaXplIiB0eXBlPSJ3YXJuaW5nIj5XYXRlciBQcm8gKHdhcm5pbmcpPC9hLXR5cG9ncmFwaHktdGV4dD4KICAgIDxhLXR5cG9ncmFwaHktdGV4dCA6c2l6ZT0ic2l6ZSIgdHlwZT0iZGFuZ2VyIj5XYXRlciBQcm8gKGRhbmdlcik8L2EtdHlwb2dyYXBoeS10ZXh0PgogICAgPGEtdHlwb2dyYXBoeS10ZXh0IDpzaXplPSJzaXplIiBkaXNhYmxlZD5XYXRlciBQcm8gKGRpc2FibGVkKTwvYS10eXBvZ3JhcGh5LXRleHQ+CiAgICA8YS10eXBvZ3JhcGh5LXRleHQgOnNpemU9InNpemUiIG1hcms+V2F0ZXIgUHJvIChtYXJrKTwvYS10eXBvZ3JhcGh5LXRleHQ+CiAgICA8YS10eXBvZ3JhcGh5LXRleHQgOnNpemU9InNpemUiIGNvZGU+V2F0ZXIgUHJvIChjb2RlKTwvYS10eXBvZ3JhcGh5LXRleHQ+CiAgICA8YS10eXBvZ3JhcGh5LXRleHQgOnNpemU9InNpemUiIGtleWJvYXJkPldhdGVyIFBybyAoa2V5Ym9hcmQpPC9hLXR5cG9ncmFwaHktdGV4dD4KICAgIDxhLXR5cG9ncmFwaHktdGV4dCA6c2l6ZT0ic2l6ZSIgdW5kZXJsaW5lPldhdGVyIFBybyAodW5kZXJsaW5lKTwvYS10eXBvZ3JhcGh5LXRleHQ+CiAgICA8YS10eXBvZ3JhcGh5LXRleHQgOnNpemU9InNpemUiIGRlbGV0ZT5XYXRlciBQcm8gKGRlbGV0ZSk8L2EtdHlwb2dyYXBoeS10ZXh0PgogICAgPGEtdHlwb2dyYXBoeS10ZXh0IDpzaXplPSJzaXplIiBzdHJvbmc+V2F0ZXIgUHJvIChzdHJvbmcpPC9hLXR5cG9ncmFwaHktdGV4dD4KICAgIDxhLXR5cG9ncmFwaHktbGluayA6c2l6ZT0ic2l6ZSIgaHJlZj0iaHR0cHM6Ly93YXRlci12NC5jaGpnby5jb20vIiB0YXJnZXQ9Il9ibGFuayI+CiAgICAgIFdhdGVyIFBybyAoTGluaykKICAgIDwvYS10eXBvZ3JhcGh5LWxpbms+CiAgPC9hLXNwYWNlPgo8L3RlbXBsYXRlPgo8c2NyaXB0IGxhbmc9InRzIj4KaW1wb3J0IHsgZGVmaW5lQ29tcG9uZW50LCByZWYgfSBmcm9tICd2dWUnOwpleHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoewogIHNldHVwKCkgewogICAgcmV0dXJuIHsKICAgICAgc2l6ZTogcmVmKCdkZWZhdWx0JyksCiAgICB9OwogIH0sCn0pOwo8L3NjcmlwdD4KCg==",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXNwYWNlIGRpcmVjdGlvbj0idmVydGljYWwiPgogICAgPGEtcmFkaW8tZ3JvdXAgdi1tb2RlbDp2YWx1ZT0ic2l6ZSIgYnV0dG9uLXN0eWxlPSJzb2xpZCIgc3R5bGU9Im1hcmdpbi1ib3R0b206IDI0cHgiPgogICAgICA8YS1yYWRpby1idXR0b24gdmFsdWU9InNtYWxsIj5TbWFsbDwvYS1yYWRpby1idXR0b24+CiAgICAgIDxhLXJhZGlvLWJ1dHRvbiB2YWx1ZT0iZGVmYXVsdCI+RGVmYXVsdDwvYS1yYWRpby1idXR0b24+CiAgICAgIDxhLXJhZGlvLWJ1dHRvbiB2YWx1ZT0ibGFyZ2UiPkxhcmdlPC9hLXJhZGlvLWJ1dHRvbj4KICAgIDwvYS1yYWRpby1ncm91cD4KICAgIDxhLXR5cG9ncmFwaHktdGV4dCA6c2l6ZT0ic2l6ZSI+V2F0ZXIgUHJvIChkZWZhdWx0KTwvYS10eXBvZ3JhcGh5LXRleHQ+CiAgICA8YS10eXBvZ3JhcGh5LXRleHQgOnNpemU9InNpemUiIHR5cGU9InNlY29uZGFyeSI+V2F0ZXIgUHJvIChzZWNvbmRhcnkpPC9hLXR5cG9ncmFwaHktdGV4dD4KICAgIDxhLXR5cG9ncmFwaHktdGV4dCA6c2l6ZT0ic2l6ZSIgdHlwZT0icHJpbWFyeSI+V2F0ZXIgUHJvIChwcmltYXJ5KTwvYS10eXBvZ3JhcGh5LXRleHQ+CiAgICA8YS10eXBvZ3JhcGh5LXRleHQgOnNpemU9InNpemUiIHR5cGU9InN1Y2Nlc3MiPldhdGVyIFBybyAoc3VjY2Vzcyk8L2EtdHlwb2dyYXBoeS10ZXh0PgogICAgPGEtdHlwb2dyYXBoeS10ZXh0IDpzaXplPSJzaXplIiB0eXBlPSJ3YXJuaW5nIj5XYXRlciBQcm8gKHdhcm5pbmcpPC9hLXR5cG9ncmFwaHktdGV4dD4KICAgIDxhLXR5cG9ncmFwaHktdGV4dCA6c2l6ZT0ic2l6ZSIgdHlwZT0iZGFuZ2VyIj5XYXRlciBQcm8gKGRhbmdlcik8L2EtdHlwb2dyYXBoeS10ZXh0PgogICAgPGEtdHlwb2dyYXBoeS10ZXh0IDpzaXplPSJzaXplIiBkaXNhYmxlZD5XYXRlciBQcm8gKGRpc2FibGVkKTwvYS10eXBvZ3JhcGh5LXRleHQ+CiAgICA8YS10eXBvZ3JhcGh5LXRleHQgOnNpemU9InNpemUiIG1hcms+V2F0ZXIgUHJvIChtYXJrKTwvYS10eXBvZ3JhcGh5LXRleHQ+CiAgICA8YS10eXBvZ3JhcGh5LXRleHQgOnNpemU9InNpemUiIGNvZGU+V2F0ZXIgUHJvIChjb2RlKTwvYS10eXBvZ3JhcGh5LXRleHQ+CiAgICA8YS10eXBvZ3JhcGh5LXRleHQgOnNpemU9InNpemUiIGtleWJvYXJkPldhdGVyIFBybyAoa2V5Ym9hcmQpPC9hLXR5cG9ncmFwaHktdGV4dD4KICAgIDxhLXR5cG9ncmFwaHktdGV4dCA6c2l6ZT0ic2l6ZSIgdW5kZXJsaW5lPldhdGVyIFBybyAodW5kZXJsaW5lKTwvYS10eXBvZ3JhcGh5LXRleHQ+CiAgICA8YS10eXBvZ3JhcGh5LXRleHQgOnNpemU9InNpemUiIGRlbGV0ZT5XYXRlciBQcm8gKGRlbGV0ZSk8L2EtdHlwb2dyYXBoeS10ZXh0PgogICAgPGEtdHlwb2dyYXBoeS10ZXh0IDpzaXplPSJzaXplIiBzdHJvbmc+V2F0ZXIgUHJvIChzdHJvbmcpPC9hLXR5cG9ncmFwaHktdGV4dD4KICAgIDxhLXR5cG9ncmFwaHktbGluayA6c2l6ZT0ic2l6ZSIgaHJlZj0iaHR0cHM6Ly93YXRlci12NC5jaGpnby5jb20vIiB0YXJnZXQ9Il9ibGFuayI+CiAgICAgIFdhdGVyIFBybyAoTGluaykKICAgIDwvYS10eXBvZ3JhcGh5LWxpbms+CiAgPC9hLXNwYWNlPgo8L3RlbXBsYXRlPgo8c2NyaXB0PgppbXBvcnQgeyBkZWZpbmVDb21wb25lbnQsIHJlZiB9IGZyb20gJ3Z1ZSc7CmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbXBvbmVudCh7CiAgc2V0dXAoKSB7CiAgICByZXR1cm4gewogICAgICBzaXplOiByZWYoJ2RlZmF1bHQnKSwKICAgIH07CiAgfSwKCn0pOwo8L3NjcmlwdD4="}},{default:e(()=>[s(k,{direction:"vertical"},{default:e(()=>[s(r,{value:a.size,"onUpdate:value":l[0]||(l[0]=u=>a.size=u),"button-style":"solid",style:{"margin-bottom":"24px"}},{default:e(()=>[s(d,{value:"small"},{default:e(()=>[Wn]),_:1}),s(d,{value:"default"},{default:e(()=>[fn]),_:1}),s(d,{value:"large"},{default:e(()=>[Yn]),_:1})]),_:1},8,["value"]),s(c,{size:a.size},{default:e(()=>[Fn]),_:1},8,["size"]),s(c,{size:a.size,type:"secondary"},{default:e(()=>[wn]),_:1},8,["size"]),s(c,{size:a.size,type:"primary"},{default:e(()=>[En]),_:1},8,["size"]),s(c,{size:a.size,type:"success"},{default:e(()=>[Sn]),_:1},8,["size"]),s(c,{size:a.size,type:"warning"},{default:e(()=>[Rn]),_:1},8,["size"]),s(c,{size:a.size,type:"danger"},{default:e(()=>[Jn]),_:1},8,["size"]),s(c,{size:a.size,disabled:""},{default:e(()=>[xn]),_:1},8,["size"]),s(c,{size:a.size,mark:""},{default:e(()=>[Hn]),_:1},8,["size"]),s(c,{size:a.size,code:""},{default:e(()=>[Vn]),_:1},8,["size"]),s(c,{size:a.size,keyboard:""},{default:e(()=>[Dn]),_:1},8,["size"]),s(c,{size:a.size,underline:""},{default:e(()=>[zn]),_:1},8,["size"]),s(c,{size:a.size,delete:""},{default:e(()=>[Pn]),_:1},8,["size"]),s(c,{size:a.size,strong:""},{default:e(()=>[Ln]),_:1},8,["size"]),s(p,{size:a.size,href:"https://water-v4.chjgo.com/",target:"_blank"},{default:e(()=>[Nn]),_:1},8,["size"])]),_:1})]),htmlCode:e(()=>[Tn]),jsVersionHtml:e(()=>[Un]),_:1},8,["jsfiddle"])}var qn=y(Xn,[["render",jn]]);const _n={},Kn=n("h1. Water Pro \u5B57\u53F738px"),Qn=n("h2. Water Pro \u5B57\u53F730px"),On=n("h3. Water Pro \u5B57\u53F724px"),Mn=n("h4. Water Pro \u5B57\u53F720px"),$n=n("h5. Water Pro \u5B57\u53F716px"),ta=n("h6. Water Pro \u5B57\u53F714px"),na=t("pre",{class:"language-vue"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),t("span",{class:"token punctuation"},">")]),n("h1. Water Pro \u5B57\u53F738px"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),n(),t("span",{class:"token attr-name"},":level"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("2"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("h2. Water Pro \u5B57\u53F730px"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),n(),t("span",{class:"token attr-name"},":level"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("3"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("h3. Water Pro \u5B57\u53F724px"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),n(),t("span",{class:"token attr-name"},":level"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("4"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("h4. Water Pro \u5B57\u53F720px"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),n(),t("span",{class:"token attr-name"},":level"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("5"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("h5. Water Pro \u5B57\u53F716px"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),n(),t("span",{class:"token attr-name"},":level"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("6"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("h6. Water Pro \u5B57\u53F714px"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),aa=t("pre",{class:"language-vue"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),t("span",{class:"token punctuation"},">")]),n("h1. Water Pro \u5B57\u53F738px"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),n(),t("span",{class:"token attr-name"},":level"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("2"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("h2. Water Pro \u5B57\u53F730px"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),n(),t("span",{class:"token attr-name"},":level"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("3"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("h3. Water Pro \u5B57\u53F724px"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),n(),t("span",{class:"token attr-name"},":level"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("4"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("h4. Water Pro \u5B57\u53F720px"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),n(),t("span",{class:"token attr-name"},":level"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("5"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("h5. Water Pro \u5B57\u53F716px"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),n(),t("span",{class:"token attr-name"},":level"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("6"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("h6. Water Pro \u5B57\u53F714px"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1);function sa(a,l){const i=o("a-typography-title"),m=o("demo-box");return h(),I(m,{jsfiddle:{us:"Display title in different level.",cn:"\u5C55\u793A\u4E0D\u540C\u7EA7\u522B\u7684\u6807\u9898\u3002",docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u5C55\u793A\u4E0D\u540C\u7EA7\u522B\u7684\u6807\u9898\u3002</p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Display title in different level.</p>
`,order:1,title:{"zh-CN":"\u6807\u9898\u7EC4\u4EF6","en-US":"Title Component"},relativePath:"components/typography/demo/title.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXR5cG9ncmFwaHktdGl0bGU+aDEuIFdhdGVyIFBybyDlrZflj7czOHB4PC9hLXR5cG9ncmFwaHktdGl0bGU+CiAgPGEtdHlwb2dyYXBoeS10aXRsZSA6bGV2ZWw9IjIiPmgyLiBXYXRlciBQcm8g5a2X5Y+3MzBweDwvYS10eXBvZ3JhcGh5LXRpdGxlPgogIDxhLXR5cG9ncmFwaHktdGl0bGUgOmxldmVsPSIzIj5oMy4gV2F0ZXIgUHJvIOWtl+WPtzI0cHg8L2EtdHlwb2dyYXBoeS10aXRsZT4KICA8YS10eXBvZ3JhcGh5LXRpdGxlIDpsZXZlbD0iNCI+aDQuIFdhdGVyIFBybyDlrZflj7cyMHB4PC9hLXR5cG9ncmFwaHktdGl0bGU+CiAgPGEtdHlwb2dyYXBoeS10aXRsZSA6bGV2ZWw9IjUiPmg1LiBXYXRlciBQcm8g5a2X5Y+3MTZweDwvYS10eXBvZ3JhcGh5LXRpdGxlPgogIDxhLXR5cG9ncmFwaHktdGl0bGUgOmxldmVsPSI2Ij5oNi4gV2F0ZXIgUHJvIOWtl+WPtzE0cHg8L2EtdHlwb2dyYXBoeS10aXRsZT4KPC90ZW1wbGF0ZT4KCgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXR5cG9ncmFwaHktdGl0bGU+aDEuIFdhdGVyIFBybyDlrZflj7czOHB4PC9hLXR5cG9ncmFwaHktdGl0bGU+CiAgPGEtdHlwb2dyYXBoeS10aXRsZSA6bGV2ZWw9IjIiPmgyLiBXYXRlciBQcm8g5a2X5Y+3MzBweDwvYS10eXBvZ3JhcGh5LXRpdGxlPgogIDxhLXR5cG9ncmFwaHktdGl0bGUgOmxldmVsPSIzIj5oMy4gV2F0ZXIgUHJvIOWtl+WPtzI0cHg8L2EtdHlwb2dyYXBoeS10aXRsZT4KICA8YS10eXBvZ3JhcGh5LXRpdGxlIDpsZXZlbD0iNCI+aDQuIFdhdGVyIFBybyDlrZflj7cyMHB4PC9hLXR5cG9ncmFwaHktdGl0bGU+CiAgPGEtdHlwb2dyYXBoeS10aXRsZSA6bGV2ZWw9IjUiPmg1LiBXYXRlciBQcm8g5a2X5Y+3MTZweDwvYS10eXBvZ3JhcGh5LXRpdGxlPgogIDxhLXR5cG9ncmFwaHktdGl0bGUgOmxldmVsPSI2Ij5oNi4gV2F0ZXIgUHJvIOWtl+WPtzE0cHg8L2EtdHlwb2dyYXBoeS10aXRsZT4KPC90ZW1wbGF0ZT4="}},{default:e(()=>[s(i,null,{default:e(()=>[Kn]),_:1}),s(i,{level:2},{default:e(()=>[Qn]),_:1}),s(i,{level:3},{default:e(()=>[On]),_:1}),s(i,{level:4},{default:e(()=>[Mn]),_:1}),s(i,{level:5},{default:e(()=>[$n]),_:1}),s(i,{level:6},{default:e(()=>[ta]),_:1})]),htmlCode:e(()=>[na]),jsVersionHtml:e(()=>[aa]),_:1},8,["jsfiddle"])}var ea=y(_n,[["render",sa]]);const oa={},la=n("\u5185\u5BB9\u8BBE\u7F6E"),ca=n("\u5185\u5BB9\u8BBE\u7F6E"),pa=n("\u5185\u5BB9\u8BBE\u7F6E"),ua=n("\u5185\u5BB9\u8BBE\u7F6E"),ia=n("\u5185\u5BB9\u8BBE\u7F6E"),da=n("\u5185\u5BB9\u8BBE\u7F6E"),ka=t("pre",{class:"language-vue"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),n(),t("span",{class:"token attr-name"},"iconName"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("yiliao"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("\u5185\u5BB9\u8BBE\u7F6E"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),n(),t("span",{class:"token attr-name"},"iconName"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("yiliao"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":level"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("2"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("\u5185\u5BB9\u8BBE\u7F6E"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),n(),t("span",{class:"token attr-name"},"iconName"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("yiliao"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":level"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("3"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("\u5185\u5BB9\u8BBE\u7F6E"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),n(),t("span",{class:"token attr-name"},"iconName"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("yiliao"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":level"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("4"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("\u5185\u5BB9\u8BBE\u7F6E"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),n(),t("span",{class:"token attr-name"},"iconName"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("yiliao"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":level"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("5"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("\u5185\u5BB9\u8BBE\u7F6E"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),n(),t("span",{class:"token attr-name"},"iconName"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("yiliao"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":level"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("6"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("\u5185\u5BB9\u8BBE\u7F6E"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1),ra=t("pre",{class:"language-vue"},[t("code",null,[t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),n(),t("span",{class:"token attr-name"},"iconName"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("yiliao"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("\u5185\u5BB9\u8BBE\u7F6E"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),n(),t("span",{class:"token attr-name"},"iconName"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("yiliao"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":level"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("2"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("\u5185\u5BB9\u8BBE\u7F6E"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),n(),t("span",{class:"token attr-name"},"iconName"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("yiliao"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":level"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("3"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("\u5185\u5BB9\u8BBE\u7F6E"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),n(),t("span",{class:"token attr-name"},"iconName"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("yiliao"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":level"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("4"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("\u5185\u5BB9\u8BBE\u7F6E"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),n(),t("span",{class:"token attr-name"},"iconName"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("yiliao"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":level"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("5"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("\u5185\u5BB9\u8BBE\u7F6E"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),t("span",{class:"token punctuation"},">")]),n(`
  `),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"<"),n("a-typography-title")]),n(),t("span",{class:"token attr-name"},"iconName"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("yiliao"),t("span",{class:"token punctuation"},'"')]),n(),t("span",{class:"token attr-name"},":level"),t("span",{class:"token attr-value"},[t("span",{class:"token punctuation attr-equals"},"="),t("span",{class:"token punctuation"},'"'),n("6"),t("span",{class:"token punctuation"},'"')]),t("span",{class:"token punctuation"},">")]),n("\u5185\u5BB9\u8BBE\u7F6E"),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("a-typography-title")]),t("span",{class:"token punctuation"},">")]),n(`
`),t("span",{class:"token tag"},[t("span",{class:"token tag"},[t("span",{class:"token punctuation"},"</"),n("template")]),t("span",{class:"token punctuation"},">")]),n(`
`)])],-1);function ga(a,l){const i=o("a-typography-title"),m=o("demo-box");return h(),I(m,{jsfiddle:{us:"Display title in different level.",cn:'\u8BBE\u7F6E iconName \u5B57\u6BB5\u5373\u53EF\u3002`iconName="yiliao"`',docHtml:`<h2 id="zh-CN">zh-CN <a class="header-anchor" href="#zh-CN">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>\u8BBE\u7F6E iconName \u5B57\u6BB5\u5373\u53EF\u3002<code>iconName=&quot;yiliao&quot;</code></p>
<h2 id="en-US">en-US <a class="header-anchor" href="#en-US">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<p>Display title in different level.</p>
`,order:1,title:{"zh-CN":"\u6807\u9898\u5E26 icon \u7EC4\u4EF6","en-US":"Title Icon Component"},relativePath:"components/typography/demo/title-icon.vue",sourceCode:"PHRlbXBsYXRlPgogIDxhLXR5cG9ncmFwaHktdGl0bGUgaWNvbk5hbWU9InlpbGlhbyI+5YaF5a656K6+572uPC9hLXR5cG9ncmFwaHktdGl0bGU+CiAgPGEtdHlwb2dyYXBoeS10aXRsZSBpY29uTmFtZT0ieWlsaWFvIiA6bGV2ZWw9IjIiPuWGheWuueiuvue9rjwvYS10eXBvZ3JhcGh5LXRpdGxlPgogIDxhLXR5cG9ncmFwaHktdGl0bGUgaWNvbk5hbWU9InlpbGlhbyIgOmxldmVsPSIzIj7lhoXlrrnorr7nva48L2EtdHlwb2dyYXBoeS10aXRsZT4KICA8YS10eXBvZ3JhcGh5LXRpdGxlIGljb25OYW1lPSJ5aWxpYW8iIDpsZXZlbD0iNCI+5YaF5a656K6+572uPC9hLXR5cG9ncmFwaHktdGl0bGU+CiAgPGEtdHlwb2dyYXBoeS10aXRsZSBpY29uTmFtZT0ieWlsaWFvIiA6bGV2ZWw9IjUiPuWGheWuueiuvue9rjwvYS10eXBvZ3JhcGh5LXRpdGxlPgogIDxhLXR5cG9ncmFwaHktdGl0bGUgaWNvbk5hbWU9InlpbGlhbyIgOmxldmVsPSI2Ij7lhoXlrrnorr7nva48L2EtdHlwb2dyYXBoeS10aXRsZT4KPC90ZW1wbGF0ZT4KCgo=",jsSourceCode:"PHRlbXBsYXRlPgogIDxhLXR5cG9ncmFwaHktdGl0bGUgaWNvbk5hbWU9InlpbGlhbyI+5YaF5a656K6+572uPC9hLXR5cG9ncmFwaHktdGl0bGU+CiAgPGEtdHlwb2dyYXBoeS10aXRsZSBpY29uTmFtZT0ieWlsaWFvIiA6bGV2ZWw9IjIiPuWGheWuueiuvue9rjwvYS10eXBvZ3JhcGh5LXRpdGxlPgogIDxhLXR5cG9ncmFwaHktdGl0bGUgaWNvbk5hbWU9InlpbGlhbyIgOmxldmVsPSIzIj7lhoXlrrnorr7nva48L2EtdHlwb2dyYXBoeS10aXRsZT4KICA8YS10eXBvZ3JhcGh5LXRpdGxlIGljb25OYW1lPSJ5aWxpYW8iIDpsZXZlbD0iNCI+5YaF5a656K6+572uPC9hLXR5cG9ncmFwaHktdGl0bGU+CiAgPGEtdHlwb2dyYXBoeS10aXRsZSBpY29uTmFtZT0ieWlsaWFvIiA6bGV2ZWw9IjUiPuWGheWuueiuvue9rjwvYS10eXBvZ3JhcGh5LXRpdGxlPgogIDxhLXR5cG9ncmFwaHktdGl0bGUgaWNvbk5hbWU9InlpbGlhbyIgOmxldmVsPSI2Ij7lhoXlrrnorr7nva48L2EtdHlwb2dyYXBoeS10aXRsZT4KPC90ZW1wbGF0ZT4="}},{default:e(()=>[s(i,{iconName:"yiliao"},{default:e(()=>[la]),_:1}),s(i,{iconName:"yiliao",level:2},{default:e(()=>[ca]),_:1}),s(i,{iconName:"yiliao",level:3},{default:e(()=>[pa]),_:1}),s(i,{iconName:"yiliao",level:4},{default:e(()=>[ua]),_:1}),s(i,{iconName:"yiliao",level:5},{default:e(()=>[ia]),_:1}),s(i,{iconName:"yiliao",level:6},{default:e(()=>[da]),_:1})]),htmlCode:e(()=>[ka]),jsVersionHtml:e(()=>[ra]),_:1},8,["jsfiddle"])}var ba=y(oa,[["render",ga]]);const ha={pageData:{title:"Typography",description:"",frontmatter:{category:"Components",subtitle:"\u6392\u7248",type:"\u901A\u7528",title:"Typography",cols:1,cover:"https://gw.alipayobjects.com/zos/alicdn/GOM1KQ24O/Typography.svg"},headers:[{level:2,title:"\u4F55\u65F6\u4F7F\u7528",slug:"\u4F55\u65F6\u4F7F\u7528",content:""},{level:2,title:"\u65B0\u589E\u540C\u540D\u7EC4\u4EF6 (4.27.0)",slug:"\u65B0\u589E\u540C\u540D\u7EC4\u4EF6-4-27-0",content:""},{level:2,title:"API",slug:"API",content:"Typography.Text"},{level:3,title:"Typography.Text",slug:"Typography-Text",content:""},{level:3,title:"Typography.Title",slug:"Typography-Title",content:""},{level:3,title:"Typography.Paragraph",slug:"Typography-Paragraph",content:""},{level:3,title:"slots",slug:"slots",content:""},{level:3,title:"copyable",slug:"copyable",content:""},{level:3,title:"editable",slug:"editable",content:""},{level:3,title:"ellipsis",slug:"ellipsis",content:""}],relativePath:"components/typography/index.zh-CN.md",content:`
\u6587\u672C\u7684\u57FA\u672C\u683C\u5F0F\u3002

## \u4F55\u65F6\u4F7F\u7528

- \u5F53\u9700\u8981\u5C55\u793A\u6807\u9898\u3001\u6BB5\u843D\u3001\u5217\u8868\u5185\u5BB9\u65F6\u4F7F\u7528\uFF0C\u5982\u6587\u7AE0/\u535A\u5BA2/\u65E5\u5FD7\u7684\u6587\u672C\u6837\u5F0F\u3002
- \u5F53\u9700\u8981\u4E00\u5217\u57FA\u4E8E\u6587\u672C\u7684\u57FA\u7840\u64CD\u4F5C\u65F6\uFF0C\u5982\u62F7\u8D1D/\u7701\u7565/\u53EF\u7F16\u8F91\u3002

## \u65B0\u589E\u540C\u540D\u7EC4\u4EF6 (4.27.0)

| \u65B0\u7EC4\u4EF6 | \u5BF9\u5E94\u7EC4\u4EF6 |
| --- | --- | --- | --- | --- |
| a-title | a-typography-title |
| a-text | a-typography-text |
| a-link | a-typography-link |

## API

### Typography.Text

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |
| --- | --- | --- | --- | --- |
| code | \u6DFB\u52A0\u4EE3\u7801\u6837\u5F0F | boolean | false |  |
| content(v-model) | \u5F53\u4F7F\u7528 ellipsis \u6216 editable \u65F6\uFF0C\u4F7F\u7528 content \u4EE3\u66FF children | string | - |  |
| copyable | \u662F\u5426\u53EF\u62F7\u8D1D\uFF0C\u4E3A\u5BF9\u8C61\u65F6\u53EF\u8FDB\u884C\u5404\u79CD\u81EA\u5B9A\u4E49 | boolean \\| [copyable](#copyable) | false | [copyable](#copyable) |
| delete | \u6DFB\u52A0\u5220\u9664\u7EBF\u6837\u5F0F | boolean | false |  |
| disabled | \u7981\u7528\u6587\u672C | boolean | false |  |
| editable | \u662F\u5426\u53EF\u7F16\u8F91\uFF0C\u4E3A\u5BF9\u8C61\u65F6\u53EF\u5BF9\u7F16\u8F91\u8FDB\u884C\u63A7\u5236 | boolean \\| [editable](#editable) | false | [editable](#editable) |
| ellipsis | \u81EA\u52A8\u6EA2\u51FA\u7701\u7565 | boolean | false |  |
| keyboard | \u6DFB\u52A0\u952E\u76D8\u6837\u5F0F | boolean | false |  |
| mark | \u6DFB\u52A0\u6807\u8BB0\u6837\u5F0F | boolean | false |  |
| strong | \u662F\u5426\u52A0\u7C97 | boolean | false |  |
| type | \u6587\u672C\u7C7B\u578B | \`primary\` \\| \`secondary\` \\| \`success\` \\| \`warning\` \\| \`danger\` | - |  |
| underline | \u6DFB\u52A0\u4E0B\u5212\u7EBF\u6837\u5F0F | boolean | false |  |
| resetable | \u662F\u5426\u91CD\u7F6E\u9ED8\u8BA4\u6837\u5F0F | boolean | false |  |
| blockable | \u662F\u5426\u8BBE\u7F6E display: block | boolean | false | 4.0.0 |
| centerable | \u662F\u5426\u8BBE\u7F6E text-align: center | boolean | false | 4.17.0 |

### Typography.Title

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |
| --- | --- | --- | --- | --- |
| code | \u6DFB\u52A0\u4EE3\u7801\u6837\u5F0F | boolean | false |  |
| content(v-model) | \u5F53\u4F7F\u7528 ellipsis \u6216 editable \u65F6\uFF0C\u4F7F\u7528 content \u4EE3\u66FF children | string | - |  |
| copyable | \u662F\u5426\u53EF\u62F7\u8D1D\uFF0C\u4E3A\u5BF9\u8C61\u65F6\u53EF\u8FDB\u884C\u5404\u79CD\u81EA\u5B9A\u4E49 | boolean \\| [copyable](#copyable) | false | [copyable](#copyable) |
| delete | \u6DFB\u52A0\u5220\u9664\u7EBF\u6837\u5F0F | boolean | false |  |
| disabled | \u7981\u7528\u6587\u672C | boolean | false |  |
| editable | \u662F\u5426\u53EF\u7F16\u8F91\uFF0C\u4E3A\u5BF9\u8C61\u65F6\u53EF\u5BF9\u7F16\u8F91\u8FDB\u884C\u63A7\u5236 | boolean \\| [editable](#editable) | false | [editable](#editable) |
| ellipsis | \u81EA\u52A8\u6EA2\u51FA\u7701\u7565\uFF0C\u4E3A\u5BF9\u8C61\u65F6\u53EF\u8BBE\u7F6E\u7701\u7565\u884C\u6570\u3001\u662F\u5426\u53EF\u5C55\u5F00\u3001\u6DFB\u52A0\u540E\u7F00\u7B49 | boolean \\| [ellipsis](#ellipsis) | false | [ellipsis](#ellipsis) |
| level | \u91CD\u8981\u7A0B\u5EA6\uFF0C\u76F8\u5F53\u4E8E \`h1\`\u3001\`h2\`\u3001\`h3\`\u3001\`h4\`\u3001\`h5\` | number: 1, 2, 3, 4, 5 | 1 |  |
| mark | \u6DFB\u52A0\u6807\u8BB0\u6837\u5F0F | boolean | false |  |
| type | \u6587\u672C\u7C7B\u578B | \`primary\` \\| \`secondary\` \\| \`success\` \\| \`warning\` \\| \`danger\` | - |  |
| underline | \u6DFB\u52A0\u4E0B\u5212\u7EBF\u6837\u5F0F | boolean | false |  |
| resetable | \u662F\u5426\u91CD\u7F6E\u9ED8\u8BA4\u6837\u5F0F | boolean | false |  |
| blockable | \u662F\u5426\u8BBE\u7F6E display: block | boolean | false | 4.0.0 |
| iconName | \u662F\u5426\u5DE6\u4FA7\u6709 iconName \u3002\u5F53 iconName \u4E0D\u4E3A\u7A7A\u7684\u65F6\u5019\uFF0C resetable \u4E3A true | string | - | 4.27.0 |
| iconPrefix | icon \u7684\u524D\u7F00 | string | icon- | 4.27.0 |
| iconFont | icon \u7684 class \u5B57\u4F53\u540D\u5B57 | string | iconfont | 4.27.0 |
| iconColor | icon \u7684\u989C\u8272 | string | - | 4.27.0 |

### Typography.Paragraph

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |
| --- | --- | --- | --- | --- |
| code | \u6DFB\u52A0\u4EE3\u7801\u6837\u5F0F | boolean | false |  |
| content(v-model) | \u5F53\u4F7F\u7528 ellipsis \u6216 editable \u65F6\uFF0C\u4F7F\u7528 content \u4EE3\u66FF children | string | - |  |
| copyable | \u662F\u5426\u53EF\u62F7\u8D1D\uFF0C\u4E3A\u5BF9\u8C61\u65F6\u53EF\u8FDB\u884C\u5404\u79CD\u81EA\u5B9A\u4E49 | boolean \\| [copyable](#copyable) | false | [copyable](#copyable) |
| delete | \u6DFB\u52A0\u5220\u9664\u7EBF\u6837\u5F0F | boolean | false |  |
| disabled | \u7981\u7528\u6587\u672C | boolean | false |  |
| editable | \u662F\u5426\u53EF\u7F16\u8F91\uFF0C\u4E3A\u5BF9\u8C61\u65F6\u53EF\u5BF9\u7F16\u8F91\u8FDB\u884C\u63A7\u5236 | boolean \\| [editable](#editable) | false | [editable](#editable) |
| ellipsis | \u81EA\u52A8\u6EA2\u51FA\u7701\u7565\uFF0C\u4E3A\u5BF9\u8C61\u65F6\u53EF\u8BBE\u7F6E\u7701\u7565\u884C\u6570\u3001\u662F\u5426\u53EF\u5C55\u5F00\u3001\u6DFB\u52A0\u540E\u7F00\u7B49 | boolean \\| [ellipsis](#ellipsis) | false | [ellipsis](#ellipsis) |
| mark | \u6DFB\u52A0\u6807\u8BB0\u6837\u5F0F | boolean | false |  |
| strong | \u662F\u5426\u52A0\u7C97 | boolean | false |  |
| type | \u6587\u672C\u7C7B\u578B | \`primary\` \\| \`secondary\` \\| \`success\` \\| \`warning\` \\| \`danger\` | - |  |
| underline | \u6DFB\u52A0\u4E0B\u5212\u7EBF\u6837\u5F0F | boolean | false |  |
| resetable | \u662F\u5426\u91CD\u7F6E\u9ED8\u8BA4\u6837\u5F0F | boolean | false |  |
| blockable | \u662F\u5426\u8BBE\u7F6E display: block | boolean | false | 4.0.0 |

### slots

| \u540D\u79F0 | \u8BF4\u660E | \u53C2\u6570 | \u9ED8\u8BA4\u503C | \u7248\u672C |
| --- | --- | --- | --- | --- |
| copyableIcon | \u81EA\u5B9A\u4E49\u62F7\u8D1D\u56FE\u6807 | \`{ copied: boolean }\` | \`copied ? &lt;CheckOutlined /&gt; : &lt;CopyOutlined /&gt;\` |  |
| copyableTooltip | \u81EA\u5B9A\u4E49\u63D0\u793A\u6587\u6848\uFF0C\u5F53 \`copyable.tooltip = false\` \u65F6\u5173\u95ED | \`{ copied: boolean }\` | \`copied ? &#39;\u590D\u5236\u6210\u529F&#39; : &#39;\u590D\u5236&#39;\` |  |
| editableIcon | \u81EA\u5B9A\u4E49\u7F16\u8F91\u56FE\u6807 | - | &amp;lt;EditOutlined /&gt; |  |
| editableTooltip | \u81EA\u5B9A\u4E49\u63D0\u793A\u6587\u672C\uFF0C\u5F53 \`editable.tooltip = false\` \u65F6\u5173\u95ED | - | \`\u7F16\u8F91\` |  |
| ellipsisSymbol | \u81EA\u5B9A\u4E49\u5C55\u5F00\u63CF\u8FF0\u6587\u6848 | - | - |  |
| ellipsisTooltip | \u7701\u7565\u65F6\uFF0C\u5C55\u793A\u63D0\u793A\u4FE1\u606F | - | - |  |
| enterEnterIcon | \u5728\u7F16\u8F91\u6BB5\u4E2D\u81EA\u5B9A\u4E49\u201Center\u201D\u56FE\u6807 | \`{className: string}\` | \`&lt;EnterOutlined /&gt;\` | 3.0 |

### copyable

\`\`\`json
  {
    text: string,
    onCopy: function,
    tooltip: false,
  }
\`\`\`

| \u53C2\u6570    | \u8BF4\u660E                 | \u7C7B\u578B     | \u9ED8\u8BA4\u503C | \u7248\u672C |
| ------- | -------------------- | -------- | ------ | ---- |
| text    | \u62F7\u8D1D\u5230\u526A\u5207\u677F\u91CC\u7684\u6587\u672C | string   | -      |      |
| tooltip | \u662F\u5426\u5C55\u793A\u63D0\u793A\u6587\u672C     | boolean  | true   |      |
| onCopy  | \u62F7\u8D1D\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570   | function | -      |      |

### editable

\`\`\`json
  {
    tooltip: boolean,
    editing: boolean,
    maxlength: number,
    autoSize: boolean | { minRows: number, maxRows: number },
    onStart: function,
    onChange: function(string),
    onCancel: function,
    onEnd: function,
    triggerType: (&#39;icon&#39; | &#39;text&#39;)[],
  }
\`\`\`

| \u53C2\u6570 | \u8BF4\u660E | \u7C7B\u578B | \u9ED8\u8BA4\u503C | \u7248\u672C |
| --- | --- | --- | --- | --- |
| autoSize | \u81EA\u52A8 resize \u6587\u672C\u57DF | boolean \\| { minRows: number, maxRows: number } | - |  |
| editing | \u63A7\u5236\u662F\u5426\u662F\u7F16\u8F91\u4E2D\u72B6\u6001 | boolean | false |  |
| maxlength | \u7F16\u8F91\u4E2D\u6587\u672C\u57DF\u6700\u5927\u957F\u5EA6 | number | - |  |
| tooltip | \u662F\u5426\u5C55\u793A\u63D0\u793A\u6587\u672C | boolean | true |  |
| triggerType | Edit mode trigger - icon, text or both (not specifying icon as trigger hides it) | Array&amp;lt;\`icon\`\\|\`text\`&gt; | \\[\`icon\`] |  |
| onCancel | \u6309 ESC \u9000\u51FA\u7F16\u8F91\u72B6\u6001\u65F6\u89E6\u53D1 | function | - |  |
| onChange | \u6587\u672C\u57DF\u7F16\u8F91\u65F6\u89E6\u53D1 | function(event) | - |  |
| onEnd | \u6309 ENTER \u7ED3\u675F\u7F16\u8F91\u72B6\u6001\u65F6\u89E6\u53D1 | function | - |  |
| onStart | \u8FDB\u5165\u7F16\u8F91\u4E2D\u72B6\u6001\u65F6\u89E6\u53D1 | function | - |  |

### ellipsis

\`\`\`json
  {
    rows: number,
    expandable: boolean,
    suffix: string,
    symbol: string,
    tooltip: boolean,
    onExpand: function(event),
    onEllipsis: function(ellipsis),
  }
\`\`\`

| \u53C2\u6570       | \u8BF4\u660E                 | \u7C7B\u578B               | \u9ED8\u8BA4\u503C | \u7248\u672C |
| ---------- | -------------------- | ------------------ | ------ | ---- |
| expandable | \u662F\u5426\u53EF\u5C55\u5F00           | boolean            | -      |      |
| rows       | \u6700\u591A\u663E\u793A\u7684\u884C\u6570       | number             | -      |      |
| suffix     | \u81EA\u5B9A\u4E49\u7701\u7565\u5185\u5BB9\u540E\u7F00   | string             | -      |      |
| symbol     | \u81EA\u5B9A\u4E49\u5C55\u5F00\u63CF\u8FF0\u6587\u6848   | string             | \`\u5C55\u5F00\` |      |
| tooltip    | \u7701\u7565\u65F6\uFF0C\u5C55\u793A\u63D0\u793A\u4FE1\u606F | boolean \\| string  | -      |      |
| onEllipsis | \u89E6\u53D1\u7701\u7565\u65F6\u7684\u56DE\u8C03     | function(ellipsis) | -      |      |
| onExpand   | \u70B9\u51FB\u5C55\u5F00\u65F6\u7684\u56DE\u8C03     | function(event)    | -      |      |
`,html:`<p>\u6587\u672C\u7684\u57FA\u672C\u683C\u5F0F\u3002</p>
<h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<ul>
<li>\u5F53\u9700\u8981\u5C55\u793A\u6807\u9898\u3001\u6BB5\u843D\u3001\u5217\u8868\u5185\u5BB9\u65F6\u4F7F\u7528\uFF0C\u5982\u6587\u7AE0/\u535A\u5BA2/\u65E5\u5FD7\u7684\u6587\u672C\u6837\u5F0F\u3002</li>
<li>\u5F53\u9700\u8981\u4E00\u5217\u57FA\u4E8E\u6587\u672C\u7684\u57FA\u7840\u64CD\u4F5C\u65F6\uFF0C\u5982\u62F7\u8D1D/\u7701\u7565/\u53EF\u7F16\u8F91\u3002</li>
</ul>
<h2 id="\u65B0\u589E\u540C\u540D\u7EC4\u4EF6-4-27-0">\u65B0\u589E\u540C\u540D\u7EC4\u4EF6 (4.27.0) <a class="header-anchor" href="#\u65B0\u589E\u540C\u540D\u7EC4\u4EF6-4-27-0">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<table>
<thead>
<tr>
<th>\u65B0\u7EC4\u4EF6</th>
<th>\u5BF9\u5E94\u7EC4\u4EF6</th>
</tr>
</thead>
<tbody>
<tr>
<td>a-title</td>
<td>a-typography-title</td>
</tr>
<tr>
<td>a-text</td>
<td>a-typography-text</td>
</tr>
<tr>
<td>a-link</td>
<td>a-typography-link</td>
</tr>
</tbody>
</table>
<h2 id="API">API <a class="header-anchor" href="#API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<h3 id="Typography-Text">Typography.Text <a class="header-anchor" href="#Typography-Text">
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
<td>code</td>
<td>\u6DFB\u52A0\u4EE3\u7801\u6837\u5F0F</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>content(v-model)</td>
<td>\u5F53\u4F7F\u7528 ellipsis \u6216 editable \u65F6\uFF0C\u4F7F\u7528 content \u4EE3\u66FF children</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>copyable</td>
<td>\u662F\u5426\u53EF\u62F7\u8D1D\uFF0C\u4E3A\u5BF9\u8C61\u65F6\u53EF\u8FDB\u884C\u5404\u79CD\u81EA\u5B9A\u4E49</td>
<td>boolean | <a href="#copyable">copyable</a></td>
<td>false</td>
<td><a href="#copyable">copyable</a></td>
</tr>
<tr>
<td>delete</td>
<td>\u6DFB\u52A0\u5220\u9664\u7EBF\u6837\u5F0F</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>\u7981\u7528\u6587\u672C</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>editable</td>
<td>\u662F\u5426\u53EF\u7F16\u8F91\uFF0C\u4E3A\u5BF9\u8C61\u65F6\u53EF\u5BF9\u7F16\u8F91\u8FDB\u884C\u63A7\u5236</td>
<td>boolean | <a href="#editable">editable</a></td>
<td>false</td>
<td><a href="#editable">editable</a></td>
</tr>
<tr>
<td>ellipsis</td>
<td>\u81EA\u52A8\u6EA2\u51FA\u7701\u7565</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>keyboard</td>
<td>\u6DFB\u52A0\u952E\u76D8\u6837\u5F0F</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>mark</td>
<td>\u6DFB\u52A0\u6807\u8BB0\u6837\u5F0F</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>strong</td>
<td>\u662F\u5426\u52A0\u7C97</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>type</td>
<td>\u6587\u672C\u7C7B\u578B</td>
<td><code>primary</code> | <code>secondary</code> | <code>success</code> | <code>warning</code> | <code>danger</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>underline</td>
<td>\u6DFB\u52A0\u4E0B\u5212\u7EBF\u6837\u5F0F</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>resetable</td>
<td>\u662F\u5426\u91CD\u7F6E\u9ED8\u8BA4\u6837\u5F0F</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>blockable</td>
<td>\u662F\u5426\u8BBE\u7F6E display: block</td>
<td>boolean</td>
<td>false</td>
<td>4.0.0</td>
</tr>
<tr>
<td>centerable</td>
<td>\u662F\u5426\u8BBE\u7F6E text-align: center</td>
<td>boolean</td>
<td>false</td>
<td>4.17.0</td>
</tr>
</tbody>
</table>
<h3 id="Typography-Title">Typography.Title <a class="header-anchor" href="#Typography-Title">
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
<td>code</td>
<td>\u6DFB\u52A0\u4EE3\u7801\u6837\u5F0F</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>content(v-model)</td>
<td>\u5F53\u4F7F\u7528 ellipsis \u6216 editable \u65F6\uFF0C\u4F7F\u7528 content \u4EE3\u66FF children</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>copyable</td>
<td>\u662F\u5426\u53EF\u62F7\u8D1D\uFF0C\u4E3A\u5BF9\u8C61\u65F6\u53EF\u8FDB\u884C\u5404\u79CD\u81EA\u5B9A\u4E49</td>
<td>boolean | <a href="#copyable">copyable</a></td>
<td>false</td>
<td><a href="#copyable">copyable</a></td>
</tr>
<tr>
<td>delete</td>
<td>\u6DFB\u52A0\u5220\u9664\u7EBF\u6837\u5F0F</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>\u7981\u7528\u6587\u672C</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>editable</td>
<td>\u662F\u5426\u53EF\u7F16\u8F91\uFF0C\u4E3A\u5BF9\u8C61\u65F6\u53EF\u5BF9\u7F16\u8F91\u8FDB\u884C\u63A7\u5236</td>
<td>boolean | <a href="#editable">editable</a></td>
<td>false</td>
<td><a href="#editable">editable</a></td>
</tr>
<tr>
<td>ellipsis</td>
<td>\u81EA\u52A8\u6EA2\u51FA\u7701\u7565\uFF0C\u4E3A\u5BF9\u8C61\u65F6\u53EF\u8BBE\u7F6E\u7701\u7565\u884C\u6570\u3001\u662F\u5426\u53EF\u5C55\u5F00\u3001\u6DFB\u52A0\u540E\u7F00\u7B49</td>
<td>boolean | <a href="#ellipsis">ellipsis</a></td>
<td>false</td>
<td><a href="#ellipsis">ellipsis</a></td>
</tr>
<tr>
<td>level</td>
<td>\u91CD\u8981\u7A0B\u5EA6\uFF0C\u76F8\u5F53\u4E8E <code>h1</code>\u3001<code>h2</code>\u3001<code>h3</code>\u3001<code>h4</code>\u3001<code>h5</code></td>
<td>number: 1, 2, 3, 4, 5</td>
<td>1</td>
<td></td>
</tr>
<tr>
<td>mark</td>
<td>\u6DFB\u52A0\u6807\u8BB0\u6837\u5F0F</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>type</td>
<td>\u6587\u672C\u7C7B\u578B</td>
<td><code>primary</code> | <code>secondary</code> | <code>success</code> | <code>warning</code> | <code>danger</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>underline</td>
<td>\u6DFB\u52A0\u4E0B\u5212\u7EBF\u6837\u5F0F</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>resetable</td>
<td>\u662F\u5426\u91CD\u7F6E\u9ED8\u8BA4\u6837\u5F0F</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>blockable</td>
<td>\u662F\u5426\u8BBE\u7F6E display: block</td>
<td>boolean</td>
<td>false</td>
<td>4.0.0</td>
</tr>
<tr>
<td>iconName</td>
<td>\u662F\u5426\u5DE6\u4FA7\u6709 iconName \u3002\u5F53 iconName \u4E0D\u4E3A\u7A7A\u7684\u65F6\u5019\uFF0C resetable \u4E3A true</td>
<td>string</td>
<td>-</td>
<td>4.27.0</td>
</tr>
<tr>
<td>iconPrefix</td>
<td>icon \u7684\u524D\u7F00</td>
<td>string</td>
<td>icon-</td>
<td>4.27.0</td>
</tr>
<tr>
<td>iconFont</td>
<td>icon \u7684 class \u5B57\u4F53\u540D\u5B57</td>
<td>string</td>
<td>iconfont</td>
<td>4.27.0</td>
</tr>
<tr>
<td>iconColor</td>
<td>icon \u7684\u989C\u8272</td>
<td>string</td>
<td>-</td>
<td>4.27.0</td>
</tr>
</tbody>
</table>
<h3 id="Typography-Paragraph">Typography.Paragraph <a class="header-anchor" href="#Typography-Paragraph">
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
<td>code</td>
<td>\u6DFB\u52A0\u4EE3\u7801\u6837\u5F0F</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>content(v-model)</td>
<td>\u5F53\u4F7F\u7528 ellipsis \u6216 editable \u65F6\uFF0C\u4F7F\u7528 content \u4EE3\u66FF children</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>copyable</td>
<td>\u662F\u5426\u53EF\u62F7\u8D1D\uFF0C\u4E3A\u5BF9\u8C61\u65F6\u53EF\u8FDB\u884C\u5404\u79CD\u81EA\u5B9A\u4E49</td>
<td>boolean | <a href="#copyable">copyable</a></td>
<td>false</td>
<td><a href="#copyable">copyable</a></td>
</tr>
<tr>
<td>delete</td>
<td>\u6DFB\u52A0\u5220\u9664\u7EBF\u6837\u5F0F</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>\u7981\u7528\u6587\u672C</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>editable</td>
<td>\u662F\u5426\u53EF\u7F16\u8F91\uFF0C\u4E3A\u5BF9\u8C61\u65F6\u53EF\u5BF9\u7F16\u8F91\u8FDB\u884C\u63A7\u5236</td>
<td>boolean | <a href="#editable">editable</a></td>
<td>false</td>
<td><a href="#editable">editable</a></td>
</tr>
<tr>
<td>ellipsis</td>
<td>\u81EA\u52A8\u6EA2\u51FA\u7701\u7565\uFF0C\u4E3A\u5BF9\u8C61\u65F6\u53EF\u8BBE\u7F6E\u7701\u7565\u884C\u6570\u3001\u662F\u5426\u53EF\u5C55\u5F00\u3001\u6DFB\u52A0\u540E\u7F00\u7B49</td>
<td>boolean | <a href="#ellipsis">ellipsis</a></td>
<td>false</td>
<td><a href="#ellipsis">ellipsis</a></td>
</tr>
<tr>
<td>mark</td>
<td>\u6DFB\u52A0\u6807\u8BB0\u6837\u5F0F</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>strong</td>
<td>\u662F\u5426\u52A0\u7C97</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>type</td>
<td>\u6587\u672C\u7C7B\u578B</td>
<td><code>primary</code> | <code>secondary</code> | <code>success</code> | <code>warning</code> | <code>danger</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>underline</td>
<td>\u6DFB\u52A0\u4E0B\u5212\u7EBF\u6837\u5F0F</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>resetable</td>
<td>\u662F\u5426\u91CD\u7F6E\u9ED8\u8BA4\u6837\u5F0F</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>blockable</td>
<td>\u662F\u5426\u8BBE\u7F6E display: block</td>
<td>boolean</td>
<td>false</td>
<td>4.0.0</td>
</tr>
</tbody>
</table>
<h3 id="slots">slots <a class="header-anchor" href="#slots">
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
<td>copyableIcon</td>
<td>\u81EA\u5B9A\u4E49\u62F7\u8D1D\u56FE\u6807</td>
<td><code>{ copied: boolean }</code></td>
<td><code>copied ? &lt;CheckOutlined /&gt; : &lt;CopyOutlined /&gt;</code></td>
<td></td>
</tr>
<tr>
<td>copyableTooltip</td>
<td>\u81EA\u5B9A\u4E49\u63D0\u793A\u6587\u6848\uFF0C\u5F53 <code>copyable.tooltip = false</code> \u65F6\u5173\u95ED</td>
<td><code>{ copied: boolean }</code></td>
<td><code>copied ? '\u590D\u5236\u6210\u529F' : '\u590D\u5236'</code></td>
<td></td>
</tr>
<tr>
<td>editableIcon</td>
<td>\u81EA\u5B9A\u4E49\u7F16\u8F91\u56FE\u6807</td>
<td>-</td>
<td>&lt;EditOutlined /&gt;</td>
<td></td>
</tr>
<tr>
<td>editableTooltip</td>
<td>\u81EA\u5B9A\u4E49\u63D0\u793A\u6587\u672C\uFF0C\u5F53 <code>editable.tooltip = false</code> \u65F6\u5173\u95ED</td>
<td>-</td>
<td><code>\u7F16\u8F91</code></td>
<td></td>
</tr>
<tr>
<td>ellipsisSymbol</td>
<td>\u81EA\u5B9A\u4E49\u5C55\u5F00\u63CF\u8FF0\u6587\u6848</td>
<td>-</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>ellipsisTooltip</td>
<td>\u7701\u7565\u65F6\uFF0C\u5C55\u793A\u63D0\u793A\u4FE1\u606F</td>
<td>-</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>enterEnterIcon</td>
<td>\u5728\u7F16\u8F91\u6BB5\u4E2D\u81EA\u5B9A\u4E49\u201Center\u201D\u56FE\u6807</td>
<td><code>{className: string}</code></td>
<td><code>&lt;EnterOutlined /&gt;</code></td>
<td>3.0</td>
</tr>
</tbody>
</table>
<h3 id="copyable">copyable <a class="header-anchor" href="#copyable">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<pre class="language-json" v-pre><code>  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> string<span class="token punctuation">,</span>
    onCopy<span class="token operator">:</span> function<span class="token punctuation">,</span>
    tooltip<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</code></pre>
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
<td>text</td>
<td>\u62F7\u8D1D\u5230\u526A\u5207\u677F\u91CC\u7684\u6587\u672C</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>tooltip</td>
<td>\u662F\u5426\u5C55\u793A\u63D0\u793A\u6587\u672C</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>onCopy</td>
<td>\u62F7\u8D1D\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</td>
<td>function</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="editable">editable <a class="header-anchor" href="#editable">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<pre class="language-json" v-pre><code>  <span class="token punctuation">{</span>
    tooltip<span class="token operator">:</span> boolean<span class="token punctuation">,</span>
    editing<span class="token operator">:</span> boolean<span class="token punctuation">,</span>
    maxlength<span class="token operator">:</span> number<span class="token punctuation">,</span>
    autoSize<span class="token operator">:</span> boolean | <span class="token punctuation">{</span> minRows<span class="token operator">:</span> number<span class="token punctuation">,</span> maxRows<span class="token operator">:</span> number <span class="token punctuation">}</span><span class="token punctuation">,</span>
    onStart<span class="token operator">:</span> function<span class="token punctuation">,</span>
    onChange<span class="token operator">:</span> function(string)<span class="token punctuation">,</span>
    onCancel<span class="token operator">:</span> function<span class="token punctuation">,</span>
    onEnd<span class="token operator">:</span> function<span class="token punctuation">,</span>
    triggerType<span class="token operator">:</span> ('icon' | 'text')<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</code></pre>
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
<td>autoSize</td>
<td>\u81EA\u52A8 resize \u6587\u672C\u57DF</td>
<td>boolean | { minRows: number, maxRows: number }</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>editing</td>
<td>\u63A7\u5236\u662F\u5426\u662F\u7F16\u8F91\u4E2D\u72B6\u6001</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>maxlength</td>
<td>\u7F16\u8F91\u4E2D\u6587\u672C\u57DF\u6700\u5927\u957F\u5EA6</td>
<td>number</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>tooltip</td>
<td>\u662F\u5426\u5C55\u793A\u63D0\u793A\u6587\u672C</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>triggerType</td>
<td>Edit mode trigger - icon, text or both (not specifying icon as trigger hides it)</td>
<td>Array&lt;<code>icon</code>|<code>text</code>&gt;</td>
<td>[<code>icon</code>]</td>
<td></td>
</tr>
<tr>
<td>onCancel</td>
<td>\u6309 ESC \u9000\u51FA\u7F16\u8F91\u72B6\u6001\u65F6\u89E6\u53D1</td>
<td>function</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>onChange</td>
<td>\u6587\u672C\u57DF\u7F16\u8F91\u65F6\u89E6\u53D1</td>
<td>function(event)</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>onEnd</td>
<td>\u6309 ENTER \u7ED3\u675F\u7F16\u8F91\u72B6\u6001\u65F6\u89E6\u53D1</td>
<td>function</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>onStart</td>
<td>\u8FDB\u5165\u7F16\u8F91\u4E2D\u72B6\u6001\u65F6\u89E6\u53D1</td>
<td>function</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="ellipsis">ellipsis <a class="header-anchor" href="#ellipsis">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<pre class="language-json" v-pre><code>  <span class="token punctuation">{</span>
    rows<span class="token operator">:</span> number<span class="token punctuation">,</span>
    expandable<span class="token operator">:</span> boolean<span class="token punctuation">,</span>
    suffix<span class="token operator">:</span> string<span class="token punctuation">,</span>
    symbol<span class="token operator">:</span> string<span class="token punctuation">,</span>
    tooltip<span class="token operator">:</span> boolean<span class="token punctuation">,</span>
    onExpand<span class="token operator">:</span> function(event)<span class="token punctuation">,</span>
    onEllipsis<span class="token operator">:</span> function(ellipsis)<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</code></pre>
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
<td>expandable</td>
<td>\u662F\u5426\u53EF\u5C55\u5F00</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>rows</td>
<td>\u6700\u591A\u663E\u793A\u7684\u884C\u6570</td>
<td>number</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>suffix</td>
<td>\u81EA\u5B9A\u4E49\u7701\u7565\u5185\u5BB9\u540E\u7F00</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>symbol</td>
<td>\u81EA\u5B9A\u4E49\u5C55\u5F00\u63CF\u8FF0\u6587\u6848</td>
<td>string</td>
<td><code>\u5C55\u5F00</code></td>
<td></td>
</tr>
<tr>
<td>tooltip</td>
<td>\u7701\u7565\u65F6\uFF0C\u5C55\u793A\u63D0\u793A\u4FE1\u606F</td>
<td>boolean | string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>onEllipsis</td>
<td>\u89E6\u53D1\u7701\u7565\u65F6\u7684\u56DE\u8C03</td>
<td>function(ellipsis)</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>onExpand</td>
<td>\u70B9\u51FB\u5C55\u5F00\u65F6\u7684\u56DE\u8C03</td>
<td>function(event)</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
`,lastUpdated:1710497477431}},ma={class:"markdown"},ya=f(`<p>\u6587\u672C\u7684\u57FA\u672C\u683C\u5F0F\u3002</p><h2 id="\u4F55\u65F6\u4F7F\u7528">\u4F55\u65F6\u4F7F\u7528 <a class="header-anchor" href="#\u4F55\u65F6\u4F7F\u7528"><span aria-hidden="true" class="anchor">#</span></a></h2><ul><li>\u5F53\u9700\u8981\u5C55\u793A\u6807\u9898\u3001\u6BB5\u843D\u3001\u5217\u8868\u5185\u5BB9\u65F6\u4F7F\u7528\uFF0C\u5982\u6587\u7AE0/\u535A\u5BA2/\u65E5\u5FD7\u7684\u6587\u672C\u6837\u5F0F\u3002</li><li>\u5F53\u9700\u8981\u4E00\u5217\u57FA\u4E8E\u6587\u672C\u7684\u57FA\u7840\u64CD\u4F5C\u65F6\uFF0C\u5982\u62F7\u8D1D/\u7701\u7565/\u53EF\u7F16\u8F91\u3002</li></ul><h2 id="\u65B0\u589E\u540C\u540D\u7EC4\u4EF6-4-27-0">\u65B0\u589E\u540C\u540D\u7EC4\u4EF6 (4.27.0) <a class="header-anchor" href="#\u65B0\u589E\u540C\u540D\u7EC4\u4EF6-4-27-0"><span aria-hidden="true" class="anchor">#</span></a></h2><table><thead><tr><th>\u65B0\u7EC4\u4EF6</th><th>\u5BF9\u5E94\u7EC4\u4EF6</th></tr></thead><tbody><tr><td>a-title</td><td>a-typography-title</td></tr><tr><td>a-text</td><td>a-typography-text</td></tr><tr><td>a-link</td><td>a-typography-link</td></tr></tbody></table><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="Typography-Text">Typography.Text <a class="header-anchor" href="#Typography-Text"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>code</td><td>\u6DFB\u52A0\u4EE3\u7801\u6837\u5F0F</td><td>boolean</td><td>false</td><td></td></tr><tr><td>content(v-model)</td><td>\u5F53\u4F7F\u7528 ellipsis \u6216 editable \u65F6\uFF0C\u4F7F\u7528 content \u4EE3\u66FF children</td><td>string</td><td>-</td><td></td></tr><tr><td>copyable</td><td>\u662F\u5426\u53EF\u62F7\u8D1D\uFF0C\u4E3A\u5BF9\u8C61\u65F6\u53EF\u8FDB\u884C\u5404\u79CD\u81EA\u5B9A\u4E49</td><td>boolean | <a href="#copyable">copyable</a></td><td>false</td><td><a href="#copyable">copyable</a></td></tr><tr><td>delete</td><td>\u6DFB\u52A0\u5220\u9664\u7EBF\u6837\u5F0F</td><td>boolean</td><td>false</td><td></td></tr><tr><td>disabled</td><td>\u7981\u7528\u6587\u672C</td><td>boolean</td><td>false</td><td></td></tr><tr><td>editable</td><td>\u662F\u5426\u53EF\u7F16\u8F91\uFF0C\u4E3A\u5BF9\u8C61\u65F6\u53EF\u5BF9\u7F16\u8F91\u8FDB\u884C\u63A7\u5236</td><td>boolean | <a href="#editable">editable</a></td><td>false</td><td><a href="#editable">editable</a></td></tr><tr><td>ellipsis</td><td>\u81EA\u52A8\u6EA2\u51FA\u7701\u7565</td><td>boolean</td><td>false</td><td></td></tr><tr><td>keyboard</td><td>\u6DFB\u52A0\u952E\u76D8\u6837\u5F0F</td><td>boolean</td><td>false</td><td></td></tr><tr><td>mark</td><td>\u6DFB\u52A0\u6807\u8BB0\u6837\u5F0F</td><td>boolean</td><td>false</td><td></td></tr><tr><td>strong</td><td>\u662F\u5426\u52A0\u7C97</td><td>boolean</td><td>false</td><td></td></tr><tr><td>type</td><td>\u6587\u672C\u7C7B\u578B</td><td><code>primary</code> | <code>secondary</code> | <code>success</code> | <code>warning</code> | <code>danger</code></td><td>-</td><td></td></tr><tr><td>underline</td><td>\u6DFB\u52A0\u4E0B\u5212\u7EBF\u6837\u5F0F</td><td>boolean</td><td>false</td><td></td></tr><tr><td>resetable</td><td>\u662F\u5426\u91CD\u7F6E\u9ED8\u8BA4\u6837\u5F0F</td><td>boolean</td><td>false</td><td></td></tr><tr><td>blockable</td><td>\u662F\u5426\u8BBE\u7F6E display: block</td><td>boolean</td><td>false</td><td>4.0.0</td></tr><tr><td>centerable</td><td>\u662F\u5426\u8BBE\u7F6E text-align: center</td><td>boolean</td><td>false</td><td>4.17.0</td></tr></tbody></table><h3 id="Typography-Title">Typography.Title <a class="header-anchor" href="#Typography-Title"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>code</td><td>\u6DFB\u52A0\u4EE3\u7801\u6837\u5F0F</td><td>boolean</td><td>false</td><td></td></tr><tr><td>content(v-model)</td><td>\u5F53\u4F7F\u7528 ellipsis \u6216 editable \u65F6\uFF0C\u4F7F\u7528 content \u4EE3\u66FF children</td><td>string</td><td>-</td><td></td></tr><tr><td>copyable</td><td>\u662F\u5426\u53EF\u62F7\u8D1D\uFF0C\u4E3A\u5BF9\u8C61\u65F6\u53EF\u8FDB\u884C\u5404\u79CD\u81EA\u5B9A\u4E49</td><td>boolean | <a href="#copyable">copyable</a></td><td>false</td><td><a href="#copyable">copyable</a></td></tr><tr><td>delete</td><td>\u6DFB\u52A0\u5220\u9664\u7EBF\u6837\u5F0F</td><td>boolean</td><td>false</td><td></td></tr><tr><td>disabled</td><td>\u7981\u7528\u6587\u672C</td><td>boolean</td><td>false</td><td></td></tr><tr><td>editable</td><td>\u662F\u5426\u53EF\u7F16\u8F91\uFF0C\u4E3A\u5BF9\u8C61\u65F6\u53EF\u5BF9\u7F16\u8F91\u8FDB\u884C\u63A7\u5236</td><td>boolean | <a href="#editable">editable</a></td><td>false</td><td><a href="#editable">editable</a></td></tr><tr><td>ellipsis</td><td>\u81EA\u52A8\u6EA2\u51FA\u7701\u7565\uFF0C\u4E3A\u5BF9\u8C61\u65F6\u53EF\u8BBE\u7F6E\u7701\u7565\u884C\u6570\u3001\u662F\u5426\u53EF\u5C55\u5F00\u3001\u6DFB\u52A0\u540E\u7F00\u7B49</td><td>boolean | <a href="#ellipsis">ellipsis</a></td><td>false</td><td><a href="#ellipsis">ellipsis</a></td></tr><tr><td>level</td><td>\u91CD\u8981\u7A0B\u5EA6\uFF0C\u76F8\u5F53\u4E8E <code>h1</code>\u3001<code>h2</code>\u3001<code>h3</code>\u3001<code>h4</code>\u3001<code>h5</code></td><td>number: 1, 2, 3, 4, 5</td><td>1</td><td></td></tr><tr><td>mark</td><td>\u6DFB\u52A0\u6807\u8BB0\u6837\u5F0F</td><td>boolean</td><td>false</td><td></td></tr><tr><td>type</td><td>\u6587\u672C\u7C7B\u578B</td><td><code>primary</code> | <code>secondary</code> | <code>success</code> | <code>warning</code> | <code>danger</code></td><td>-</td><td></td></tr><tr><td>underline</td><td>\u6DFB\u52A0\u4E0B\u5212\u7EBF\u6837\u5F0F</td><td>boolean</td><td>false</td><td></td></tr><tr><td>resetable</td><td>\u662F\u5426\u91CD\u7F6E\u9ED8\u8BA4\u6837\u5F0F</td><td>boolean</td><td>false</td><td></td></tr><tr><td>blockable</td><td>\u662F\u5426\u8BBE\u7F6E display: block</td><td>boolean</td><td>false</td><td>4.0.0</td></tr><tr><td>iconName</td><td>\u662F\u5426\u5DE6\u4FA7\u6709 iconName \u3002\u5F53 iconName \u4E0D\u4E3A\u7A7A\u7684\u65F6\u5019\uFF0C resetable \u4E3A true</td><td>string</td><td>-</td><td>4.27.0</td></tr><tr><td>iconPrefix</td><td>icon \u7684\u524D\u7F00</td><td>string</td><td>icon-</td><td>4.27.0</td></tr><tr><td>iconFont</td><td>icon \u7684 class \u5B57\u4F53\u540D\u5B57</td><td>string</td><td>iconfont</td><td>4.27.0</td></tr><tr><td>iconColor</td><td>icon \u7684\u989C\u8272</td><td>string</td><td>-</td><td>4.27.0</td></tr></tbody></table><h3 id="Typography-Paragraph">Typography.Paragraph <a class="header-anchor" href="#Typography-Paragraph"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>code</td><td>\u6DFB\u52A0\u4EE3\u7801\u6837\u5F0F</td><td>boolean</td><td>false</td><td></td></tr><tr><td>content(v-model)</td><td>\u5F53\u4F7F\u7528 ellipsis \u6216 editable \u65F6\uFF0C\u4F7F\u7528 content \u4EE3\u66FF children</td><td>string</td><td>-</td><td></td></tr><tr><td>copyable</td><td>\u662F\u5426\u53EF\u62F7\u8D1D\uFF0C\u4E3A\u5BF9\u8C61\u65F6\u53EF\u8FDB\u884C\u5404\u79CD\u81EA\u5B9A\u4E49</td><td>boolean | <a href="#copyable">copyable</a></td><td>false</td><td><a href="#copyable">copyable</a></td></tr><tr><td>delete</td><td>\u6DFB\u52A0\u5220\u9664\u7EBF\u6837\u5F0F</td><td>boolean</td><td>false</td><td></td></tr><tr><td>disabled</td><td>\u7981\u7528\u6587\u672C</td><td>boolean</td><td>false</td><td></td></tr><tr><td>editable</td><td>\u662F\u5426\u53EF\u7F16\u8F91\uFF0C\u4E3A\u5BF9\u8C61\u65F6\u53EF\u5BF9\u7F16\u8F91\u8FDB\u884C\u63A7\u5236</td><td>boolean | <a href="#editable">editable</a></td><td>false</td><td><a href="#editable">editable</a></td></tr><tr><td>ellipsis</td><td>\u81EA\u52A8\u6EA2\u51FA\u7701\u7565\uFF0C\u4E3A\u5BF9\u8C61\u65F6\u53EF\u8BBE\u7F6E\u7701\u7565\u884C\u6570\u3001\u662F\u5426\u53EF\u5C55\u5F00\u3001\u6DFB\u52A0\u540E\u7F00\u7B49</td><td>boolean | <a href="#ellipsis">ellipsis</a></td><td>false</td><td><a href="#ellipsis">ellipsis</a></td></tr><tr><td>mark</td><td>\u6DFB\u52A0\u6807\u8BB0\u6837\u5F0F</td><td>boolean</td><td>false</td><td></td></tr><tr><td>strong</td><td>\u662F\u5426\u52A0\u7C97</td><td>boolean</td><td>false</td><td></td></tr><tr><td>type</td><td>\u6587\u672C\u7C7B\u578B</td><td><code>primary</code> | <code>secondary</code> | <code>success</code> | <code>warning</code> | <code>danger</code></td><td>-</td><td></td></tr><tr><td>underline</td><td>\u6DFB\u52A0\u4E0B\u5212\u7EBF\u6837\u5F0F</td><td>boolean</td><td>false</td><td></td></tr><tr><td>resetable</td><td>\u662F\u5426\u91CD\u7F6E\u9ED8\u8BA4\u6837\u5F0F</td><td>boolean</td><td>false</td><td></td></tr><tr><td>blockable</td><td>\u662F\u5426\u8BBE\u7F6E display: block</td><td>boolean</td><td>false</td><td>4.0.0</td></tr></tbody></table><h3 id="slots">slots <a class="header-anchor" href="#slots"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u53C2\u6570</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>copyableIcon</td><td>\u81EA\u5B9A\u4E49\u62F7\u8D1D\u56FE\u6807</td><td><code>{ copied: boolean }</code></td><td><code>copied ? &lt;CheckOutlined /&gt; : &lt;CopyOutlined /&gt;</code></td><td></td></tr><tr><td>copyableTooltip</td><td>\u81EA\u5B9A\u4E49\u63D0\u793A\u6587\u6848\uFF0C\u5F53 <code>copyable.tooltip = false</code> \u65F6\u5173\u95ED</td><td><code>{ copied: boolean }</code></td><td><code>copied ? &#39;\u590D\u5236\u6210\u529F&#39; : &#39;\u590D\u5236&#39;</code></td><td></td></tr><tr><td>editableIcon</td><td>\u81EA\u5B9A\u4E49\u7F16\u8F91\u56FE\u6807</td><td>-</td><td>&lt;EditOutlined /&gt;</td><td></td></tr><tr><td>editableTooltip</td><td>\u81EA\u5B9A\u4E49\u63D0\u793A\u6587\u672C\uFF0C\u5F53 <code>editable.tooltip = false</code> \u65F6\u5173\u95ED</td><td>-</td><td><code>\u7F16\u8F91</code></td><td></td></tr><tr><td>ellipsisSymbol</td><td>\u81EA\u5B9A\u4E49\u5C55\u5F00\u63CF\u8FF0\u6587\u6848</td><td>-</td><td>-</td><td></td></tr><tr><td>ellipsisTooltip</td><td>\u7701\u7565\u65F6\uFF0C\u5C55\u793A\u63D0\u793A\u4FE1\u606F</td><td>-</td><td>-</td><td></td></tr><tr><td>enterEnterIcon</td><td>\u5728\u7F16\u8F91\u6BB5\u4E2D\u81EA\u5B9A\u4E49\u201Center\u201D\u56FE\u6807</td><td><code>{className: string}</code></td><td><code>&lt;EnterOutlined /&gt;</code></td><td>3.0</td></tr></tbody></table><h3 id="copyable">copyable <a class="header-anchor" href="#copyable"><span aria-hidden="true" class="anchor">#</span></a></h3><pre class="language-json"><code>  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> string<span class="token punctuation">,</span>
    onCopy<span class="token operator">:</span> function<span class="token punctuation">,</span>
    tooltip<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</code></pre><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>text</td><td>\u62F7\u8D1D\u5230\u526A\u5207\u677F\u91CC\u7684\u6587\u672C</td><td>string</td><td>-</td><td></td></tr><tr><td>tooltip</td><td>\u662F\u5426\u5C55\u793A\u63D0\u793A\u6587\u672C</td><td>boolean</td><td>true</td><td></td></tr><tr><td>onCopy</td><td>\u62F7\u8D1D\u6210\u529F\u7684\u56DE\u8C03\u51FD\u6570</td><td>function</td><td>-</td><td></td></tr></tbody></table><h3 id="editable">editable <a class="header-anchor" href="#editable"><span aria-hidden="true" class="anchor">#</span></a></h3><pre class="language-json"><code>  <span class="token punctuation">{</span>
    tooltip<span class="token operator">:</span> boolean<span class="token punctuation">,</span>
    editing<span class="token operator">:</span> boolean<span class="token punctuation">,</span>
    maxlength<span class="token operator">:</span> number<span class="token punctuation">,</span>
    autoSize<span class="token operator">:</span> boolean | <span class="token punctuation">{</span> minRows<span class="token operator">:</span> number<span class="token punctuation">,</span> maxRows<span class="token operator">:</span> number <span class="token punctuation">}</span><span class="token punctuation">,</span>
    onStart<span class="token operator">:</span> function<span class="token punctuation">,</span>
    onChange<span class="token operator">:</span> function(string)<span class="token punctuation">,</span>
    onCancel<span class="token operator">:</span> function<span class="token punctuation">,</span>
    onEnd<span class="token operator">:</span> function<span class="token punctuation">,</span>
    triggerType<span class="token operator">:</span> (&#39;icon&#39; | &#39;text&#39;)<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</code></pre><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>autoSize</td><td>\u81EA\u52A8 resize \u6587\u672C\u57DF</td><td>boolean | { minRows: number, maxRows: number }</td><td>-</td><td></td></tr><tr><td>editing</td><td>\u63A7\u5236\u662F\u5426\u662F\u7F16\u8F91\u4E2D\u72B6\u6001</td><td>boolean</td><td>false</td><td></td></tr><tr><td>maxlength</td><td>\u7F16\u8F91\u4E2D\u6587\u672C\u57DF\u6700\u5927\u957F\u5EA6</td><td>number</td><td>-</td><td></td></tr><tr><td>tooltip</td><td>\u662F\u5426\u5C55\u793A\u63D0\u793A\u6587\u672C</td><td>boolean</td><td>true</td><td></td></tr><tr><td>triggerType</td><td>Edit mode trigger - icon, text or both (not specifying icon as trigger hides it)</td><td>Array&lt;<code>icon</code>|<code>text</code>&gt;</td><td>[<code>icon</code>]</td><td></td></tr><tr><td>onCancel</td><td>\u6309 ESC \u9000\u51FA\u7F16\u8F91\u72B6\u6001\u65F6\u89E6\u53D1</td><td>function</td><td>-</td><td></td></tr><tr><td>onChange</td><td>\u6587\u672C\u57DF\u7F16\u8F91\u65F6\u89E6\u53D1</td><td>function(event)</td><td>-</td><td></td></tr><tr><td>onEnd</td><td>\u6309 ENTER \u7ED3\u675F\u7F16\u8F91\u72B6\u6001\u65F6\u89E6\u53D1</td><td>function</td><td>-</td><td></td></tr><tr><td>onStart</td><td>\u8FDB\u5165\u7F16\u8F91\u4E2D\u72B6\u6001\u65F6\u89E6\u53D1</td><td>function</td><td>-</td><td></td></tr></tbody></table><h3 id="ellipsis">ellipsis <a class="header-anchor" href="#ellipsis"><span aria-hidden="true" class="anchor">#</span></a></h3><pre class="language-json"><code>  <span class="token punctuation">{</span>
    rows<span class="token operator">:</span> number<span class="token punctuation">,</span>
    expandable<span class="token operator">:</span> boolean<span class="token punctuation">,</span>
    suffix<span class="token operator">:</span> string<span class="token punctuation">,</span>
    symbol<span class="token operator">:</span> string<span class="token punctuation">,</span>
    tooltip<span class="token operator">:</span> boolean<span class="token punctuation">,</span>
    onExpand<span class="token operator">:</span> function(event)<span class="token punctuation">,</span>
    onEllipsis<span class="token operator">:</span> function(ellipsis)<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</code></pre><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>expandable</td><td>\u662F\u5426\u53EF\u5C55\u5F00</td><td>boolean</td><td>-</td><td></td></tr><tr><td>rows</td><td>\u6700\u591A\u663E\u793A\u7684\u884C\u6570</td><td>number</td><td>-</td><td></td></tr><tr><td>suffix</td><td>\u81EA\u5B9A\u4E49\u7701\u7565\u5185\u5BB9\u540E\u7F00</td><td>string</td><td>-</td><td></td></tr><tr><td>symbol</td><td>\u81EA\u5B9A\u4E49\u5C55\u5F00\u63CF\u8FF0\u6587\u6848</td><td>string</td><td><code>\u5C55\u5F00</code></td><td></td></tr><tr><td>tooltip</td><td>\u7701\u7565\u65F6\uFF0C\u5C55\u793A\u63D0\u793A\u4FE1\u606F</td><td>boolean | string</td><td>-</td><td></td></tr><tr><td>onEllipsis</td><td>\u89E6\u53D1\u7701\u7565\u65F6\u7684\u56DE\u8C03</td><td>function(ellipsis)</td><td>-</td><td></td></tr><tr><td>onExpand</td><td>\u70B9\u51FB\u5C55\u5F00\u65F6\u7684\u56DE\u8C03</td><td>function(event)</td><td>-</td><td></td></tr></tbody></table>`,23),Ia=[ya];function Ca(a,l,i,m,C,A){return h(),Z("article",ma,Ia)}var Aa=y(ha,[["render",Ca]]);const va={pageData:{title:"Typography",description:"",frontmatter:{category:"Components",type:"General",title:"Typography",cols:1,cover:"https://gw.alipayobjects.com/zos/alicdn/GOM1KQ24O/Typography.svg"},headers:[{level:2,title:"When To Use",slug:"When-To-Use",content:""},{level:2,title:"API",slug:"API",content:"Typography.Text"},{level:3,title:"Typography.Text",slug:"Typography-Text",content:""},{level:3,title:"Typography.Title",slug:"Typography-Title",content:""},{level:3,title:"Typography.Paragraph",slug:"Typography-Paragraph",content:""},{level:3,title:"slots",slug:"slots",content:""},{level:3,title:"copyable",slug:"copyable",content:""},{level:3,title:"editable",slug:"editable",content:""},{level:3,title:"ellipsis",slug:"ellipsis",content:""}],relativePath:"components/typography/index.en-US.md",content:`
Basic text writing, including headings, body text, lists, and more.

## When To Use

- When need to display a title or paragraph contents in Articles/Blogs/Notes.
- When you need copyable/editable/ellipsis texts.

## API

### Typography.Text

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| code | Code style | boolean | false |  |
| copyable | Whether to be copyable, customize it via setting an object | boolean \\| [copyable](#copyable) | false | [copyable](#copyable) |
| delete | Deleted line style | boolean | false |  |
| disabled | Disabled content | boolean | false |  |
| editable | If editable. Can control edit state when is object | boolean \\| [editable](#editable) | false | [editable](#editable) |
| ellipsis | Display ellipsis when text overflows | boolean | false |  |
| keyboard | Keyboard style | boolean | false |  |
| mark | Marked style | boolean | false |  |
| strong | Bold style | boolean | false |  |
| type | Content type | \`primary\` \\| \`secondary\` \\| \`success\` \\| \`warning\` \\| \`danger\` | - |  |
| underline | Underlined style | boolean | false |  |
| content(v-model) | When using ellipsis or editable, use content instead of children | string | - |  |
| resetable | \u662F\u5426\u91CD\u7F6E\u9ED8\u8BA4\u6837\u5F0F | boolean | false |  |
| blockable | \u662F\u5426\u8BBE\u7F6E display: block | boolean | false | 4.0.0 |
| centerable | \u662F\u5426\u8BBE\u7F6E text-align: center | boolean | false | 4.17.0 |

### Typography.Title

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| code | Code style | boolean | false |  |
| copyable | Whether to be copyable, customize it via setting an object | boolean \\| [copyable](#copyable) | false | [copyable](#copyable) |
| delete | Deleted line style | boolean | false |  |
| disabled | Disabled content | boolean | false |  |
| editable | If editable. Can control edit state when is object | boolean \\| [editable](#editable) | false | [editable](#editable) |
| ellipsis | Display ellipsis when text overflows, can configure rows and expandable by using object | boolean \\| [ellipsis](#ellipsis) | false | [ellipsis](#ellipsis) |
| level | Set content importance. Match with \`h1\`, \`h2\`, \`h3\`, \`h4\`, \`h5\` | number: 1, 2, 3, 4, 5 | 1 |  |
| mark | Marked style | boolean | false |  |
| type | Content type | \`primary\` \\| \`secondary\` \\| \`success\` \\| \`warning\` \\| \`danger\` | - |  |
| underline | Underlined style | boolean | false |  |
| content(v-model) | When using ellipsis or editable, use content instead of children | string | - |  |
| resetable | \u662F\u5426\u91CD\u7F6E\u9ED8\u8BA4\u6837\u5F0F | boolean | false |  |
| blockable | \u662F\u5426\u8BBE\u7F6E display: block | boolean | false | 4.0.0 |

### Typography.Paragraph

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| code | Code style | boolean | false |  |
| copyable | Whether to be copyable, customize it via setting an object | boolean \\| [copyable](#copyable) | false | [copyable](#copyable) |
| delete | Deleted line style | boolean | false |  |
| disabled | Disabled content | boolean | false |  |
| editable | If editable. Can control edit state when is object | boolean \\| [editable](#editable) | false | [editable](#editable) |
| ellipsis | Display ellipsis when text overflows, can configure rows and expandable by using object | boolean \\| [ellipsis](#ellipsis) | false | [ellipsis](#ellipsis) |
| mark | Marked style | boolean | false |  |
| strong | Bold style | boolean | false |  |
| type | Content type | \`primary\` \\| \`secondary\` \\| \`success\` \\| \`warning\` \\| \`danger\` | - |  |
| underline | Underlined style | boolean | false |  |
| content(v-model) | When using ellipsis or editable, use content instead of children | string | - |  |
| resetable | \u662F\u5426\u91CD\u7F6E\u9ED8\u8BA4\u6837\u5F0F | boolean | false |  |
| blockable | \u662F\u5426\u8BBE\u7F6E display: block | boolean | false | 4.0.0 |

### slots

| Name | Description | Property | Default | Version |
| --- | --- | --- | --- | --- |
| copyableIcon | Custom copy icon | \`{ copied: boolean }\` | \`copied ? &lt;CheckOutlined /&gt; : &lt;CopyOutlined /&gt;\` |  |
| copyableTooltip | Custom tooltip text, hide when \`copyable.tooltip = false\` | \`{ copied: boolean }\` | \`copied ? &#39;Copied&#39; : &#39;Copy&#39;\` |  |
| editableEnterIcon | Custom &quot;enter&quot; icon in the edit field | \`{className: string}\` | \`&lt;EnterOutlined /&gt;\` | 3.0 |
| editableIcon | Custom editable icon | - | &amp;lt;EditOutlined /&gt; |  |
| editableTooltip | Custom tooltip text, hide when \`editable.tooltip = false\` | - | \`Edit\` |  |
| ellipsisSymbol | Custom description of ellipsis | - | - |  |
| ellipsisTooltip | Show tooltip when ellipsis | - | - |  |

### copyable

\`\`\`json
  {
    text: string,
    onCopy: function,
    tooltip: false,
  }
\`\`\`

| Property | Description             | Type     | Default | Version |
| -------- | ----------------------- | -------- | ------- | ------- |
| text     | The text to copy        | string   | -       |         |
| tooltip  | Whether to show tooltip | boolean  | true    |         |
| onCopy   | Called when copied text | function | -       |         |

### editable

\`\`\`json
  {
    tooltip: boolean,
    editing: boolean,
    maxlength: number,
    autoSize: boolean | { minRows: number, maxRows: number },
    onStart: function,
    onChange: function(string),
    onCancel: function,
    onEnd: function,
    triggerType: (&#39;icon&#39; | &#39;text&#39;)[],
  }
\`\`\`

| Property | Description | Type | Default | Version |
| --- | --- | --- | --- | --- |
| autoSize | \`autoSize\` attribute of textarea | boolean \\| { minRows: number, maxRows: number } | - |  |
| editing | Whether to be editable | boolean | false |  |
| maxlength | \`maxlength\` attribute of textarea | number | - |  |
| tooltip | Whether to show tooltip | boolean | true |  |
| triggerType | Edit mode trigger - icon, text or both (not specifying icon as trigger hides it) | Array&amp;lt;\`icon\`\\|\`text\`&gt; | \\[\`icon\`] |  |
| onCancel | Called when type ESC to exit editable state | function | - |  |
| onChange | Called when input at textarea | function(event) | - |  |
| onEnd | Called when type ENTER to exit editable state | function | - |  |
| onStart | Called when enter editable state | function | - |  |

### ellipsis

\`\`\`json
  {
    rows: number,
    expandable: boolean,
    suffix: string,
    symbol: string,
    tooltip: boolean | string,
    onExpand: function(event),
    onEllipsis: function(ellipsis),
  }
\`\`\`

| Property   | Description                               | Type               | Default  | Version |
| ---------- | ----------------------------------------- | ------------------ | -------- | ------- |
| expandable | Whether to be expandable                  | boolean            | -        |         |
| rows       | Max rows of content                       | number             | -        |         |
| suffix     | Suffix of ellipsis content                | string             | -        |         |
| symbol     | Custom description of ellipsis            | string             | \`Expand\` |         |
| tooltip    | Show tooltip when ellipsis                | boolean \\| string  | -        |         |
| onEllipsis | Called when enter or leave ellipsis state | function(ellipsis) | -        |         |
| onExpand   | Called when expand content                | function(event)    | -        |         |
`,html:`<p>Basic text writing, including headings, body text, lists, and more.</p>
<h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<ul>
<li>When need to display a title or paragraph contents in Articles/Blogs/Notes.</li>
<li>When you need copyable/editable/ellipsis texts.</li>
</ul>
<h2 id="API">API <a class="header-anchor" href="#API">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h2>
<h3 id="Typography-Text">Typography.Text <a class="header-anchor" href="#Typography-Text">
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
<td>code</td>
<td>Code style</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>copyable</td>
<td>Whether to be copyable, customize it via setting an object</td>
<td>boolean | <a href="#copyable">copyable</a></td>
<td>false</td>
<td><a href="#copyable">copyable</a></td>
</tr>
<tr>
<td>delete</td>
<td>Deleted line style</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>Disabled content</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>editable</td>
<td>If editable. Can control edit state when is object</td>
<td>boolean | <a href="#editable">editable</a></td>
<td>false</td>
<td><a href="#editable">editable</a></td>
</tr>
<tr>
<td>ellipsis</td>
<td>Display ellipsis when text overflows</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>keyboard</td>
<td>Keyboard style</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>mark</td>
<td>Marked style</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>strong</td>
<td>Bold style</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>type</td>
<td>Content type</td>
<td><code>primary</code> | <code>secondary</code> | <code>success</code> | <code>warning</code> | <code>danger</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>underline</td>
<td>Underlined style</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>content(v-model)</td>
<td>When using ellipsis or editable, use content instead of children</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>resetable</td>
<td>\u662F\u5426\u91CD\u7F6E\u9ED8\u8BA4\u6837\u5F0F</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>blockable</td>
<td>\u662F\u5426\u8BBE\u7F6E display: block</td>
<td>boolean</td>
<td>false</td>
<td>4.0.0</td>
</tr>
<tr>
<td>centerable</td>
<td>\u662F\u5426\u8BBE\u7F6E text-align: center</td>
<td>boolean</td>
<td>false</td>
<td>4.17.0</td>
</tr>
</tbody>
</table>
<h3 id="Typography-Title">Typography.Title <a class="header-anchor" href="#Typography-Title">
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
<td>code</td>
<td>Code style</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>copyable</td>
<td>Whether to be copyable, customize it via setting an object</td>
<td>boolean | <a href="#copyable">copyable</a></td>
<td>false</td>
<td><a href="#copyable">copyable</a></td>
</tr>
<tr>
<td>delete</td>
<td>Deleted line style</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>Disabled content</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>editable</td>
<td>If editable. Can control edit state when is object</td>
<td>boolean | <a href="#editable">editable</a></td>
<td>false</td>
<td><a href="#editable">editable</a></td>
</tr>
<tr>
<td>ellipsis</td>
<td>Display ellipsis when text overflows, can configure rows and expandable by using object</td>
<td>boolean | <a href="#ellipsis">ellipsis</a></td>
<td>false</td>
<td><a href="#ellipsis">ellipsis</a></td>
</tr>
<tr>
<td>level</td>
<td>Set content importance. Match with <code>h1</code>, <code>h2</code>, <code>h3</code>, <code>h4</code>, <code>h5</code></td>
<td>number: 1, 2, 3, 4, 5</td>
<td>1</td>
<td></td>
</tr>
<tr>
<td>mark</td>
<td>Marked style</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>type</td>
<td>Content type</td>
<td><code>primary</code> | <code>secondary</code> | <code>success</code> | <code>warning</code> | <code>danger</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>underline</td>
<td>Underlined style</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>content(v-model)</td>
<td>When using ellipsis or editable, use content instead of children</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>resetable</td>
<td>\u662F\u5426\u91CD\u7F6E\u9ED8\u8BA4\u6837\u5F0F</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>blockable</td>
<td>\u662F\u5426\u8BBE\u7F6E display: block</td>
<td>boolean</td>
<td>false</td>
<td>4.0.0</td>
</tr>
</tbody>
</table>
<h3 id="Typography-Paragraph">Typography.Paragraph <a class="header-anchor" href="#Typography-Paragraph">
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
<td>code</td>
<td>Code style</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>copyable</td>
<td>Whether to be copyable, customize it via setting an object</td>
<td>boolean | <a href="#copyable">copyable</a></td>
<td>false</td>
<td><a href="#copyable">copyable</a></td>
</tr>
<tr>
<td>delete</td>
<td>Deleted line style</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>disabled</td>
<td>Disabled content</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>editable</td>
<td>If editable. Can control edit state when is object</td>
<td>boolean | <a href="#editable">editable</a></td>
<td>false</td>
<td><a href="#editable">editable</a></td>
</tr>
<tr>
<td>ellipsis</td>
<td>Display ellipsis when text overflows, can configure rows and expandable by using object</td>
<td>boolean | <a href="#ellipsis">ellipsis</a></td>
<td>false</td>
<td><a href="#ellipsis">ellipsis</a></td>
</tr>
<tr>
<td>mark</td>
<td>Marked style</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>strong</td>
<td>Bold style</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>type</td>
<td>Content type</td>
<td><code>primary</code> | <code>secondary</code> | <code>success</code> | <code>warning</code> | <code>danger</code></td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>underline</td>
<td>Underlined style</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>content(v-model)</td>
<td>When using ellipsis or editable, use content instead of children</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>resetable</td>
<td>\u662F\u5426\u91CD\u7F6E\u9ED8\u8BA4\u6837\u5F0F</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>blockable</td>
<td>\u662F\u5426\u8BBE\u7F6E display: block</td>
<td>boolean</td>
<td>false</td>
<td>4.0.0</td>
</tr>
</tbody>
</table>
<h3 id="slots">slots <a class="header-anchor" href="#slots">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<table>
<thead>
<tr>
<th>Name</th>
<th>Description</th>
<th>Property</th>
<th>Default</th>
<th>Version</th>
</tr>
</thead>
<tbody>
<tr>
<td>copyableIcon</td>
<td>Custom copy icon</td>
<td><code>{ copied: boolean }</code></td>
<td><code>copied ? &lt;CheckOutlined /&gt; : &lt;CopyOutlined /&gt;</code></td>
<td></td>
</tr>
<tr>
<td>copyableTooltip</td>
<td>Custom tooltip text, hide when <code>copyable.tooltip = false</code></td>
<td><code>{ copied: boolean }</code></td>
<td><code>copied ? 'Copied' : 'Copy'</code></td>
<td></td>
</tr>
<tr>
<td>editableEnterIcon</td>
<td>Custom &quot;enter&quot; icon in the edit field</td>
<td><code>{className: string}</code></td>
<td><code>&lt;EnterOutlined /&gt;</code></td>
<td>3.0</td>
</tr>
<tr>
<td>editableIcon</td>
<td>Custom editable icon</td>
<td>-</td>
<td>&lt;EditOutlined /&gt;</td>
<td></td>
</tr>
<tr>
<td>editableTooltip</td>
<td>Custom tooltip text, hide when <code>editable.tooltip = false</code></td>
<td>-</td>
<td><code>Edit</code></td>
<td></td>
</tr>
<tr>
<td>ellipsisSymbol</td>
<td>Custom description of ellipsis</td>
<td>-</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>ellipsisTooltip</td>
<td>Show tooltip when ellipsis</td>
<td>-</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="copyable">copyable <a class="header-anchor" href="#copyable">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<pre class="language-json" v-pre><code>  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> string<span class="token punctuation">,</span>
    onCopy<span class="token operator">:</span> function<span class="token punctuation">,</span>
    tooltip<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</code></pre>
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
<td>text</td>
<td>The text to copy</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>tooltip</td>
<td>Whether to show tooltip</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>onCopy</td>
<td>Called when copied text</td>
<td>function</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="editable">editable <a class="header-anchor" href="#editable">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<pre class="language-json" v-pre><code>  <span class="token punctuation">{</span>
    tooltip<span class="token operator">:</span> boolean<span class="token punctuation">,</span>
    editing<span class="token operator">:</span> boolean<span class="token punctuation">,</span>
    maxlength<span class="token operator">:</span> number<span class="token punctuation">,</span>
    autoSize<span class="token operator">:</span> boolean | <span class="token punctuation">{</span> minRows<span class="token operator">:</span> number<span class="token punctuation">,</span> maxRows<span class="token operator">:</span> number <span class="token punctuation">}</span><span class="token punctuation">,</span>
    onStart<span class="token operator">:</span> function<span class="token punctuation">,</span>
    onChange<span class="token operator">:</span> function(string)<span class="token punctuation">,</span>
    onCancel<span class="token operator">:</span> function<span class="token punctuation">,</span>
    onEnd<span class="token operator">:</span> function<span class="token punctuation">,</span>
    triggerType<span class="token operator">:</span> ('icon' | 'text')<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</code></pre>
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
<td>autoSize</td>
<td><code>autoSize</code> attribute of textarea</td>
<td>boolean | { minRows: number, maxRows: number }</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>editing</td>
<td>Whether to be editable</td>
<td>boolean</td>
<td>false</td>
<td></td>
</tr>
<tr>
<td>maxlength</td>
<td><code>maxlength</code> attribute of textarea</td>
<td>number</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>tooltip</td>
<td>Whether to show tooltip</td>
<td>boolean</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>triggerType</td>
<td>Edit mode trigger - icon, text or both (not specifying icon as trigger hides it)</td>
<td>Array&lt;<code>icon</code>|<code>text</code>&gt;</td>
<td>[<code>icon</code>]</td>
<td></td>
</tr>
<tr>
<td>onCancel</td>
<td>Called when type ESC to exit editable state</td>
<td>function</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>onChange</td>
<td>Called when input at textarea</td>
<td>function(event)</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>onEnd</td>
<td>Called when type ENTER to exit editable state</td>
<td>function</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>onStart</td>
<td>Called when enter editable state</td>
<td>function</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="ellipsis">ellipsis <a class="header-anchor" href="#ellipsis">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<pre class="language-json" v-pre><code>  <span class="token punctuation">{</span>
    rows<span class="token operator">:</span> number<span class="token punctuation">,</span>
    expandable<span class="token operator">:</span> boolean<span class="token punctuation">,</span>
    suffix<span class="token operator">:</span> string<span class="token punctuation">,</span>
    symbol<span class="token operator">:</span> string<span class="token punctuation">,</span>
    tooltip<span class="token operator">:</span> boolean | string<span class="token punctuation">,</span>
    onExpand<span class="token operator">:</span> function(event)<span class="token punctuation">,</span>
    onEllipsis<span class="token operator">:</span> function(ellipsis)<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</code></pre>
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
<td>expandable</td>
<td>Whether to be expandable</td>
<td>boolean</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>rows</td>
<td>Max rows of content</td>
<td>number</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>suffix</td>
<td>Suffix of ellipsis content</td>
<td>string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>symbol</td>
<td>Custom description of ellipsis</td>
<td>string</td>
<td><code>Expand</code></td>
<td></td>
</tr>
<tr>
<td>tooltip</td>
<td>Show tooltip when ellipsis</td>
<td>boolean | string</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>onEllipsis</td>
<td>Called when enter or leave ellipsis state</td>
<td>function(ellipsis)</td>
<td>-</td>
<td></td>
</tr>
<tr>
<td>onExpand</td>
<td>Called when expand content</td>
<td>function(event)</td>
<td>-</td>
<td></td>
</tr>
</tbody>
</table>
`,lastUpdated:1709895796865}},Ga={class:"markdown"},Za=f(`<p>Basic text writing, including headings, body text, lists, and more.</p><h2 id="When-To-Use">When To Use <a class="header-anchor" href="#When-To-Use"><span aria-hidden="true" class="anchor">#</span></a></h2><ul><li>When need to display a title or paragraph contents in Articles/Blogs/Notes.</li><li>When you need copyable/editable/ellipsis texts.</li></ul><h2 id="API">API <a class="header-anchor" href="#API"><span aria-hidden="true" class="anchor">#</span></a></h2><h3 id="Typography-Text">Typography.Text <a class="header-anchor" href="#Typography-Text"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>code</td><td>Code style</td><td>boolean</td><td>false</td><td></td></tr><tr><td>copyable</td><td>Whether to be copyable, customize it via setting an object</td><td>boolean | <a href="#copyable">copyable</a></td><td>false</td><td><a href="#copyable">copyable</a></td></tr><tr><td>delete</td><td>Deleted line style</td><td>boolean</td><td>false</td><td></td></tr><tr><td>disabled</td><td>Disabled content</td><td>boolean</td><td>false</td><td></td></tr><tr><td>editable</td><td>If editable. Can control edit state when is object</td><td>boolean | <a href="#editable">editable</a></td><td>false</td><td><a href="#editable">editable</a></td></tr><tr><td>ellipsis</td><td>Display ellipsis when text overflows</td><td>boolean</td><td>false</td><td></td></tr><tr><td>keyboard</td><td>Keyboard style</td><td>boolean</td><td>false</td><td></td></tr><tr><td>mark</td><td>Marked style</td><td>boolean</td><td>false</td><td></td></tr><tr><td>strong</td><td>Bold style</td><td>boolean</td><td>false</td><td></td></tr><tr><td>type</td><td>Content type</td><td><code>primary</code> | <code>secondary</code> | <code>success</code> | <code>warning</code> | <code>danger</code></td><td>-</td><td></td></tr><tr><td>underline</td><td>Underlined style</td><td>boolean</td><td>false</td><td></td></tr><tr><td>content(v-model)</td><td>When using ellipsis or editable, use content instead of children</td><td>string</td><td>-</td><td></td></tr><tr><td>resetable</td><td>\u662F\u5426\u91CD\u7F6E\u9ED8\u8BA4\u6837\u5F0F</td><td>boolean</td><td>false</td><td></td></tr><tr><td>blockable</td><td>\u662F\u5426\u8BBE\u7F6E display: block</td><td>boolean</td><td>false</td><td>4.0.0</td></tr><tr><td>centerable</td><td>\u662F\u5426\u8BBE\u7F6E text-align: center</td><td>boolean</td><td>false</td><td>4.17.0</td></tr></tbody></table><h3 id="Typography-Title">Typography.Title <a class="header-anchor" href="#Typography-Title"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>code</td><td>Code style</td><td>boolean</td><td>false</td><td></td></tr><tr><td>copyable</td><td>Whether to be copyable, customize it via setting an object</td><td>boolean | <a href="#copyable">copyable</a></td><td>false</td><td><a href="#copyable">copyable</a></td></tr><tr><td>delete</td><td>Deleted line style</td><td>boolean</td><td>false</td><td></td></tr><tr><td>disabled</td><td>Disabled content</td><td>boolean</td><td>false</td><td></td></tr><tr><td>editable</td><td>If editable. Can control edit state when is object</td><td>boolean | <a href="#editable">editable</a></td><td>false</td><td><a href="#editable">editable</a></td></tr><tr><td>ellipsis</td><td>Display ellipsis when text overflows, can configure rows and expandable by using object</td><td>boolean | <a href="#ellipsis">ellipsis</a></td><td>false</td><td><a href="#ellipsis">ellipsis</a></td></tr><tr><td>level</td><td>Set content importance. Match with <code>h1</code>, <code>h2</code>, <code>h3</code>, <code>h4</code>, <code>h5</code></td><td>number: 1, 2, 3, 4, 5</td><td>1</td><td></td></tr><tr><td>mark</td><td>Marked style</td><td>boolean</td><td>false</td><td></td></tr><tr><td>type</td><td>Content type</td><td><code>primary</code> | <code>secondary</code> | <code>success</code> | <code>warning</code> | <code>danger</code></td><td>-</td><td></td></tr><tr><td>underline</td><td>Underlined style</td><td>boolean</td><td>false</td><td></td></tr><tr><td>content(v-model)</td><td>When using ellipsis or editable, use content instead of children</td><td>string</td><td>-</td><td></td></tr><tr><td>resetable</td><td>\u662F\u5426\u91CD\u7F6E\u9ED8\u8BA4\u6837\u5F0F</td><td>boolean</td><td>false</td><td></td></tr><tr><td>blockable</td><td>\u662F\u5426\u8BBE\u7F6E display: block</td><td>boolean</td><td>false</td><td>4.0.0</td></tr></tbody></table><h3 id="Typography-Paragraph">Typography.Paragraph <a class="header-anchor" href="#Typography-Paragraph"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>code</td><td>Code style</td><td>boolean</td><td>false</td><td></td></tr><tr><td>copyable</td><td>Whether to be copyable, customize it via setting an object</td><td>boolean | <a href="#copyable">copyable</a></td><td>false</td><td><a href="#copyable">copyable</a></td></tr><tr><td>delete</td><td>Deleted line style</td><td>boolean</td><td>false</td><td></td></tr><tr><td>disabled</td><td>Disabled content</td><td>boolean</td><td>false</td><td></td></tr><tr><td>editable</td><td>If editable. Can control edit state when is object</td><td>boolean | <a href="#editable">editable</a></td><td>false</td><td><a href="#editable">editable</a></td></tr><tr><td>ellipsis</td><td>Display ellipsis when text overflows, can configure rows and expandable by using object</td><td>boolean | <a href="#ellipsis">ellipsis</a></td><td>false</td><td><a href="#ellipsis">ellipsis</a></td></tr><tr><td>mark</td><td>Marked style</td><td>boolean</td><td>false</td><td></td></tr><tr><td>strong</td><td>Bold style</td><td>boolean</td><td>false</td><td></td></tr><tr><td>type</td><td>Content type</td><td><code>primary</code> | <code>secondary</code> | <code>success</code> | <code>warning</code> | <code>danger</code></td><td>-</td><td></td></tr><tr><td>underline</td><td>Underlined style</td><td>boolean</td><td>false</td><td></td></tr><tr><td>content(v-model)</td><td>When using ellipsis or editable, use content instead of children</td><td>string</td><td>-</td><td></td></tr><tr><td>resetable</td><td>\u662F\u5426\u91CD\u7F6E\u9ED8\u8BA4\u6837\u5F0F</td><td>boolean</td><td>false</td><td></td></tr><tr><td>blockable</td><td>\u662F\u5426\u8BBE\u7F6E display: block</td><td>boolean</td><td>false</td><td>4.0.0</td></tr></tbody></table><h3 id="slots">slots <a class="header-anchor" href="#slots"><span aria-hidden="true" class="anchor">#</span></a></h3><table><thead><tr><th>Name</th><th>Description</th><th>Property</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>copyableIcon</td><td>Custom copy icon</td><td><code>{ copied: boolean }</code></td><td><code>copied ? &lt;CheckOutlined /&gt; : &lt;CopyOutlined /&gt;</code></td><td></td></tr><tr><td>copyableTooltip</td><td>Custom tooltip text, hide when <code>copyable.tooltip = false</code></td><td><code>{ copied: boolean }</code></td><td><code>copied ? &#39;Copied&#39; : &#39;Copy&#39;</code></td><td></td></tr><tr><td>editableEnterIcon</td><td>Custom &quot;enter&quot; icon in the edit field</td><td><code>{className: string}</code></td><td><code>&lt;EnterOutlined /&gt;</code></td><td>3.0</td></tr><tr><td>editableIcon</td><td>Custom editable icon</td><td>-</td><td>&lt;EditOutlined /&gt;</td><td></td></tr><tr><td>editableTooltip</td><td>Custom tooltip text, hide when <code>editable.tooltip = false</code></td><td>-</td><td><code>Edit</code></td><td></td></tr><tr><td>ellipsisSymbol</td><td>Custom description of ellipsis</td><td>-</td><td>-</td><td></td></tr><tr><td>ellipsisTooltip</td><td>Show tooltip when ellipsis</td><td>-</td><td>-</td><td></td></tr></tbody></table><h3 id="copyable">copyable <a class="header-anchor" href="#copyable"><span aria-hidden="true" class="anchor">#</span></a></h3><pre class="language-json"><code>  <span class="token punctuation">{</span>
    text<span class="token operator">:</span> string<span class="token punctuation">,</span>
    onCopy<span class="token operator">:</span> function<span class="token punctuation">,</span>
    tooltip<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</code></pre><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>text</td><td>The text to copy</td><td>string</td><td>-</td><td></td></tr><tr><td>tooltip</td><td>Whether to show tooltip</td><td>boolean</td><td>true</td><td></td></tr><tr><td>onCopy</td><td>Called when copied text</td><td>function</td><td>-</td><td></td></tr></tbody></table><h3 id="editable">editable <a class="header-anchor" href="#editable"><span aria-hidden="true" class="anchor">#</span></a></h3><pre class="language-json"><code>  <span class="token punctuation">{</span>
    tooltip<span class="token operator">:</span> boolean<span class="token punctuation">,</span>
    editing<span class="token operator">:</span> boolean<span class="token punctuation">,</span>
    maxlength<span class="token operator">:</span> number<span class="token punctuation">,</span>
    autoSize<span class="token operator">:</span> boolean | <span class="token punctuation">{</span> minRows<span class="token operator">:</span> number<span class="token punctuation">,</span> maxRows<span class="token operator">:</span> number <span class="token punctuation">}</span><span class="token punctuation">,</span>
    onStart<span class="token operator">:</span> function<span class="token punctuation">,</span>
    onChange<span class="token operator">:</span> function(string)<span class="token punctuation">,</span>
    onCancel<span class="token operator">:</span> function<span class="token punctuation">,</span>
    onEnd<span class="token operator">:</span> function<span class="token punctuation">,</span>
    triggerType<span class="token operator">:</span> (&#39;icon&#39; | &#39;text&#39;)<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</code></pre><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>autoSize</td><td><code>autoSize</code> attribute of textarea</td><td>boolean | { minRows: number, maxRows: number }</td><td>-</td><td></td></tr><tr><td>editing</td><td>Whether to be editable</td><td>boolean</td><td>false</td><td></td></tr><tr><td>maxlength</td><td><code>maxlength</code> attribute of textarea</td><td>number</td><td>-</td><td></td></tr><tr><td>tooltip</td><td>Whether to show tooltip</td><td>boolean</td><td>true</td><td></td></tr><tr><td>triggerType</td><td>Edit mode trigger - icon, text or both (not specifying icon as trigger hides it)</td><td>Array&lt;<code>icon</code>|<code>text</code>&gt;</td><td>[<code>icon</code>]</td><td></td></tr><tr><td>onCancel</td><td>Called when type ESC to exit editable state</td><td>function</td><td>-</td><td></td></tr><tr><td>onChange</td><td>Called when input at textarea</td><td>function(event)</td><td>-</td><td></td></tr><tr><td>onEnd</td><td>Called when type ENTER to exit editable state</td><td>function</td><td>-</td><td></td></tr><tr><td>onStart</td><td>Called when enter editable state</td><td>function</td><td>-</td><td></td></tr></tbody></table><h3 id="ellipsis">ellipsis <a class="header-anchor" href="#ellipsis"><span aria-hidden="true" class="anchor">#</span></a></h3><pre class="language-json"><code>  <span class="token punctuation">{</span>
    rows<span class="token operator">:</span> number<span class="token punctuation">,</span>
    expandable<span class="token operator">:</span> boolean<span class="token punctuation">,</span>
    suffix<span class="token operator">:</span> string<span class="token punctuation">,</span>
    symbol<span class="token operator">:</span> string<span class="token punctuation">,</span>
    tooltip<span class="token operator">:</span> boolean | string<span class="token punctuation">,</span>
    onExpand<span class="token operator">:</span> function(event)<span class="token punctuation">,</span>
    onEllipsis<span class="token operator">:</span> function(ellipsis)<span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
</code></pre><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th><th>Version</th></tr></thead><tbody><tr><td>expandable</td><td>Whether to be expandable</td><td>boolean</td><td>-</td><td></td></tr><tr><td>rows</td><td>Max rows of content</td><td>number</td><td>-</td><td></td></tr><tr><td>suffix</td><td>Suffix of ellipsis content</td><td>string</td><td>-</td><td></td></tr><tr><td>symbol</td><td>Custom description of ellipsis</td><td>string</td><td><code>Expand</code></td><td></td></tr><tr><td>tooltip</td><td>Show tooltip when ellipsis</td><td>boolean | string</td><td>-</td><td></td></tr><tr><td>onEllipsis</td><td>Called when enter or leave ellipsis state</td><td>function(ellipsis)</td><td>-</td><td></td></tr><tr><td>onExpand</td><td>Called when expand content</td><td>function(event)</td><td>-</td><td></td></tr></tbody></table>`,21),Ba=[Za];function Xa(a,l,i,m,C,A){return h(),Z("article",Ga,Ba)}var Wa=y(va,[["render",Xa]]);const fa=G({CN:Aa,US:Wa,components:{Basic:mt,Edit:mn,Ellipsis:Mt,Text:qn,Suffix:Bn,Title:ea,TitleIcon:ba,Block:Tt},setup(){return{}}});function Ya(a,l,i,m,C,A){const d=o("Basic"),r=o("Edit"),c=o("Ellipsis"),p=o("Text"),k=o("Suffix"),g=o("Title"),u=o("TitleIcon"),v=o("Block"),B=o("demo-sort");return h(),I(B,{cols:1},{default:e(()=>[s(d),s(r),s(c),s(p),s(k),s(g),s(u),s(v)]),_:1})}var Ea=y(fa,[["render",Ya]]);export{Ea as default};

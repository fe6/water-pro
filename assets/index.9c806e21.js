import{d as g,Y as n,bw as d,bx as s,bG as r,bH as c,bI as u,b as t,k as M,F as P,D as p,bO as F}from"./vendor.846be9ce.js";var Y=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u6700\u7B80\u5355\u7684\u7528\u6CD5\u3002
</cn>

<us>
#### Basic
Basic usage.
</us>
`,x=g({setup(){return{onChange:o=>{console.log(o)},imgUrls:["https://img01.yzcdn.cn/upload_files/2021/07/15/FikfPBWchRpMqQ-pCaqKYuzIYF8z.png?imageMogr2/thumbnail/2130x/format/jpg/interlace/1","https://img01.yzcdn.cn/upload_files/2021/07/15/lmT6p7-Zidq69_5oWDIHtS-HYzIL.png?imageMogr2/thumbnail/2130x/format/jpg/interlace/1","https://img01.yzcdn.cn/upload_files/2021/07/15/lsjdz-NSI3PExOsfAS1oUutlPRXu.png?imageMogr2/thumbnail/2130x/format/jpg/interlace/1","https://img01.yzcdn.cn/upload_files/2021/07/15/lkjEEeyR8wBtQ6QKlLZgzzjEr5gS.png?imageMogr2/thumbnail/2130x/format/jpg/interlace/1"]}}});function q(e,o,a,v,b,y){const i=n("a-carousel");return d(),s(i,{"after-change":e.onChange,imgList:e.imgUrls},null,8,["after-change","imgList"])}x.render=q;var E=`<template>
  <a-carousel
    :after-change="onChange"
    :imgList="imgUrls"
  />
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const onChange = (current: number) => {
      console.log(current);
    };

    return {
      onChange,
      imgUrls: [
        'https://img01.yzcdn.cn/upload_files/2021/07/15/FikfPBWchRpMqQ-pCaqKYuzIYF8z.png?imageMogr2/thumbnail/2130x/format/jpg/interlace/1',
        'https://img01.yzcdn.cn/upload_files/2021/07/15/lmT6p7-Zidq69_5oWDIHtS-HYzIL.png?imageMogr2/thumbnail/2130x/format/jpg/interlace/1',
        'https://img01.yzcdn.cn/upload_files/2021/07/15/lsjdz-NSI3PExOsfAS1oUutlPRXu.png?imageMogr2/thumbnail/2130x/format/jpg/interlace/1',
        'https://img01.yzcdn.cn/upload_files/2021/07/15/lkjEEeyR8wBtQ6QKlLZgzzjEr5gS.png?imageMogr2/thumbnail/2130x/format/jpg/interlace/1',
      ],
    };
  },
});
<\/script>
`,B=`<cn>
#### \u6E10\u663E
\u5207\u6362\u6548\u679C\u4E3A\u6E10\u663E\u3002
</cn>

<us>
#### Fade in
Slides use fade for transition.
</us>
`;const m={},C=u();r("data-v-132cfa48");const L=t("div",null,[t("h3",null,"1")],-1),A=t("div",null,[t("h3",null,"2")],-1),Q=t("div",null,[t("h3",null,"3")],-1),R=t("div",null,[t("h3",null,"4")],-1);c();const U=C((e,o)=>{const a=n("a-carousel");return d(),s(a,{effect:"fade"},{default:C(()=>[L,A,Q,R]),_:1})});m.render=U;m.__scopeId="data-v-132cfa48";var W=m,T=`<template>
  <a-carousel effect="fade">
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </a-carousel>
</template>

<style scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>
`,Z=`<cn>
#### \u81EA\u52A8\u5207\u6362
\u5B9A\u65F6\u5207\u6362\u4E0B\u4E00\u5F20\u3002
</cn>

<us>
#### Scroll automatically
Timing of scrolling to the next card/picture.
</us>
`;const h={},z=u();r("data-v-60bc2092");const H=t("div",null,[t("h3",null,"1")],-1),N=t("div",null,[t("h3",null,"2")],-1),K=t("div",null,[t("h3",null,"3")],-1),D=t("div",null,[t("h3",null,"4")],-1);c();const O=z((e,o)=>{const a=n("a-carousel");return d(),s(a,{autoplay:""},{default:z(()=>[H,N,K,D]),_:1})});h.render=O;h.__scopeId="data-v-60bc2092";var X=h,V=`<template>
  <a-carousel autoplay>
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </a-carousel>
</template>

<style scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>
`,J=`<cn>
#### \u4F4D\u7F6E
\u4F4D\u7F6E\u6709 4 \u4E2A\u65B9\u5411\u3002
</cn>

<us>
#### Position
There are 4 position options available.
</us>
`,_=g({setup(){return{dotPosition:M("top")}}});const l=u();r("data-v-684afe53");const G=p("Top"),tt=p("Bottom"),nt=p("Left"),et=p("Right"),ot=t("div",null,[t("h3",null,"1")],-1),at=t("div",null,[t("h3",null,"2")],-1),it=t("div",null,[t("h3",null,"3")],-1),dt=t("div",null,[t("h3",null,"4")],-1);c();const st=l((e,o,a,v,b,y)=>{const i=n("a-radio-button"),I=n("a-radio-group"),S=n("a-carousel");return d(),s(P,null,[t(I,{value:e.dotPosition,"onUpdate:value":o[1]||(o[1]=w=>e.dotPosition=w),style:{"margin-bottom":"8px"}},{default:l(()=>[t(i,{value:"top"},{default:l(()=>[G]),_:1}),t(i,{value:"bottom"},{default:l(()=>[tt]),_:1}),t(i,{value:"left"},{default:l(()=>[nt]),_:1}),t(i,{value:"right"},{default:l(()=>[et]),_:1})]),_:1},8,["value"]),t(S,{"dot-position":e.dotPosition},{default:l(()=>[ot,at,it,dt]),_:1},8,["dot-position"])],64)});_.render=st;_.__scopeId="data-v-684afe53";var lt=`<template>
  <a-radio-group v-model:value="dotPosition" style="margin-bottom: 8px">
    <a-radio-button value="top">Top</a-radio-button>
    <a-radio-button value="bottom">Bottom</a-radio-button>
    <a-radio-button value="left">Left</a-radio-button>
    <a-radio-button value="right">Right</a-radio-button>
  </a-radio-group>
  <a-carousel :dot-position="dotPosition">
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </a-carousel>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      dotPosition: ref('top'),
    };
  },
});
<\/script>
<style scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>
`,rt=`<cn>
#### \u9884\u89C8\u5F62\u5F0F
\u81EA\u5B9A\u4E49\u5206\u9875\u5C55\u793A\u3002
</cn>

<us>
#### Custom Paging
Custom paging display
</us>
`;const ct=["https://img01.yzcdn.cn/upload_files/2021/07/15/FikfPBWchRpMqQ-pCaqKYuzIYF8z.png?imageMogr2/thumbnail/2130x/format/jpg/interlace/1","https://img01.yzcdn.cn/upload_files/2021/07/15/lmT6p7-Zidq69_5oWDIHtS-HYzIL.png?imageMogr2/thumbnail/2130x/format/jpg/interlace/1","https://img01.yzcdn.cn/upload_files/2021/07/15/lsjdz-NSI3PExOsfAS1oUutlPRXu.png?imageMogr2/thumbnail/2130x/format/jpg/interlace/1","https://raw.githubusercontent.com/vueComponent/ant-design-vue/master/components/vc-slick/assets/img/react-slick/abstract01.jpg","https://raw.githubusercontent.com/vueComponent/ant-design-vue/master/components/vc-slick/assets/img/react-slick/abstract02.jpg","https://raw.githubusercontent.com/vueComponent/ant-design-vue/master/components/vc-slick/assets/img/react-slick/abstract03.jpg","https://raw.githubusercontent.com/vueComponent/ant-design-vue/master/components/vc-slick/assets/img/react-slick/abstract04.jpg",,"https://img01.yzcdn.cn/upload_files/2021/07/15/lkjEEeyR8wBtQ6QKlLZgzzjEr5gS.png?imageMogr2/thumbnail/2130x/format/jpg/interlace/1","https://img01.yzcdn.cn/upload_files/2021/07/15/lhyIDYdCCsQwpx9x576m4qZsr4A7.png?imageMogr2/thumbnail/2130x/format/jpg/interlace/1","https://img01.yzcdn.cn/upload_files/2021/07/15/Fo7E1JSqweCxNvn1NsyEcUFoYZ0d.png?imageMogr2/thumbnail/2130x/format/jpg/interlace/1","https://img01.yzcdn.cn/upload_files/2021/07/15/FikfPBWchRpMqQ-pCaqKYuzIYF8z.png?imageMogr2/thumbnail/2130x/format/jpg/interlace/1","https://img01.yzcdn.cn/upload_files/2021/07/15/FikfPBWchRpMqQ-pCaqKYuzIYF8z.png?imageMogr2/thumbnail/2130x/format/jpg/interlace/1","https://img01.yzcdn.cn/upload_files/2021/07/15/lmT6p7-Zidq69_5oWDIHtS-HYzIL.png?imageMogr2/thumbnail/2130x/format/jpg/interlace/1"];var j=g({setup(){return{imgUrls:ct}}});function ut(e,o,a,v,b,y){const i=n("a-carousel-img");return d(),s(i,{imgList:e.imgUrls,preivewPageable:""},null,8,["imgList"])}j.render=ut;var pt=`<template>
  <a-carousel-img
    :imgList="imgUrls"
    preivewPageable
  />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
 
const imgUrls = [
  'https://img01.yzcdn.cn/upload_files/2021/07/15/FikfPBWchRpMqQ-pCaqKYuzIYF8z.png?imageMogr2/thumbnail/2130x/format/jpg/interlace/1',
  'https://img01.yzcdn.cn/upload_files/2021/07/15/lmT6p7-Zidq69_5oWDIHtS-HYzIL.png?imageMogr2/thumbnail/2130x/format/jpg/interlace/1',
  'https://img01.yzcdn.cn/upload_files/2021/07/15/lsjdz-NSI3PExOsfAS1oUutlPRXu.png?imageMogr2/thumbnail/2130x/format/jpg/interlace/1',
  'https://raw.githubusercontent.com/vueComponent/ant-design-vue/master/components/vc-slick/assets/img/react-slick/abstract01.jpg',
  'https://raw.githubusercontent.com/vueComponent/ant-design-vue/master/components/vc-slick/assets/img/react-slick/abstract02.jpg',
  'https://raw.githubusercontent.com/vueComponent/ant-design-vue/master/components/vc-slick/assets/img/react-slick/abstract03.jpg',
  'https://raw.githubusercontent.com/vueComponent/ant-design-vue/master/components/vc-slick/assets/img/react-slick/abstract04.jpg',,
  'https://img01.yzcdn.cn/upload_files/2021/07/15/lkjEEeyR8wBtQ6QKlLZgzzjEr5gS.png?imageMogr2/thumbnail/2130x/format/jpg/interlace/1',
  'https://img01.yzcdn.cn/upload_files/2021/07/15/lhyIDYdCCsQwpx9x576m4qZsr4A7.png?imageMogr2/thumbnail/2130x/format/jpg/interlace/1',
  'https://img01.yzcdn.cn/upload_files/2021/07/15/Fo7E1JSqweCxNvn1NsyEcUFoYZ0d.png?imageMogr2/thumbnail/2130x/format/jpg/interlace/1',
  'https://img01.yzcdn.cn/upload_files/2021/07/15/FikfPBWchRpMqQ-pCaqKYuzIYF8z.png?imageMogr2/thumbnail/2130x/format/jpg/interlace/1',
  'https://img01.yzcdn.cn/upload_files/2021/07/15/FikfPBWchRpMqQ-pCaqKYuzIYF8z.png?imageMogr2/thumbnail/2130x/format/jpg/interlace/1',
  'https://img01.yzcdn.cn/upload_files/2021/07/15/lmT6p7-Zidq69_5oWDIHtS-HYzIL.png?imageMogr2/thumbnail/2130x/format/jpg/interlace/1',
];
export default defineComponent({
  setup() {
    return {
      imgUrls,
    };
  },
});
<\/script>
`,gt=`<cn>
#### \u81EA\u5B9A\u4E49\u7BAD\u5934
\u81EA\u5B9A\u4E49\u7BAD\u5934\u5C55\u793A\u3002
</cn>

<us>
#### Custom Arrows
Custom arrows display
</us>
`;const f={},k=u();r("data-v-a395b5ec");const mt=t("div",null,[t("h3",null,"1")],-1),ht=t("div",null,[t("h3",null,"2")],-1),_t=t("div",null,[t("h3",null,"3")],-1),ft=t("div",null,[t("h3",null,"4")],-1);c();const vt=k((e,o)=>{const a=n("a-carousel");return d(),s(a,{autoplay:""},{default:k(()=>[mt,ht,_t,ft]),_:1})});f.render=vt;f.__scopeId="data-v-a395b5ec";var bt=f,yt=`<template>
  <a-carousel autoplay>
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </a-carousel>
</template>

<style scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
</style>
`;const xt={class:"markdown-body"},Ct=F('<h2>\u516C\u5171 API</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>afterChange</td><td>\u5207\u6362\u9762\u677F\u7684\u56DE\u8C03</td><td>function(current)</td><td>\u65E0</td><td></td></tr><tr><td>autoplay</td><td>\u662F\u5426\u81EA\u52A8\u5207\u6362</td><td>boolean</td><td>false</td><td></td></tr><tr><td>beforeChange</td><td>\u5207\u6362\u9762\u677F\u7684\u56DE\u8C03</td><td>function(from, to)</td><td>\u65E0</td><td></td></tr><tr><td>dotPosition</td><td>\u9762\u677F\u6307\u793A\u70B9\u4F4D\u7F6E\uFF0C\u53EF\u9009 <code>top</code> <code>bottom</code> <code>left</code> <code>right</code></td><td>string</td><td>bottom</td><td>1.5.0</td></tr><tr><td>dots</td><td>\u662F\u5426\u663E\u793A\u9762\u677F\u6307\u793A\u70B9</td><td>boolean</td><td>true</td><td></td></tr><tr><td>dotsClass</td><td>\u9762\u677F\u6307\u793A\u70B9\u7C7B\u540D</td><td>string</td><td><code>slick-dots</code></td><td></td></tr><tr><td>easing</td><td>\u52A8\u753B\u6548\u679C</td><td>string</td><td>linear</td><td></td></tr><tr><td>effect</td><td>\u52A8\u753B\u6548\u679C\u51FD\u6570\uFF0C\u53EF\u53D6 scrollx, fade</td><td>string</td><td>scrollx</td><td></td></tr><tr><td>imgList</td><td>\u56FE\u7247\u7684\u5217\u8868</td><td>string[]</td><td>-</td><td>3.38.0</td></tr><tr><td>preivewPageable</td><td>\u662F\u5426\u663E\u793A\u4E0B\u9762\u9884\u89C8\u5C0F\u56FE</td><td>boolean</td><td>-</td><td>3.38.0</td></tr><tr><td>preivewable</td><td>\u662F\u5426\u653E\u5927\u4E3B\u56FE\u9884\u89C8</td><td>boolean</td><td>true</td><td>3.38.0</td></tr></tbody></table><h2>\u65B9\u6CD5</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u63CF\u8FF0</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>goTo(slideNumber, dontAnimate)</td><td>\u5207\u6362\u5230\u6307\u5B9A\u9762\u677F, dontAnimate = true \u65F6\uFF0C\u4E0D\u4F7F\u7528\u52A8\u753B</td><td></td></tr><tr><td>next()</td><td>\u5207\u6362\u5230\u4E0B\u4E00\u9762\u677F</td><td></td></tr><tr><td>prev()</td><td>\u5207\u6362\u5230\u4E0A\u4E00\u9762\u677F</td><td></td></tr></tbody></table><p>\u66F4\u591A\u53C2\u6570\u53EF\u53C2\u8003\uFF1A<a href="https://github.com/vueComponent/ant-design-vue/blob/master/components/vc-slick/src/default-props.js#L3">vc-slick props</a></p>',5),zt={expose:[],setup(e){return(o,a)=>(d(),s("div",xt,[Ct]))}};var jt=zt;const $={cn:`# Carousel \u8D70\u9A6C\u706F\u8F6E\u64AD
        \u65CB\u8F6C\u6728\u9A6C\uFF0C\u4E00\u7EC4\u8F6E\u64AD\u7684\u533A\u57DF\u3002
       ## \u4F55\u65F6\u4F7F\u7528

      - \u5F53\u6709\u4E00\u7EC4\u5E73\u7EA7\u7684\u5185\u5BB9\u3002
      - \u5F53\u5185\u5BB9\u7A7A\u95F4\u4E0D\u8DB3\u65F6\uFF0C\u53EF\u4EE5\u7528\u8D70\u9A6C\u706F\u8F6E\u64AD\u7684\u5F62\u5F0F\u8FDB\u884C\u6536\u7EB3\uFF0C\u8FDB\u884C\u8F6E\u64AD\u5C55\u73B0\u3002
      - \u5E38\u7528\u4E8E\u4E00\u7EC4\u56FE\u7247\u6216\u5361\u7247\u8F6E\u64AD\u3002
       ## \u4EE3\u7801\u6F14\u793A
        `,us:`# Carousel
          A carousel component. Scales with its container.
       ## When To Use

      - When there is a group of content on the same level.
      - When there is insufficient content space, it can be used to save space in the form of a revolving door.
      - Commonly used for a group of pictures/cards.
       ## Examples
        `};var $t={category:"Components",type:"Data Display",zhType:"\u6570\u636E\u5C55\u793A",title:"Carousel",subtitle:"\u8D70\u9A6C\u706F\u8F6E\u64AD",inject:{demoContext:{default:{}}},render(){return t("div",null,[t(n("Md"),{cn:$.cn,us:$.us},null),t(n("demo-sort"),{cols:1},{default:()=>[t(n("demo-container"),{api:Y,code:E},{default:()=>[t(x,null,null)]}),t(n("demo-container"),{api:J,code:lt},{default:()=>[t(_,null,null)]}),t(n("demo-container"),{api:B,code:T},{default:()=>[t(W,null,null)]}),t(n("demo-container"),{api:Z,code:V},{default:()=>[t(X,null,null)]}),t(n("demo-container"),{api:rt,code:pt},{default:()=>[t(j,null,null)]}),t(n("demo-container"),{api:gt,code:yt},{default:()=>[t(bt,null,null)]})]}),t(n("api"),null,{default:()=>[t(jt,null,null)]})])}};export{$t as default};

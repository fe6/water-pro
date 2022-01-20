import{Y as n,bw as l,bx as c,by as e,b as t,d as _,bQ as S,bR as C,bS as $,bO as k}from"./vendor.846be9ce.js";const h={};function A(a,u){const i=n("a-statistic"),r=n("a-col"),p=n("a-row");return l(),c(p,null,{default:e(()=>[t(r,{span:12},{default:e(()=>[t(i,{title:"Active Users",value:112893,style:{"margin-right":"50px"}})]),_:1}),t(r,{span:12},{default:e(()=>[t(i,{title:"Account Balance (CNY)",precision:2,value:112893})]),_:1})]),_:1})}h.render=A;var D=h,F=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u7B80\u5355\u5C55\u793A
</cn>

<us>
#### Basic
Simplest Usage.
</us>
`,U=`<template>
  <a-row>
    <a-col :span="12">
      <a-statistic title="Active Users" :value="112893" style="margin-right: 50px" />
    </a-col>
    <a-col :span="12">
      <a-statistic title="Account Balance (CNY)" :precision="2" :value="112893" />
    </a-col>
  </a-row>
</template>
`,v=_({components:{ArrowUpOutlined:S,ArrowDownOutlined:C}});const O={style:{background:"#ececec",padding:"30px"}};function B(a,u,i,r,p,f){const d=n("arrow-up-outlined"),o=n("a-statistic"),s=n("a-card"),m=n("a-col"),y=n("arrow-down-outlined"),b=n("a-row");return l(),c("div",O,[t(b,{gutter:16},{default:e(()=>[t(m,{span:12},{default:e(()=>[t(s,null,{default:e(()=>[t(o,{title:"Feedback",value:11.28,precision:2,suffix:"%","value-style":{color:"#3f8600"},style:{"margin-right":"50px"}},{prefix:e(()=>[t(d)]),_:1},8,["value"])]),_:1})]),_:1}),t(m,{span:12},{default:e(()=>[t(s,null,{default:e(()=>[t(o,{title:"Idle",value:9.3,precision:2,suffix:"%",class:"demo-class","value-style":{color:"#cf1322"}},{prefix:e(()=>[t(y)]),_:1},8,["value"])]),_:1})]),_:1})]),_:1})])}v.render=B;var H=`<cn>
#### \u5728\u5361\u7247\u4E2D\u4F7F\u7528
\u5728\u5361\u7247\u4E2D\u5C55\u793A\u7EDF\u8BA1\u6570\u503C\u3002
</cn>

<us>
#### In Card
Display statistic data in Card.
</us>
`,I=`<template>
  <div style="background: #ececec; padding: 30px">
    <a-row :gutter="16">
      <a-col :span="12">
        <a-card>
          <a-statistic
            title="Feedback"
            :value="11.28"
            :precision="2"
            suffix="%"
            :value-style="{ color: '#3f8600' }"
            style="margin-right: 50px"
          >
            <template #prefix>
              <arrow-up-outlined />
            </template>
          </a-statistic>
        </a-card>
      </a-col>
      <a-col :span="12">
        <a-card>
          <a-statistic
            title="Idle"
            :value="9.3"
            :precision="2"
            suffix="%"
            class="demo-class"
            :value-style="{ color: '#cf1322' }"
          >
            <template #prefix>
              <arrow-down-outlined />
            </template>
          </a-statistic>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>
<script lang="ts">
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    ArrowUpOutlined,
    ArrowDownOutlined,
  },
});
<\/script>
`,g=_({components:{LikeOutlined:$}});const N=t("span",null,"/ 100",-1);function L(a,u,i,r,p,f){const d=n("like-outlined"),o=n("a-statistic"),s=n("a-col"),m=n("a-row");return l(),c(m,{gutter:16},{default:e(()=>[t(s,{span:12},{default:e(()=>[t(o,{title:"Feedback",value:1128,style:{"margin-right":"50px"}},{suffix:e(()=>[t(d)]),_:1})]),_:1}),t(s,{span:12},{default:e(()=>[t(o,{title:"Unmerged",value:93,class:"demo-class"},{suffix:e(()=>[N]),_:1})]),_:1})]),_:1})}g.render=L;var j=`<cn>
#### \u5355\u4F4D
\u901A\u8FC7\u524D\u7F00\u548C\u540E\u7F00\u6DFB\u52A0\u5355\u4F4D\u3002
</cn>

<us>
#### Unit
Add unit through \`prefix\` and \`suffix\`.
</us>
`,M=`<template>
  <a-row :gutter="16">
    <a-col :span="12">
      <a-statistic title="Feedback" :value="1128" style="margin-right: 50px">
        <template #suffix>
          <like-outlined />
        </template>
      </a-statistic>
    </a-col>
    <a-col :span="12">
      <a-statistic title="Unmerged" :value="93" class="demo-class">
        <template #suffix>
          <span>/ 100</span>
        </template>
      </a-statistic>
    </a-col>
  </a-row>
</template>
<script lang="ts">
import { LikeOutlined } from '@ant-design/icons-vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    LikeOutlined,
  },
});
<\/script>
`,w=_({setup(){const a=()=>{console.log("finished!")};return{deadline:Date.now()+1e3*60*60*24*2+1e3*30,onFinish:a}}});function V(a,u,i,r,p,f){const d=n("a-statistic-countdown"),o=n("a-col"),s=n("a-row");return l(),c(s,{gutter:16},{default:e(()=>[t(o,{span:12},{default:e(()=>[t(d,{title:"Countdown",value:a.deadline,style:{"margin-right":"50px"},onFinish:a.onFinish},null,8,["value","onFinish"])]),_:1}),t(o,{span:12},{default:e(()=>[t(d,{title:"Million Seconds",value:a.deadline,format:"HH:mm:ss:SSS",style:{"margin-right":"50px"}},null,8,["value"])]),_:1}),t(o,{span:24,style:{"margin-top":"32px"}},{default:e(()=>[t(d,{title:"Day Level",value:a.deadline,format:"D \u5929 H \u65F6 m \u5206 s \u79D2"},null,8,["value"])]),_:1})]),_:1})}w.render=V;var Y=`<cn>
#### \u5012\u8BA1\u65F6
\u5012\u8BA1\u65F6\u7EC4\u4EF6\u3002
</cn>

<us>
#### Countdown
Countdown component.
</us>

`,z=`<template>
  <a-row :gutter="16">
    <a-col :span="12">
      <a-statistic-countdown
        title="Countdown"
        :value="deadline"
        style="margin-right: 50px"
        @finish="onFinish"
      />
    </a-col>
    <a-col :span="12">
      <a-statistic-countdown
        title="Million Seconds"
        :value="deadline"
        format="HH:mm:ss:SSS"
        style="margin-right: 50px"
      />
    </a-col>
    <a-col :span="24" style="margin-top: 32px">
      <a-statistic-countdown title="Day Level" :value="deadline" format="D \u5929 H \u65F6 m \u5206 s \u79D2" />
    </a-col>
  </a-row>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const onFinish = () => {
      console.log('finished!');
    };
    return {
      deadline: Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30,
      onFinish,
    };
  },
});
<\/script>
`;const E={class:"markdown-body"},P=k('<h2>API</h2><h3>Statistic</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>decimalSeparator</td><td>\u8BBE\u7F6E\u5C0F\u6570\u70B9</td><td>string</td><td>.</td></tr><tr><td>formatter</td><td>\u81EA\u5B9A\u4E49\u6570\u503C\u5C55\u793A</td><td>v-slot | ({h, value}) =&gt; VNode</td><td>-</td></tr><tr><td>groupSeparator</td><td>\u8BBE\u7F6E\u5343\u5206\u4F4D\u6807\u8BC6\u7B26</td><td>string</td><td>,</td></tr><tr><td>precision</td><td>\u6570\u503C\u7CBE\u5EA6</td><td>number</td><td>-</td></tr><tr><td>prefix</td><td>\u8BBE\u7F6E\u6570\u503C\u7684\u524D\u7F00</td><td>string | v-slot</td><td>-</td></tr><tr><td>suffix</td><td>\u8BBE\u7F6E\u6570\u503C\u7684\u540E\u7F00</td><td>string | v-slot</td><td>-</td></tr><tr><td>title</td><td>\u6570\u503C\u7684\u6807\u9898</td><td>string | v-slot</td><td>-</td></tr><tr><td>value</td><td>\u6570\u503C\u5185\u5BB9</td><td>string | number</td><td>-</td></tr><tr><td>valueStyle</td><td>\u8BBE\u7F6E\u6570\u503C\u7684\u6837\u5F0F</td><td>style</td><td>-</td></tr></tbody></table><h3>Statistic.Countdown</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>format</td><td>\u683C\u5F0F\u5316\u5012\u8BA1\u65F6\u5C55\u793A\uFF0C\u53C2\u8003 <a href="http://momentjs.com/">moment</a></td><td>string</td><td>\u2018HH:mm:ss\u2019</td></tr><tr><td>prefix</td><td>\u8BBE\u7F6E\u6570\u503C\u7684\u524D\u7F00</td><td>string | v-slot</td><td>-</td></tr><tr><td>suffix</td><td>\u8BBE\u7F6E\u6570\u503C\u7684\u540E\u7F00</td><td>string | v-slot</td><td>-</td></tr><tr><td>title</td><td>\u6570\u503C\u7684\u6807\u9898</td><td>string | v-slot</td><td>-</td></tr><tr><td>value</td><td>\u6570\u503C\u5185\u5BB9</td><td>number | moment</td><td>-</td></tr><tr><td>valueStyle</td><td>\u8BBE\u7F6E\u6570\u503C\u7684\u6837\u5F0F</td><td>style</td><td>-</td></tr></tbody></table><h4>Statistic.Countdown \u4E8B\u4EF6</h4><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>finish</td><td>\u5012\u8BA1\u65F6\u5B8C\u6210\u65F6\u89E6\u53D1</td><td>() =&gt; void</td></tr></tbody></table>',7),Q={expose:[],setup(a){return(u,i)=>(l(),c("div",E,[P]))}};var R=Q;const x={cn:`# Statistic \u7EDF\u8BA1\u6570\u503C
          \u5C55\u793A\u7EDF\u8BA1\u6570\u503C\u3002
          ## \u4F55\u65F6\u4F7F\u7528
            - \u5F53\u9700\u8981\u7A81\u51FA\u67D0\u4E2A\u6216\u67D0\u7EC4\u6570\u5B57\u65F6
            - \u5F53\u9700\u8981\u5C55\u793A\u5E26\u63CF\u8FF0\u7684\u7EDF\u8BA1\u7C7B\u6570\u636E\u65F6\u4F7F\u7528

          ## \u4EE3\u7801\u6F14\u793A`,us:`# Statistic
          Statistics can be used to represent people or objects. It supports images, 'Icon's, or letters.
          ## Examples
          `};var q={category:"Components",subtitle:"\u7EDF\u8BA1\u6570\u503C",type:"Data Display",zhType:"\u6570\u636E\u5C55\u793A",title:"Statistic",render(){return t("div",null,[t(n("Md"),{cn:x.cn,us:x.us},null),t(n("demo-sort"),null,{default:()=>[t(n("demo-container"),{api:F,code:U},{default:()=>[t(D,null,null)]}),t(n("demo-container"),{api:j,code:M},{default:()=>[t(g,null,null)]}),t(n("demo-container"),{api:H,code:I},{default:()=>[t(v,null,null)]}),t(n("demo-container"),{api:Y,code:z},{default:()=>[t(w,null,null)]})]}),t(n("api"),null,{default:()=>[t(R,null,null)]})])}};export{q as default};

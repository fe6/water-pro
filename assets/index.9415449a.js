import{d as b,k as m,Y as a,bw as f,bx as g,by as s,b as t,bz as Y,j as v,D as _,w as M,bM as I,bO as A}from"./vendor.846be9ce.js";var D=b({setup(){return{value1:m(),value2:m(),value3:m([]),value4:m(),value5:m()}}});function W(e,n,r,p,u,c){const l=a("a-date-picker"),o=a("a-month-picker"),i=a("a-range-picker"),h=a("a-week-picker"),d=a("a-year-picker"),C=a("a-space");return f(),g(C,{direction:"vertical"},{default:s(()=>[t(l,{value:e.value1,"onUpdate:value":n[1]||(n[1]=k=>e.value1=k)},null,8,["value"]),t(o,{value:e.value2,"onUpdate:value":n[2]||(n[2]=k=>e.value2=k)},null,8,["value"]),t(i,{value:e.value3,"onUpdate:value":n[3]||(n[3]=k=>e.value3=k)},null,8,["value"]),t(h,{value:e.value4,"onUpdate:value":n[4]||(n[4]=k=>e.value4=k)},null,8,["value"]),t(d,{value:e.value5,"onUpdate:value":n[5]||(n[5]=k=>e.value5=k)},null,8,["value"])]),_:1})}D.render=W;var N=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u6700\u7B80\u5355\u7684\u7528\u6CD5\uFF0C\u5728\u6D6E\u5C42\u4E2D\u53EF\u4EE5\u9009\u62E9\u6216\u8005\u8F93\u5165\u65E5\u671F\u3002
</cn>

<us>
#### Basic
Basic use case. Users can select or input a date in panel.
</us>
`,L=`<template>
  <a-space direction="vertical">
    <a-date-picker v-model:value="value1" />
    <a-month-picker v-model:value="value2" />
    <a-range-picker v-model:value="value3" />
    <a-week-picker v-model:value="value4" />
    <a-year-picker v-model:value="value5" />
  </a-space>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Moment } from 'moment';
export default defineComponent({
  setup() {
    return {
      value1: ref<Moment>(),
      value2: ref<Moment>(),
      value3: ref<Moment[]>([]),
      value4: ref<Moment>(),
      value5: ref<Moment>(),
    };
  },
});
<\/script>
`,S=b({setup(){const e=n=>{const r={};return n.date()===1&&(r.border="1px solid #1890ff",r.borderRadius="50%"),r};return{value1:m(),value2:m([]),value3:m(),getCurrentStyle:e}}});function q(e,n,r,p,u,c){const l=a("a-date-picker"),o=a("a-range-picker"),i=a("a-week-picker"),h=a("a-space");return f(),g(h,{direction:"vertical"},{default:s(()=>[t(l,{value:e.value1,"onUpdate:value":n[1]||(n[1]=d=>e.value1=d)},{dateRender:s(({current:d,today:C})=>[t("div",{class:"ant-calendar-date",style:e.getCurrentStyle(d,C)},Y(d.date()),5)]),_:1},8,["value"]),t(o,{value:e.value2,"onUpdate:value":n[2]||(n[2]=d=>e.value2=d)},{dateRender:s(({current:d})=>[t("div",{class:"ant-calendar-date",style:e.getCurrentStyle(d)},Y(d.date()),5)]),_:1},8,["value"]),t(i,{value:e.value3,"onUpdate:value":n[3]||(n[3]=d=>e.value3=d)},{dateRender:s(({current:d})=>[t("div",{class:"ant-calendar-date",style:e.getCurrentStyle(d)},Y(d.date()),5)]),_:1},8,["value"])]),_:1})}S.render=q;var x=`<cn>
#### \u5B9A\u5236\u65E5\u671F\u5355\u5143\u683C
\u4F7F\u7528 \`dateRender\` \u53EF\u4EE5\u81EA\u5B9A\u4E49\u65E5\u671F\u5355\u5143\u683C\u7684\u5185\u5BB9\u548C\u6837\u5F0F\u3002
</cn>

<us>
#### Customized Date Rendering
We can customize the rendering of date cells in the calendar by providing a \`dateRender\` function to \`DatePicker\`.
</us>
`,G=`<template>
  <a-space direction="vertical">
    <a-date-picker v-model:value="value1">
      <template #dateRender="{ current, today }">
        <div class="ant-calendar-date" :style="getCurrentStyle(current, today)">
          {{ current.date() }}
        </div>
      </template>
    </a-date-picker>
    <a-range-picker v-model:value="value2">
      <template #dateRender="{ current }">
        <div class="ant-calendar-date" :style="getCurrentStyle(current)">
          {{ current.date() }}
        </div>
      </template>
    </a-range-picker>
    <a-week-picker v-model:value="value3">
      <template #dateRender="{ current }">
        <div class="ant-calendar-date" :style="getCurrentStyle(current)">
          {{ current.date() }}
        </div>
      </template>
    </a-week-picker>
  </a-space>
</template>
<script lang="ts">
import { Moment } from 'moment';
import { CSSProperties, defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const getCurrentStyle = (current: Moment) => {
      const style: CSSProperties = {};

      if (current.date() === 1) {
        style.border = '1px solid #1890ff';
        style.borderRadius = '50%';
      }

      return style;
    };
    return {
      value1: ref<Moment>(),
      value2: ref<Moment[]>([]),
      value3: ref<Moment>(),
      getCurrentStyle,
    };
  },
});
<\/script>
`,y=b({setup(){const e=(u,c)=>{const l=[];for(let o=u;o<c;o++)l.push(o);return l},n=u=>u&&u<v().endOf("day"),r=()=>({disabledHours:()=>e(0,24).splice(4,20),disabledMinutes:()=>e(30,60),disabledSeconds:()=>[55,56]}),p=(u,c)=>c==="start"?{disabledHours:()=>e(0,60).splice(4,20),disabledMinutes:()=>e(30,60),disabledSeconds:()=>[55,56]}:{disabledHours:()=>e(0,60).splice(20,4),disabledMinutes:()=>e(0,31),disabledSeconds:()=>[55,56]};return{moment:v,value1:m(),value2:m(),value3:m([]),disabledDate:n,disabledDateTime:r,disabledRangeTime:p}}});function J(e,n,r,p,u,c){const l=a("a-date-picker"),o=a("a-month-picker"),i=a("a-range-picker"),h=a("a-space");return f(),g(h,{direction:"vertical"},{default:s(()=>[t(l,{value:e.value1,"onUpdate:value":n[1]||(n[1]=d=>e.value1=d),format:"YYYY-MM-DD HH:mm:ss","disabled-date":e.disabledDate,"disabled-time":e.disabledDateTime,"show-time":{defaultValue:e.moment("00:00:00","HH:mm:ss")}},null,8,["value","disabled-date","disabled-time","show-time"]),t(o,{value:e.value2,"onUpdate:value":n[2]||(n[2]=d=>e.value2=d),"disabled-date":e.disabledDate,placeholder:"Select month"},null,8,["value","disabled-date"]),t(i,{style:{width:"400px"},value:e.value3,"onUpdate:value":n[3]||(n[3]=d=>e.value3=d),"disabled-date":e.disabledDate,"disabled-time":e.disabledRangeTime,"show-time":{hideDisabledOptions:!0,defaultValue:[e.moment("00:00:00","HH:mm:ss"),e.moment("11:59:59","HH:mm:ss")]},format:"YYYY-MM-DD HH:mm:ss"},null,8,["value","disabled-date","disabled-time","show-time"])]),_:1})}y.render=J;var K="<cn>\n#### \u4E0D\u53EF\u9009\u62E9\u65E5\u671F\u548C\u65F6\u95F4\n\u53EF\u7528 `disabledDate` \u548C `disabledTime` \u5206\u522B\u7981\u6B62\u9009\u62E9\u90E8\u5206\u65E5\u671F\u548C\u65F6\u95F4\uFF0C\u5176\u4E2D `disabledTime` \u9700\u8981\u548C `showTime` \u4E00\u8D77\u4F7F\u7528\u3002\n</cn>\n\n<us>\n#### Disabled Date & Time\nDisabled part of dates and time by `disabledDate` and `disabledTime` respectively, and `disabledTime` only works with `showTime`.\n</us>\n",Q=`<template>
  <a-space direction="vertical">
    <a-date-picker
      v-model:value="value1"
      format="YYYY-MM-DD HH:mm:ss"
      :disabled-date="disabledDate"
      :disabled-time="disabledDateTime"
      :show-time="{ defaultValue: moment('00:00:00', 'HH:mm:ss') }"
    />
    <a-month-picker
      v-model:value="value2"
      :disabled-date="disabledDate"
      placeholder="Select month"
    />
    <a-range-picker
      style="width: 400px"
      v-model:value="value3"
      :disabled-date="disabledDate"
      :disabled-time="disabledRangeTime"
      :show-time="{
        hideDisabledOptions: true,
        defaultValue: [moment('00:00:00', 'HH:mm:ss'), moment('11:59:59', 'HH:mm:ss')],
      }"
      format="YYYY-MM-DD HH:mm:ss"
    />
  </a-space>
</template>
<script lang="ts">
import moment, { Moment } from 'moment';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const range = (start: number, end: number) => {
      const result = [];

      for (let i = start; i < end; i++) {
        result.push(i);
      }

      return result;
    };

    const disabledDate = (current: Moment) => {
      // Can not select days before today and today
      return current && current < moment().endOf('day');
    };

    const disabledDateTime = () => {
      return {
        disabledHours: () => range(0, 24).splice(4, 20),
        disabledMinutes: () => range(30, 60),
        disabledSeconds: () => [55, 56],
      };
    };

    const disabledRangeTime = (_: Moment[], type: 'start' | 'end') => {
      if (type === 'start') {
        return {
          disabledHours: () => range(0, 60).splice(4, 20),
          disabledMinutes: () => range(30, 60),
          disabledSeconds: () => [55, 56],
        };
      }
      return {
        disabledHours: () => range(0, 60).splice(20, 4),
        disabledMinutes: () => range(0, 31),
        disabledSeconds: () => [55, 56],
      };
    };

    return {
      moment,
      value1: ref<Moment>(),
      value2: ref<Moment>(),
      value3: ref<Moment[]>([]),
      disabledDate,
      disabledDateTime,
      disabledRangeTime,
    };
  },
});
<\/script>
`,w=b({setup(){const e="YYYY-MM-DD";return{value1:m(v("2015-06-06",e)),value2:m(v("2015-06","YYYY-MM")),value3:m([v("2015-06-06",e),v("2015-06-06",e)])}}});function X(e,n,r,p,u,c){const l=a("a-date-picker"),o=a("a-month-picker"),i=a("a-range-picker"),h=a("a-space");return f(),g(h,{direction:"vertical"},{default:s(()=>[t(l,{value:e.value1,"onUpdate:value":n[1]||(n[1]=d=>e.value1=d)},null,8,["value"]),t(o,{value:e.value2,"onUpdate:value":n[2]||(n[2]=d=>e.value2=d),disabled:""},null,8,["value"]),t(i,{value:e.value3,"onUpdate:value":n[3]||(n[3]=d=>e.value3=d),disabled:""},null,8,["value"])]),_:1})}w.render=X;var Z=`<cn>
#### \u7981\u7528
\u9009\u62E9\u6846\u7684\u4E0D\u53EF\u7528\u72B6\u6001\u3002
</cn>

<us>
#### Disabled
A disabled state of the \`DatePicker\`.
</us>
`,ee=`<template>
  <a-space direction="vertical">
    <a-date-picker v-model:value="value1" />
    <a-month-picker v-model:value="value2" disabled />
    <a-range-picker v-model:value="value3" disabled />
  </a-space>
</template>
<script lang="ts">
import moment from 'moment';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const dateFormat = 'YYYY-MM-DD';
    return {
      value1: ref<moment.Moment>(moment('2015-06-06', dateFormat)),
      value2: ref<moment.Moment>(moment('2015-06', 'YYYY-MM')),
      value3: ref<moment.Moment[]>([
        moment('2015-06-06', dateFormat),
        moment('2015-06-06', dateFormat),
      ]),
    };
  },
});
<\/script>
`;const $={},te=_("extra footer"),ne=_("extra footer"),ae=_("extra footer"),oe=_("extra footer"),de=_("extra footer");function re(e,n){const r=a("a-date-picker"),p=a("a-range-picker"),u=a("a-month-picker"),c=a("a-space");return f(),g(c,{direction:"vertical"},{default:s(()=>[t(r,null,{renderExtraFooter:s(()=>[te]),_:1}),t(r,{"show-time":""},{renderExtraFooter:s(()=>[ne]),_:1}),t(p,null,{renderExtraFooter:s(()=>[ae]),_:1}),t(p,{"show-time":""},{renderExtraFooter:s(()=>[oe]),_:1}),t(u,{placeholder:"Select month"},{renderExtraFooter:s(()=>[de]),_:1})]),_:1})}$.render=re;var le=$,ie=`<cn>
#### \u989D\u5916\u7684\u9875\u811A
\u5728\u6D6E\u5C42\u4E2D\u52A0\u5165\u989D\u5916\u7684\u9875\u811A\uFF0C\u4EE5\u6EE1\u8DB3\u67D0\u4E9B\u5B9A\u5236\u4FE1\u606F\u7684\u9700\u6C42\u3002
</cn>

<us>
#### Extra Footer
Render extra footer in panel for customized requirements.
</us>
`,se=`<template>
  <a-space direction="vertical">
    <a-date-picker>
      <template #renderExtraFooter>extra footer</template>
    </a-date-picker>
    <a-date-picker show-time>
      <template #renderExtraFooter>extra footer</template>
    </a-date-picker>
    <a-range-picker>
      <template #renderExtraFooter>extra footer</template>
    </a-range-picker>
    <a-range-picker show-time>
      <template #renderExtraFooter>extra footer</template>
    </a-range-picker>
    <a-month-picker placeholder="Select month">
      <template #renderExtraFooter>extra footer</template>
    </a-month-picker>
  </a-space>
</template>
`,O=b({setup(){const e="YYYY/MM/DD",n="YYYY/MM",r=["DD/MM/YYYY","DD/MM/YY"];return{value1:m(v("2015/01/01",e)),value2:m(v("01/01/2015",r[0])),value3:m(v("2015/01",n)),value4:m([v("2015/01/01",e),v("2015/01/01",e)]),dateFormat:e,monthFormat:n,dateFormatList:r,moment:v}}});function me(e,n,r,p,u,c){const l=a("a-date-picker"),o=a("a-month-picker"),i=a("a-range-picker"),h=a("a-space");return f(),g(h,{direction:"vertical"},{default:s(()=>[t(l,{value:e.value1,"onUpdate:value":n[1]||(n[1]=d=>e.value1=d),format:e.dateFormat},null,8,["value","format"]),t(l,{value:e.value2,"onUpdate:value":n[2]||(n[2]=d=>e.value2=d),format:e.dateFormatList},null,8,["value","format"]),t(o,{value:e.value3,"onUpdate:value":n[3]||(n[3]=d=>e.value3=d),format:e.monthFormat},null,8,["value","format"]),t(i,{value:e.value4,"onUpdate:value":n[4]||(n[4]=d=>e.value4=d),format:e.dateFormat},null,8,["value","format"])]),_:1})}O.render=me;var ue=`<cn>
#### \u65E5\u671F\u683C\u5F0F
\u4F7F\u7528 \`format\` \u5C5E\u6027\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u65E5\u671F\u663E\u793A\u683C\u5F0F\u3002
</cn>

<us>
#### Date Format
We can set the date format by \`format\`.
</us>
`,pe=`<template>
  <a-space direction="vertical">
    <a-date-picker v-model:value="value1" :format="dateFormat" />
    <a-date-picker v-model:value="value2" :format="dateFormatList" />
    <a-month-picker v-model:value="value3" :format="monthFormat" />
    <a-range-picker v-model:value="value4" :format="dateFormat" />
  </a-space>
</template>
<script lang="ts">
import moment, { Moment } from 'moment';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const dateFormat = 'YYYY/MM/DD';
    const monthFormat = 'YYYY/MM';
    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
    return {
      value1: ref<Moment>(moment('2015/01/01', dateFormat)),
      value2: ref<Moment>(moment('01/01/2015', dateFormatList[0])),
      value3: ref<Moment>(moment('2015/01', monthFormat)),
      value4: ref<Moment[]>([moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]),
      dateFormat,
      monthFormat,
      dateFormatList,
      moment,
    };
  },
});
<\/script>
`,P=b({setup(){const e=m("time"),n=m(["month","month"]),r=m([]);return{mode1:e,mode2:n,value:r,handleOpenChange1:o=>{o&&(e.value="time")},handleChange:o=>{r.value=o},handlePanelChange1:(o,i)=>{e.value=i},handlePanelChange2:(o,i)=>{r.value=o,n.value=[i[0]==="date"?"month":i[0],i[1]==="date"?"month":i[1]]}}}});function ce(e,n,r,p,u,c){const l=a("a-date-picker"),o=a("a-range-picker"),i=a("a-space");return f(),g(i,{direction:"vertical"},{default:s(()=>[t(l,{mode:e.mode1,"show-time":"",onOpenChange:e.handleOpenChange1,onPanelChange:e.handlePanelChange1},null,8,["mode","onOpenChange","onPanelChange"]),t(o,{placeholder:["Start month","End month"],format:"YYYY-MM",value:e.value,mode:e.mode2,onPanelChange:e.handlePanelChange2,onChange:e.handleChange},null,8,["value","mode","onPanelChange","onChange"])]),_:1})}P.render=ce;var he=`<cn>
#### \u53D7\u63A7\u9762\u677F
\u901A\u8FC7\u7EC4\u5408 \`mode\` \u4E0E \`onPanelChange\` \u63A7\u5236\u8981\u5C55\u793A\u7684\u9762\u677F\u3002
</cn>

<us>
#### Controlled Panels
Determing which panel to show with \`mode\` and \`onPanelChange\`.
</us>
`,ve=`<template>
  <a-space direction="vertical">
    <a-date-picker
      :mode="mode1"
      show-time
      @openChange="handleOpenChange1"
      @panelChange="handlePanelChange1"
    />
    <a-range-picker
      :placeholder="['Start month', 'End month']"
      format="YYYY-MM"
      :value="value"
      :mode="mode2"
      @panelChange="handlePanelChange2"
      @change="handleChange"
    />
  </a-space>
</template>
<script lang="ts">
import { Moment } from 'moment';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const mode1 = ref<string>('time');
    const mode2 = ref<string[]>(['month', 'month']);
    const value = ref<Moment[]>([]);

    const handleOpenChange1 = (open: boolean) => {
      if (open) {
        mode1.value = 'time';
      }
    };

    const handleChange = (val: Moment[]) => {
      value.value = val;
    };

    const handlePanelChange1 = (val: Moment[], mode: string) => {
      mode1.value = mode;
    };

    const handlePanelChange2 = (val: Moment[], mode: string[]) => {
      value.value = val;
      mode2.value = [
        mode[0] === 'date' ? 'month' : mode[0],
        mode[1] === 'date' ? 'month' : mode[1],
      ];
    };

    return {
      mode1,
      mode2,
      value,
      handleOpenChange1,
      handleChange,
      handlePanelChange1,
      handlePanelChange2,
    };
  },
});
<\/script>
`,T=b({setup(){return{value1:m([]),value2:m([]),ranges:{Today:[v(),v()],"This Month":[v(),v().endOf("month")]}}}});function fe(e,n,r,p,u,c){const l=a("a-range-picker"),o=a("a-space");return f(),g(o,{direction:"vertical"},{default:s(()=>[t(l,{value:e.value1,"onUpdate:value":n[1]||(n[1]=i=>e.value1=i),ranges:e.ranges},null,8,["value","ranges"]),t(l,{style:{width:"400px"},value:e.value2,"onUpdate:value":n[2]||(n[2]=i=>e.value2=i),ranges:e.ranges,"show-time":"",format:"YYYY/MM/DD HH:mm:ss"},null,8,["value","ranges"])]),_:1})}T.render=fe;var ge=`<cn>
#### \u9884\u8BBE\u8303\u56F4
\u53EF\u4EE5\u9884\u8BBE\u5E38\u7528\u7684\u65E5\u671F\u8303\u56F4\u4EE5\u63D0\u9AD8\u7528\u6237\u4F53\u9A8C\u3002
</cn>

<us>
#### Preset Ranges
We can set presetted ranges to RangePicker to improve user experience.
</us>
`,ke=`<template>
  <a-space direction="vertical">
    <a-range-picker v-model:value="value1" :ranges="ranges" />
    <a-range-picker
      style="width: 400px"
      v-model:value="value2"
      :ranges="ranges"
      show-time
      format="YYYY/MM/DD HH:mm:ss"
    />
  </a-space>
</template>
<script lang="ts">
import moment, { Moment } from 'moment';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      value1: ref<Moment[]>([]),
      value2: ref<Moment[]>([]),
      ranges: { Today: [moment(), moment()], 'This Month': [moment(), moment().endOf('month')] },
    };
  },
});
<\/script>
`,E=b({setup(){return{size:m("default"),moment:v}}});const be=_("Large"),_e=_("Default"),Ce=_("Small");function Ye(e,n,r,p,u,c){const l=a("a-radio-button"),o=a("a-radio-group"),i=a("a-date-picker"),h=a("a-month-picker"),d=a("a-range-picker"),C=a("a-week-picker"),k=a("a-year-picker"),B=a("a-space");return f(),g(B,{direction:"vertical"},{default:s(()=>[t(o,{value:e.size,"onUpdate:value":n[1]||(n[1]=U=>e.size=U)},{default:s(()=>[t(l,{value:"large"},{default:s(()=>[be]),_:1}),t(l,{value:"default"},{default:s(()=>[_e]),_:1}),t(l,{value:"small"},{default:s(()=>[Ce]),_:1})]),_:1},8,["value"]),t(i,{size:e.size},null,8,["size"]),t(h,{size:e.size,placeholder:"Select Month"},null,8,["size"]),t(d,{size:e.size},null,8,["size"]),t(C,{size:e.size,placeholder:"Select Week"},null,8,["size"]),t(k,{size:e.size,placeholder:"Select year"},null,8,["size"])]),_:1})}E.render=Ye;var Me=`<cn>
#### \u4E09\u79CD\u5927\u5C0F
\u4E09\u79CD\u5927\u5C0F\u7684\u8F93\u5165\u6846\uFF0C\u82E5\u4E0D\u8BBE\u7F6E\uFF0C\u5219\u4E3A \`default\`\u3002
</cn>

<us>
#### Three Sizes
The input box comes in three sizes. \`default\` will be used if \`size\` is omitted.
</us>
`,De=`<template>
  <a-space direction="vertical">
    <a-radio-group v-model:value="size">
      <a-radio-button value="large">Large</a-radio-button>
      <a-radio-button value="default">Default</a-radio-button>
      <a-radio-button value="small">Small</a-radio-button>
    </a-radio-group>
    <a-date-picker :size="size" />
    <a-month-picker :size="size" placeholder="Select Month" />
    <a-range-picker :size="size" />
    <a-week-picker :size="size" placeholder="Select Week" />
    <a-year-picker :size="size" placeholder="Select year" />
  </a-space>
</template>
<script lang="ts">
import moment from 'moment';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    return {
      size: ref<string>('default'),
      moment,
    };
  },
});
<\/script>
`,H=b({setup(){const e=m(),n=m(),r=m(!1),p=o=>!o||!n.value?!1:o.valueOf()>n.value.valueOf(),u=o=>!o||!e.value?!1:e.value.valueOf()>=o.valueOf(),c=o=>{o||(r.value=!0)},l=o=>{r.value=o};return M(e,()=>{console.log("startValue",e.value)}),M(n,()=>{console.log("endValue",n.value)}),{startValue:e,endValue:n,endOpen:r,disabledStartDate:p,disabledEndDate:u,handleStartOpenChange:c,handleEndOpenChange:l}}});function Se(e,n,r,p,u,c){const l=a("a-date-picker"),o=a("a-space");return f(),g(o,{direction:"vertical"},{default:s(()=>[t(l,{value:e.startValue,"onUpdate:value":n[1]||(n[1]=i=>e.startValue=i),"disabled-date":e.disabledStartDate,"show-time":"",format:"YYYY-MM-DD HH:mm:ss",placeholder:"Start",onOpenChange:e.handleStartOpenChange},null,8,["value","disabled-date","onOpenChange"]),t(l,{value:e.endValue,"onUpdate:value":n[2]||(n[2]=i=>e.endValue=i),"disabled-date":e.disabledEndDate,"show-time":"",format:"YYYY-MM-DD HH:mm:ss",placeholder:"End",open:e.endOpen,onOpenChange:e.handleEndOpenChange},null,8,["value","disabled-date","open","onOpenChange"])]),_:1})}H.render=Se;var ye="<cn>\n#### \u81EA\u5B9A\u4E49\u65E5\u671F\u8303\u56F4\u9009\u62E9\n\u5F53 `RangePicker` \u65E0\u6CD5\u6EE1\u8DB3\u4E1A\u52A1\u9700\u6C42\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E24\u4E2A `DatePicker` \u5B9E\u73B0\u7C7B\u4F3C\u7684\u529F\u80FD\u3002\n> - \u901A\u8FC7\u8BBE\u7F6E `disabledDate` \u65B9\u6CD5\uFF0C\u6765\u7EA6\u675F\u5F00\u59CB\u548C\u7ED3\u675F\u65E5\u671F\u3002\n> - \u901A\u8FC7 `open` `openChange` \u6765\u4F18\u5316\u4EA4\u4E92\u3002\n</cn>\n\n<us>\n#### Customized Range Picker\nWhen `RangePicker` does not satisfied your requirements, try to implement similar functionality with two `DatePicker`.\n> - Use the `disabledDate` property to limit the start and end dates.\n> - Improve user experience with `open` and `openChange`.\n</us>\n",we=`<template>
  <a-space direction="vertical">
    <a-date-picker
      v-model:value="startValue"
      :disabled-date="disabledStartDate"
      show-time
      format="YYYY-MM-DD HH:mm:ss"
      placeholder="Start"
      @openChange="handleStartOpenChange"
    />
    <a-date-picker
      v-model:value="endValue"
      :disabled-date="disabledEndDate"
      show-time
      format="YYYY-MM-DD HH:mm:ss"
      placeholder="End"
      :open="endOpen"
      @openChange="handleEndOpenChange"
    />
  </a-space>
</template>
<script lang="ts">
import { Moment } from 'moment';
import { defineComponent, ref, watch } from 'vue';
export default defineComponent({
  setup() {
    const startValue = ref<Moment | undefined>();
    const endValue = ref<Moment>();
    const endOpen = ref<boolean>(false);

    const disabledStartDate = (startValue: Moment) => {
      if (!startValue || !endValue.value) {
        return false;
      }

      return startValue.valueOf() > endValue.value.valueOf();
    };

    const disabledEndDate = (endValue: Moment) => {
      if (!endValue || !startValue.value) {
        return false;
      }

      return startValue.value.valueOf() >= endValue.valueOf();
    };

    const handleStartOpenChange = (open: boolean) => {
      if (!open) {
        endOpen.value = true;
      }
    };

    const handleEndOpenChange = (open: boolean) => {
      endOpen.value = open;
    };

    watch(startValue, () => {
      console.log('startValue', startValue.value);
    });

    watch(endValue, () => {
      console.log('endValue', endValue.value);
    });

    return {
      startValue,
      endValue,
      endOpen,
      disabledStartDate,
      disabledEndDate,
      handleStartOpenChange,
      handleEndOpenChange,
    };
  },
});
<\/script>
`,V=b({setup(){return{onChange:(r,p)=>{console.log("Selected Time: ",r),console.log("Formatted Selected Time: ",p)},onOk:r=>{console.log("onOk: ",r)}}}});function $e(e,n,r,p,u,c){const l=a("a-date-picker"),o=a("a-range-picker"),i=a("a-space");return f(),g(i,{direction:"vertical"},{default:s(()=>[t(l,{"show-time":"",placeholder:"Select Time",onChange:e.onChange,onOk:e.onOk},null,8,["onChange","onOk"]),t(o,{"show-time":{format:"HH:mm"},format:"YYYY-MM-DD HH:mm",placeholder:["Start Time","End Time"],onChange:e.onChange,onOk:e.onOk},null,8,["onChange","onOk"])]),_:1})}V.render=$e;var Oe=`<cn>
#### \u65E5\u671F\u65F6\u95F4\u9009\u62E9
\u589E\u52A0\u9009\u62E9\u65F6\u95F4\u529F\u80FD\uFF0C\u5F53 \`showTime\` \u4E3A\u4E00\u4E2A\u5BF9\u8C61\u65F6\uFF0C\u5176\u5C5E\u6027\u4F1A\u4F20\u9012\u7ED9\u5185\u5EFA\u7684 \`TimePicker\`\u3002
</cn>

<us>
#### Choose Time
This property provide an additional time selection. When \`showTime\` is an Object, its properties will be passed on to built-in \`TimePicker\`.
</us>
`,Pe=`<template>
  <a-space direction="vertical">
    <a-date-picker show-time placeholder="Select Time" @change="onChange" @ok="onOk" />
    <a-range-picker
      :show-time="{ format: 'HH:mm' }"
      format="YYYY-MM-DD HH:mm"
      :placeholder="['Start Time', 'End Time']"
      @change="onChange"
      @ok="onOk"
    />
  </a-space>
</template>
<script lang="ts">
import { Moment } from 'moment';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const onChange = (value: Moment[], dateString: string[]) => {
      console.log('Selected Time: ', value);
      console.log('Formatted Selected Time: ', dateString);
    };

    const onOk = (value: Moment[]) => {
      console.log('onOk: ', value);
    };

    return {
      onChange,
      onOk,
    };
  },
});
<\/script>
`,F=b({components:{SmileOutlined:I},setup(){return{onChange:(n,r)=>{console.log(n,r)}}}});function Te(e,n,r,p,u,c){const l=a("SmileOutlined"),o=a("a-date-picker"),i=a("a-month-picker"),h=a("a-range-picker"),d=a("a-week-picker"),C=a("a-year-picker"),k=a("a-space");return f(),g(k,{direction:"vertical"},{default:s(()=>[t(o,{onChange:e.onChange},{suffixIcon:s(()=>[t(l)]),_:1},8,["onChange"]),t(i,{onChange:e.onChange,placeholder:"Select month"},{suffixIcon:s(()=>[t(l)]),_:1},8,["onChange"]),t(h,{onChange:e.onChange},{suffixIcon:s(()=>[t(l)]),_:1},8,["onChange"]),t(d,{onChange:e.onChange,placeholder:"Select week"},{suffixIcon:s(()=>[t(l)]),_:1},8,["onChange"]),t(o,{"suffix-icon":"ab",onChange:e.onChange},null,8,["onChange"]),t(i,{"suffix-icon":"ab",placeholder:"Select month",onChange:e.onChange},null,8,["onChange"]),t(h,{"suffix-icon":"ab",onChange:e.onChange},null,8,["onChange"]),t(d,{"suffix-icon":"ab",placeholder:"Select week",onChange:e.onChange},null,8,["onChange"]),t(C,{"suffix-icon":"ab",placeholder:"Select year",onChange:e.onChange},null,8,["onChange"])]),_:1})}F.render=Te;var Ee=`<cn>
#### \u540E\u7F00\u56FE\u6807
\u6700\u7B80\u5355\u7684\u7528\u6CD5\uFF0C\u5728\u6D6E\u5C42\u4E2D\u53EF\u4EE5\u9009\u62E9\u6216\u8005\u8F93\u5165\u65E5\u671F\u3002
</cn>

<us>
#### Suffix
Basic use case. Users can select or input a date in panel.
</us>
`,He=`<template>
  <a-space direction="vertical">
    <a-date-picker @change="onChange">
      <template #suffixIcon>
        <SmileOutlined />
      </template>
    </a-date-picker>
    <a-month-picker @change="onChange" placeholder="Select month">
      <template #suffixIcon>
        <SmileOutlined />
      </template>
    </a-month-picker>
    <a-range-picker @change="onChange">
      <template #suffixIcon>
        <SmileOutlined />
      </template>
    </a-range-picker>
    <a-week-picker @change="onChange" placeholder="Select week">
      <template #suffixIcon>
        <SmileOutlined />
      </template>
    </a-week-picker>
    <a-date-picker suffix-icon="ab" @change="onChange" />
    <a-month-picker suffix-icon="ab" placeholder="Select month" @change="onChange" />
    <a-range-picker suffix-icon="ab" @change="onChange" />
    <a-week-picker suffix-icon="ab" placeholder="Select week" @change="onChange" />
    <a-year-picker suffix-icon="ab" placeholder="Select year" @change="onChange" />
  </a-space>
</template>
<script lang="ts">
import { SmileOutlined } from '@ant-design/icons-vue';
import { Moment } from 'moment';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    SmileOutlined,
  },
  setup() {
    const onChange = (date: Moment, dateString: string[]) => {
      console.log(date, dateString);
    };

    return {
      onChange,
    };
  },
});
<\/script>
`,z=b({setup(){const e=m(),n=m();return{time1:e,time2:n,moment:v,onOk:u=>{console.log("onOk: ",u)},clearTime:()=>{e.value=void 0}}}});function Ve(e,n,r,p,u,c){const l=a("a-date-picker"),o=a("a-range-picker"),i=a("a-space");return f(),g(i,{direction:"vertical"},{default:s(()=>[t(l,{value:e.time1,"onUpdate:value":n[1]||(n[1]=h=>e.time1=h),placeholder:"Select Time",onOk:e.onOk},{default:s(()=>[t("span",null,Y(e.time1?e.time1.toString():"SelectTime"),1)]),_:1},8,["value","onOk"]),t(o,{value:e.time2,"onUpdate:value":n[2]||(n[2]=h=>e.time2=h)},{default:s(()=>[t("span",null,Y(e.time2?e.time2.toString():"\u8BF7\u9009\u62E9"),1)]),_:1},8,["value"])]),_:1})}z.render=Ve;var Fe=`<cn>
#### \u81EA\u5B9A\u4E49\u6E32\u67D3
\u589E\u52A0\u81EA\u5B9A\u4E49\u6E32\u67D3\u529F\u80FD\uFF0C\u5728\u9ED8\u8BA4 \`slot\` \u4E2D\uFF0C\u4F60\u53EF\u4EE5\u8BBE\u7F6E\u4EFB\u4F55\u4F60\u60F3\u6E32\u67D3\u7684\u7EC4\u4EF6\u3002
</cn>

<us>
#### Custum Time
Added custom rendering function, in the default \`slot', you can set any component you want to render..
</us>
`,ze=`<template>
  <a-space direction="vertical">
    <a-date-picker v-model:value="time1" placeholder="Select Time" @ok="onOk">
      <span>{{ time1 ? time1.toString() : 'SelectTime' }}</span>
    </a-date-picker>
    <a-range-picker v-model:value="time2">
      <span>
        {{ time2 ? time2.toString() : '\u8BF7\u9009\u62E9' }}
      </span>
    </a-range-picker>
  </a-space>
</template>
<script lang="ts">
import moment, { Moment } from 'moment';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const time1 = ref<Moment>();
    const time2 = ref<Moment>();

    const onOk = (value: Moment) => {
      console.log('onOk: ', value);
    };

    const clearTime = () => {
      time1.value = undefined;
    };

    return {
      time1,
      time2,
      moment,
      onOk,
      clearTime,
    };
  },
});
<\/script>
`,R=b({setup(){return{rangeValue1:m(["",""]),rangeValue2:m(["",""])}}});function Re(e,n,r,p,u,c){const l=a("a-range-picker"),o=a("a-space");return f(),g(o,{direction:"vertical"},{default:s(()=>[t(l,{"show-time":{format:"HH-mm-ss"},value:e.rangeValue1,"onUpdate:value":n[1]||(n[1]=i=>e.rangeValue1=i),format:"YYYY-MM-DD HH:mm:ss","value-format":"YYYY-MM-DD HH:mm:ss","time-rounding":""},null,8,["value"]),t(l,{"show-time":"",value:e.rangeValue2,"onUpdate:value":n[2]||(n[2]=i=>e.rangeValue2=i),format:"YYYY-MM-DD HH:mm:ss","value-format":"YYYY-MM-DD HH:mm:ss","time-rounding":"",showTodayButton:"",showYesterdayButton:"",showSevenDaysButton:"",showThirtyDaysButton:""},null,8,["value"])]),_:1})}R.render=Re;var je=`<cn>
#### \u533A\u95F4\u7684\u65F6\u95F4\u9650\u5236
\u8BBE\u7F6E \`time-rounding\` \u5373\u53EF\u5F00\u59CB\u65F6\u95F4\u662F 00:00:00 \uFF0C\u7ED3\u675F\u65F6\u95F4\u662F 23:59:59
</cn>

<us>
#### range-now
range-now
</us>
`,Be=`<template>
  <a-space direction="vertical">
    <a-range-picker
      :show-time="{ format: 'HH-mm-ss' }"
      v-model:value="rangeValue1"
      format="YYYY-MM-DD HH:mm:ss"
      value-format="YYYY-MM-DD HH:mm:ss"
      time-rounding
    />
    <a-range-picker
      show-time
      v-model:value="rangeValue2"
      format="YYYY-MM-DD HH:mm:ss"
      value-format="YYYY-MM-DD HH:mm:ss"
      time-rounding
      showTodayButton
      showYesterdayButton
      showSevenDaysButton
      showThirtyDaysButton
    />
  </a-space>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    return {
      rangeValue1: ref(['', '']),
      rangeValue2: ref(['', '']),
    };
  },
});
<\/script>
`;const Ue={class:"markdown-body"},Ie=A('<h2>API</h2><p>\u65E5\u671F\u7C7B\u7EC4\u4EF6\u5305\u62EC\u4EE5\u4E0B\u56DB\u79CD\u5F62\u5F0F\u3002</p><ul><li>DatePicker</li><li>MonthPicker</li><li>RangePicker</li><li>WeekPicker</li><li>YearPicker</li></ul><h3>\u56FD\u9645\u5316\u914D\u7F6E</h3><p>\u9ED8\u8BA4\u914D\u7F6E\u4E3A en-US\uFF0C\u5982\u679C\u4F60\u9700\u8981\u8BBE\u7F6E\u5176\u4ED6\u8BED\u8A00\uFF0C\u63A8\u8350\u5728\u5165\u53E3\u5904\u4F7F\u7528\u6211\u4EEC\u63D0\u4F9B\u7684\u56FD\u9645\u5316\u7EC4\u4EF6\uFF0C\u8BE6\u89C1\uFF1A<a href="https://2x.antdv.com/components/date-picker-cn">ConfigProvider \u56FD\u9645\u5316</a>\u3002</p><p>\u5982\u6709\u7279\u6B8A\u9700\u6C42\uFF08\u4EC5\u4FEE\u6539\u5355\u4E00\u7EC4\u4EF6\u7684\u8BED\u8A00\uFF09\uFF0C\u8BF7\u4F7F\u7528 locale \u53C2\u6570\uFF0C\u53C2\u8003\uFF1A<a href="https://github.com/ant-design/ant-design/blob/master/components/date-picker/locale/example.json">\u9ED8\u8BA4\u914D\u7F6E</a>\u3002</p><p>**\u6CE8\u610F\uFF1A**DatePicker\u3001MonthPicker\u3001RangePicker\u3001WeekPicker\u3001YearPicker \u90E8\u5206 locale \u662F\u4ECE value \u4E2D\u8BFB\u53D6\uFF0C\u6240\u4EE5\u8BF7\u5148\u6B63\u786E\u8BBE\u7F6E moment \u7684 locale\u3002</p><h3>\u5171\u540C\u7684 API</h3><p>\u4EE5\u4E0B API \u4E3A DatePicker\u3001MonthPicker\u3001RangePicker, WeekPicker, YearPicker \u5171\u4EAB\u7684 API\u3002</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>allowClear</td><td>\u662F\u5426\u663E\u793A\u6E05\u9664\u6309\u94AE</td><td>boolean</td><td>true</td><td>-</td></tr><tr><td>autoFocus</td><td>\u81EA\u52A8\u83B7\u53D6\u7126\u70B9</td><td>boolean</td><td>false</td><td>-</td></tr><tr><td>dateRender</td><td>\u4F5C\u7528\u57DF\u63D2\u69FD\uFF0C\u81EA\u5B9A\u4E49\u65E5\u671F\u5355\u5143\u683C\u7684\u5185\u5BB9</td><td>slot=\u201CdateRender\u201D slot-scope=\u201Ccurrent, today\u201D</td><td>-</td><td>-</td></tr><tr><td>disabled</td><td>\u7981\u7528</td><td>boolean</td><td>false</td><td>-</td></tr><tr><td>disabledDate</td><td>\u4E0D\u53EF\u9009\u62E9\u7684\u65E5\u671F</td><td>(currentDate: moment) =&gt; boolean</td><td>\u65E0</td><td>-</td></tr><tr><td>getCalendarContainer</td><td>\u5B9A\u4E49\u6D6E\u5C42\u7684\u5BB9\u5668\uFF0C\u9ED8\u8BA4\u4E3A body \u4E0A\u65B0\u5EFA div</td><td>function(trigger)</td><td>\u65E0</td><td>-</td></tr><tr><td>locale</td><td>\u56FD\u9645\u5316\u914D\u7F6E</td><td>object</td><td><a href="https://github.com/vueComponent/ant-design-vue/blob/master/components/date-picker/locale/example.json">\u9ED8\u8BA4\u914D\u7F6E</a></td><td>-</td></tr><tr><td>mode</td><td>\u65E5\u671F\u9762\u677F\u7684\u72B6\u6001\uFF08<a href="/docs/vue/faq#%E5%BD%93%E6%88%91%E6%8C%87%E5%AE%9A%E4%BA%86-DatePicker/RangePicker-%E7%9A%84-mode-%E5%B1%9E%E6%80%A7%E5%90%8E%EF%BC%8C%E7%82%B9%E5%87%BB%E5%90%8E%E6%97%A0%E6%B3%95%E9%80%89%E6%8B%A9%E5%B9%B4%E4%BB%BD/%E6%9C%88%E4%BB%BD%EF%BC%9F">\u8BBE\u7F6E\u540E\u65E0\u6CD5\u9009\u62E9\u5E74\u4EFD/\u6708\u4EFD\uFF1F</a>\uFF09</td><td>`time</td><td>date</td><td>month</td></tr><tr><td>open</td><td>\u63A7\u5236\u5F39\u5C42\u662F\u5426\u5C55\u5F00</td><td>boolean</td><td>-</td><td>-</td></tr><tr><td>placeholder</td><td>\u8F93\u5165\u6846\u63D0\u793A\u6587\u5B57</td><td>string|RangePicker[]</td><td>-</td><td>-</td></tr><tr><td>popupStyle</td><td>\u989D\u5916\u7684\u5F39\u51FA\u65E5\u5386\u6837\u5F0F</td><td>object</td><td>{}</td><td>-</td></tr><tr><td>dropdownClassName</td><td>\u989D\u5916\u7684\u5F39\u51FA\u65E5\u5386 className</td><td>string</td><td>-</td><td>-</td></tr><tr><td>size</td><td>\u8F93\u5165\u6846\u5927\u5C0F\uFF0C<code>large</code> \u9AD8\u5EA6\u4E3A 40px\uFF0C<code>small</code> \u4E3A 24px\uFF0C\u9ED8\u8BA4\u662F 32px</td><td>string</td><td>\u65E0</td><td>-</td></tr><tr><td>suffixIcon</td><td>\u81EA\u5B9A\u4E49\u7684\u9009\u62E9\u6846\u540E\u7F00\u56FE\u6807</td><td>VNode | slot</td><td>-</td><td>-</td></tr><tr><td>inputReadOnly</td><td>\u8BBE\u7F6E\u8F93\u5165\u6846\u4E3A\u53EA\u8BFB\uFF08\u907F\u514D\u5728\u79FB\u52A8\u8BBE\u5907\u4E0A\u6253\u5F00\u865A\u62DF\u952E\u76D8\uFF09</td><td>boolean</td><td>-</td><td>1.5.4</td></tr><tr><td>align</td><td>\u8BE5\u503C\u5C06\u5408\u5E76\u5230 placement \u7684\u914D\u7F6E\u4E2D\uFF0C\u8BBE\u7F6E\u53C2\u8003 <a href="https://github.com/yiminghe/dom-align">dom-align</a></td><td>Object</td><td>\u65E0</td><td>1.5.4</td></tr><tr><td>valueFormat</td><td>\u53EF\u9009\uFF0C\u7ED1\u5B9A\u503C\u7684\u683C\u5F0F\uFF0C\u5BF9 value\u3001defaultValue\u3001defaultPickerValue \u8D77\u4F5C\u7528\u3002\u4E0D\u6307\u5B9A\u5219\u7ED1\u5B9A\u503C\u4E3A moment \u5BF9\u8C61</td><td>string\uFF0C<a href="https://momentjs.com/docs/#/displaying/format/">\u5177\u4F53\u683C\u5F0F</a></td><td>-</td><td>1.5.4</td></tr></tbody></table><h3>\u5171\u6709\u7684\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>openChange</td><td>\u5F39\u51FA\u65E5\u5386\u548C\u5173\u95ED\u65E5\u5386\u7684\u56DE\u8C03</td><td>function(status)</td></tr><tr><td>panelChange</td><td>\u65E5\u671F\u9762\u677F\u53D8\u5316\u65F6\u7684\u56DE\u8C03</td><td>function(value, mode)</td></tr></tbody></table><h3>\u5171\u540C\u7684\u65B9\u6CD5</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td>blur()</td><td>\u79FB\u9664\u7126\u70B9</td></tr><tr><td>focus()</td><td>\u83B7\u53D6\u7126\u70B9</td></tr></tbody></table><h3>DatePicker</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>defaultValue</td><td>\u9ED8\u8BA4\u65E5\u671F</td><td><a href="http://momentjs.com/">moment</a></td><td>\u65E0</td></tr><tr><td>defaultPickerValue</td><td>\u9ED8\u8BA4\u9762\u677F\u65E5\u671F</td><td><a href="http://momentjs.com/">moment</a></td><td>\u65E0</td></tr><tr><td>disabledTime</td><td>\u4E0D\u53EF\u9009\u62E9\u7684\u65F6\u95F4</td><td>function(date)</td><td>\u65E0</td></tr><tr><td>format</td><td>\u8BBE\u7F6E\u65E5\u671F\u683C\u5F0F\uFF0C\u4E3A\u6570\u7EC4\u65F6\u652F\u6301\u591A\u683C\u5F0F\u5339\u914D\uFF0C\u5C55\u793A\u4EE5\u7B2C\u4E00\u4E2A\u4E3A\u51C6\u3002\u914D\u7F6E\u53C2\u8003 <a href="http://momentjs.com/">moment.js</a></td><td>string | string[]</td><td>\u201CYYYY-MM-DD\u201D</td></tr><tr><td>renderExtraFooter</td><td>\u5728\u9762\u677F\u4E2D\u6DFB\u52A0\u989D\u5916\u7684\u9875\u811A</td><td>slot=\u201CrenderExtraFooter\u201D slot-scope=\u201Cmode\u201D</td><td>-</td></tr><tr><td>showTime</td><td>\u589E\u52A0\u65F6\u95F4\u9009\u62E9\u529F\u80FD</td><td>Object|boolean</td><td><a href="/components/time-picker-cn/#API">TimePicker Options</a></td></tr><tr><td>showTime.defaultValue</td><td>\u8BBE\u7F6E\u7528\u6237\u9009\u62E9\u65E5\u671F\u65F6\u9ED8\u8BA4\u7684\u65F6\u5206\u79D2</td><td><a href="http://momentjs.com/">moment</a></td><td>moment()</td></tr><tr><td>showToday</td><td>\u662F\u5426\u5C55\u793A\u201C\u4ECA\u5929\u201D\u6309\u94AE</td><td>boolean</td><td>true</td></tr><tr><td>value(v-model)</td><td>\u65E5\u671F</td><td><a href="http://momentjs.com/">moment</a></td><td>\u65E0</td></tr></tbody></table><h3>DatePicker \u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u65F6\u95F4\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03</td><td>function(date: moment | string, dateString: string)</td></tr><tr><td>ok</td><td>\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u7684\u56DE\u8C03</td><td>function()</td></tr></tbody></table><h3>YearPicker</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>defaultValue</td><td>\u9ED8\u8BA4\u65E5\u671F</td><td><a href="http://momentjs.com/">moment</a></td><td>\u65E0</td></tr><tr><td>defaultPickerValue</td><td>\u9ED8\u8BA4\u9762\u677F\u65E5\u671F</td><td><a href="http://momentjs.com/">moment</a></td><td>\u65E0</td></tr><tr><td>format</td><td>\u5C55\u793A\u7684\u65E5\u671F\u683C\u5F0F\uFF0C\u914D\u7F6E\u53C2\u8003 <a href="http://momentjs.com/">moment.js</a></td><td>string</td><td>\u201CYYYY\u201D</td></tr><tr><td>value(v-model)</td><td>\u65E5\u671F</td><td><a href="http://momentjs.com/">moment</a></td><td>\u65E0</td></tr></tbody></table><h3>YearPicker \u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u65F6\u95F4\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03\uFF0C\u53D1\u751F\u5728\u7528\u6237\u9009\u62E9\u65F6\u95F4\u65F6</td><td>function(date: moment | string, dateString: string)</td></tr></tbody></table><h3>MonthPicker</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>defaultValue</td><td>\u9ED8\u8BA4\u65E5\u671F</td><td><a href="http://momentjs.com/">moment</a></td><td>\u65E0</td></tr><tr><td>defaultPickerValue</td><td>\u9ED8\u8BA4\u9762\u677F\u65E5\u671F</td><td><a href="http://momentjs.com/">moment</a></td><td>\u65E0</td></tr><tr><td>format</td><td>\u5C55\u793A\u7684\u65E5\u671F\u683C\u5F0F\uFF0C\u914D\u7F6E\u53C2\u8003 <a href="http://momentjs.com/">moment.js</a></td><td>string</td><td>\u201CYYYY-MM\u201D</td></tr><tr><td>monthCellContentRender</td><td>\u81EA\u5B9A\u4E49\u7684\u6708\u4EFD\u5185\u5BB9\u6E32\u67D3\u65B9\u6CD5</td><td>slot=\u201CmonthCellContentRender\u201D slot-scope=\u201Cdate, locale\u201D</td><td>-</td></tr><tr><td>renderExtraFooter</td><td>\u5728\u9762\u677F\u4E2D\u6DFB\u52A0\u989D\u5916\u7684\u9875\u811A</td><td>slot=\u201CrenderExtraFooter\u201D slot-scope=\u201Cmode\u201D</td><td>-</td></tr><tr><td>value(v-model)</td><td>\u65E5\u671F</td><td><a href="http://momentjs.com/">moment</a></td><td>\u65E0</td></tr></tbody></table><h3>MonthPicker \u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u65F6\u95F4\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03\uFF0C\u53D1\u751F\u5728\u7528\u6237\u9009\u62E9\u65F6\u95F4\u65F6</td><td>function(date: moment | string, dateString: string)</td></tr></tbody></table><h3>WeekPicker</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>defaultValue</td><td>\u9ED8\u8BA4\u65E5\u671F</td><td><a href="http://momentjs.com/">moment</a></td><td>-</td></tr><tr><td>defaultPickerValue</td><td>\u9ED8\u8BA4\u9762\u677F\u65E5\u671F</td><td><a href="http://momentjs.com/">moment</a></td><td>\u65E0</td></tr><tr><td>format</td><td>\u5C55\u793A\u7684\u65E5\u671F\u683C\u5F0F\uFF0C\u914D\u7F6E\u53C2\u8003 <a href="http://momentjs.com/">moment.js</a></td><td>string</td><td>\u201CYYYY-wo\u201D</td></tr><tr><td>value(v-model)</td><td>\u65E5\u671F</td><td><a href="http://momentjs.com/">moment</a></td><td>-</td></tr><tr><td>renderExtraFooter</td><td>\u5728\u9762\u677F\u4E2D\u6DFB\u52A0\u989D\u5916\u7684\u9875\u811A</td><td>slot=\u201CrenderExtraFooter\u201D slot-scope=\u201Cmode\u201D</td><td>-</td></tr></tbody></table><h3>WeekPicker \u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>change</td><td>\u65F6\u95F4\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03\uFF0C\u53D1\u751F\u5728\u7528\u6237\u9009\u62E9\u65F6\u95F4\u65F6</td><td>function(date: moment | string, dateString: string)</td></tr></tbody></table><h3>RangePicker</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>defaultValue</td><td>\u9ED8\u8BA4\u65E5\u671F</td><td><a href="http://momentjs.com/">moment</a>[]</td><td>\u65E0</td><td></td></tr><tr><td>defaultPickerValue</td><td>\u9ED8\u8BA4\u9762\u677F\u65E5\u671F</td><td><a href="http://momentjs.com/">moment</a>[]</td><td>\u65E0</td><td></td></tr><tr><td>disabledTime</td><td>\u4E0D\u53EF\u9009\u62E9\u7684\u65F6\u95F4</td><td>function(dates: [moment, moment], partial: `\u2018start\u2019</td><td>\u2018end\u2019`)</td><td>\u65E0</td></tr><tr><td>format</td><td>\u5C55\u793A\u7684\u65E5\u671F\u683C\u5F0F</td><td>string</td><td>\u201CYYYY-MM-DD HH:mm:ss\u201D</td><td></td></tr><tr><td>ranges</td><td>\u9884\u8BBE\u65F6\u95F4\u8303\u56F4\u5FEB\u6377\u9009\u62E9</td><td>{ [range: string]: <a href="http://momentjs.com/">moment</a>[] } | { [range: string]: () =&gt; <a href="http://momentjs.com/">moment</a>[] }</td><td>\u65E0</td><td></td></tr><tr><td>renderExtraFooter</td><td>\u5728\u9762\u677F\u4E2D\u6DFB\u52A0\u989D\u5916\u7684\u9875\u811A</td><td>slot=\u201CrenderExtraFooter\u201D slot-scope=\u201Cmode\u201D</td><td>-</td><td></td></tr><tr><td>separator</td><td>\u8BBE\u7F6E\u5206\u9694\u7B26</td><td>string</td><td>\u2018~\u2019</td><td>1.5.0</td></tr><tr><td>showTime</td><td>\u589E\u52A0\u65F6\u95F4\u9009\u62E9\u529F\u80FD</td><td>Object|boolean</td><td><a href="/components/time-picker-cn/#API">TimePicker Options</a></td><td></td></tr><tr><td>showTime.defaultValue</td><td>\u8BBE\u7F6E\u7528\u6237\u9009\u62E9\u65E5\u671F\u65F6\u9ED8\u8BA4\u7684\u65F6\u5206\u79D2</td><td><a href="http://momentjs.com/">moment</a>[]</td><td>[moment(), moment()]</td><td></td></tr><tr><td>value(v-model)</td><td>\u65E5\u671F</td><td><a href="http://momentjs.com/">moment</a>[]</td><td>\u65E0</td><td></td></tr><tr><td>timeRounding</td><td>\u5F00\u59CB\u65F6\u95F4\u662F 00:00:00 \u7ED3\u675F\u65F6\u95F4 23:59:59</td><td>boolean</td><td>-</td><td>3.46.0</td></tr></tbody></table><h3>RangePicker \u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>calendarChange</td><td>\u5F85\u9009\u65E5\u671F\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03</td><td>function(dates: [moment, moment] | [string, string], dateStrings: [string, string])</td></tr><tr><td>change</td><td>\u65E5\u671F\u8303\u56F4\u53D1\u751F\u53D8\u5316\u7684\u56DE\u8C03</td><td>function(dates: [moment, moment] | [string, string], dateStrings: [string, string])</td></tr><tr><td>ok</td><td>\u70B9\u51FB\u786E\u5B9A\u6309\u94AE\u7684\u56DE\u8C03</td><td>function(dates: [moment, moment] | [string, string])</td></tr></tbody></table>',34),Ae={expose:[],setup(e){return(n,r)=>(f(),g("div",Ue,[Ie]))}};var We=Ae;const j={cn:`# DatePicker \u65E5\u671F\u9009\u62E9\u6846
          \u8F93\u5165\u6216\u9009\u62E9\u65E5\u671F\u7684\u63A7\u4EF6\u3002
## \u4F55\u65F6\u4F7F\u7528
\u5F53\u7528\u6237\u9700\u8981\u8F93\u5165\u4E00\u4E2A\u65E5\u671F\uFF0C\u53EF\u4EE5\u70B9\u51FB\u6807\u51C6\u8F93\u5165\u6846\uFF0C\u5F39\u51FA\u65E5\u671F\u9762\u677F\u8FDB\u884C\u9009\u62E9\u3002
          ## \u4EE3\u7801\u6F14\u793A`,us:`# DatePicker
          To select or input a date.
## When To Use
By clicking the input box, you can select a date from a popup calendar.
## Examples
          `};var Le={category:"Components",type:"Data Entry",zhType:"\u6570\u636E\u5F55\u5165",title:"DatePicker",subtitle:"\u65E5\u671F\u9009\u62E9\u6846",render(){return t("div",{id:"components-date-picker-demo"},[t(a("Md"),{cn:j.cn,us:j.us},null),t(a("demo-sort"),null,{default:()=>[t(a("demo-container"),{api:N,code:L},{default:()=>[t(D,null,null)]}),t(a("demo-container"),{api:x,code:G},{default:()=>[t(S,null,null)]}),t(a("demo-container"),{api:K,code:Q},{default:()=>[t(y,null,null)]}),t(a("demo-container"),{api:Z,code:ee},{default:()=>[t(w,null,null)]}),t(a("demo-container"),{api:ie,code:se},{default:()=>[t(le,null,null)]}),t(a("demo-container"),{api:ue,code:pe},{default:()=>[t(O,null,null)]}),t(a("demo-container"),{api:he,code:ve},{default:()=>[t(P,null,null)]}),t(a("demo-container"),{api:ge,code:ke},{default:()=>[t(T,null,null)]}),t(a("demo-container"),{api:Me,code:De},{default:()=>[t(E,null,null)]}),t(a("demo-container"),{api:ye,code:we},{default:()=>[t(H,null,null)]}),t(a("demo-container"),{api:Oe,code:Pe},{default:()=>[t(V,null,null)]}),t(a("demo-container"),{api:Fe,code:ze},{default:()=>[t(z,null,null)]}),t(a("demo-container"),{api:Ee,code:He},{default:()=>[t(F,null,null)]}),t(a("demo-container"),{api:je,code:Be},{default:()=>[t(R,null,null)]})]}),t(a("api"),null,{default:()=>[t(We,null,null)]})])}};export{Le as default};

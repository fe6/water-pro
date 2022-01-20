import{d as y,k as g,Y as a,bw as u,bx as m,b as e,bG as L,bH as N,F as C,bV as b,bz as w,c8 as U,bI as B,j as M,by as p,D as _,bO as F}from"./vendor.846be9ce.js";var H=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u4E00\u4E2A\u901A\u7528\u7684\u65E5\u5386\u9762\u677F\uFF0C\u652F\u6301\u5E74/\u6708\u5207\u6362\u3002
</cn>

<us>
#### basic
A basic calendar component with Year/Month switch.
</us>
`,T=y({setup(){return{value:g(),onPanelChange:(c,i)=>{console.log(c,i)}}}});function A(n,t,c,i,o,l){const s=a("a-calendar");return u(),m(s,{value:n.value,"onUpdate:value":t[1]||(t[1]=r=>n.value=r),panelChange:n.onPanelChange},null,8,["value","panelChange"])}T.render=A;var W=`<template>
  <a-calendar v-model:value="value" v-bind:panelChange="onPanelChange" />
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Moment } from 'moment';

export default defineComponent({
  setup() {
    const value = ref<Moment>();
    const onPanelChange = (value: Moment, mode: string) => {
      console.log(value, mode);
    };

    return {
      value,
      onPanelChange,
    };
  },
});
<\/script>
`,E=`<cn>
#### \u5361\u7247\u6A21\u5F0F
\u7528\u4E8E\u5D4C\u5957\u5728\u7A7A\u95F4\u6709\u9650\u7684\u5BB9\u5668\u4E2D\u3002
</cn>

<us>
#### Card
Nested inside a container element for rendering in limited space.
</us>
`,P=y({setup(){return{value:g(),onPanelChange:(c,i)=>{console.log(c,i)}}}});const G={style:{width:"300px",border:"1px solid #d9d9d9",borderRadius:"4px"}};function O(n,t,c,i,o,l){const s=a("a-calendar");return u(),m("div",G,[e(s,{value:n.value,"onUpdate:value":t[1]||(t[1]=r=>n.value=r),fullscreen:!1,panelChange:n.onPanelChange},null,8,["value","panelChange"])])}P.render=O;var J=`<template>
  <div :style="{ width: '300px', border: '1px solid #d9d9d9', borderRadius: '4px' }">
    <a-calendar v-model:value="value" :fullscreen="false" v-bind:panelChange="onPanelChange" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Moment } from 'moment';

export default defineComponent({
  setup() {
    const value = ref<Moment>();
    const onPanelChange = (value: Moment, mode: string) => {
      console.log(value, mode);
    };

    return {
      value,
      onPanelChange,
    };
  },
});
<\/script>
`,K=`<cn>
#### \u901A\u77E5\u4E8B\u9879\u65E5\u5386
\u4E00\u4E2A\u590D\u6742\u7684\u5E94\u7528\u793A\u4F8B\uFF0C\u7528 \`dateCellRender\` \u548C \`monthCellRender\` \u51FD\u6570\u6765\u81EA\u5B9A\u4E49\u9700\u8981\u6E32\u67D3\u7684\u6570\u636E\u3002
</cn>

<us>
#### Notice Calendar
This component can be rendered by using \`dateCellRender\` and \`monthCellRender\` with the data you need.
</us>
`,$=y({setup(){return{value:g(),getListData:i=>{let o;switch(i.date()){case 8:o=[{type:"warning",content:"This is warning event."},{type:"success",content:"This is usual event."}];break;case 10:o=[{type:"warning",content:"This is warning event."},{type:"success",content:"This is usual event."},{type:"error",content:"This is error event."}];break;case 15:o=[{type:"warning",content:"This is warning event"},{type:"success",content:"This is very long usual event\u3002\u3002...."},{type:"error",content:"This is error event 1."},{type:"error",content:"This is error event 2."},{type:"error",content:"This is error event 3."},{type:"error",content:"This is error event 4."}];break}return o||[]},getMonthData:i=>{if(i.month()===8)return 1394}}}});const x=B();L("data-v-46d22746");const Q={class:"events"},X={key:0,class:"notes-month"},Z=e("span",null,"Backlog number",-1);N();const ee=x((n,t,c,i,o,l)=>{const s=a("a-badge"),r=a("a-calendar");return u(),m(r,{value:n.value,"onUpdate:value":t[1]||(t[1]=d=>n.value=d)},{dateCellRender:x(({current:d})=>[e("ul",Q,[(u(!0),m(C,null,b(n.getListData(d),f=>(u(),m("li",{key:f.content},[e(s,{status:f.type,text:f.content},null,8,["status","text"])]))),128))])]),monthCellRender:x(({current:d})=>[n.getMonthData(d)?(u(),m("div",X,[e("section",null,w(n.getMonthData(d)),1),Z])):U("v-if",!0)]),_:1},8,["value"])});$.render=ee;$.__scopeId="data-v-46d22746";var ne=`<template>
  <a-calendar v-model:value="value">
    <template #dateCellRender="{ current: value }">
      <ul class="events">
        <li v-for="item in getListData(value)" :key="item.content">
          <a-badge :status="item.type" :text="item.content" />
        </li>
      </ul>
    </template>
    <template #monthCellRender="{ current: value }">
      <div v-if="getMonthData(value)" class="notes-month">
        <section>{{ getMonthData(value) }}</section>
        <span>Backlog number</span>
      </div>
    </template>
  </a-calendar>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Moment } from 'moment';

export default defineComponent({
  setup() {
    const value = ref<Moment>();

    const getListData = (value: Moment) => {
      let listData;
      switch (value.date()) {
        case 8:
          listData = [
            { type: 'warning', content: 'This is warning event.' },
            { type: 'success', content: 'This is usual event.' },
          ];
          break;
        case 10:
          listData = [
            { type: 'warning', content: 'This is warning event.' },
            { type: 'success', content: 'This is usual event.' },
            { type: 'error', content: 'This is error event.' },
          ];
          break;
        case 15:
          listData = [
            { type: 'warning', content: 'This is warning event' },
            { type: 'success', content: 'This is very long usual event\u3002\u3002....' },
            { type: 'error', content: 'This is error event 1.' },
            { type: 'error', content: 'This is error event 2.' },
            { type: 'error', content: 'This is error event 3.' },
            { type: 'error', content: 'This is error event 4.' },
          ];
          break;
        default:
      }
      return listData || [];
    };

    const getMonthData = (value: Moment) => {
      if (value.month() === 8) {
        return 1394;
      }
    };

    return {
      value,
      getListData,
      getMonthData,
    };
  },
});
<\/script>
<style scoped>
.events {
  list-style: none;
  margin: 0;
  padding: 0;
}
.events .ant-badge-status {
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
  text-overflow: ellipsis;
  font-size: 12px;
}
.notes-month {
  text-align: center;
  font-size: 28px;
}
.notes-month section {
  font-size: 28px;
}
</style>
`,te=`<cn>
#### \u9009\u62E9\u529F\u80FD
\u4E00\u4E2A\u901A\u7528\u7684\u65E5\u5386\u9762\u677F\uFF0C\u652F\u6301\u5E74/\u6708\u5207\u6362\u3002
</cn>

<us>
#### Selectable Calendar
A basic calendar component with Year/Month switch.
</us>
`,k=y({setup(){const n=g(M("2017-01-25")),t=g(M("2017-01-25")),c=g(M("2017-01-25"));return{date:n,selectedValue:t,date1:c,onSelect:l=>{n.value=l,t.value=l},onPanelChange:l=>{n.value=l}}}});const ae={style:{display:"inline-block",width:"500px",border:"1px solid #d9d9d9",borderRadius:"4px"}},oe={style:{display:"inline-block",width:"500px",marginLeft:"20px",border:"1px solid #d9d9d9",borderRadius:"4px"}};function le(n,t,c,i,o,l){const s=a("a-alert"),r=a("a-calendar");return u(),m(C,null,[e(s,{message:`You selected date: ${n.selectedValue&&n.selectedValue.format("YYYY-MM-DD")}`},null,8,["message"]),e("div",ae,[e(r,{value:n.date,select:n.onSelect,panelChange:n.onPanelChange},null,8,["value","select","panelChange"])]),e("div",oe,[e(r,{value:n.date1,"onUpdate:value":t[1]||(t[1]=d=>n.date1=d)},null,8,["value"])])],64)}k.render=le;var re=`<template>
  <a-alert :message="\`You selected date: \${selectedValue && selectedValue.format('YYYY-MM-DD')}\`" />
  <div
    :style="{
      display: 'inline-block',
      width: '500px',
      border: '1px solid #d9d9d9',
      borderRadius: '4px',
    }"
  >
    <a-calendar :value="date" v-bind:select="onSelect" v-bind:panelChange="onPanelChange" />
  </div>
  <div
    :style="{
      display: 'inline-block',
      width: '500px',
      marginLeft: '20px',
      border: '1px solid #d9d9d9',
      borderRadius: '4px',
    }"
  >
    <a-calendar v-model:value="date1" />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import moment, { Moment } from 'moment';

export default defineComponent({
  setup() {
    const date = ref(moment('2017-01-25'));
    const selectedValue = ref(moment('2017-01-25'));
    const date1 = ref(moment('2017-01-25'));

    const onSelect = (value: Moment) => {
      date.value = value;
      selectedValue.value = value;
    };
    const onPanelChange = (value: Moment) => {
      date.value = value;
    };
    return {
      date,
      selectedValue,
      date1,
      onSelect,
      onPanelChange,
    };
  },
});
<\/script>
`,de=`<cn>
#### \u81EA\u5B9A\u4E49\u5934\u90E8
\u81EA\u5B9A\u4E49\u65E5\u5386\u5934\u90E8\u5185\u5BB9\u3002
</cn>

<us>
#### Customize Header
Customize Calendar header content.
</us>
`,R=y({setup(){return{value:g(),onPanelChange:(o,l)=>{console.log(o,l)},getMonths:o=>{const l=o.clone(),s=o.localeData(),r=[];for(let d=0;d<12;d++)l.month(d),r.push(s.monthsShort(l));return r},getYears:o=>{const l=o.year(),s=[];for(let r=l-10;r<l+10;r+=1)s.push(r);return s}}}});const se={style:{width:"300px",border:"1px solid #d9d9d9","border-radius":"4px"}},ie={style:{padding:"10px"}},ce=e("div",{style:{"margin-bottom":"10px"}},"Custom header",-1),ue=_("Month"),me=_("Year");function pe(n,t,c,i,o,l){const s=a("a-radio-button"),r=a("a-radio-group"),d=a("a-col"),f=a("a-select-option"),S=a("a-select"),z=a("a-row"),V=a("a-calendar");return u(),m("div",se,[e(V,{value:n.value,"onUpdate:value":t[1]||(t[1]=v=>n.value=v),fullscreen:!1,panelChange:n.onPanelChange},{headerRender:p(({value:v,type:j,onChange:D,onTypeChange:q})=>[e("div",ie,[ce,e(z,{type:"flex",justify:"space-between"},{default:p(()=>[e(d,null,{default:p(()=>[e(r,{size:"small",value:j,change:h=>q(h.target.value)},{default:p(()=>[e(s,{value:"month"},{default:p(()=>[ue]),_:1}),e(s,{value:"year"},{default:p(()=>[me]),_:1})]),_:2},1032,["value","change"])]),_:2},1024),e(d,null,{default:p(()=>[e(S,{size:"small","dropdown-match-select-width":!1,class:"my-year-select",value:String(v.year()),change:h=>{D(v.clone().year(h))}},{default:p(()=>[(u(!0),m(C,null,b(n.getYears(v),h=>(u(),m(f,{key:String(h),class:"year-item"},{default:p(()=>[_(w(h),1)]),_:2},1024))),128))]),_:2},1032,["value","change"])]),_:2},1024),e(d,null,{default:p(()=>[e(S,{size:"small","dropdown-match-select-width":!1,value:String(v.month()),change:h=>{D(v.clone().month(parseInt(h,10)))}},{default:p(()=>[(u(!0),m(C,null,b(n.getMonths(v),(h,I)=>(u(),m(f,{key:String(I),class:"month-item"},{default:p(()=>[_(w(h),1)]),_:2},1024))),128))]),_:2},1032,["value","change"])]),_:2},1024)]),_:2},1024)])]),_:1},8,["value","panelChange"])])}R.render=pe;var he=`<template>
  <div style="width: 300px; border: 1px solid #d9d9d9; border-radius: 4px">
    <a-calendar v-model:value="value" :fullscreen="false" v-bind:panelChange="onPanelChange">
      <template #headerRender="{ value, type, onChange, onTypeChange }">
        <div style="padding: 10px">
          <div style="margin-bottom: 10px">Custom header</div>
          <a-row type="flex" justify="space-between">
            <a-col>
              <a-radio-group size="small" :value="type" v-bind:change="e => onTypeChange(e.target.value)">
                <a-radio-button value="month">Month</a-radio-button>
                <a-radio-button value="year">Year</a-radio-button>
              </a-radio-group>
            </a-col>
            <a-col>
              <a-select
                size="small"
                :dropdown-match-select-width="false"
                class="my-year-select"
                :value="String(value.year())"
                v-bind:change="
                  newYear => {
                    onChange(value.clone().year(newYear));
                  }
                "
              >
                <a-select-option
                  v-for="val in getYears(value)"
                  :key="String(val)"
                  class="year-item"
                >
                  {{ val }}
                </a-select-option>
              </a-select>
            </a-col>
            <a-col>
              <a-select
                size="small"
                :dropdown-match-select-width="false"
                :value="String(value.month())"
                v-bind:change="
                  selectedMonth => {
                    onChange(value.clone().month(parseInt(selectedMonth, 10)));
                  }
                "
              >
                <a-select-option
                  v-for="(val, index) in getMonths(value)"
                  :key="String(index)"
                  class="month-item"
                >
                  {{ val }}
                </a-select-option>
              </a-select>
            </a-col>
          </a-row>
        </div>
      </template>
    </a-calendar>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Moment } from 'moment';

export default defineComponent({
  setup() {
    const value = ref<Moment>();

    const onPanelChange = (value: Moment, mode: string) => {
      console.log(value, mode);
    };

    const getMonths = (value: Moment) => {
      const current = value.clone();
      const localeData = value.localeData();
      const months = [];
      for (let i = 0; i < 12; i++) {
        current.month(i);
        months.push(localeData.monthsShort(current));
      }
      return months;
    };

    const getYears = (value: Moment) => {
      const year = value.year();
      const years = [];
      for (let i = year - 10; i < year + 10; i += 1) {
        years.push(i);
      }
      return years;
    };

    return {
      value,
      onPanelChange,
      getMonths,
      getYears,
    };
  },
});
<\/script>
`;const ve={class:"markdown-body"},ge=F(`<h2>API</h2><p>**\u6CE8\u610F\uFF1A**Calendar \u90E8\u5206 locale \u662F\u4ECE value \u4E2D\u8BFB\u53D6\uFF0C\u6240\u4EE5\u8BF7\u5148\u6B63\u786E\u8BBE\u7F6E moment \u7684 locale\u3002</p><pre><code class="language-html">// \u9ED8\u8BA4\u8BED\u8A00\u4E3A en-US\uFF0C\u6240\u4EE5\u5982\u679C\u9700\u8981\u4F7F\u7528\u5176\u4ED6\u8BED\u8A00\uFF0C\u63A8\u8350\u5728\u5165\u53E3\u6587\u4EF6\u5168\u5C40\u8BBE\u7F6E locale // import moment from
&#39;moment&#39;; // import &#39;moment/locale/zh-cn&#39;; // moment.locale(&#39;zh-cn&#39;);

&lt;a-calendar v-bind:panelChange=&quot;onPanelChange&quot; v-bind:select=&quot;onSelect&quot;&gt;
  &lt;template slot=&quot;dateCellRender&quot; slot-scope=&quot;value&quot;&gt;&lt;/template&gt;
  &lt;template slot=&quot;monthCellRender&quot; slot-scope=&quot;value&quot;&gt;&lt;/template&gt;
&lt;/a-calendar&gt;
</code></pre><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>dateCellRender</td><td>\u4F5C\u7528\u57DF\u63D2\u69FD\uFF0C\u7528\u6765\u81EA\u5B9A\u4E49\u6E32\u67D3\u65E5\u671F\u5355\u5143\u683C\uFF0C\u8FD4\u56DE\u5185\u5BB9\u4F1A\u88AB\u8FFD\u52A0\u5230\u5355\u5143\u683C,</td><td>function(date: moment)</td><td>\u65E0</td><td></td></tr><tr><td>dateFullCellRender</td><td>\u4F5C\u7528\u57DF\u63D2\u69FD\uFF0C\u81EA\u5B9A\u4E49\u6E32\u67D3\u65E5\u671F\u5355\u5143\u683C\uFF0C\u8FD4\u56DE\u5185\u5BB9\u8986\u76D6\u5355\u5143\u683C</td><td>function(date: moment)</td><td>\u65E0</td><td></td></tr><tr><td>defaultValue</td><td>\u9ED8\u8BA4\u5C55\u793A\u7684\u65E5\u671F</td><td><a href="http://momentjs.com/">moment</a></td><td>\u9ED8\u8BA4\u65E5\u671F</td><td></td></tr><tr><td>disabledDate</td><td>\u4E0D\u53EF\u9009\u62E9\u7684\u65E5\u671F</td><td>(currentDate: moment) =&gt; boolean</td><td>\u65E0</td><td></td></tr><tr><td>fullscreen</td><td>\u662F\u5426\u5168\u5C4F\u663E\u793A</td><td>boolean</td><td>true</td><td></td></tr><tr><td>locale</td><td>\u56FD\u9645\u5316\u914D\u7F6E</td><td>object</td><td><a href="https://github.com/vueComponent/ant-design-vue/blob/master/components/date-picker/locale/example.json">\u9ED8\u8BA4\u914D\u7F6E</a></td><td></td></tr><tr><td>mode</td><td>\u521D\u59CB\u6A21\u5F0F\uFF0C<code>month/year</code></td><td>string</td><td>month</td><td></td></tr><tr><td>monthCellRender</td><td>\u4F5C\u7528\u57DF\u63D2\u69FD\uFF0C\u81EA\u5B9A\u4E49\u6E32\u67D3\u6708\u5355\u5143\u683C\uFF0C\u8FD4\u56DE\u5185\u5BB9\u4F1A\u88AB\u8FFD\u52A0\u5230\u5355\u5143\u683C</td><td>function(date: moment)</td><td>\u65E0</td><td></td></tr><tr><td>monthFullCellRender</td><td>\u4F5C\u7528\u57DF\u63D2\u69FD\uFF0C\u81EA\u5B9A\u4E49\u6E32\u67D3\u6708\u5355\u5143\u683C\uFF0C\u8FD4\u56DE\u5185\u5BB9\u8986\u76D6\u5355\u5143\u683C</td><td>function(date: moment)</td><td>\u65E0</td><td></td></tr><tr><td>validRange</td><td>\u8BBE\u7F6E\u53EF\u4EE5\u663E\u793A\u7684\u65E5\u671F</td><td>[<a href="http://momentjs.com/">moment</a>, <a href="http://momentjs.com/">moment</a>]</td><td>\u65E0</td><td></td></tr><tr><td>value(v-model)</td><td>\u5C55\u793A\u65E5\u671F</td><td><a href="http://momentjs.com/">moment</a></td><td>\u5F53\u524D\u65E5\u671F</td><td></td></tr><tr><td>headerRender</td><td>\u81EA\u5B9A\u4E49\u5934\u90E8\u5185\u5BB9</td><td>function(object:{value: moment, type: string, onChange: f(), onTypeChange: f()}) | slot-scope</td><td>-</td><td>1.5.0</td></tr><tr><td>valueFormat</td><td>\u53EF\u9009\uFF0C\u7ED1\u5B9A\u503C\u7684\u683C\u5F0F\uFF0C\u5BF9 value\u3001defaultValue \u8D77\u4F5C\u7528\u3002\u4E0D\u6307\u5B9A\u5219\u7ED1\u5B9A\u503C\u4E3A moment \u5BF9\u8C61</td><td>string\uFF0C<a href="https://momentjs.com/docs/#/displaying/format/">\u5177\u4F53\u683C\u5F0F</a></td><td>-</td><td>1.5.4</td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>panelChange</td><td>\u65E5\u671F\u9762\u677F\u53D8\u5316\u56DE\u8C03</td><td>function(date: moment | string, mode: string)</td></tr><tr><td>select</td><td>\u70B9\u51FB\u9009\u62E9\u65E5\u671F\u56DE\u8C03</td><td>function(date: moment | string\uFF09</td></tr><tr><td>change</td><td>\u65E5\u671F\u53D8\u5316\u65F6\u7684\u56DE\u8C03, \u9762\u677F\u53D8\u5316\u6709\u53EF\u80FD\u5BFC\u81F4\u65E5\u671F\u53D8\u5316</td><td>function(date: moment | string\uFF09</td></tr></tbody></table>`,6),fe={expose:[],setup(n){return(t,c)=>(u(),m("div",ve,[ge]))}};var ye=fe;const Y={cn:`# Calendar \u65E5\u5386
          
\u6309\u7167\u65E5\u5386\u5F62\u5F0F\u5C55\u793A\u6570\u636E\u7684\u5BB9\u5668\u3002

## \u4F55\u65F6\u4F7F\u7528

\u5F53\u6570\u636E\u662F\u65E5\u671F\u6216\u6309\u7167\u65E5\u671F\u5212\u5206\u65F6\uFF0C\u4F8B\u5982\u65E5\u7A0B\u3001\u8BFE\u8868\u3001\u4EF7\u683C\u65E5\u5386\u7B49\uFF0C\u519C\u5386\u7B49\u3002\u76EE\u524D\u652F\u6301\u5E74/\u6708\u5207\u6362\u3002

          ## \u4EE3\u7801\u6F14\u793A`,us:`# Calendar
          
Container for displaying data in calendar form.

## When To Use

When data is in the form of dates, such as schedules, timetables, prices calendar, lunar calendar. This component also supports Year/Month switch.
## Examples 
`};var _e={category:"Components",type:"Data Display",zhType:"\u6570\u636E\u5C55\u793A",subtitle:"\u65E5\u5386",cols:1,title:"Calendar",render(){return e("div",null,[e(a("Md"),{cn:Y.cn,us:Y.us},null),e(a("demo-sort"),{cols:1},{default:()=>[e(a("demo-container"),{api:H,code:W},{default:()=>[e(T,null,null)]}),e(a("demo-container"),{api:E,code:J},{default:()=>[e(P,null,null)]}),e(a("demo-container"),{api:K,code:ne},{default:()=>[e($,null,null)]}),e(a("demo-container"),{api:te,code:re},{default:()=>[e(k,null,null)]}),e(a("demo-container"),{api:de,code:he},{default:()=>[e(R,null,null)]})]}),e(a("api"),null,{default:()=>[e(ye,null,null)]})])}};export{_e as default};

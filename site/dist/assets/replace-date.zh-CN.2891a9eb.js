import{E as n,J as a,cb as s}from"./vendor.0f0e4632.js";import{_ as e}from"./index.f6b32fa6.js";const t={pageData:{title:"\u81EA\u5B9A\u4E49\u65F6\u95F4\u5E93",description:"",frontmatter:{},headers:[{level:3,title:"\u66FF\u6362 DatePicker",slug:"\u66FF\u6362-DatePicker",content:""}],relativePath:"site/src/vueDocs/replace-date.zh-CN.md",content:`# \u81EA\u5B9A\u4E49\u65F6\u95F4\u5E93

\u5728 V4 \u7248\u672C\u5F00\u59CB\uFF0C\u9ED8\u8BA4\u4F7F\u7528 dayjs \u66FF\u6362\u4E86 momentjs \u5E93\uFF0C\u5982\u679C\u4F60\u9700\u8981\u4F7F\u7528 momentjs \u6216\u8005 date-fns \u65E5\u671F\u5E93\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u65B9\u5F0F\u66FF\u6362\uFF1A

### \u66FF\u6362 DatePicker

\`\`\`js
// moment \u6216\u8005 date-fns
import DatePicker from &#39;@fe6/water-pro/es/date-picker/moment&#39;;
import TimePicker from &#39;@fe6/water-pro/es/time-picker/moment&#39;;
import Calendar from &#39;@fe6/water-pro/es/calendar/moment&#39;;
// import DatePicker from &#39;@fe6/water-pro/es/date-picker/date-fns&#39;;
// import TimePicker from &#39;@fe6/water-pro/es/time-picker/date-fns&#39;;
// import Calendar from &#39;@fe6/water-pro/es/calendar/date-fns&#39;;
import { createApp } from &#39;vue&#39;;
import App from &#39;./App.vue&#39;;
import antd from &#39;@fe6/water-pro&#39;;
const app = createApp(App);
app.use(DatePicker).use(TimePicker).use(Calendar).use(antd).mount(&#39;#app&#39;);
\`\`\`

&gt; \u6CE8\u610F: \u5982\u679C\u4F60\u9700\u8981\u5168\u5C40\u6CE8\u518C @fe6/water-pro \u7EC4\u4EF6\u5E93\uFF0C\u90A3\u4E48 \`use(DatePicker)\` \`use(TimePicker)\` \`use(Calendar)\` \u5FC5\u987B\u5728 \`use(waterPro)\` \u4E4B\u524D\u6267\u884C\uFF0C\u5426\u5219\u65E0\u6CD5\u8986\u76D6\u9ED8\u8BA4\u7684 dayjs \u7248\u672C\u3002
`,html:`<h1 id="\u81EA\u5B9A\u4E49\u65F6\u95F4\u5E93">\u81EA\u5B9A\u4E49\u65F6\u95F4\u5E93 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u65F6\u95F4\u5E93">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h1>
<p>\u5728 V4 \u7248\u672C\u5F00\u59CB\uFF0C\u9ED8\u8BA4\u4F7F\u7528 dayjs \u66FF\u6362\u4E86 momentjs \u5E93\uFF0C\u5982\u679C\u4F60\u9700\u8981\u4F7F\u7528 momentjs \u6216\u8005 date-fns \u65E5\u671F\u5E93\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u65B9\u5F0F\u66FF\u6362\uFF1A</p>
<h3 id="\u66FF\u6362-DatePicker">\u66FF\u6362 DatePicker <a class="header-anchor" href="#\u66FF\u6362-DatePicker">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<pre class="language-js" v-pre><code><span class="token comment">// moment \u6216\u8005 date-fns</span>
<span class="token keyword">import</span> DatePicker <span class="token keyword">from</span> <span class="token string">'@fe6/water-pro/es/date-picker/moment'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> TimePicker <span class="token keyword">from</span> <span class="token string">'@fe6/water-pro/es/time-picker/moment'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Calendar <span class="token keyword">from</span> <span class="token string">'@fe6/water-pro/es/calendar/moment'</span><span class="token punctuation">;</span>
<span class="token comment">// import DatePicker from '@fe6/water-pro/es/date-picker/date-fns';</span>
<span class="token comment">// import TimePicker from '@fe6/water-pro/es/time-picker/date-fns';</span>
<span class="token comment">// import Calendar from '@fe6/water-pro/es/calendar/date-fns';</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> antd <span class="token keyword">from</span> <span class="token string">'@fe6/water-pro'</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>DatePicker<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>TimePicker<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Calendar<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>antd<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre>
<blockquote>
<p>\u6CE8\u610F: \u5982\u679C\u4F60\u9700\u8981\u5168\u5C40\u6CE8\u518C @fe6/water-pro \u7EC4\u4EF6\u5E93\uFF0C\u90A3\u4E48 <code>use(DatePicker)</code> <code>use(TimePicker)</code> <code>use(Calendar)</code> \u5FC5\u987B\u5728 <code>use(waterPro)</code> \u4E4B\u524D\u6267\u884C\uFF0C\u5426\u5219\u65E0\u6CD5\u8986\u76D6\u9ED8\u8BA4\u7684 dayjs \u7248\u672C\u3002</p>
</blockquote>
`,lastUpdated:1701878244061}},p={class:"markdown"},o=s(`<h1 id="\u81EA\u5B9A\u4E49\u65F6\u95F4\u5E93">\u81EA\u5B9A\u4E49\u65F6\u95F4\u5E93 <a class="header-anchor" href="#\u81EA\u5B9A\u4E49\u65F6\u95F4\u5E93"><span aria-hidden="true" class="anchor">#</span></a></h1><p>\u5728 V4 \u7248\u672C\u5F00\u59CB\uFF0C\u9ED8\u8BA4\u4F7F\u7528 dayjs \u66FF\u6362\u4E86 momentjs \u5E93\uFF0C\u5982\u679C\u4F60\u9700\u8981\u4F7F\u7528 momentjs \u6216\u8005 date-fns \u65E5\u671F\u5E93\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u5982\u4E0B\u65B9\u5F0F\u66FF\u6362\uFF1A</p><h3 id="\u66FF\u6362-DatePicker">\u66FF\u6362 DatePicker <a class="header-anchor" href="#\u66FF\u6362-DatePicker"><span aria-hidden="true" class="anchor">#</span></a></h3><pre class="language-js"><code><span class="token comment">// moment \u6216\u8005 date-fns</span>
<span class="token keyword">import</span> DatePicker <span class="token keyword">from</span> <span class="token string">&#39;@fe6/water-pro/es/date-picker/moment&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> TimePicker <span class="token keyword">from</span> <span class="token string">&#39;@fe6/water-pro/es/time-picker/moment&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> Calendar <span class="token keyword">from</span> <span class="token string">&#39;@fe6/water-pro/es/calendar/moment&#39;</span><span class="token punctuation">;</span>
<span class="token comment">// import DatePicker from &#39;@fe6/water-pro/es/date-picker/date-fns&#39;;</span>
<span class="token comment">// import TimePicker from &#39;@fe6/water-pro/es/time-picker/date-fns&#39;;</span>
<span class="token comment">// import Calendar from &#39;@fe6/water-pro/es/calendar/date-fns&#39;;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> antd <span class="token keyword">from</span> <span class="token string">&#39;@fe6/water-pro&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>DatePicker<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>TimePicker<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Calendar<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>antd<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><blockquote><p>\u6CE8\u610F: \u5982\u679C\u4F60\u9700\u8981\u5168\u5C40\u6CE8\u518C @fe6/water-pro \u7EC4\u4EF6\u5E93\uFF0C\u90A3\u4E48 <code>use(DatePicker)</code> <code>use(TimePicker)</code> <code>use(Calendar)</code> \u5FC5\u987B\u5728 <code>use(waterPro)</code> \u4E4B\u524D\u6267\u884C\uFF0C\u5426\u5219\u65E0\u6CD5\u8986\u76D6\u9ED8\u8BA4\u7684 dayjs \u7248\u672C\u3002</p></blockquote>`,5),c=[o];function r(i,k,u,l,m,d){return a(),n("article",p,c)}var h=e(t,[["render",r]]);export{h as default};

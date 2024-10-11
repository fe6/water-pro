import{E as n,J as a,cb as s}from"./vendor.0f0e4632.js";import{_ as e}from"./index.f6b32fa6.js";const t={pageData:{title:"custom date library",description:"",frontmatter:{},headers:[{level:3,title:"\u66FF\u6362 DatePicker",slug:"\u66FF\u6362-DatePicker",content:""}],relativePath:"site/src/vueDocs/replace-date.en-US.md",content:`# custom date library

Starting from the V4 version, the momentjs library is replaced by dayjs by default. If you need to use the momentjs or date-fns date library, you can replace it as follows:

### \u66FF\u6362 DatePicker

\`\`\`js
// moment or date-fns
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

&gt; Note: If you need to register the ant-design-vue component library globally, then \`use(DatePicker)\` \`use(TimePicker)\` \`use(Calendar)\` must be executed before \`use(antd)\`, otherwise the default cannot be overridden dayjs version.
`,html:`<h1 id="custom-date-library">custom date library <a class="header-anchor" href="#custom-date-library">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h1>
<p>Starting from the V4 version, the momentjs library is replaced by dayjs by default. If you need to use the momentjs or date-fns date library, you can replace it as follows:</p>
<h3 id="\u66FF\u6362-DatePicker">\u66FF\u6362 DatePicker <a class="header-anchor" href="#\u66FF\u6362-DatePicker">
          <span aria-hidden="true" class="anchor">#</span>
        </a></h3>
<pre class="language-js" v-pre><code><span class="token comment">// moment or date-fns</span>
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
<p>Note: If you need to register the ant-design-vue component library globally, then <code>use(DatePicker)</code> <code>use(TimePicker)</code> <code>use(Calendar)</code> must be executed before <code>use(antd)</code>, otherwise the default cannot be overridden dayjs version.</p>
</blockquote>
`,lastUpdated:1701878244061}},o={class:"markdown"},p=s(`<h1 id="custom-date-library">custom date library <a class="header-anchor" href="#custom-date-library"><span aria-hidden="true" class="anchor">#</span></a></h1><p>Starting from the V4 version, the momentjs library is replaced by dayjs by default. If you need to use the momentjs or date-fns date library, you can replace it as follows:</p><h3 id="\u66FF\u6362-DatePicker">\u66FF\u6362 DatePicker <a class="header-anchor" href="#\u66FF\u6362-DatePicker"><span aria-hidden="true" class="anchor">#</span></a></h3><pre class="language-js"><code><span class="token comment">// moment or date-fns</span>
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
</code></pre><blockquote><p>Note: If you need to register the ant-design-vue component library globally, then <code>use(DatePicker)</code> <code>use(TimePicker)</code> <code>use(Calendar)</code> must be executed before <code>use(antd)</code>, otherwise the default cannot be overridden dayjs version.</p></blockquote>`,5),c=[p];function r(i,l,u,k,d,m){return a(),n("article",o,c)}var h=e(t,[["render",r]]);export{h as default};

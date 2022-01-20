import{d as b,cz as L,bS as X,cA as $,cB as Y,k as h,j as k,Y as a,bw as l,bx as i,by as e,b as t,bz as f,c8 as q,F as C,D as O,bV as z,bO as T}from"./vendor.846be9ce.js";var V=`<cn>
#### \u57FA\u672C\u8BC4\u8BBA
\u4E00\u4E2A\u57FA\u672C\u7684\u8BC4\u8BBA\u7EC4\u4EF6\uFF0C\u5E26\u6709\u4F5C\u8005\u3001\u5934\u50CF\u3001\u65F6\u95F4\u548C\u64CD\u4F5C\u3002
</cn>

<us>
#### Basic comment
A basic comment with author, avatar, time and actions.
</us>
`,H=b({components:{LikeFilled:L,LikeOutlined:X,DislikeFilled:$,DislikeOutlined:Y},setup(){const n=h(0),s=h(0),o=h();return{likes:n,dislikes:s,action:o,like:()=>{n.value=1,s.value=0,o.value="liked"},dislike:()=>{n.value=0,s.value=1,o.value="disliked"},moment:k}}});const R={key:"comment-basic-like"},N={style:{"padding-left":"8px",cursor:"auto"}},W={key:"comment-basic-dislike"},w={style:{"padding-left":"8px",cursor:"auto"}},F=t("span",{key:"comment-basic-reply-to"},"Reply to",-1),M=t("a",null,"Han Solo",-1),B=t("p",null," We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently. ",-1);function I(n,s,o,p,g,S){const m=a("LikeFilled"),y=a("LikeOutlined"),c=a("a-tooltip"),_=a("DislikeFilled"),r=a("DislikeOutlined"),d=a("a-avatar"),v=a("a-comment");return l(),i(v,null,{actions:e(()=>[t("span",R,[t(c,{title:"Like"},{default:e(()=>[n.action==="liked"?(l(),i(m,{key:0,onClick:n.like},null,8,["onClick"])):(l(),i(y,{key:1,onClick:n.like},null,8,["onClick"]))]),_:1}),t("span",N,f(n.likes),1)]),t("span",W,[t(c,{title:"Dislike"},{default:e(()=>[n.action==="disliked"?(l(),i(_,{key:0,onClick:n.dislike},null,8,["onClick"])):(l(),i(r,{key:1,onClick:n.dislike},null,8,["onClick"]))]),_:1}),t("span",w,f(n.dislikes),1)]),F]),author:e(()=>[M]),avatar:e(()=>[t(d,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",alt:"Han Solo"})]),content:e(()=>[B]),datetime:e(()=>[t(c,{title:n.moment().format("YYYY-MM-DD HH:mm:ss")},{default:e(()=>[t("span",null,f(n.moment().fromNow()),1)]),_:1},8,["title"])]),_:1})}H.render=I;var E=`<template>
  <a-comment>
    <template #actions>
      <span key="comment-basic-like">
        <a-tooltip title="Like">
          <template v-if="action === 'liked'">
            <LikeFilled @click="like" />
          </template>
          <template v-else>
            <LikeOutlined @click="like" />
          </template>
        </a-tooltip>
        <span style="padding-left: 8px; cursor: auto">
          {{ likes }}
        </span>
      </span>
      <span key="comment-basic-dislike">
        <a-tooltip title="Dislike">
          <template v-if="action === 'disliked'">
            <DislikeFilled @click="dislike" />
          </template>
          <template v-else>
            <DislikeOutlined @click="dislike" />
          </template>
        </a-tooltip>
        <span style="padding-left: 8px; cursor: auto">
          {{ dislikes }}
        </span>
      </span>
      <span key="comment-basic-reply-to">Reply to</span>
    </template>
    <template #author><a>Han Solo</a></template>
    <template #avatar>
      <a-avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
    </template>
    <template #content>
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure), to help people create their product prototypes beautifully and
        efficiently.
      </p>
    </template>
    <template #datetime>
      <a-tooltip :title="moment().format('YYYY-MM-DD HH:mm:ss')">
        <span>{{ moment().fromNow() }}</span>
      </a-tooltip>
    </template>
  </a-comment>
</template>
<script lang="ts">
import moment from 'moment';
import { LikeFilled, LikeOutlined, DislikeFilled, DislikeOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    LikeFilled,
    LikeOutlined,
    DislikeFilled,
    DislikeOutlined,
  },
  setup() {
    const likes = ref<number>(0);
    const dislikes = ref<number>(0);
    const action = ref<string>();

    const like = () => {
      likes.value = 1;
      dislikes.value = 0;
      action.value = 'liked';
    };

    const dislike = () => {
      likes.value = 0;
      dislikes.value = 1;
      action.value = 'disliked';
    };

    return {
      likes,
      dislikes,
      action,
      like,
      dislike,
      moment,
    };
  },
});
<\/script>
`,U=`<cn>
#### \u56DE\u590D\u6846
\u8BC4\u8BBA\u7F16\u8F91\u5668\u7EC4\u4EF6\u63D0\u4F9B\u4E86\u76F8\u540C\u6837\u5F0F\u7684\u5C01\u88C5\u4EE5\u652F\u6301\u81EA\u5B9A\u4E49\u8BC4\u8BBA\u7F16\u8F91\u5668\u3002
</cn>

<us>
#### Reply Editor
Comment can be used as editor, user can customize the editor component.
</us>
`,x=b({setup(){const n=h([]),s=h(!1),o=h("");return{comments:n,submitting:s,value:o,handleSubmit:()=>{!o.value||(s.value=!0,setTimeout(()=>{s.value=!1,n.value=[{author:"Han Solo",avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",content:o.value,datetime:k().fromNow()},...n.value],o.value=""},1e3))}}}});const P=O(" Add Comment ");function G(n,s,o,p,g,S){const m=a("a-comment"),y=a("a-list-item"),c=a("a-list"),_=a("a-avatar"),r=a("a-textarea"),d=a("a-form-item"),v=a("a-button");return l(),i(C,null,[n.comments.length?(l(),i(c,{key:0,"data-source":n.comments,header:`${n.comments.length} ${n.comments.length>1?"replies":"reply"}`,"item-layout":"horizontal"},{renderItem:e(({item:u})=>[t(y,null,{default:e(()=>[t(m,{author:u.author,avatar:u.avatar,content:u.content,datetime:u.datetime},null,8,["author","avatar","content","datetime"])]),_:2},1024)]),_:1},8,["data-source","header"])):q("v-if",!0),t(m,null,{avatar:e(()=>[t(_,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",alt:"Han Solo"})]),content:e(()=>[t(d,null,{default:e(()=>[t(r,{rows:4,value:n.value,"onUpdate:value":s[1]||(s[1]=u=>n.value=u)},null,8,["value"])]),_:1}),t(d,null,{default:e(()=>[t(v,{"html-type":"submit",loading:n.submitting,type:"primary",onClick:n.handleSubmit},{default:e(()=>[P]),_:1},8,["loading","onClick"])]),_:1})]),_:1})],64)}x.render=G;var J=`<template>
  <a-list
    v-if="comments.length"
    :data-source="comments"
    :header="\`\${comments.length} \${comments.length > 1 ? 'replies' : 'reply'}\`"
    item-layout="horizontal"
  >
    <template #renderItem="{ item }">
      <a-list-item>
        <a-comment
          :author="item.author"
          :avatar="item.avatar"
          :content="item.content"
          :datetime="item.datetime"
        />
      </a-list-item>
    </template>
  </a-list>
  <a-comment>
    <template #avatar>
      <a-avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
    </template>
    <template #content>
      <a-form-item>
        <a-textarea :rows="4" v-model:value="value" />
      </a-form-item>
      <a-form-item>
        <a-button html-type="submit" :loading="submitting" type="primary" @click="handleSubmit">
          Add Comment
        </a-button>
      </a-form-item>
    </template>
  </a-comment>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import moment from 'moment';

type Comment = Record<string, string>;

export default defineComponent({
  setup() {
    const comments = ref<Comment[]>([]);
    const submitting = ref<boolean>(false);
    const value = ref<string>('');
    const handleSubmit = () => {
      if (!value.value) {
        return;
      }

      submitting.value = true;

      setTimeout(() => {
        submitting.value = false;
        comments.value = [
          {
            author: 'Han Solo',
            avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
            content: value.value,
            datetime: moment().fromNow(),
          },
          ...comments.value,
        ];
        value.value = '';
      }, 1000);
    };

    return {
      comments,
      submitting,
      value,
      handleSubmit,
    };
  },
});
<\/script>
`,K=`<cn>
#### \u914D\u5408 List \u7EC4\u4EF6
\u914D\u5408 List \u7EC4\u4EF6\u5C55\u73B0\u8BC4\u8BBA\u5217\u8868\u3002
</cn>

<us>
#### Usage with list
Displaying a series of comments using the \`antd\` List Component.
</us>
`,D=b({setup(){return{data:[{actions:["Reply to"],author:"Han Solo",avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",content:"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",datetime:k().subtract(1,"days")},{actions:["Reply to"],author:"Han Solo",avatar:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",content:"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",datetime:k().subtract(2,"days")}],moment:k}}});function Q(n,s,o,p,g,S){const m=a("a-tooltip"),y=a("a-comment"),c=a("a-list-item"),_=a("a-list");return l(),i(_,{class:"comment-list",header:`${n.data.length} replies`,"item-layout":"horizontal","data-source":n.data},{renderItem:e(({item:r})=>[t(c,null,{default:e(()=>[t(y,{author:r.author,avatar:r.avatar},{actions:e(()=>[(l(!0),i(C,null,z(r.actions,(d,v)=>(l(),i("span",{key:v},f(d),1))),128))]),content:e(()=>[t("p",null,f(r.content),1)]),datetime:e(()=>[t(m,{title:r.datetime.format("YYYY-MM-DD HH:mm:ss")},{default:e(()=>[t("span",null,f(r.datetime.fromNow()),1)]),_:2},1032,["title"])]),_:2},1032,["author","avatar"])]),_:2},1024)]),_:1},8,["header","data-source"])}D.render=Q;var Z=`<template>
  <a-list
    class="comment-list"
    :header="\`\${data.length} replies\`"
    item-layout="horizontal"
    :data-source="data"
  >
    <template #renderItem="{ item }">
      <a-list-item>
        <a-comment :author="item.author" :avatar="item.avatar">
          <template #actions>
            <span v-for="(action, index) in item.actions" :key="index">{{ action }}</span>
          </template>
          <template #content>
            <p>
              {{ item.content }}
            </p>
          </template>
          <template #datetime>
            <a-tooltip :title="item.datetime.format('YYYY-MM-DD HH:mm:ss')">
              <span>{{ item.datetime.fromNow() }}</span>
            </a-tooltip>
          </template>
        </a-comment>
      </a-list-item>
    </template>
  </a-list>
</template>
<script lang="ts">
import moment from 'moment';
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {
      data: [
        {
          actions: ['Reply to'],
          author: 'Han Solo',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          datetime: moment().subtract(1, 'days'),
        },
        {
          actions: ['Reply to'],
          author: 'Han Solo',
          avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content:
            'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
          datetime: moment().subtract(2, 'days'),
        },
      ],
      moment,
    };
  },
});
<\/script>
`,tt=`<cn>
#### \u5D4C\u5957\u8BC4\u8BBA
\u8BC4\u8BBA\u53EF\u4EE5\u5D4C\u5957\u3002
</cn>

<us>
#### Nested comments
Comments can be nested.
</us>
`;const A={},et=t("span",{key:"comment-nested-reply-to"},"Reply to",-1),nt=t("a",null,"Han Solo",-1),at=t("p",null," We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure). ",-1),ot=t("span",null,"Reply to",-1),st=t("a",null,"Han Solo",-1),lt=t("p",null," We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure). ",-1),it=t("span",null,"Reply to",-1),rt=t("a",null,"Han Solo",-1),pt=t("p",null," We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure). ",-1),ct=t("span",null,"Reply to",-1),mt=t("a",null,"Han Solo",-1),dt=t("p",null," We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure). ",-1);function ut(n,s){const o=a("a-avatar"),p=a("a-comment");return l(),i(p,null,{actions:e(()=>[et]),author:e(()=>[nt]),avatar:e(()=>[t(o,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",alt:"Han Solo"})]),content:e(()=>[at]),default:e(()=>[t(p,null,{actions:e(()=>[ot]),author:e(()=>[st]),avatar:e(()=>[t(o,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",alt:"Han Solo"})]),content:e(()=>[lt]),default:e(()=>[t(p,null,{actions:e(()=>[it]),author:e(()=>[rt]),avatar:e(()=>[t(o,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",alt:"Han Solo"})]),content:e(()=>[pt]),_:1}),t(p,null,{actions:e(()=>[ct]),author:e(()=>[mt]),avatar:e(()=>[t(o,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",alt:"Han Solo"})]),content:e(()=>[dt]),_:1})]),_:1})]),_:1})}A.render=ut;var ht=A,ft=`<template>
  <a-comment>
    <template #actions>
      <span key="comment-nested-reply-to">Reply to</span>
    </template>
    <template #author>
      <a>Han Solo</a>
    </template>
    <template #avatar>
      <a-avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        alt="Han Solo"
      />
    </template>
    <template #content>
      <p>
        We supply a series of design principles, practical patterns and high quality design
        resources (Sketch and Axure).
      </p>
    </template>
    <a-comment>
      <template #actions>
        <span>Reply to</span>
      </template>
      <template #author>
        <a>Han Solo</a>
      </template>
      <template #avatar>
        <a-avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="Han Solo"
        />
      </template>
      <template #content>
        <p>
          We supply a series of design principles, practical patterns and high quality design
          resources (Sketch and Axure).
        </p>
      </template>
      <a-comment>
        <template #actions>
          <span>Reply to</span>
        </template>
        <template #author>
          <a>Han Solo</a>
        </template>
        <template #avatar>
          <a-avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        </template>
        <template #content>
          <p>
            We supply a series of design principles, practical patterns and high quality design
            resources (Sketch and Axure).
          </p>
        </template>
      </a-comment>
      <a-comment>
        <template #actions>
          <span>Reply to</span>
        </template>
        <template #author>
          <a>Han Solo</a>
        </template>
        <template #avatar>
          <a-avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
        </template>
        <template #content>
          <p>
            We supply a series of design principles, practical patterns and high quality design
            resources (Sketch and Axure).
          </p>
        </template>
      </a-comment>
    </a-comment>
  </a-comment>
</template>
`;const yt={class:"markdown-body"},_t=T("<h2>API</h2><table><thead><tr><th>Property</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td>actions</td><td>\u5728\u8BC4\u8BBA\u5185\u5BB9\u4E0B\u9762\u5448\u73B0\u7684\u64CD\u4F5C\u9879\u5217\u8868</td><td>Array|slot</td><td>-</td></tr><tr><td>author</td><td>\u8981\u663E\u793A\u4E3A\u6CE8\u91CA\u4F5C\u8005\u7684\u5143\u7D20</td><td>string|slot</td><td>-</td></tr><tr><td>avatar</td><td>\u8981\u663E\u793A\u4E3A\u8BC4\u8BBA\u5934\u50CF\u7684\u5143\u7D20 - \u901A\u5E38\u662F antd <code>Avatar</code> \u6216\u8005 src</td><td>string|slot</td><td>-</td></tr><tr><td>content</td><td>\u8BC4\u8BBA\u7684\u4E3B\u8981\u5185\u5BB9</td><td>string|slot</td><td>-</td></tr><tr><td>datetime</td><td>\u5C55\u793A\u65F6\u95F4\u63CF\u8FF0</td><td>string|slot</td><td>-</td></tr></tbody></table>",2),vt={expose:[],setup(n){return(s,o)=>(l(),i("div",yt,[_t]))}};var kt=vt;const j={cn:`# Comment\u8BC4\u8BBA
\u5BF9\u7F51\u7AD9\u5185\u5BB9\u7684\u53CD\u9988\u3001\u8BC4\u4EF7\u548C\u8BA8\u8BBA\u3002

## \u4F55\u65F6\u4F7F\u7528

\u8BC4\u8BBA\u7EC4\u4EF6\u53EF\u7528\u4E8E\u5BF9\u4E8B\u7269\u7684\u8BA8\u8BBA\uFF0C\u4F8B\u5982\u9875\u9762\u3001\u535A\u5BA2\u6587\u7AE0\u3001\u95EE\u9898\u7B49\u7B49\u3002`,us:`# Comment
A comment displays user feedback and discussion to website content.

## When To Use

Comments can be used to enable discussions on an entity such as a page, blog post, issue or other.`};var bt={category:"Components",type:"Data Display",zhType:"\u6570\u636E\u5C55\u793A",title:"Comment",subtitle:"\u8BC4\u8BBA",cols:1,render(){return t("div",null,[t(a("Md"),{cn:j.cn,us:j.us},null),t(a("demo-sort"),{cols:1},{default:()=>[t(a("demo-container"),{api:V,code:E},{default:()=>[t(H,null,null)]}),t(a("demo-container"),{api:K,code:Z},{default:()=>[t(D,null,null)]}),t(a("demo-container"),{api:tt,code:ft},{default:()=>[t(ht,null,null)]}),t(a("demo-container"),{api:U,code:J},{default:()=>[t(x,null,null)]})]}),t(a("api"),null,{default:()=>[t(kt,null,null)]})])}};export{bt as default};

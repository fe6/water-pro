import{d as C,k as _,Y as a,bw as v,bx as b,b as e,by as t,F as D,D as l,bz as P,bF as I,ag as q,r as L,q as R,bO as F}from"./vendor.846be9ce.js";var x=C({setup(){const n=_(!1);return{visible:n,afterVisibleChange:u=>{console.log("visible",u)},showDrawer:()=>{n.value=!0}}}});const j=l("Open"),z=e("p",null,"Some contents...",-1),H=e("p",null,"Some contents...",-1),E=e("p",null,"Some contents...",-1);function X(n,o,s,u,f,g){const d=a("a-button"),m=a("a-drawer");return v(),b(D,null,[e(d,{type:"primary",onClick:n.showDrawer},{default:t(()=>[j]),_:1},8,["onClick"]),e(m,{title:"Basic Drawer",placement:"right",closable:!1,visible:n.visible,"onUpdate:visible":o[1]||(o[1]=w=>n.visible=w),"after-visible-change":n.afterVisibleChange},{default:t(()=>[z,H,E]),_:1},8,["visible","after-visible-change"])],64)}x.render=X;var W=`<cn>
#### \u57FA\u7840\u62BD\u5C49
\u57FA\u7840\u62BD\u5C49\uFF0C\u70B9\u51FB\u89E6\u53D1\u6309\u94AE\u62BD\u5C49\u4ECE\u53F3\u6ED1\u51FA\uFF0C\u70B9\u51FB\u906E\u7F69\u533A\u5173\u95ED
</cn>

<us>
#### Basic
Basic drawer.
</us>
`,J=`<template>
  <a-button type="primary" @click="showDrawer">Open</a-button>
  <a-drawer
    title="Basic Drawer"
    placement="right"
    :closable="false"
    v-model:visible="visible"
    :after-visible-change="afterVisibleChange"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const visible = ref<boolean>(false);

    const afterVisibleChange = (bool: boolean) => {
      console.log('visible', bool);
    };

    const showDrawer = () => {
      visible.value = true;
    };

    return {
      visible,
      afterVisibleChange,
      showDrawer,
    };
  },
});
<\/script>
`,T=C({setup(){const n=_("left"),o=_(!1);return{placement:n,visible:o,showDrawer:()=>{o.value=!0},onClose:()=>{o.value=!1}}}});const Z=l("top"),G=l("right"),Y=l("bottom"),K=l("left"),Q=l("Open"),ee=e("p",null,"Some contents...",-1),te=e("p",null,"Some contents...",-1),ne=e("p",null,"Some contents...",-1);function oe(n,o,s,u,f,g){const d=a("a-radio"),m=a("a-radio-group"),w=a("a-button"),h=a("a-drawer");return v(),b(D,null,[e(m,{style:{"margin-right":"8px"},value:n.placement,"onUpdate:value":o[1]||(o[1]=r=>n.placement=r)},{default:t(()=>[e(d,{value:"top"},{default:t(()=>[Z]),_:1}),e(d,{value:"right"},{default:t(()=>[G]),_:1}),e(d,{value:"bottom"},{default:t(()=>[Y]),_:1}),e(d,{value:"left"},{default:t(()=>[K]),_:1})]),_:1},8,["value"]),e(w,{type:"primary",onClick:n.showDrawer},{default:t(()=>[Q]),_:1},8,["onClick"]),e(h,{title:"Basic Drawer",placement:n.placement,closable:!1,visible:n.visible,onClose:n.onClose},{default:t(()=>[ee,te,ne]),_:1},8,["placement","visible","onClose"])],64)}T.render=oe;var ae=`<cn>
#### \u81EA\u5B9A\u4E49\u4F4D\u7F6E
\u81EA\u5B9A\u4E49\u4F4D\u7F6E\uFF0C\u70B9\u51FB\u89E6\u53D1\u6309\u94AE\u62BD\u5C49\u4ECE\u76F8\u5E94\u7684\u4F4D\u7F6E\u6ED1\u51FA\uFF0C\u70B9\u51FB\u906E\u7F69\u533A\u5173\u95ED
</cn>

<us>
#### Custom Placement
The Drawer can appear from any edge of the screen.
</us>
`,re=`<template>
  <a-radio-group style="margin-right: 8px" v-model:value="placement">
    <a-radio value="top">top</a-radio>
    <a-radio value="right">right</a-radio>
    <a-radio value="bottom">bottom</a-radio>
    <a-radio value="left">left</a-radio>
  </a-radio-group>
  <a-button type="primary" @click="showDrawer">Open</a-button>
  <a-drawer
    title="Basic Drawer"
    :placement="placement"
    :closable="false"
    :visible="visible"
    @close="onClose"
  >
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </a-drawer>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const placement = ref<string>('left');
    const visible = ref<boolean>(false);

    const showDrawer = () => {
      visible.value = true;
    };

    const onClose = () => {
      visible.value = false;
    };
    return {
      placement,
      visible,
      showDrawer,
      onClose,
    };
  },
});
<\/script>
`;const B={props:{title:String,content:String}},le={style:{fontSize:"14px",lineHeight:"22px",marginBottom:"7px",color:"rgba(0,0,0,0.65)"}},se={style:{marginRight:"8px",display:"inline-block",color:"rgba(0,0,0,0.85)"}};function ie(n,o,s,u,f,g){return v(),b("div",le,[e("p",se,P(s.title),1),s.content?(v(),b(D,{key:0},[l(P(s.content),1)],2112)):I(n.$slots,"content",{key:1})])}B.render=ie;var de=B,M=C({components:{descriptionItem:de},setup(){const n=_(!1);return{visible:n,pStyle:{fontSize:"16px",color:"rgba(0,0,0,0.85)",lineHeight:"24px",display:"block",marginBottom:"16px"},pStyle2:{marginBottom:"24px"},showDrawer:()=>{n.value=!0},onClose:()=>{n.value=!1}}}});const ce={href:"https://www.antdv.com/"},pe=e("a",null,"Lin",-1),ue=e("a",{href:"https://github.com/vueComponent/ant-design-vue"}," github.com/vueComponent/ant-design-vue ",-1);function me(n,o,s,u,f,g){const d=a("a-avatar"),m=a("a-list-item-meta"),w=a("a-list-item"),h=a("a-list"),r=a("description-item"),i=a("a-col"),c=a("a-row"),y=a("a-divider"),$=a("a-drawer");return v(),b(D,null,[e(h,{"data-source":[{name:"Lily"},{name:"Lily"}],bordered:""},{renderItem:t(({item:k})=>[e(w,{key:`a-${k.id}`},{actions:t(()=>[e("a",{onClick:o[1]||(o[1]=(...S)=>n.showDrawer&&n.showDrawer(...S))},"View Profile")]),default:t(()=>[e(m,{description:"Progresser XTech"},{title:t(()=>[e("a",ce,P(k.name),1)]),avatar:t(()=>[e(d,{src:"https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png"})]),_:2},1024)]),_:2},1024)]),_:1}),e($,{width:"640",placement:"right",closable:!1,visible:n.visible,onClose:n.onClose},{default:t(()=>[e("p",{style:[n.pStyle,n.pStyle2]},"User Profile",4),e("p",{style:n.pStyle},"Personal",4),e(c,null,{default:t(()=>[e(i,{span:12},{default:t(()=>[e(r,{title:"Full Name",content:"Lily"})]),_:1}),e(i,{span:12},{default:t(()=>[e(r,{title:"Account",content:"AntDesign@example.com"})]),_:1})]),_:1}),e(c,null,{default:t(()=>[e(i,{span:12},{default:t(()=>[e(r,{title:"City",content:"HangZhou"})]),_:1}),e(i,{span:12},{default:t(()=>[e(r,{title:"Country",content:"China\u{1F1E8}\u{1F1F3}"})]),_:1})]),_:1}),e(c,null,{default:t(()=>[e(i,{span:12},{default:t(()=>[e(r,{title:"Birthday",content:"February 2,1900"})]),_:1}),e(i,{span:12},{default:t(()=>[e(r,{title:"Website",content:"-"})]),_:1})]),_:1}),e(c,null,{default:t(()=>[e(i,{span:12},{default:t(()=>[e(r,{title:"Message",content:"Make things as simple as possible but no simpler."})]),_:1})]),_:1}),e(y),e("p",{style:n.pStyle},"Company",4),e(c,null,{default:t(()=>[e(i,{span:12},{default:t(()=>[e(r,{title:"Position",content:"Programmer"})]),_:1}),e(i,{span:12},{default:t(()=>[e(r,{title:"Responsibilities",content:"Coding"})]),_:1})]),_:1}),e(c,null,{default:t(()=>[e(i,{span:12},{default:t(()=>[e(r,{title:"Department",content:"XTech"})]),_:1}),e(i,{span:12},{default:t(()=>[e(r,{title:"Supervisor"},{content:t(()=>[pe]),_:1})]),_:1})]),_:1}),e(c,null,{default:t(()=>[e(i,{span:24},{default:t(()=>[e(r,{title:"Skills",content:"C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."})]),_:1})]),_:1}),e(y),e("p",{style:n.pStyle},"Contacts",4),e(c,null,{default:t(()=>[e(i,{span:12},{default:t(()=>[e(r,{title:"Email",content:"ant-design-vue@example.com"})]),_:1}),e(i,{span:12},{default:t(()=>[e(r,{title:"Phone Number",content:"+86 181 0000 0000"})]),_:1})]),_:1}),e(c,null,{default:t(()=>[e(i,{span:24},{default:t(()=>[e(r,{title:"Github"},{content:t(()=>[ue]),_:1})]),_:1})]),_:1})]),_:1},8,["visible","onClose"])],64)}M.render=me;var fe=`<cn>
#### \u4FE1\u606F\u9884\u89C8\u62BD\u5C49
\u9700\u8981\u5FEB\u901F\u9884\u89C8\u5BF9\u8C61\u6982\u8981\u65F6\u4F7F\u7528\uFF0C\u70B9\u51FB\u906E\u7F69\u533A\u5173\u95ED\u3002
</cn>

<us>
#### Preview drawer
Use Drawer to quickly preview details of an object, such as those in a list.
</us>
`,he=`<template>
  <a-list
    :data-source="[
      {
        name: 'Lily',
      },
      {
        name: 'Lily',
      },
    ]"
    bordered
  >
    <template #renderItem="{ item }">
      <a-list-item :key="\`a-\${item.id}\`">
        <template #actions><a @click="showDrawer">View Profile</a></template>
        <a-list-item-meta description="Progresser XTech">
          <template #title>
            <a href="https://www.antdv.com/">{{ item.name }}</a>
          </template>
          <template #avatar>
            <a-avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
          </template>
        </a-list-item-meta>
      </a-list-item>
    </template>
  </a-list>
  <a-drawer width="640" placement="right" :closable="false" :visible="visible" @close="onClose">
    <p :style="[pStyle, pStyle2]">User Profile</p>
    <p :style="pStyle">Personal</p>
    <a-row>
      <a-col :span="12">
        <description-item title="Full Name" content="Lily" />
      </a-col>
      <a-col :span="12">
        <description-item title="Account" content="AntDesign@example.com" />
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="12">
        <description-item title="City" content="HangZhou" />
      </a-col>
      <a-col :span="12">
        <description-item title="Country" content="China\u{1F1E8}\u{1F1F3}" />
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="12">
        <description-item title="Birthday" content="February 2,1900" />
      </a-col>
      <a-col :span="12">
        <description-item title="Website" content="-" />
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="12">
        <description-item
          title="Message"
          content="Make things as simple as possible but no simpler."
        />
      </a-col>
    </a-row>
    <a-divider />
    <p :style="pStyle">Company</p>
    <a-row>
      <a-col :span="12">
        <description-item title="Position" content="Programmer" />
      </a-col>
      <a-col :span="12">
        <description-item title="Responsibilities" content="Coding" />
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="12">
        <description-item title="Department" content="XTech" />
      </a-col>
      <a-col :span="12">
        <description-item title="Supervisor">
          <template #content><a>Lin</a></template>
        </description-item>
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="24">
        <description-item
          title="Skills"
          content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
        />
      </a-col>
    </a-row>
    <a-divider />
    <p :style="pStyle">Contacts</p>
    <a-row>
      <a-col :span="12">
        <description-item title="Email" content="ant-design-vue@example.com" />
      </a-col>
      <a-col :span="12">
        <description-item title="Phone Number" content="+86 181 0000 0000" />
      </a-col>
    </a-row>
    <a-row>
      <a-col :span="24">
        <description-item title="Github">
          <template #content>
            <a href="https://github.com/vueComponent/ant-design-vue">
              github.com/vueComponent/ant-design-vue
            </a>
          </template>
        </description-item>
      </a-col>
    </a-row>
  </a-drawer>
</template>
<script lang="ts">
import descriptionItem from './descriptionItem.vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
  components: {
    descriptionItem,
  },
  setup() {
    const visible = ref<boolean>(false);
    const pStyle = {
      fontSize: '16px',
      color: 'rgba(0,0,0,0.85)',
      lineHeight: '24px',
      display: 'block',
      marginBottom: '16px',
    };
    const pStyle2 = {
      marginBottom: '24px',
    };

    const showDrawer = () => {
      visible.value = true;
    };
    const onClose = () => {
      visible.value = false;
    };
    return {
      visible,
      pStyle,
      pStyle2,
      showDrawer,
      onClose,
    };
  },
});
<\/script>
`,O=C({setup(){const n=_(!1),o=_(!1);return{visible:n,childrenDrawer:o,showDrawer:()=>{n.value=!0},onClose:()=>{n.value=!1},showChildrenDrawer:()=>{o.value=!0},onChildrenDrawerClose:()=>{o.value=!1}}}});const ve=l("Open"),be=l("Two-level drawer"),we=l("This is two-level drawer"),_e={style:{position:"absolute",bottom:0,width:"100%",borderTop:"1px solid #e8e8e8",padding:"10px 16px",textAlign:"right",left:0,background:"#fff",borderRadius:"0 0 4px 4px"}},ge=l("Cancel"),ye=l("Submit");function Ce(n,o,s,u,f,g){const d=a("a-button"),m=a("a-drawer");return v(),b(D,null,[e(d,{type:"primary",onClick:n.showDrawer},{default:t(()=>[ve]),_:1},8,["onClick"]),e(m,{title:"Multi-level drawer",width:"520",closable:!1,visible:n.visible,onClose:n.onClose},{default:t(()=>[e(d,{type:"primary",onClick:n.showChildrenDrawer},{default:t(()=>[be]),_:1},8,["onClick"]),e(m,{title:"Two-level Drawer",width:"320",closable:!1,visible:n.childrenDrawer,onClose:n.onChildrenDrawerClose},{default:t(()=>[e(d,{type:"primary",onClick:n.showChildrenDrawer},{default:t(()=>[we]),_:1},8,["onClick"])]),_:1},8,["visible","onClose"]),e("div",_e,[e(d,{style:{"margin-right":"8px"},onClick:n.onClose},{default:t(()=>[ge]),_:1},8,["onClick"]),e(d,{type:"primary",onClick:n.onClose},{default:t(()=>[ye]),_:1},8,["onClick"])])]),_:1},8,["visible","onClose"])],64)}O.render=Ce;var De=`<cn>
#### \u591A\u5C42\u62BD\u5C49
\u5728\u62BD\u5C49\u5185\u6253\u5F00\u65B0\u7684\u62BD\u5C49\uFF0C\u7528\u4EE5\u89E3\u51B3\u591A\u5206\u652F\u4EFB\u52A1\u7684\u590D\u6742\u72B6\u51B5\u3002
</cn>

<us>
#### Multi-level drawer
Open a new drawer on top of an existing drawer to handle multi branch tasks.
</us>
`,ke=`<template>
  <a-button type="primary" @click="showDrawer">Open</a-button>
  <a-drawer
    title="Multi-level drawer"
    width="520"
    :closable="false"
    :visible="visible"
    @close="onClose"
  >
    <a-button type="primary" @click="showChildrenDrawer">Two-level drawer</a-button>
    <a-drawer
      title="Two-level Drawer"
      width="320"
      :closable="false"
      :visible="childrenDrawer"
      @close="onChildrenDrawerClose"
    >
      <a-button type="primary" @click="showChildrenDrawer">This is two-level drawer</a-button>
    </a-drawer>
    <div
      :style="{
        position: 'absolute',
        bottom: 0,
        width: '100%',
        borderTop: '1px solid #e8e8e8',
        padding: '10px 16px',
        textAlign: 'right',
        left: 0,
        background: '#fff',
        borderRadius: '0 0 4px 4px',
      }"
    >
      <a-button style="margin-right: 8px" @click="onClose">Cancel</a-button>
      <a-button type="primary" @click="onClose">Submit</a-button>
    </div>
  </a-drawer>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const visible = ref<boolean>(false);

    const childrenDrawer = ref<boolean>(false);

    const showDrawer = () => {
      visible.value = true;
    };
    const onClose = () => {
      visible.value = false;
    };
    const showChildrenDrawer = () => {
      childrenDrawer.value = true;
    };
    const onChildrenDrawerClose = () => {
      childrenDrawer.value = false;
    };
    return {
      visible,
      childrenDrawer,
      showDrawer,
      onClose,
      showChildrenDrawer,
      onChildrenDrawerClose,
    };
  },
});
<\/script>
`,N=C({components:{PlusOutlined:q},setup(){const n=L({name:"",url:"",owner:"",type:"",approver:"",dateTime:"",description:""}),o={name:[{required:!0,message:"Please enter user name"}],url:[{required:!0,message:"please enter url"}],owner:[{required:!0,message:"Please select an owner"}],type:[{required:!0,message:"Please choose the type"}],approver:[{required:!0,message:"Please choose the approver"}],dateTime:[{required:!0,message:"Please choose the dateTime",type:"object"}],description:[{required:!0,message:"Please enter url description"}]},s=_(!1);return{form:n,rules:o,visible:s,showDrawer:()=>{s.value=!0},onClose:()=>{s.value=!1}}}});const $e=l(" New account "),Se=l("Xiaoxiao Fu"),Pe=l("Maomao Zhou"),xe=l("Private"),Te=l("Public"),Be=l("Jack Ma"),Me=l("Tom Liu"),Oe={style:{position:"absolute",right:0,bottom:0,width:"100%",borderTop:"1px solid #e9e9e9",padding:"10px 16px",background:"#fff",textAlign:"right",zIndex:1}},Ne=l("Cancel"),Ue=l("Submit");function Ve(n,o,s,u,f,g){const d=a("PlusOutlined"),m=a("a-button"),w=a("a-input"),h=a("a-form-item"),r=a("a-col"),i=a("a-row"),c=a("a-select-option"),y=a("a-select"),$=a("a-date-picker"),k=a("a-textarea"),S=a("a-form"),A=a("a-drawer");return v(),b(D,null,[e(m,{type:"primary",onClick:n.showDrawer},{default:t(()=>[e(d),$e]),_:1},8,["onClick"]),e(A,{title:"Create a new account",width:720,visible:n.visible,"body-style":{paddingBottom:"80px"},onClose:n.onClose},{default:t(()=>[e(S,{model:n.form,rules:n.rules,layout:"vertical"},{default:t(()=>[e(i,{gutter:16},{default:t(()=>[e(r,{span:12},{default:t(()=>[e(h,{label:"Name",name:"name"},{default:t(()=>[e(w,{value:n.form.name,"onUpdate:value":o[1]||(o[1]=p=>n.form.name=p),placeholder:"Please enter user name"},null,8,["value"])]),_:1})]),_:1}),e(r,{span:12},{default:t(()=>[e(h,{label:"Url",name:"url"},{default:t(()=>[e(w,{value:n.form.url,"onUpdate:value":o[2]||(o[2]=p=>n.form.url=p),style:{width:"100%"},"addon-before":"http://","addon-after":".com",placeholder:"please enter url"},null,8,["value"])]),_:1})]),_:1})]),_:1}),e(i,{gutter:16},{default:t(()=>[e(r,{span:12},{default:t(()=>[e(h,{label:"Owner",name:"owner"},{default:t(()=>[e(y,{placeholder:"Please a-s an owner",value:n.form.owner,"onUpdate:value":o[3]||(o[3]=p=>n.form.owner=p)},{default:t(()=>[e(c,{value:"xiao"},{default:t(()=>[Se]),_:1}),e(c,{value:"mao"},{default:t(()=>[Pe]),_:1})]),_:1},8,["value"])]),_:1})]),_:1}),e(r,{span:12},{default:t(()=>[e(h,{label:"Type",name:"type"},{default:t(()=>[e(y,{placeholder:"Please choose the type",value:n.form.type,"onUpdate:value":o[4]||(o[4]=p=>n.form.type=p)},{default:t(()=>[e(c,{value:"private"},{default:t(()=>[xe]),_:1}),e(c,{value:"public"},{default:t(()=>[Te]),_:1})]),_:1},8,["value"])]),_:1})]),_:1})]),_:1}),e(i,{gutter:16},{default:t(()=>[e(r,{span:12},{default:t(()=>[e(h,{label:"Approver",name:"approver"},{default:t(()=>[e(y,{placeholder:"Please choose the approver",value:n.form.approver,"onUpdate:value":o[5]||(o[5]=p=>n.form.approver=p)},{default:t(()=>[e(c,{value:"jack"},{default:t(()=>[Be]),_:1}),e(c,{value:"tom"},{default:t(()=>[Me]),_:1})]),_:1},8,["value"])]),_:1})]),_:1}),e(r,{span:12},{default:t(()=>[e(h,{label:"DateTime",name:"dateTime"},{default:t(()=>[e($,{value:n.form.dateTime,"onUpdate:value":o[6]||(o[6]=p=>n.form.dateTime=p),style:{width:"100%"},"get-popup-container":p=>p.parentNode},null,8,["value","get-popup-container"])]),_:1})]),_:1})]),_:1}),e(i,{gutter:16},{default:t(()=>[e(r,{span:24},{default:t(()=>[e(h,{label:"Description",name:"description"},{default:t(()=>[e(k,{value:n.form.description,"onUpdate:value":o[7]||(o[7]=p=>n.form.description=p),rows:4,placeholder:"please enter url description"},null,8,["value"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"]),e("div",Oe,[e(m,{style:{"margin-right":"8px"},onClick:n.onClose},{default:t(()=>[Ne]),_:1},8,["onClick"]),e(m,{type:"primary",onClick:n.onClose},{default:t(()=>[Ue]),_:1},8,["onClick"])])]),_:1},8,["visible","onClose"])],64)}N.render=Ve;var Ae=`<cn>
#### \u62BD\u5C49\u8868\u5355
\u5728\u62BD\u5C49\u4E2D\u4F7F\u7528\u8868\u5355\u3002
</cn>

<us>
#### Submit form in drawer
Use form in drawer with submit button.
</us>
`,Ie=`<template>
  <a-button type="primary" @click="showDrawer">
    <PlusOutlined />
    New account
  </a-button>
  <a-drawer
    title="Create a new account"
    :width="720"
    :visible="visible"
    :body-style="{ paddingBottom: '80px' }"
    @close="onClose"
  >
    <a-form :model="form" :rules="rules" layout="vertical">
      <a-row :gutter="16">
        <a-col :span="12">
          <a-form-item label="Name" name="name">
            <a-input v-model:value="form.name" placeholder="Please enter user name" />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="Url" name="url">
            <a-input
              v-model:value="form.url"
              style="width: 100%"
              addon-before="http://"
              addon-after=".com"
              placeholder="please enter url"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="12">
          <a-form-item label="Owner" name="owner">
            <a-select placeholder="Please a-s an owner" v-model:value="form.owner">
              <a-select-option value="xiao">Xiaoxiao Fu</a-select-option>
              <a-select-option value="mao">Maomao Zhou</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="Type" name="type">
            <a-select placeholder="Please choose the type" v-model:value="form.type">
              <a-select-option value="private">Private</a-select-option>
              <a-select-option value="public">Public</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="12">
          <a-form-item label="Approver" name="approver">
            <a-select placeholder="Please choose the approver" v-model:value="form.approver">
              <a-select-option value="jack">Jack Ma</a-select-option>
              <a-select-option value="tom">Tom Liu</a-select-option>
            </a-select>
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="DateTime" name="dateTime">
            <a-date-picker
              v-model:value="form.dateTime"
              style="width: 100%"
              :get-popup-container="trigger => trigger.parentNode"
            />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row :gutter="16">
        <a-col :span="24">
          <a-form-item label="Description" name="description">
            <a-textarea
              v-model:value="form.description"
              :rows="4"
              placeholder="please enter url description"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <div
      :style="{
        position: 'absolute',
        right: 0,
        bottom: 0,
        width: '100%',
        borderTop: '1px solid #e9e9e9',
        padding: '10px 16px',
        background: '#fff',
        textAlign: 'right',
        zIndex: 1,
      }"
    >
      <a-button style="margin-right: 8px" @click="onClose">Cancel</a-button>
      <a-button type="primary" @click="onClose">Submit</a-button>
    </div>
  </a-drawer>
</template>
<script lang="ts">
import { PlusOutlined } from '@ant-design/icons-vue';
import { defineComponent, reactive, ref } from 'vue';
export default defineComponent({
  components: {
    PlusOutlined,
  },
  setup() {
    const form = reactive({
      name: '',
      url: '',
      owner: '',
      type: '',
      approver: '',
      dateTime: '',
      description: '',
    });

    const rules = {
      name: [{ required: true, message: 'Please enter user name' }],
      url: [{ required: true, message: 'please enter url' }],
      owner: [{ required: true, message: 'Please select an owner' }],
      type: [{ required: true, message: 'Please choose the type' }],
      approver: [{ required: true, message: 'Please choose the approver' }],
      dateTime: [{ required: true, message: 'Please choose the dateTime', type: 'object' }],
      description: [{ required: true, message: 'Please enter url description' }],
    };

    const visible = ref<boolean>(false);

    const showDrawer = () => {
      visible.value = true;
    };

    const onClose = () => {
      visible.value = false;
    };
    return {
      form,
      rules,
      visible,
      showDrawer,
      onClose,
    };
  },
});
<\/script>
`,U=C({setup(){const n=_(!0),o=f=>{console.log("visible",f)},s=()=>{n.value=!0},u=()=>{n.value=!1};return R(()=>{n.value=!1}),{visible:n,afterVisibleChange:o,showDrawer:s,onClose:u}}});const qe={style:{height:"200px",overflow:"hidden",position:"relative",border:"1px solid #ebedf0",borderRadius:"2px",padding:"48px",textAlign:"center",background:"#fafafa",width:"100%"}},Le=l(" Render in this "),Re={style:{"margin-top":"16px"}},Fe=l("Open"),je=e("p",null,"Some contents...",-1);function ze(n,o,s,u,f,g){const d=a("a-button"),m=a("a-drawer");return v(),b("div",qe,[Le,e("div",Re,[e(d,{type:"primary",onClick:n.showDrawer},{default:t(()=>[Fe]),_:1},8,["onClick"])]),e(m,{title:"Basic Drawer",placement:"right",closable:!1,visible:n.visible,"get-container":!1,"wrap-style":{position:"absolute"},onClose:n.onClose},{default:t(()=>[je]),_:1},8,["visible","onClose"])])}U.render=ze;var He=`<cn>
#### \u6E32\u67D3\u5728\u5F53\u524D DOM
\u6E32\u67D3\u5728\u5F53\u524D dom \u91CC\u3002\u81EA\u5B9A\u4E49\u5BB9\u5668\uFF0C\u67E5\u770B getContainer\u3002
</cn>

<us>
#### Render in current dom
Render in current dom. custom container, check getContainer.
</us>
`,Ee=`<template>
  <div
    :style="{
      height: '200px',
      overflow: 'hidden',
      position: 'relative',
      border: '1px solid #ebedf0',
      borderRadius: '2px',
      padding: '48px',
      textAlign: 'center',
      background: '#fafafa',
      width: '100%',
    }"
  >
    Render in this
    <div style="margin-top: 16px">
      <a-button type="primary" @click="showDrawer">Open</a-button>
    </div>
    <a-drawer
      title="Basic Drawer"
      placement="right"
      :closable="false"
      :visible="visible"
      :get-container="false"
      :wrap-style="{ position: 'absolute' }"
      @close="onClose"
    >
      <p>Some contents...</p>
    </a-drawer>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
export default defineComponent({
  setup() {
    const visible = ref(true);

    const afterVisibleChange = (bool: boolean) => {
      console.log('visible', bool);
    };

    const showDrawer = () => {
      visible.value = true;
    };

    const onClose = () => {
      visible.value = false;
    };

    onMounted(() => {
      visible.value = false;
    });

    return {
      visible,
      afterVisibleChange,
      showDrawer,
      onClose,
    };
  },
});
<\/script>
`;const Xe={class:"markdown-body"},We=F("<h2>API</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>closable</td><td>\u662F\u5426\u663E\u793A\u53F3\u4E0A\u89D2\u7684\u5173\u95ED\u6309\u94AE</td><td>boolean</td><td>true</td><td></td></tr><tr><td>destroyOnClose</td><td>\u5173\u95ED\u65F6\u9500\u6BC1 Drawer \u91CC\u7684\u5B50\u5143\u7D20</td><td>boolean</td><td>false</td><td></td></tr><tr><td>getContainer</td><td>\u6307\u5B9A Drawer \u6302\u8F7D\u7684 HTML \u8282\u70B9</td><td>HTMLElement | <code>() =&gt; HTMLElement</code> | Selectors</td><td>\u2018body\u2019</td><td></td></tr><tr><td>maskClosable</td><td>\u70B9\u51FB\u8499\u5C42\u662F\u5426\u5141\u8BB8\u5173\u95ED</td><td>boolean</td><td>true</td><td></td></tr><tr><td>mask</td><td>\u662F\u5426\u5C55\u793A\u906E\u7F69</td><td>Boolean</td><td>true</td><td></td></tr><tr><td>maskStyle</td><td>\u906E\u7F69\u6837\u5F0F</td><td>object</td><td>{}</td><td></td></tr><tr><td>title</td><td>\u6807\u9898</td><td>string | slot</td><td>-</td><td></td></tr><tr><td>visible(v-model)</td><td>Drawer \u662F\u5426\u53EF\u89C1</td><td>boolean</td><td>-</td><td></td></tr><tr><td>wrapClassName</td><td>\u5BF9\u8BDD\u6846\u5916\u5C42\u5BB9\u5668\u7684\u7C7B\u540D</td><td>string</td><td>-</td><td></td></tr><tr><td>wrapStyle</td><td>\u53EF\u7528\u4E8E\u8BBE\u7F6E Drawer \u6700\u5916\u5C42\u5BB9\u5668\u7684\u6837\u5F0F\uFF0C\u548C <code>drawerStyle</code> \u7684\u533A\u522B\u662F\u4F5C\u7528\u8282\u70B9\u5305\u62EC <code>mask</code></td><td>object</td><td>-</td><td></td></tr><tr><td>drawerStyle</td><td>\u7528\u4E8E\u8BBE\u7F6E Drawer \u5F39\u51FA\u5C42\u7684\u6837\u5F0F</td><td>object</td><td>-</td><td>1.4.11</td></tr><tr><td>headerStyle</td><td>\u7528\u4E8E\u8BBE\u7F6E Drawer \u5934\u90E8\u7684\u6837\u5F0F</td><td>object</td><td>-</td><td>1.5.0</td></tr><tr><td>bodyStyle</td><td>\u53EF\u7528\u4E8E\u8BBE\u7F6E Drawer \u5185\u5BB9\u90E8\u5206\u7684\u6837\u5F0F</td><td>object</td><td>-</td><td></td></tr><tr><td>width</td><td>\u5BBD\u5EA6</td><td>string | number</td><td>256</td><td></td></tr><tr><td>height</td><td>\u9AD8\u5EA6, \u5728 <code>placement</code> \u4E3A <code>top</code> \u6216 <code>bottom</code> \u65F6\u4F7F\u7528</td><td>string | number</td><td>256</td><td></td></tr><tr><td>zIndex</td><td>\u8BBE\u7F6E Drawer \u7684 <code>z-index</code></td><td>Number</td><td>1000</td><td></td></tr><tr><td>placement</td><td>\u62BD\u5C49\u7684\u65B9\u5411</td><td>\u2018top\u2019 | \u2018right\u2019 | \u2018bottom\u2019 | \u2018left\u2019</td><td>\u2018right\u2019</td><td></td></tr><tr><td>handle</td><td>\u8BBE\u7F6E\u540E\u62BD\u5C49\u76F4\u63A5\u6302\u8F7D\u5230 DOM \u4E0A\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u8BE5 handle \u63A7\u5236\u62BD\u5C49\u6253\u5F00\u5173\u95ED</td><td>VNode | slot</td><td>-</td><td></td></tr><tr><td>afterVisibleChange</td><td>\u5207\u6362\u62BD\u5C49\u65F6\u52A8\u753B\u7ED3\u675F\u540E\u7684\u56DE\u8C03</td><td>function(visible)</td><td>\u65E0</td><td>1.5.0</td></tr><tr><td>keyboard</td><td>\u662F\u5426\u652F\u6301\u952E\u76D8 esc \u5173\u95ED</td><td>boolean</td><td>true</td><td>1.5.0</td></tr></tbody></table><h2>\u65B9\u6CD5</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u63CF\u8FF0</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>close</td><td>\u70B9\u51FB\u906E\u7F69\u5C42\u6216\u53F3\u4E0A\u89D2\u53C9\u6216\u53D6\u6D88\u6309\u94AE\u7684\u56DE\u8C03</td><td>function(e)</td><td>\u65E0</td><td></td></tr></tbody></table>",4),Je={expose:[],setup(n){return(o,s)=>(v(),b("div",Xe,[We]))}};var Ze=Je;const V={cn:`# Drawer \u62BD\u5C49
        \u5C4F\u5E55\u8FB9\u7F18\u6ED1\u51FA\u7684\u6D6E\u5C42\u9762\u677F\u3002

## \u4F55\u65F6\u4F7F\u7528

\u62BD\u5C49\u4ECE\u7236\u7A97\u4F53\u8FB9\u7F18\u6ED1\u5165\uFF0C\u8986\u76D6\u4F4F\u90E8\u5206\u7236\u7A97\u4F53\u5185\u5BB9\u3002\u7528\u6237\u5728\u62BD\u5C49\u5185\u64CD\u4F5C\u65F6\u4E0D\u5FC5\u79BB\u5F00\u5F53\u524D\u4EFB\u52A1\uFF0C\u64CD\u4F5C\u5B8C\u6210\u540E\uFF0C\u53EF\u4EE5\u5E73\u6ED1\u5730\u56DE\u5230\u5230\u539F\u4EFB\u52A1\u3002

- \u5F53\u9700\u8981\u4E00\u4E2A\u9644\u52A0\u7684\u9762\u677F\u6765\u63A7\u5236\u7236\u7A97\u4F53\u5185\u5BB9\uFF0C\u8FD9\u4E2A\u9762\u677F\u5728\u9700\u8981\u65F6\u547C\u51FA\u3002\u6BD4\u5982\uFF0C\u63A7\u5236\u754C\u9762\u5C55\u793A\u6837\u5F0F\uFF0C\u5F80\u754C\u9762\u4E2D\u6DFB\u52A0\u5185\u5BB9\u3002
- \u5F53\u9700\u8981\u5728\u5F53\u524D\u4EFB\u52A1\u6D41\u4E2D\u63D2\u5165\u4E34\u65F6\u4EFB\u52A1\uFF0C\u521B\u5EFA\u6216\u9884\u89C8\u9644\u52A0\u5185\u5BB9\u3002\u6BD4\u5982\u5C55\u793A\u534F\u8BAE\u6761\u6B3E\uFF0C\u521B\u5EFA\u5B50\u5BF9\u8C61\u3002

       ## \u4EE3\u7801\u6F14\u793A
        `,us:`# Drawer
        A panel which slides in from the edge of the screen.

## When To Use

A Drawer is a panel that is typically overlaid on top of a page and slides in from the side. It contains a set of information or actions. Since the user can interact with the Drawer without leaving the current page, tasks can be achieved more efficiently within the same context.

- Use a Form to create or edit a set of information.
- Processing subtasks. When subtasks are too heavy for a Popover and we still want to keep the subtasks in the context of the main task, Drawer comes very handy.
- When the same Form is needed in multiple places.
       ## Examples
        `};var Ye={category:"Components",type:"Feedback",zhType:"\u53CD\u9988",title:"Drawer",subtitle:"\u62BD\u5C49",render(){return e("div",null,[e(a("Md"),{cn:V.cn,us:V.us},null),e(a("demo-sort"),null,{default:()=>[e(a("demo-container"),{api:W,code:J},{default:()=>[e(x,null,null)]}),e(a("demo-container"),{api:ae,code:re},{default:()=>[e(T,null,null)]}),e(a("demo-container"),{api:Ae,code:Ie},{default:()=>[e(N,null,null)]}),e(a("demo-container"),{api:fe,code:he},{default:()=>[e(M,null,null)]}),e(a("demo-container"),{api:De,code:ke},{default:()=>[e(O,null,null)]}),e(a("demo-container"),{api:He,code:Ee},{default:()=>[e(U,null,null)]})]}),e(a("api"),null,{default:()=>[e(Ze,null,null)]})])}};export{Ye as default};

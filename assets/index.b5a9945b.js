import{Y as o,bw as r,bx as c,by as n,b as e,D as t,d as y,k as z,bO as B}from"./vendor.846be9ce.js";const b={},S=t("Zhou Maomao"),k=t("1810000000"),P=t("Hangzhou, Zhejiang"),x=t("empty"),I=t(" No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China ");function U(s,l){const i=o("a-descriptions-item"),d=o("a-descriptions");return r(),c(d,{title:"User Info"},{default:n(()=>[e(i,{label:"UserName"},{default:n(()=>[S]),_:1}),e(i,{label:"Telephone"},{default:n(()=>[k]),_:1}),e(i,{label:"Live"},{default:n(()=>[P]),_:1}),e(i,{label:"Remark"},{default:n(()=>[x]),_:1}),e(i,{label:"Address"},{default:n(()=>[I]),_:1})]),_:1})}b.render=U;var A=b,E=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u7B80\u5355\u7684\u5C55\u793A\u3002
</cn>

<us>
#### Basic
Simplest Usage.
</us>
`,N=`<template>
  <a-descriptions title="User Info">
    <a-descriptions-item label="UserName">Zhou Maomao</a-descriptions-item>
    <a-descriptions-item label="Telephone">1810000000</a-descriptions-item>
    <a-descriptions-item label="Live">Hangzhou, Zhejiang</a-descriptions-item>
    <a-descriptions-item label="Remark">empty</a-descriptions-item>
    <a-descriptions-item label="Address">
      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
    </a-descriptions-item>
  </a-descriptions>
</template>
`;const h={},T=t("Cloud Database"),M=t("Prepaid"),O=t("YES"),V=t("2018-04-24 18:00:00"),Z=t("2019-04-24 18:00:00"),w=t("$80.00"),j=t("$20.00"),G=t("$60.00"),H=t(" Data disk type: MongoDB "),W=e("br",null,null,-1),Y=t(" Database version: 3.4 "),L=e("br",null,null,-1),X=t(" Package: dds.mongo.mid "),q=e("br",null,null,-1),F=t(" Storage space: 10 GB "),J=e("br",null,null,-1),K=t(" Replication factor: 3 "),Q=e("br",null,null,-1),ee=t(" Region: East China 1 "),te=e("br",null,null,-1);function ne(s,l){const i=o("a-descriptions-item"),d=o("a-badge"),_=o("a-descriptions");return r(),c(_,{title:"User Info",bordered:""},{default:n(()=>[e(i,{label:"Product"},{default:n(()=>[T]),_:1}),e(i,{label:"Billing Mode"},{default:n(()=>[M]),_:1}),e(i,{label:"Automatic Renewal"},{default:n(()=>[O]),_:1}),e(i,{label:"Order time"},{default:n(()=>[V]),_:1}),e(i,{label:"Usage Time",span:2},{default:n(()=>[Z]),_:1}),e(i,{label:"Status",span:3},{default:n(()=>[e(d,{status:"processing",text:"Running"})]),_:1}),e(i,{label:"Negotiated Amount"},{default:n(()=>[w]),_:1}),e(i,{label:"Discount"},{default:n(()=>[j]),_:1}),e(i,{label:"Official Receipts"},{default:n(()=>[G]),_:1}),e(i,{label:"Config Info"},{default:n(()=>[H,W,Y,L,X,q,F,J,K,Q,ee,te]),_:1})]),_:1})}h.render=ne;var ie=h,oe=`<cn>
#### \u5E26\u8FB9\u6846\u7684
</cn>

<us>
#### border
Descriptions with border and background color.
</us>
`,se=`<template>
  <a-descriptions title="User Info" bordered>
    <a-descriptions-item label="Product">Cloud Database</a-descriptions-item>
    <a-descriptions-item label="Billing Mode">Prepaid</a-descriptions-item>
    <a-descriptions-item label="Automatic Renewal">YES</a-descriptions-item>
    <a-descriptions-item label="Order time">2018-04-24 18:00:00</a-descriptions-item>
    <a-descriptions-item label="Usage Time" :span="2">2019-04-24 18:00:00</a-descriptions-item>
    <a-descriptions-item label="Status" :span="3">
      <a-badge status="processing" text="Running" />
    </a-descriptions-item>
    <a-descriptions-item label="Negotiated Amount">$80.00</a-descriptions-item>
    <a-descriptions-item label="Discount">$20.00</a-descriptions-item>
    <a-descriptions-item label="Official Receipts">$60.00</a-descriptions-item>
    <a-descriptions-item label="Config Info">
      Data disk type: MongoDB
      <br />
      Database version: 3.4
      <br />
      Package: dds.mongo.mid
      <br />
      Storage space: 10 GB
      <br />
      Replication factor: 3
      <br />
      Region: East China 1
      <br />
    </a-descriptions-item>
  </a-descriptions>
</template>
`;const f={},ae=t("Cloud Database"),de=t("Prepaid"),le=t("18:00:00"),re=t("$80.00"),ce=t("$20.00"),_e=t("$60.00"),pe=t(" Data disk type: MongoDB "),ue=e("br",null,null,-1),me=t(" Database version: 3.4 "),be=e("br",null,null,-1),he=t(" Package: dds.mongo.mid "),fe=e("br",null,null,-1),ge=t(" Storage space: 10 GB "),$e=e("br",null,null,-1),ve=t(" Replication factor: 3 "),De=e("br",null,null,-1),Ce=t(" Region: East China 1 ");function Re(s,l){const i=o("a-descriptions-item"),d=o("a-descriptions");return r(),c(d,{title:"Responsive Descriptions",bordered:"",column:{xxl:4,xl:3,lg:3,md:3,sm:2,xs:1}},{default:n(()=>[e(i,{label:"Product"},{default:n(()=>[ae]),_:1}),e(i,{label:"Billing"},{default:n(()=>[de]),_:1}),e(i,{label:"Time"},{default:n(()=>[le]),_:1}),e(i,{label:"Amount"},{default:n(()=>[re]),_:1}),e(i,{label:"Discount"},{default:n(()=>[ce]),_:1}),e(i,{label:"Official"},{default:n(()=>[_e]),_:1}),e(i,{label:"Config Info"},{default:n(()=>[pe,ue,me,be,he,fe,ge,$e,ve,De,Ce]),_:1})]),_:1})}f.render=Re;var ye=f,ze=`<cn>
#### \u54CD\u5E94\u5F0F
\u901A\u8FC7\u54CD\u5E94\u5F0F\u7684\u914D\u7F6E\u53EF\u4EE5\u5B9E\u73B0\u5728\u5C0F\u5C4F\u5E55\u8BBE\u5907\u4E0A\u7684\u5B8C\u7F8E\u5448\u73B0\u3002
</cn>

<us>
#### responsive
\u901A\u8FC7\u54CD\u5E94\u5F0F\u7684\u914D\u7F6E\u53EF\u4EE5\u5B9E\u73B0\u5728\u5C0F\u5C4F\u5E55\u8BBE\u5907\u4E0A\u7684\u5B8C\u7F8E\u5448\u73B0\u3002
</us>
`,Be=`<template>
  <a-descriptions
    title="Responsive Descriptions"
    bordered
    :column="{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }"
  >
    <a-descriptions-item label="Product">Cloud Database</a-descriptions-item>
    <a-descriptions-item label="Billing">Prepaid</a-descriptions-item>
    <a-descriptions-item label="Time">18:00:00</a-descriptions-item>
    <a-descriptions-item label="Amount">$80.00</a-descriptions-item>
    <a-descriptions-item label="Discount">$20.00</a-descriptions-item>
    <a-descriptions-item label="Official">$60.00</a-descriptions-item>
    <a-descriptions-item label="Config Info">
      Data disk type: MongoDB
      <br />
      Database version: 3.4
      <br />
      Package: dds.mongo.mid
      <br />
      Storage space: 10 GB
      <br />
      Replication factor: 3
      <br />
      Region: East China 1
    </a-descriptions-item>
  </a-descriptions>
</template>
`,g=y({setup(){const s=z("default");return{size:s,onChange:i=>{console.log("size checked",i.target.value),s.value=i.target.value}}}});const Se=t("default"),ke=t("middle"),Pe=t("small"),xe=e("br",null,null,-1),Ie=e("br",null,null,-1),Ue=t("Edit"),Ae=t("Cloud Database"),Ee=t("Prepaid"),Ne=t("18:00:00"),Te=t("$80.00"),Me=t("$20.00"),Oe=t("$60.00"),Ve=t(" Data disk type: MongoDB "),Ze=e("br",null,null,-1),we=t(" Database version: 3.4 "),je=e("br",null,null,-1),Ge=t(" Package: dds.mongo.mid "),He=e("br",null,null,-1),We=t(" Storage space: 10 GB "),Ye=e("br",null,null,-1),Le=t(" Replication factor: 3 "),Xe=e("br",null,null,-1),qe=t(" Region: East China 1 "),Fe=e("br",null,null,-1),Je=e("br",null,null,-1),Ke=e("br",null,null,-1),Qe=t("Edit"),et=t("Cloud Database"),tt=t("Prepaid"),nt=t("18:00:00"),it=t("$80.00"),ot=t("$20.00"),st=t("$60.00");function at(s,l,i,d,_,Yt){const p=o("a-radio"),C=o("a-radio-group"),u=o("a-button"),a=o("a-descriptions-item"),m=o("a-descriptions");return r(),c("div",null,[e(C,{value:s.size,"onUpdate:value":l[1]||(l[1]=R=>s.size=R),onChange:s.onChange},{default:n(()=>[e(p,{value:"default"},{default:n(()=>[Se]),_:1}),e(p,{value:"middle"},{default:n(()=>[ke]),_:1}),e(p,{value:"small"},{default:n(()=>[Pe]),_:1})]),_:1},8,["value","onChange"]),xe,Ie,e(m,{bordered:"",title:"Custom Size",size:s.size},{extra:n(()=>[e(u,{type:"primary"},{default:n(()=>[Ue]),_:1})]),default:n(()=>[e(a,{label:"Product"},{default:n(()=>[Ae]),_:1}),e(a,{label:"Billing"},{default:n(()=>[Ee]),_:1}),e(a,{label:"Time"},{default:n(()=>[Ne]),_:1}),e(a,{label:"Amount"},{default:n(()=>[Te]),_:1}),e(a,{label:"Discount"},{default:n(()=>[Me]),_:1}),e(a,{label:"Official"},{default:n(()=>[Oe]),_:1}),e(a,{label:"Config Info"},{default:n(()=>[Ve,Ze,we,je,Ge,He,We,Ye,Le,Xe,qe,Fe]),_:1})]),_:1},8,["size"]),Je,Ke,e(m,{title:"Custom Size",size:s.size},{extra:n(()=>[e(u,{type:"primary"},{default:n(()=>[Qe]),_:1})]),default:n(()=>[e(a,{label:"Product"},{default:n(()=>[et]),_:1}),e(a,{label:"Billing"},{default:n(()=>[tt]),_:1}),e(a,{label:"Time"},{default:n(()=>[nt]),_:1}),e(a,{label:"Amount"},{default:n(()=>[it]),_:1}),e(a,{label:"Discount"},{default:n(()=>[ot]),_:1}),e(a,{label:"Official"},{default:n(()=>[st]),_:1})]),_:1},8,["size"])])}g.render=at;var dt=`<cn>
#### \u81EA\u5B9A\u4E49\u5C3A\u5BF8
\u81EA\u5B9A\u4E49\u5C3A\u5BF8\uFF0C\u9002\u5E94\u5728\u5404\u79CD\u5BB9\u5668\u4E2D\u5C55\u793A\u3002
</cn>

<us>
#### Custom size
Custom sizes to fit in a variety of containers.
</us>
`,lt=`<template>
  <div>
    <a-radio-group v-model:value="size" @change="onChange">
      <a-radio value="default">default</a-radio>
      <a-radio value="middle">middle</a-radio>
      <a-radio value="small">small</a-radio>
    </a-radio-group>
    <br />
    <br />
    <a-descriptions bordered title="Custom Size" :size="size">
      <template #extra>
        <a-button type="primary">Edit</a-button>
      </template>
      <a-descriptions-item label="Product">Cloud Database</a-descriptions-item>
      <a-descriptions-item label="Billing">Prepaid</a-descriptions-item>
      <a-descriptions-item label="Time">18:00:00</a-descriptions-item>
      <a-descriptions-item label="Amount">$80.00</a-descriptions-item>
      <a-descriptions-item label="Discount">$20.00</a-descriptions-item>
      <a-descriptions-item label="Official">$60.00</a-descriptions-item>
      <a-descriptions-item label="Config Info">
        Data disk type: MongoDB
        <br />
        Database version: 3.4
        <br />
        Package: dds.mongo.mid
        <br />
        Storage space: 10 GB
        <br />
        Replication factor: 3
        <br />
        Region: East China 1
        <br />
      </a-descriptions-item>
    </a-descriptions>
    <br />
    <br />
    <a-descriptions title="Custom Size" :size="size">
      <template #extra>
        <a-button type="primary">Edit</a-button>
      </template>
      <a-descriptions-item label="Product">Cloud Database</a-descriptions-item>
      <a-descriptions-item label="Billing">Prepaid</a-descriptions-item>
      <a-descriptions-item label="Time">18:00:00</a-descriptions-item>
      <a-descriptions-item label="Amount">$80.00</a-descriptions-item>
      <a-descriptions-item label="Discount">$20.00</a-descriptions-item>
      <a-descriptions-item label="Official">$60.00</a-descriptions-item>
    </a-descriptions>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
// TODO
import { RadioChangeEvent } from '@fe6/water-pro';

export default defineComponent({
  setup() {
    const size = ref('default');
    const onChange = (e: RadioChangeEvent) => {
      console.log('size checked', e.target.value);
      size.value = e.target.value;
    };

    return {
      size,
      onChange,
    };
  },
});
<\/script>
`;const $={},rt=t("Cloud Database"),ct=t("Prepaid"),_t=t("YES"),pt=t("2018-04-24 18:00:00"),ut=t("2019-04-24 18:00:00"),mt=t("$80.00"),bt=t("$20.00"),ht=t("$60.00"),ft=t(" Data disk type: MongoDB "),gt=e("br",null,null,-1),$t=t(" Database version: 3.4 "),vt=e("br",null,null,-1),Dt=t(" Package: dds.mongo.mid "),Ct=e("br",null,null,-1),Rt=t(" Storage space: 10 GB "),yt=e("br",null,null,-1),zt=t(" Replication factor: 3 "),Bt=e("br",null,null,-1),St=t(" Region: East China 1 "),kt=e("br",null,null,-1);function Pt(s,l){const i=o("a-descriptions-item"),d=o("a-badge"),_=o("a-descriptions");return r(),c(_,{title:"User Info",layout:"vertical",bordered:""},{default:n(()=>[e(i,{label:"Product"},{default:n(()=>[rt]),_:1}),e(i,{label:"Billing Mode"},{default:n(()=>[ct]),_:1}),e(i,{label:"Automatic Renewal"},{default:n(()=>[_t]),_:1}),e(i,{label:"Order time"},{default:n(()=>[pt]),_:1}),e(i,{label:"Usage Time",span:2},{default:n(()=>[ut]),_:1}),e(i,{label:"Status",span:3},{default:n(()=>[e(d,{status:"processing",text:"Running"})]),_:1}),e(i,{label:"Negotiated Amount"},{default:n(()=>[mt]),_:1}),e(i,{label:"Discount"},{default:n(()=>[bt]),_:1}),e(i,{label:"Official Receipts"},{default:n(()=>[ht]),_:1}),e(i,{label:"Config Info"},{default:n(()=>[ft,gt,$t,vt,Dt,Ct,Rt,yt,zt,Bt,St,kt]),_:1})]),_:1})}$.render=Pt;var xt=$,It=`<cn>
#### \u5782\u76F4\u5E26\u8FB9\u6846\u7684
\u5782\u76F4\u5E26\u8FB9\u6846\u548C\u80CC\u666F\u989C\u8272\u7684\u5217\u8868\u3002
</cn>

<us>
#### Vertical border
Descriptions with border and background color.
</us>
`,Ut=`<template>
  <a-descriptions title="User Info" layout="vertical" bordered>
    <a-descriptions-item label="Product">Cloud Database</a-descriptions-item>
    <a-descriptions-item label="Billing Mode">Prepaid</a-descriptions-item>
    <a-descriptions-item label="Automatic Renewal">YES</a-descriptions-item>
    <a-descriptions-item label="Order time">2018-04-24 18:00:00</a-descriptions-item>
    <a-descriptions-item label="Usage Time" :span="2">2019-04-24 18:00:00</a-descriptions-item>
    <a-descriptions-item label="Status" :span="3">
      <a-badge status="processing" text="Running" />
    </a-descriptions-item>
    <a-descriptions-item label="Negotiated Amount">$80.00</a-descriptions-item>
    <a-descriptions-item label="Discount">$20.00</a-descriptions-item>
    <a-descriptions-item label="Official Receipts">$60.00</a-descriptions-item>
    <a-descriptions-item label="Config Info">
      Data disk type: MongoDB
      <br />
      Database version: 3.4
      <br />
      Package: dds.mongo.mid
      <br />
      Storage space: 10 GB
      <br />
      Replication factor: 3
      <br />
      Region: East China 1
      <br />
    </a-descriptions-item>
  </a-descriptions>
</template>
`;const v={},At=t("Zhou Maomao"),Et=t("1810000000"),Nt=t("Hangzhou, Zhejiang"),Tt=t(" No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China "),Mt=t("empty");function Ot(s,l){const i=o("a-descriptions-item"),d=o("a-descriptions");return r(),c(d,{title:"User Info",layout:"vertical"},{default:n(()=>[e(i,{label:"UserName"},{default:n(()=>[At]),_:1}),e(i,{label:"Telephone"},{default:n(()=>[Et]),_:1}),e(i,{label:"Live"},{default:n(()=>[Nt]),_:1}),e(i,{label:"Address",span:"2"},{default:n(()=>[Tt]),_:1}),e(i,{label:"Remark"},{default:n(()=>[Mt]),_:1})]),_:1})}v.render=Ot;var Vt=v,Zt=`<cn>
#### \u5782\u76F4
\u5782\u76F4\u7684\u5217\u8868\u3002
</cn>

<us>
#### Vertical
Simplest Usage.
</us>
`,wt=`<template>
  <a-descriptions title="User Info" layout="vertical">
    <a-descriptions-item label="UserName">Zhou Maomao</a-descriptions-item>
    <a-descriptions-item label="Telephone">1810000000</a-descriptions-item>
    <a-descriptions-item label="Live">Hangzhou, Zhejiang</a-descriptions-item>
    <a-descriptions-item label="Address" span="2">
      No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
    </a-descriptions-item>
    <a-descriptions-item label="Remark">empty</a-descriptions-item>
  </a-descriptions>
</template>
`;const jt={class:"markdown-body"},Gt=B("<h2>API</h2><h3>Descriptions props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>title</td><td>\u63CF\u8FF0\u5217\u8868\u7684\u6807\u9898\uFF0C\u663E\u793A\u5728\u6700\u9876\u90E8</td><td>string | VNode | v-slot:title</td><td>-</td><td></td></tr><tr><td>bordered</td><td>\u662F\u5426\u5C55\u793A\u8FB9\u6846</td><td>boolean</td><td>false</td><td></td></tr><tr><td>column</td><td>\u4E00\u884C\u7684 <code>DescriptionItems</code> \u6570\u91CF\uFF0C\u53EF\u4EE5\u5199\u6210\u50CF\u7D20\u503C\u6216\u652F\u6301\u54CD\u5E94\u5F0F\u7684\u5BF9\u8C61\u5199\u6CD5 <code>{ xs: 8, sm: 16, md: 24}</code></td><td>number</td><td>3</td><td></td></tr><tr><td>size</td><td>\u8BBE\u7F6E\u5217\u8868\u7684\u5927\u5C0F\u3002\u53EF\u4EE5\u8BBE\u7F6E\u4E3A <code>middle</code> \u3001<code>small</code>, \u6216\u4E0D\u586B\uFF08\u53EA\u6709\u8BBE\u7F6E <code>bordered={true}</code> \u751F\u6548\uFF09</td><td>`default</td><td>middle</td><td>small`</td></tr><tr><td>layout</td><td>\u63CF\u8FF0\u5E03\u5C40</td><td>`horizontal</td><td>vertical`</td><td><code>horizontal</code></td></tr><tr><td>colon</td><td>\u914D\u7F6E <code>Descriptions.Item</code> \u7684 <code>colon</code> \u7684\u9ED8\u8BA4\u503C</td><td>boolean</td><td>true</td><td></td></tr><tr><td>extra</td><td>\u63CF\u8FF0\u5217\u8868\u7684\u64CD\u4F5C\u533A\u57DF\uFF0C\u663E\u793A\u5728\u53F3\u4E0A\u65B9</td><td>string | VNode | #extra</td><td>-</td><td></td></tr></tbody></table><h3>Item props</h3><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th></tr></thead><tbody><tr><td>label</td><td>\u5185\u5BB9\u7684\u63CF\u8FF0</td><td>string | VNode | v-slot:label</td><td>-</td></tr><tr><td>span</td><td>\u5305\u542B\u5217\u7684\u6570\u91CF</td><td>number</td><td>1</td></tr></tbody></table><blockquote><p>span \u662F Descriptions.Item \u7684\u6570\u91CF\u3002 span={2} \u4F1A\u5360\u7528\u4E24\u4E2A DescriptionsItem \u7684\u5BBD\u5EA6\u3002</p></blockquote>",6),Ht={expose:[],setup(s){return(l,i)=>(r(),c("div",jt,[Gt]))}};var Wt=Ht;const D={cn:`# Descriptions \u63CF\u8FF0\u5217\u8868 (\u7248\u672C: 1.5.0+)
        \u6210\u7EC4\u5C55\u793A\u591A\u4E2A\u53EA\u8BFB\u5B57\u6BB5\u3002
       ## \u4F55\u65F6\u4F7F\u7528
        \u5E38\u89C1\u4E8E\u8BE6\u60C5\u9875\u7684\u4FE1\u606F\u5C55\u793A\u3002
       ## \u4EE3\u7801\u6F14\u793A
        `,us:`# Descriptions (Version: 1.5.0+)
        Display multiple read-only fields in groups.
       ## When To Use
        Commonly displayed on the details page.
       ## Examples
        `};var Xt={category:"Components",type:"Data Display",zhType:"\u6570\u636E\u5C55\u793A",title:"Descriptions",subtitle:"\u63CF\u8FF0\u5217\u8868",cols:1,render(){return e("div",null,[e(o("Md"),{cn:D.cn,us:D.us},null),e(o("demo-sort"),{cols:1},{default:()=>[e(o("demo-container"),{api:E,code:N},{default:()=>[e(A,null,null)]}),e(o("demo-container"),{api:oe,code:se},{default:()=>[e(ie,null,null)]}),e(o("demo-container"),{api:dt,code:lt},{default:()=>[e(g,null,null)]}),e(o("demo-container"),{api:ze,code:Be},{default:()=>[e(ye,null,null)]}),e(o("demo-container"),{api:Zt,code:wt},{default:()=>[e(Vt,null,null)]}),e(o("demo-container"),{api:It,code:Ut},{default:()=>[e(xt,null,null)]})]}),e(o("api"),null,{default:()=>[e(Wt,null,null)]})])}};export{Xt as default};

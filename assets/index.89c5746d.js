import{d as h,k as b,Y as d,bw as m,bx as p,b as n,by as l,D as i,bz as P,a3 as g,h as k,bO as N}from"./vendor.846be9ce.js";import{M as f}from"./main.f0d1f01d.js";var _=h({setup(){const t=b(!1);return{visible:t,showModal:()=>{t.value=!0},handleOk:a=>{console.log(a),t.value=!1}}}});const D=i("Open Modal"),j=n("p",null,"Some contents...",-1),A=n("p",null,"Some contents...",-1),E=n("p",null,"Some contents...",-1);function I(t,o,s,a,c,v){const e=d("a-button"),u=d("a-modal");return m(),p("div",null,[n(e,{type:"primary",onClick:t.showModal},{default:l(()=>[D]),_:1},8,["onClick"]),n(u,{visible:t.visible,"onUpdate:visible":o[1]||(o[1]=r=>t.visible=r),title:"Basic Modal",onOk:t.handleOk},{default:l(()=>[j,A,E]),_:1},8,["visible","onOk"])])}_.render=I;var z=`<cn>
#### \u57FA\u672C\u4F7F\u7528
\u7B2C\u4E00\u4E2A\u5BF9\u8BDD\u6846\u3002
</cn>

<us>
#### Basic
Basic modal.
</us>
`,L=`<template>
  <div>
    <a-button type="primary" @click="showModal">Open Modal</a-button>
    <a-modal v-model:visible="visible" title="Basic Modal" @ok="handleOk">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const visible = ref<boolean>(false);

    const showModal = () => {
      visible.value = true;
    };

    const handleOk = (e: MouseEvent) => {
      console.log(e);
      visible.value = false;
    };
    return {
      visible,
      showModal,
      handleOk,
    };
  },
});
<\/script>
`,C=h({setup(){const t=b("Content of the modal"),o=b(!1),s=b(!1);return{modalText:t,visible:o,confirmLoading:s,showModal:()=>{o.value=!0},handleOk:()=>{t.value="The modal will be closed after two seconds",s.value=!0,setTimeout(()=>{o.value=!1,s.value=!1},2e3)}}}});const W=i("Open Modal with async logic");function q(t,o,s,a,c,v){const e=d("a-button"),u=d("a-modal");return m(),p("div",null,[n(e,{type:"primary",onClick:t.showModal},{default:l(()=>[W]),_:1},8,["onClick"]),n(u,{title:"Title",visible:t.visible,"onUpdate:visible":o[1]||(o[1]=r=>t.visible=r),"confirm-loading":t.confirmLoading,onOk:t.handleOk},{default:l(()=>[n("p",null,P(t.modalText),1)]),_:1},8,["visible","confirm-loading","onOk"])])}C.render=q;var K=`<cn>
#### \u5F02\u6B65\u5173\u95ED
\u70B9\u51FB\u786E\u5B9A\u540E\u5F02\u6B65\u5173\u95ED\u5BF9\u8BDD\u6846\uFF0C\u4F8B\u5982\u63D0\u4EA4\u8868\u5355\u3002
</cn>

<us>
#### Asynchronously close
Asynchronously close a modal dialog when a user clicked OK button, for example,
you can use this pattern when you submit a form.
</us>
`,U=`<template>
  <div>
    <a-button type="primary" @click="showModal">Open Modal with async logic</a-button>
    <a-modal
      title="Title"
      v-model:visible="visible"
      :confirm-loading="confirmLoading"
      @ok="handleOk"
    >
      <p>{{ modalText }}</p>
    </a-modal>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue';
export default defineComponent({
  setup() {
    const modalText = ref<string>('Content of the modal');
    const visible = ref<boolean>(false);
    const confirmLoading = ref<boolean>(false);

    const showModal = () => {
      visible.value = true;
    };

    const handleOk = () => {
      modalText.value = 'The modal will be closed after two seconds';
      confirmLoading.value = true;
      setTimeout(() => {
        visible.value = false;
        confirmLoading.value = false;
      }, 2000);
    };
    return {
      modalText,
      visible,
      confirmLoading,
      showModal,
      handleOk,
    };
  },
});
<\/script>
`,y=h({setup(){return{showConfirm:()=>{f.confirm({title:"Do you want to delete these items?",icon:n(g),content:"When clicked the OK button, this dialog will be closed after 1 second",onOk(){return new Promise((o,s)=>{setTimeout(Math.random()>.5?o:s,1e3)}).catch(()=>console.log("Oops errors!"))},onCancel(){}})}}}});const R=i("Confirm");function Y(t,o,s,a,c,v){const e=d("a-button");return m(),p(e,{onClick:t.showConfirm},{default:l(()=>[R]),_:1},8,["onClick"])}y.render=Y;var G=`<cn>
#### \u786E\u8BA4\u5BF9\u8BDD\u6846(promise)
\u4F7F\u7528 \`confirm()\` \u53EF\u4EE5\u5FEB\u6377\u5730\u5F39\u51FA\u786E\u8BA4\u6846\u3002onCancel/onOk \u8FD4\u56DE promise \u53EF\u4EE5\u5EF6\u8FDF\u5173\u95ED
</cn>

<us>
#### Confirmation modal dialog use promise
To use \`confirm()\` to popup confirmation modal dialog. Let onCancel/onOk function return a promise object to
delay closing the dialog.
</us>
`,F=`<template>
  <a-button @click="showConfirm">Confirm</a-button>
</template>
<script lang="ts">
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { createVNode, defineComponent } from 'vue';
import { Modal } from '@fe6/water-pro';

export default defineComponent({
  setup() {
    const showConfirm = () => {
      Modal.confirm({
        title: 'Do you want to delete these items?',
        icon: createVNode(ExclamationCircleOutlined),
        content: 'When clicked the OK button, this dialog will be closed after 1 second',
        onOk() {
          return new Promise((resolve, reject) => {
            setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
          }).catch(() => console.log('Oops errors!'));
        },
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        onCancel() {},
      });
    };
    return {
      showConfirm,
    };
  },
});
<\/script>
`,M=h({setup(){return{showConfirm:()=>{f.confirm({title:"Do you Want to delete these items?",icon:n(g),content:n("div",{style:"color:red;"},"Some descriptions"),onOk(){console.log("OK")},onCancel(){console.log("Cancel")},class:"test"})},showDeleteConfirm:()=>{f.confirm({title:"Are you sure delete this task?",icon:n(g),content:"Some descriptions",okText:"Yes",okType:"danger",cancelText:"No",onOk(){console.log("OK")},onCancel(){console.log("Cancel")}})},showPropsConfirm:()=>{f.confirm({title:"Are you sure delete this task?",icon:n(g),content:"Some descriptions",okText:"Yes",okType:"danger",okButtonProps:{disabled:!0},cancelText:"No",onOk(){console.log("OK")},onCancel(){console.log("Cancel")}})}}}});const H=i("Confirm"),J=i("Delete"),Q=i("With extra props");function X(t,o,s,a,c,v){const e=d("a-button");return m(),p("div",null,[n(e,{onClick:t.showConfirm},{default:l(()=>[H]),_:1},8,["onClick"]),n(e,{type:"dashed",onClick:t.showDeleteConfirm},{default:l(()=>[J]),_:1},8,["onClick"]),n(e,{type:"dashed",onClick:t.showPropsConfirm},{default:l(()=>[Q]),_:1},8,["onClick"])])}M.render=X;var Z=`<cn>
#### \u786E\u8BA4\u5BF9\u8BDD\u6846
\u4F7F\u7528 \`confirm()\` \u53EF\u4EE5\u5FEB\u6377\u5730\u5F39\u51FA\u786E\u8BA4\u6846\u3002
</cn>

<us>
#### Confirmation modal dialog
To use \`confirm()\` to show a confirmation modal dialog.
</us>
`,tt=`<template>
  <div>
    <a-button @click="showConfirm">Confirm</a-button>
    <a-button type="dashed" @click="showDeleteConfirm">Delete</a-button>
    <a-button type="dashed" @click="showPropsConfirm">With extra props</a-button>
  </div>
</template>
<script lang="ts">
import { createVNode, defineComponent } from 'vue';
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { Modal } from '@fe6/water-pro';

export default defineComponent({
  setup() {
    const showConfirm = () => {
      Modal.confirm({
        title: 'Do you Want to delete these items?',
        icon: createVNode(ExclamationCircleOutlined),
        content: createVNode('div', { style: 'color:red;' }, 'Some descriptions'),
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
        class: 'test',
      });
    };
    const showDeleteConfirm = () => {
      Modal.confirm({
        title: 'Are you sure delete this task?',
        icon: createVNode(ExclamationCircleOutlined),
        content: 'Some descriptions',
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    };
    const showPropsConfirm = () => {
      Modal.confirm({
        title: 'Are you sure delete this task?',
        icon: createVNode(ExclamationCircleOutlined),
        content: 'Some descriptions',
        okText: 'Yes',
        okType: 'danger',
        okButtonProps: {
          disabled: true,
        },
        cancelText: 'No',
        onOk() {
          console.log('OK');
        },
        onCancel() {
          console.log('Cancel');
        },
      });
    };
    return {
      showConfirm,
      showDeleteConfirm,
      showPropsConfirm,
    };
  },
});
<\/script>
`,w=h({setup(){const t=b(!1),o=b(!1);return{loading:t,visible:o,showModal:()=>{o.value=!0},handleOk:()=>{t.value=!0,setTimeout(()=>{t.value=!1,o.value=!1},2e3)},handleCancel:()=>{o.value=!1}}}});const nt=i("Open Modal with customized footer"),ot=i("Return"),et=i("Submit"),dt=n("p",null,"Some contents...",-1),lt=n("p",null,"Some contents...",-1),st=n("p",null,"Some contents...",-1),at=n("p",null,"Some contents...",-1),it=n("p",null,"Some contents...",-1);function rt(t,o,s,a,c,v){const e=d("a-button"),u=d("a-modal");return m(),p("div",null,[n(e,{type:"primary",onClick:t.showModal},{default:l(()=>[nt]),_:1},8,["onClick"]),n(u,{visible:t.visible,"onUpdate:visible":o[1]||(o[1]=r=>t.visible=r),title:"Title",onOk:t.handleOk},{footer:l(()=>[n(e,{key:"back",onClick:t.handleCancel},{default:l(()=>[ot]),_:1},8,["onClick"]),n(e,{key:"submit",type:"primary",loading:t.loading,onClick:t.handleOk},{default:l(()=>[et]),_:1},8,["loading","onClick"])]),default:l(()=>[dt,lt,st,at,it]),_:1},8,["visible","onOk"])])}w.render=rt;var ct=`<cn>
#### \u81EA\u5B9A\u4E49\u9875\u811A
\u66F4\u590D\u6742\u7684\u4F8B\u5B50\uFF0C\u81EA\u5B9A\u4E49\u4E86\u9875\u811A\u7684\u6309\u94AE\uFF0C\u70B9\u51FB\u63D0\u4EA4\u540E\u8FDB\u5165 loading \u72B6\u6001\uFF0C\u5B8C\u6210\u540E\u5173\u95ED\u3002
\u4E0D\u9700\u8981\u9ED8\u8BA4\u786E\u5B9A\u53D6\u6D88\u6309\u94AE\u65F6\uFF0C\u4F60\u53EF\u4EE5\u628A \`footer\` \u8BBE\u4E3A \`null\`\u3002
</cn>

<us>
#### Customized Footer
A more complex example which define a customized footer button bar,
the dialog will change to loading state after clicking submit button, when the loading is over,
the modal dialog will be closed.
You could set \`footer\` to \`null\` if you don't need default footer buttons.
</us>
`,ut=`<template>
  <div>
    <a-button type="primary" @click="showModal">Open Modal with customized footer</a-button>
    <a-modal v-model:visible="visible" title="Title" @ok="handleOk">
      <template #footer>
        <a-button key="back" @click="handleCancel">Return</a-button>
        <a-button key="submit" type="primary" :loading="loading" @click="handleOk">Submit</a-button>
      </template>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const loading = ref<boolean>(false);
    const visible = ref<boolean>(false);

    const showModal = () => {
      visible.value = true;
    };

    const handleOk = () => {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
        visible.value = false;
      }, 2000);
    };

    const handleCancel = () => {
      visible.value = false;
    };
    return {
      loading,
      visible,
      showModal,
      handleOk,
      handleCancel,
    };
  },
});
<\/script>
`,$=h({setup(){return{info:()=>{f.info({title:"This is a notification message",content:k("div",{},[k("p","some messages...some messages..."),k("p","some messages...some messages...")]),onOk(){console.log("ok")}})},success:()=>{f.success({title:"This is a success message",content:k("div",{},[k("p","some messages...some messages..."),k("p","some messages...some messages...")])})},error:()=>{f.error({title:"This is an error message",content:"some messages...some messages..."})},warning:()=>{f.warning({title:"This is a warning message",content:"some messages...some messages..."})}}}});const mt=i("Info"),pt=i("Success"),ft=i("Error"),ht=i("Warning");function bt(t,o,s,a,c,v){const e=d("a-button");return m(),p("div",null,[n(e,{onClick:t.info},{default:l(()=>[mt]),_:1},8,["onClick"]),n(e,{onClick:t.success},{default:l(()=>[pt]),_:1},8,["onClick"]),n(e,{onClick:t.error},{default:l(()=>[ft]),_:1},8,["onClick"]),n(e,{onClick:t.warning},{default:l(()=>[ht]),_:1},8,["onClick"])])}$.render=bt;var vt=`<cn>
#### \u4FE1\u606F\u63D0\u793A
\u5404\u79CD\u7C7B\u578B\u7684\u4FE1\u606F\u63D0\u793A\uFF0C\u53EA\u63D0\u4F9B\u4E00\u4E2A\u6309\u94AE\u7528\u4E8E\u5173\u95ED\u3002
</cn>

<us>
#### Information modal dialog
In the various types of information modal dialog, only one button to close dialog is provided.
</us>
`,gt=`<template>
  <div>
    <a-button @click="info">Info</a-button>
    <a-button @click="success">Success</a-button>
    <a-button @click="error">Error</a-button>
    <a-button @click="warning">Warning</a-button>
  </div>
</template>
<script lang="ts">
import { defineComponent, h } from 'vue';
import { Modal } from '@fe6/water-pro';

export default defineComponent({
  setup() {
    const info = () => {
      Modal.info({
        title: 'This is a notification message',
        content: h('div', {}, [
          h('p', 'some messages...some messages...'),
          h('p', 'some messages...some messages...'),
        ]),
        onOk() {
          console.log('ok');
        },
      });
    };
    const success = () => {
      Modal.success({
        title: 'This is a success message',
        content: h('div', {}, [
          h('p', 'some messages...some messages...'),
          h('p', 'some messages...some messages...'),
        ]),
      });
    };

    const error = () => {
      Modal.error({
        title: 'This is an error message',
        content: 'some messages...some messages...',
      });
    };

    const warning = () => {
      Modal.warning({
        title: 'This is a warning message',
        content: 'some messages...some messages...',
      });
    };

    return {
      info,
      success,
      error,
      warning,
    };
  },
});
<\/script>

`,O=h({setup(){const t=b(!1);return{visible:t,showModal:()=>{t.value=!0},hideModal:()=>{t.value=!1},confirm:()=>{f.confirm({title:"Confirm",icon:n(g),content:"Bla bla ...",okText:"\u786E\u8BA4",cancelText:"\u53D6\u6D88"})}}}});const kt=i("Modal"),_t=i("Confirm"),Ct=n("p",null,"Bla bla ...",-1),yt=n("p",null,"Bla bla ...",-1),Mt=n("p",null,"Bla bla ...",-1);function wt(t,o,s,a,c,v){const e=d("a-button"),u=d("a-modal");return m(),p("div",null,[n(e,{type:"primary",onClick:t.showModal},{default:l(()=>[kt]),_:1},8,["onClick"]),n(e,{onClick:t.confirm},{default:l(()=>[_t]),_:1},8,["onClick"]),n(u,{visible:t.visible,"onUpdate:visible":o[1]||(o[1]=r=>t.visible=r),title:"Modal","ok-text":"\u786E\u8BA4","cancel-text":"\u53D6\u6D88",onOk:t.hideModal},{default:l(()=>[Ct,yt,Mt]),_:1},8,["visible","onOk"])])}O.render=wt;var $t=`<cn>
#### \u56FD\u9645\u5316
\u8BBE\u7F6E \`okText\` \u4E0E \`cancelText\` \u4EE5\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u5B57\u3002
</cn>

<us>
#### Internationalization
To customize the text of the buttons, you need to set \`okText\` and \`cancelText\` props.
</us>
`,Ot=`<template>
  <div>
    <a-button type="primary" @click="showModal">Modal</a-button>
    <a-button @click="confirm">Confirm</a-button>
    <a-modal
      v-model:visible="visible"
      title="Modal"
      ok-text="\u786E\u8BA4"
      cancel-text="\u53D6\u6D88"
      @ok="hideModal"
    >
      <p>Bla bla ...</p>
      <p>Bla bla ...</p>
      <p>Bla bla ...</p>
    </a-modal>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, createVNode } from 'vue';
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { Modal } from '@fe6/water-pro';

export default defineComponent({
  setup() {
    const visible = ref<boolean>(false);

    const showModal = () => {
      visible.value = true;
    };
    const hideModal = () => {
      visible.value = false;
    };

    const confirm = () => {
      Modal.confirm({
        title: 'Confirm',
        icon: createVNode(ExclamationCircleOutlined),
        content: 'Bla bla ...',
        okText: '\u786E\u8BA4',
        cancelText: '\u53D6\u6D88',
      });
    };

    return {
      visible,
      showModal,
      hideModal,
      confirm,
    };
  },
});
<\/script>
`,T=h({setup(){return{countDown:()=>{let o=5;const s=f.success({title:"This is a notification message",content:`This modal will be destroyed after ${o} second.`}),a=setInterval(()=>{o-=1,s.update({content:`This modal will be destroyed after ${o} second.`})},1e3);setTimeout(()=>{clearInterval(a),s.destroy()},o*1e3)}}}});const Tt=i("Open modal to close in 5s");function St(t,o,s,a,c,v){const e=d("a-button");return m(),p(e,{onClick:t.countDown},{default:l(()=>[Tt]),_:1},8,["onClick"])}T.render=St;var xt=`<cn>
#### \u624B\u52A8\u66F4\u65B0\u548C\u79FB\u9664
\u624B\u52A8\u66F4\u65B0\u548C\u5173\u95ED \`Modal.method\` \u65B9\u5F0F\u521B\u5EFA\u7684\u5BF9\u8BDD\u6846\u3002
</cn>

<us>
#### Manual to update destroy
Manually updating and destroying a modal from \`Modal.method\`.
</us>
`,Vt=`<template>
  <a-button @click="countDown">Open modal to close in 5s</a-button>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { Modal } from '@fe6/water-pro';

export default defineComponent({
  setup() {
    const countDown = () => {
      let secondsToGo = 5;
      const modal = Modal.success({
        title: 'This is a notification message',
        content: \`This modal will be destroyed after \${secondsToGo} second.\`,
      });
      const interval = setInterval(() => {
        secondsToGo -= 1;
        modal.update({
          content: \`This modal will be destroyed after \${secondsToGo} second.\`,
        });
      }, 1000);
      setTimeout(() => {
        clearInterval(interval);
        modal.destroy();
      }, secondsToGo * 1000);
    };
    return {
      countDown,
    };
  },
});
<\/script>
`,S=h({setup(){const t=b(!1),o=b(!1);return{modal1Visible:t,modal2Visible:o,setModal1Visible:a=>{t.value=a}}}});const Bt={id:"components-modal-demo-position"},Pt=i(" Display a modal dialog at 20px to Top "),Nt=n("p",null,"some contents...",-1),Dt=n("p",null,"some contents...",-1),jt=n("p",null,"some contents...",-1),At=n("br",null,null,-1),Et=n("br",null,null,-1),It=i(" Vertically centered modal dialog "),zt=n("p",null,"some contents...",-1),Lt=n("p",null,"some contents...",-1),Wt=n("p",null,"some contents...",-1);function qt(t,o,s,a,c,v){const e=d("a-button"),u=d("a-modal");return m(),p("div",Bt,[n(e,{type:"primary",onClick:o[1]||(o[1]=r=>t.setModal1Visible(!0))},{default:l(()=>[Pt]),_:1}),n(u,{title:"20px to Top",style:{top:"20px"},visible:t.modal1Visible,"onUpdate:visible":o[2]||(o[2]=r=>t.modal1Visible=r),onOk:o[3]||(o[3]=r=>t.setModal1Visible(!1))},{default:l(()=>[Nt,Dt,jt]),_:1},8,["visible"]),At,Et,n(e,{type:"primary",onClick:o[4]||(o[4]=r=>t.modal2Visible=!0)},{default:l(()=>[It]),_:1}),n(u,{visible:t.modal2Visible,"onUpdate:visible":o[5]||(o[5]=r=>t.modal2Visible=r),title:"Vertically centered modal dialog",centered:"",onOk:o[6]||(o[6]=r=>t.modal2Visible=!1)},{default:l(()=>[zt,Lt,Wt]),_:1},8,["visible"])])}S.render=qt;var Kt=`<cn>
#### \u81EA\u5B9A\u4E49\u4F4D\u7F6E
\u4F7F\u7528 \`centered\` \u6216\u7C7B\u4F3C \`dialogStyle.top\` \u7684\u6837\u5F0F\u6765\u8BBE\u7F6E\u5BF9\u8BDD\u6846\u4F4D\u7F6E\u3002
</cn>

<us>
#### To customize the position of modal
You can use \`centered\`,\`dialogStyle.top\` or other styles to set position of modal dialog.
</us>
`,Ut=`<template>
  <div id="components-modal-demo-position">
    <a-button type="primary" @click="setModal1Visible(true)">
      Display a modal dialog at 20px to Top
    </a-button>
    <a-modal
      title="20px to Top"
      style="top: 20px"
      v-model:visible="modal1Visible"
      @ok="setModal1Visible(false)"
    >
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </a-modal>
    <br />
    <br />
    <a-button type="primary" @click="modal2Visible = true">
      Vertically centered modal dialog
    </a-button>
    <a-modal
      v-model:visible="modal2Visible"
      title="Vertically centered modal dialog"
      centered
      @ok="modal2Visible = false"
    >
      <p>some contents...</p>
      <p>some contents...</p>
      <p>some contents...</p>
    </a-modal>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const modal1Visible = ref<boolean>(false);
    const modal2Visible = ref<boolean>(false);

    const setModal1Visible = (visible: boolean) => {
      modal1Visible.value = visible;
    };
    return {
      modal1Visible,
      modal2Visible,
      setModal1Visible,
    };
  },
});
<\/script>
`,x=h({setup(){const t=b(!1),o=b(!1);return{loading:t,visible:o,showModal:()=>{o.value=!0},handleOk:()=>{t.value=!0,setTimeout(()=>{t.value=!1,o.value=!1},2e3)},handleCancel:()=>{o.value=!1}}}});const Rt=i("Open Modal with customized footer"),Yt=i("Return"),Gt=i("Submit"),Ft=n("p",null,"Some contents...",-1),Ht=n("p",null,"Some contents...",-1),Jt=n("p",null,"Some contents...",-1),Qt=n("p",null,"Some contents...",-1),Xt=n("p",null,"Some contents...",-1);function Zt(t,o,s,a,c,v){const e=d("a-button"),u=d("a-modal");return m(),p("div",null,[n(e,{type:"primary",onClick:t.showModal},{default:l(()=>[Rt]),_:1},8,["onClick"]),n(u,{visible:t.visible,"onUpdate:visible":o[1]||(o[1]=r=>t.visible=r),title:"Title",onOk:t.handleOk},{footer:l(()=>[n(e,{key:"back",onClick:t.handleCancel},{default:l(()=>[Yt]),_:1},8,["onClick"]),n(e,{key:"submit",type:"primary",loading:t.loading,onClick:t.handleOk},{default:l(()=>[Gt]),_:1},8,["loading","onClick"])]),default:l(()=>[Ft,Ht,Jt,Qt,Xt]),_:1},8,["visible","onOk"])])}x.render=Zt;var tn=`<cn>
#### \u81EA\u5B9A\u4E49\u9875\u811A\u6309\u94AE\u5C5E\u6027
\u4F20\u5165 \`okButtonProps\` \u548C \`cancelButtonProps\` \u53EF\u5206\u522B\u81EA\u5B9A\u4E49\u786E\u5B9A\u6309\u94AE\u548C\u53D6\u6D88\u6309\u94AE\u7684 props\u3002
</cn>

<us>
#### Customize footer buttons props
Passing \`okButtonProps\` and \`cancelButtonProps\` can customize the ok button and cancel button props.
</us>
`,nn=`<template>
  <div>
    <a-button type="primary" @click="showModal">Open Modal with customized footer</a-button>
    <a-modal v-model:visible="visible" title="Title" @ok="handleOk">
      <template #footer>
        <a-button key="back" @click="handleCancel">Return</a-button>
        <a-button key="submit" type="primary" :loading="loading" @click="handleOk">Submit</a-button>
      </template>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  setup() {
    const loading = ref<boolean>(false);
    const visible = ref<boolean>(false);

    const showModal = () => {
      visible.value = true;
    };

    const handleOk = () => {
      loading.value = true;
      setTimeout(() => {
        loading.value = false;
        visible.value = false;
      }, 2000);
    };

    const handleCancel = () => {
      visible.value = false;
    };
    return {
      loading,
      visible,
      showModal,
      handleOk,
      handleCancel,
    };
  },
});
<\/script>
`,V=h({setup(){return{showConfirm:()=>{for(let o=0;o<3;o+=1)setTimeout(()=>{f.confirm({content:"destroy all",icon:n(g),onOk(){return new Promise((s,a)=>{setTimeout(Math.random()>.5?s:a,1e3)}).catch(()=>console.log("Oops errors!"))},cancelText:"Click to destroy all",onCancel(){f.destroyAll()}})},o*500)}}}});const on=i("Confirm");function en(t,o,s,a,c,v){const e=d("a-button");return m(),p(e,{onClick:t.showConfirm},{default:l(()=>[on]),_:1},8,["onClick"])}V.render=en;var dn=`<cn>
#### \u9500\u6BC1\u786E\u8BA4\u5BF9\u8BDD\u6846
\u4F7F\u7528 \`Modal.destroyAll()\` \u53EF\u4EE5\u9500\u6BC1\u5F39\u51FA\u7684\u786E\u8BA4\u7A97\u3002\u901A\u5E38\u7528\u4E8E\u8DEF\u7531\u76D1\u542C\u5F53\u4E2D\uFF0C\u5904\u7406\u8DEF\u7531\u524D\u8FDB\u3001\u540E\u9000\u4E0D\u80FD\u9500\u6BC1\u786E\u8BA4\u5BF9\u8BDD\u6846\u7684\u95EE\u9898\u3002
</cn>

<us>
#### destroy confirmation modal dialog
\`Modal.destroyAll()\` could destroy all confirmation modal dialogs. Usually, you can use it in router change event to destroy confirm modal dialog automatically
</us>
`,ln=`<template>
  <a-button @click="showConfirm">Confirm</a-button>
</template>
<script lang="ts">
import { createVNode, defineComponent } from 'vue';
import { ExclamationCircleOutlined } from '@ant-design/icons-vue';
import { Modal } from '@fe6/water-pro';

export default defineComponent({
  setup() {
    const showConfirm = () => {
      for (let i = 0; i < 3; i += 1) {
        setTimeout(() => {
          Modal.confirm({
            content: 'destroy all',
            icon: createVNode(ExclamationCircleOutlined),
            onOk() {
              return new Promise((resolve, reject) => {
                setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
              }).catch(() => console.log('Oops errors!'));
            },
            cancelText: 'Click to destroy all',
            onCancel() {
              Modal.destroyAll();
            },
          });
        }, i * 500);
      }
    };
    return {
      showConfirm,
    };
  },
});
<\/script>
`;const sn={class:"markdown-body"},an=N(`<h2>API</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>afterClose</td><td>Modal \u5B8C\u5168\u5173\u95ED\u540E\u7684\u56DE\u8C03</td><td>function</td><td>\u65E0</td><td></td></tr><tr><td>bodyStyle</td><td>Modal body \u6837\u5F0F</td><td>object</td><td>{}</td><td></td></tr><tr><td>cancelText</td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57</td><td>string| slot</td><td>\u53D6\u6D88</td><td></td></tr><tr><td>centered</td><td>\u5782\u76F4\u5C45\u4E2D\u5C55\u793A Modal</td><td>Boolean</td><td><code>false</code></td><td></td></tr><tr><td>closable</td><td>\u662F\u5426\u663E\u793A\u53F3\u4E0A\u89D2\u7684\u5173\u95ED\u6309\u94AE</td><td>boolean</td><td>true</td><td></td></tr><tr><td>closeIcon</td><td>\u81EA\u5B9A\u4E49\u5173\u95ED\u56FE\u6807</td><td>VNode | slot</td><td>-</td><td>1.5.0</td></tr><tr><td>confirmLoading</td><td>\u786E\u5B9A\u6309\u94AE loading</td><td>boolean</td><td>\u65E0</td><td></td></tr><tr><td>destroyOnClose</td><td>\u5173\u95ED\u65F6\u9500\u6BC1 Modal \u91CC\u7684\u5B50\u5143\u7D20</td><td>boolean</td><td>false</td><td></td></tr><tr><td>footer</td><td>\u5E95\u90E8\u5185\u5BB9\uFF0C\u5F53\u4E0D\u9700\u8981\u9ED8\u8BA4\u5E95\u90E8\u6309\u94AE\u65F6\uFF0C\u53EF\u4EE5\u8BBE\u4E3A <code>:footer=&quot;null&quot;</code></td><td>string|slot</td><td>\u786E\u5B9A\u53D6\u6D88\u6309\u94AE</td><td></td></tr><tr><td>forceRender</td><td>\u5F3A\u5236\u6E32\u67D3 Modal</td><td>boolean</td><td>false</td><td></td></tr><tr><td>getContainer</td><td>\u6307\u5B9A Modal \u6302\u8F7D\u7684 HTML \u8282\u70B9</td><td>(instance): HTMLElement</td><td>() =&gt; document.body</td><td></td></tr><tr><td>keyboard</td><td>\u662F\u5426\u652F\u6301\u952E\u76D8 esc \u5173\u95ED</td><td>boolean</td><td>true</td><td></td></tr><tr><td>mask</td><td>\u662F\u5426\u5C55\u793A\u906E\u7F69</td><td>Boolean</td><td>true</td><td></td></tr><tr><td>maskClosable</td><td>\u70B9\u51FB\u8499\u5C42\u662F\u5426\u5141\u8BB8\u5173\u95ED</td><td>boolean</td><td>true</td><td></td></tr><tr><td>maskStyle</td><td>\u906E\u7F69\u6837\u5F0F</td><td>object</td><td>{}</td><td></td></tr><tr><td>okText</td><td>\u786E\u8BA4\u6309\u94AE\u6587\u5B57</td><td>string|slot</td><td>\u786E\u5B9A</td><td></td></tr><tr><td>okType</td><td>\u786E\u8BA4\u6309\u94AE\u7C7B\u578B</td><td>string</td><td>primary</td><td></td></tr><tr><td>okButtonProps</td><td>ok \u6309\u94AE props, \u9075\u5FAA jsx<a href="https://github.com/vuejs/babel-plugin-transform-vue-jsx#difference-from-react-jsx">\u89C4\u8303</a></td><td>{props: <a href="/components/button/#API">ButtonProps</a>, on: {}}</td><td>-</td><td></td></tr><tr><td>cancelButtonProps</td><td>cancel \u6309\u94AE props, \u9075\u5FAA jsx<a href="https://github.com/vuejs/babel-plugin-transform-vue-jsx#difference-from-react-jsx">\u89C4\u8303</a></td><td>{props: <a href="/components/button/#API">ButtonProps</a>, on: {}}</td><td>-</td><td></td></tr><tr><td>title</td><td>\u6807\u9898</td><td>string|slot</td><td>\u65E0</td><td></td></tr><tr><td>visible(v-model)</td><td>\u5BF9\u8BDD\u6846\u662F\u5426\u53EF\u89C1</td><td>boolean</td><td>\u65E0</td><td></td></tr><tr><td>width</td><td>\u5BBD\u5EA6</td><td>string|number</td><td>520</td><td></td></tr><tr><td>wrapClassName</td><td>\u5BF9\u8BDD\u6846\u5916\u5C42\u5BB9\u5668\u7684\u7C7B\u540D</td><td>string</td><td>-</td><td></td></tr><tr><td>zIndex</td><td>\u8BBE\u7F6E Modal \u7684 <code>z-index</code></td><td>Number</td><td>1000</td><td></td></tr><tr><td>dialogStyle</td><td>\u53EF\u7528\u4E8E\u8BBE\u7F6E\u6D6E\u5C42\u7684\u6837\u5F0F\uFF0C\u8C03\u6574\u6D6E\u5C42\u4F4D\u7F6E\u7B49</td><td>object</td><td>-</td><td>1.6.1</td></tr><tr><td>dialogClass</td><td>\u53EF\u7528\u4E8E\u8BBE\u7F6E\u6D6E\u5C42\u7684\u7C7B\u540D</td><td>string</td><td>-</td><td>1.6.1</td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th></tr></thead><tbody><tr><td>cancel</td><td>\u70B9\u51FB\u906E\u7F69\u5C42\u6216\u53F3\u4E0A\u89D2\u53C9\u6216\u53D6\u6D88\u6309\u94AE\u7684\u56DE\u8C03</td><td>function(e)</td></tr><tr><td>ok</td><td>\u70B9\u51FB\u786E\u5B9A\u56DE\u8C03</td><td>function(e)</td></tr></tbody></table><h4>\u6CE8\u610F</h4><blockquote><p><code>&lt;Modal /&gt;</code> \u9ED8\u8BA4\u5173\u95ED\u540E\u72B6\u6001\u4E0D\u4F1A\u81EA\u52A8\u6E05\u7A7A, \u5982\u679C\u5E0C\u671B\u6BCF\u6B21\u6253\u5F00\u90FD\u662F\u65B0\u5185\u5BB9\uFF0C\u8BF7\u8BBE\u7F6E <code>destroyOnClose</code>\u3002</p></blockquote><h3>Modal.method()</h3><p>\u5305\u62EC\uFF1A</p><ul><li><code>Modal.info</code></li><li><code>Modal.success</code></li><li><code>Modal.error</code></li><li><code>Modal.warning</code></li><li><code>Modal.confirm</code></li></ul><p>\u4EE5\u4E0A\u5747\u4E3A\u4E00\u4E2A\u51FD\u6570\uFF0C\u53C2\u6570\u4E3A object\uFF0C\u5177\u4F53\u5C5E\u6027\u5982\u4E0B\uFF1A</p><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>autoFocusButton</td><td>\u6307\u5B9A\u81EA\u52A8\u83B7\u5F97\u7126\u70B9\u7684\u6309\u94AE</td><td>null|string: <code>ok</code> <code>cancel</code></td><td><code>ok</code></td><td></td></tr><tr><td>cancelText</td><td>\u53D6\u6D88\u6309\u94AE\u6587\u5B57</td><td>string</td><td>\u53D6\u6D88</td><td></td></tr><tr><td>centered</td><td>\u5782\u76F4\u5C45\u4E2D\u5C55\u793A Modal</td><td>Boolean</td><td><code>false</code></td><td></td></tr><tr><td>closable</td><td>\u662F\u5426\u663E\u793A\u53F3\u4E0A\u89D2\u7684\u5173\u95ED\u6309\u94AE</td><td>boolean</td><td><code>false</code></td><td></td></tr><tr><td>class</td><td>\u5BB9\u5668\u7C7B\u540D</td><td>string</td><td>-</td><td></td></tr><tr><td>content</td><td>\u5185\u5BB9</td><td>string |vNode |function(h)</td><td>\u65E0</td><td></td></tr><tr><td>icon</td><td>\u81EA\u5B9A\u4E49\u56FE\u6807\uFF081.14.0 \u65B0\u589E\uFF09</td><td>string|()=&gt;VNode</td><td><code>&lt;Icon type=&quot;question-circle&quot;&gt;</code></td><td></td></tr><tr><td>iconType</td><td>\u56FE\u6807\u7C7B\u578B\uFF081.14.0 \u540E\u5E9F\u5F03\uFF0C\u8BF7\u4F7F\u7528 <code>icon</code>\uFF09</td><td>string</td><td><code>question-circle</code></td><td></td></tr><tr><td>mask</td><td>\u662F\u5426\u5C55\u793A\u906E\u7F69</td><td>Boolean</td><td>true</td><td></td></tr><tr><td>maskClosable</td><td>\u70B9\u51FB\u8499\u5C42\u662F\u5426\u5141\u8BB8\u5173\u95ED</td><td>Boolean</td><td><code>false</code></td><td></td></tr><tr><td>keyboard</td><td>\u662F\u5426\u652F\u6301\u952E\u76D8 esc \u5173\u95ED</td><td>boolean</td><td>true</td><td></td></tr><tr><td>okText</td><td>\u786E\u8BA4\u6309\u94AE\u6587\u5B57</td><td>string</td><td>\u786E\u5B9A</td><td></td></tr><tr><td>okType</td><td>\u786E\u8BA4\u6309\u94AE\u7C7B\u578B</td><td>string</td><td>primary</td><td></td></tr><tr><td>okButtonProps</td><td>ok \u6309\u94AE props</td><td><a href="/components/button">ButtonProps</a></td><td>-</td><td></td></tr><tr><td>cancelButtonProps</td><td>cancel \u6309\u94AE props</td><td><a href="/components/button">ButtonProps</a></td><td>-</td><td></td></tr><tr><td>title</td><td>\u6807\u9898</td><td>string|vNode |function(h)</td><td>\u65E0</td><td></td></tr><tr><td>width</td><td>\u5BBD\u5EA6</td><td>string|number</td><td>416</td><td></td></tr><tr><td>zIndex</td><td>\u8BBE\u7F6E Modal \u7684 <code>z-index</code></td><td>Number</td><td>1000</td><td></td></tr><tr><td>onCancel</td><td>\u53D6\u6D88\u56DE\u8C03\uFF0C\u53C2\u6570\u4E3A\u5173\u95ED\u51FD\u6570\uFF0C\u8FD4\u56DE promise \u65F6 resolve \u540E\u81EA\u52A8\u5173\u95ED</td><td>function</td><td>\u65E0</td><td></td></tr><tr><td>onOk</td><td>\u70B9\u51FB\u786E\u5B9A\u56DE\u8C03\uFF0C\u53C2\u6570\u4E3A\u5173\u95ED\u51FD\u6570\uFF0C\u8FD4\u56DE promise \u65F6 resolve \u540E\u81EA\u52A8\u5173\u95ED</td><td>function</td><td>\u65E0</td><td></td></tr><tr><td>parentContext</td><td>\u5F39\u7A97\u7684\u7236\u7EA7\u4E0A\u4E0B\u6587\uFF0C\u4E00\u822C\u7528\u4E8E\u83B7\u53D6\u7236\u7EA7 provider\uFF0C \u5982\u83B7\u53D6 <code>ConfigProvider</code> \u7684\u914D\u7F6E</td><td>vue instance</td><td>-</td><td>1.4.11</td></tr></tbody></table><p>\u4EE5\u4E0A\u51FD\u6570\u8C03\u7528\u540E\uFF0C\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u5F15\u7528\uFF0C\u53EF\u4EE5\u901A\u8FC7\u8BE5\u5F15\u7528\u66F4\u65B0\u548C\u5173\u95ED\u5F39\u7A97\u3002</p><pre><code class="language-jsx">const modal = Modal.info();

modal.update({
  title: &#39;\u4FEE\u6539\u7684\u6807\u9898&#39;,
  content: &#39;\u4FEE\u6539\u7684\u5185\u5BB9&#39;,
});

modal.destroy();
</code></pre><ul><li><code>Modal.destroyAll</code></li></ul><p>\u4F7F\u7528 <code>Modal.destroyAll()</code> \u53EF\u4EE5\u9500\u6BC1\u5F39\u51FA\u7684\u786E\u8BA4\u7A97\uFF08\u5373\u4E0A\u8FF0\u7684 <a href="http://Modal.info">Modal.info</a>\u3001Modal.success\u3001Modal.error\u3001Modal.warning\u3001Modal.confirm\uFF09\u3002\u901A\u5E38\u7528\u4E8E\u8DEF\u7531\u76D1\u542C\u5F53\u4E2D\uFF0C\u5904\u7406\u8DEF\u7531\u524D\u8FDB\u3001\u540E\u9000\u4E0D\u80FD\u9500\u6BC1\u786E\u8BA4\u5BF9\u8BDD\u6846\u7684\u95EE\u9898\uFF0C\u800C\u4E0D\u7528\u5404\u5904\u53BB\u4F7F\u7528\u5B9E\u4F8B\u7684\u8FD4\u56DE\u503C\u8FDB\u884C\u5173\u95ED\uFF08modal.destroy() \u9002\u7528\u4E8E\u4E3B\u52A8\u5173\u95ED\uFF0C\u800C\u4E0D\u662F\u8DEF\u7531\u8FD9\u6837\u88AB\u52A8\u5173\u95ED\uFF09</p><pre><code class="language-jsx">const router = new VueRouter({ ... })

// router change
router.beforeEach((to, from, next) =&gt; {
  Modal.destroyAll();
})
</code></pre>`,16),rn={expose:[],setup(t){return(o,s)=>(m(),p("div",sn,[an]))}};var cn=rn;const B={cn:`# Modal \u5BF9\u8BDD\u6846
          \u6A21\u6001\u5BF9\u8BDD\u6846\u3002
## \u4F55\u65F6\u4F7F\u7528
\u9700\u8981\u7528\u6237\u5904\u7406\u4E8B\u52A1\uFF0C\u53C8\u4E0D\u5E0C\u671B\u8DF3\u8F6C\u9875\u9762\u4EE5\u81F4\u6253\u65AD\u5DE5\u4F5C\u6D41\u7A0B\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 \`Modal\` \u5728\u5F53\u524D\u9875\u9762\u6B63\u4E2D\u6253\u5F00\u4E00\u4E2A\u6D6E\u5C42\uFF0C\u627F\u8F7D\u76F8\u5E94\u7684\u64CD\u4F5C\u3002
\u53E6\u5916\u5F53\u9700\u8981\u4E00\u4E2A\u7B80\u6D01\u7684\u786E\u8BA4\u6846\u8BE2\u95EE\u7528\u6237\u65F6\uFF0C\u53EF\u4EE5\u4F7F\u7528 \`Modal.confirm()\` \u7B49\u8BED\u6CD5\u7CD6\u65B9\u6CD5\u3002
          ## \u4EE3\u7801\u6F14\u793A`,us:`# Modal
          Modal dialogs.
## When To Use
When requiring users to interact with the application, but without jumping to a new page and interrupting
the user's workflow, you can use \`Modal\` to create a new floating layer over the current page to get user
feedback or display information.
Additionally, if you need show a simple confirmation dialog, you can use \`antd.Modal.confirm()\`,
and so on.
## Examples
`};var pn={type:"Feedback",category:"Components",subtitle:"\u5BF9\u8BDD\u6846",title:"Modal",render(){return n("div",{id:"components-modal-demo"},[n(d("Md"),{cn:B.cn,us:B.us},null),n(d("demo-sort"),{cols:1},{default:()=>[n(d("demo-container"),{api:z,code:L},{default:()=>[n(_,null,null)]}),n(d("demo-container"),{api:K,code:U},{default:()=>[n(C,null,null)]}),n(d("demo-container"),{api:G,code:F},{default:()=>[n(y,null,null)]}),n(d("demo-container"),{api:Z,code:tt},{default:()=>[n(M,null,null)]}),n(d("demo-container"),{api:ct,code:ut},{default:()=>[n(w,null,null)]}),n(d("demo-container"),{api:vt,code:gt},{default:()=>[n($,null,null)]}),n(d("demo-container"),{api:$t,code:Ot},{default:()=>[n(O,null,null)]}),n(d("demo-container"),{api:xt,code:Vt},{default:()=>[n(T,null,null)]}),n(d("demo-container"),{api:Kt,code:Ut},{default:()=>[n(S,null,null)]}),n(d("demo-container"),{api:tn,code:nn},{default:()=>[n(x,null,null)]}),n(d("demo-container"),{api:dn,code:ln},{default:()=>[n(V,null,null)]})]}),n(d("api"),null,{default:()=>[n(cn,null,null)]})])}};export{pn as default};

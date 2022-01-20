import{a as W}from"./main.f0d1f01d.js";import{d as T,co as G,k as E,Y as p,bw as P,bx as O,by as w,b as f,D,M as vn,ag as ht,c8 as bn,c5 as wn,bG as _n,bH as Sn,bI as Pn,cp as On,bz as Un,bO as En}from"./vendor.846be9ce.js";var gt=T({components:{UploadOutlined:G},setup(){const e=n=>{n.file.status!=="uploading"&&console.log(n.file,n.fileList),n.file.status==="done"?W.success(`${n.file.name} file uploaded successfully`):n.file.status==="error"&&W.error(`${n.file.name} file upload failed.`)};return{fileList:E([]),headers:{authorization:"authorization-text"},handleChange:e}}});const In=D(" Click to Upload ");function An(e,t,n,r,a,o){const i=p("upload-outlined"),s=p("a-button"),l=p("a-upload");return P(),O(l,{"file-list":e.fileList,"onUpdate:file-list":t[1]||(t[1]=u=>e.fileList=u),name:"file",multiple:!0,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",headers:e.headers,onChange:e.handleChange},{default:w(()=>[f(s,null,{default:w(()=>[f(i),In]),_:1})]),_:1},8,["file-list","headers","onChange"])}gt.render=An;var Fn=`<cn>
#### \u70B9\u51FB\u4E0A\u4F20
\u7ECF\u5178\u6B3E\u5F0F\uFF0C\u7528\u6237\u70B9\u51FB\u6309\u94AE\u5F39\u51FA\u6587\u4EF6\u9009\u62E9\u6846\u3002
</cn>

<us>
#### Upload by clicking
Classic mode. File selection dialog pops up when upload button is clicked.
</us>
`,xn=`<template>
  <a-upload
    v-model:file-list="fileList"
    name="file"
    :multiple="true"
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    :headers="headers"
    @change="handleChange"
  >
    <a-button>
      <upload-outlined></upload-outlined>
      Click to Upload
    </a-button>
  </a-upload>
</template>
<script lang="ts">
import { UploadOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import { message } from '@fe6/water-pro';

interface FileItem {
  uid: string;
  name?: string;
  status?: string;
  response?: string;
  url?: string;
}

interface FileInfo {
  file: FileItem;
  fileList: FileItem[];
}

export default defineComponent({
  components: {
    UploadOutlined,
  },
  setup() {
    const handleChange = (info: FileInfo) => {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(\`\${info.file.name} file uploaded successfully\`);
      } else if (info.file.status === 'error') {
        message.error(\`\${info.file.name} file upload failed.\`);
      }
    };

    const fileList = ref([]);
    return {
      fileList,
      headers: {
        authorization: 'authorization-text',
      },
      handleChange,
    };
  },
});
<\/script>
`;function Ln(e,t){const n=new FileReader;n.addEventListener("load",()=>t(n.result)),n.readAsDataURL(e)}var vt=T({components:{LoadingOutlined:vn,PlusOutlined:ht},setup(){const e=E([]),t=E(!1),n=E("");return{fileList:e,loading:t,imageUrl:n,handleChange:o=>{if(o.file.status==="uploading"){t.value=!0;return}o.file.status==="done"&&Ln(o.file.originFileObj,i=>{n.value=i,t.value=!1}),o.file.status==="error"&&(t.value=!1,W.error("upload error"))},beforeUpload:o=>{const i=o.type==="image/jpeg"||o.type==="image/png";i||W.error("You can only upload JPG file!");const s=o.size/1024/1024<2;return s||W.error("Image must smaller than 2MB!"),i&&s}}}});const jn={key:1},Cn=f("div",{class:"ant-upload-text"},"Upload",-1);function $n(e,t,n,r,a,o){const i=p("loading-outlined"),s=p("plus-outlined"),l=p("a-upload");return P(),O(l,{"file-list":e.fileList,"onUpdate:file-list":t[1]||(t[1]=u=>e.fileList=u),name:"avatar","list-type":"picture-card",class:"avatar-uploader","show-upload-list":!1,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76","before-upload":e.beforeUpload,onChange:e.handleChange},{default:w(()=>[e.imageUrl?(P(),O("img",{key:0,src:e.imageUrl,alt:"avatar"},null,8,["src"])):(P(),O("div",jn,[e.loading?(P(),O(i,{key:0})):(P(),O(s,{key:1})),Cn]))]),_:1},8,["file-list","before-upload","onChange"])}vt.render=$n;var Rn=`<cn>
#### \u7528\u6237\u5934\u50CF
\u70B9\u51FB\u4E0A\u4F20\u7528\u6237\u5934\u50CF\uFF0C\u5E76\u4F7F\u7528 \`beforeUpload\` \u9650\u5236\u7528\u6237\u4E0A\u4F20\u7684\u56FE\u7247\u683C\u5F0F\u548C\u5927\u5C0F\u3002
\`beforeUpload\` \u7684\u8FD4\u56DE\u503C\u53EF\u4EE5\u662F\u4E00\u4E2A Promise \u4EE5\u652F\u6301\u5F02\u6B65\u5904\u7406\uFF0C\u5982\u670D\u52A1\u7AEF\u6821\u9A8C\u7B49
</cn>

<us>
#### Avatar
Click to upload user's avatar, and validate size and format of picture with \`beforeUpload\`.
The return value of function \`beforeUpload\` can be a Promise to check asynchronously.
</us>
`,kn=`<template>
  <a-upload
    v-model:file-list="fileList"
    name="avatar"
    list-type="picture-card"
    class="avatar-uploader"
    :show-upload-list="false"
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    :before-upload="beforeUpload"
    @change="handleChange"
  >
    <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
    <div v-else>
      <loading-outlined v-if="loading"></loading-outlined>
      <plus-outlined v-else></plus-outlined>
      <div class="ant-upload-text">Upload</div>
    </div>
  </a-upload>
</template>
<script lang="ts">
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import { message } from '@fe6/water-pro';

interface FileItem {
  uid: string;
  name?: string;
  status?: string;
  response?: string;
  url?: string;
  type?: string;
  size: number;
  originFileObj: any;
}

interface FileInfo {
  file: FileItem;
  fileList: FileItem[];
}

function getBase64(img: Blob, callback: (base64Url: string) => void) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
}
export default defineComponent({
  components: {
    LoadingOutlined,
    PlusOutlined,
  },
  setup() {
    const fileList = ref([]);
    const loading = ref<boolean>(false);
    const imageUrl = ref<string>('');

    const handleChange = (info: FileInfo) => {
      if (info.file.status === 'uploading') {
        loading.value = true;
        return;
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, (base64Url: string) => {
          imageUrl.value = base64Url;
          loading.value = false;
        });
      }
      if (info.file.status === 'error') {
        loading.value = false;
        message.error('upload error');
      }
    };

    const beforeUpload = (file: FileItem) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        message.error('You can only upload JPG file!');
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
      }
      return isJpgOrPng && isLt2M;
    };

    return {
      fileList,
      loading,
      imageUrl,
      handleChange,
      beforeUpload,
    };
  },
});
<\/script>
<style>
.avatar-uploader > .ant-upload {
  width: 128px;
  height: 128px;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
`,bt=T({components:{UploadOutlined:G},setup(){return{fileList:E([{uid:"1",name:"xxx.png",status:"done",response:"Server Error 500",url:"http://www.baidu.com/xxx.png"},{uid:"2",name:"yyy.png",status:"done",url:"http://www.baidu.com/yyy.png"},{uid:"3",name:"zzz.png",status:"error",response:"Server Error 500",url:"http://www.baidu.com/zzz.png"}]),handleChange:({file:n,fileList:r})=>{n.status!=="uploading"&&console.log(n,r)}}}});const Tn=D(" Upload ");function Bn(e,t,n,r,a,o){const i=p("upload-outlined"),s=p("a-button"),l=p("a-upload");return P(),O(l,{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76","file-list":e.fileList,"onUpdate:file-list":t[1]||(t[1]=u=>e.fileList=u)},{default:w(()=>[f(s,null,{default:w(()=>[f(i),Tn]),_:1})]),_:1},8,["file-list"])}bt.render=Bn;var qn=`<cn>
#### \u5DF2\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868
\u4F7F\u7528 \`defaultFileList\` \u8BBE\u7F6E\u5DF2\u4E0A\u4F20\u7684\u5185\u5BB9\u3002
</cn>

<us>
#### Default Files
Use \`defaultFileList\` for uploaded files when page init.
</us>
`,Dn=`<template>
  <a-upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" v-model:file-list="fileList">
    <a-button>
      <upload-outlined></upload-outlined>
      Upload
    </a-button>
  </a-upload>
</template>
<script lang="ts">
import { UploadOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';

interface FileItem {
  uid: string;
  name?: string;
  status?: string;
  response?: string;
  url?: string;
}
interface FileInfo {
  file: FileItem;
  fileList: FileItem[];
}

export default defineComponent({
  components: {
    UploadOutlined,
  },
  setup() {
    const fileList = ref<FileItem[]>([
      {
        uid: '1',
        name: 'xxx.png',
        status: 'done',
        response: 'Server Error 500', // custom error message to show
        url: 'http://www.baidu.com/xxx.png',
      },
      {
        uid: '2',
        name: 'yyy.png',
        status: 'done',
        url: 'http://www.baidu.com/yyy.png',
      },
      {
        uid: '3',
        name: 'zzz.png',
        status: 'error',
        response: 'Server Error 500', // custom error message to show
        url: 'http://www.baidu.com/zzz.png',
      },
    ]);

    const handleChange = ({ file, fileList }: FileInfo) => {
      if (file.status !== 'uploading') {
        console.log(file, fileList);
      }
    };
    return {
      fileList,
      handleChange,
    };
  },
});
<\/script>
`;function Mn(e){return new Promise((t,n)=>{const r=new FileReader;r.readAsDataURL(e),r.onload=()=>t(r.result),r.onerror=a=>n(a)})}var wt=T({components:{PlusOutlined:ht},setup(){const e=E(!1),t=E(""),n=E([{uid:"-1",name:"image.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-2",name:"image.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-3",name:"image.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-4",name:"image.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-5",name:"image.png",status:"error"}]);return{previewVisible:e,previewImage:t,fileList:n,handleCancel:()=>{e.value=!1},handlePreview:async i=>{!i.url&&!i.preview&&(i.preview=await Mn(i.originFileObj)),t.value=i.url||i.preview,e.value=!0},handleChange:({fileList:i})=>{n.value=i}}}});const Nn={class:"clearfix"},Vn={key:0},zn=f("div",{class:"ant-upload-text"},"Upload",-1);function Wn(e,t,n,r,a,o){const i=p("plus-outlined"),s=p("a-upload"),l=p("a-modal");return P(),O("div",Nn,[f(s,{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76","list-type":"picture-card","file-list":e.fileList,"onUpdate:file-list":t[1]||(t[1]=u=>e.fileList=u),onPreview:e.handlePreview},{default:w(()=>[e.fileList.length<8?(P(),O("div",Vn,[f(i),zn])):bn("v-if",!0)]),_:1},8,["file-list","onPreview"]),f(l,{visible:e.previewVisible,footer:null,onCancel:e.handleCancel},{default:w(()=>[f("img",{alt:"example",style:{width:"100%"},src:e.previewImage},null,8,["src"])]),_:1},8,["visible","onCancel"])])}wt.render=Wn;var Jn=`<cn>
#### \u7167\u7247\u5899
v-model \u4E2D\u5D4C\u5957\u5404\u79CD\u590D\u6742\u6570\u636E\u3002\u5EFA\u8BAE\u4F7F\u7528 [upload-card](./upload-card-cn)
</cn>

<us>
#### Pictures Wall
After users upload picture, the thumbnail will be shown in list. The upload button will disappear when count meets limitation.
</us>
`,Zn=`<template>
  <div class="clearfix">
    <a-upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      list-type="picture-card"
      v-model:file-list="fileList"
      @preview="handlePreview"
    >
      <div v-if="fileList.length < 8">
        <plus-outlined />
        <div class="ant-upload-text">Upload</div>
      </div>
    </a-upload>
    <a-modal :visible="previewVisible" :footer="null" @cancel="handleCancel">
      <img alt="example" style="width: 100%" :src="previewImage" />
    </a-modal>
  </div>
</template>
<script lang="ts">
import { PlusOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';

function getBase64(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

interface FileItem {
  uid: string;
  name?: string;
  status?: string;
  response?: string;
  percent?: number;
  url?: string;
  preview?: string;
  originFileObj?: any;
}

interface FileInfo {
  file: FileItem;
  fileList: FileItem[];
}

export default defineComponent({
  components: {
    PlusOutlined,
  },
  setup() {
    const previewVisible = ref<boolean>(false);
    const previewImage = ref<string | undefined>('');

    const fileList = ref<FileItem[]>([
      {
        uid: '-1',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
      {
        uid: '-2',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
      {
        uid: '-3',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
      {
        uid: '-4',
        name: 'image.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
      {
        uid: '-5',
        name: 'image.png',
        status: 'error',
      },
    ]);

    const handleCancel = () => {
      previewVisible.value = false;
    };
    const handlePreview = async (file: FileItem) => {
      if (!file.url && !file.preview) {
        file.preview = (await getBase64(file.originFileObj)) as string;
      }
      previewImage.value = file.url || file.preview;
      previewVisible.value = true;
    };
    const handleChange = ({ fileList: newFileList }: FileInfo) => {
      fileList.value = newFileList;
    };

    return {
      previewVisible,
      previewImage,
      fileList,
      handleCancel,
      handlePreview,
      handleChange,
    };
  },
});
<\/script>
<style>
/* you can make up upload button and sample style by using stylesheets */
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>
`,_t=T({components:{UploadOutlined:G},setup(){const e=E([{uid:"-1",name:"xxx.png",status:"done",url:"http://www.baidu.com/xxx.png"}]);return{fileList:e,handleChange:n=>{let r=[...n.fileList];r=r.slice(-2),r=r.map(a=>(a.response&&(a.url=a.response.url),a)),e.value=r}}}});const Hn=D(" Upload ");function Gn(e,t,n,r,a,o){const i=p("upload-outlined"),s=p("a-button"),l=p("a-upload");return P(),O(l,{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",multiple:!0,"file-list":e.fileList,onChange:e.handleChange},{default:w(()=>[f(s,null,{default:w(()=>[f(i),Hn]),_:1})]),_:1},8,["file-list","onChange"])}_t.render=Gn;var Qn=`<cn>
#### \u5B8C\u5168\u63A7\u5236\u7684\u4E0A\u4F20\u5217\u8868
\u4F7F\u7528 \`fileList\` \u5BF9\u5217\u8868\u8FDB\u884C\u5B8C\u5168\u63A7\u5236\uFF0C\u53EF\u4EE5\u5B9E\u73B0\u5404\u79CD\u81EA\u5B9A\u4E49\u529F\u80FD\uFF0C\u4EE5\u4E0B\u6F14\u793A\u4E09\u79CD\u60C5\u51B5\uFF1A
1) \u4E0A\u4F20\u5217\u8868\u6570\u91CF\u7684\u9650\u5236\u3002
2) \u8BFB\u53D6\u8FDC\u7A0B\u8DEF\u5F84\u5E76\u663E\u793A\u94FE\u63A5\u3002
</cn>

<us>
#### Complete control over file list
You can gain full control over filelist by configuring \`fileList\`. You can accomplish all kinds of customed functions. The following shows three circumstances:
1) limit the number of uploaded files.
2) read from response and show file link.
</us>
`,Yn=`<template>
  <a-upload
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    :multiple="true"
    :file-list="fileList"
    @change="handleChange"
  >
    <a-button>
      <upload-outlined></upload-outlined>
      Upload
    </a-button>
  </a-upload>
</template>
<script lang="ts">
import { UploadOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';

interface FileItem {
  uid: string;
  name?: string;
  status?: string;
  response?: Response;
  url: string;
}

interface FileInfo {
  file: FileItem;
  fileList: FileItem[];
}

export default defineComponent({
  components: {
    UploadOutlined,
  },
  setup() {
    const fileList = ref<FileItem[]>([
      {
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'http://www.baidu.com/xxx.png',
      },
    ]);
    const handleChange = (info: FileInfo) => {
      let resFileList = [...info.fileList];

      // 1. Limit the number of uploaded files
      //    Only to show two recent uploaded files, and old ones will be replaced by the new
      resFileList = resFileList.slice(-2);

      // 2. read from response and show file link
      resFileList = resFileList.map(file => {
        if (file.response) {
          // Component will show file.url as link
          file.url = file.response.url;
        }
        return file;
      });

      fileList.value = resFileList;
    };
    return {
      fileList,
      handleChange,
    };
  },
});
<\/script>
`,St=T({components:{InboxOutlined:wn},setup(){return{handleChange:t=>{const n=t.file.status;n!=="uploading"&&console.log(t.file,t.fileList),n==="done"?W.success(`${t.file.name} file uploaded successfully.`):n==="error"&&W.error(`${t.file.name} file upload failed.`)},fileList:E([])}}});const Kn={class:"ant-upload-drag-icon"},Xn=f("p",{class:"ant-upload-text"},"Click or drag file to this area to upload",-1),er=f("p",{class:"ant-upload-hint"}," Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files ",-1);function tr(e,t,n,r,a,o){const i=p("inbox-outlined"),s=p("a-upload-dragger");return P(),O(s,{fileList:e.fileList,"onUpdate:fileList":t[1]||(t[1]=l=>e.fileList=l),name:"file",multiple:!0,action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",onChange:e.handleChange},{default:w(()=>[f("p",Kn,[f(i)]),Xn,er]),_:1},8,["fileList","onChange"])}St.render=tr;var nr=`<cn>
#### \u62D6\u62FD\u4E0A\u4F20
\u628A\u6587\u4EF6\u62D6\u5165\u6307\u5B9A\u533A\u57DF\uFF0C\u5B8C\u6210\u4E0A\u4F20\uFF0C\u540C\u6837\u652F\u6301\u70B9\u51FB\u4E0A\u4F20\u3002
\u8BBE\u7F6E \`multiple\` \u540E\uFF0C\u5728 \`IE10+\` \u53EF\u4EE5\u4E00\u6B21\u4E0A\u4F20\u591A\u4E2A\u6587\u4EF6\u3002
</cn>

<us>
#### Drag and Drop
Classic mode. File selection dialog pops up when upload button is clicked.
</us>
`,rr=`<template>
  <a-upload-dragger
    v-model:fileList="fileList"
    name="file"
    :multiple="true"
    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
    @change="handleChange"
  >
    <p class="ant-upload-drag-icon">
      <inbox-outlined></inbox-outlined>
    </p>
    <p class="ant-upload-text">Click or drag file to this area to upload</p>
    <p class="ant-upload-hint">
      Support for a single or bulk upload. Strictly prohibit from uploading company data or other
      band files
    </p>
  </a-upload-dragger>
</template>
<script lang="ts">
import { InboxOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import { message } from '@fe6/water-pro';

interface FileItem {
  uid: string;
  name?: string;
  status?: string;
  response?: string;
  url?: string;
}

interface FileInfo {
  file: FileItem;
  fileList: FileItem[];
}

export default defineComponent({
  components: {
    InboxOutlined,
  },
  setup() {
    const handleChange = (info: FileInfo) => {
      const status = info.file.status;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(\`\${info.file.name} file uploaded successfully.\`);
      } else if (status === 'error') {
        message.error(\`\${info.file.name} file upload failed.\`);
      }
    };
    return {
      handleChange,
      fileList: ref([]),
    };
  },
});
<\/script>
`,Te=T({components:{UploadOutlined:G},setup(){const e=E([{uid:"-1",name:"xxx.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",thumbUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-2",name:"yyy.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",thumbUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}]),t=E([{uid:"-1",name:"xxx.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",thumbUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"},{uid:"-2",name:"yyy.png",status:"done",url:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",thumbUrl:"https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"}]);return{fileList:e,fileList1:t}}});const ce=Pn();_n("data-v-b87a7c8a");const or=D(" upload "),ar=f("br",null,null,-1),ir=f("br",null,null,-1),sr=D(" upload ");Sn();const lr=ce((e,t,n,r,a,o)=>{const i=p("upload-outlined"),s=p("a-button"),l=p("a-upload");return P(),O("div",null,[f(l,{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76","list-type":"picture","file-list":e.fileList,"onUpdate:file-list":t[1]||(t[1]=u=>e.fileList=u)},{default:ce(()=>[f(s,null,{default:ce(()=>[f(i),or]),_:1})]),_:1},8,["file-list"]),ar,ir,f(l,{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76","list-type":"picture","file-list":e.fileList1,"onUpdate:file-list":t[2]||(t[2]=u=>e.fileList1=u),class:"upload-list-inline"},{default:ce(()=>[f(s,null,{default:ce(()=>[f(i),sr]),_:1})]),_:1},8,["file-list"])])});Te.render=lr;Te.__scopeId="data-v-b87a7c8a";var ur=`<cn>
#### \u56FE\u7247\u5217\u8868\u6837\u5F0F
\u4E0A\u4F20\u6587\u4EF6\u4E3A\u56FE\u7247\uFF0C\u53EF\u5C55\u793A\u672C\u5730\u7F29\u7565\u56FE\u3002\`IE8/9\` \u4E0D\u652F\u6301\u6D4F\u89C8\u5668\u672C\u5730\u7F29\u7565\u56FE\u5C55\u793A\uFF08[Ref](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL)\uFF09\uFF0C\u53EF\u4EE5\u5199 \`thumbUrl\` \u5C5E\u6027\u6765\u4EE3\u66FF\u3002
</cn>

<us>
#### Pictures with list style
If uploaded file is a picture, the thumbnail can be shown. \`IE8/9\` do not support local thumbnail show. Please use \`thumbUrl\` instead.
</us>
`,fr=`<template>
  <div>
    <a-upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      list-type="picture"
      v-model:file-list="fileList"
    >
      <a-button>
        <upload-outlined></upload-outlined>
        upload
      </a-button>
    </a-upload>
    <br />
    <br />
    <a-upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      list-type="picture"
      v-model:file-list="fileList1"
      class="upload-list-inline"
    >
      <a-button>
        <upload-outlined></upload-outlined>
        upload
      </a-button>
    </a-upload>
  </div>
</template>
<script lang="ts">
import { UploadOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';

interface FileItem {
  uid: string;
  name?: string;
  status?: string;
  response?: string;
  url?: string;
  thumbUrl?: string;
}

export default defineComponent({
  components: {
    UploadOutlined,
  },
  setup() {
    const fileList = ref<FileItem[]>([
      {
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
      {
        uid: '-2',
        name: 'yyy.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
    ]);
    const fileList1 = ref<FileItem[]>([
      {
        uid: '-1',
        name: 'xxx.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
      {
        uid: '-2',
        name: 'yyy.png',
        status: 'done',
        url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      },
    ]);
    return {
      fileList,
      fileList1,
    };
  },
});
<\/script>
<style scoped>
/* tile uploaded pictures */
.upload-list-inline :deep(.ant-upload-list-item) {
  float: left;
  width: 200px;
  margin-right: 8px;
}
.upload-list-inline :deep(.ant-upload-animate-enter) {
  animation-name: uploadAnimateInlineIn;
}
.upload-list-inline :deep(.ant-upload-animate-leave) {
  animation-name: uploadAnimateInlineOut;
}
</style>
`,cr=function(){if(typeof Symbol!="function"||typeof Object.getOwnPropertySymbols!="function")return!1;if(typeof Symbol.iterator=="symbol")return!0;var t={},n=Symbol("test"),r=Object(n);if(typeof n=="string"||Object.prototype.toString.call(n)!=="[object Symbol]"||Object.prototype.toString.call(r)!=="[object Symbol]")return!1;var a=42;t[n]=a;for(n in t)return!1;if(typeof Object.keys=="function"&&Object.keys(t).length!==0||typeof Object.getOwnPropertyNames=="function"&&Object.getOwnPropertyNames(t).length!==0)return!1;var o=Object.getOwnPropertySymbols(t);if(o.length!==1||o[0]!==n||!Object.prototype.propertyIsEnumerable.call(t,n))return!1;if(typeof Object.getOwnPropertyDescriptor=="function"){var i=Object.getOwnPropertyDescriptor(t,n);if(i.value!==a||i.enumerable!==!0)return!1}return!0},Pt=typeof Symbol!="undefined"&&Symbol,pr=cr,dr=function(){return typeof Pt!="function"||typeof Symbol!="function"||typeof Pt("foo")!="symbol"||typeof Symbol("bar")!="symbol"?!1:pr()},yr="Function.prototype.bind called on incompatible ",Be=Array.prototype.slice,mr=Object.prototype.toString,hr="[object Function]",gr=function(t){var n=this;if(typeof n!="function"||mr.call(n)!==hr)throw new TypeError(yr+n);for(var r=Be.call(arguments,1),a,o=function(){if(this instanceof a){var c=n.apply(this,r.concat(Be.call(arguments)));return Object(c)===c?c:this}else return n.apply(t,r.concat(Be.call(arguments)))},i=Math.max(0,n.length-r.length),s=[],l=0;l<i;l++)s.push("$"+l);if(a=Function("binder","return function ("+s.join(",")+"){ return binder.apply(this,arguments); }")(o),n.prototype){var u=function(){};u.prototype=n.prototype,a.prototype=new u,u.prototype=null}return a},vr=gr,qe=Function.prototype.bind||vr,br=qe,wr=br.call(Function.call,Object.prototype.hasOwnProperty),m,pe=SyntaxError,Ot=Function,ae=TypeError,De=function(e){try{return Ot('"use strict"; return ('+e+").constructor;")()}catch(t){}},X=Object.getOwnPropertyDescriptor;if(X)try{X({},"")}catch(e){X=null}var Me=function(){throw new ae},_r=X?function(){try{return arguments.callee,Me}catch(e){try{return X(arguments,"callee").get}catch(t){return Me}}}():Me,ie=dr(),Q=Object.getPrototypeOf||function(e){return e.__proto__},se={},Sr=typeof Uint8Array=="undefined"?m:Q(Uint8Array),le={"%AggregateError%":typeof AggregateError=="undefined"?m:AggregateError,"%Array%":Array,"%ArrayBuffer%":typeof ArrayBuffer=="undefined"?m:ArrayBuffer,"%ArrayIteratorPrototype%":ie?Q([][Symbol.iterator]()):m,"%AsyncFromSyncIteratorPrototype%":m,"%AsyncFunction%":se,"%AsyncGenerator%":se,"%AsyncGeneratorFunction%":se,"%AsyncIteratorPrototype%":se,"%Atomics%":typeof Atomics=="undefined"?m:Atomics,"%BigInt%":typeof BigInt=="undefined"?m:BigInt,"%Boolean%":Boolean,"%DataView%":typeof DataView=="undefined"?m:DataView,"%Date%":Date,"%decodeURI%":decodeURI,"%decodeURIComponent%":decodeURIComponent,"%encodeURI%":encodeURI,"%encodeURIComponent%":encodeURIComponent,"%Error%":Error,"%eval%":eval,"%EvalError%":EvalError,"%Float32Array%":typeof Float32Array=="undefined"?m:Float32Array,"%Float64Array%":typeof Float64Array=="undefined"?m:Float64Array,"%FinalizationRegistry%":typeof FinalizationRegistry=="undefined"?m:FinalizationRegistry,"%Function%":Ot,"%GeneratorFunction%":se,"%Int8Array%":typeof Int8Array=="undefined"?m:Int8Array,"%Int16Array%":typeof Int16Array=="undefined"?m:Int16Array,"%Int32Array%":typeof Int32Array=="undefined"?m:Int32Array,"%isFinite%":isFinite,"%isNaN%":isNaN,"%IteratorPrototype%":ie?Q(Q([][Symbol.iterator]())):m,"%JSON%":typeof JSON=="object"?JSON:m,"%Map%":typeof Map=="undefined"?m:Map,"%MapIteratorPrototype%":typeof Map=="undefined"||!ie?m:Q(new Map()[Symbol.iterator]()),"%Math%":Math,"%Number%":Number,"%Object%":Object,"%parseFloat%":parseFloat,"%parseInt%":parseInt,"%Promise%":typeof Promise=="undefined"?m:Promise,"%Proxy%":typeof Proxy=="undefined"?m:Proxy,"%RangeError%":RangeError,"%ReferenceError%":ReferenceError,"%Reflect%":typeof Reflect=="undefined"?m:Reflect,"%RegExp%":RegExp,"%Set%":typeof Set=="undefined"?m:Set,"%SetIteratorPrototype%":typeof Set=="undefined"||!ie?m:Q(new Set()[Symbol.iterator]()),"%SharedArrayBuffer%":typeof SharedArrayBuffer=="undefined"?m:SharedArrayBuffer,"%String%":String,"%StringIteratorPrototype%":ie?Q(""[Symbol.iterator]()):m,"%Symbol%":ie?Symbol:m,"%SyntaxError%":pe,"%ThrowTypeError%":_r,"%TypedArray%":Sr,"%TypeError%":ae,"%Uint8Array%":typeof Uint8Array=="undefined"?m:Uint8Array,"%Uint8ClampedArray%":typeof Uint8ClampedArray=="undefined"?m:Uint8ClampedArray,"%Uint16Array%":typeof Uint16Array=="undefined"?m:Uint16Array,"%Uint32Array%":typeof Uint32Array=="undefined"?m:Uint32Array,"%URIError%":URIError,"%WeakMap%":typeof WeakMap=="undefined"?m:WeakMap,"%WeakRef%":typeof WeakRef=="undefined"?m:WeakRef,"%WeakSet%":typeof WeakSet=="undefined"?m:WeakSet},Pr=function e(t){var n;if(t==="%AsyncFunction%")n=De("async function () {}");else if(t==="%GeneratorFunction%")n=De("function* () {}");else if(t==="%AsyncGeneratorFunction%")n=De("async function* () {}");else if(t==="%AsyncGenerator%"){var r=e("%AsyncGeneratorFunction%");r&&(n=r.prototype)}else if(t==="%AsyncIteratorPrototype%"){var a=e("%AsyncGenerator%");a&&(n=Q(a.prototype))}return le[t]=n,n},Ut={"%ArrayBufferPrototype%":["ArrayBuffer","prototype"],"%ArrayPrototype%":["Array","prototype"],"%ArrayProto_entries%":["Array","prototype","entries"],"%ArrayProto_forEach%":["Array","prototype","forEach"],"%ArrayProto_keys%":["Array","prototype","keys"],"%ArrayProto_values%":["Array","prototype","values"],"%AsyncFunctionPrototype%":["AsyncFunction","prototype"],"%AsyncGenerator%":["AsyncGeneratorFunction","prototype"],"%AsyncGeneratorPrototype%":["AsyncGeneratorFunction","prototype","prototype"],"%BooleanPrototype%":["Boolean","prototype"],"%DataViewPrototype%":["DataView","prototype"],"%DatePrototype%":["Date","prototype"],"%ErrorPrototype%":["Error","prototype"],"%EvalErrorPrototype%":["EvalError","prototype"],"%Float32ArrayPrototype%":["Float32Array","prototype"],"%Float64ArrayPrototype%":["Float64Array","prototype"],"%FunctionPrototype%":["Function","prototype"],"%Generator%":["GeneratorFunction","prototype"],"%GeneratorPrototype%":["GeneratorFunction","prototype","prototype"],"%Int8ArrayPrototype%":["Int8Array","prototype"],"%Int16ArrayPrototype%":["Int16Array","prototype"],"%Int32ArrayPrototype%":["Int32Array","prototype"],"%JSONParse%":["JSON","parse"],"%JSONStringify%":["JSON","stringify"],"%MapPrototype%":["Map","prototype"],"%NumberPrototype%":["Number","prototype"],"%ObjectPrototype%":["Object","prototype"],"%ObjProto_toString%":["Object","prototype","toString"],"%ObjProto_valueOf%":["Object","prototype","valueOf"],"%PromisePrototype%":["Promise","prototype"],"%PromiseProto_then%":["Promise","prototype","then"],"%Promise_all%":["Promise","all"],"%Promise_reject%":["Promise","reject"],"%Promise_resolve%":["Promise","resolve"],"%RangeErrorPrototype%":["RangeError","prototype"],"%ReferenceErrorPrototype%":["ReferenceError","prototype"],"%RegExpPrototype%":["RegExp","prototype"],"%SetPrototype%":["Set","prototype"],"%SharedArrayBufferPrototype%":["SharedArrayBuffer","prototype"],"%StringPrototype%":["String","prototype"],"%SymbolPrototype%":["Symbol","prototype"],"%SyntaxErrorPrototype%":["SyntaxError","prototype"],"%TypedArrayPrototype%":["TypedArray","prototype"],"%TypeErrorPrototype%":["TypeError","prototype"],"%Uint8ArrayPrototype%":["Uint8Array","prototype"],"%Uint8ClampedArrayPrototype%":["Uint8ClampedArray","prototype"],"%Uint16ArrayPrototype%":["Uint16Array","prototype"],"%Uint32ArrayPrototype%":["Uint32Array","prototype"],"%URIErrorPrototype%":["URIError","prototype"],"%WeakMapPrototype%":["WeakMap","prototype"],"%WeakSetPrototype%":["WeakSet","prototype"]},Oe=qe,Ue=wr,Or=Oe.call(Function.call,Array.prototype.concat),Ur=Oe.call(Function.apply,Array.prototype.splice),Et=Oe.call(Function.call,String.prototype.replace),Ee=Oe.call(Function.call,String.prototype.slice),Er=/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,Ir=/\\(\\)?/g,Ar=function(t){var n=Ee(t,0,1),r=Ee(t,-1);if(n==="%"&&r!=="%")throw new pe("invalid intrinsic syntax, expected closing `%`");if(r==="%"&&n!=="%")throw new pe("invalid intrinsic syntax, expected opening `%`");var a=[];return Et(t,Er,function(o,i,s,l){a[a.length]=s?Et(l,Ir,"$1"):i||o}),a},Fr=function(t,n){var r=t,a;if(Ue(Ut,r)&&(a=Ut[r],r="%"+a[0]+"%"),Ue(le,r)){var o=le[r];if(o===se&&(o=Pr(r)),typeof o=="undefined"&&!n)throw new ae("intrinsic "+t+" exists, but is not available. Please file an issue!");return{alias:a,name:r,value:o}}throw new pe("intrinsic "+t+" does not exist!")},Ne=function(t,n){if(typeof t!="string"||t.length===0)throw new ae("intrinsic name must be a non-empty string");if(arguments.length>1&&typeof n!="boolean")throw new ae('"allowMissing" argument must be a boolean');var r=Ar(t),a=r.length>0?r[0]:"",o=Fr("%"+a+"%",n),i=o.name,s=o.value,l=!1,u=o.alias;u&&(a=u[0],Ur(r,Or([0,1],u)));for(var c=1,d=!0;c<r.length;c+=1){var y=r[c],h=Ee(y,0,1),v=Ee(y,-1);if((h==='"'||h==="'"||h==="`"||v==='"'||v==="'"||v==="`")&&h!==v)throw new pe("property names with quotes must have matching quotes");if((y==="constructor"||!d)&&(l=!0),a+="."+y,i="%"+a+"%",Ue(le,i))s=le[i];else if(s!=null){if(!(y in s)){if(!n)throw new ae("base intrinsic for "+t+" exists, but the property is not available.");return}if(X&&c+1>=r.length){var b=X(s,y);d=!!b,d&&"get"in b&&!("originalValue"in b.get)?s=b.get:s=s[y]}else d=Ue(s,y),s=s[y];d&&!l&&(le[i]=s)}}return s},It={exports:{}};(function(e){var t=qe,n=Ne,r=n("%Function.prototype.apply%"),a=n("%Function.prototype.call%"),o=n("%Reflect.apply%",!0)||t.call(a,r),i=n("%Object.getOwnPropertyDescriptor%",!0),s=n("%Object.defineProperty%",!0),l=n("%Math.max%");if(s)try{s({},"a",{value:1})}catch(c){s=null}e.exports=function(d){var y=o(t,a,arguments);if(i&&s){var h=i(y,"length");h.configurable&&s(y,"length",{value:1+l(0,d.length-(arguments.length-1))})}return y};var u=function(){return o(t,r,arguments)};s?s(e.exports,"apply",{value:u}):e.exports.apply=u})(It);var At=Ne,Ft=It.exports,xr=Ft(At("String.prototype.indexOf")),Lr=function(t,n){var r=At(t,!!n);return typeof r=="function"&&xr(t,".prototype.")>-1?Ft(r):r},jr={},Cr=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:jr}),$r=On(Cr),Ve=typeof Map=="function"&&Map.prototype,ze=Object.getOwnPropertyDescriptor&&Ve?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,Ie=Ve&&ze&&typeof ze.get=="function"?ze.get:null,Rr=Ve&&Map.prototype.forEach,We=typeof Set=="function"&&Set.prototype,Je=Object.getOwnPropertyDescriptor&&We?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,Ae=We&&Je&&typeof Je.get=="function"?Je.get:null,kr=We&&Set.prototype.forEach,Tr=typeof WeakMap=="function"&&WeakMap.prototype,de=Tr?WeakMap.prototype.has:null,Br=typeof WeakSet=="function"&&WeakSet.prototype,ye=Br?WeakSet.prototype.has:null,qr=typeof WeakRef=="function"&&WeakRef.prototype,xt=qr?WeakRef.prototype.deref:null,Dr=Boolean.prototype.valueOf,Mr=Object.prototype.toString,Nr=Function.prototype.toString,Vr=String.prototype.match,Ze=typeof BigInt=="function"?BigInt.prototype.valueOf:null,He=Object.getOwnPropertySymbols,Ge=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,me=typeof Symbol=="function"&&typeof Symbol.iterator=="object",zr=Object.prototype.propertyIsEnumerable,Lt=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(e){return e.__proto__}:null),Qe=$r.custom,Ye=Qe&&Ct(Qe)?Qe:null,I=typeof Symbol=="function"&&typeof Symbol.toStringTag!="undefined"?Symbol.toStringTag:null,Wr=function e(t,n,r,a){var o=n||{};if(ee(o,"quoteStyle")&&o.quoteStyle!=="single"&&o.quoteStyle!=="double")throw new TypeError('option "quoteStyle" must be "single" or "double"');if(ee(o,"maxStringLength")&&(typeof o.maxStringLength=="number"?o.maxStringLength<0&&o.maxStringLength!==1/0:o.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var i=ee(o,"customInspect")?o.customInspect:!0;if(typeof i!="boolean")throw new TypeError('option "customInspect", if provided, must be `true` or `false`');if(ee(o,"indent")&&o.indent!==null&&o.indent!=="	"&&!(parseInt(o.indent,10)===o.indent&&o.indent>0))throw new TypeError('options "indent" must be "\\t", an integer > 0, or `null`');if(typeof t=="undefined")return"undefined";if(t===null)return"null";if(typeof t=="boolean")return t?"true":"false";if(typeof t=="string")return Rt(t,o);if(typeof t=="number")return t===0?1/0/t>0?"0":"-0":String(t);if(typeof t=="bigint")return String(t)+"n";var s=typeof o.depth=="undefined"?5:o.depth;if(typeof r=="undefined"&&(r=0),r>=s&&s>0&&typeof t=="object")return Ke(t)?"[Array]":"[Object]";var l=fo(o,r);if(typeof a=="undefined")a=[];else if($t(a,t)>=0)return"[Circular]";function u(U,k,ke){if(k&&(a=a.slice(),a.push(k)),ke){var mt={depth:o.depth};return ee(o,"quoteStyle")&&(mt.quoteStyle=o.quoteStyle),e(U,mt,r+1,a)}return e(U,o,r+1,a)}if(typeof t=="function"){var c=to(t),d=Fe(t,u);return"[Function"+(c?": "+c:" (anonymous)")+"]"+(d.length>0?" { "+d.join(", ")+" }":"")}if(Ct(t)){var y=me?String(t).replace(/^(Symbol\(.*\))_[^)]*$/,"$1"):Ge.call(t);return typeof t=="object"&&!me?he(y):y}if(so(t)){for(var h="<"+String(t.nodeName).toLowerCase(),v=t.attributes||[],b=0;b<v.length;b++)h+=" "+v[b].name+"="+jt(Jr(v[b].value),"double",o);return h+=">",t.childNodes&&t.childNodes.length&&(h+="..."),h+="</"+String(t.nodeName).toLowerCase()+">",h}if(Ke(t)){if(t.length===0)return"[]";var g=Fe(t,u);return l&&!uo(g)?"["+et(g,l)+"]":"[ "+g.join(", ")+" ]"}if(Gr(t)){var x=Fe(t,u);return x.length===0?"["+String(t)+"]":"{ ["+String(t)+"] "+x.join(", ")+" }"}if(typeof t=="object"&&i){if(Ye&&typeof t[Ye]=="function")return t[Ye]();if(typeof t.inspect=="function")return t.inspect()}if(no(t)){var J=[];return Rr.call(t,function(U,k){J.push(u(k,t,!0)+" => "+u(U,t))}),kt("Map",Ie.call(t),J,l)}if(ao(t)){var $=[];return kr.call(t,function(U){$.push(u(U,t))}),kt("Set",Ae.call(t),$,l)}if(ro(t))return Xe("WeakMap");if(io(t))return Xe("WeakSet");if(oo(t))return Xe("WeakRef");if(Yr(t))return he(u(Number(t)));if(Xr(t))return he(u(Ze.call(t)));if(Kr(t))return he(Dr.call(t));if(Qr(t))return he(u(String(t)));if(!Zr(t)&&!Hr(t)){var Z=Fe(t,u),q=Lt?Lt(t)===Object.prototype:t instanceof Object||t.constructor===Object,C=t instanceof Object?"":"null prototype",H=!q&&I&&Object(t)===t&&I in t?Y(t).slice(8,-1):C?"Object":"",z=q||typeof t.constructor!="function"?"":t.constructor.name?t.constructor.name+" ":"",R=z+(H||C?"["+[].concat(H||[],C||[]).join(": ")+"] ":"");return Z.length===0?R+"{}":l?R+"{"+et(Z,l)+"}":R+"{ "+Z.join(", ")+" }"}return String(t)};function jt(e,t,n){var r=(n.quoteStyle||t)==="double"?'"':"'";return r+e+r}function Jr(e){return String(e).replace(/"/g,"&quot;")}function Ke(e){return Y(e)==="[object Array]"&&(!I||!(typeof e=="object"&&I in e))}function Zr(e){return Y(e)==="[object Date]"&&(!I||!(typeof e=="object"&&I in e))}function Hr(e){return Y(e)==="[object RegExp]"&&(!I||!(typeof e=="object"&&I in e))}function Gr(e){return Y(e)==="[object Error]"&&(!I||!(typeof e=="object"&&I in e))}function Qr(e){return Y(e)==="[object String]"&&(!I||!(typeof e=="object"&&I in e))}function Yr(e){return Y(e)==="[object Number]"&&(!I||!(typeof e=="object"&&I in e))}function Kr(e){return Y(e)==="[object Boolean]"&&(!I||!(typeof e=="object"&&I in e))}function Ct(e){if(me)return e&&typeof e=="object"&&e instanceof Symbol;if(typeof e=="symbol")return!0;if(!e||typeof e!="object"||!Ge)return!1;try{return Ge.call(e),!0}catch(t){}return!1}function Xr(e){if(!e||typeof e!="object"||!Ze)return!1;try{return Ze.call(e),!0}catch(t){}return!1}var eo=Object.prototype.hasOwnProperty||function(e){return e in this};function ee(e,t){return eo.call(e,t)}function Y(e){return Mr.call(e)}function to(e){if(e.name)return e.name;var t=Vr.call(Nr.call(e),/^function\s*([\w$]+)/);return t?t[1]:null}function $t(e,t){if(e.indexOf)return e.indexOf(t);for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1}function no(e){if(!Ie||!e||typeof e!="object")return!1;try{Ie.call(e);try{Ae.call(e)}catch(t){return!0}return e instanceof Map}catch(t){}return!1}function ro(e){if(!de||!e||typeof e!="object")return!1;try{de.call(e,de);try{ye.call(e,ye)}catch(t){return!0}return e instanceof WeakMap}catch(t){}return!1}function oo(e){if(!xt||!e||typeof e!="object")return!1;try{return xt.call(e),!0}catch(t){}return!1}function ao(e){if(!Ae||!e||typeof e!="object")return!1;try{Ae.call(e);try{Ie.call(e)}catch(t){return!0}return e instanceof Set}catch(t){}return!1}function io(e){if(!ye||!e||typeof e!="object")return!1;try{ye.call(e,ye);try{de.call(e,de)}catch(t){return!0}return e instanceof WeakSet}catch(t){}return!1}function so(e){return!e||typeof e!="object"?!1:typeof HTMLElement!="undefined"&&e instanceof HTMLElement?!0:typeof e.nodeName=="string"&&typeof e.getAttribute=="function"}function Rt(e,t){if(e.length>t.maxStringLength){var n=e.length-t.maxStringLength,r="... "+n+" more character"+(n>1?"s":"");return Rt(e.slice(0,t.maxStringLength),t)+r}var a=e.replace(/(['\\])/g,"\\$1").replace(/[\x00-\x1f]/g,lo);return jt(a,"single",t)}function lo(e){var t=e.charCodeAt(0),n={8:"b",9:"t",10:"n",12:"f",13:"r"}[t];return n?"\\"+n:"\\x"+(t<16?"0":"")+t.toString(16).toUpperCase()}function he(e){return"Object("+e+")"}function Xe(e){return e+" { ? }"}function kt(e,t,n,r){var a=r?et(n,r):n.join(", ");return e+" ("+t+") {"+a+"}"}function uo(e){for(var t=0;t<e.length;t++)if($t(e[t],`
`)>=0)return!1;return!0}function fo(e,t){var n;if(e.indent==="	")n="	";else if(typeof e.indent=="number"&&e.indent>0)n=Array(e.indent+1).join(" ");else return null;return{base:n,prev:Array(t+1).join(n)}}function et(e,t){if(e.length===0)return"";var n=`
`+t.prev+t.base;return n+e.join(","+n)+`
`+t.prev}function Fe(e,t){var n=Ke(e),r=[];if(n){r.length=e.length;for(var a=0;a<e.length;a++)r[a]=ee(e,a)?t(e[a],e):""}var o=typeof He=="function"?He(e):[],i;if(me){i={};for(var s=0;s<o.length;s++)i["$"+o[s]]=o[s]}for(var l in e)!ee(e,l)||n&&String(Number(l))===l&&l<e.length||me&&i["$"+l]instanceof Symbol||(/[^\w$]/.test(l)?r.push(t(l,e)+": "+t(e[l],e)):r.push(l+": "+t(e[l],e)));if(typeof He=="function")for(var u=0;u<o.length;u++)zr.call(e,o[u])&&r.push("["+t(o[u])+"]: "+t(e[o[u]],e));return r}var tt=Ne,ue=Lr,co=Wr,po=tt("%TypeError%"),xe=tt("%WeakMap%",!0),Le=tt("%Map%",!0),yo=ue("WeakMap.prototype.get",!0),mo=ue("WeakMap.prototype.set",!0),ho=ue("WeakMap.prototype.has",!0),go=ue("Map.prototype.get",!0),vo=ue("Map.prototype.set",!0),bo=ue("Map.prototype.has",!0),nt=function(e,t){for(var n=e,r;(r=n.next)!==null;n=r)if(r.key===t)return n.next=r.next,r.next=e.next,e.next=r,r},wo=function(e,t){var n=nt(e,t);return n&&n.value},_o=function(e,t,n){var r=nt(e,t);r?r.value=n:e.next={key:t,next:e.next,value:n}},So=function(e,t){return!!nt(e,t)},Po=function(){var t,n,r,a={assert:function(o){if(!a.has(o))throw new po("Side channel does not contain "+co(o))},get:function(o){if(xe&&o&&(typeof o=="object"||typeof o=="function")){if(t)return yo(t,o)}else if(Le){if(n)return go(n,o)}else if(r)return wo(r,o)},has:function(o){if(xe&&o&&(typeof o=="object"||typeof o=="function")){if(t)return ho(t,o)}else if(Le){if(n)return bo(n,o)}else if(r)return So(r,o);return!1},set:function(o,i){xe&&o&&(typeof o=="object"||typeof o=="function")?(t||(t=new xe),mo(t,o,i)):Le?(n||(n=new Le),vo(n,o,i)):(r||(r={key:{},next:null}),_o(r,o,i))}};return a},Oo=String.prototype.replace,Uo=/%20/g,rt={RFC1738:"RFC1738",RFC3986:"RFC3986"},ot={default:rt.RFC3986,formatters:{RFC1738:function(e){return Oo.call(e,Uo,"+")},RFC3986:function(e){return String(e)}},RFC1738:rt.RFC1738,RFC3986:rt.RFC3986},Eo=ot,at=Object.prototype.hasOwnProperty,te=Array.isArray,M=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),Io=function(t){for(;t.length>1;){var n=t.pop(),r=n.obj[n.prop];if(te(r)){for(var a=[],o=0;o<r.length;++o)typeof r[o]!="undefined"&&a.push(r[o]);n.obj[n.prop]=a}}},Tt=function(t,n){for(var r=n&&n.plainObjects?Object.create(null):{},a=0;a<t.length;++a)typeof t[a]!="undefined"&&(r[a]=t[a]);return r},Ao=function e(t,n,r){if(!n)return t;if(typeof n!="object"){if(te(t))t.push(n);else if(t&&typeof t=="object")(r&&(r.plainObjects||r.allowPrototypes)||!at.call(Object.prototype,n))&&(t[n]=!0);else return[t,n];return t}if(!t||typeof t!="object")return[t].concat(n);var a=t;return te(t)&&!te(n)&&(a=Tt(t,r)),te(t)&&te(n)?(n.forEach(function(o,i){if(at.call(t,i)){var s=t[i];s&&typeof s=="object"&&o&&typeof o=="object"?t[i]=e(s,o,r):t.push(o)}else t[i]=o}),t):Object.keys(n).reduce(function(o,i){var s=n[i];return at.call(o,i)?o[i]=e(o[i],s,r):o[i]=s,o},a)},Fo=function(t,n){return Object.keys(n).reduce(function(r,a){return r[a]=n[a],r},t)},xo=function(e,t,n){var r=e.replace(/\+/g," ");if(n==="iso-8859-1")return r.replace(/%[0-9a-f]{2}/gi,unescape);try{return decodeURIComponent(r)}catch(a){return r}},Lo=function(t,n,r,a,o){if(t.length===0)return t;var i=t;if(typeof t=="symbol"?i=Symbol.prototype.toString.call(t):typeof t!="string"&&(i=String(t)),r==="iso-8859-1")return escape(i).replace(/%u[0-9a-f]{4}/gi,function(c){return"%26%23"+parseInt(c.slice(2),16)+"%3B"});for(var s="",l=0;l<i.length;++l){var u=i.charCodeAt(l);if(u===45||u===46||u===95||u===126||u>=48&&u<=57||u>=65&&u<=90||u>=97&&u<=122||o===Eo.RFC1738&&(u===40||u===41)){s+=i.charAt(l);continue}if(u<128){s=s+M[u];continue}if(u<2048){s=s+(M[192|u>>6]+M[128|u&63]);continue}if(u<55296||u>=57344){s=s+(M[224|u>>12]+M[128|u>>6&63]+M[128|u&63]);continue}l+=1,u=65536+((u&1023)<<10|i.charCodeAt(l)&1023),s+=M[240|u>>18]+M[128|u>>12&63]+M[128|u>>6&63]+M[128|u&63]}return s},jo=function(t){for(var n=[{obj:{o:t},prop:"o"}],r=[],a=0;a<n.length;++a)for(var o=n[a],i=o.obj[o.prop],s=Object.keys(i),l=0;l<s.length;++l){var u=s[l],c=i[u];typeof c=="object"&&c!==null&&r.indexOf(c)===-1&&(n.push({obj:i,prop:u}),r.push(c))}return Io(n),t},Co=function(t){return Object.prototype.toString.call(t)==="[object RegExp]"},$o=function(t){return!t||typeof t!="object"?!1:!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))},Ro=function(t,n){return[].concat(t,n)},ko=function(t,n){if(te(t)){for(var r=[],a=0;a<t.length;a+=1)r.push(n(t[a]));return r}return n(t)},Bt={arrayToObject:Tt,assign:Fo,combine:Ro,compact:jo,decode:xo,encode:Lo,isBuffer:$o,isRegExp:Co,maybeMap:ko,merge:Ao},qt=Po,it=Bt,ge=ot,To=Object.prototype.hasOwnProperty,Dt={brackets:function(t){return t+"[]"},comma:"comma",indices:function(t,n){return t+"["+n+"]"},repeat:function(t){return t}},ne=Array.isArray,Bo=Array.prototype.push,Mt=function(e,t){Bo.apply(e,ne(t)?t:[t])},qo=Date.prototype.toISOString,Nt=ge.default,A={addQueryPrefix:!1,allowDots:!1,charset:"utf-8",charsetSentinel:!1,delimiter:"&",encode:!0,encoder:it.encode,encodeValuesOnly:!1,format:Nt,formatter:ge.formatters[Nt],indices:!1,serializeDate:function(t){return qo.call(t)},skipNulls:!1,strictNullHandling:!1},Do=function(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"||typeof t=="symbol"||typeof t=="bigint"},Mo=function e(t,n,r,a,o,i,s,l,u,c,d,y,h,v,b){var g=t;if(b.has(t))throw new RangeError("Cyclic object value");if(typeof s=="function"?g=s(n,g):g instanceof Date?g=c(g):r==="comma"&&ne(g)&&(g=it.maybeMap(g,function(U){return U instanceof Date?c(U):U})),g===null){if(a)return i&&!h?i(n,A.encoder,v,"key",d):n;g=""}if(Do(g)||it.isBuffer(g)){if(i){var x=h?n:i(n,A.encoder,v,"key",d);return[y(x)+"="+y(i(g,A.encoder,v,"value",d))]}return[y(n)+"="+y(String(g))]}var J=[];if(typeof g=="undefined")return J;var $;if(r==="comma"&&ne(g))$=[{value:g.length>0?g.join(",")||null:void 0}];else if(ne(s))$=s;else{var Z=Object.keys(g);$=l?Z.sort(l):Z}for(var q=0;q<$.length;++q){var C=$[q],H=typeof C=="object"&&C.value!==void 0?C.value:g[C];if(!(o&&H===null)){var z=ne(g)?typeof r=="function"?r(n,C):n:n+(u?"."+C:"["+C+"]");b.set(t,!0);var R=qt();Mt(J,e(H,z,r,a,o,i,s,l,u,c,d,y,h,v,R))}}return J},No=function(t){if(!t)return A;if(t.encoder!==null&&t.encoder!==void 0&&typeof t.encoder!="function")throw new TypeError("Encoder has to be a function.");var n=t.charset||A.charset;if(typeof t.charset!="undefined"&&t.charset!=="utf-8"&&t.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var r=ge.default;if(typeof t.format!="undefined"){if(!To.call(ge.formatters,t.format))throw new TypeError("Unknown format option provided.");r=t.format}var a=ge.formatters[r],o=A.filter;return(typeof t.filter=="function"||ne(t.filter))&&(o=t.filter),{addQueryPrefix:typeof t.addQueryPrefix=="boolean"?t.addQueryPrefix:A.addQueryPrefix,allowDots:typeof t.allowDots=="undefined"?A.allowDots:!!t.allowDots,charset:n,charsetSentinel:typeof t.charsetSentinel=="boolean"?t.charsetSentinel:A.charsetSentinel,delimiter:typeof t.delimiter=="undefined"?A.delimiter:t.delimiter,encode:typeof t.encode=="boolean"?t.encode:A.encode,encoder:typeof t.encoder=="function"?t.encoder:A.encoder,encodeValuesOnly:typeof t.encodeValuesOnly=="boolean"?t.encodeValuesOnly:A.encodeValuesOnly,filter:o,format:r,formatter:a,serializeDate:typeof t.serializeDate=="function"?t.serializeDate:A.serializeDate,skipNulls:typeof t.skipNulls=="boolean"?t.skipNulls:A.skipNulls,sort:typeof t.sort=="function"?t.sort:null,strictNullHandling:typeof t.strictNullHandling=="boolean"?t.strictNullHandling:A.strictNullHandling}},Vo=function(e,t){var n=e,r=No(t),a,o;typeof r.filter=="function"?(o=r.filter,n=o("",n)):ne(r.filter)&&(o=r.filter,a=o);var i=[];if(typeof n!="object"||n===null)return"";var s;t&&t.arrayFormat in Dt?s=t.arrayFormat:t&&"indices"in t?s=t.indices?"indices":"repeat":s="indices";var l=Dt[s];a||(a=Object.keys(n)),r.sort&&a.sort(r.sort);for(var u=qt(),c=0;c<a.length;++c){var d=a[c];r.skipNulls&&n[d]===null||Mt(i,Mo(n[d],d,l,r.strictNullHandling,r.skipNulls,r.encode?r.encoder:null,r.filter,r.sort,r.allowDots,r.serializeDate,r.format,r.formatter,r.encodeValuesOnly,r.charset,u))}var y=i.join(r.delimiter),h=r.addQueryPrefix===!0?"?":"";return r.charsetSentinel&&(r.charset==="iso-8859-1"?h+="utf8=%26%2310003%3B&":h+="utf8=%E2%9C%93&"),y.length>0?h+y:""},fe=Bt,st=Object.prototype.hasOwnProperty,zo=Array.isArray,S={allowDots:!1,allowPrototypes:!1,allowSparse:!1,arrayLimit:20,charset:"utf-8",charsetSentinel:!1,comma:!1,decoder:fe.decode,delimiter:"&",depth:5,ignoreQueryPrefix:!1,interpretNumericEntities:!1,parameterLimit:1e3,parseArrays:!0,plainObjects:!1,strictNullHandling:!1},Wo=function(e){return e.replace(/&#(\d+);/g,function(t,n){return String.fromCharCode(parseInt(n,10))})},Vt=function(e,t){return e&&typeof e=="string"&&t.comma&&e.indexOf(",")>-1?e.split(","):e},Jo="utf8=%26%2310003%3B",Zo="utf8=%E2%9C%93",Ho=function(t,n){var r={},a=n.ignoreQueryPrefix?t.replace(/^\?/,""):t,o=n.parameterLimit===1/0?void 0:n.parameterLimit,i=a.split(n.delimiter,o),s=-1,l,u=n.charset;if(n.charsetSentinel)for(l=0;l<i.length;++l)i[l].indexOf("utf8=")===0&&(i[l]===Zo?u="utf-8":i[l]===Jo&&(u="iso-8859-1"),s=l,l=i.length);for(l=0;l<i.length;++l)if(l!==s){var c=i[l],d=c.indexOf("]="),y=d===-1?c.indexOf("="):d+1,h,v;y===-1?(h=n.decoder(c,S.decoder,u,"key"),v=n.strictNullHandling?null:""):(h=n.decoder(c.slice(0,y),S.decoder,u,"key"),v=fe.maybeMap(Vt(c.slice(y+1),n),function(b){return n.decoder(b,S.decoder,u,"value")})),v&&n.interpretNumericEntities&&u==="iso-8859-1"&&(v=Wo(v)),c.indexOf("[]=")>-1&&(v=zo(v)?[v]:v),st.call(r,h)?r[h]=fe.combine(r[h],v):r[h]=v}return r},Go=function(e,t,n,r){for(var a=r?t:Vt(t,n),o=e.length-1;o>=0;--o){var i,s=e[o];if(s==="[]"&&n.parseArrays)i=[].concat(a);else{i=n.plainObjects?Object.create(null):{};var l=s.charAt(0)==="["&&s.charAt(s.length-1)==="]"?s.slice(1,-1):s,u=parseInt(l,10);!n.parseArrays&&l===""?i={0:a}:!isNaN(u)&&s!==l&&String(u)===l&&u>=0&&n.parseArrays&&u<=n.arrayLimit?(i=[],i[u]=a):i[l]=a}a=i}return a},Qo=function(t,n,r,a){if(!!t){var o=r.allowDots?t.replace(/\.([^.[]+)/g,"[$1]"):t,i=/(\[[^[\]]*])/,s=/(\[[^[\]]*])/g,l=r.depth>0&&i.exec(o),u=l?o.slice(0,l.index):o,c=[];if(u){if(!r.plainObjects&&st.call(Object.prototype,u)&&!r.allowPrototypes)return;c.push(u)}for(var d=0;r.depth>0&&(l=s.exec(o))!==null&&d<r.depth;){if(d+=1,!r.plainObjects&&st.call(Object.prototype,l[1].slice(1,-1))&&!r.allowPrototypes)return;c.push(l[1])}return l&&c.push("["+o.slice(l.index)+"]"),Go(c,n,r,a)}},Yo=function(t){if(!t)return S;if(t.decoder!==null&&t.decoder!==void 0&&typeof t.decoder!="function")throw new TypeError("Decoder has to be a function.");if(typeof t.charset!="undefined"&&t.charset!=="utf-8"&&t.charset!=="iso-8859-1")throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");var n=typeof t.charset=="undefined"?S.charset:t.charset;return{allowDots:typeof t.allowDots=="undefined"?S.allowDots:!!t.allowDots,allowPrototypes:typeof t.allowPrototypes=="boolean"?t.allowPrototypes:S.allowPrototypes,allowSparse:typeof t.allowSparse=="boolean"?t.allowSparse:S.allowSparse,arrayLimit:typeof t.arrayLimit=="number"?t.arrayLimit:S.arrayLimit,charset:n,charsetSentinel:typeof t.charsetSentinel=="boolean"?t.charsetSentinel:S.charsetSentinel,comma:typeof t.comma=="boolean"?t.comma:S.comma,decoder:typeof t.decoder=="function"?t.decoder:S.decoder,delimiter:typeof t.delimiter=="string"||fe.isRegExp(t.delimiter)?t.delimiter:S.delimiter,depth:typeof t.depth=="number"||t.depth===!1?+t.depth:S.depth,ignoreQueryPrefix:t.ignoreQueryPrefix===!0,interpretNumericEntities:typeof t.interpretNumericEntities=="boolean"?t.interpretNumericEntities:S.interpretNumericEntities,parameterLimit:typeof t.parameterLimit=="number"?t.parameterLimit:S.parameterLimit,parseArrays:t.parseArrays!==!1,plainObjects:typeof t.plainObjects=="boolean"?t.plainObjects:S.plainObjects,strictNullHandling:typeof t.strictNullHandling=="boolean"?t.strictNullHandling:S.strictNullHandling}},Ko=function(e,t){var n=Yo(t);if(e===""||e===null||typeof e=="undefined")return n.plainObjects?Object.create(null):{};for(var r=typeof e=="string"?Ho(e,n):e,a=n.plainObjects?Object.create(null):{},o=Object.keys(r),i=0;i<o.length;++i){var s=o[i],l=Qo(s,r[s],n,typeof e=="string");a=fe.merge(a,l,n)}return n.allowSparse===!0?a:fe.compact(a)},Xo=Vo,ea=Ko,ta=ot,zt={formats:ta,parse:ea,stringify:Xo},F=typeof globalThis!="undefined"&&globalThis||typeof self!="undefined"&&self||typeof F!="undefined"&&F,L={searchParams:"URLSearchParams"in F,iterable:"Symbol"in F&&"iterator"in Symbol,blob:"FileReader"in F&&"Blob"in F&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in F,arrayBuffer:"ArrayBuffer"in F};function na(e){return e&&DataView.prototype.isPrototypeOf(e)}if(L.arrayBuffer)var ra=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],oa=ArrayBuffer.isView||function(e){return e&&ra.indexOf(Object.prototype.toString.call(e))>-1};function ve(e){if(typeof e!="string"&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e)||e==="")throw new TypeError('Invalid character in header field name: "'+e+'"');return e.toLowerCase()}function lt(e){return typeof e!="string"&&(e=String(e)),e}function ut(e){var t={next:function(){var n=e.shift();return{done:n===void 0,value:n}}};return L.iterable&&(t[Symbol.iterator]=function(){return t}),t}function _(e){this.map={},e instanceof _?e.forEach(function(t,n){this.append(n,t)},this):Array.isArray(e)?e.forEach(function(t){this.append(t[0],t[1])},this):e&&Object.getOwnPropertyNames(e).forEach(function(t){this.append(t,e[t])},this)}_.prototype.append=function(e,t){e=ve(e),t=lt(t);var n=this.map[e];this.map[e]=n?n+", "+t:t};_.prototype.delete=function(e){delete this.map[ve(e)]};_.prototype.get=function(e){return e=ve(e),this.has(e)?this.map[e]:null};_.prototype.has=function(e){return this.map.hasOwnProperty(ve(e))};_.prototype.set=function(e,t){this.map[ve(e)]=lt(t)};_.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)};_.prototype.keys=function(){var e=[];return this.forEach(function(t,n){e.push(n)}),ut(e)};_.prototype.values=function(){var e=[];return this.forEach(function(t){e.push(t)}),ut(e)};_.prototype.entries=function(){var e=[];return this.forEach(function(t,n){e.push([n,t])}),ut(e)};L.iterable&&(_.prototype[Symbol.iterator]=_.prototype.entries);function ft(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function Wt(e){return new Promise(function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}})}function aa(e){var t=new FileReader,n=Wt(t);return t.readAsArrayBuffer(e),n}function ia(e){var t=new FileReader,n=Wt(t);return t.readAsText(e),n}function sa(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}function Jt(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function Zt(){return this.bodyUsed=!1,this._initBody=function(e){this.bodyUsed=this.bodyUsed,this._bodyInit=e,e?typeof e=="string"?this._bodyText=e:L.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:L.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:L.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():L.arrayBuffer&&L.blob&&na(e)?(this._bodyArrayBuffer=Jt(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):L.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||oa(e))?this._bodyArrayBuffer=Jt(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||(typeof e=="string"?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):L.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},L.blob&&(this.blob=function(){var e=ft(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var e=ft(this);return e||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}else return this.blob().then(aa)}),this.text=function(){var e=ft(this);if(e)return e;if(this._bodyBlob)return ia(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(sa(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},L.formData&&(this.formData=function(){return this.text().then(fa)}),this.json=function(){return this.text().then(JSON.parse)},this}var la=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function ua(e){var t=e.toUpperCase();return la.indexOf(t)>-1?t:e}function re(e,t){if(!(this instanceof re))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');t=t||{};var n=t.body;if(e instanceof re){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new _(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,!n&&e._bodyInit!=null&&(n=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",(t.headers||!this.headers)&&(this.headers=new _(t.headers)),this.method=ua(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,(this.method==="GET"||this.method==="HEAD")&&n)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(n),(this.method==="GET"||this.method==="HEAD")&&(t.cache==="no-store"||t.cache==="no-cache")){var r=/([?&])_=[^&]*/;if(r.test(this.url))this.url=this.url.replace(r,"$1_="+new Date().getTime());else{var a=/\?/;this.url+=(a.test(this.url)?"&":"?")+"_="+new Date().getTime()}}}re.prototype.clone=function(){return new re(this,{body:this._bodyInit})};function fa(e){var t=new FormData;return e.trim().split("&").forEach(function(n){if(n){var r=n.split("="),a=r.shift().replace(/\+/g," "),o=r.join("=").replace(/\+/g," ");t.append(decodeURIComponent(a),decodeURIComponent(o))}}),t}function ca(e){var t=new _,n=e.replace(/\r?\n[\t ]+/g," ");return n.split("\r").map(function(r){return r.indexOf(`
`)===0?r.substr(1,r.length):r}).forEach(function(r){var a=r.split(":"),o=a.shift().trim();if(o){var i=a.join(":").trim();t.append(o,i)}}),t}Zt.call(re.prototype);function N(e,t){if(!(this instanceof N))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');t||(t={}),this.type="default",this.status=t.status===void 0?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText=t.statusText===void 0?"":""+t.statusText,this.headers=new _(t.headers),this.url=t.url||"",this._initBody(e)}Zt.call(N.prototype);N.prototype.clone=function(){return new N(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new _(this.headers),url:this.url})};N.error=function(){var e=new N(null,{status:0,statusText:""});return e.type="error",e};var pa=[301,302,303,307,308];N.redirect=function(e,t){if(pa.indexOf(t)===-1)throw new RangeError("Invalid status code");return new N(null,{status:t,headers:{location:e}})};var oe=F.DOMException;try{new oe}catch(e){oe=function(t,n){this.message=t,this.name=n;var r=Error(t);this.stack=r.stack},oe.prototype=Object.create(Error.prototype),oe.prototype.constructor=oe}function Ht(e,t){return new Promise(function(n,r){var a=new re(e,t);if(a.signal&&a.signal.aborted)return r(new oe("Aborted","AbortError"));var o=new XMLHttpRequest;function i(){o.abort()}o.onload=function(){var l={status:o.status,statusText:o.statusText,headers:ca(o.getAllResponseHeaders()||"")};l.url="responseURL"in o?o.responseURL:l.headers.get("X-Request-URL");var u="response"in o?o.response:o.responseText;setTimeout(function(){n(new N(u,l))},0)},o.onerror=function(){setTimeout(function(){r(new TypeError("Network request failed"))},0)},o.ontimeout=function(){setTimeout(function(){r(new TypeError("Network request failed"))},0)},o.onabort=function(){setTimeout(function(){r(new oe("Aborted","AbortError"))},0)};function s(l){try{return l===""&&F.location.href?F.location.href:l}catch(u){return l}}o.open(a.method,s(a.url),!0),a.credentials==="include"?o.withCredentials=!0:a.credentials==="omit"&&(o.withCredentials=!1),"responseType"in o&&(L.blob?o.responseType="blob":L.arrayBuffer&&a.headers.get("Content-Type")&&a.headers.get("Content-Type").indexOf("application/octet-stream")!==-1&&(o.responseType="arraybuffer")),t&&typeof t.headers=="object"&&!(t.headers instanceof _)?Object.getOwnPropertyNames(t.headers).forEach(function(l){o.setRequestHeader(l,lt(t.headers[l]))}):a.headers.forEach(function(l,u){o.setRequestHeader(u,l)}),a.signal&&(a.signal.addEventListener("abort",i),o.onreadystatechange=function(){o.readyState===4&&a.signal.removeEventListener("abort",i)}),o.send(typeof a._bodyInit=="undefined"?null:a._bodyInit)})}Ht.polyfill=!0;F.fetch||(F.fetch=Ht,F.Headers=_,F.Request=re,F.Response=N);self.fetch.bind(self);function Gt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Gt(Object(n),!0).forEach(function(r){da(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Gt(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function K(e){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?K=function(t){return typeof t}:K=function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},K(e)}function be(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Qt(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function ct(e,t,n){return t&&Qt(e.prototype,t),n&&Qt(e,n),e}function da(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Yt(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_e(e,t)}function we(e){return we=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},we(e)}function _e(e,t){return _e=Object.setPrototypeOf||function(r,a){return r.__proto__=a,r},_e(e,t)}function Kt(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function je(e,t,n){return Kt()?je=Reflect.construct:je=function(a,o,i){var s=[null];s.push.apply(s,o);var l=Function.bind.apply(a,s),u=new l;return i&&_e(u,i.prototype),u},je.apply(null,arguments)}function ya(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function Ce(e){var t=typeof Map=="function"?new Map:void 0;return Ce=function(r){if(r===null||!ya(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t!="undefined"){if(t.has(r))return t.get(r);t.set(r,a)}function a(){return je(r,arguments,we(this).constructor)}return a.prototype=Object.create(r.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),_e(a,r)},Ce(e)}function ma(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ha(e,t){return t&&(typeof t=="object"||typeof t=="function")?t:ma(e)}function Xt(e){var t=Kt();return function(){var r=we(e),a;if(t){var o=we(this).constructor;a=Reflect.construct(r,arguments,o)}else a=r.apply(this,arguments);return ha(this,a)}}function V(e){return ga(e)||va(e)||ba(e)||wa()}function ga(e){if(Array.isArray(e))return pt(e)}function va(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function ba(e,t){if(!!e){if(typeof e=="string")return pt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return pt(e,t)}}function pt(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function wa(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _a(e){if(!Array.isArray(e))throw new TypeError("Middlewares must be an array!");for(var t=e.length,n=0;n<t;n++)if(typeof e[n]!="function")throw new TypeError("Middleware must be componsed of function");return function(a,o){var i=-1;function s(l){if(l<=i)return Promise.reject(new Error("next() should not be called multiple times in one middleware!"));i=l;var u=e[l]||o;if(!u)return Promise.resolve();try{return Promise.resolve(u(a,function(){return s(l+1)}))}catch(c){return Promise.reject(c)}}return s(0)}}var B=function(){function e(t){if(be(this,e),!Array.isArray(t))throw new TypeError("Default middlewares must be an array!");this.defaultMiddlewares=V(t),this.middlewares=[]}return ct(e,[{key:"use",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{global:!1,core:!1,defaultInstance:!1},a=!1,o=!1,i=!1;if(typeof r=="number"?(process&&process.env,a=!0,o=!1):K(r)==="object"&&r&&(o=r.global||!1,a=r.core||!1,i=r.defaultInstance||!1),o){e.globalMiddlewares.splice(e.globalMiddlewares.length-e.defaultGlobalMiddlewaresLength,0,n);return}if(a){e.coreMiddlewares.splice(e.coreMiddlewares.length-e.defaultCoreMiddlewaresLength,0,n);return}if(i){this.defaultMiddlewares.push(n);return}this.middlewares.push(n)}},{key:"execute",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:null,r=_a([].concat(V(this.middlewares),V(this.defaultMiddlewares),V(e.globalMiddlewares),V(e.coreMiddlewares)));return r(n)}}]),e}();B.globalMiddlewares=[];B.defaultGlobalMiddlewaresLength=0;B.coreMiddlewares=[];B.defaultCoreMiddlewaresLength=0;var Sa=function(){function e(t){be(this,e),this.cache=new Map,this.timer={},this.extendOptions(t)}return ct(e,[{key:"extendOptions",value:function(n){this.maxCache=n.maxCache||0}},{key:"get",value:function(n){return this.cache.get(JSON.stringify(n))}},{key:"set",value:function(n,r){var a=this,o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:6e4;if(this.maxCache>0&&this.cache.size>=this.maxCache){var i=V(this.cache.keys())[0];this.cache.delete(i),this.timer[i]&&clearTimeout(this.timer[i])}var s=JSON.stringify(n);this.cache.set(s,r),o>0&&(this.timer[s]=setTimeout(function(){a.cache.delete(s),delete a.timer[s]},o))}},{key:"delete",value:function(n){var r=JSON.stringify(n);return delete this.timer[r],this.cache.delete(r)}},{key:"clear",value:function(){return this.timer={},this.cache.clear()}}]),e}(),en=function(e){Yt(n,e);var t=Xt(n);function n(r,a){var o,i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"RequestError";return be(this,n),o=t.call(this,r),o.name="RequestError",o.request=a,o.type=i,o}return n}(Ce(Error)),Se=function(e){Yt(n,e);var t=Xt(n);function n(r,a,o,i){var s,l=arguments.length>4&&arguments[4]!==void 0?arguments[4]:"ResponseError";return be(this,n),s=t.call(this,a||r.statusText),s.name="ResponseError",s.data=o,s.response=r,s.request=i,s.type=l,s}return n}(Ce(Error));function Pa(e){return new Promise(function(t,n){var r=new FileReader;r.onload=function(){t(r.result)},r.onerror=n,r.readAsText(e,"GBK")})}function tn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:null,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null;try{return JSON.parse(e)}catch(a){if(t)throw new Se(n,"JSON.parse fail",e,r,"ParseError")}return e}function Oa(e,t){return new Promise(function(n,r){setTimeout(function(){r(new en("timeout of ".concat(e,"ms exceeded"),t,"Timeout"))},e)})}function nn(e){return new Promise(function(t,n){e.cancelToken&&e.cancelToken.promise.then(function(r){n(r)})})}var Ua=Object.prototype.toString;function rn(){var e;return typeof process!="undefined"&&Ua.call(process)==="[object process]"&&(e="NODE"),typeof XMLHttpRequest!="undefined"&&(e="BROWSER"),e}function dt(e){return K(e)==="object"&&Object.prototype.toString.call(e)==="[object Array]"}function on(e){return typeof URLSearchParams!="undefined"&&e instanceof URLSearchParams}function Ea(e){return K(e)==="object"&&Object.prototype.toString.call(e)==="[object Date]"}function an(e){return e!==null&&K(e)==="object"}function sn(e,t){if(!!e)if(K(e)!=="object"&&(e=[e]),dt(e))for(var n=0;n<e.length;n++)t.call(null,e[n],n,e);else for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.call(null,e[r],r,e)}function ln(e){return on(e)?zt.parse(e.toString(),{strictNullHandling:!0}):typeof e=="string"?[e]:e}function yt(e){return zt.stringify(e,{arrayFormat:"repeat",strictNullHandling:!0})}function un(e,t){return j(j(j({},e),t),{},{headers:j(j({},e.headers),t.headers),params:j(j({},ln(e.params)),ln(t.params)),method:(t.method||e.method||"get").toLowerCase()})}var Ia=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.prefix,a=n.suffix;return r&&(t="".concat(r).concat(t)),a&&(t="".concat(t).concat(a)),{url:t,options:n}};function Aa(e,t){var n=t.method,r=n===void 0?"get":n;return r.toLowerCase()==="get"}function Fa(e,t){if(!e)return t();var n=e.req;n=n===void 0?{}:n;var r=n.options,a=r===void 0?{}:r,o=n.url,i=o===void 0?"":o,s=e.cache,l=e.responseInterceptors,u=a.timeout,c=u===void 0?0:u,d=a.__umiRequestCoreType__,y=d===void 0?"normal":d,h=a.useCache,v=h===void 0?!1:h,b=a.method,g=b===void 0?"get":b,x=a.params,J=a.ttl,$=a.validateCache,Z=$===void 0?Aa:$;if(y!=="normal")return process&&process.env,t();var q=fetch;if(!q)throw new Error("Global fetch not exist!");var C=rn()==="BROWSER",H=Z(i,a)&&v&&C;if(H){var z=s.get({url:i,params:x,method:g});if(z)return z=z.clone(),z.useCache=!0,e.res=z,t()}var R;return c>0?R=Promise.race([nn(a),q(i,a),Oa(c,e.req)]):R=Promise.race([nn(a),q(i,a)]),l.forEach(function(U){R=R.then(function(k){var ke=typeof k.clone=="function"?k.clone():k;return U(ke,a)})}),R.then(function(U){if(H&&U.status===200){var k=U.clone();k.useCache=!0,s.set({url:i,params:x,method:g},k,J)}return e.res=U,t()})}function xa(e,t){var n;return t().then(function(){if(!!e){var r=e.res,a=r===void 0?{}:r,o=e.req,i=o===void 0?{}:o,s=i||{},l=s.options;l=l===void 0?{}:l;var u=l.responseType,c=u===void 0?"json":u,d=l.charset,y=d===void 0?"utf8":d;l.getResponse;var h=l.throwErrIfParseFail,v=h===void 0?!1:h,b=l.parseResponse,g=b===void 0?!0:b;if(!!g&&!(!a||!a.clone)){if(n=rn()==="BROWSER"?a.clone():a,n.useCache=a.useCache||!1,y==="gbk")try{return a.blob().then(Pa).then(function(x){return tn(x,!1,n,i)})}catch(x){throw new Se(n,x.message,null,i,"ParseError")}else if(c==="json")return a.text().then(function(x){return tn(x,v,n,i)});try{return a[c]()}catch(x){throw new Se(n,"responseType not support",null,i,"ParseError")}}}}).then(function(r){if(!!e){e.res;var a=e.req,o=a===void 0?{}:a,i=o||{},s=i.options;s=s===void 0?{}:s;var l=s.getResponse,u=l===void 0?!1:l;if(!!n){if(n.status>=200&&n.status<300){if(u){e.res={data:r,response:n};return}e.res=r;return}throw new Se(n,"http error",r,o,"HttpError")}}}).catch(function(r){if(r instanceof en||r instanceof Se)throw r;var a=e.req,o=e.res;throw r.request=r.request||a,r.response=r.response||o,r.type=r.type||r.name,r.data=r.data||void 0,r})}function La(e,t){if(!e)return t();var n=e.req;n=n===void 0?{}:n;var r=n.options,a=r===void 0?{}:r,o=a.method,i=o===void 0?"get":o;if(["post","put","patch","delete"].indexOf(i.toLowerCase())===-1)return t();var s=a.requestType,l=s===void 0?"json":s,u=a.data;if(u){var c=Object.prototype.toString.call(u);c==="[object Object]"||c==="[object Array]"?l==="json"?(a.headers=j({Accept:"application/json","Content-Type":"application/json;charset=UTF-8"},a.headers),a.body=JSON.stringify(u)):l==="form"&&(a.headers=j({Accept:"application/json","Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},a.headers),a.body=yt(u)):(a.headers=j({Accept:"application/json"},a.headers),a.body=u)}return e.req.options=a,t()}function ja(e,t){var n,r;if(e)if(t)n=t(e);else if(on(e))n=e.toString();else if(dt(e))r=[],sn(e,function(o){o===null||typeof o=="undefined"?r.push(o):r.push(an(o)?JSON.stringify(o):o)}),n=yt(r);else{r={},sn(e,function(o,i){var s=o;o===null||typeof o=="undefined"?r[i]=o:Ea(o)?s=o.toISOString():dt(o)?s=o:an(o)&&(s=JSON.stringify(o)),r[i]=s});var a=yt(r);n=a}return n}function Ca(e,t){if(!e)return t();var n=e.req;n=n===void 0?{}:n;var r=n.options,a=r===void 0?{}:r,o=a.paramsSerializer,i=a.params,s=e.req;s=s===void 0?{}:s;var l=s.url,u=l===void 0?"":l;a.method=a.method?a.method.toUpperCase():"GET",a.credentials=a.credentials||"same-origin";var c=ja(i,o);if(e.req.originUrl=u,c){var d=u.indexOf("?")!==-1?"&":"?";e.req.url="".concat(u).concat(d).concat(c)}return e.req.options=a,t()}var fn=[La,Ca,xa],cn=[Fa];B.globalMiddlewares=fn;B.defaultGlobalMiddlewaresLength=fn.length;B.coreMiddlewares=cn;B.defaultCoreMiddlewaresLength=cn.length;var Pe=function(){function e(t){be(this,e),this.onion=new B([]),this.fetchIndex=0,this.mapCache=new Sa(t),this.initOptions=t,this.instanceRequestInterceptors=[],this.instanceResponseInterceptors=[]}return ct(e,[{key:"use",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{global:!1,core:!1};return this.onion.use(n,r),this}},{key:"extendOptions",value:function(n){this.initOptions=un(this.initOptions,n),this.mapCache.extendOptions(n)}},{key:"dealRequestInterceptors",value:function(n){var r=function(i,s){return i.then(function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return n.req.url=l.url||n.req.url,n.req.options=l.options||n.req.options,s(n.req.url,n.req.options)})},a=[].concat(V(e.requestInterceptors),V(this.instanceRequestInterceptors));return a.reduce(r,Promise.resolve()).then(function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return n.req.url=o.url||n.req.url,n.req.options=o.options||n.req.options,Promise.resolve()})}},{key:"request",value:function(n,r){var a=this,o=this.onion,i={req:{url:n,options:j(j({},r),{},{url:n})},res:null,cache:this.mapCache,responseInterceptors:[].concat(V(e.responseInterceptors),V(this.instanceResponseInterceptors))};if(typeof n!="string")throw new Error("url MUST be a string");return new Promise(function(s,l){a.dealRequestInterceptors(i).then(function(){return o.execute(i)}).then(function(){s(i.res)}).catch(function(u){var c=i.req.options.errorHandler;if(c)try{var d=c(u);s(d)}catch(y){l(y)}else l(u)})})}}],[{key:"requestUse",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{global:!0};if(typeof n!="function")throw new TypeError("Interceptor must be function!");r.global?e.requestInterceptors.push(n):this.instanceRequestInterceptors.push(n)}},{key:"responseUse",value:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{global:!0};if(typeof n!="function")throw new TypeError("Interceptor must be function!");r.global?e.responseInterceptors.push(n):this.instanceResponseInterceptors.push(n)}}]),e}();Pe.requestInterceptors=[Ia];Pe.responseInterceptors=[];function $e(e){this.message=e}$e.prototype.toString=function(){return this.message?"Cancel: ".concat(this.message):"Cancel"};$e.prototype.__CANCEL__=!0;function Re(e){if(typeof e!="function")throw new TypeError("executor must be a function.");var t;this.promise=new Promise(function(a){t=a});var n=this;e(function(a){n.reason||(n.reason=new $e(a),t(n.reason))})}Re.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};Re.source=function(){var t,n=new Re(function(a){t=a});return{token:n,cancel:t}};function $a(e){return!!(e&&e.__CANCEL__)}var pn=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=new Pe(t),r=function(i){var s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},l=un(n.initOptions,s);return n.request(i,l)};r.use=n.use.bind(n),r.fetchIndex=n.fetchIndex,r.interceptors={request:{use:Pe.requestUse.bind(n)},response:{use:Pe.responseUse.bind(n)}};var a=["get","post","delete","put","patch","head","options","rpc"];return a.forEach(function(o){r[o]=function(i,s){return r(i,j(j({},s),{},{method:o}))}}),r.Cancel=$e,r.CancelToken=Re,r.isCancel=$a,r.extendOptions=n.extendOptions.bind(n),r.middlewares={instance:n.onion.middlewares,defaultInstance:n.onion.defaultMiddlewares,global:B.globalMiddlewares,core:B.coreMiddlewares},r};pn({parseResponse:!1});var Ra=pn({}),dn=T({components:{UploadOutlined:G},setup(){const e=E([]),t=E(!1);return{fileList:e,uploading:t,handleRemove:o=>{const i=e.value.indexOf(o),s=e.value.slice();s.splice(i,1),e.value=s},beforeUpload:o=>(e.value=[...e.value,o],!1),handleUpload:()=>{const o=new FormData;e.value.forEach(i=>{o.append("files[]",i)}),t.value=!0,Ra("https://www.mocky.io/v2/5cc8019d300000980a055e76",{method:"post",data:o}).then(()=>{e.value=[],t.value=!1,W.success("upload successfully.")}).catch(()=>{t.value=!1,W.error("upload failed.")})}}}});const ka={class:"clearfix"},Ta=D(" Select File ");function Ba(e,t,n,r,a,o){const i=p("upload-outlined"),s=p("a-button"),l=p("a-upload");return P(),O("div",ka,[f(l,{"file-list":e.fileList,remove:e.handleRemove,"before-upload":e.beforeUpload},{default:w(()=>[f(s,null,{default:w(()=>[f(i),Ta]),_:1})]),_:1},8,["file-list","remove","before-upload"]),f(s,{type:"primary",disabled:e.fileList.length===0,loading:e.uploading,style:{"margin-top":"16px"},onClick:e.handleUpload},{default:w(()=>[D(Un(e.uploading?"Uploading":"Start Upload"),1)]),_:1},8,["disabled","loading","onClick"])])}dn.render=Ba;var qa=`<cn>
#### \u624B\u52A8\u4E0A\u4F20
\`beforeUpload\` \u8FD4\u56DE \`false\` \u540E\uFF0C\u624B\u52A8\u4E0A\u4F20\u6587\u4EF6\u3002
</cn>

<us>
#### Upload manually
Upload files manually after \`beforeUpload\` returns \`false\`.
</us>
`,Da=`<template>
  <div class="clearfix">
    <a-upload :file-list="fileList" :remove="handleRemove" :before-upload="beforeUpload">
      <a-button>
        <upload-outlined></upload-outlined>
        Select File
      </a-button>
    </a-upload>
    <a-button
      type="primary"
      :disabled="fileList.length === 0"
      :loading="uploading"
      style="margin-top: 16px"
      @click="handleUpload"
    >
      {{ uploading ? 'Uploading' : 'Start Upload' }}
    </a-button>
  </div>
</template>
<script lang="ts">
import request from 'umi-request';
import { UploadOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
import { message } from '@fe6/water-pro';

interface FileItem {
  uid: string;
  name?: string;
  status?: string;
  response?: string;
  url?: string;
  preview?: string;
  originFileObj?: any;
  file: string | Blob;
}

export default defineComponent({
  components: {
    UploadOutlined,
  },
  setup() {
    const fileList = ref<FileItem[]>([]);
    const uploading = ref<boolean>(false);

    const handleRemove = (file: FileItem) => {
      const index = fileList.value.indexOf(file);
      const newFileList = fileList.value.slice();
      newFileList.splice(index, 1);
      fileList.value = newFileList;
    };

    const beforeUpload = (file: FileItem) => {
      fileList.value = [...fileList.value, file];
      return false;
    };

    const handleUpload = () => {
      const formData = new FormData();
      fileList.value.forEach((file: FileItem) => {
        formData.append('files[]', file as any);
      });
      uploading.value = true;

      // You can use any AJAX library you like
      request('https://www.mocky.io/v2/5cc8019d300000980a055e76', {
        method: 'post',
        data: formData,
      })
        .then(() => {
          fileList.value = [];
          uploading.value = false;
          message.success('upload successfully.');
        })
        .catch(() => {
          uploading.value = false;
          message.error('upload failed.');
        });
    };

    return {
      fileList,
      uploading,
      handleRemove,
      beforeUpload,
      handleUpload,
    };
  },
});
<\/script>
`,yn=T({components:{UploadOutlined:G}});const Ma=D(" Upload Directory ");function Na(e,t,n,r,a,o){const i=p("upload-outlined"),s=p("a-button"),l=p("a-upload");return P(),O(l,{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76",directory:""},{default:w(()=>[f(s,null,{default:w(()=>[f(i),Ma]),_:1})]),_:1})}yn.render=Na;var Va=`<cn>
#### \u6587\u4EF6\u5939\u4E0A\u4F20
\u652F\u6301\u4E0A\u4F20\u4E00\u4E2A\u6587\u4EF6\u5939\u91CC\u7684\u6240\u6709\u6587\u4EF6\u3002
</cn>

<us>
#### Upload directory
You can select and upload a whole directory.
</us>
`,za=`<template>
  <a-upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76" directory>
    <a-button>
      <upload-outlined></upload-outlined>
      Upload Directory
    </a-button>
  </a-upload>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { UploadOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    UploadOutlined,
  },
});
<\/script>
`,mn=T({components:{UploadOutlined:G},setup(){return{previewFile:async t=>{console.log("Your upload file:",t);const n=await fetch("https://next.json-generator.com/api/json/get/4ytyBoLK8",{method:"POST",body:t}),{thumbnail:r}=await n.json();return r},fileList:E([])}}});const Wa=D(" Upload ");function Ja(e,t,n,r,a,o){const i=p("upload-outlined"),s=p("a-button"),l=p("a-upload");return P(),O("div",null,[f(l,{"list-type":"picture",action:"//jsonplaceholder.typicode.com/posts/","preview-file":e.previewFile,"file-list":e.fileList,"onUpdate:file-list":t[1]||(t[1]=u=>e.fileList=u)},{default:w(()=>[f(s,null,{default:w(()=>[f(i),Wa]),_:1})]),_:1},8,["preview-file","file-list"])])}mn.render=Ja;var Za=`<cn>
#### \u81EA\u5B9A\u4E49\u9884\u89C8
\u81EA\u5B9A\u4E49\u672C\u5730\u9884\u89C8\uFF0C\u7528\u4E8E\u5904\u7406\u975E\u56FE\u7247\u683C\u5F0F\u6587\u4EF6\uFF08\u4F8B\u5982\u89C6\u9891\u6587\u4EF6\uFF09\u3002
</cn>

<us>
#### Customize preview file
Customize local preview. Can handle with non-image format files such as video.
</us>
`,Ha=`<template>
  <div>
    <a-upload
      list-type="picture"
      action="//jsonplaceholder.typicode.com/posts/"
      :preview-file="previewFile"
      v-model:file-list="fileList"
    >
      <a-button>
        <upload-outlined></upload-outlined>
        Upload
      </a-button>
    </a-upload>
  </div>
</template>
<script lang="ts">
import { UploadOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: {
    UploadOutlined,
  },
  setup() {
    const previewFile = async (file: any): Promise<Response> => {
      console.log('Your upload file:', file);
      // Your process logic. Here we just mock to the same file
      const res = await fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
        method: 'POST',
        body: file,
      });
      const { thumbnail } = await res.json();
      return thumbnail;
    };
    return {
      previewFile,
      fileList: ref([]),
    };
  },
});
<\/script>
`,hn=T({components:{UploadOutlined:G},setup(){return{transformFile:t=>new Promise(n=>{const r=new FileReader;r.readAsDataURL(t),r.onload=()=>{const a=document.createElement("canvas"),o=document.createElement("img");o.src=r.result,o.onload=()=>{const i=a.getContext("2d");i.drawImage(o,0,0),i.fillStyle="red",i.textBaseline="middle",i.fillText("Ant Design",20,20),a.toBlob(n)}}}),fileList:E([])}}});const Ga=D(" Upload ");function Qa(e,t,n,r,a,o){const i=p("upload-outlined"),s=p("a-button"),l=p("a-upload");return P(),O("div",null,[f(l,{action:"https://www.mocky.io/v2/5cc8019d300000980a055e76","transform-file":e.transformFile,"file-list":e.fileList,"onUpdate:file-list":t[1]||(t[1]=u=>e.fileList=u)},{default:w(()=>[f(s,null,{default:w(()=>[f(i),Ga]),_:1})]),_:1},8,["transform-file","file-list"])])}hn.render=Qa;var Ya=`<cn>
#### \u4E0A\u4F20\u524D\u8F6C\u6362\u6587\u4EF6
\u4F7F\u7528 \`transformFile\` \u8F6C\u6362\u4E0A\u4F20\u7684\u6587\u4EF6\uFF08\u4F8B\u5982\u6DFB\u52A0\u6C34\u5370\uFF09\u3002
</cn>

<us>
#### Transform file before request
Use \`transformFile\` for transform file before request such as add a watermark.
</us>
`,Ka=`<template>
  <div>
    <a-upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      :transform-file="transformFile"
      v-model:file-list="fileList"
    >
      <a-button>
        <upload-outlined></upload-outlined>
        Upload
      </a-button>
    </a-upload>
  </div>
</template>
<script lang="ts">
import { UploadOutlined } from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  components: {
    UploadOutlined,
  },
  setup() {
    const transformFile = (file: any) => {
      return new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          const canvas = document.createElement('canvas');
          const img: HTMLImageElement = document.createElement('img');
          img.src = reader.result as string;
          img.onload = () => {
            const ctx: CanvasRenderingContext2D = canvas.getContext('2d')!;
            ctx.drawImage(img, 0, 0);
            ctx.fillStyle = 'red';
            ctx.textBaseline = 'middle';
            ctx.fillText('Ant Design', 20, 20);
            canvas.toBlob(resolve);
          };
        };
      });
    };
    return {
      transformFile,
      fileList: ref([]),
    };
  },
});
<\/script>
`;const Xa={class:"markdown-body"},ei=En(`<h2>API</h2><table><thead><tr><th>\u53C2\u6570</th><th>\u8BF4\u660E</th><th>\u7C7B\u578B</th><th>\u9ED8\u8BA4\u503C</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>accept</td><td>\u63A5\u53D7\u4E0A\u4F20\u7684\u6587\u4EF6\u7C7B\u578B, \u8BE6\u89C1 <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept">input accept Attribute</a></td><td>string</td><td>\u65E0</td><td></td></tr><tr><td>action</td><td>\u4E0A\u4F20\u7684\u5730\u5740</td><td>string|(file) =&gt; <code>Promise</code></td><td>\u65E0</td><td></td></tr><tr><td>method</td><td>\u4E0A\u4F20\u8BF7\u6C42\u7684 http method</td><td>string</td><td>\u2018post\u2019</td><td>1.5.0</td></tr><tr><td>directory</td><td>\u652F\u6301\u4E0A\u4F20\u6587\u4EF6\u5939\uFF08<a href="https://caniuse.com/#feat=input-file-directory">caniuse</a>\uFF09</td><td>boolean</td><td>false</td><td></td></tr><tr><td>beforeUpload</td><td>\u4E0A\u4F20\u6587\u4EF6\u4E4B\u524D\u7684\u94A9\u5B50\uFF0C\u53C2\u6570\u4E3A\u4E0A\u4F20\u7684\u6587\u4EF6\uFF0C\u82E5\u8FD4\u56DE <code>false</code> \u5219\u505C\u6B62\u4E0A\u4F20\u3002\u652F\u6301\u8FD4\u56DE\u4E00\u4E2A Promise \u5BF9\u8C61\uFF0CPromise \u5BF9\u8C61 reject \u65F6\u5219\u505C\u6B62\u4E0A\u4F20\uFF0Cresolve \u65F6\u5F00\u59CB\u4E0A\u4F20\uFF08 resolve \u4F20\u5165 <code>File</code> \u6216 <code>Blob</code> \u5BF9\u8C61\u5219\u4E0A\u4F20 resolve \u4F20\u5165\u5BF9\u8C61\uFF09\u3002<strong>\u6CE8\u610F\uFF1AIE9 \u4E0D\u652F\u6301\u8BE5\u65B9\u6CD5</strong>\u3002</td><td>(file, fileList) =&gt; \`boolean</td><td>Promise\`</td><td>\u65E0</td></tr><tr><td>customRequest</td><td>\u901A\u8FC7\u8986\u76D6\u9ED8\u8BA4\u7684\u4E0A\u4F20\u884C\u4E3A\uFF0C\u53EF\u4EE5\u81EA\u5B9A\u4E49\u81EA\u5DF1\u7684\u4E0A\u4F20\u5B9E\u73B0</td><td>Function</td><td>\u65E0</td><td></td></tr><tr><td>data</td><td>\u4E0A\u4F20\u6240\u9700\u53C2\u6570\u6216\u8FD4\u56DE\u4E0A\u4F20\u53C2\u6570\u7684\u65B9\u6CD5</td><td>object|(file) =&gt; object</td><td>\u65E0</td><td></td></tr><tr><td>defaultFileList</td><td>\u9ED8\u8BA4\u5DF2\u7ECF\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868</td><td>object[]</td><td>\u65E0</td><td></td></tr><tr><td>disabled</td><td>\u662F\u5426\u7981\u7528</td><td>boolean</td><td>false</td><td></td></tr><tr><td>fileList</td><td>\u5DF2\u7ECF\u4E0A\u4F20\u7684\u6587\u4EF6\u5217\u8868\uFF08\u53D7\u63A7\uFF09</td><td>object[]</td><td>\u65E0</td><td></td></tr><tr><td>headers</td><td>\u8BBE\u7F6E\u4E0A\u4F20\u7684\u8BF7\u6C42\u5934\u90E8\uFF0CIE10 \u4EE5\u4E0A\u6709\u6548</td><td>object</td><td>\u65E0</td><td></td></tr><tr><td>listType</td><td>\u4E0A\u4F20\u5217\u8868\u7684\u5185\u5EFA\u6837\u5F0F\uFF0C\u652F\u6301\u4E09\u79CD\u57FA\u672C\u6837\u5F0F <code>text</code>, <code>picture</code> \u548C <code>picture-card</code></td><td>string</td><td>\u2018text\u2019</td><td></td></tr><tr><td>multiple</td><td>\u662F\u5426\u652F\u6301\u591A\u9009\u6587\u4EF6\uFF0C<code>ie10+</code> \u652F\u6301\u3002\u5F00\u542F\u540E\u6309\u4F4F ctrl \u53EF\u9009\u62E9\u591A\u4E2A\u6587\u4EF6\u3002</td><td>boolean</td><td>false</td><td></td></tr><tr><td>name</td><td>\u53D1\u5230\u540E\u53F0\u7684\u6587\u4EF6\u53C2\u6570\u540D</td><td>string</td><td>\u2018file\u2019</td><td></td></tr><tr><td>previewFile</td><td>\u81EA\u5B9A\u4E49\u6587\u4EF6\u9884\u89C8\u903B\u8F91</td><td>(file: File | Blob) =&gt; Promise&lt;dataURL: string&gt;</td><td>\u65E0</td><td>1.5.0</td></tr><tr><td>showUploadList</td><td>\u662F\u5426\u5C55\u793A uploadList, \u53EF\u8BBE\u4E3A\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u7528\u4E8E\u5355\u72EC\u8BBE\u5B9A showPreviewIcon \u548C showRemoveIcon</td><td>Boolean or { showPreviewIcon?: boolean, showRemoveIcon?: boolean }</td><td>true</td><td></td></tr><tr><td>supportServerRender</td><td>\u670D\u52A1\u7AEF\u6E32\u67D3\u65F6\u9700\u8981\u6253\u5F00\u8FD9\u4E2A</td><td>boolean</td><td>false</td><td></td></tr><tr><td>withCredentials</td><td>\u4E0A\u4F20\u8BF7\u6C42\u65F6\u662F\u5426\u643A\u5E26 cookie</td><td>boolean</td><td>false</td><td></td></tr><tr><td>openFileDialogOnClick</td><td>\u70B9\u51FB\u6253\u5F00\u6587\u4EF6\u5BF9\u8BDD\u6846</td><td>boolean</td><td>true</td><td></td></tr><tr><td>remove</td><td>\u70B9\u51FB\u79FB\u9664\u6587\u4EF6\u65F6\u7684\u56DE\u8C03\uFF0C\u8FD4\u56DE\u503C\u4E3A false \u65F6\u4E0D\u79FB\u9664\u3002\u652F\u6301\u8FD4\u56DE\u4E00\u4E2A Promise \u5BF9\u8C61\uFF0CPromise \u5BF9\u8C61 resolve(false) \u6216 reject \u65F6\u4E0D\u79FB\u9664\u3002</td><td>Function(file): \`boolean</td><td>Promise\`</td><td>\u65E0</td></tr><tr><td>transformFile</td><td>\u5728\u4E0A\u4F20\u4E4B\u524D\u8F6C\u6362\u6587\u4EF6\u3002\u652F\u6301\u8FD4\u56DE\u4E00\u4E2A Promise \u5BF9\u8C61</td><td>Function(file): \`string</td><td>Blob</td><td>File</td></tr></tbody></table><h3>\u4E8B\u4EF6</h3><table><thead><tr><th>\u4E8B\u4EF6\u540D\u79F0</th><th>\u8BF4\u660E</th><th>\u56DE\u8C03\u53C2\u6570</th><th>\u7248\u672C</th></tr></thead><tbody><tr><td>change</td><td>\u4E0A\u4F20\u6587\u4EF6\u6539\u53D8\u65F6\u7684\u72B6\u6001\uFF0C\u8BE6\u89C1 <a href="#change">change</a></td><td>Function</td><td>\u65E0</td></tr><tr><td>preview</td><td>\u70B9\u51FB\u6587\u4EF6\u94FE\u63A5\u6216\u9884\u89C8\u56FE\u6807\u65F6\u7684\u56DE\u8C03</td><td>Function(file)</td><td>\u65E0</td></tr><tr><td>download</td><td>\u70B9\u51FB\u4E0B\u8F7D\u6587\u4EF6\u65F6\u7684\u56DE\u8C03\uFF0C\u5982\u679C\u6CA1\u6709\u6307\u5B9A\uFF0C\u5219\u9ED8\u8BA4\u8DF3\u8F6C\u5230\u6587\u4EF6 url \u5BF9\u5E94\u7684\u6807\u7B7E\u9875\u3002</td><td>Function(file): void</td><td>\u8DF3\u8F6C\u65B0\u6807\u7B7E\u9875</td></tr><tr><td>reject</td><td>\u62D6\u62FD\u6587\u4EF6\u4E0D\u7B26\u5408 accept \u7C7B\u578B\u65F6\u7684\u56DE\u8C03</td><td>Function(fileList)</td><td>\u65E0</td></tr></tbody></table><h3>change</h3><blockquote><p>\u4E0A\u4F20\u4E2D\u3001\u5B8C\u6210\u3001\u5931\u8D25\u90FD\u4F1A\u8C03\u7528\u8FD9\u4E2A\u51FD\u6570\u3002</p></blockquote><p>\u6587\u4EF6\u72B6\u6001\u6539\u53D8\u7684\u56DE\u8C03\uFF0C\u8FD4\u56DE\u4E3A\uFF1A</p><pre><code class="language-js">{
  file: { /* ... */ },
  fileList: [ /* ... */ ],
  event: { /* ... */ },
}
</code></pre><ol><li><p><code>file</code> \u5F53\u524D\u64CD\u4F5C\u7684\u6587\u4EF6\u5BF9\u8C61\u3002</p><pre><code class="language-js">{
   uid: &#39;uid&#39;,      // \u6587\u4EF6\u552F\u4E00\u6807\u8BC6\uFF0C\u5EFA\u8BAE\u8BBE\u7F6E\u4E3A\u8D1F\u6570\uFF0C\u9632\u6B62\u548C\u5185\u90E8\u4EA7\u751F\u7684 id \u51B2\u7A81
   name: &#39;xx.png&#39;,   // \u6587\u4EF6\u540D
   status: &#39;done&#39;, // \u72B6\u6001\u6709\uFF1Auploading done error removed
   response: &#39;{&quot;status&quot;: &quot;success&quot;}&#39;, // \u670D\u52A1\u7AEF\u54CD\u5E94\u5185\u5BB9
   linkProps: &#39;{&quot;download&quot;: &quot;image&quot;}&#39;, // \u4E0B\u8F7D\u94FE\u63A5\u989D\u5916\u7684 HTML \u5C5E\u6027
   xhr: &#39;XMLHttpRequest{ ... }&#39;, // XMLHttpRequest Header
}
</code></pre></li><li><p><code>fileList</code> \u5F53\u524D\u7684\u6587\u4EF6\u5217\u8868\u3002</p></li><li><p><code>event</code> \u4E0A\u4F20\u4E2D\u7684\u670D\u52A1\u7AEF\u54CD\u5E94\u5185\u5BB9\uFF0C\u5305\u542B\u4E86\u4E0A\u4F20\u8FDB\u5EA6\u7B49\u4FE1\u606F\uFF0C\u9AD8\u7EA7\u6D4F\u89C8\u5668\u652F\u6301\u3002</p></li></ol>`,9),ti={expose:[],setup(e){return(t,n)=>(P(),O("div",Xa,[ei]))}};var ni=ti;const gn={cn:`# \u4E0A\u4F20
  \u4E0A\u4F20\u662F\u5C06\u4FE1\u606F\uFF08\u7F51\u9875\u3001\u6587\u5B57\u3001\u56FE\u7247\u3001\u89C6\u9891\u7B49\uFF09\u901A\u8FC7\u7F51\u9875\u6216\u8005\u4E0A\u4F20\u5DE5\u5177\u53D1\u5E03\u5230\u8FDC\u7A0B\u670D\u52A1\u5668\u4E0A\u7684\u8FC7\u7A0B\u3002
  ## \u4F55\u65F6\u4F7F\u7528
  - \u5F53\u9700\u8981\u4E0A\u4F20\u4E00\u4E2A\u6216\u4E00\u4E9B\u6587\u4EF6\u65F6\u3002
  - \u5F53\u9700\u8981\u5C55\u73B0\u4E0A\u4F20\u7684\u8FDB\u5EA6\u65F6\u3002
  - \u5F53\u9700\u8981\u4F7F\u7528\u62D6\u62FD\u4EA4\u4E92\u65F6\u3002
        ## \u4EE3\u7801\u6F14\u793A`,us:`# Upload
  Upload file by selecting or dragging.


## When To Use

  Uploading is the process of publishing information (web pages, text, pictures, video, etc.) to a remote server via a web page or upload tool.

  - When you need to upload one or more files.
  - When you need to show the process of uploading.
  - When you need to upload files by dragging and dropping.
  ## Examples
  `};var ai={category:"Components",subtitle:"\u4E0A\u4F20",type:"Data Entry",title:"Upload",render(){return f("div",null,[f(p("Md"),{cn:gn.cn,us:gn.us},null),f(p("demo-sort"),null,{default:()=>[f(p("demo-container"),{api:Fn,code:xn},{default:()=>[f(gt,null,null)]}),f(p("demo-container"),{api:Rn,code:kn},{default:()=>[f(vt,null,null)]}),f(p("demo-container"),{api:qn,code:Dn},{default:()=>[f(bt,null,null)]}),f(p("demo-container"),{api:Jn,code:Zn},{default:()=>[f(wt,null,null)]}),f(p("demo-container"),{api:Qn,code:Yn},{default:()=>[f(_t,null,null)]}),f(p("demo-container"),{api:nr,code:rr},{default:()=>[f(St,null,null)]}),f(p("demo-container"),{api:ur,code:fr},{default:()=>[f(Te,null,null)]}),f(p("demo-container"),{api:qa,code:Da},{default:()=>[f(dn,null,null)]}),f(p("demo-container"),{api:Va,code:za},{default:()=>[f(yn,null,null)]}),f(p("demo-container"),{api:Za,code:Ha},{default:()=>[f(mn,null,null)]}),f(p("demo-container"),{api:Ya,code:Ka},{default:()=>[f(hn,null,null)]})]}),f(p("api"),null,{default:()=>[f(ni,null,null)]})])}};export{ai as default};

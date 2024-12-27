---
category: Components
subtitle: 上传图片
type: 数据录入
title: UploadImage
cover: https://gw.alipayobjects.com/zos/alicdn/QaeBt_ZMg/Upload.svg
---

上传组件的封装。

## 何时使用

- 只需要显示图片
- 单文件上传

## API

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- | --- |
| value(v-model) | 上传的值 | string \| object | - | - |
| onFormChange | 上传之后触发的方法 | function | () => {} | - |
| mergeOriginDatas | 设置 form 提交的数据 | function | - | - |
| headers | 上传图片的 headers 设置 | - | - |  |
| placeholder | 上传按钮的文案 | - | - |  |
| accept | 接受上传的文件类型, 详见 [input accept Attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#accept) | string | 'image/png', 'image/jpeg' |  |
| action | 上传的地址 | string | 无 |  |
| autoUpload | 是否自动上传 | boolean | true |  |
| resultKey | ajax 返回来的数据存放的字段 | string | 'data' |  |
| nameKey | 图片名字存储的字段 | string | 'name' |  |
| urlKey | 图片地址存储的字段 | string | 'url' |  |
| limitSize | 图片限制的大小 | number | 2(M) |  |
| limitErrorText | 图片限制的大小报错文案 | string | 图片必须小于 | 4.10.0 |
| disabled | 禁用 | boolean | - |  |
| imageWidth | 图片宽度 | number | 100 |  |
| imageHeight | 图片高度 | number | 100 |  |
| errorImage | value 加载失败的显示 | string |  |  |
| size | 设置按钮大小，可选值为 `small` `large` 或者不设 | string | `default` |  |
| allowUpdate | 展示预览及可删除 | boolean | false | 3.41.0 |
| data | 上传所需参数或返回上传参数的方法 | object\|(file) => object | 无 |  | 4.0.0 |
| cropper | 裁切功能 | boolean | false |  | 4.30.0 |
| cropperProps | 裁切功能组件的配置 | object | - |  | 4.30.0 |
| cropperUploadType | 上传的 file 字段是 base64 还是 binary 。可选值: binary \| base64 | String | base64 |  | 4.31.0 |
| cropperCanvasToDataURLType | 导出图片类型。可选值: 'image/png' 或 'image/jpeg' 或 'image/webp' | String | image/png |  | 4.32.0 |
| cropperCanvasToDataURLQuality | 导出图片质量。在 0 - 1 之间。 | Number | 0.92 |  | 4.32.0 |
| uploadErrorTip | 报错文案 | String | image/png |  | 4.32.0 |

### 事件

| 事件名称     | 说明                                           | 回调参数       | 版本 |
| ------------ | ---------------------------------------------- | -------------- | ---- | --- |
| change       | 上传文件改变时的状态，详见 [change](#change)   | Function       | 无   |     |
| changeUpload | 上传改变，与 change 分隔，用在 form pro 配置中 | Function(file) | 无   |     |

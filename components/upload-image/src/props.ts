import type { PropType, ExtractPropTypes } from 'vue';
import type { UploadImageLocale } from '../interface';
import PropTypes from '../../_util/vue-types';
import { acceptListString } from '../../_util/hooks/use-upload';

export const uploadImageProps = {
  value: PropTypes.string,
  onFormChange: {
    type: Function,
    default: () => {},
  },
  mergeOriginDatas: {
    type: Function,
    default: undefined,
  },
  action: PropTypes.string,
  accept: PropTypes.string.def(acceptListString),
  autoUpload: PropTypes.bool.def(true),
  headers: PropTypes.object,
  urlKey: PropTypes.string.def('url'),
  resultKey: PropTypes.string.def('data'),
  nameKey: PropTypes.string.def('name'),
  imageWidth: PropTypes.number.def(100),
  imageHeight: PropTypes.number.def(100),
  limitSize: PropTypes.number.def(2),
  limitErrorText: PropTypes.string.def('图片必须小于'),
  placeholder: PropTypes.string,
  errorImage: PropTypes.string,
  disabled: PropTypes.bool,
  allowUpdate: PropTypes.bool.def(false),
  locale: { type: Object as PropType<UploadImageLocale> },
  cropper: PropTypes.bool.def(false),
  cropperProps: { type: Object as PropType<any>, default: () => ({}) },
  cropperUploadType: PropTypes.string.def('base64'),
  cropperCanvasToDataURLType: { type: String, default: 'image/png' },
  cropperCanvasToDataURLQuality: { type: Number, default: 0.92 },
  uploadErrorTip: { type: String, default: '上传失败' },
};
export type UploadImageProps = Partial<ExtractPropTypes<typeof uploadImageProps>>;

import type { PropType } from 'vue';
import type { UploadCardLocale } from './interface';

import type { ExtractPropTypes } from 'vue';
import { acceptListString } from '../_util/hooks/use-upload';
import PropTypes from '../_util/vue-types';

export const uploadCardProps = {
  value: PropTypes.array.def([]),
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
  data: PropTypes.object.def({}),
  headers: PropTypes.object,
  urlKey: PropTypes.string.def('url'),
  resultKey: PropTypes.string.def('data'),
  nameKey: PropTypes.string.def('name'),
  imageWidth: PropTypes.number.def(100),
  imageHeight: PropTypes.number.def(100),
  limitSize: PropTypes.number.def(2),
  placeholder: PropTypes.string,
  errorImage: PropTypes.string,
  disabled: PropTypes.bool,
  maxUploadCount: PropTypes.number,
  objectFit: PropTypes.string.def('contain'),
  draggable: PropTypes.looseBool,
  locale: { type: Object as PropType<UploadCardLocale> },
  multiple: PropTypes.looseBool,
  maxCount: PropTypes.number,
  name: PropTypes.string.def('file'),
  cropper: PropTypes.bool.def(false),
  cropperProps: { type: Object as PropType<any>, default: {} },
  cropperUploadType: PropTypes.string.def('base64'),
};
export type UploadCardProps = Partial<ExtractPropTypes<typeof uploadCardProps>>;

import type { PropType, ExtractPropTypes } from 'vue';
import type { UploadNameLocale } from '../interface';

import { tuple } from '../../_util/type';
import PropTypes from '../../_util/vue-types';
import { acceptListString } from '../../_util/hooks/use-upload';

const ButtonSizes = tuple('large', 'default', 'small');

export type ButtonSize = typeof ButtonSizes[number];

export const uploadNameProps = {
  value: [Object, String],
  onFormChange: {
    type: Function,
    default: () => {},
  },
  mergeOriginDatas: {
    type: Function,
    default: undefined,
  },
  // FEAT 4.0+
  mergeChangeDatas: {
    type: Function,
    default: undefined,
  },
  data: PropTypes.object.def({}),
  headers: PropTypes.object,
  placeholder: PropTypes.string,
  accept: PropTypes.string.def(acceptListString),
  action: PropTypes.string,
  autoUpload: PropTypes.bool.def(true),
  resultKey: PropTypes.string.def('data'),
  nameKey: PropTypes.string.def('name'),
  urlKey: PropTypes.string.def('url'),
  limitErrorText: PropTypes.string.def('图片必须小于'),
  limitSize: PropTypes.number.def(2),
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(ButtonSizes).def('default'),
  locale: { type: Object as PropType<UploadNameLocale> },
};
export type UploadNameProps = Partial<ExtractPropTypes<typeof uploadNameProps>>;

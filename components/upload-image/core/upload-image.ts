/** @format */

import { defineComponent, watchEffect, inject } from 'vue';

import { LoadingOutlined } from '@ant-design/icons-vue';

import { Upload } from '../../upload';
import Image from '../../image';

import { acceptListString, useUpload } from '../../_util/hooks/use-upload';
import { FileItem } from '../../_util/types/types';
import PropTypes from '../../_util/vue-types';
import useConfigInject from '../../_util/hooks/useConfigInject';
import { defaultConfigProvider } from '../../config-provider';

import { errorUploadImage } from '../../config-provider/error-image';

export default defineComponent({
  name: 'AUploadImage',
  components: {
    LoadingOutlined,
    AUpload: Upload,
    AImage: Image,
  },
  props: {
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
    placeholder: PropTypes.string,
    errorImage: PropTypes.string,
    disabled: PropTypes.bool,
  },
  emits: ['changeUpload', 'change'],
  setup(props, params: Recordable) {
    const { prefixCls: prefixClsNew } = useConfigInject('upload-image', props);
    const { errorImage: errorImageDef } = inject('configProvider', defaultConfigProvider);

    const { loading, beforeUpload, handleChange, imageUrl } = useUpload(props, params);

    watchEffect(async () => {
      // NOTE 去掉为空判断，素材中心，通字段再打开图片保留问题
      imageUrl.value = props.value;
    });

    const beforeUploadFn = (file: FileItem) => {
      return beforeUpload(file, props.accept.split(','));
    };

    return {
      loading,
      beforeUploadFn,
      handleChange,
      imageUrl,
      acceptListString,
      prefixClsNew,
      errorBackImage: props.errorImage || errorImageDef || errorUploadImage,
    };
  },
});

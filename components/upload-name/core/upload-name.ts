/** @format */

import { defineComponent, ref, watchEffect } from 'vue';
import { PictureOutlined, DeleteOutlined, FileOutlined } from '@ant-design/icons-vue';

import useConfigInject from '../../_util/hooks/useConfigInject';
import PropTypes from '../../_util/vue-types';
import { acceptListString, useUpload, acceptList } from '../../_util/hooks/use-upload';
import { FileItem } from '../../_util/types/types';
import { tuple } from '../../_util/type';

import AButton from '../../button/button';
import { Upload } from '../../upload';

const ButtonSizes = tuple('large', 'default', 'small');
export type ButtonSize = typeof ButtonSizes[number];

export default defineComponent({
  name: 'AUploadName',
  components: {
    PictureOutlined,
    DeleteOutlined,
    FileOutlined,
    AButton,
    AUpload: Upload,
  },
  props: {
    value: [Object, String],
    onFormChange: {
      type: Function,
      default: () => {},
    },
    mergeOriginDatas: {
      type: Function,
      default: undefined,
    },
    headers: PropTypes.object,
    placeholder: PropTypes.string.def('添加图片'),
    accept: PropTypes.string.def(acceptListString),
    action: PropTypes.string,
    autoUpload: PropTypes.bool.def(true),
    resultKey: PropTypes.string.def('data'),
    nameKey: PropTypes.string.def('name'),
    urlKey: PropTypes.string.def('url'),
    limitSize: PropTypes.number.def(2),
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(ButtonSizes).def('default'),
  },
  emits: ['changeUpload', 'change'],
  setup(props, params: Recordable) {
    const { prefixCls: prefixClsNew } = useConfigInject('upload-name', props);

    const { loading, beforeUpload, handleChange, removeImage, imageName } = useUpload(
      props,
      params,
    );
    const isImage = ref(true);

    watchEffect(() => {
      if (props.autoUpload) {
        // NOTE 去掉为空判断，素材中心，通字段再打开图片保留问题
        imageName.value = props.value ? (props.value as any)[props.nameKey] : '';
      }
    });

    const beforeUploadFn = (file: FileItem) => {
      const beforeResult = beforeUpload(file, props.accept.split(','));
      isImage.value = acceptList.includes(String(file.type));
      if (!props.autoUpload) {
        imageName.value = file.name || '';
        params.emit('changeUpload', file);
        return false;
      }
      return beforeResult;
    };

    return {
      loading,
      beforeUploadFn,
      handleChange,
      removeImage,
      isImage,
      imageName,
      acceptListString,
      prefixClsNew,
      sizeMap: {
        large: 'lg',
        small: 'sm',
      },
    };
  },
});

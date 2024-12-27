/** @format */

import type { Recordable, FileItem } from '../../_util/type';

import { defineComponent, watchEffect, ref, inject } from 'vue';
import IconBytedEyes from '@fe6/icon-vue/lib/icons/byted-eyes';
import IconBytedDelete from '@fe6/icon-vue/lib/icons/byted-delete';

import { Upload } from '../../upload';
import Image from '../../image';
import Modal from '../../modal';
import ToolTip from '../../tooltip';
import Spin from '../../spin';

import { useUpload } from '../../_util/hooks/use-upload';
import useConfigInject from '../../_util/hooks/useConfigInject';
import { defaultConfigProvider } from '../../config-provider';
import { getSlot } from '../../_util/props-util';

import { errorUploadImage } from '../../config-provider/error-image';
import { useLocaleReceiver } from '../../locale-provider/LocaleReceiver';
import { useInjectFormItemContext } from '../../form/FormItemContext';

import zhCn from '../locale/zh_CN';
import { uploadImageProps } from './props';

export default defineComponent({
  name: 'AUploadImage',
  props: uploadImageProps,
  emits: ['changeUpload', 'change', 'update:value'],
  setup(props, params: Recordable) {
    const [contextLocale] = useLocaleReceiver('UploadImage', zhCn);
    const { prefixCls: prefixClsNew } = useConfigInject('upload-image', props);
    // TODO [fix] 解决使用的过程中未用 configProvider 报错
    const { errorImage: errorImageDef } =
      inject('configProvider', defaultConfigProvider) || defaultConfigProvider;
    const locale = { ...contextLocale.value, ...props.locale };
    const formItemContext = useInjectFormItemContext();

    const { loading, beforeUpload, handleChange, imageUrl } = useUpload(
      props,
      params,
      formItemContext,
      'image',
    );

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
      prefixClsNew,
      errorBackImage: props.errorImage || errorImageDef || errorUploadImage,
      previewPoseterVisible: ref(false),
      locale,
      formItemContext,
    };
  },
  render() {
    let imageNode = null;

    if (this.imageUrl) {
      imageNode = (
        <Image
          width={this.imageWidth - 2}
          height={this.imageHeight - 2}
          src={this.imageUrl}
          bordered={false}
          class={[
            `${this.prefixClsNew}-img`,
            { [`${this.prefixClsNew}-img-disabled`]: this.disabled },
          ]}
          preview={false}
          fallback={this.errorBackImage}
        />
      );
    }

    let placeholderNode = null;

    if (this.placeholder) {
      placeholderNode = <p class={`${this.prefixClsNew}-tip`}>{this.placeholder}</p>;
    }

    let loadingNode = [
      <div v-show={!this.loading}>
        <p class={`${this.prefixClsNew}-tip`}>{this.locale?.placeholder || '上传'}</p>
        {placeholderNode}
      </div>,
    ];
    const placeholderSlotNode = getSlot(this, 'placeholder');
    if (placeholderSlotNode.length) {
      loadingNode = placeholderSlotNode;
    }

    let nodeHtml = null;

    if (this.allowUpdate && this.imageUrl) {
      const handlePoseterPreview = async () => {
        this.previewPoseterVisible = true;
      };
      const handlePoseterCancel = () => {
        this.previewPoseterVisible = false;
      };
      const removeOneImage = () => {
        this.imageUrl = '';
        this.$emit('changeUpload', '');
        this.$emit('change', '');
        this.$emit('update:value', '');
        this.formItemContext.onFieldChange();
        this.formItemContext.onFieldBlur();
      };
      let delNode = null;

      if (!this.disabled) {
        delNode = (
          <ToolTip title={this.locale?.removePlaceholder || '删除'}>
            <IconBytedDelete
              colors={['#fff']}
              onClick={removeOneImage}
              class={`${this.prefixClsNew}-handle-icon`}
            />
          </ToolTip>
        );
      }

      nodeHtml = (
        <div class={`${this.prefixClsNew}-handle-box`} style={{width: `${this.imageWidth}px`,height: `${this.imageHeight}px`}}>
          {imageNode}
          <div class={`${this.prefixClsNew}-handle`}>
            <ToolTip title={this.locale?.seePlaceholder || '查看'}>
              <IconBytedEyes colors={['#fff']} onClick={handlePoseterPreview} />
            </ToolTip>
            {delNode}
          </div>
          <Modal visible={this.previewPoseterVisible} footer={null} onCancel={handlePoseterCancel}>
            <img style="width: 100%" src={this.imageUrl} />
          </Modal>
        </div>
      );
    } else {
      nodeHtml = (
        <Upload
          accept={this.accept}
          class={this.prefixClsNew}
          show-upload-list={false}
          action={this.autoUpload ? this.action : ''}
          headers={this.headers}
          disabled={this.disabled}
          before-upload={this.beforeUploadFn}
          cropper={this.cropper}
          cropperProps={this.cropperProps}
          cropperUploadType={this.cropperUploadType}
          cropperCanvasToDataURLType={this.cropperCanvasToDataURLType}
          cropperCanvasToDataURLQuality={this.cropperCanvasToDataURLQuality}
          uploadErrorTip={this.uploadErrorTip}
          onChange={this.handleChange}
        >
          <div v-show={!this.imageUrl} class={`${this.prefixClsNew}-btn`} style={{width: `${this.imageWidth - 2}px`,height: `${this.imageHeight - 2}px`}}>
            <Spin v-show={this.loading} style="font-size: 0;" />
            {loadingNode}
          </div>
          {imageNode}
        </Upload>
      );
    }

    return nodeHtml;
  },
});

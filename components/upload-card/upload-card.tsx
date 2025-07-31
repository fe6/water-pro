import type { Recordable, ComponentRef, FileItem } from '../_util/type';

import { defineComponent, ref, watchEffect, unref, onMounted } from 'vue';

import IconBytedDelete from '@fe6/icon-vue/lib/icons/byted-delete';
import IconBytedAutoWidth from '@fe6/icon-vue/lib/icons/byted-auto-width';
import IconBytedEyes from '@fe6/icon-vue/lib/icons/byted-eyes';
import { isNumber, isNull, isUndefined } from '@fe6/shared';
import isArray from 'lodash-es/isArray';

import { Upload } from '../upload';
import Image from '../image';
import Modal from '../modal';
import ToolTip from '../tooltip';
import Spin from '../spin';

import { useMoreUpload } from '../_util/hooks/use-upload';
import { useLocaleReceiver } from '../locale-provider/LocaleReceiver';
import { useInjectFormItemContext } from '../form/FormItemContext';
import useConfigInject from '../_util/hooks/useConfigInject';
import { getSlot } from '../_util/props-util';
import { useSortable } from '../_util/hooks/use-sortable';

import { errorUploadImage } from '../config-provider/error-image';

import zhCn from './locale/zh_CN';
import { uploadCardProps } from './props';

export default defineComponent({
  name: 'AUploadCard',
  props: uploadCardProps,
  emits: ['changeUpload', 'change', 'dragEnd'],
  setup(props, params: Recordable) {
    const previewPoseterVisible = ref<boolean>(false);
    const previewPoseterImage = ref<string | undefined>('');
    const handlePoseterPreview = async (imgOneUrl: string) => {
      previewPoseterImage.value = imgOneUrl;
      previewPoseterVisible.value = true;
    };
    const handlePoseterCancel = () => {
      previewPoseterVisible.value = false;
    };

    const [contextLocale] = useLocaleReceiver('UploadCard', zhCn);
    const formItemContext = useInjectFormItemContext();
    const { prefixCls: prefixClsNew, configProvider } = useConfigInject('upload-card', props);
    // TODO [fix] 解决使用的过程中未用 configProvider 报错
    const { errorImage: errorImageDef } = configProvider;
    const locale = { ...contextLocale.value, ...props.locale };

    const theOriginList = ref([]);

    const { moreLoading, beforeUpload, removeOneImage, handleMoreChange, imageList } =
      useMoreUpload(props, params, formItemContext);

    watchEffect(() => {
      if (isArray(props.value) && props.value.length > 0) {
        theOriginList.value = (props.value as string[]).slice();
        imageList.value = (props.value as string[]).slice();
      }
      // 修复 form-pro 重置突然还有的问题
      if (isArray(props.value) && props.value.length === 0) {
        theOriginList.value = [];
        imageList.value = [];
      }
    });

    const beforeUploadFn = (file: FileItem) => {
      return beforeUpload(file, props.accept.split(','));
    };

    const columnListRef = ref<ComponentRef>(null);
    const initTable = () => {
      if (props.draggable) {
        const columnListEl = unref(columnListRef);
        if (!columnListEl) {
          return;
        }

        const { initSortable } = useSortable(columnListEl as any, {
          handle: `.${prefixClsNew.value}-icon-drag`,
          onEnd: (evt) => {
            const { oldIndex, newIndex } = evt;
            if (
              (isUndefined(oldIndex) && isNull(oldIndex)) ||
              (isUndefined(newIndex) && isNull(newIndex)) ||
              oldIndex === newIndex
            ) {
              return;
            }
            // Sort column
            const oldIndexNumber = oldIndex as number;
            const newIndexNumber = newIndex as number;

            const newImageList = theOriginList.value.slice();
            if (oldIndexNumber > newIndexNumber) {
              newImageList.splice(newIndexNumber, 0, newImageList[oldIndexNumber]);
              newImageList.splice(oldIndexNumber + 1, 1);
            } else {
              newImageList.splice(newIndexNumber + 1, 0, newImageList[oldIndexNumber]);
              newImageList.splice(oldIndexNumber, 1);
            }
            params.emit('dragEnd', oldIndexNumber, newIndexNumber);
            params.emit('changeUpload', newImageList);
            props?.mergeOriginDatas?.(null,null, oldIndexNumber, newIndexNumber);
            formItemContext.onFieldChange();
            formItemContext.onFieldBlur();
          },
        });
        initSortable();
      }
    };

    onMounted(initTable);

    return {
      handlePoseterPreview,
      previewPoseterVisible,
      previewPoseterImage,
      handlePoseterCancel,
      columnListRef,

      moreLoading,
      beforeUploadFn,
      handleMoreChange,
      removeOneImage,
      imageList,
      prefixClsNew,
      errorBackImage: props.errorImage || errorImageDef || errorUploadImage,
      locale,
    };
  },
  render() {
    let imageNode = [];

    let dragNode = null;
    if (!this.disabled && this.draggable) {
      dragNode = (
        <ToolTip title={this.locale?.dragPlaceholder || '拖拽改变位置'}>
          <IconBytedAutoWidth
            class={`${this.prefixClsNew}-icon
            ${this.prefixClsNew}-icon-drag`}
            colors={['currentColor']}
          />
        </ToolTip>
      );
    }

    if (this.imageList.length) {
      imageNode = this.imageList.map((iItem: any, iIdx: number) => {
        return (
          <div
            class={`${this.prefixClsNew}-img-box`}
            key={iItem}
            style={{
              width: `${this.imageWidth}px`,
              height: `${this.imageHeight}px`,
            }}
          >
            <Image
              width={this.imageWidth - 18}
              height={this.imageHeight - 18}
              src={iItem}
              class={[
                `${this.prefixClsNew}-img`,
                `${this.prefixClsNew}-img-${this.objectFit}`,
                { [`${this.prefixClsNew}-img-disabled`]: this.disabled },
              ]}
              bordered={false}
              preview={false}
              fallback={this.errorBackImage}
            />
            <div class={`${this.prefixClsNew}-handle`}>
              <ToolTip title={this.locale?.seePlaceholder || '查看'}>
                <IconBytedEyes
                  colors={['currentColor']}
                  onClick={() => this.handlePoseterPreview(iItem)}
                />
              </ToolTip>
              {dragNode}
              {this.disabled ? null : (
                <ToolTip title={this.locale?.removePlaceholder || '删除'}>
                  <IconBytedDelete
                    class={`${this.prefixClsNew}-icon`}
                    colors={['currentColor']}
                    onClick={() => this.removeOneImage(iIdx)}
                  />
                </ToolTip>
              )}
            </div>
          </div>
        );
      });
    }

    const canUpload =
      isUndefined(this.maxUploadCount) ||
      (isNumber(this.maxUploadCount) &&
        this.maxUploadCount > 1 &&
        imageNode.length < this.maxUploadCount);

    let placeholderNode = null;

    if (this.placeholder) {
      placeholderNode = <p class={`${this.prefixClsNew}-tip`}>{this.placeholder}</p>;
    }

    let loadingNode = [
      <div v-show={!this.moreLoading}>
        <p class={`${this.prefixClsNew}-tip`}>{this.locale?.placeholder || '上传'}</p>
        {placeholderNode}
      </div>,
    ];
    const placeholderSlotNode = getSlot(this, 'placeholder');
    if (placeholderSlotNode.length) {
      loadingNode = placeholderSlotNode;
    }

    return (
      <div ref="columnListRef" style={{ minHeight: `${this.imageHeight}px` }}>
        {imageNode}
        <Upload
          accept={this.accept}
          class={this.prefixClsNew}
          show-upload-list={false}
          action={this.autoUpload ? this.action : ''}
          headers={this.headers}
          disabled={this.disabled}
          before-upload={this.beforeUploadFn}
          onChange={this.handleMoreChange}
          multiple={this.multiple}
          maxCount={this.maxUploadCount}
          data={this.data}
          cropper={this.cropper}
          cropperProps={this.cropperProps}
          cropperUploadType={this.cropperUploadType}
          cropperCanvasToDataURLType={this.cropperCanvasToDataURLType}
          cropperCanvasToDataURLQuality={this.cropperCanvasToDataURLQuality}
          uploadErrorTip={this.uploadErrorTip}
          name={this.name}
        >
          <div
            v-show={canUpload}
            class={[
              `${this.prefixClsNew}-btn`,
              {
                [`${this.prefixClsNew}-btn-disabled`]: this.disabled,
              },
            ]}
            style={{
              width: `${this.imageWidth}px`,
              height: `${this.imageHeight}px`,
            }}
          >
            <Spin v-show={this.moreLoading} />
            {loadingNode}
          </div>
        </Upload>
        <Modal
          visible={this.previewPoseterVisible}
          footer={null}
          onCancel={this.handlePoseterCancel}
        >
          <img style={{ width: '100%' }} src={this.previewPoseterImage} />
        </Modal>
      </div>
    );
  },
});

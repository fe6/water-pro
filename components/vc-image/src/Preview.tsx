import {
  computed,
  defineComponent,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  watch,
  cloneVNode,
  h,
} from 'vue';
import type { VNode, PropType } from 'vue';

import classnames from '../../_util/classNames';
import Dialog from '../../vc-dialog';
import { type IDialogChildProps, dialogPropTypes } from '../../vc-dialog/IDialogPropTypes';
import { getOffset } from '../../vc-util/Dom/css';
import addEventListener from '../../vc-util/Dom/addEventListener';
import { warning } from '../../vc-util/warning';
import useFrameSetState from './hooks/useFrameSetState';
import getFixScaleEleTransPosition from './getFixScaleEleTransPosition';
import type { MouseEventHandler, WheelEventHandler } from '../../_util/EventInterface';

import { context } from './PreviewGroup';

export interface PreviewProps extends Omit<IDialogChildProps, 'onClose' | 'mask'> {
  onClose?: (e: Element) => void;
  src?: string;
  alt?: string;
  rootClassName?: string;
  icons?: {
    rotateLeft?: VNode;
    rotateRight?: VNode;
    zoomIn?: VNode;
    zoomOut?: VNode;
    close?: VNode;
    left?: VNode;
    right?: VNode;
  };
}

const initialPosition = {
  x: 0,
  y: 0,
};
export const previewProps = {
  ...dialogPropTypes(),
  src: String,
  alt: String,
  rootClassName: String,
  icons: {
    type: Object as PropType<PreviewProps['icons']>,
    default: () => ({} as PreviewProps['icons']),
  },
};
const Preview = defineComponent({
  name: 'Preview',
  inheritAttrs: false,
  props: previewProps,
  emits: ['close', 'afterClose'],
  setup(props, { emit, attrs }) {
    const scale = ref(1);
    const rotate = ref(0);
    const [position, setPosition] = useFrameSetState<{
      x: number;
      y: number;
    }>(initialPosition);

    const onClose = () => emit('close');
    const imgRef = ref<HTMLImageElement>();
    const originPositionRef = reactive<{
      originX: number;
      originY: number;
      deltaX: number;
      deltaY: number;
    }>({
      originX: 0,
      originY: 0,
      deltaX: 0,
      deltaY: 0,
    });
    const isMoving = ref(false);
    const groupContext = context.inject();
    const { previewUrls, current, isPreviewGroup, setCurrent } = groupContext;
    const previewGroupCount = computed(() => previewUrls.value.size);
    const previewUrlsKeys = computed(() => Array.from(previewUrls.value.keys()));
    const currentPreviewIndex = computed(() => previewUrlsKeys.value.indexOf(current.value));
    const combinationSrc = computed(() => {
      return isPreviewGroup.value ? previewUrls.value.get(current.value) : props.src;
    });
    const showLeftOrRightSwitches = computed(
      () => isPreviewGroup.value && previewGroupCount.value > 1,
    );
    const lastWheelZoomDirection = ref({ wheelDirection: 0 });

    const onAfterClose = () => {
      scale.value = 1;
      rotate.value = 0;
      setPosition(initialPosition);
      emit('afterClose');
    };

    const onZoomIn = () => {
      scale.value++;
      setPosition(initialPosition);
    };
    const onZoomOut = () => {
      if (scale.value > 1) {
        scale.value--;
      }
      setPosition(initialPosition);
    };

    const onRotateRight = () => {
      rotate.value += 90;
    };

    const onRotateLeft = () => {
      rotate.value -= 90;
    };
    const onSwitchLeft: MouseEventHandler = (event) => {
      event.preventDefault();
      // Without this mask close will abnormal
      event.stopPropagation();
      if (currentPreviewIndex.value > 0) {
        setCurrent(previewUrlsKeys.value[currentPreviewIndex.value - 1]);
      }
    };

    const onSwitchRight: MouseEventHandler = (event) => {
      event.preventDefault();
      // Without this mask close will abnormal
      event.stopPropagation();
      if (currentPreviewIndex.value < previewGroupCount.value - 1) {
        setCurrent(previewUrlsKeys.value[currentPreviewIndex.value + 1]);
      }
    };

    const wrapClassName = classnames({
      [`${props.prefixCls}-moving`]: isMoving.value,
    });
    const toolClassName = `${props.prefixCls}-operations-operation`;
    const iconClassName = `${props.prefixCls}-operations-icon`;
    const tools = [
      {
        icon: h(props?.icons?.close, {
          colors: ['currentColor'],
        }),
        onClick: onClose,
        type: 'close',
      },
      {
        icon: h(props?.icons?.zoomIn, {
          colors: ['currentColor'],
        }),
        onClick: onZoomIn,
        type: 'zoomIn',
      },
      {
        icon: h(props?.icons?.zoomOut, {
          colors: ['currentColor'],
        }),
        onClick: onZoomOut,
        type: 'zoomOut',
        disabled: computed(() => scale.value === 1),
      },
      {
        icon: h(props?.icons?.rotateRight, {
          colors: ['currentColor'],
        }),
        onClick: onRotateRight,
        type: 'rotateRight',
      },
      {
        icon: h(props?.icons?.rotateLeft, {
          colors: ['currentColor'],
        }),
        onClick: onRotateLeft,
        type: 'rotateLeft',
      },
    ];

    const onMouseUp: MouseEventHandler = () => {
      if (props.visible && isMoving.value) {
        const width = imgRef.value.offsetWidth * scale.value;
        const height = imgRef.value.offsetHeight * scale.value;
        const { left, top } = getOffset(imgRef.value);
        const isRotate = rotate.value % 180 !== 0;

        isMoving.value = false;

        const fixState = getFixScaleEleTransPosition(
          isRotate ? height : width,
          isRotate ? width : height,
          left,
          top,
        );
        if (fixState) {
          setPosition({ ...fixState });
        }
      }
    };

    const onMouseDown: MouseEventHandler = (event) => {
      // Only allow main button
      if (event.button !== 0) return;
      event.preventDefault();
      // Without this mask close will abnormal
      event.stopPropagation();
      originPositionRef.deltaX = event.pageX - position.x;
      originPositionRef.deltaY = event.pageY - position.y;
      originPositionRef.originX = position.x;
      originPositionRef.originY = position.y;
      isMoving.value = true;
    };

    const onMouseMove: MouseEventHandler = (event) => {
      if (props.visible && isMoving.value) {
        setPosition({
          x: event.pageX - originPositionRef.deltaX,
          y: event.pageY - originPositionRef.deltaY,
        });
      }
    };

    const onWheelMove: WheelEventHandler = (event) => {
      if (!props.visible) return;
      event.preventDefault();
      const wheelDirection = event.deltaY;
      lastWheelZoomDirection.value = { wheelDirection };
    };

    let removeListeners = () => {};
    onMounted(() => {
      watch(
        [() => props.visible, isMoving],
        () => {
          removeListeners();
          let onTopMouseUpListener: { remove: any };
          let onTopMouseMoveListener: { remove: any };

          const onMouseUpListener = addEventListener(window, 'mouseup', onMouseUp, false);
          const onMouseMoveListener = addEventListener(window, 'mousemove', onMouseMove, false);
          const onScrollWheelListener = addEventListener(window, 'wheel', onWheelMove, {
            passive: false,
          });

          try {
            // Resolve if in iframe lost event
            /* istanbul ignore next */
            if (window.top !== window.self) {
              onTopMouseUpListener = addEventListener(window.top, 'mouseup', onMouseUp, false);
              onTopMouseMoveListener = addEventListener(
                window.top,
                'mousemove',
                onMouseMove,
                false,
              );
            }
          } catch (error) {
            /* istanbul ignore next */
            warning(false, `[vc-image] ${error}`);
          }

          removeListeners = () => {
            onMouseUpListener.remove();
            onMouseMoveListener.remove();
            onScrollWheelListener.remove();

            /* istanbul ignore next */
            if (onTopMouseUpListener) onTopMouseUpListener.remove();
            /* istanbul ignore next */
            if (onTopMouseMoveListener) onTopMouseMoveListener.remove();
          };
        },
        { flush: 'post', immediate: true },
      );
    });
    onUnmounted(() => {
      removeListeners();
    });

    return () => {
      const { visible, prefixCls, rootClassName } = props;

      return (
        <Dialog
          {...attrs}
          transitionName="zoom"
          maskTransitionName="fade"
          closable={false}
          keyboard
          prefixCls={prefixCls}
          onClose={onClose}
          afterClose={onAfterClose}
          visible={visible}
          wrapClassName={wrapClassName}
          rootClassName={rootClassName}
          getContainer={props.getContainer}
        >
          <ul class={`${props.prefixCls}-operations`}>
            {tools.map(({ icon: IconType, onClick, type, disabled }) => (
              <li
                class={classnames(toolClassName, {
                  [`${props.prefixCls}-operations-operation-disabled`]: disabled && disabled?.value,
                })}
                onClick={onClick}
                key={type}
              >
                {cloneVNode(IconType, { class: iconClassName })}
              </li>
            ))}
          </ul>
          <div
            class={`${props.prefixCls}-img-wrapper`}
            style={{
              transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
            }}
          >
            <img
              onMousedown={onMouseDown}
              ref={imgRef}
              class={`${props.prefixCls}-img`}
              src={combinationSrc.value}
              alt={props.alt}
              style={{
                transform: `scale3d(${scale.value}, ${scale.value}, 1) rotate(${rotate.value}deg)`,
              }}
            />
          </div>
          {showLeftOrRightSwitches.value && (
            <div
              class={classnames(`${props.prefixCls}-switch-left`, {
                [`${props.prefixCls}-switch-left-disabled`]: currentPreviewIndex.value <= 0,
              })}
              onClick={onSwitchLeft}
            >
              {h(props?.icons?.left, { colors: ['currentColor'] })}
            </div>
          )}
          {showLeftOrRightSwitches.value && (
            <div
              class={classnames(`${props.prefixCls}-switch-right`, {
                [`${props.prefixCls}-switch-right-disabled`]:
                  currentPreviewIndex.value >= previewGroupCount.value - 1,
              })}
              onClick={onSwitchRight}
            >
              {h(props?.icons?.right, { colors: ['currentColor'] })}
            </div>
          )}
        </Dialog>
      );
    };
  },
});

export default Preview;

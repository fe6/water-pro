/** @format */

import type { PropType, CSSProperties } from 'vue';
import { ButtonProps } from '../../button/buttonTypes';

import { VueNode } from '../../_util/type';
import PropTypes from '../../_util/vue-types';
import type { ModalWrapperProps } from './types';

const cancelText = '取消';
const okText = '确认';

export const modalProps = {
  visible: PropTypes.bool,
  scrollTop: PropTypes.bool.def(true),
  height: PropTypes.number,
  minHeight: PropTypes.number,
  // open drag
  draggable: PropTypes.bool.def(true),
  centered: PropTypes.bool,
  cancelText: PropTypes.string.def(cancelText),
  okText: PropTypes.string.def(okText),
  prefixCls: PropTypes.string,

  closeFunc: Function as PropType<() => Promise<boolean>>,
};

export const basicProps = Object.assign({}, modalProps, {
  defaultFullscreen: PropTypes.bool,
  // Can it be full screen
  canFullscreen: PropTypes.bool.def(false),
  // After enabling the wrapper, the bottom can be increased in height
  wrapperFooterOffset: PropTypes.number.def(0),
  // Whether to setting wrapper
  useWrapper: PropTypes.bool.def(true),
  loading: PropTypes.bool,
  loadingTip: PropTypes.string,
  /**
   * @description: Show close button
   */
  showCancelBtn: PropTypes.bool.def(true),
  /**
   * @description: Show confirmation button
   */
  showOkBtn: PropTypes.bool.def(true),

  wrapperProps: Object as PropType<Partial<ModalWrapperProps>>,

  afterClose: Function as PropType<() => Promise<VueNode>>,

  bodyStyle: Object as PropType<CSSProperties>,

  scrollStyle: Object as PropType<CSSProperties>,

  closable: PropTypes.bool.def(true),

  closeIcon: Object as PropType<VueNode>,

  confirmLoading: PropTypes.bool,

  destroyOnClose: PropTypes.bool,

  footer: Object as PropType<VueNode>,

  getContainer: Function as PropType<() => any>,

  mask: PropTypes.bool.def(true),

  maskClosable: PropTypes.bool.def(true),
  keyboard: PropTypes.bool.def(true),

  maskStyle: Object as PropType<CSSProperties>,

  okType: PropTypes.string.def('primary'),

  okButtonProps: Object as PropType<ButtonProps>,

  cancelButtonProps: Object as PropType<ButtonProps>,

  title: PropTypes.string,

  visible: PropTypes.bool,

  width: [String, Number] as PropType<string | number>,

  wrapClassName: PropTypes.string,

  zIndex: PropTypes.number,
});

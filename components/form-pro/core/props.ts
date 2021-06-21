/** @format */

import type { FieldMapToTime, FormSchema } from './types/form';
import type { CSSProperties, PropType } from 'vue';
import type { ColEx } from './types';
import type { TableActionType } from '../../table-pro';
import type { ButtonProps } from '../../button/buttonTypes';

import PropTypes from '../../_util/vue-types';

export const basicProps = {
  model: {
    type: Object as PropType<Recordable>,
    default: {},
  },
  // 标签宽度  固定宽度
  labelWidth: {
    type: [Number, String] as PropType<number | string>,
  },
  fieldMapToTime: {
    type: Array as PropType<FieldMapToTime>,
    default: () => [],
  },
  actionAlgin: PropTypes.oneOf(['left', 'right', 'center']).def('left'),
  compact: PropTypes.bool,
  resetClearValidate: PropTypes.bool.def(true),
  // 表单配置规则
  schemas: {
    type: [Array] as PropType<FormSchema[]>,
    default: () => [],
    // required: true,
  },
  mergeDynamicData: {
    type: Object as PropType<Recordable>,
    default: null,
  },
  baseRowStyle: {
    type: Object as PropType<CSSProperties>,
  },
  baseColProps: {
    type: Object as PropType<Partial<ColEx>>,
  },
  autoSetPlaceHolder: PropTypes.bool.def(true),
  submitOnReset: PropTypes.bool,
  size: PropTypes.oneOf(['default', 'small', 'large']).def('default'),
  // 禁用表单
  disabled: PropTypes.bool,
  emptySpan: {
    type: [Number, Object] as PropType<number | Partial<ColEx>>,
    default: 0,
  },
  // 是否显示收起展开按钮
  showAdvancedButton: PropTypes.bool,
  // 转化时间
  transformDateFunc: {
    type: Function as PropType<Fn>,
    default: (date: any) => {
      return date._isAMomentObject ? date?.format('YYYY-MM-DD HH:mm:ss') : date;
    },
  },
  rulesMessageJoinLabel: PropTypes.bool.def(true),
  // 超过3行自动折叠
  autoAdvancedLine: PropTypes.number.def(3),

  // 是否显示操作按钮
  showActionButtonGroup: PropTypes.bool.def(true),
  // 操作列Col配置
  actionColOptions: {
    type: Object as PropType<Partial<ColEx>>,
    default: () =>({
      span: 22,
      push: 2,
    }),
  },
  // 显示重置按钮
  showResetButton: PropTypes.bool.def(true),
  // 是否聚焦第一个输入框，只在第一个表单项为input的时候作用
  autoFocusFirstItem: PropTypes.bool,
  // 重置按钮配置
  resetButtonOptions: Object as PropType<Partial<ButtonProps>>,

  // 显示确认按钮
  showSubmitButton: PropTypes.bool.def(true),
  // 确认按钮配置
  submitButtonOptions: Object as PropType<Partial<ButtonProps>>,

  // 自定义重置函数
  resetFunc: Function as PropType<() => Promise<void>>,
  submitFunc: Function as PropType<() => Promise<void>>,

  // 以下为默认props
  hideRequiredMark: PropTypes.bool,

  labelCol: {
    type: Object as PropType<Partial<ColEx>>,
    default: () => ({ span: 2 })
  },

  layout: PropTypes
    .oneOf(['horizontal', 'vertical', 'inline'])
    .def('horizontal'),
  tableAction: {
    type: Object as PropType<TableActionType>,
  },

  wrapperCol: {
    type: Object as PropType<Partial<ColEx>>,
    default: () => ({ span: 22 })
  },

  colon: PropTypes.bool.def(true),

  labelAlign: PropTypes.string,
  prefixCls: PropTypes.string,
};

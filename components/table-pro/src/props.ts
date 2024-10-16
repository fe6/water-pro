/** @format */

import type { PropType, ExtractPropTypes } from 'vue';
import type { Recordable, Fn, AjaxApi } from '../../_util/type';
import type { PaginationProps } from './types/pagination';
import type { TableProps } from '../../Table';
import type {
  BasicColumn,
  FetchSetting,
  TableSetting,
  SorterResult,
  TableCustomRecord,
  TableRowSelection,
  LocaleParams,
} from './types/table';
import type { ColProps } from '../../col';
import type { FormProProps } from '../../form-pro';

import { h } from 'vue';

import AEmpty from '../../empty';
import PropTypes from '../../_util/vue-types';
import { DEFAULT_FILTER_FN, DEFAULT_SORT_FN, FETCH_SETTING } from './const';

// 注释看 types/table
export const tableProProps = () => ({
  clickToRowSelect: PropTypes.bool.def(true),

  isTreeTable: PropTypes.bool.def(false),

  inputEnterSubmit: PropTypes.bool.def(true),

  draggable: PropTypes.bool.def(false),

  formLabelALigin: PropTypes.oneOf(['left', 'right']).def('right'),

  formLabelCol: Object as PropType<Partial<ColProps>>,
  formWrapperCol: Object as PropType<Partial<ColProps>>,

  tableSetting: {
    type: Object as PropType<TableSetting>,
  },

  inset: PropTypes.bool,

  totalRender: Function as PropType<() => any>,

  sortFn: {
    type: Function as PropType<(sortInfo: SorterResult) => any>,
    default: DEFAULT_SORT_FN,
  },

  filterFn: {
    type: Function as PropType<(data: Partial<Recordable<string[]>>) => any>,
    default: DEFAULT_FILTER_FN,
  },

  showTableSetting: PropTypes.bool,
  autoCreateKey: PropTypes.bool.def(true),
  striped: PropTypes.bool.def(true),
  showSummary: PropTypes.bool,
  cardable: PropTypes.bool,
  cardTitle: PropTypes.string,
  emptyPlaceholderClassName: PropTypes.func,
  // FEAT 4.0+
  expandIcon: { type: Function as PropType<TableProps['expandIcon']>, default: undefined },
  locale: {
    type: Object as PropType<LocaleParams>,
    default: () => ({
      filterConfirm: '确定',
      filterReset: '重置',
      emptyText: () =>
        h('div', [
          h(AEmpty, {
            image: AEmpty.PRESENTED_IMAGE_SIMPLE,
          }),
        ]),
    }),
  },

  summaryFunc: {
    type: [Function, Array] as PropType<(...arg: any[]) => any[]>,
    default: null,
  },

  summaryData: {
    type: Array as PropType<Recordable[]>,
    default: null,
  },

  indentSize: PropTypes.number.def(24),

  // TODO 是否可拖拽列
  // canColDrag: PropTypes.bool.def(true),
  api: {
    type: Function as PropType<(arg: AjaxApi) => void>,
    default: null,
  },
  beforeFetch: {
    type: Function as PropType<Fn>,
    default: null,
  },
  afterFetch: {
    type: Function as PropType<Fn>,
    default: null,
  },
  handleSearchInfoFn: {
    type: Function as PropType<Fn>,
    default: null,
  },
  fetchSetting: {
    type: Object as PropType<FetchSetting>,
    default: () => {
      return FETCH_SETTING;
    },
  },
  // 立即请求接口
  immediate: PropTypes.bool.def(true),
  emptyDataIsShowTable: PropTypes.bool.def(true),
  // 额外的请求参数
  searchInfo: {
    type: Object as PropType<Recordable>,
    default: null,
  },
  // 使用搜索表单
  useSearchForm: PropTypes.bool,
  // 表单配置
  formConfig: {
    type: Object as PropType<Partial<FormProProps>>,
    default: null,
  },
  columns: {
    type: [Array] as PropType<BasicColumn[]>,
    default: () => [],
  },
  showIndexColumn: PropTypes.bool.def(false),
  indexColumnProps: {
    type: Object as PropType<BasicColumn>,
    default: null,
  },
  actionColumn: {
    type: Object as PropType<BasicColumn>,
    default: null,
  },
  ellipsis: PropTypes.bool.def(true),
  // 因为选中操作显示，高度不匹配
  canResize: PropTypes.looseBool,
  // canResize: PropTypes.bool.def(true),
  clearSelectOnPageChange: PropTypes.bool,
  resizeHeightOffset: PropTypes.number.def(0),
  rowSelection: {
    type: Object as PropType<TableRowSelection | null>,
    default: null,
  },
  title: {
    type: [String, Function] as PropType<string | ((data: Recordable) => string)>,
    default: null,
  },
  titleHelpMessage: {
    type: [String, Array] as PropType<string | string[]>,
  },
  maxHeight: PropTypes.number,
  dataSource: {
    type: Array as PropType<Recordable[]>,
    default: null,
  },
  rowKey: {
    type: [String, Function] as PropType<string | ((record: Recordable) => string)>,
    default: '',
  },
  bordered: PropTypes.bool,
  pagination: {
    type: [Object, Boolean] as PropType<PaginationProps | boolean>,
    default: null,
  },
  loading: PropTypes.bool,
  rowClassName: {
    type: Function as PropType<(record: TableCustomRecord<any>, index: number) => string>,
  },
  scroll: {
    type: Object as PropType<{ x: number | true; y: number }>,
    default: null,
  },
  prefixCls: PropTypes.string,
});

export type TableProProps = Partial<ExtractPropTypes<ReturnType<typeof tableProProps>>>;

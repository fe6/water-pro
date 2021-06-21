/** @format */

import type { SorterResult } from './types/table';

const table = {
  // Form interface request general configuration
  // support xxx.xxx.xxx
  fetchSetting: {
    // 传递到后台的当前页的字段名
    pageField: 'currentPage',
    // 显示在后台的每页的数字字段名称
    sizeField: 'perPage',
    // Field name of the form data returned by the interface
    listField: 'data',
    // 接口字段名返回的表总数
    totalField: 'pagination.total',
  },
  // Number of pages that can be selected
  pageSizeOptions: ['10', '50', '80', '100'],
  // Default display quantity on one page
  defaultPageSize: 10,
  // Custom general sort function
  defaultSortFn: (sortInfo: SorterResult) => {
    const { field, order } = sortInfo;
    return {
      // The sort field passed to the backend you
      field,
      // Sorting method passed to the background asc/desc
      order,
    };
  },
  // Custom general filter function
  defaultFilterFn: (data: Partial<Recordable<string[]>>) => {
    return data;
  },
};

const {
  pageSizeOptions,
  defaultPageSize,
  fetchSetting,
  defaultSortFn,
  defaultFilterFn,
} = table;

export const ROW_KEY = 'key';

// 可选的每页显示条数;
export const PAGE_SIZE_OPTIONS = pageSizeOptions;

// 每页显示条数
export const PAGE_SIZE = defaultPageSize;

// 通用接口字段设置
export const FETCH_SETTING = fetchSetting;

// 配置通用排序函数
export const DEFAULT_SORT_FN = defaultSortFn;

export const DEFAULT_FILTER_FN = defaultFilterFn;

//  表格单元格默认布局，内容整体位置
export const DEFAULT_ALIGN = 'left';

export const INDEX_COLUMN_FLAG = 'INDEX';
export const ACTION_COLUMN_FLAG = 'ACTION';

/** @format */

import type { PaginationProps } from '../types/pagination';
import type { TableProProps } from '../types/table';

import { computed, unref, ref, ComputedRef } from 'vue';
import { LeftOutlined, RightOutlined } from '@ant-design/icons-vue';
import { isBoolean, isFunction } from '@fe6/shared';

import { PAGE_SIZE, PAGE_SIZE_OPTIONS } from '../const';

interface ItemRender {
  page: number;
  type: 'page' | 'prev' | 'next';
  originalElement: any;
}

function itemRender({ page, type, originalElement }: ItemRender) {
  if (type === 'prev') {
    return page === 0 ? null : <LeftOutlined />;
  } else if (type === 'next') {
    return page === 1 ? null : <RightOutlined />;
  }
  return originalElement;
}

export function usePagination(refProps: ComputedRef<TableProProps>) {
  const configRef = ref<PaginationProps>({});

  const show = ref(true);

  const getPaginationInfo = computed((): PaginationProps | boolean => {
    const { pagination, totalRender } = unref(refProps);

    if (!unref(show) || (isBoolean(pagination) && !pagination)) {
      return false;
    }

    return {
      current: 1,
      pageSize: PAGE_SIZE,
      size: 'small',
      defaultPageSize: PAGE_SIZE,
      showTotal: isFunction(totalRender) ? totalRender : (total) => `共 ${total} 条数据`,
      showSizeChanger: false,
      pageSizeOptions: PAGE_SIZE_OPTIONS,
      itemRender,
      showQuickJumper: false,
      ...(isBoolean(pagination) ? {} : (pagination as PaginationProps)),
      ...unref(configRef),
    };
  });

  function setPagination(info: Partial<PaginationProps>) {
    const paginationInfo = unref(getPaginationInfo);
    configRef.value = {
      ...(!isBoolean(paginationInfo)
        ? (paginationInfo as PaginationProps)
        : {}),
      ...info,
    };
  }

  function getPagination() {
    return unref(getPaginationInfo);
  }

  function getShowPagination() {
    return unref(show);
  }

  async function setShowPagination(flag: boolean) {
    show.value = flag;
  }

  return {
    getPagination,
    getPaginationInfo,
    setShowPagination,
    getShowPagination,
    setPagination,
  };
}

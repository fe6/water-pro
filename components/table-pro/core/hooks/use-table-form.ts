/** @format */

import type { ComputedRef, Slots } from 'vue';
import type { TableProProps, FetchParams } from '../types/table';

import { unref, computed } from 'vue';
import { isFunction } from '@fe6/shared';

import type { FormProps } from '../../../form-pro';

export function useTableForm(
  propsRef: ComputedRef<TableProProps>,
  slots: Slots,
  fetch: (opt?: FetchParams | undefined) => Promise<void>,
) {
  const getFormProps = computed(
    (): Partial<FormProps> => {
      const { formConfig } = unref(propsRef);
      return {
        showAdvancedButton: true,
        ...formConfig,
        compact: true,
      };
    },
  );

  const getFormSlotKeys = computed(() => {
    const keys = Object.keys(slots);
    return keys
      .map((item) => (item.startsWith('form-') ? item : null))
      .filter(Boolean);
  });

  function replaceFormSlotKey(key: string) {
    if (!key) return '';
    return key?.replace?.(/form\-/, '') ?? '';
  }

  function handleSearchInfoChange(info: Recordable) {
    const { handleSearchInfoFn } = unref(propsRef);
    if (handleSearchInfoFn && isFunction(handleSearchInfoFn)) {
      info = handleSearchInfoFn(info) || info;
    }
    fetch({ searchInfo: info, page: 1 });
  }

  return {
    getFormProps,
    replaceFormSlotKey,
    getFormSlotKeys,
    handleSearchInfoChange,
  };
}

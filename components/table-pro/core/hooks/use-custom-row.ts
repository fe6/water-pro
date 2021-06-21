/** @format */

import type { ComputedRef } from 'vue';
import type { TableProProps } from '../types/table';
import { unref } from 'vue';
import { isString, isFunction } from '@fe6/shared';

import { ROW_KEY } from '../const';

interface Options {
  setSelectedRowKeys: (keys: string[]) => void;
  getSelectRowKeys: () => string[] | number[];
  clearSelectedRowKeys: () => void;
  emit: EmitType;
  getAutoCreateKey: ComputedRef<boolean | undefined>;
}

function getKey(
  record: Recordable,
  rowKey: string | ((record: Record<string, any>) => string) | undefined,
  autoCreateKey?: boolean,
) {
  if (!rowKey || autoCreateKey) {
    return record[ROW_KEY];
  }
  if (isString(rowKey)) {
    return record[rowKey as string];
  }
  if (isFunction(rowKey)) {
    return record[(rowKey as Function)(record)];
  }
  return null;
}

export function useCustomRow(
  propsRef: ComputedRef<TableProProps>,
  {
    setSelectedRowKeys,
    getSelectRowKeys,
    getAutoCreateKey,
    clearSelectedRowKeys,
    emit,
  }: Options,
) {
  const customRow = (record: Recordable, index: number) => {
    return {
      onClick: (e: Event) => {
        emit('row-click', record, index, e);
        e?.stopPropagation();
        const { rowSelection, rowKey, clickToRowSelect } = unref(propsRef);
        if (!rowSelection || !clickToRowSelect) return;
        const keys = getSelectRowKeys();
        const key = getKey(record, rowKey, unref(getAutoCreateKey));
        if (!key) return;

        const isCheckbox = rowSelection.type === 'checkbox';
        if (isCheckbox) {
          if (!keys.includes(key as never)) {
            setSelectedRowKeys([...keys, key]);
            return;
          }
          const keyIndex = keys.findIndex(
            (item: number | string) => item === key,
          );
          keys.splice(keyIndex, 1);
          setSelectedRowKeys(keys as any);
          return;
        }

        const isRadio = rowSelection.type === 'radio';
        if (isRadio) {
          if (!keys.includes(key as never)) {
            if (keys.length) {
              clearSelectedRowKeys();
            }
            setSelectedRowKeys([key]);
            return;
          }
          clearSelectedRowKeys();
        }
      },
      onDblclick: (event: Event) => {
        emit('row-dbClick', record, index, event);
      },
      onContextmenu: (event: Event) => {
        emit('row-contextmenu', record, index, event);
      },
      onMouseenter: (event: Event) => {
        emit('row-mouseenter', record, index, event);
      },
      onMouseleave: (event: Event) => {
        emit('row-mouseleave', record, index, event);
      },
    };
  };

  return {
    customRow,
  };
}

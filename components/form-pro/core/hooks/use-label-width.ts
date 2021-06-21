/** @format */

import type { Ref } from 'vue';
import type { FormProps, FormSchema } from '../types/form';

import { computed, unref } from 'vue';
import { isNumber } from '@fe6/shared';

export function useItemLabelWidth(
  schemaItemRef: Ref<FormSchema>,
  propsRef: Ref<FormProps>,
) {
  return computed(() => {
    const schemaItem = unref(schemaItemRef);
    const { labelCol = {}, wrapperCol = {} } = schemaItem.itemProps || {};
    const { labelWidth, disabledLabelWidth } = schemaItem;
    const labelText = schemaItem.label || '';

    const {
      labelWidth: globalLabelWidth,
      labelCol: globalLabelCol,
      wrapperCol: globWrapperCol,
    } = unref(propsRef);

    // If labelWidth is set globally, all items setting
    if (
      (!globalLabelWidth && !labelWidth && !globalLabelCol) ||
      disabledLabelWidth
    ) {
      labelCol.style = {
        textAlign: 'left',
      };
      return { labelCol, wrapperCol };
    }
    let width = labelWidth || globalLabelWidth;
    const col = { ...globalLabelCol, ...labelCol };
    const wrapCol = { ...globWrapperCol, ...wrapperCol };

    if (width && labelText) {
      width = isNumber(width) ? `${width}px` : width;
      return {
        labelCol: { style: { width } },
        wrapperCol: { style: { width: `calc(100% - ${width})` } },
      };
    }

    return {
      labelCol: { ...col },
      wrapperCol: { ...wrapCol },
    };
  });
}

export function useActionLabelWidth(
  schemasRef: Ref<FormSchema>[],
  propsRef: Ref<FormProps>,
) {
  return computed(() => {
    const schemas = unref(schemasRef);
    const {
      labelWidth: globalLabelWidth,
      actionColOptions: globWrapperCol,
    } = unref(propsRef);

    // If labelWidth is set globally, all items setting
    if (
      (!globalLabelWidth)
    ) {
      return globWrapperCol;
    }
    let width = globalLabelWidth || 0;
    const wrapCol = { ...globWrapperCol };

    const hasLabelInSchemas = schemas.every((sItem: Recordable) => !!sItem.label);

    if (width && hasLabelInSchemas) {
      width = isNumber(width) ? `${width}px` : width;
      return { style: { width: `calc(100% - ${width})`, marginLeft: width } };
    }

    // fix: form pro 没有 label 的时候堆砌问题
    return hasLabelInSchemas ? { ...wrapCol } : {};
  });
}

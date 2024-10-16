/** @format */

import type { Ref } from 'vue';
import type { FormProSchema } from '../types/form';
import type { Recordable } from '../../../_util/type';
import type { FormProProps, IFormProLabelCol } from '../props';

import { computed, unref } from 'vue';
import { hasOwn, isNumber } from '@fe6/shared';

export function useItemLabelWidth(schemaItemRef: Ref<FormProSchema>, propsRef: Ref<FormProProps>) {
  return computed(() => {
    const schemaItem = unref(schemaItemRef);
    const { labelWidth, disabledLabelWidth } = schemaItem;
    const labelText = schemaItem.label || '';

    const {
      labelWidth: globalLabelWidth,
      labelCol = {} as IFormProLabelCol,
      wrapperCol,
    } = unref(propsRef);

    // If labelWidth is set globally, all items setting
    if ((!globalLabelWidth && !labelWidth && !labelCol) || disabledLabelWidth) {
      labelCol.style = {
        textAlign: 'left',
      };
      return { labelCol, wrapperCol };
    }
    let width = labelWidth || globalLabelWidth;

    if (width && labelText) {
      width = isNumber(width) ? `${width}px` : width;
      return {
        labelCol: { style: { width } },
        wrapperCol: { style: { width: `calc(100% - ${width})` } },
      };
    }

    // NOTE 新增单独字段独立设置
    let itemLabelCol = {};
    let itemWrapperCol = {};
    const isItemSetLabel = hasOwn(schemaItem, 'labelCol');
    const isItemSetWrapper = hasOwn(schemaItem, 'wrapperCol');

    return {
      labelCol: isItemSetLabel ? itemLabelCol : labelCol,
      wrapperCol: isItemSetWrapper ? itemWrapperCol : wrapperCol,
    };
  });
}

export function useActionLabelWidth(schemasRef: Ref<FormProSchema>[], propsRef: Ref<FormProProps>) {
  return computed(() => {
    const schemas = unref(schemasRef);
    const {
      labelWidth: globalLabelWidth,
      actionColOptions: globWrapperCol,
      actionAlgin,
    } = unref(propsRef);

    // If labelWidth is set globally, all items setting
    if (!globalLabelWidth) {
      return globWrapperCol;
    }
    let width = globalLabelWidth || 0;
    const wrapCol = { ...globWrapperCol };

    const hasLabelInSchemas = schemas.every((sItem: Recordable) => !!sItem.label);

    if (width && hasLabelInSchemas && actionAlgin != 'space-between') {
      width = isNumber(width) ? `${width}px` : width;
      return { style: { width: `calc(100% - ${width})`, marginLeft: width } };
    }

    // fix: form pro 没有 label 的时候堆砌问题
    return hasLabelInSchemas ? { ...wrapCol } : {};
  });
}

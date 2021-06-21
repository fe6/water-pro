/** @format */

import { unref } from 'vue';
import type { Ref, ComputedRef } from 'vue';
import {
  isArray,
  isFunction,
  isPlainObject,
  isString,
  isUndefined,
  isNull,
} from '@fe6/shared';

import { dateUtil } from '../date';
import type { FormSchema, FormProps } from '../types/form';

interface UseFormValuesContext {
  defaultValueRef: Ref<any>;
  getSchema: ComputedRef<FormSchema[]>;
  formModel: Recordable;
  getProps: ComputedRef<FormProps>;
}
export function useFormValues({
  defaultValueRef,
  getSchema,
  formModel,
  getProps,
}: UseFormValuesContext) {
  // Processing form values
  function handleFormValues(values: Recordable) {
    if (!isPlainObject(values)) {
      return {};
    }
    const { transformDateFunc } = unref(getProps);
    const res: Recordable = {};
    for (const item of Object.entries(values)) {
      let [, value] = item;
      const [key] = item;
      if ((isArray(value) && value.length === 0) || isFunction(value)) {
        continue;
      }
      if (isPlainObject(value)) {
        value = transformDateFunc(value);
      }
      if (
        isArray(value) &&
        value[0]._isAMomentObject &&
        value[1]._isAMomentObject
      ) {
        value = value.map((item: any) => transformDateFunc(item));
      }
      // Remove spaces
      if (isString(value)) {
        value = value.trim();
      }
      res[key] = value;
    }
    return handleRangeTimeValue(res);
  }

  /**
   * @description: Processing time interval parameters
   */
  function handleRangeTimeValue(values: Recordable) {
    const { fieldMapToTime } = unref(getProps);
    if (!fieldMapToTime || !Array.isArray(fieldMapToTime)) {
      return values;
    }

    for (const [
      field,
      [startTimeKey, endTimeKey],
      format = 'YYYY-MM-DD',
    ] of fieldMapToTime) {
      if (!field || !startTimeKey || !endTimeKey || !values[field]) {
        continue;
      }

      const [startTime, endTime]: string[] = values[field];

      values[startTimeKey] = dateUtil(startTime).format(format);
      values[endTimeKey] = dateUtil(endTime).format(format);
      Reflect.deleteProperty(values, field);
    }

    return values;
  }

  function initDefault() {
    const schemas = unref(getSchema);
    const obj: Recordable = {};
    schemas.forEach((item) => {
      const { defaultValue } = item;
      if (!isUndefined(defaultValue) && !isNull(defaultValue)) {
        obj[item.field] = defaultValue;
        formModel[item.field] = defaultValue;
      }
    });
    defaultValueRef.value = obj;
  }

  return { handleFormValues, initDefault };
}

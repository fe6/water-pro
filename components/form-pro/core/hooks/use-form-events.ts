/** @format */

import { ComputedRef, Ref } from 'vue';
import type { FormProps, FormSchema, FormActionType } from '../types/form';
import type { NamePath } from '../../../form/interface';

import { unref, toRaw } from 'vue';
import { cloneDeep, uniqBy } from 'lodash-es';
import { isArray, isFunction, isPlainObject, isString, deepMerge } from '@fe6/shared';

import warning from '../../../_util/warning';
import { dateItemType, handleInputNumberValue } from '../helper';
import { dateUtil } from '../date';

interface UseFormActionContext {
  emit: EmitType;
  getProps: ComputedRef<FormProps>;
  getSchema: ComputedRef<FormSchema[]>;
  formModel: Recordable;
  defaultValueRef: Ref<Recordable>;
  formElRef: Ref<FormActionType>;
  schemaRef: Ref<FormSchema[] | Partial<FormSchema>[]>;
  handleFormValues: Fn;
}
export function useFormEvents({
  emit,
  getProps,
  formModel,
  getSchema,
  defaultValueRef,
  formElRef,
  schemaRef,
  handleFormValues,
}: UseFormActionContext) {
  async function resetFields(): Promise<void> {
    const { resetFunc, submitOnReset } = unref(getProps);
    resetFunc && isFunction(resetFunc) && (await resetFunc());
    const formEl = unref(formElRef);
    if (!formEl) return;

    Object.keys(formModel).forEach((key) => {
      formModel[key] = defaultValueRef.value[key];
    });
    clearValidate();
    emit('reset', toRaw(formModel));
    submitOnReset && handleSubmit();
  }

  /**
   * @description: Set form value
   */
  async function setFieldsValue(values: Recordable): Promise<void> {
    const fields = unref(getSchema)
      .map((item) => item.field)
      .filter(Boolean);

    const validKeys: string[] = [];
    Object.keys(values).forEach((key) => {
      const schema = unref(getSchema).find((item) => item.field === key);
      let value = values[key];

      const hasKey = Reflect.has(values, key);

      value = handleInputNumberValue(schema?.component, value);
      // 0| '' is allow
      if (hasKey && fields.includes(key)) {
        // time type
        if (itemIsDateType(key)) {
          if (Array.isArray(value)) {
            const arr: moment.Moment[] = [];
            for (const ele of value) {
              arr.push(dateUtil(ele));
            }
            formModel[key] = arr;
          } else {
            formModel[key] = dateUtil(value);
          }
        } else {
          formModel[key] = value;
        }
        validKeys.push(key);
      }
    });
    validateFields(validKeys);
  }
  /**
   * @description: Delete based on field name
   */
  async function removeSchemaByFiled(fields: string | string[]): Promise<void> {
    const schemaList: FormSchema[] = cloneDeep(unref(getSchema));
    if (!fields) return;

    let fieldList: string[] = isString(fields)
      ? [fields as string]
      : (fields as string[]);
    if (isString(fields)) {
      fieldList = [fields as string];
    }
    for (const field of fieldList) {
      _removeSchemaByFiled(field, schemaList);
    }
    schemaRef.value = schemaList;
  }

  /**
   * @description: Delete based on field name
   */
  function _removeSchemaByFiled(field: string, schemaList: FormSchema[]): void {
    if (isString(field)) {
      const index = schemaList.findIndex((schema) => schema.field === field);
      if (index !== -1) {
        schemaList.splice(index, 1);
      }
    }
  }

  /**
   * @description: Insert after a certain field, if not insert the last
   */
  async function appendSchemaByField(
    schema: FormSchema,
    prefixField?: string,
    first = false,
  ) {
    const schemaList: FormSchema[] = cloneDeep(unref(getSchema));

    const index = schemaList.findIndex(
      (schema) => schema.field === prefixField,
    );
    const hasInList = schemaList.some(
      (item) => item.field === prefixField || schema.field,
    );

    if (!hasInList) return;

    if (!prefixField || index === -1 || first) {
      first ? schemaList.unshift(schema) : schemaList.push(schema);
      schemaRef.value = schemaList;
      return;
    }
    if (index !== -1) {
      schemaList.splice(index + 1, 0, schema);
    }
    schemaRef.value = schemaList;
  }

  async function updateSchema(
    data: Partial<FormSchema> | Partial<FormSchema>[],
    replace = false,
  ) {
    let updateData: Partial<FormSchema>[] = [];
    if (isPlainObject(data)) {
      updateData.push(data as FormSchema);
    }
    if (isArray(data)) {
      updateData = [...(data as Partial<FormSchema>[])];
    }

    const hasField = updateData.every(
      (item) => Reflect.has(item, 'field') && item.field,
    );

    if (!hasField) {
      warning(
        'All children of the form Schema array that need to be updated must contain the `field` field',
      );
      return;
    }
    let schema: FormSchema[] | Partial<FormSchema>[] = [];
    const oldSchema = unref(getSchema);
    updateData.forEach((item) => {
      if (oldSchema.length) {
        if (replace) {
          schema = updateData.slice();
        } else {
          oldSchema.forEach((val) => {
            if (val.field === item.field) {
              const newSchema = deepMerge(val, item);
              schema.push(newSchema as FormSchema);
            } else {
              schema.push(val);
            }
          });
        }
      } else {
        schema = updateData.slice();
      }
    });
    schemaRef.value = uniqBy(schema, 'field');
  }

  function getFieldsValue(): Recordable {
    const formEl = unref(formElRef);
    if (!formEl) return {};
    return handleFormValues(toRaw(unref(formModel)));
  }

  /**
   * @description: Is it time
   */
  function itemIsDateType(key: string) {
    return unref(getSchema).some((item) => {
      return item.field === key ? dateItemType.includes(item.component) : false;
    });
  }

  async function validateFields(nameList?: NamePath[] | undefined) {
    return unref(formElRef)?.validateFields(nameList);
  }

  async function validate(nameList?: NamePath[] | undefined) {
    await unref(formElRef)?.validate(nameList);
    return handleFormValues(toRaw(unref(formModel)));
  }

  async function clearValidate(name?: string | string[]) {
    await unref(formElRef)?.clearValidate(name);
  }

  async function scrollToField(
    name: NamePath,
    options?: ScrollOptions | undefined,
  ) {
    await unref(formElRef)?.scrollToField(name, options);
  }

  /**
   * @description: Form submission
   */
  async function handleSubmit(e?: Event): Promise<void> {
    e && e.preventDefault();
    const { submitFunc } = unref(getProps);
    if (submitFunc && isFunction(submitFunc)) {
      await submitFunc();
      return;
    }
    const formEl = unref(formElRef);
    if (!formEl) return;
    try {
      const values = await validate();
      emit('submit', values);
    } catch (error) {}
  }

  return {
    handleSubmit,
    clearValidate,
    validate,
    validateFields,
    getFieldsValue,
    updateSchema,
    appendSchemaByField,
    removeSchemaByFiled,
    resetFields,
    setFieldsValue,
    scrollToField,
  };
}

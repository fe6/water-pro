import type { FormActionType, FormProps, FormSchema } from './types/form';
import type { AdvanceState } from './types/hooks';
import type { CSSProperties, Ref } from 'vue';

import {
  defineComponent,
  reactive,
  ref,
  computed,
  unref,
  onMounted,
  watch,
  toRefs,
  nextTick,
} from 'vue';
import { deepMerge } from '@fe6/shared';

import Row from '../../grid/Row';
import Form from '../../form/Form';
import { useModalContext } from '../../modal-pro';
import useConfigInject from '../../_util/hooks/useConfigInject';

import FormItem from './components/form-item';
import FormAction from './components/FormAction.vue';

import { useFormValues } from './hooks/use-form-values';
import useAdvanced from './hooks/use-advanced';
import { useFormEvents } from './hooks/use-form-events';
import { createFormContext } from './hooks/use-form-context';
import { useAutoFocus } from './hooks/use-auto-focus';

import { basicProps } from './props';
import { dateUtil } from './date';
import { dateItemType } from './helper';

export default defineComponent({
  name: 'AFormPro',
  components: { FormItem, Form, Row, FormAction },
  props: basicProps,
  emits: ['advanced-change', 'reset', 'submit', 'register'],
  setup(props, { emit }) {
    const { prefixCls: prefixClsNew } = useConfigInject('form-pro', props);
    const formModel = reactive<Recordable>({});
    const modalFn = useModalContext();

    const advanceState = reactive<AdvanceState>({
      isAdvanced: true,
      hideAdvanceBtn: false,
      isLoad: false,
      actionSpan: 6,
    });

    const defaultValueRef = ref<Recordable>({});
    const isInitedDefaultRef = ref(false);
    const propsRef = ref<Partial<FormProps>>({});
    const schemaRef = ref<Nullable<FormSchema[]>>(null);
    const formElRef = ref<Nullable<FormActionType>>(null);

    // const { prefixCls } = useDesign('basic-form');

    // Get the basic configuration of the form
    const getProps = computed(
      (): FormProps => {
        return { ...props, ...unref(propsRef) } as FormProps;
      },
    );

    const getFormClass = computed(() => {
      return [
        prefixClsNew.value,
        {
          [`${prefixClsNew.value}--compact`]: unref(getProps).compact,
        },
      ];
    });

    // Get uniform row style
    const getRowWrapStyle = computed(
      (): CSSProperties => {
        const { baseRowStyle = {} } = unref(getProps);
        return baseRowStyle;
      },
    );

    const getSchema = computed((): FormSchema[] => {
      const schemas: FormSchema[] =
        unref(schemaRef) || (unref(getProps).schemas as any);
      for (const schema of schemas) {
        const { defaultValue, component } = schema;
        // handle date type
        if (defaultValue && dateItemType.includes(component)) {
          if (!Array.isArray(defaultValue)) {
            schema.defaultValue = dateUtil(defaultValue);
          } else {
            const def: moment.Moment[] = [];
            defaultValue.forEach((item) => {
              def.push(dateUtil(item));
            });
            schema.defaultValue = def;
          }
        }
      }
      return schemas as FormSchema[];
    });

    const { handleToggleAdvanced } = useAdvanced({
      advanceState,
      emit: emit as any,
      getProps,
      getSchema,
      formModel,
      defaultValueRef,
    });

    const { autoFocusFirstItem } = toRefs(
      props,
    );

    const { handleFormValues, initDefault } = useFormValues({
      defaultValueRef,
      getSchema,
      formModel,
      getProps,
    });

    useAutoFocus({
      getSchema,
      autoFocusFirstItem,
      isInitedDefault: isInitedDefaultRef,
      formElRef: formElRef as Ref<FormActionType>,
    });

    const {
      handleSubmit,
      setFieldsValue,
      clearValidate,
      validate,
      validateFields,
      getFieldsValue,
      updateSchema,
      appendSchemaByField,
      removeSchemaByFiled,
      resetFields,
      scrollToField,
    } = useFormEvents({
      emit: emit as any,
      getProps,
      formModel,
      getSchema,
      defaultValueRef,
      formElRef: formElRef as Ref<FormActionType>,
      schemaRef: schemaRef as any, // Ref<FormSchema[]>
      handleFormValues,
    });

    createFormContext({
      resetAction: resetFields,
      submitAction: handleSubmit,
    });

    watch(
      () => unref(getProps).model,
      () => {
        const { model } = unref(getProps);
        if (!model) return;
        setFieldsValue(model);
      },
      {
        immediate: true,
      },
    );

    watch(
      () => getSchema.value,
      (schema) => {
        nextTick(() => {
          //  Solve the problem of modal adaptive height calculation when the form is placed in the modal
          modalFn?.redoModalHeight?.();
        });
        if (unref(isInitedDefaultRef)) {
          return;
        }
        if (schema?.length) {
          initDefault();
          isInitedDefaultRef.value = true;
        }
      },
    );

    watch(
      () => getProps.value,
      async () => {
        await nextTick();
        if (!unref(getProps.value)) {
          return;
        }
        initDefault();
      },
    );

    async function setProps(formProps: Partial<FormProps>): Promise<void> {
      propsRef.value = deepMerge(unref(propsRef) || {}, formProps);
    }

    function setFormModel(key: string, value: any) {
      formModel[key] = value;
    }
    // 因为同一个表单 调用 updateSchema 的时候提交的数据还是之前的数据格式
    const resetAllModel = async () => {
      const resetSchemas = unref(getSchema);
      resetSchemas.forEach((sItem) => {
        if (sItem.defaultValue) {
          formModel[sItem.field] = sItem.defaultValue;
        }
      });
    };

    const formActionType: Partial<FormActionType> = {
      getFieldsValue,
      setFieldsValue,
      resetFields,
      resetAllModel,
      updateSchema,
      setProps,
      removeSchemaByFiled,
      appendSchemaByField,
      clearValidate,
      validateFields,
      validate,
      submit: handleSubmit,
      scrollToField,
    };

    onMounted(() => {
      initDefault();
      emit('register', formActionType);
    });

    return {
      handleToggleAdvanced,
      formModel,
      defaultValueRef,
      advanceState,
      getRowWrapStyle,
      getProps,
      formElRef,
      getSchema,
      formActionType,
      setFormModel,
      // prefixClsNew,
      getFormClass,
      ...formActionType,
    };
  },
});

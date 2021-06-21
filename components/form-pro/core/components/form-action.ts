import type { ButtonProps } from '../../../button/buttonTypes';
import type { ColEx } from '../types/index';
import type { FormProps, FormSchema } from '../types/form';

import { defineComponent, computed, PropType, toRefs } from 'vue';
import Button from '../../../button';
import Form from '../../../form';
import { Col, Row } from '../../../grid';
import BasicArrow from '../../../basic-arrow';
import PropTypes from '../../../_util/vue-types';
import useConfigInject from '../../../_util/hooks/useConfigInject';
import { useActionLabelWidth } from '../hooks/use-label-width';
import { useFormContext } from '../hooks/use-form-context';

type ButtonOptions = Partial<ButtonProps> & { text: string };

export default defineComponent({
  name: 'AFormProAction',
  components: {
    AButton: Button,
    FormItem: Form.Item,
    BasicArrow,
    [Col.name]: Col,
    [Row.name]: Row,
  },
  props: {
    schemas: {
      type: Array as PropType<FormSchema[]>,
      default: () => ([]),
    },
    formProps: {
      type: Object as PropType<FormProps>,
      default: {} as FormProps,
    },
    showActionButtonGroup: PropTypes.bool.def(true),
    showResetButton: PropTypes.bool.def(true),
    showSubmitButton: PropTypes.bool.def(true),
    showAdvancedButton: PropTypes.bool.def(true),
    resetButtonOptions: {
      type: Object as PropType<ButtonOptions>,
      default: () => ({}),
    },
    submitButtonOptions: {
      type: Object as PropType<ButtonOptions>,
      default: () => ({}),
    },
    actionColOptions: {
      type: Object as PropType<Partial<ColEx>>,
      default: () => ({}),
    },
    actionSpan: PropTypes.number.def(6),
    isAdvanced: PropTypes.bool,
    hideAdvanceBtn: PropTypes.bool,
    actionAlgin: PropTypes.oneOf(['left', 'right', 'center']).def('left'),
    resetText: PropTypes.string.def('重置'),
    okText: PropTypes.string.def('查询'),
    prefixCls: PropTypes.string,
  },
  emits: ['toggle-advanced'],
  setup(props, { emit }) {
    const { prefixCls: prefixClsNew } = useConfigInject('form-pro', props);

    const { formProps, schemas } = toRefs(props) as any;
    const itemLabelWidthProp = useActionLabelWidth(schemas, formProps);

    const actionColOpt = computed(() => {
      const {
        showAdvancedButton,
        actionSpan: span,
        actionColOptions,
      } = props;
      const actionSpan = 24 - span;
      const advancedSpanObj = showAdvancedButton
        ? { 
          span: actionSpan < 6 ? 24 : actionSpan,
        }
        : {};
      const actionColOpt: Partial<ColEx> = {
        span: showAdvancedButton ? 6 : 4,
        ...advancedSpanObj,
        ...actionColOptions,
      };
      return actionColOpt;
    });

    const getResetBtnOptions = computed(
      (): ButtonOptions => {
        return Object.assign(
          {
            text: props.resetText,
          },
          props.resetButtonOptions,
        );
      },
    );

    const getSubmitBtnOptions = computed(() => {
      return Object.assign(
        {
          text: props.okText,
        },
        props.submitButtonOptions,
      );
    });

    function toggleAdvanced() {
      emit('toggle-advanced');
    }

    const {
      resetAction,
      submitAction,
    } = useFormContext()

    return {
      actionColOpt,
      getResetBtnOptions,
      getSubmitBtnOptions,
      toggleAdvanced,
      prefixClsNew,
      resetAction,
      submitAction,
      itemLabelWidthProp,
    };
  },
});

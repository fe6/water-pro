/** @format */

import type { PropType } from 'vue';

import { defineComponent } from 'vue';

import BasicHelp from '../../basic-help/core/basic-help';
import Typography from '../../typography/Typography';

import useConfigInject from '../../_util/hooks/useConfigInject';

import PropTypes from '../../_util/vue-types';

export default defineComponent({
  name: 'ABasicTitle',
  components: { BasicHelp, Title: Typography.Title },
  props: {
    helpMessage: {
      type: [String, Array] as PropType<string | string[]>,
      default: '',
    },
    span: PropTypes.bool,
    title: PropTypes.string,
    prefixCls: PropTypes.string,
    resetable: PropTypes.bool.def(true),
  },
  setup(props) {
    const { prefixCls: prefixClsNew } = useConfigInject('basic-title', props);
    return { prefixClsNew };
  },
});

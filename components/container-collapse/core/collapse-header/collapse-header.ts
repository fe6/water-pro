/** @format */

import { defineComponent } from 'vue';
import { LoadingOutlined } from '@ant-design/icons-vue';
import { BasicTitle } from '../../../basic-title';
import { BasicArrow } from '../../../basic-arrow';
import useConfigInject from '../../../_util/hooks/useConfigInject';
import PropTypes from '../../../_util/vue-types';

export default defineComponent({
  components: { LoadingOutlined, BasicArrow, BasicTitle },
  inheritAttrs: false,
  props: {
    title: PropTypes.string,
    show: PropTypes.bool,
    expanable: PropTypes.bool,
    loading: PropTypes.bool,
    prefixCls: PropTypes.string,
  },
  emits: ['expand'],
  setup(props) {
    const { prefixCls: prefixClsNew } = useConfigInject('container-collapse', props);
    return {
      prefixClsNew,
    };
  },
});

import { computed, CSSProperties, PropType } from 'vue';

import { defineComponent } from 'vue';

import { default as Spin } from '../../spin';
import useConfigInject from '../../_util/hooks/useConfigInject';
import PropTypes from '../../_util/vue-types';

import { SizeEnum } from './size';

export default defineComponent({
  name: 'Loading',
  components: { Spin },
  props: {
    tip: {
      type: String as PropType<string>,
      default: '',
    },
    size: {
      type: String as PropType<SizeEnum>,
      default: SizeEnum.LARGE,
      validator: (v: SizeEnum): boolean => {
        return [SizeEnum.DEFAULT, SizeEnum.SMALL, SizeEnum.LARGE].includes(v);
      },
    },
    absolute: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    loading: {
      type: Boolean as PropType<boolean>,
      default: false,
    },
    background: {
      type: String as PropType<string>,
    },
    prefixCls: PropTypes.string,
  },
  setup(props) {
    const { prefixCls: prefixClsNew } = useConfigInject('loading', props);
    const getStyle = computed(
      (): CSSProperties => {
        const { background } = props;
        const bgColor = background ? background : 'rgba(0, 0, 0, 0.2)';
        return { background: bgColor };
      },
    );

    return { getStyle, prefixClsNew };
  },
});

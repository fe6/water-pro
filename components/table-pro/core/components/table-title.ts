import { computed, defineComponent, PropType } from 'vue';
import { isFunction } from '@fe6/shared';

import { BasicTitle } from '../../../basic-title';
import useConfigInject from '../../../_util/hooks/useConfigInject';

export default defineComponent({
  name: 'TableProTitle',
  components: { BasicTitle },
  props: {
    title: {
      type: [Function, String] as PropType<string | ((data: Recordable) => string)>,
    },
    getSelectRows: {
      type: Function as PropType<() => Recordable[]>,
    },
    helpMessage: {
      type: [String, Array] as PropType<string | string[]>,
    },
    prefixCls: String,
  },
  setup(props) {
    const { prefixCls: prefixClsNew } = useConfigInject('table-pro-title', props);

    const getTitle = computed(() => {
      const { title, getSelectRows = () => {} } = props;
      let tit = title;

      if (isFunction(title)) {
        tit = (title as Function)({
          selectRows: getSelectRows(),
        });
      }
      return tit;
    });

    return { getTitle, prefixClsNew };
  },
});

import type { TableSetting } from '../../types/table';

import { defineComponent, PropType, computed } from 'vue';

import useConfigInject from '../../../../_util/hooks/useConfigInject';

import ColumnSetting from './ColumnSetting.vue';
import ReloadSetting from './ReloadSetting.vue';

export default defineComponent({
  name: 'TableSetting',
  components: {
    ColumnSetting,
    ReloadSetting,
  },
  props: {
    setting: {
      type: Object as PropType<TableSetting>,
      default: {} as TableSetting,
    },
  },
  setup(props) {
    const { prefixCls: prefixClsNew } = useConfigInject('table-pro-settings', props);
    const getSetting = computed(
      (): TableSetting => {
        return {
          reload: true,
          setting: true,
          ...props.setting,
        };
      },
    );

    return { getSetting, prefixClsNew };
  },
});

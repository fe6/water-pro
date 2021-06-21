import type { TableSetting } from '../types/table';
import type { PropType } from 'vue';
import { defineComponent } from 'vue';

import { default as Divider } from '../../../divider';
import useConfigInject from '../../../_util/hooks/useConfigInject';

import TableSettingComp from './settings/Index.vue';
import TableTitle from './TableTitle.vue';

export default defineComponent({
  name: 'TableProHeader',
  components: {
    Divider,
    TableTitle,
    TableSetting: TableSettingComp,
  },
  props: {
    title: {
      type: [Function, String] as PropType<
        string | ((data: Recordable) => string)
      >,
    },
    tableSetting: {
      type: Object as PropType<TableSetting>,
    },
    showTableSetting: {
      type: Boolean,
    },
    titleHelpMessage: {
      type: [String, Array] as PropType<string | string[]>,
      default: '',
    },
    prefixCls: String,
  },
  setup(props) {
    const { prefixCls: prefixClsNew } = useConfigInject('table-pro-header', props);
    return { prefixClsNew };
  },
});

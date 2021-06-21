import type { PropType } from 'vue';
import type { BasicColumn } from '../types/table';

import { defineComponent, computed } from 'vue';
import BasicHelp from '../../../basic-help/core/basic-help';
import EditTableHeaderCell from './EditTableHeaderIcon.vue';
import useConfigInject from '../../../_util/hooks/useConfigInject';

export default defineComponent({
  name: 'TableHeaderCell',
  components: {
    EditTableHeaderCell,
    BasicHelp,
  },
  props: {
    column: {
      type: Object as PropType<BasicColumn>,
      default: {} as BasicColumn,
    },
    prefixCls: String,
  },
  setup(props) {
    const { prefixCls: prefixClsNew } = useConfigInject('table-pro-header-cell', props);
    const getIsEdit = computed(() => {
      return !!props.column?.edit;
    });

    const getTitle = computed(() => {
      return props.column?.customTitle;
    });

    const getHelpMessage = computed(() => {
      return props.column?.helpMessage;
    });

    return { prefixClsNew, getIsEdit, getTitle, getHelpMessage };
  },
});

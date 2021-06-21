import { defineComponent, PropType, computed } from 'vue';
import { MoreOutlined } from '@ant-design/icons-vue';

import { default as Divider } from '../../../divider';
import { default as Button } from '../../../button';
import { default as Dropdown } from '../../../dropdown';
import { default as Menu } from '../../../menu';
import useConfigInject from '../../../_util/hooks/useConfigInject';
import PropTypes from '../../../_util/vue-types';

import { TableActionType } from '../types/table';
import { ActionItem } from '../types/table-action';
import { useTableContext } from '../hooks/use-table-context';
import { ACTION_COLUMN_FLAG } from '../const';

export default defineComponent({
  name: 'ATableAction',
  components: {
    [Divider.name]: Divider,
    [Button.name]: Button,
    [Dropdown.name]: Dropdown,
    [Menu.name]: Menu,
    [Menu.Item.name]: Menu.Item,
    MoreOutlined,
  },
  props: {
    actions: {
      type: Array as PropType<ActionItem[]>,
      default: null,
    },
    dropDownActions: {
      type: Array as PropType<ActionItem[]>,
      default: null,
    },
    divider: PropTypes.bool.def(true),
    outside: PropTypes.bool,
    trigger: {
      type: Array as PropType<('click' | 'hover' | 'contextmenu')[]>,
      default: () => ['click'],
    },
    prefixCls: String,
  },
  setup(props) {
    const { prefixCls: prefixClsNew } = useConfigInject('table-pro-action', props);
    let table: Partial<TableActionType> = {};
    if (!props.outside) {
      table = useTableContext();
    }

    // const getSize = computed(() => {
    //   const size = table?.getSize?.();
    //   if (size === 'middle' || !size) {
    //     return;
    //   }

    //   if (size === 'default') {
    //     return 'large';
    //   }
    //   return size;
    // });

    const getActions = computed(() => {
      return (props.actions || []).map(action => {
        const { popConfirm } = action;
        // const size = unref(getSize);
        return {
          type: 'link',
          size: 'small',
          // ...(size ? { size } : {}),
          ...action,
          ...(popConfirm || {}),
          onConfirm: popConfirm?.confirm,
          onCancel: popConfirm?.cancel,
          enable: !!popConfirm,
        };
      });
    });

    const getDropList = computed(() => {
      return (props.dropDownActions || []).map((action, index) => {
        const { label } = action;
        return {
          ...action,
          text: label,
          divider: index < props.dropDownActions.length - 1 ? props.divider : false,
        };
      });
    });

    const getAlign = computed(() => {
      const columns = (table as TableActionType)?.getColumns?.() || [];
      const actionColumn = columns.find(item => item.flag === ACTION_COLUMN_FLAG);
      return actionColumn?.align ?? 'left';
    });

    return { prefixClsNew, getActions, getDropList, getAlign };
  },
});

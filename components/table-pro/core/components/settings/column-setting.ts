import {
  defineComponent,
  ref,
  reactive,
  toRefs,
  watchEffect,
  nextTick,
  unref,
  computed,
} from 'vue';
import {
  SettingOutlined,
  DragOutlined,
  LeftOutlined,
  RightOutlined,
} from '@ant-design/icons-vue';
import { isUndefined, isNull } from '@fe6/shared';

import { default as Popover } from '../../../../popover';
import { default as Checkbox } from '../../../../checkbox';
import { default as Divider } from '../../../../divider';
import { default as Button } from '../../../../button';
import ContainerScroll from '../../../../container-scroll/src/ContainerScroll.vue';
import Tooltip from '../../../../tooltip';

import useConfigInject from '../../../../_util/hooks/useConfigInject';
import { getPopupContainer } from '../../../../_util/dom';

import { useTableContext } from '../../hooks/use-table-context';
import { useSortable } from '../../hooks/use-sortable';
import type { BasicColumn } from '../../types/table';

interface State {
  indeterminate: boolean;
  checkAll: boolean;
  checkedList: string[];
  defaultCheckList: string[];
}

interface Options {
  label: string;
  value: string;
  fixed?: boolean | 'left' | 'right';
}

export default defineComponent({
  name: 'ColumnSetting',
  components: {
    SettingOutlined,
    Popover,
    Tooltip,
    Checkbox,
    CheckboxGroup: Checkbox.Group,
    DragOutlined,
    ContainerScroll,
    Divider,
    LeftOutlined,
    RightOutlined,
    [Button.name]: Button,
  },
  props: {
    prefixCls: String,
  },
  setup(props) {
    const { prefixCls: prefixClsNew } = useConfigInject('table-pro-basic-column-setting', props);

    const table = useTableContext();

    const defaultRowSelection = table.getRowSelection();
    let inited = false;

    const cachePlainOptions = ref<Options[]>([]);
    const plainOptions = ref<Options[]>([]);

    const plainSortOptions = ref<Options[]>([]);

    const columnListRef = ref<ComponentRef>(null);

    const state = reactive<State>({
      indeterminate: false,
      checkAll: true,
      checkedList: [],
      defaultCheckList: [],
    });

    const checkIndex = ref(false);
    const checkSelect = ref(false);

    const getValues = computed(() => {
      return unref(table?.getBindValues) || {};
    });

    watchEffect(() => {
      const columns = table.getColumns();
      if (columns.length) {
        init();
      }
    });

    watchEffect(() => {
      const values = unref(getValues) as any;
      checkIndex.value = !!values.showIndexColumn;
      checkSelect.value = !!values.rowSelection;
    });

    function getColumns() {
      const ret: Options[] = [];
      table
        .getColumns({ ignoreIndex: true, ignoreAction: true })
        .forEach((item) => {
          ret.push({
            label: (item.title as string) || (item.customTitle as string),
            value: (item.dataIndex || item.title) as string,
            ...item,
          });
        });
      return ret;
    }

    function init() {
      const columns = getColumns();

      const checkList = table
        .getColumns()
        .map((item) => {
          if (item.defaultHidden) {
            return '';
          }
          return item.dataIndex || item.title;
        })
        .filter(Boolean) as string[];

      if (!plainOptions.value.length) {
        plainOptions.value = columns;
        plainSortOptions.value = columns;
        cachePlainOptions.value = columns;
        state.defaultCheckList = checkList;
      } else {
        // const fixedColumns = columns.filter((item) =>
        //   Reflect.has(item, 'fixed')
        // ) as BasicColumn[];

        unref(plainOptions).forEach((item: BasicColumn) => {
          const findItem = columns.find(
            (col: BasicColumn) => col.dataIndex === item.dataIndex,
          );
          if (findItem) {
            item.fixed = findItem.fixed;
          }
        });
      }
      state.checkedList = checkList;
    }

    // checkAll change
    function onCheckAllChange(e: ChangeEvent) {
      state.indeterminate = false;
      const checkList = plainOptions.value.map((item) => item.value);
      if (e.target.checked) {
        state.checkedList = checkList;
        table.setColumns(checkList);
      } else {
        state.checkedList = [];
        table.setColumns([]);
      }
    }

    // Trigger when check/uncheck a column
    function onChange(checkedList: string[]) {
      const len = plainOptions.value.length;
      state.indeterminate = !!checkedList.length && checkedList.length < len;
      state.checkAll = checkedList.length === len;

      const sortList = unref(plainSortOptions).map((item) => item.value);
      checkedList.sort((prev, next) => {
        return sortList.indexOf(prev) - sortList.indexOf(next);
      });
      table.setColumns(checkedList);
    }

    // reset columns
    function reset() {
      state.checkedList = [...state.defaultCheckList];
      state.checkAll = true;
      state.indeterminate = false;
      plainOptions.value = unref(cachePlainOptions);
      plainSortOptions.value = unref(cachePlainOptions);
      table.setColumns(table.getCacheColumns());
    }

    // Open the pop-up window for drag and drop initialization
    function handleVisibleChange() {
      if (inited) return;
      nextTick(() => {
        const columnListEl = unref(columnListRef);
        if (!columnListEl) return;
        const el = columnListEl.$el;
        if (!el) return;
        // Drag and drop sort
        const { initSortable } = useSortable(el, {
          handle: `.${prefixClsNew.value}-coulmn-drag-icon`,
          onEnd: (evt) => {
            const { oldIndex, newIndex } = evt;
            if (
              (isUndefined(oldIndex) && isNull(oldIndex)) ||
              (isUndefined(newIndex) && isNull(newIndex)) ||
              oldIndex === newIndex
            ) {
              return;
            }
            // Sort column
            const columns = getColumns();
            const oldIndexNumber = oldIndex as number;
            const newIndexNumber = newIndex as number;

            if (oldIndexNumber > newIndexNumber) {
              columns.splice(newIndexNumber, 0, columns[oldIndexNumber]);
              columns.splice(oldIndexNumber + 1, 1);
            } else {
              columns.splice(newIndexNumber + 1, 0, columns[oldIndexNumber]);
              columns.splice(oldIndexNumber, 1);
            }

            plainSortOptions.value = columns;
            plainOptions.value = columns;
            table.setColumns(columns);
          },
        });
        initSortable();
        inited = true;
      });
    }

    // Control whether the serial number column is displayed
    function handleIndexCheckChange(e: ChangeEvent) {
      table.setProps({
        showIndexColumn: e.target.checked,
      });
    }

    // Control whether the check box is displayed
    function handleSelectCheckChange(e: ChangeEvent) {
      table.setProps({
        rowSelection: e.target.checked ? defaultRowSelection : undefined,
      });
    }

    function handleColumnFixed(item: BasicColumn, fixed?: 'left' | 'right') {
      if (!state.checkedList.includes(item.dataIndex as string)) return;

      const columns = getColumns() as BasicColumn[];
      const isFixed = item.fixed === fixed ? false : fixed;
      const index = columns.findIndex(
        (col) => col.dataIndex === item.dataIndex,
      );
      if (index !== -1) {
        columns[index].fixed = isFixed;
      }
      item.fixed = isFixed;

      if (isFixed && !item.width) {
        item.width = 100;
      }
      table.setCacheColumnsByField?.(item.dataIndex, { fixed: isFixed });
      table.setColumns(columns);
    }

    return {
      ...toRefs(state),
      onCheckAllChange,
      onChange,
      plainOptions,
      reset,
      prefixClsNew,
      columnListRef,
      handleVisibleChange,
      checkIndex,
      checkSelect,
      handleIndexCheckChange,
      handleSelectCheckChange,
      defaultRowSelection,
      handleColumnFixed,
      getPopupContainer,
    };
  },
});

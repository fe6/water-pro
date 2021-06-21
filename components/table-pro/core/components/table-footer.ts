import type { PropType } from 'vue';

import { defineComponent, unref, computed, toRaw } from 'vue';
import { default as Table } from '../../../table';
import { cloneDeep } from 'lodash-es';
import { isFunction } from '@fe6/shared';
import type { BasicColumn } from '../types/table';
import { INDEX_COLUMN_FLAG } from '../const';
import PropTypes from '../../../_util/vue-types';
import { useTableContext } from '../hooks/use-table-context';

const SUMMARY_ROW_KEY = '_row';
const SUMMARY_INDEX_KEY = '_index';
export default defineComponent({
  name: 'TableProFooter',
  components: { Table },
  props: {
    summaryFunc: {
      type: Function as PropType<Fn>,
    },
    summaryData: {
      type: Array as PropType<Recordable[]>,
    },
    scroll: {
      type: Object as PropType<Recordable>,
    },
    rowKey: PropTypes.string.def('key'),
  },
  setup(props) {
    const table = useTableContext();

    const getDataSource = computed((): Recordable[] => {
      const { summaryFunc, summaryData } = props;
      if (summaryData?.length) {
        summaryData.forEach((item, i) => (item[props.rowKey] = `${i}`));
        return summaryData;
      }
      if (!isFunction(summaryFunc)) {
        return [];
      }
      let dataSource = toRaw(unref(table.getDataSource()));
      dataSource = (summaryFunc as Function)(dataSource);
      dataSource.forEach((item, i) => {
        item[props.rowKey] = `${i}`;
      });
      return dataSource;
    });

    const getColumns = computed(() => {
      const dataSource = unref(getDataSource);
      const columns: BasicColumn[] = cloneDeep(table.getColumns());
      const index = columns.findIndex(
        (item) => item.flag === INDEX_COLUMN_FLAG,
      );
      const hasRowSummary = dataSource.some((item) =>
        Reflect.has(item, SUMMARY_ROW_KEY),
      );
      const hasIndexSummary = dataSource.some((item) =>
        Reflect.has(item, SUMMARY_INDEX_KEY),
      );

      if (index !== -1) {
        if (hasIndexSummary) {
          columns[index].customRender = ({ record }) =>
            record[SUMMARY_INDEX_KEY];
          columns[index].ellipsis = false;
        } else {
          Reflect.deleteProperty(columns[index], 'customRender');
        }
      }

      if (table.getRowSelection() && hasRowSummary) {
        const isFixed = columns.some((col) => col.fixed === 'left');
        columns.unshift({
          width: 60,
          title: 'selection',
          key: 'selectionKey',
          align: 'center',
          ...(isFixed ? { fixed: 'left' } : {}),
          customRender: ({ record }) => record[SUMMARY_ROW_KEY],
        });
      }
      return columns;
    });
    return { getColumns, getDataSource };
  },
});

import type {
  TableProProps,
  TableActionType,
  SizeType,
} from './types/table';

import { defineComponent, ref, computed, unref } from 'vue';
import { omit } from 'lodash-es';

import Table from '../../table';
import { FormPro, useForm } from '../../form-pro';
import useConfigInject from '../../_util/hooks/useConfigInject';

import { usePagination } from './hooks/use-pagination';
import { useColumns } from './hooks/use-columns';
import { useDataSource } from './hooks/use-data-source';
import { useLoading } from './hooks/use-loading';
import { useRowSelection } from './hooks/use-row-selection';
import { useTableScroll } from './hooks/use-table-scroll';
import { useCustomRow } from './hooks/use-custom-row';
import { useTableStyle } from './hooks/use-table-style';
import { useTableHeader } from './hooks/use-table-header';
import { createTableContext } from './hooks/use-table-context';
import { useTableFooter } from './hooks/use-table-footer';
import { useTableForm } from './hooks/use-table-form';
import { useExpose } from './hooks/use-expose';

import { basicProps } from './props';
import expandIcon from './components/expand-icon';
import HeaderCell from './components/HeaderCell.vue';

export default defineComponent({
  name: 'ATablePro',
  components: {
    Table,
    [FormPro.name]: FormPro,
    HeaderCell,
  },
  props: basicProps,
  emits: [
    'fetch-success',
    'fetch-error',
    'fetch-finally',
    'selection-change',
    'register',
    'row-click',
    'row-dbClick',
    'row-contextmenu',
    'row-mouseenter',
    'row-mouseleave',
    'edit-end',
    'edit-cancel',
    'edit-row-end',
    'edit-change',
  ],
  setup(props, { attrs, emit, slots }) {
    const { prefixCls: prefixClsNew } = useConfigInject('table-pro', props);

    const tableElRef = ref<ComponentRef>(null);
    const tableData = ref<Recordable[]>([]);

    const wrapRef = ref<Nullable<HTMLDivElement>>(null);
    const innerPropsRef = ref<Partial<TableProProps>>();

    const [registerForm, formActions] = useForm();

    const getProps = computed(() => {
      return { ...props, ...unref(innerPropsRef) } as TableProProps;
    });

    const { getLoading, setLoading } = useLoading(getProps);
    const {
      getPaginationInfo,
      getPagination,
      setPagination,
      setShowPagination,
      getShowPagination,
    } = usePagination(getProps);

    const {
      getRowSelection,
      getRowSelectionRef,
      getSelectRows,
      clearSelectedRowKeys,
      getSelectRowKeys,
      deleteSelectRowByKey,
      setSelectedRowKeys,
    } = useRowSelection(getProps, tableData, emit as any);

    const {
      handleTableChange,
      getDataSourceRef,
      getDataSource,
      setTableData,
      fetch,
      getRowKey,
      reload,
      getAutoCreateKey,
      updateTableData,
    } = useDataSource(
      getProps,
      {
        tableData,
        getPaginationInfo,
        setLoading,
        setPagination,
        getFieldsValue: formActions.getFieldsValue,
        clearSelectedRowKeys,
      },
      emit as any,
    );

    const {
      getViewColumns,
      getColumns,
      setCacheColumnsByField,
      setColumns,
      getColumnsRef,
      getCacheColumns,
    } = useColumns(getProps, getPaginationInfo);

    const { getScrollRef, redoHeight } = useTableScroll(
      getProps,
      tableElRef,
      getColumnsRef,
      getRowSelectionRef,
      getDataSourceRef,
    );

    const { customRow } = useCustomRow(getProps, {
      setSelectedRowKeys,
      getSelectRowKeys,
      clearSelectedRowKeys,
      getAutoCreateKey,
      emit: emit as any,
    });

    const { getRowClassName } = useTableStyle(getProps, prefixClsNew.value);

    const { getHeaderProps } = useTableHeader(getProps, slots);

    const { getFooterProps } = useTableFooter(
      getProps,
      getScrollRef,
      tableElRef,
      getDataSourceRef,
    );

    const {
      getFormProps,
      replaceFormSlotKey,
      getFormSlotKeys,
      handleSearchInfoChange,
    } = useTableForm(getProps, slots, fetch);

    const getBindValues = computed(() => {
      let propsData: Recordable = {
        size: 'middle',
        ...attrs,
        customRow,
        expandIcon: expandIcon(),
        ...unref(getProps),
        ...unref(getHeaderProps),
        scroll: unref(getScrollRef),
        loading: unref(getLoading),
        tableLayout: 'fixed',
        rowSelection: unref(getRowSelectionRef),
        rowKey: unref(getRowKey),
        columns: unref(getViewColumns),
        pagination: unref(getPaginationInfo),
        dataSource: unref(getDataSourceRef),
        footer: unref(getFooterProps),
      };
      if (slots.expandedRowRender) {
        propsData = omit(propsData, 'scroll');
      }

      propsData = omit(propsData, 'class');

      return propsData;
    });

    const getEmptyDataIsShowTable = computed(() => {
      const { emptyDataIsShowTable, useSearchForm } = unref(getProps);
      if (emptyDataIsShowTable || !useSearchForm) {
        return true;
      }
      return !!unref(getDataSourceRef).length;
    });

    function setProps(props: Partial<TableProProps>) {
      innerPropsRef.value = { ...unref(innerPropsRef), ...props };
    }

    const tableAction: TableActionType = {
      reload,
      getSelectRows,
      clearSelectedRowKeys,
      getSelectRowKeys,
      deleteSelectRowByKey,
      setPagination,
      setTableData,
      redoHeight,
      setSelectedRowKeys: setSelectedRowKeys as any,
      setColumns,
      setLoading,
      getLoading: unref(getLoading),
      getDataSource,
      setProps,
      getRowSelection,
      getPaginationRef: getPagination,
      getColumns,
      getCacheColumns,
      emit: emit as any,
      updateTableData,
      setShowPagination,
      getShowPagination,
      setCacheColumnsByField,
      getSize: () => {
        return unref(getBindValues).size as SizeType;
      },
    };

    createTableContext({ ...tableAction, wrapRef, getBindValues });

    useExpose<TableActionType>(tableAction);

    emit('register', tableAction, formActions);

    return {
      tableElRef,
      getBindValues,
      getLoading,
      registerForm,
      handleSearchInfoChange,
      getEmptyDataIsShowTable,
      handleTableChange,
      getRowClassName,
      wrapRef,
      tableAction,
      redoHeight,
      getFormProps,
      replaceFormSlotKey,
      getFormSlotKeys,
      prefixClsNew,
      columns: getViewColumns,
    };
  },
});

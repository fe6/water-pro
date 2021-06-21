/** @format */

import TablePro from './core/TablePro.vue';
export { default as TableAction } from './core/components/TableAction.vue';
export { default as EditTableHeaderIcon } from './core/components/EditTableHeaderIcon.vue';
export { default as TableImg } from './core/components/TableImg.vue';

import { withInstall } from '../_util/type';

export * from './core/types/table';
export * from './core/types/pagination';
export * from './core/types/table-action';

export { useTable } from './core/hooks/use-table';

export type { FormSchema, FormProps } from '../form-pro/core/types/form';

export type { EditRecordRow } from './core/components/editable';

export {
  TablePro,
}

export default withInstall(TablePro);

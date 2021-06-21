/** @format */

import ModalPro from './core/ModalPro.vue';

export { ModalPro };
export { useModalContext } from './core/hooks/use-modal-context';
export { useModal } from './core/hooks/use-modal';
export * from './core/types';

import { withInstall } from '../_util/type';

export default withInstall(ModalPro);

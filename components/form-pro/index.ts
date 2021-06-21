/** @format */

import FormPro from './core/FormPro.vue';

import { withInstall } from '../_util/type';

export * from './core/types/form';
export * from './core/types/form-item';

export { useComponentRegister } from './core/hooks/use-component-register';
export { useForm } from './core/hooks/use-form';

export { FormPro };

export default withInstall(FormPro);

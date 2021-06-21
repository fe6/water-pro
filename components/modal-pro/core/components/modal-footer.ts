import { defineComponent } from 'vue';

import Button from '../../../button/button';
import useConfigInject from '../../../_util/hooks/useConfigInject';

import { basicProps } from '../props';

export default defineComponent({
  name: 'BasicModalFooter',
  components: { AButton: Button },
  props: basicProps,
  emits: ['ok', 'cancel'],
  setup(props, { emit }) {
    const { prefixCls: prefixClsNew } = useConfigInject('modal-pro-footer', props);
    function handleOk() {
      emit('ok');
    }

    function handleCancel() {
      emit('cancel');
    }
    return { handleOk, handleCancel, prefixClsNew };
  },
});

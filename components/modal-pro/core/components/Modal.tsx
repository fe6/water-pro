/** @format */

import { defineComponent, toRefs, unref } from 'vue';
import Modal from '../../../modal';
import { extendSlots } from '../../../_util/tsx';
import { useAttrs } from '../../../_util/hooks/use-attrs';
import { basicProps } from '../props';
import { useModalDragMove } from '../hooks/use-modal-drag';

export default defineComponent({
  name: 'AModalProBase',
  inheritAttrs: false,
  props: basicProps,
  setup(props, { slots }) {
    const { visible, draggable, destroyOnClose } = toRefs(props);
    const attrs = useAttrs();
    useModalDragMove({
      visible,
      destroyOnClose,
      draggable,
    });

    return () => {
      const propsData = { ...unref(attrs), ...props } as Recordable;

      return <Modal {...propsData}>{extendSlots(slots)}</Modal>;
    };
  },
});

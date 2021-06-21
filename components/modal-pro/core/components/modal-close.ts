import { defineComponent, computed } from 'vue';
import { FullscreenExitOutlined, FullscreenOutlined, CloseOutlined } from '@ant-design/icons-vue';
import useConfigInject from '../../../_util/hooks/useConfigInject';

import PropTypes from '../../../_util/vue-types';

export default defineComponent({
  name: 'ModalClose',
  components: { FullscreenExitOutlined, FullscreenOutlined, CloseOutlined },
  props: {
    canFullscreen: PropTypes.bool.def(true),
    fullScreen: PropTypes.bool,
    prefixCls: PropTypes.string,
  },
  emits: ['cancel', 'fullscreen'],
  setup(props, { emit }) {
    const { prefixCls: prefixClsNew } = useConfigInject('modal-pro-close', props);

    const getClass = computed(() => {
      return [
        prefixClsNew,
        `${prefixClsNew}--custom`,
        {
          [`${prefixClsNew}--can-full`]: props.canFullscreen,
        },
      ];
    });

    function handleCancel() {
      emit('cancel');
    }
    function handleFullScreen(e: Event) {
      e?.stopPropagation();
      e?.preventDefault();
      emit('fullscreen');
    }

    return {
      getClass,
      handleCancel,
      handleFullScreen,
    };
  },
});

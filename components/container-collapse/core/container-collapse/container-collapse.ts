/** @format */

import type { PropType } from 'vue';

import { defineComponent, ref, computed, watchEffect } from 'vue';

// component
import Skeleton from '../../../skeleton';
import { CollapseTransition } from '../../../transition';
import ContainerLazy from '../../../container-lazy/src/ContainerLazy.vue';
import useConfigInject from '../../../_util/hooks/useConfigInject';
import { triggerWindowResize } from '../../../_util/dom';
import CollapseHeader from '../collapse-header/CollapseHeader.vue';
// hook
import { useTimeoutFn } from '../../../_util/hooks/use-timeout';
import PropTypes from '../../../_util/vue-types';

export default defineComponent({
  name: 'AContainerCollapse',
  components: {
    Skeleton,
    ContainerLazy,
    CollapseHeader,
    CollapseTransition,
  },
  props: {
    title: PropTypes.string.def(''),
    // Can it be expanded
    expanable: PropTypes.bool.def(true),
    // Warm reminder on the right side of the title
    helpMessage: {
      type: [Array, String] as PropType<string[] | string>,
      default: '',
    },
    value: PropTypes.bool,
    // Whether to trigger window.resize when expanding and contracting,
    // Can adapt to tables and forms, when the form shrinks, the form triggers resize to adapt to the height
    triggerWindowResize: PropTypes.bool,
    loading: PropTypes.bool,
    // Delayed loading
    lazy: PropTypes.bool,
    // Delayed loading time
    lazyTime: PropTypes.number.def(0),
    prefixCls: PropTypes.string,
  },
  setup(props, { emit }) {
    const { prefixCls: prefixClsNew } = useConfigInject('container-collapse', props);

    const show = ref(props.value);

    watchEffect(() => {
      show.value = props.value;
    })

    /**
     * @description: Handling development events
     */
    function handleExpand() {
      if (!props.lazy) {
        show.value = !show.value;
      }
      if (props.triggerWindowResize) {
        // 200 milliseconds here is because the expansion has animation,
        useTimeoutFn(triggerWindowResize, 200);
      }
      emit('expand', props.lazy ? !show.value : show.value);
    }

    const getBindValues = computed((): any => {
      return props;
    });

    return {
      show,
      handleExpand,
      prefixClsNew,
      getBindValues,
    };
  },
});

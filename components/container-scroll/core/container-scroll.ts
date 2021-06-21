/** @format */

import { defineComponent, ref, unref, nextTick, inject } from 'vue';
import { Scrollbar, ScrollbarType } from '../../scrollbar';

import { useScrollTo } from '../../_util/hooks/use-scroll-to';
import { defaultConfigProvider } from '../../config-provider';
import PropTypes from '../../_util/vue-types';

export default defineComponent({
  name: 'AContainerScroll',
  // inheritAttrs: false,
  components: { Scrollbar },
  props: {
    prefixCls: PropTypes.string,
  },
  setup(props) {
    const configProvider = inject('configProvider', defaultConfigProvider);
    const prefixClsNew = configProvider.getPrefixCls('container-scroll', props.prefixCls);

    const scrollbarRef = ref<Nullable<ScrollbarType>>(null);

    function scrollTo(to: number, duration = 500) {
      const scrollbar = unref(scrollbarRef);
      if (!scrollbar) return;

      nextTick(() => {
        const wrap = unref(scrollbar.wrap);
        if (!wrap) return;
        const { start } = useScrollTo({
          el: wrap,
          to,
          duration,
        });
        start();
      });
    }

    function getScrollWrap() {
      const scrollbar = unref(scrollbarRef);
      if (!scrollbar) return null;
      return scrollbar.wrap;
    }

    function scrollBottom() {
      const scrollbar = unref(scrollbarRef);
      if (!scrollbar) return;

      nextTick(() => {
        const wrap = unref(scrollbar.wrap);
        if (!wrap) return;
        const scrollHeight = wrap.scrollHeight as number;
        const { start } = useScrollTo({
          el: wrap,
          to: scrollHeight,
        });
        start();
      });
    }

    return {
      scrollbarRef,
      scrollTo,
      scrollBottom,
      getScrollWrap,
      prefixClsNew,
    };
  },
});

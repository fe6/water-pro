import type { ModalWrapperProps } from '../types';
import type { CSSProperties } from 'vue';

import {
  defineComponent,
  computed,
  ref,
  watchEffect,
  unref,
  watch,
  onMounted,
  nextTick,
  onUnmounted,
  PropType,
} from 'vue';

import Spin from '../../../spin/Spin';
import { useWindowSizeFn } from '../../../_util/hooks/use-window-size-fn';
import { ContainerScroll } from '../../../container-scroll';

import warning from '../../../_util/warning';
import PropTypes from '../../../_util/vue-types';
import { createModalContext } from '../hooks/use-modal-context';

export default defineComponent({
  name: 'AModalProWrapper',
  components: { ContainerScroll, ASpin: Spin },
  inheritAttrs: false,
  props: {
    loading: PropTypes.bool,
    useWrapper: PropTypes.bool.def(true),
    modalHeaderHeight: PropTypes.number.def(57),
    modalFooterHeight: PropTypes.number.def(74),
    minHeight: PropTypes.number.def(200),
    height: PropTypes.number,
    footerOffset: PropTypes.number.def(0),
    visible: PropTypes.bool,
    fullScreen: PropTypes.bool,
    loadingTip: PropTypes.string,
    bodyStyle: Object as PropType<CSSProperties>,
    scrollStyle: Object as PropType<CSSProperties>,
  },
  emits: ['height-change', 'ext-height'],
  setup(props: ModalWrapperProps, { emit }) {
    const wrapperRef = ref<ComponentRef>(null);
    const spinRef = ref<ElRef>(null);
    const realHeightRef = ref(0);
    const minRealHeightRef = ref(0);

    let realHeight = 0;

    const stopElResizeFn: Fn = () => {};

    useWindowSizeFn(setModalHeight.bind(null, false) as any);

    createModalContext({
      redoModalHeight: setModalHeight,
    });

    const spinStyle = computed(
      (): CSSProperties => {
        return {
          minHeight: `${props.minHeight}px`,
          // padding 28
          height: `${unref(realHeightRef)}px`,
        };
      },
    );

    watchEffect(() => {
      props.useWrapper && setModalHeight();
    });

    watch(
      () => props.fullScreen,
      (v) => {
        setModalHeight();
        if (!v) {
          realHeightRef.value = minRealHeightRef.value;
        } else {
          minRealHeightRef.value = realHeightRef.value;
        }
      },
    );

    onMounted(() => {
      const { modalHeaderHeight, modalFooterHeight } = props;
      emit('ext-height', modalHeaderHeight + modalFooterHeight);
      // listenElResize();
    });

    onUnmounted(() => {
      stopElResizeFn && stopElResizeFn();
    });

    async function scrollTop() {
      nextTick(() => {
        const wrapperRefDom = unref(wrapperRef);
        if (!wrapperRefDom) return;
        (wrapperRefDom as any)?.scrollTo?.(0);
      });
    }

    async function setModalHeight() {
      // 解决在弹窗关闭的时候监听还存在,导致再次打开弹窗没有高度
      // 加上这个,就必须在使用的时候传递父级的visible
      if (!props.visible) return;
      const wrapperRefDom = unref(wrapperRef);
      if (!wrapperRefDom) return;

      const bodyDom = wrapperRefDom.$el.parentElement;
      if (!bodyDom) return;
      bodyDom.style.padding = '0';
      await nextTick();

      try {
        const modalDom =
          bodyDom.parentElement && bodyDom.parentElement.parentElement;
        if (!modalDom) return;

        const modalRect = getComputedStyle(modalDom).top;
        const modalTop = Number.parseInt(modalRect);
        let maxHeight =
          window.innerHeight -
          modalTop * 2 +
          (props.footerOffset! || 0) -
          props.modalFooterHeight -
          props.modalHeaderHeight;

        // 距离顶部过进会出现滚动条
        if (modalTop < 40) {
          maxHeight -= 26;
        }
        await nextTick();
        const spinEl = unref(spinRef);

        if (!spinEl) return;
        await nextTick();
        // if (!realHeight) {
        realHeight = spinEl.scrollHeight;
        // }

        if (props.fullScreen) {
          realHeightRef.value =
            window.innerHeight -
            props.modalFooterHeight -
            props.modalHeaderHeight -
            28;
        } else {
          realHeightRef.value = props.height
            ? props.height
            : realHeight > maxHeight
            ? maxHeight
            : realHeight;
        }
        emit('height-change', unref(realHeightRef));
      } catch (error) {
        warning(error);
      }
    }

    return { wrapperRef, spinRef, spinStyle, scrollTop, setModalHeight };
  },
});

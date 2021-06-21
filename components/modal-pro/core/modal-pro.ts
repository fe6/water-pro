import type { ModalProps, ModalMethods } from './types';

import { isFunction, deepMerge } from '@fe6/shared';
import { omit } from 'lodash-es';

import {
  defineComponent,
  computed,
  ref,
  watch,
  unref,
  watchEffect,
  toRef,
  getCurrentInstance,
  nextTick,
} from 'vue';

import Modal from './components/Modal';
import ModalWrapper from './components/ModalWrapper.vue';
import ModalClose from './components/ModalClose.vue';
import ModalFooter from './components/ModalFooter.vue';
import ModalHeader from './components/ModalHeader.vue';

import { basicProps } from './props';
import { useFullScreen } from './hooks/use-modal-full-screen';
import useConfigInject from '../../_util/hooks/useConfigInject';

export default defineComponent({
  name: 'AModalPro',
  components: { AModalBase: Modal, ModalWrapper, ModalClose, ModalFooter, ModalHeader },
  inheritAttrs: false,
  props: basicProps,
  emits: ['visible-change', 'height-change', 'cancel', 'ok', 'register'],
  setup(props, { emit, attrs }) {
    const { prefixCls: prefixClsNew } = useConfigInject('modal-pro', props);

    const visibleRef = ref(false);
    const propsRef = ref<Partial<ModalProps> | null>(null);
    const modalWrapperRef = ref<ComponentRef>(null);

    // modal   Bottom and top height
    const extHeightRef = ref(0);
    const modalMethods: ModalMethods = {
      setModalProps,
      emitVisible: undefined,
      redoModalHeight: () => {
        nextTick(() => {
          if (unref(modalWrapperRef)) {
            (unref(modalWrapperRef) as any).setModalHeight();
          }
        });
      },
    };

    const instance = getCurrentInstance();
    if (instance) {
      emit('register', modalMethods, instance.uid);
    }

    // Custom title component: get title
    const getMergeProps = computed(
      (): ModalProps => {
        return {
          ...(unref(propsRef) as any),
          ...props,
        };
      },
    );

    const {
      handleFullScreen,
      getWrapClassName,
      fullScreenRef,
    } = useFullScreen({
      modalWrapperRef,
      extHeightRef,
      wrapClassName: toRef(getMergeProps.value, 'wrapClassName'),
      prefixClsNew: prefixClsNew.value,
    });

    // modal component does not need title
    const getProps = computed(
      (): ModalProps => {
        const opt = {
          ...unref(getMergeProps),
          visible: unref(visibleRef),
          title: undefined,
        };
        return {
          ...opt,
          wrapClassName: unref(getWrapClassName),
        };
      },
    );

    const getBindValue = computed(
      (): Recordable => {
        const attr = { ...attrs, ...unref(getProps) };
        if (unref(fullScreenRef)) {
          return omit(attr, 'height');
        }
        return attr;
      },
    );

    const getWrapperHeight = computed(() => {
      if (unref(fullScreenRef)) return undefined;
      return unref(getProps).height;
    });

    watchEffect(() => {
      visibleRef.value = !!props.visible;
      fullScreenRef.value = !!props.defaultFullscreen;
    });

    watch(
      () => unref(visibleRef),
      (v) => {
        emit('visible-change', v);
        instance && modalMethods.emitVisible?.(v, instance.uid);
        nextTick(() => {
          if (props.scrollTop && v && unref(modalWrapperRef)) {
            (unref(modalWrapperRef) as any).scrollTop();
          }
        });
      },
      {
        immediate: false,
      },
    );

    // 取消事件
    async function handleCancel(e: Event) {
      e?.stopPropagation();

      if (props.closeFunc && isFunction(props.closeFunc)) {
        const isClose: boolean = await props.closeFunc();
        visibleRef.value = !isClose;
        return;
      }

      visibleRef.value = false;
      emit('cancel');
    }

    /**
     * @description: 设置modal参数
     */
    function setModalProps(props: Partial<ModalProps>): void {
      // Keep the last setModalProps
      propsRef.value = deepMerge((unref(propsRef) || {} as any), props);
      if (!Reflect.has(props, 'visible')) return;
      visibleRef.value = !!props.visible;
    }

    function handleOk() {
      emit('ok');
    }

    function handleHeightChange(height: string) {
      emit('height-change', height);
    }

    function handleExtHeight(height: number) {
      extHeightRef.value = height;
    }

    function handleTitleDbClick(e: ChangeEvent) {
      if (!props.canFullscreen) return;
      e.stopPropagation();
      handleFullScreen(e);
    }

    return {
      handleCancel,
      getBindValue,
      getProps,
      handleFullScreen,
      fullScreenRef,
      getMergeProps,
      handleOk,
      visibleRef,
      omit,
      modalWrapperRef,
      handleExtHeight,
      handleHeightChange,
      handleTitleDbClick,
      getWrapperHeight,
    };
  },
});

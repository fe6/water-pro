/** @format */

import { computed, Ref, ref, unref } from 'vue';

export interface UseFullScreenContext {
  wrapClassName: Ref<string | undefined>;
  modalWrapperRef: Ref<ComponentRef>;
  extHeightRef: Ref<number>;
  prefixClsNew: string;
}

export function useFullScreen(context: UseFullScreenContext) {
  // const formerHeightRef = ref(0);
  const fullScreenRef = ref(false);

  const getWrapClassName = computed(() => {
    const clsName = unref(context.wrapClassName) || '';
    return unref(fullScreenRef)
      ? `${context.prefixClsNew}-fullscreen${clsName ? ` ${clsName}` : ''}`
      : unref(clsName);
  });

  function handleFullScreen(e: Event) {
    e && e.stopPropagation();
    fullScreenRef.value = !unref(fullScreenRef);
  }

  return { getWrapClassName, handleFullScreen, fullScreenRef };
}

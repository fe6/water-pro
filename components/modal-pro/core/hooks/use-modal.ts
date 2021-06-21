/** @format */

import type {
  ModalMethods,
  ModalProps,
  ReturnMethods,
  UseModalReturnJSONType,
} from '../types';

import { isEqual } from 'lodash-es';

import {
  ref,
  onUnmounted,
  unref,
  reactive,
  toRaw,
  computed,
} from 'vue';

import { isProdMode } from '../../../_util/env';

import warning from '../../../_util/warning';
const dataTransferRef = reactive<any>({});

const visibleData = reactive<{ [key: number]: boolean }>({});

/**
 * @description: Applicable to independent modal and call outside
 */
export function useModal(): UseModalReturnJSONType {
  const modalRef = ref<Nullable<ModalMethods>>(null);
  const loadedRef = ref<Nullable<boolean>>(false);
  const uidRef = ref<string>('');

  function register(modalMethod: ModalMethods, uuid = '') {
    uidRef.value = uuid;

    isProdMode() &&
      onUnmounted(() => {
        modalRef.value = null;
        loadedRef.value = false;
        dataTransferRef[unref(uidRef)] = null;
      });
    if (unref(loadedRef) && isProdMode() && modalMethod === unref(modalRef))
      return;

    modalRef.value = modalMethod;
    modalMethod.emitVisible = (visible: boolean, uid: number) => {
      visibleData[uid] = visible;
    };
  }

  const getInstance = () => {
    const instance = unref(modalRef);
    if (!instance) {
      warning('useModal instance is undefined!');
    }
    return instance;
  };

  const methods: ReturnMethods = {
    setModalProps: (props: Partial<ModalProps>): void => {
      getInstance()?.setModalProps(props);
    },

    getVisible: computed((): boolean => {
      return visibleData[~~unref(uidRef)];
    }),

    redoModalHeight: () => {
      getInstance()?.redoModalHeight?.();
    },

    openModal: <T = any>(visible = true, data?: T, openOnSet = true): void => {
      getInstance()?.setModalProps({
        visible,
      });

      if (!data) return;

      if (openOnSet) {
        dataTransferRef[unref(uidRef)] = null;
        dataTransferRef[unref(uidRef)] = toRaw(data);
        return;
      }
      const equal = isEqual(toRaw(dataTransferRef[unref(uidRef)]), toRaw(data));
      if (!equal) {
        dataTransferRef[unref(uidRef)] = toRaw(data);
      }
    },
  };
  return {
    register,
    methods,
  };
}

import type { App, VNode, PropType } from 'vue';

import type { ValidateMessages } from '../form/interface';
import type { TransferLocale } from '../transfer';
import type { PickerLocale as DatePickerLocale } from '../date-picker/generatePicker';
import type { PaginationLocale } from '../pagination/Pagination';
import type { TableLocale } from '../table/interface';
import type { ModalLocale } from '../modal/locale';
import type { InputLocale } from '../input/interface';
import type { ProviewImageLocale } from '../preview-image/interface';
import type { UploadCardLocale } from '../upload-card/interface';
import type { UploadImageLocale } from '../upload-image/interface';
import type { UploadNameLocale } from '../upload-name/interface';
import type { TagGroupLocale } from '../tag-group/interface';
import type { TagModalListLocale } from '../tag-modal-list/interface';
import type { SelectApiLocale } from '../select-api/interface';
import type { ColorPickerLocale } from '../color-picker/interface';
import type { FormProLocale } from '../form-pro/interface';
import type { ModalUserLocale } from '../modal-user/interface';
import type { ClassifyLocale } from '../classify/interface';

import { provide, defineComponent, reactive, watch } from 'vue';
import warning from '../_util/warning';
import { withInstall } from '../_util/type';

interface TransferLocaleForEmpty {
  description: string;
}

export interface Locale {
  locale: string;
  Pagination?: PaginationLocale;
  Table?: TableLocale;
  Input?: InputLocale;
  Popconfirm?: Record<string, any>;
  Upload?: Record<string, any>;
  PreviewImage?: ProviewImageLocale;
  UploadCard?: UploadCardLocale;
  UploadImage?: UploadImageLocale;
  UploadName?: UploadNameLocale;
  TagGroup?: TagGroupLocale;
  TagModalList?: TagModalListLocale;
  SelectApi?: SelectApiLocale;
  ColorPicker?: ColorPickerLocale;
  Form?: {
    optional?: string;
    defaultValidateMessages: ValidateMessages;
  };
  Image?: {
    preview: string;
  };
  DatePicker?: DatePickerLocale;
  TimePicker?: Record<string, any>;
  Calendar?: Record<string, any>;
  Modal?: ModalLocale;
  FormPro?: FormProLocale;
  ModalUser?: ModalUserLocale;
  Classify?: ClassifyLocale;
  Transfer?: Partial<TransferLocale>;
  Select?: Record<string, any>;
  Empty?: TransferLocaleForEmpty;
  global?: Record<string, any>;
  PageHeader?: { back: string };
  Icon?: Record<string, any>;
  Text?: Record<string, any>;
}

export interface LocaleProviderProps {
  locale: Locale;
  children?: VNode | VNode[];
  ANT_MARK__?: string;
}

export const ANT_MARK = 'internalMark';

const LocaleProvider = defineComponent({
  name: 'ALocaleProvider',
  props: {
    locale: {
      type: Object as PropType<Locale>,
    },
    ANT_MARK__: String,
  },
  setup(props, { slots }) {
    warning(
      props.ANT_MARK__ === ANT_MARK,
      'LocaleProvider',
      '`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead',
    );
    const state = reactive({
      antLocale: {
        ...props.locale,
        exist: true,
      },
      ANT_MARK__: ANT_MARK,
    });
    provide('localeData', state);
    watch(
      () => props.locale,
      () => {
        state.antLocale = {
          ...props.locale,
          exist: true,
        } as any;
      },
      { immediate: true },
    );

    return () => {
      return slots.default?.();
    };
  },
});

/* istanbul ignore next */
LocaleProvider.install = function (app: App) {
  app.component(LocaleProvider.name, LocaleProvider);
  return app;
};

export default withInstall(LocaleProvider);

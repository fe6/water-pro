import { defineComponent, ref, unref, PropType, onUpdated, onUnmounted, watchEffect } from 'vue';
import { isUndefined } from '@fe6/shared';
import { LoadingOutlined } from '@ant-design/icons-vue';

import ASelect from '../../select';
import AEmpty from '../../empty';
import ASimpleEmptyImg from './empty';
import useFetch from '../../_util/hooks/use-fetch';
import PropTypes from '../../_util/vue-types';
import { useRuleFormItem } from '../../_util/hooks/use-form-item';

export default defineComponent({
  name: 'ASelectApi',
  components: {
    LoadingOutlined,
    ASimpleEmptyImg,
    ASelect,
    AEmpty,
  },
  props: {
    value: PropTypes.any,
    api: {
      type: Function as PropType<(arg?: Recordable) => Promise<Recordable[]>>,
      default: null,
    },
    loopGetOptions: PropTypes.bool,
    filterOption: {
      type: Function,
      default: (inputValue: string, option: Recordable) => {
        return option.label.indexOf(inputValue) > -1;
      },
    },
  },
  setup(props) {
    const [state] = useRuleFormItem(props);
    const { loading, fetch } = useFetch(props.api);

    const options = ref<Recordable[]>([]);
    const getOptionDatas = async () => {
      await fetch({
        callback: (res: any) => {
          options.value = res;
        },
      });
    };

    const getOptionsTime = ref(1);

    const dropdownVisibleChange = async (dropDownIsOpen: boolean) => {
      if (
        dropDownIsOpen &&
        !unref(options).length &&
        getOptionsTime.value < 2 &&
        !props.loopGetOptions
      ) {
        getOptionsTime.value += props.loopGetOptions ? 0 : 1;
        await getOptionDatas();
      }
    };

    const apiValue = ref('');
    watchEffect(() => {
      apiValue.value = (state as any).value || props.value;
      if (!isUndefined(apiValue.value) && String(apiValue.value).length > 0) {
        dropdownVisibleChange(true);
      }
    });

    onUpdated(() => {
      if (!unref(options).length) {
        getOptionsTime.value = 0;
      }
    });

    onUnmounted(() => {
      getOptionsTime.value = 0;
    });

    return {
      dropdownVisibleChange,
      loading,
      options,
      apiValue,
      // TODO [error] yarn pub error TS4082:
      // simpleImage: AEmpty.PRESENTED_IMAGE_SIMPLE,
    };
  },
});

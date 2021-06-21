/** @format */

import {
  defineComponent,
  PropType,
  ref,
  reactive,
  toRefs,
  nextTick,
  watch,
  watchEffect,
  unref,
} from 'vue';
import { PlusOutlined, DashOutlined, LoadingOutlined, CloseOutlined } from '@ant-design/icons-vue';
import { getStrLength } from '@fe6/shared';

import ATag from '../../tag';
import ATooltip from '../../tooltip';
import APopover from '../../popover';
import AInput from '../../input';

import PropTypes from '../../_util/vue-types';
import { useRuleFormItem } from '../../_util/hooks/use-form-item';
import useConfigInject from '../../_util/hooks/useConfigInject';

import { TagOptionItem } from './types';

export default defineComponent({
  name: 'ATagGroup',
  components: {
    ATag,
    ATooltip,
    APopover,
    AInput,
    PlusOutlined,
    DashOutlined,
    LoadingOutlined,
    CloseOutlined,
  },
  props: {
    value: {
      type: Array as PropType<TagOptionItem[]>,
      default: () => [],
    },
    maxTagTextLength: PropTypes.number.def(4), // 文字 4 个字
    maxTagCount: PropTypes.number.def(4), // 标签 4 个
    closable: PropTypes.bool.def(false),
    createPlaceholder: PropTypes.string.def('添加标签'),
    createable: PropTypes.bool,
    createInputable: PropTypes.bool.def(true),
    createLoading: PropTypes.bool,
    removeLoading: PropTypes.bool,
    closeEmitAble: PropTypes.bool.def(true),
    nameLabel: PropTypes.string.def('name'),
    color: PropTypes.string.def('blue'),
    prefixCls: PropTypes.string,
    tagStyle: PropTypes.style,
    className: PropTypes.any,
  },
  emits: ['change', 'create-click', 'close-click'],
  setup(props, { emit }) {
    const { prefixCls: prefixClsNew } = useConfigInject('tag-group', props);

    const [state] = useRuleFormItem(props);
    const options = ref(props.value);
    const inputRef = ref();
    const datas = reactive({
      inputVisible: false,
      inputValue: '',
    });
    const stateTruer = ref([]);
    const removeIdx = ref<number | string>(-1);

    const handleClose = (removedTag: TagOptionItem, id: string | number) => {
      removeIdx.value = id;
      if (props.closeEmitAble) {
        emit('change', removedTag.name, 'remove');
      }
      emit('close-click', removedTag);
    };

    const showInput = (ev: MouseEvent) => {
      if (props.createInputable) {
        datas.inputVisible = true;
        nextTick(() => {
          inputRef.value.focus();
        });
      }
      emit('create-click', ev);
    };

    const handleInputConfirm = () => {
      if (datas.inputValue) {
        emit('change', datas.inputValue, 'add');
        Object.assign(datas, {
          inputVisible: false,
          inputValue: '',
        });
      }
    };

    watch(
      () => props.value,
      newValue => {
        options.value = newValue;
      },
    );

    // 修复 客户标签弹框删除不了标签
    watchEffect(() => {
      stateTruer.value = unref(state as any).filter((sItem: Recordable) => sItem.type !== 'delete');
      // fix: tag-modal-list 中 select type 的时候，点击叉子一直 loading 状态
      removeIdx.value = -1;
    });

    return {
      ...toRefs(datas),
      state,
      stateTruer,
      options,
      removeIdx,
      handleClose,
      showInput,
      handleInputConfirm,
      inputRef,
      prefixClsNew,
      getStrLength,
    };
  },
});

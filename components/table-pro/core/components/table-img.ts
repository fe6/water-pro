import { defineComponent, PropType } from 'vue';

import useConfigInject from '../../../_util/hooks/useConfigInject';
import { default as Image } from '../../../image';

export default defineComponent({
  name: 'ATableImage',
  components: { Image, PreviewGroup: Image.PreviewGroup },
  props: {
    imgList: {
      type: Array as PropType<string[]>,
      default: null,
    },
    size: {
      type: Number as PropType<number>,
      default: 40,
    },
    prefixCls: String,
  },
  setup(props) {
    const { prefixCls: prefixClsNew } = useConfigInject('table-pro-img', props);
    return { prefixClsNew };
  },
});

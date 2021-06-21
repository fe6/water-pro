import { defineComponent } from 'vue';

import { BasicTitle } from '../../../basic-title';
import useConfigInject from '../../../_util/hooks/useConfigInject';
import { basicProps } from '../props';

export default defineComponent({
  name: 'AModalProHeader',
  components: { BasicTitle },
  props: basicProps,
  setup(props) {
    const { prefixCls: prefixClsNew } = useConfigInject('modal-pro-title', props);
    return { prefixClsNew };
  },
});

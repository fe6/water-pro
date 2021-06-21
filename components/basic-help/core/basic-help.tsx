import type { CSSProperties, PropType } from 'vue';
  import { defineComponent, computed, unref } from 'vue';
  import { isString, isArray } from '@fe6/shared';
  import { InfoCircleOutlined } from '@ant-design/icons-vue';

  import Tooltip from '../../tooltip';
  import useConfigInject from '../../_util/hooks/useConfigInject';

  import { getPopupContainer } from '../../_util/dom';
  import { getSlot } from '../../_util/vue';
  import PropTypes from '../../_util/vue-types';

  export default defineComponent({
    name: 'ABasicHelp',
    components: { Tooltip },
    props: {
      // max-width
      maxWidth: PropTypes.string.def('400px'),
      // Whether to display the serial number
      showIndex: PropTypes.bool,
      // color
      color: PropTypes.string.def('#ffffff'),
      fontSize: PropTypes.string.def('14px'),
      placement: PropTypes.string.def('bottom'),
      prefixCls: PropTypes.string,
      absolute: PropTypes.bool,
      // Text list
      text: PropTypes.stringArray,
      // 定位
      position: {
        type: [Object] as PropType<any>,
        default: () => ({
          position: 'absolute',
          left: 0,
          bottom: 0,
        }),
      },
    },
    setup(props, { slots }) {
      const { prefixCls: prefixClsNew } = useConfigInject('basic-help', props);

      const getOverlayStyle = computed(
        (): CSSProperties => {
          return {
            maxWidth: props.maxWidth,
          };
        },
      );

      const getWrapStyle = computed(
        (): CSSProperties => {
          return {
            color: props.color,
            fontSize: props.fontSize,
          };
        },
      );

      const getMainStyleRef = computed(() => {
        return props.absolute ? props.position : {};
      });

      const renderTitle = () => {
        const list = props.text;

        if (isString(list)) {
          return <p class={`${prefixClsNew.value}-text`}>{list}</p>;
        }

        if (isArray(list)) {
          const arrList: string[] = list as string[];
          return arrList.map((item: string, index: number) => {
            return (
              <p key={item}>
                <>
                  {props.showIndex ? `${index + 1}. ` : ''}
                  {item}
                </>
              </p>
            );
          });
        }

        return null;
      };

      return () => {
        return (
          <Tooltip
            title={<div style={unref(getWrapStyle)}>{renderTitle()}</div>}
            overlayClassName={`${prefixClsNew.value}-wrap`}
            autoAdjustOverflow={true}
            overlayStyle={unref(getOverlayStyle)}
            placement={props.placement as 'left'}
            getPopupContainer={() => getPopupContainer()}>
            <span class={prefixClsNew.value} style={unref(getMainStyleRef)}>
              {getSlot(slots) || (
                <InfoCircleOutlined class="w-basic-help-icon" />
              )}
            </span>
          </Tooltip>
        );
      };
    },
  });

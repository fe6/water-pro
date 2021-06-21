/** @format */

import type { FunctionalComponent, defineComponent } from 'vue';
import type { ComponentType } from '../../types/component-type';

import { h } from 'vue';

import { default as Popover } from '../../../../popover';
import { componentMap } from '../../component-map';
import useConfigInject from '../../../../_util/hooks/useConfigInject';

export interface ComponentProps {
  component: ComponentType;
  rule: boolean;
  popoverVisible: boolean;
  ruleMessage: string;
}

export const CellComponent: FunctionalComponent<ComponentProps> = (
  {
    component = 'Input',
    rule = true,
    ruleMessage,
    popoverVisible,
  }: ComponentProps,
  { attrs },
) => {
  const { prefixCls: prefixClsNew } = useConfigInject('table-pro-edit-cell-rule-popover', {});
  const Comp = componentMap.get(component) as typeof defineComponent;

  const DefaultComp = h(Comp as any, attrs);
  if (!rule) {
    return DefaultComp;
  }
  return h(
    Popover,
    { overlayClassName: prefixClsNew.value, visible: !!popoverVisible },
    {
      default: () => DefaultComp,
      content: () => ruleMessage,
    },
  );
};

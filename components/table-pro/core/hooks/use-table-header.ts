/** @format */

import type { ComputedRef, Slots } from 'vue';
import type { TableProProps } from '../types/table';

import { unref, computed, h } from 'vue';
import { isString } from '@fe6/shared';

import { getSlot } from '../../../_util/tsx';
import TableHeader from '../components/TableHeader.vue';

export function useTableHeader(
  propsRef: ComputedRef<TableProProps>,
  slots: Slots,
) {
  const getHeaderProps = computed(
    (): Recordable => {
      const {
        title,
        showTableSetting,
        titleHelpMessage,
        tableSetting,
      } = unref(propsRef);
      const hideTitle =
        !slots.tableTitle &&
        !title &&
        !slots.toolbar &&
        !showTableSetting;
      if (hideTitle && !isString(title)) {
        return {};
      }

      return {
        title: hideTitle
          ? null
          : () =>
              h(
                TableHeader,
                {
                  title,
                  titleHelpMessage,
                  showTableSetting,
                  tableSetting,
                },
                {
                  ...(slots.toolbar
                    ? {
                        toolbar: () => getSlot(slots, 'toolbar'),
                      }
                    : {}),
                  ...(slots.tableTitle
                    ? {
                        tableTitle: () => getSlot(slots, 'tableTitle'),
                      }
                    : {}),
                },
              ),
      };
    },
  );
  return { getHeaderProps };
}

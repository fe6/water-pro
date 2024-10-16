import type { Ref } from 'vue';
import type { VueNode } from '../_util/type';
import type { GenerateConfig } from './generate';

export type Locale = {
  locale: string;

  // ===================== Date Panel =====================
  /** Display month before year in date panel header */
  monthBeforeYear?: boolean;
  yearFormat: string;
  monthFormat?: string;
  quarterFormat?: string;

  today: string;
  yesterday: string;
  nearlySeven: string;
  nearlyThirty: string;
  now: string;
  backToToday: string;
  ok: string;
  timeSelect: string;
  dateSelect: string;
  weekSelect?: string;
  clear: string;
  month: string;
  year: string;
  previousMonth: string;
  nextMonth: string;
  monthSelect: string;
  yearSelect: string;
  decadeSelect: string;

  dayFormat: string;
  dateFormat: string;
  dateTimeFormat: string;
  previousYear: string;
  nextYear: string;
  previousDecade: string;
  nextDecade: string;
  previousCentury: string;
  nextCentury: string;

  shortWeekDays?: string[];
  shortMonths?: string[];
};

export type PanelMode = 'time' | 'date' | 'week' | 'month' | 'quarter' | 'year' | 'decade';

export type PickerMode = Exclude<PanelMode, 'datetime' | 'decade'>;

export type PanelRefProps = {
  onKeydown?: (e: KeyboardEvent) => boolean;
  onBlur?: (e: FocusEvent) => void;
  onClose?: () => void;
};

export type NullableDateType<DateType> = DateType | null | undefined;

export type OnSelect<DateType> = (value: DateType, type: 'key' | 'mouse' | 'submit') => void;

export type PanelSharedProps<DateType> = {
  prefixCls: string;
  generateConfig: GenerateConfig<DateType>;
  value?: NullableDateType<DateType | DateType[]>;
  viewDate: NullableDateType<DateType | DateType[]>;
  /** [Legacy] Set default display picker view date */
  defaultPickerValue?: NullableDateType<DateType | DateType[]>;
  locale: Locale;
  disabledDate?: (date: NullableDateType<DateType | DateType[]>) => boolean;
  type?: string;
  multipleMaxTagCount?: number;
  multipleMaxTagTextLength?: number;
  multipleClosable?: boolean;
  multipleTagGroupPopoverClass?: any;

  prevIcon?: VueNode;
  nextIcon?: VueNode;
  superPrevIcon?: VueNode;
  superNextIcon?: VueNode;

  // /**
  //  * Typescript can not handle generic type so we can not use `forwardRef` here.
  //  * Thus, move ref into operationRef.
  //  * This is little hack which should refactor after typescript support.
  //  */
  operationRef: Ref<PanelRefProps>;

  onSelect: OnSelect<DateType | DateType[]>;
  onViewDateChange: (value: DateType | DateType[]) => void;
  onPanelChange: (mode: PanelMode | null, viewValue: DateType) => void;
};

export type DisabledTimes = {
  disabledHours?: () => number[];
  disabledMinutes?: (hour: number) => number[];
  disabledSeconds?: (hour: number, minute: number) => number[];
};

export type DisabledTime<DateType> = (date: DateType | DateType[] | null) => DisabledTimes;

export type OnPanelChange<DateType> = (value: DateType | DateType[], mode: PanelMode) => void;

export type EventValue<DateType> = DateType | null;
export type RangeValue<DateType> = [EventValue<DateType>, EventValue<DateType>] | null;

export type Components = {
  button?: any;
  rangeItem?: any;
};

export type RangeList = {
  label: string;
  onClick: () => void;
  onMouseenter: () => void;
  onMouseleave: () => void;
}[];

export type CustomFormat<DateType> = (value: DateType) => string;

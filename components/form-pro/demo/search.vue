<docs>
---
order: 0
title:
  zh-CN: 横向的
  en-US: Search
---

## zh-CN

内联字段。`layout: 'inline'` 横向，如果有样式错位，需要设置 `labelWidth` 。

## en-US

Search.
</docs>

<template>
  <a-form-pro @register="searchFormPro" />
</template>
<script lang="ts">
import type { FormProSchema } from '@fe6/water-pro';

import { defineComponent, reactive } from 'vue';

import { useForm } from '@fe6/water-pro';

const tagModalListApi = ({ success }: AjaxApi) => {
  setTimeout(() => {
    success([
      {
        name: '组件库',
        children: [
          {
            name: 'water',
            id: 80,
          },
          {
            name: 'antd',
            id: 180,
          },
        ],
      },
      {
        name: '官网',
        children: [
          {
            name: '金茂',
            id: 380,
          },
          {
            name: '票大大',
            id: 480,
          },
        ],
      },
    ]);
  }, 1000);
};

const schemas: FormProSchema[] = [
  {
    field: 'searchRangeGroupPicker',
    component: 'RangeGroupPicker',
    label: '日期区间快捷',
    componentProps: {
      valueFormat: 'YYYY-MM-DD HH:mm:ss',
      showTime: true,
      timeRounding: true,
      showTodayButton: true,
      showYesterdayButton: true,
      showSevenDaysButton: true,
      showThirtyDaysButton: true,
    },
    // 局部定义单个组件
    inlineCol: {
      span: 24,
    },
  },
  {
    field: 'searchfield1',
    component: 'Input',
    label: '字段1',
  },
  {
    field: 'searchfield3',
    component: 'InputNumber',
    label: '字段3',
  },
  {
    field: 'searchfield2',
    component: 'Select',
    label: 'Select',
    componentProps: {
      options: [
        {
          label: 'water',
          value: 12,
        },
        {
          label: 'antd',
          value: 23,
        },
      ],
    },
  },
  {
    field: 'searchDate',
    component: 'DatePicker',
    label: '日期',
    componentProps: {
      valueFormat: 'YYYY-MM-DD',
    },
  },
  {
    field: 'searchMonth',
    component: 'MonthPicker',
    label: '月份',
    componentProps: {
      valueFormat: 'YYYY-MM',
    },
  },
  {
    field: 'searchYear',
    component: 'YearPicker',
    label: '年份',
    componentProps: {
      valueFormat: 'YYYY',
    },
  },
  {
    field: 'searchWeek',
    component: 'WeekPicker',
    label: '周',
    componentProps: {
      valueFormat: 'YYYY-wo',
    },
  },
  {
    field: 'searchTime',
    component: 'TimePicker',
    label: '时间',
    componentProps: {
      valueFormat: 'HH-mm-ss',
    },
  },
  {
    field: 'searchRangeDate',
    component: 'RangePicker',
    label: '日期区间',
    componentProps: {
      valueFormat: 'YYYY-MM-DD',
    },
  },
  {
    field: 'searchRangeDateTime',
    component: 'RangePicker',
    label: '日期时间区间',
    componentProps: {
      showTime: true,
      valueFormat: 'YYYY-MM-DD HH:mm:ss',
    },
  },
  {
    field: 'searchRangeTime',
    component: 'TimeRangePicker',
    label: '时间区间',
    componentProps: {
      valueFormat: 'HH:mm:ss',
    },
  },
  {
    field: 'SearchTagModalListSelect',
    component: 'TagModalList',
    label: 'TagModalList',
    componentProps: {
      createable: true,
      showMoreButton: true,
      countMaxLength: 2,
      type: 'select',
      api: tagModalListApi,
      placeholder: '请输入',
    },
  },
  {
    field: 'searchfield1ss',
    component: 'Input',
    label: '测试查询',
  },
];

export default defineComponent({
  setup() {
    const [searchFormPro] = useForm({
      schemas,
      labelWidth: 120,
      // labelCol: {
      //   span: 6,
      // },
      // wrapperCol: {
      //   span: 18,
      // },
      layout: 'inline',
      inlineCol: {
        span: 6,
      },
      inlineActionCol: {
        push: 12,
        span: 6,
      },
      actionAlgin: 'right',
      inlineActionInnerRow: {
        style: 'justify-content: flex-end'
      }
    });
    return {
      searchFormPro,
    };
  },
});
</script>

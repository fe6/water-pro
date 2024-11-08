<docs>
---
order: 0
title:
  zh-CN: 字段名字的宽度
  en-US: Fix Width
---

## zh-CN

全局匹配。按钮位置只会跟随全局配置

## en-US

Fix Width.
</docs>

<template>
  <a-form-pro @register="ruleForm" />
</template>
<script lang="ts">
import type { ComputedRef } from 'vue';
import { onMounted } from 'vue';
import type { FormProSchema, RenderCallbackParams } from '@fe6/water-pro';

import { defineComponent } from 'vue';

import { useForm } from '@fe6/water-pro';

const schemas: FormProSchema[] = [
  {
    field: 'input',
    component: 'Input',
    label: 'Input',
    componentProps: (params: FormProComponentPropsParams) => {
      return {};
    },
  },
  {
    field: 'disabledUpload',
    component: 'UploadCard',
    label: 'UploadCard',
    componentProps: (params: FormProComponentPropsParams) => {
      return {
        draggable: true,
        disabled: true,
      };
    },
  },
  {
    field: 'defUpload',
    component: 'UploadCard',
    label: 'UploadCard',
    dynamicRules: (ruleParams: ComputedRef<RenderCallbackParams>) => {
      return [
        {
          required: true,
          validator: () => {
            const { defUpload } = ruleParams.value.values;
            if (!defUpload || !defUpload.length) {
              return Promise.reject(new Error('请上传 UploadCard'));
            }
            return Promise.resolve();
          },
        },
      ];
    },
    componentProps: (params: FormProComponentPropsParams) => {
      return {
        placeholder: 'UploadCard',
        data: {
          topic: 'project',
        },
        draggable: true,
        action: 'https://api.test.fanzhi.cn/common/upload/images/resource',
        onFormChange: () => {
          // 上传之后验证一下
          params.formActionType.validate(['defUpload']);
        },
      };
    },
  },
];

export default defineComponent({
  setup() {
    const [ruleForm, { setFieldsValue }] = useForm({
      schemas,
      labelWidth: 200,
      colon: false,
    });

    onMounted(() => {
      setFieldsValue({
        disabledUpload: [
          'https://test-oss.test.fanzhi.cn/images/34/35/5e2ffc81f0e59b30eaac175838bf.jpg',
          'https://test-oss.test.fanzhi.cn/images/34/35/5e2ffc81f0e59b30eaac175838bf.jpg',
        ],
        defUpload: [
          'https://test-oss.test.fanzhi.cn/images/34/35/5e2ffc81f0e59b30eaac175838bf.jpg',
          'https://test-oss.test.fanzhi.cn/images/83/93/6262f5e0e58a3af7035a550ab68d.jpg',
        ],
        input: 'xxx',
      });
    });

    return {
      ruleForm,
    };
  },
});
</script>

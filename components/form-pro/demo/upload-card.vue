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
    componentProps: () => {
      return {};
    },
  },
  {
    field: 'disabledUpload',
    component: 'UploadCard',
    label: 'UploadCard',
    componentProps: () => {
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
    changeEvent: 'changeUpload',
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
    componentProps: (params: any) => {
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
  {
    field: 'UploadName',
    component: 'UploadName',
    label: 'UploadName',
    dynamicRules: (ruleParams: ComputedRef<RenderCallbackParams>) => {
      return [
        {
          required: true,
          validator: () => {
            const { UploadName } = ruleParams.value.values;
            if (!UploadName || !UploadName?.url) {
              return Promise.reject(new Error('请上传 UploadName'));
            }
            return Promise.resolve();
          },
        },
      ];
    },
    componentProps: (params: any) => {
      return {
        placeholder: 'UploadName',
        data: {
          topic: 'project',
        },
        action: 'https://api.test.fanzhi.cn/common/upload/images/resource',
        nameKey: 'meta.name',
        onFormChange: () => {
          // 上传之后验证一下
          params.formActionType.validate(['UploadName']);
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
          'https://test-oss.test.fanzhi.cn/images/ae/84/a3684b4ee391a87932ef686380ec.jpg',
          'https://test-oss.test.fanzhi.cn/images/90/b9/b762abc7b148ceb6e633ced3f84c.jpg',
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

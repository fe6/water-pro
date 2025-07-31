<docs>
---
order: 0
title:
  zh-CN: 基本使用
  en-US: Basic Usage
---

## zh-CN

最简单的用法。

## en-US

The simplest usage.
</docs>

<template>
  <div>
    -数据展示: {{ theList }}-
    <a-upload-card
      action="https://api.dev.mosh.cn/public/upload/image/binary"
      resultKey="data"
      v-model:value="theList"
      :headers="headers"
      :data="{ a: 1 }"
      draggable
      :imageWidth="50"
      :imageHeight="50"
      @dragEnd="onDragEnd"
      accept="image/png,image/jpeg,image/gif"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const theList = ref(['https://dz-resources-oss.fanzhi.cn/images/ee/24/544795bf59a8343731c3501c6b4e.jpg','https://dz-resources-oss.fanzhi.cn/images/cc/4e/063b9b71f8a519d75268f9e0679f.jpg']);
    const onDragEnd = (theOldIdx: number, theNewIdx: number) => {
      const theOldImage: any = theList.value[theOldIdx];
      theList.value[theOldIdx] = theList.value[theNewIdx];
      theList.value[theNewIdx] = theOldImage;
    };
    return {
      headers: {
        authorization: 'authorization-text',
      },
      theList,
      onDragEnd,
    };
  },
});
</script>

<!-- @format -->

<template>
  <div v-if="imgList && imgList.length" :class="prefixClsNew">
    <PreviewGroup>
      <template v-for="img in imgList" :key="img">
        <Image :width="size" :src="img" />
      </template>
    </PreviewGroup>
  </div>
</template>
<script lang="ts" src="./table-img.ts"></script>

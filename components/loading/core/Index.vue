<!-- @format -->

<template>
  <section
    v-show="loading"
    :class="[`${prefixClsNew}-loading`, { absolute }]"
    :style="getStyle"
  >
    <Spin v-bind="$attrs" :tip="tip" :size="size" :spinning="loading" />
  </section>
</template>
<script lang="ts" src="./index.ts"></script>

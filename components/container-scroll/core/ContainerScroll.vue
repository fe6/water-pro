<!-- @format -->

<template>
  <Scrollbar ref="scrollbarRef" :class="prefixClsNew" v-bind="$attrs">
    <slot></slot>
  </Scrollbar>
</template>

<script lang="ts" src="./container-scroll.ts"></script>

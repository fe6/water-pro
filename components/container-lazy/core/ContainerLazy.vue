<!-- @format -->

<template>
  <transition-group
    v-bind="$attrs"
    ref="elRef"
    :class="prefixClsNew"
    :name="transitionName"
    :tag="tag"
    mode="out-in"
  >
    <div v-if="isInit" key="component">
      <slot :loading="loading"></slot>
    </div>
    <div v-else key="skeleton">
      <slot v-if="$slots.skeleton" name="skeleton"></slot>
      <Skeleton v-else />
    </div>
  </transition-group>
</template>
<script lang="ts" src="./container-lazy.ts"></script>

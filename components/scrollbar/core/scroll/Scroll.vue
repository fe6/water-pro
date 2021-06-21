<!-- @format -->

<template>
  <div :class="prefixClsNew">
    <div
      ref="wrap"
      :class="[
        wrapClass,
        `${prefixClsNew}-wrap`,
        native ? '' : `${prefixClsNew}-wrap-hidden-default`,
      ]"
      :style="style"
      @scroll="handleScroll"
    >
      <component
        :is="tag"
        ref="resize"
        :class="[`${prefixClsNew}-view`, viewClass]"
        :style="viewStyle"
      >
        <slot></slot>
      </component>
    </div>
    <template v-if="!native">
      <bar v-if="showHorizontal" :move="moveX" :size="sizeWidth" />
      <bar vertical :move="moveY" :size="sizeHeight" />
    </template>
  </div>
</template>

<script lang="ts" src="./scroll.ts"></script>

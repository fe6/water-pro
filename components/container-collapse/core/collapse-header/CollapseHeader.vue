<!-- @format -->

<template>
  <div
    :class="[`${prefixClsNew}-header`, {
      [`${prefixClsNew}-header-only`]: !expanable
    }]"
    @click="$emit('expand')"
  >
    <basic-title v-bind="$attrs">
      <template v-if="title">
        {{ title }}
      </template>
      <template v-else>
        <slot name="title"></slot>
      </template>
    </basic-title>

    <div :class="`${prefixClsNew}-action`">
      <slot name="action"></slot>
      <LoadingOutlined v-if="loading" />
      <basic-arrow
        v-if="!loading && expanable"
        :top="show"
        :expand="!show"
      />
    </div>
  </div>
</template>

<script lang="ts" src="./collapse-header.ts"></script>

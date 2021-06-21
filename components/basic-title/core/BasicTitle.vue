<!-- @format -->

<template>
  <span :class="[prefixClsNew, { [`${prefixClsNew}-show-span`]: span && ($slots.default || title) }]">
    <Title v-bind="$attrs">
      <template v-if="title">
        {{ title }}
      </template>
      <template v-else-if="$slots.default">
        <slot></slot>
      </template>
    </Title>
    <BasicHelp
      v-if="$attrs.text || helpMessage"
      :class="`${prefixClsNew}-help`"
      :text="helpMessage"
      v-bind="$attrs"
    />
  </span>
</template>
<script lang="ts" src="./basic-title.ts"></script>

<!-- @format -->

<template>
  <div :class="[prefixClsNew]">
    <CollapseHeader
      v-bind="{...getBindValues, ...$attrs}"
      :prefix-cls="prefixClsNew"
      :show="show"
      :loading="loading"
      @expand="handleExpand"
    >
      <template #title>
        <slot name="title"></slot>
      </template>
      <template #action>
        <slot name="action"></slot>
      </template>
    </CollapseHeader>

    <CollapseTransition :enable="expanable">
      <Skeleton v-if="loading" />
      <div v-else v-show="show" :class="`${prefixClsNew}-body`">
        <ContainerLazy v-if="lazy" :timeout="lazyTime">
          <slot></slot>
          <template #skeleton>
            <slot name="lazySkeleton"></slot>
          </template>
        </ContainerLazy>
        <slot v-else></slot>
      </div>
    </CollapseTransition>
  </div>
</template>
<script lang="ts" src="./container-collapse.ts"></script>

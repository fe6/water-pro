<!-- @format -->

<template>
  <AModalBase v-bind="getBindValue" @cancel="handleCancel">
    <template v-if="!$slots.closeIcon" #closeIcon>
      <ModalClose
        :can-fullscreen="getProps.canFullscreen"
        :full-screen="fullScreenRef"
        @cancel="handleCancel"
        @fullscreen="handleFullScreen"
      />
    </template>

    <template v-if="!$slots.title && title" #title>
      <ModalHeader
        v-bind="{
          ...getMergeProps,
          ...$attrs
        }"
        @dblclick="handleTitleDbClick"
      />
    </template>

    <template v-if="!$slots.footer" #footer>
      <ModalFooter v-bind="getProps" @ok="handleOk" @cancel="handleCancel">
        <template v-for="item in Object.keys($slots)" #[item]="data">
          <slot :name="item" v-bind="data"></slot>
        </template>
      </ModalFooter>
    </template>

    <ModalWrapper
      ref="modalWrapperRef"
      :use-wrapper="getProps.useWrapper"
      :footer-offset="wrapperFooterOffset"
      :full-screen="fullScreenRef"
      :loading="getProps.loading"
      :loading-tip="getProps.loadingTip"
      :min-height="getProps.minHeight"
      :height="getWrapperHeight"
      :visible="visibleRef"
      :scroll-style="scrollStyle"
      :modal-footer-height="footer !== undefined && !footer ? 0 : undefined"
      v-bind="omit(getProps.wrapperProps, 'visible', 'height')"
      @ext-height="handleExtHeight"
      @height-change="handleHeightChange"
    >
      <slot></slot>
    </ModalWrapper>

    <template
      v-for="item in Object.keys(omit($slots, 'default'))"
      #[item]="data"
    >
      <slot :name="item" v-bind="data"></slot>
    </template>
  </AModalBase>
</template>
<script lang="ts" src="./modal-pro.ts"></script>

<!-- @format -->

<template>
  <div
    v-if="showCancelBtn || showOkBtn || $slots.insertFooter"
    :class="prefixClsNew"
  >
    <slot name="insertFooter"></slot>
    <a-button
      v-if="showCancelBtn"
      v-bind="cancelButtonProps"
      @click="handleCancel"
    >
      {{ cancelText }}
    </a-button>
    <slot name="centerFooter"></slot>
    <a-button
      v-if="showOkBtn"
      :type="okType"
      :loading="confirmLoading"
      v-bind="okButtonProps"
      @click="handleOk"
    >
      {{ okText }}
    </a-button>
    <slot name="appendFooter"></slot>
  </div>
</template>

<script lang="ts" src="./modal-footer.ts"></script>


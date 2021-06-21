<!-- @format -->

<template>
  <div :class="getClass">
    <template v-if="canFullscreen">
      <FullscreenExitOutlined
        v-if="fullScreen"
        role="full"
        @click="handleFullScreen"
      />

      <FullscreenOutlined v-else role="close" @click="handleFullScreen" />
    </template>
    <CloseOutlined @click="handleCancel" />
  </div>
</template>

<script lang="ts" src="./modal-close.ts"></script>

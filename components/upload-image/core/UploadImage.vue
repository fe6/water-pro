<!-- @format -->

<template>
  <a-upload
    :accept="acceptListString"
    :class="prefixClsNew"
    :show-upload-list="false"
    :action="autoUpload ? action : ''"
    :headers="headers"
    :disabled="disabled"
    :before-upload="beforeUploadFn"
    @change="handleChange"
  >
    <div v-show="!imageUrl" :class="`${prefixClsNew}-btn`">
      <LoadingOutlined v-show="loading" />
      <template v-if="!loading && $slots.placeholder">
        <slot name="placeholder"></slot>
      </template>
      <div v-show="!loading" v-else>
        <p :class="`${prefixClsNew}-tip`">上传</p>
        <p v-if="placeholder" :class="`${prefixClsNew}-tip`">{{ placeholder }}</p>
      </div>
    </div>
    <a-image
      v-if="imageUrl"
      :width="imageWidth"
      :height="imageHeight"
      :src="imageUrl"
      :class="[
        `${prefixClsNew}-img`,
        { [`${prefixClsNew}-img-disabled`]: disabled }
      ]"
      :preview="false"
      :fallback="errorBackImage"
    />
  </a-upload>
</template>

<script lang="ts" src="./upload-image.ts"></script>

<!-- @format -->

<template>
  <div :class="`${prefixClsNew}-wrapper`">
    <div :class="prefixClsNew">
      <a-upload
        v-show="!imageName"
        :accept="accept"
        :class="`${prefixClsNew}-uploader`"
        :show-upload-list="false"
        :action="autoUpload ? action : ''"
        :headers="headers"
        :disabled="disabled"
        :before-upload="beforeUploadFn"
        @change="handleChange"
      >
        <a-button
          :class="`${prefixClsNew}-btn`"
          type="link"
          :disabled="disabled"
          :size="size"
          :loading="loading"
          :style="{ marginLeft: loading ? '14px' : 0 }"
        >{{ placeholder }}</a-button>
      </a-upload>
      <div
        v-show="imageName"
        :class="[
          `${prefixClsNew}-inner`,
          {
            [`${prefixClsNew}-inner-disabled`]: disabled,
            [`${prefixClsNew}-inner-${sizeMap[size]}`]: size !== 'default',
          }
        ]"
      >
        <span>
          <PictureOutlined
            v-show="isImage"
            :class="`${prefixClsNew}-img`"
          /><FileOutlined v-show="!isImage" :class="`${prefixClsNew}-img`" />
          {{ imageName }}
        </span>
        <DeleteOutlined
          :class="[
            `${prefixClsNew}-del`,
            {
              [`${prefixClsNew}-del-disabled`]: disabled
            }
          ]"
          @click="removeImage"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./upload-name.ts"></script>

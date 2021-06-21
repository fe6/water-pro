<!-- @format -->

<template>
  <div :class="[prefixClsNew, className ? className : '']">
    <a-tag
      v-for="tagItem in maxTagCount > 0 &&
      stateTruer.length > maxTagCount
        ? stateTruer.slice(0, maxTagCount)
        : stateTruer"
      :key="tagItem.id"
      :class="[`${prefixClsNew}-inner`, {
        [`${prefixClsNew}-inner-small`]:
          maxTagTextLength > 0 && getStrLength(tagItem[nameLabel]) >= maxTagTextLength,
        [`${prefixClsNew}-inner-big`]: closable && tagItem.id !== '0',
      }]"
      :closable="closable && tagItem.id !== '0'"
      :visible="true"
      :color="color"
      :style="tagStyle"
      @close="handleClose(tagItem, tagItem.id)"
    >
      <template #closeIcon>
        <LoadingOutlined v-if="removeIdx === tagItem.id" />
        <CloseOutlined v-else />
      </template>
      <template
        v-if="maxTagTextLength > 0 && getStrLength(tagItem[nameLabel]) >= maxTagTextLength"
      >
        <a-tooltip :title="tagItem[nameLabel]">
          {{ tagItem[nameLabel] }}
        </a-tooltip>
      </template>
      <template v-else>
        {{ tagItem[nameLabel] }}
      </template>
    </a-tag>
    <a-popover
      v-if="
        maxTagCount > 0 &&
        stateTruer.length > maxTagCount
      "
    >
      <template #content>
        <div :class="`${prefixClsNew}-popover`">
          <a-tag
            v-for="tagItem in stateTruer"
            :key="tagItem.id"
            :class="{
              [`${prefixClsNew}-small`]:
                maxTagTextLength > 0 && tagItem[nameLabel].length >= maxTagTextLength,
              [`${prefixClsNew}-big`]: closable && tagItem.id !== '0',
              [`${prefixClsNew}-preive`]: true,
            }"
            :closable="closable && tagItem.id !== '0'"
            :color="color"
            @close="handleClose(tagItem, agItem.id)"
          >
            <template
              v-if="
                maxTagTextLength > 0 && tagItem[nameLabel].length > maxTagTextLength
              "
            >
              <a-tooltip :title="tagItem[nameLabel]">
                {{ tagItem[nameLabel] }}
              </a-tooltip>
            </template>
            <template v-else>
              {{ tagItem[nameLabel] }}
            </template>
          </a-tag>
        </div>
      </template>
      <a-tag
        :color="color"
        :class="`${prefixClsNew}-more`"
      >
        <template v-if="$slots.more">
          <slot name="more"></slot>
        </template>
        <DashOutlined v-else />
      </a-tag>
    </a-popover>
    <template v-if="createable">
      <a-input
        v-if="inputVisible"
        ref="inputRef"
        v-model:value="inputValue"
        type="text"
        size="small"
        :class="[`${prefixClsNew}-create-input`]"
        @blur="handleInputConfirm"
        @keyup.enter="handleInputConfirm"
      />
      <a-tag
        v-else
        :color="color"
        :class="[`${prefixClsNew}-create`]"
        :loading="createLoading"
        @click="showInput"
      >
        <LoadingOutlined v-show="createLoading" />
        <plus-outlined v-show="!createLoading" />
        {{ createPlaceholder }}
      </a-tag>
    </template>
  </div>
</template>

<script lang="ts" src="./tag-group.ts"></script>

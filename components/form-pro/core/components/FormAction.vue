<!-- @format -->

<template>
  <a-col
    v-if="showActionButtonGroup"
    v-bind="itemLabelWidthProp || actionColOpt"
    :style="{ textAlign: actionAlgin }"
  >
    <a-row
      :class="`${prefixClsNew}-item-action`"
    >
      <a-col :span="24">
        <slot name="resetBefore"></slot>
        <a-button
          v-if="showResetButton"
          type="default"
          :class="`${prefixClsNew}-action-button`"
          v-bind="getResetBtnOptions"
          :style="{
            marginRight: showSubmitButton ? '12px' : 0,
          }"
          @click="resetAction"
        >
          {{ getResetBtnOptions.text }}
        </a-button>
        <slot name="submitBefore"></slot>

        <a-button
          v-if="showSubmitButton"
          type="primary"
          :class="`${prefixClsNew}-action-button`"
          v-bind="getSubmitBtnOptions"
          @click="submitAction"
        >
          {{ getSubmitBtnOptions.text }}
        </a-button>

        <slot name="advanceBefore"></slot>
        <a-button
          v-if="showAdvancedButton && !hideAdvanceBtn"
          type="link"
          size="small"
          @click="toggleAdvanced"
        >
          {{ isAdvanced ? '收起' : '展开' }}
          <BasicArrow :expand="!isAdvanced" :top="isAdvanced" style="margin-left: 4px" />
        </a-button>
        <slot name="advanceAfter"></slot>
      </a-col>
    </a-row>
  </a-col>
</template>

<script lang="ts" src="./form-action.ts"></script>

<!-- @format -->

<template>
  <div :class="[prefixClsNew, getAlign]">
    <template
      v-for="(action, index) in getActions"
      :key="`${index}-${action.label}`"
    >
      <a-button v-bind="action">
        {{ action.label }}
      </a-button>
      <a-divider
        v-if="
          divider &&
          index <
            getActions.length - (dropDownActions && getDropList.length ? 0 : 1)
        "
        type="vertical"
      />
    </template>
    <a-dropdown
      v-if="dropDownActions && getDropList.length"
      :trigger="trigger"
    >
      <template #overlay>
        <!-- <slot name="more"></slot> -->
        <a-menu>
          <a-menu-item
            v-for="(dropItem, dropIdx) in getDropList"
            :key="dropIdx"
          >
            <a href="javascript:;" @click="dropItem.onClick">{{ dropItem.label}}</a>
          </a-menu-item>
        </a-menu>
      </template>
      <slot name="more"></slot>
      <a-button v-if="!$slots.more" type="link" size="small">
        <MoreOutlined class="icon-more" />
      </a-button>
    </a-dropdown>
  </div>
</template>
<script lang="ts" src="./table-action.ts"></script>

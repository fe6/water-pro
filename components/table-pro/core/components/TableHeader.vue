<!-- @format -->

<template>
  <slot v-if="$slots.tableTitle" name="tableTitle"></slot>
  <TableTitle
    v-if="!$slots.tableTitle && title"
    :help-message="titleHelpMessage"
    :title="title"
  />

  <div :class="`${prefixClsNew}__toolbar`">
    <slot name="toolbar"></slot>
    <TableSetting v-if="showTableSetting" :setting="tableSetting" />
  </div>
</template>
<script lang="ts" src="./table-header.ts"></script>

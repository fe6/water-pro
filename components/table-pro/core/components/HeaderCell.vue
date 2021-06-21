<!-- @format -->

<template>
  <EditTableHeaderCell v-if="getIsEdit">
    {{ getTitle }}
  </EditTableHeaderCell>
  <span v-else>{{ getTitle }}</span>
  <BasicHelp
    v-if="getHelpMessage"
    :text="getHelpMessage"
    :class="`${prefixClsNew}__help`"
  />
</template>
<script lang="ts" src="./header-cell.ts"></script>

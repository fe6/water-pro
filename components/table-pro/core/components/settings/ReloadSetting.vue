<!-- @format -->

<template>
  <Tooltip placement="top">
    <template #title>
      <span @click="toRefresh">刷新</span>
    </template>
    <RedoOutlined @click="toRefresh" />
  </Tooltip>
</template>

<script lang="ts" src="./reload-setting.ts"></script>

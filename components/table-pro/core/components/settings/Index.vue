<!-- @format -->

<template>
  <div :class="prefixClsNew">
    <ReloadSetting v-if="getSetting.reload" />
    <ColumnSetting v-if="getSetting.setting" />
  </div>
</template>
<script lang="ts" src="./index.ts"></script>

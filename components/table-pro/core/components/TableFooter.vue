<!-- @format -->

<template>
  <Table
    v-if="summaryFunc || summaryData"
    :show-header="false"
    :bordered="false"
    :pagination="false"
    :data-source="getDataSource"
    :row-key="(r) => r[rowKey]"
    :columns="getColumns"
    table-layout="fixed"
    :scroll="scroll"
  />
</template>
<script lang="ts" src="./table-footer.ts"></script>

<template>
  <a-select
    v-model:value="apiValue"
    :loading="loading"
    :options="options"
    virtual
    v-bind="$attrs"
    :filter-option="filterOption"
    @dropdownVisibleChange="dropdownVisibleChange"
  >
    <template #notFoundContent>
      <div v-show="loading">
        <a-empty description="正在加载">
          <template #image>
            <LoadingOutlined style="font-size: 40px" />
          </template>
        </a-empty>
      </div>
      <div v-show="!loading">
        <a-empty>
          <template #image>
            <a-simple-empty-img />
          </template>
        </a-empty>
      </div>
    </template>
  </a-select>
</template>

<script lang="ts" src="./index.ts"></script>

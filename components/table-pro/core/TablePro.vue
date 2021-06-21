<!-- @format -->

<template>
  <div
    ref="wrapRef"
    :class="[
      prefixClsNew,
      $attrs.class,
      {
        [`${prefixClsNew}-form-container`]: getBindValues.useSearchForm,
        [`${prefixClsNew}--inset`]: getBindValues.inset,
      },
    ]"
  >
    <a-form-pro
      v-if="getBindValues.useSearchForm"
      submit-on-reset
      v-bind="getFormProps"
      :submit-button-options="{ loading: getLoading }"
      :reset-button-options="{ loading: getLoading }"
      :table-action="tableAction"
      :label-align="formLabelALigin"
      :label-col="formLabelCol"
      :wrapper-col="formWrapperCol"
      @register="registerForm"
      @submit="handleSearchInfoChange"
      @advanced-change="redoHeight"
    >
      <template
        v-for="item in getFormSlotKeys"
        #[replaceFormSlotKey(item)]="data"
      >
        <slot :name="item" v-bind="data"></slot>
      </template>
    </a-form-pro>

    <Table
      v-show="getEmptyDataIsShowTable"
      ref="tableElRef"
      v-bind="getBindValues"
      :row-class-name="getRowClassName"
      @change="handleTableChange"
    >
      <template v-for="item in Object.keys($slots)" #[item]="data">
        <slot :name="item" v-bind="data"></slot>
      </template>
      <template
        v-for="column in columns"
        #[`header-${column.dataIndex}`]
        :key="column.dataIndex"
      >
        <HeaderCell :column="column" />
      </template>
    </Table>
  </div>
</template>
<script lang="ts" src="./table-pro.ts"></script>

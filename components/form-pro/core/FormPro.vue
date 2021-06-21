<!-- @format -->

<template>
  <Form
    v-bind="{ ...$attrs, ...$props }"
    ref="formElRef"
    :class="getFormClass"
    :model="formModel"
  >
    <Row :style="getRowWrapStyle">
      <slot name="formHeader"></slot>
      <template v-for="schema in getSchema" :key="schema.field">
        <FormItem
          :table-action="tableAction"
          :form-action-type="formActionType"
          :schema="schema"
          :form-props="getProps"
          :all-default-values="defaultValueRef"
          :form-model="formModel"
          :set-form-model="setFormModel"
        >
          <template v-for="item in Object.keys($slots)" #[item]="data">
            <slot :name="item" v-bind="data"></slot>
          </template>
        </FormItem>
      </template>

      <FormAction
        v-bind="{ ...getProps, ...advanceState }"
        :schemas="getSchema"
        :form-props="getProps"
        @toggle-advanced="handleToggleAdvanced"
      >
        <template
          v-for="item in [
            'resetBefore',
            'submitBefore',
            'advanceBefore',
            'advanceAfter',
          ]"
          #[item]="data"
        >
          <slot :name="item" v-bind="data"></slot>
        </template>
      </FormAction>
      <slot name="formFooter"></slot>
    </Row>
  </Form>
</template>

<script lang="ts" src="./form-pro.ts"></script>

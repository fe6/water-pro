<template>
  <demo-sort :cols="1">
    <Basic />
    <Login />
    <Use />
    <Inner />
    <Vertical />
    <Grid />
    <VSearch />
    <LabelWidth />
    <Label />
    <Rule />
    <DynamicForm />
    <IfShow />
    <UpdateSchema />
    <Msg />
    <Slot />
    <Special />
    <Expend />
    <ChangeTime />
    <ConfigCenter />
    <Full />
    <Children />
    <On />
    <Size />
    <TableForm />
    <UploadCard />
  </demo-sort>
</template>
<script lang="ts">
import Basic from './basic.vue';
import Login from './login.vue';
import Use from './use.vue';
import Inner from './inner.vue';
import Vertical from './vertical.vue';
import Grid from './grid.vue';
import LabelWidth from './label-width.vue';
import Label from './label.vue';
import Rule from './rule.vue';
import DynamicForm from './dynamic-form.vue';
import IfShow from './if-show.vue';
import UpdateSchema from './update-schema.vue';
import Msg from './msg.vue';
import Slot from './slot.vue';
import Special from './special.vue';
import Expend from './expend.vue';
import ChangeTime from './change-time.vue';
import Full from './full.vue';
import Children from './children.vue';
import VSearch from './search.vue';
import On from './on.vue';
import ConfigCenter from './config-center.vue';
import Size from './size.vue';
import TableForm from './form-table.vue';
import UploadCard from './upload-card.vue';

import CN from '../index.zh-CN.md';
import US from '../index.en-US.md';
import { defineComponent } from 'vue';
export default defineComponent({
  CN,
  US,
  components: {
    Basic,
    Login,
    Use,
    Inner,
    Vertical,
    Grid,
    LabelWidth,
    Label,
    Rule,
    DynamicForm,
    IfShow,
    UpdateSchema,
    Msg,
    Slot,
    Special,
    Expend,
    ChangeTime,
    Full,
    Children,
    VSearch,
    ConfigCenter,
    On,
    Size,
    TableForm,
    UploadCard,
  },
  setup() {
    return {};
  },
});
</script>

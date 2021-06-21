<!-- @format -->

<template>
  <Tooltip placement="top">
    <template #title>
      <span>列设置</span>
    </template>
    <!-- :getPopupContainer="getPopupContainer" -->
    <Popover
      placement="bottomLeft"
      trigger="click"
      :overlay-class-name="`${prefixClsNew}__cloumn-list`"
      @visibleChange="handleVisibleChange"
    >
      <template #title>
        <div :class="`${prefixClsNew}__popover-title`">
          <Checkbox
            v-model:checked="checkAll"
            :indeterminate="indeterminate"
            @change="onCheckAllChange"
          >
            列展示
          </Checkbox>

          <Checkbox
            v-model:checked="checkIndex"
            @change="handleIndexCheckChange"
          >
            序号列
          </Checkbox>

          <Checkbox
            v-model:checked="checkSelect"
            :disabled="!defaultRowSelection"
            @change="handleSelectCheckChange"
          >
            勾选列
          </Checkbox>

          <a-button size="small" type="link" @click="reset"> 重置 </a-button>
        </div>
      </template>

      <template #content>
        <ContainerScroll>
          <CheckboxGroup
            ref="columnListRef"
            v-model:value="checkedList"
            @change="onChange"
          >
            <template v-for="item in plainOptions" :key="item.value">
              <div :class="`${prefixClsNew}__check-item`">
                <DragOutlined :class="`${prefixClsNew}-coulmn-drag-icon`" />
                <Checkbox :value="item.value" :disabled="item.label === 'Action'">
                  {{ item.label }}
                </Checkbox>

                <Tooltip placement="bottomLeft" :mouse-leave-delay="0.4">
                  <template #title> 固定到左侧 </template>
                  <LeftOutlined
                    icon="line-md:arrow-align-left"
                    :class="[
                      `${prefixClsNew}__fixed-left`,
                      {
                        active: item.fixed === 'left',
                        disabled: !checkedList.includes(item.value),
                      },
                    ]"
                    @click="handleColumnFixed(item, 'left')"
                  />
                </Tooltip>
                <Divider type="vertical" />
                <Tooltip placement="bottomLeft" :mouse-leave-delay="0.4">
                  <template #title> 固定到右侧 </template>
                  <RightOutlined
                    :class="[
                      `${prefixClsNew}__fixed-right`,
                      {
                        active: item.fixed === 'right',
                        disabled: !checkedList.includes(item.value),
                      },
                    ]"
                    @click="handleColumnFixed(item, 'right')"
                  />
                </Tooltip>
              </div>
            </template>
          </CheckboxGroup>
        </ContainerScroll>
      </template>
      <SettingOutlined />
    </Popover>
  </Tooltip>
</template>
<script lang="ts" src="./column-setting.ts"></script>

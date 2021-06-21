<!-- @format -->

<template>
  <div :class="type ? [`${prefixClsNew}-select-warp`] : ''">
    <div v-if="type" :class="selectClass" @click="createClick">
      <div :class="boxClass">
        <div
          v-if="tagCheckList.length === 0"
          :class="`${prefixClsNew}-select-placeholder`"
        >
          {{ placeholder }}
        </div>
        <template v-else>
          <a-tag-group
            :class-name="selectTagClass"
            :value="tagCheckAllList"
            :value-label="valueLabel"
            :name-label="nameLabel"
            :max-tag-text-length="maxTagTextLength"
            :max-tag-count="maxTagCount"
            :createable="false"
            color=""
            :closable="true"
            :create-inputable="false"
            :create-loading="createLoading"
            @close-click="closeClick"
          >
            <template #more>
              +{{tagCheckAllList.length - maxTagCount}}
            </template>
          </a-tag-group>
        </template>
      </div>
      <div>
        <LoadingOutlined v-show="createLoading" :class="`${prefixClsNew}-select-arrow`" />
        <a-basic-arrow v-show="!createLoading" :class="`${prefixClsNew}-select-arrow`" :expand="!getVisible" :top="getVisible" />
      </div>
    </div>
    <a-tag-group
      v-else
      :value="tagCheckAllList"
      :value-label="valueLabel"
      :name-label="nameLabel"
      :max-tag-text-length="maxTagTextLength"
      :max-tag-count="maxTagCount"
      :createable="createable"
      :create-placeholder="createPlaceholder"
      :create-inputable="false"
      :closable="tagCheckAllList.length > 1"
      :create-loading="createLoading"
      @create-click="createClick"
      @close-click="closeClick"
    ></a-tag-group>
    <a-modal-pro
      v-bind="attrs"
      width="1000px"
      :title="modalTitle"
      :body-style="{padding: '0'}"
      :scroll-style="{padding: '8px 16px 0'}"
      @register="registerModal"
      @ok="submitModal"
      @cancel="cancelModal"
    >
      <div v-for="(tagGroupItem, tagGroupIdx) in tagItems" :key="tagGroupIdx" :class="`${prefixClsNew}-box`">
        <h4 :class="`${prefixClsNew}-name`">{{ tagGroupItem[nameLabel] }}</h4>
        <a-tag
          v-for="tagItem in tagGroupItem[childrenLabel]"
          :key="tagItem[valueLabel]"
          :class="`${prefixClsNew}-tag`"
          :color="
            tagCheckAllList.findIndex(
              (checkItem) => checkItem[valueLabel] === tagItem[valueLabel],
            ) > -1
              ? 'blue'
              : ''
          "
          @click="tagClick(tagItem)"
          >{{ tagItem[nameLabel] }}</a-tag
        >
      </div>
    </a-modal-pro>
  </div>
</template>

<script lang="ts" src="./tag-modal-list.ts"></script>

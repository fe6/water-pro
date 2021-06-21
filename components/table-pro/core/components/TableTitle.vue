<!-- @format -->

<template>
  <BasicTitle v-if="getTitle" :help-message="helpMessage">
    {{ getTitle }}
  </BasicTitle>
</template>
<script lang="ts" src="./table-title.ts"></script>

<template>
  <q-page padding>
    <q-form @submit.prevent="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input outlined v-model="programName" label="프로그램명" lazy-rules />
      <q-expansion-item
        expand-separator
        icon="search"
        label="상세 검색하기"
        caption="세부 검색 항목 열기"
        header-class="bg-teal text-white"
      >
        <q-input
          outlined
          class="q-my-sm"
          v-model="contentName"
          label="회차명"
          lazy-rules
        />
        <q-input
          outlined
          class="q-my-sm"
          v-model="keyword"
          label="키워드"
          lazy-rules
        />
        <q-input
          outlined
          class="q-my-sm"
          v-model="actor"
          label="출연자"
          lazy-rules
        />
        <div class="q-pa-md">
          <q-checkbox v-model="isFullVod" />FullVod 여부
        </div>
      </q-expansion-item>
      <div>
        <q-btn label="검색" type="submit" color="primary" />
        <q-btn
          label="초기화"
          type="reset"
          color="primary"
          flat
          class="q-ml-sm"
        />
      </div>
    </q-form>

    <TableView />
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

import TableView from 'components/TableView.vue';

const programName = ref('');
const contentName = ref('');
const keyword = ref('');
const actor = ref('');
const isFullVod = ref(true);
const onSubmit = () => {
  console.log(programName.value);
};
const onReset = () => {
  programName.value = '';
  contentName.value = '';
  keyword.value = '';
  isFullVod.value = true;
};
</script>

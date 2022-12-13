<template>
  <q-page padding>
    <!-- content -->
    <q-form @submit.prevent="onSubmit">
      <q-input v-model="datetime" type="datetime-local" step="1" />
      <q-btn type="submit" label="계산하기" />
    </q-form>
    <TableView />
    <section class="text-center q-gutter-x-md q-gutter-y-xs">
      <q-btn label="⬆" />
      <q-btn label="⬇" />
      <q-btn label="복사" />
      <q-btn label="붙여넣기" />
      <q-space />
      <q-btn color="purple" label="전송하기" />
      <q-btn label="파일열기" />
      <q-btn label="저장하기" />
    </section>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import TableView from 'components/TableView.vue';

const datetime = ref('');
const time = ref('');
const onSubmit = () => {
  const today = new Date(datetime.value);
  console.log(today);
};
</script>

<template>
  <q-page class="flex flex-center">
    <q-table
      v-model:pagination="pagination"
      v-model:selected="selected"
      selection="multiple"
      color="secondary"
      :loading="loading"
      :rows="dogs"
      :columns="columns"
      :rows-per-page-options="[]"
      row-key="email"
      @request="handleResult"
    >
      <template #header-selection="scope">
        <q-toggle v-model="scope.selected" />
      </template>
      <template #body-selection="scope">
        <q-toggle v-model="scope.selected" />
      </template>
      <template #loading>
        <q-inner-loading showing color="secondary" />
      </template>
      <template #top>
        <q-btn @click="printSelected" label="data" />
      </template>
    </q-table>
  </q-page>
</template>

<script setup>
import axios from 'axios';
import { ref, readonly } from 'vue';

const selected = ref();
const url = readonly('https://table.quasarcomponents.com/dogs');
const geturl = readonly(url + '/getschedule');
console.log(geturl);
const loading = ref(true);
const dogs = ref([]);
const pagination = ref({
  // sortBy: 'name',
  // descending: false,
  page: 1,
  rowsPerPage: 15,
  rowsNumber: 0,
});

const columns = [
  { name: 'name', label: 'name', field: 'name', align: 'left' },
  { name: 'age', label: 'age', field: 'age', align: 'center' },
  {
    name: 'email',
    label: 'email',
    field: 'email',
    align: 'left',
  },
];

const fetchDogs = (page = 0) => {
  axios
    .get(url, {
      params: { page: page },
    })
    .then((response) => {
      dogs.value = response.data.data;
      const meta = response.data.meta;

      pagination.value.page = meta.current_page;
      pagination.value.rowsPerPage = meta.per_page;
      pagination.value.rowsNumber = meta.total;
    })
    .finally(() => {
      loading.value = false;
    });
};

const handleResult = (props) => {
  loading.value = true;
  fetchDogs(props.pagination.page);
};

const printSelected = () => {
  console.log(selected.value);
};
fetchDogs();
</script>

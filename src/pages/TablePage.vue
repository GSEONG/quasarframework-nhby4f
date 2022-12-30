<template>
  <q-page class="flex flex-center">
    <q-table :rows="rows" :columns="columns" row-key="id">
      <template #body-cell-name="props">
        <q-td :props="props">
          <q-btn
            flat
            color="primary"
            :label="props.value"
            @click="copyToClipboard"
          />
        </q-td>
      </template>
      <template #body-cell-email="props">
        <q-td :props="props" class="text-secondary text-bold">
          {{ props.value }}
        </q-td>
      </template>
      <template #body-cell-delete="props">
        <q-td :props="props">
          <q-btn flat icon="delete" />
        </q-td>
      </template>
    </q-table>
    <q-table :rows="rows" :columns="columns" row-key="id">
      <template #header-cell="props">
        <q-th :props="props" class="text-primary">
          {{ props.col.label }}
        </q-th>
      </template>
      <template #body="props">
        <q-tr :props="props">
          <q-td key="name" :props="props">
            <q-input borderless dense v-model="props.row.name" />
          </q-td>
          <q-td key="email" :props="props">
            {{ props.row.email }}
          </q-td>
          <q-td key="age" :props="props">
            {{ props.row.age }}
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

const rows = ref([
  { id: 1, name: 'asdf', email: 'asad@asdas.com', age: 6 },
  { id: 2, name: 'zxcv', email: 'zxcv@asdas.com', age: 5 },
  { id: 3, name: 'rtyu', email: 'erty@asdas.com', age: 7 },
  { id: 4, name: 'fghj', email: 'fghj@asdas.com', age: 1 },
  { id: 5, name: 'vbnm', email: 'vbnm@asdas.com', age: 2 },
  { id: 6, name: 'zxcv', email: 'zxcv@asdas.com', age: 4 },
  { id: 7, name: 'zxcv', email: 'zxcv@asdas.com', age: 3 },
]);
const columns = ref([
  { label: 'name', field: 'name', name: 'name' },
  { label: 'email', field: 'email', name: 'email' },
  { label: 'age', field: 'age', name: 'age' },
  { label: 'delete', field: 'delete', name: 'delete', align: 'center' },
]);

const copyToClipboard = () => {};
</script>

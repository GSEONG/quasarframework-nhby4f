<template>
  <q-page class="flex flex-center column justify-between">
    <q-table
      dark
      :rows-per-page-options="[0]"
      hide-bottom
      separator="cell"
      dense
      :rows="rows"
      :columns="columns"
    />
    <q-table :rows="rows" :columns="columns2">
      <template #top>
        <strong>Expand Example</strong>
      </template>
      <template #body="props">
        <q-tr :props="props">
          <q-td>
            <q-btn
              flat
              round
              :icon="props.expand ? 'remove' : 'add'"
              @click="props.expand = !props.expand"
            />
          </q-td>
          <q-td key="id" :props="props">{{ props.row.id }}</q-td>
          <q-td key="name" :props="props">{{ props.row.name }}</q-td>
          <q-td key="email" :props="props">{{ props.row.email }}</q-td>
          <q-td key="age" :props="props">{{ props.row.age }}</q-td>
        </q-tr>
        <q-tr v-show="props.expand"> {{ props.row.description }} </q-tr>
      </template>
    </q-table>
    <q-table
      :rows="rows"
      row-key="id"
      v-model:selected="selected"
      selection="multiple"
      :columns="columns"
    >
      <template #top>
        <strong>Select Example</strong>
      </template>
      <template #bottom>
        <strong>This table is Select Example</strong>
      </template>
      <template #header-selection="scope">
        <q-toggle v-model="scope.selected" />
      </template>
      <template #body-selection="scope">
        <q-toggle v-model="scope.selected" />
      </template>
    </q-table>
    <pre>{{ selected }}</pre>
  </q-page>
</template>

<script setup>
import { ref } from 'vue';

const selected = ref();
const rows = [
  {
    id: 1,
    name: 'Panda',
    email: 'panda@chihuahua.com',
    age: 4,
    description: 'lorem lipsum',
  },
  {
    id: 2,
    name: 'Lily',
    email: 'lily@chihuahua.com',
    age: 5,
    description: 'asdjadoiwqjvknao',
  },
];
const columns = [
  {
    label: 'Id',
    field: 'id',
    name: 'id',
  },
  {
    label: 'Dog Name',
    field: 'name',
    name: 'name',
    align: 'left',
  },
  {
    label: 'Email',
    field: 'email',
    name: 'email',
  },
  {
    label: 'Age',
    field: 'age',
    name: 'age',
    align: 'center',
    format: (age) => `${age} years`,
  },
];
const columns2 = [
  {
    label: 'Expand',
    field: 'expand',
    name: 'expand',
  },
  {
    label: 'Id',
    field: 'id',
    name: 'id',
  },
  {
    label: 'Dog Name',
    field: 'name',
    name: 'name',
    align: 'left',
  },
  {
    label: 'Email',
    field: 'email',
    name: 'email',
  },
  {
    label: 'Age',
    field: 'age',
    name: 'age',
    align: 'center',
    format: (age) => `${age} years`,
  },
];
</script>

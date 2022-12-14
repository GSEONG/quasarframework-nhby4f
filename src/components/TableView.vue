<template>
  <q-table
    class="q-mt-xs"
    title="스트리밍 상태(채널: 1)"
    flat
    :rows="store.rows"
    :columns="store.columns"
    row-key="name"
    separator="vertical"
  />
</template>

<script setup>
import { useTableDataStore } from '../stores/tabledata';

const store = useTableDataStore();
</script>

<template>
  <div class="q-pa-md">
    <div class="q-gutter-sm">
      <q-radio
        v-for="item in valList"
        :key="item"
        v-model="shape"
        :val="item"
        :label="item"
      />
    </div>

    <div class="q-px-sm">
      Your selection is: <strong>{{ shape }}</strong>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const shape = ref('');
const props = defineProps(['valList']);
</script>

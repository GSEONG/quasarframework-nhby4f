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

<script setup lang="ts">
import { ref } from 'vue';

const shape = ref<string>('');
const props = defineProps(['valList']);

function changeName(name) {
  console.log(name);
}
</script>

<template>
  <q-page padding>
    <nav>
      <q-btn
        :color="onairColor"
        text-color="black"
        @click="changeCondition"
        label="OnAir"
      />
      <q-btn text-color="black" label="새로고침" />
      <q-btn text-color="black" label="설정" />
    </nav>
    <TableView />
  </q-page>
</template>

<script setup>
import { ref } from 'vue';
import TableView from 'components/TableView.vue';

const onairColor = ref('yellow');

const changeCondition = () => {
  // 작동 중일 때만!
  if (onairColor.value === 'yellow') {
    onairColor.value = 'red';
  } else {
    onairColor.value = 'yellow';
  }
};
</script>

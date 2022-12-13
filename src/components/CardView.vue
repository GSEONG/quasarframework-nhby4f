<template>
  <q-card>
    <q-card-section class="text-h5">
      <slot name="title"> 제목 </slot></q-card-section
    >
    <q-separator inset />
    <q-card-section>
      <slot>
        정당은 법률이 정하는 바에 의하여 국가의 보호를 받으며, 국가는 법률이
        정하는 바에 의하여 정당운영에 필요한 자금을 보조할 수 있다. 감사원의
        조직·직무범위·감사위원의 자격·감사대상공무원의 범위 기타 필요한 사항은
        법률로 정한다.
      </slot>
      <q-card-actions>
        <q-btn text-color="primary" color="black" @click="test">버튼1</q-btn>
        <q-btn flat>버튼2</q-btn>
        <q-input v-model="text" maxlength="10" type="text" label="이름">
          <template v-slot:before>😀</template>
          <template v-slot:append>⚽</template>
        </q-input>
      </q-card-actions>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from 'vue';
const test = (evt) => {
  alert(text.value);
};
const text = ref('');
</script>

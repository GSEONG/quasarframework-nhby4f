<template>
  <q-page padding :style-fn="myTweak" style="background: darkgreen">
    <div style="outline: auto">
      <CardView>
        <template #title>할 일</template>
        <template #default>
          <ul>
            <li>밥먹기</li>
            <li>아무것도 안하기1</li>
            <li>아무것도 안하기2</li>
            <li>아무것도 안하기3</li>
          </ul>
          <table class="myTable">
            <thead>
              <th>index</th>
              <th>제목</th>
              <th>내용</th>
            </thead>
            <tbody>
              <tr v-for="(item, idx) in store.getList" :key="idx">
                <td>{{ idx + 1 }}</td>
                <td>{{ item.title }}</td>
                <td>{{ item.content }}</td>
              </tr>
            </tbody>
          </table>
          <q-btn @click="showList" label="리스트 길이" />
        </template>
      </CardView>
    </div>
  </q-page>
</template>

<script setup>
import CardView from '../components/CardView.vue';
import { ref } from 'vue';
import { useCounterStore } from '../stores/showcase';

const store = useCounterStore();

function showList() {
  store.getListLength();
}
const myTweak = (offset) => {
  return {
    minHeight: offset ? `calc(100vh - ${offset}px)` : '100vh',
  };
};

// const todoList = ref([
//   {
//     title: '영상을 기반으로',
//     content: '영상을 기반으로 속도를 측정하는 방법 및 장치',
//   },
//   {
//     title: '중계 방송을 위한',
//     content: '중계 방송을 위한 야구 피칭 영상 제공 시스템',
//   },
//   {
//     title: '이벤트 장면',
//     content: '이벤트 장면 재구성 시스템',
//   },
//   {
//     title: '실시간 중계방송',
//     content: '실시간 중계방송을 위한 공 궤적 제공 시스템',
//   },
//   {
//     title: '야구경기 중계방송',
//     content: '야구경기 중계방송에서의 실시간 표출 시스템',
//   },
// ]);
</script>

<style scoped lang="scss">
.myTable {
  width: 100%;
  table,
  th,
  td {
    border: 1px solid black;
  }
}
</style>

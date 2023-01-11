import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
    todoList: [
      {
        title: '영상을 기반으로',
        content: '속도를 측정하는 방법',
      },
      {
        title: '중계 방송',
        content: '야구 피칭 영상',
      },
      {
        title: '이벤트',
        content: '장면 재구성',
      },
      {
        title: '실시간',
        content: '공 궤적',
      },
      {
        title: '야구경기',
        content: '실시간 시스템',
      },
      {
        title: '농구경기',
        content: '실시간 시스템',
      },
    ],
  }),

  getters: {
    doubleCount(state) {
      return state.counter * 2;
    },
    getList(state) {
      return state.todoList;
    },
  },

  actions: {
    increment() {
      this.counter++;
    },
    getListLength() {
      console.log(this.todoList.length);
    },
  },
});

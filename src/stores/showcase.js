import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
    todoList: [
      {
        title: '영상을 기반으로',
        content: '영상을 기반으로 속도를 측정하는 방법 및 장치',
      },
      {
        title: '중계 방송을 위한',
        content: '중계 방송을 위한 야구 피칭 영상 제공 시스템',
      },
      {
        title: '이벤트 장면',
        content: '이벤트 장면 재구성 시스템',
      },
      {
        title: '실시간 중계방송',
        content: '실시간 중계방송을 위한 공 궤적 제공 시스템',
      },
      {
        title: '야구경기 중계방송',
        content: '야구경기 중계방송에서의 실시간 표출 시스템',
      },
      {
        title: '농구경기 중계방송',
        content: '농구경기 중계방송에서의 실시간 표출 시스템',
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

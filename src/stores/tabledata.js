import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTableDataStore = defineStore('tabledata', {
  state: () => ({
    columns: [
      {
        name: 'title',
        required: true,
        label: '제목',
        align: 'left',
        field: (row) => row.title,
        format: (val) => `${val}`,
        sortable: false,
      },
      {
        name: 'datetime',
        label: '날짜',
        field: 'date',
      },
      {
        name: 'startTime',
        label: '시작시간',
        field: 'startTime',
      },
      { name: 'endTime', label: '종료시간', field: 'endTime' },
      {
        name: 'playTime',
        label: '재생시간',
        field: 'playTime',
      },
    ],
    rows: ref([
      {
        title: '명량',
        date: '2023-01-01',
        startTime: '12:00',
        endTime: '13:30',
        playTime: 4.0,
      },
      {
        title: '극한직업',
        date: '2023-01-01',
        startTime: '12:00',
        endTime: '13:30',
        playTime: 4.3,
      },
      {
        title: '신과함께-죄와 벌',
        date: '2023-01-01',
        startTime: '12:00',
        endTime: '13:30',
        playTime: 6.0,
      },
      {
        title: '국제시장',
        date: '2023-01-01',
        startTime: '12:00',
        endTime: '13:30',
        playTime: 4.3,
      },
      {
        title: '어벤져스: 엔드게임',
        date: '2023-01-01',
        startTime: '12:00',
        endTime: '13:30',
        playTime: 3.9,
      },
      {
        title: '겨울왕국 2',
        date: '2023-01-01',
        startTime: '12:00',
        endTime: '13:30',
        playTime: 0.0,
      },
      {
        title: '아바타',
        date: '2023-01-01',
        startTime: '12:00',
        endTime: '13:30',
        playTime: 0,
      },
      {
        title: '베테랑',
        date: '2023-01-01',
        startTime: '12:00',
        endTime: '13:30',
        playTime: 6.5,
      },
      {
        title: '괴물',
        date: '2023-01-01',
        startTime: '12:00',
        endTime: '13:30',
        playTime: 4.9,
      },
      {
        title: '도둑들',
        date: '2023-01-01',
        startTime: '12:00',
        endTime: '13:30',
        playTime: 7,
      },
      {
        title: '7번방의 선물',
        date: '2023-01-01',
        startTime: '12:00',
        endTime: '13:30',
        playTime: 7,
      },
    ]),
  }),

  getters: {},

  actions: {},
});

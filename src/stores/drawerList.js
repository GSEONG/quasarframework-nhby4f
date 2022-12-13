import { defineStore } from 'pinia';

export const useDrawerStore = defineStore('drawer', {
  state: () => ({
    essentialLinks: [
      {
        title: '메인',
        caption: '메인화면으로',
        icon: 'home',
        link: '/index',
      },
      {
        title: '프로필',
        caption: '프로필 페이지',
        icon: 'person',
        link: '/profile',
      },
      {
        title: '할 일',
        caption: '할 일 목록 페이지',
        icon: 'checklist',
        link: '/grid',
      },
      {
        title: '스트리밍',
        caption: '스트리밍 상태',
        icon: 'stream',
        link: '/stream',
      },
      {
        title: '검색',
        caption: '검색 페이지',
        icon: 'search',
        link: '/search',
      },
      {
        title: '편집',
        caption: '스케줄 편집 페이지',
        icon: 'edit',
        link: '/edit',
      },
      {
        title: '로그아웃',
        caption: '로그아웃',
        icon: 'logout',
        link: '/login',
      },
    ],
  }),

  getters: {},

  actions: {},
});

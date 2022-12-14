const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),

    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('pages/IndexPage.vue'),
      },
      {
        path: '/grid',
        name: 'grid',
        component: () => import('pages/GridPage.vue'),
      },
      {
        path: '/profile',
        name: 'profile',
        component: () => import('pages/ProfilePage.vue'),
      },
      {
        path: '/stream',
        name: 'stream',
        component: () => import('pages/StreamPage.vue'),
      },
      {
        path: '/search',
        name: 'search',
        component: () => import('pages/SearchPage.vue'),
      },
      {
        path: '/edit',
        name: 'edit',
        component: () => import('pages/EditPage.vue'),
      },
      {
        path: '/table',
        name: 'table',
        component: () => import('pages/TablePage.vue'),
      },
      {
        path: '/table2',
        name: 'table2',
        component: () => import('pages/TableBasicPage.vue'),
      },
      {
        path: '/table3',
        name: 'table3',
        component: () => import('pages/TableAdvancedPage.vue'),
      },
      {
        path: '/excel',
        name: 'excel',
        component: () => import('pages/ExcelPage.vue'),
      },
    ],
    // beforeEnter: (to, from, next) => {
    //   if (localStorage.getItem('test') !== null) {
    //     return next();
    //   }
    //   return next('/login');
    // },
  },
  {
    path: '/login',
    component: () => import('pages/LoginPage.vue'),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;

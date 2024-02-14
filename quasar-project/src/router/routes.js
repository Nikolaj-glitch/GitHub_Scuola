const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),

    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      {
        path: 'posts', // URL visto
        component: () => import('pages/PostsPage.vue') // pagina utilizzata
      },
      {
        path: 'posts/:id',
        component: () => import('pages/PostsPageId.vue')
      }
    ]

  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }

]

export default routes

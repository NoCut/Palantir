import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import CollectionsPage from '../views/CollectionsPage.vue';
import ErrorPage from '../views/ErrorPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/collections',
      redirect: '/collections/bm'
    },
    {
      path: '/bm',
      component: CollectionsPage,
      name: 'bm',
    },
    {
      path: '/qp',
      component: CollectionsPage,
      name: 'qp',
    },
    {
      path: '/ap',
      component: CollectionsPage,
      name: 'ap',
    },
    {
      path: '/peace',
      component: CollectionsPage,
      name: 'peace',
    },
    {
      path: '/404',
      name: '404',
      component: ErrorPage
    },
    {
      path: "/:catchAll(.*)",
      redirect: '/404'
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/vue3103',
    name: 'vue3103',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Vue3103View.vue'), // 불러올 파일
  },
  {
    path: '/vue3104',
    name: 'vue3104',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Vue3104View.vue'), // 불러올 파일
  },
  {
    path: '/vue3403',
    name: 'vue3403',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Vue3403View.vue'), // 불러올 파일
  },
  {
    path: '/Vue34ex',
    name: 'Vue34ex',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Vue34exView.vue'), // 불러올 파일
  },
  {
    path: '/Vue3501',
    name: 'Vue3501',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Vue3501View.vue'), // 불러올 파일
  },
  {
    path: '/Vue3701',
    name: 'Vue3701',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Vue3701View.vue'), // 불러올 파일
  },
  {
    path: '/Vue4301',
    name: 'Vue4301',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Page4301View.vue'), // 불러올 파일
  },
  {
    path: '/todo',
    name: 'todo',
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/TodoView.vue'), // 불러올 파일
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

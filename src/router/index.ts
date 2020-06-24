import Vue from 'vue';
// eslint-disable-next-line no-unused-vars
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'login',
    component: () => import('../pages/login.vue'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../pages/Dashboard.vue'),
  },
  {
    path: '/ViewArticle',
    component: () => import('../pages/ViewArticle.vue'),
    name: 'ViewArticle',
    meta: {
      title: 'ViewArticle',
      icon: 'form',
    },
  },
  {
    path: '/create',
    component: () => import('../pages/create.vue'),
    name: 'CreateArticle',
    meta: {
      title: 'Create Article',
      icon: 'edit',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

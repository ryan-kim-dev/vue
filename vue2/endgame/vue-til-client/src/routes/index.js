import Vue from 'vue';
import VueRouter from 'vue-router';
// dynamic import 하였으므로 불필요한 import
// import LoginPage from '@/views/LoginPage';
// import SignupPage from '@/views/SignupPage';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      component: () => import('@/views/LoginPage.vue'),
    },
    {
      path: '/signup',
      component: () => import('@/views/SignupPage.vue'),
    },
    {
      path: '/main',
      component: () => import('@/views/MainPage.vue'),
    },
    {
      path: '*',
      component: () => import('@/views/NotFoundPage.vue'),
    },
  ],
});

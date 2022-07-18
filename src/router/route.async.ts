// 需要鉴权的业务路由
import { RouteRecordRaw } from 'vue-router';

const asyncRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '',
      icon: '',
    },
    component: () => import('@/views/home/index.vue'),
    children: [
      {
        path: '/test1',
        name: 'test1',
        meta: {
          title: '',
          icon: '',
        },
        component: () => import('@/views/test/testMainPage1.vue'),
      },
      {
        path: '/test2',
        name: 'test2',
        meta: {
          title: '',
          icon: '',
        },
        component: () => import('@/views/test/testMainPage2.vue'),
      },
      {
        path: '/test3',
        name: 'test3',
        meta: {
          title: '',
          icon: '',
        },
        component: () => import('@/views/test/testMainPage3.vue'),
      },
      {
        path: '/test4',
        name: 'test4',
        meta: {
          title: '',
          icon: '',
        },
        component: () => import('@/views/test/testMainPage4.vue'),
      },
    ],
  },
];

export default asyncRoutes;

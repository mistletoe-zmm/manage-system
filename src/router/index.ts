import { createWebHashHistory, createRouter, RouteRecordRaw } from 'vue-router';
import { useUserStore } from '@/stores/user';

import layouts from '@/layouts/index.vue';
import login from '@/views/login/index.vue';
import HomeIndex from '@/views/home/index.vue';

import { getMenu } from '@/api/system';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: layouts,
    children: [
      {
        path: '/index',
        component: HomeIndex
      }
    ]
  },
  {
    path: '/login',
    component: login
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

// const data = [{
//   path:'/'
// }]

const handleMenu = async () => {
  const userStore = useUserStore();
  if (userStore.menuList?.length) {
    return;
  }
  userStore.getUserMenus();
};

const isAuthenticated = true;
router.beforeEach(to => {
  // 未登陆 跳转至登录页
  if (to.name !== 'Login' && !isAuthenticated) {
    return { name: 'Login' };
  }
  handleMenu();
});
export default router;

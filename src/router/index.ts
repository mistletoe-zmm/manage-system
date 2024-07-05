import { createWebHashHistory, createRouter, RouteRecordRaw } from 'vue-router';

import layouts from '@/layouts/index.vue';

import { test } from '@/api/system';

const routes: Array<RouteRecordRaw> = [{ path: '/', component: layouts }];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

// const data = [{
//   path:'/'
// }]

const handleMenu = async () => {
  test().then(res => {
    console.log('res', res);
    localStorage.setItem('menu', JSON.stringify(res.data));
  });
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

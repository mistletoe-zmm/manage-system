import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Menu, UserInfo } from '@/types/user';
import systemApi from '@/api/system';
import { AxiosResponse } from 'axios';

export const useUserStore = defineStore('user', () => {
  const userInfo = ref<UserInfo | null>();
  const menuList = ref<any>();

  // 重置
  function $reset() {
    userInfo.value = null;
  }
  // 获取用户信息
  async function getUserInfo() {
    const res = await systemApi.getUserInfo();
    console.log('🚀 ~ getUserInfo ~ res:', res);
  }
  // 用户菜单
  async function getUserMenus() {
    const res = await systemApi.getMenu();
    menuList.value = res;
    console.log('🚀 ~ getUserMenus ~ res:', res);
  }
  return { userInfo, menuList, getUserMenus };
});

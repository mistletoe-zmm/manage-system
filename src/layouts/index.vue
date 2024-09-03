<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="common-layout">
    <el-container style="height: 100%">
      <el-header>Header</el-header>
      <el-container style="overflow: hidden">
        <el-aside width="200px">
          <el-menu
            class="menu-container"
            default-active="2"
            @close="handleClose"
            @open="handleOpen"
            @select="selectMenu"
          >
            <template v-for="item in menuData">
              <el-sub-menu v-if="item.children.length" :index="item.id" :key="item.id">
                <template #title>
                  <el-icon v-if="item.icon">
                    <component :is="item.icon" />
                  </el-icon>
                  <span>{{ item.title }}</span>
                </template>
                <el-menu-item v-for="a in item.children" :index="a.path" :key="a.id">
                  {{ a.title }}
                </el-menu-item>
              </el-sub-menu>
              <el-menu-item v-else :index="item.path">
                <el-icon v-if="item.icon">
                  <component :is="item.icon" />
                </el-icon>
                <span>{{ item.title }}</span>
              </el-menu-item>
            </template>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '@/stores/user';

const router = useRouter();
const userStore = useUserStore();

const handleClose = (key: string, keyPath: string[]) => {
  console.log('close', key, keyPath);
};

const handleOpen = (key: string, keyPath: string[]) => {
  console.log('open', key, keyPath);
};

const selectMenu = (key: string) => {
  router.push({ path: key });
};
const menuData = computed(() => {
  return userStore.menuList;
});
</script>

<style scoped>
.common-layout {
  width: 100%;
  height: 100%;
  overflow: hidden;

  .menu-container {
    height: 100%;
  }
}
</style>

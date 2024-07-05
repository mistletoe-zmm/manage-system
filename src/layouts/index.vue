<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="common-layout">
    <el-container style="height: 100%">
      <el-header>Header</el-header>
      <el-container style="overflow: hidden">
        <el-aside width="200px">
          <el-menu
            default-active="2"
            class="menu-container"
            @open="handleOpen"
            @close="handleClose"
          >
            <template v-for="item in menuData">
              <el-sub-menu v-if="item.children.length" :index="item.id">
                <template #title>
                  <el-icon><location /></el-icon>
                  <span>{{ item.title }}</span>
                </template>
                <el-menu-item :index="a.id" v-for="a in item.children">{{ a.title }}</el-menu-item>
              </el-sub-menu>
              <el-menu-item v-else :index="item.id">
                <el-icon><location /></el-icon>
                <span>{{ item.title }}</span>
              </el-menu-item>
            </template>
          </el-menu>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { Document, Menu as IconMenu, Location, Setting } from '@element-plus/icons-vue';
import { onMounted, ref } from 'vue';

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};

const menuData = ref([]);

onMounted(() => {
  menuData.value = JSON.parse(localStorage.getItem('menu'));
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

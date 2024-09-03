<!-- 登录页 -->

<template>
  <div>
    <el-form :model="form" label-width="auto" style="max-width: 600px">
      <el-form-item label="用户名">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const form = reactive({
  name: '',
  password: ''
});

// 登陆
const login = () => {};
</script>

<style scoped lang="less"></style>

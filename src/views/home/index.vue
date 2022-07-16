<template>
  <el-container class="h-full border border-solid border-red-700">
    <el-aside class="overflow-hidden">
      <SideBar></SideBar>
    </el-aside>
    <el-container>
      <el-header>
        <HeaderBar></HeaderBar>
      </el-header>
      <el-main>
        <MainPage></MainPage>
      </el-main>
      <el-footer>
        <TheFooter></TheFooter>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import HeaderBar from '../layout/header/HeaderBar.vue';
import SideBar from '../layout/sider/SideBar.vue';
import MainPage from '../layout/main/MainPage.vue';
</script>

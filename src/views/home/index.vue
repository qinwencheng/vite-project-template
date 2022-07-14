<template>

  <el-container class="h-full border border-solid border-red-700">
    <el-aside>
      <Sider></Sider>
    </el-aside>
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>Main</el-main>
      <el-footer>
        <TheFooter></TheFooter>
      </el-footer>
    </el-container>
  </el-container>

</template>

<script setup lang="ts">
import Header from "../layout/header/header.vue";
import Sider from "../layout/sider/sider.vue";
</script>

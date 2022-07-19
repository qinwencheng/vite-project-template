<template>
  <h5 class="mb-2" @click="ck">开关</h5>
  <el-scrollbar view-class="h-full">
    <el-menu :collapse="isCollapse" class="h-full" router @open="handleOpen" @close="handleClose">
      <template v-for="item in routerList">
        <el-menu-item :index="item.path">
          <span>{{ item.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script setup lang="ts">
import router from '@/router';

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const [isCollapse, toggle] = useToggle();
const ck = () => {
  toggle();
};
const routerList = router.getRoutes();
</script>

<style scoped></style>

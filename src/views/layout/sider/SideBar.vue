<template>
  <h5 class="mb-2" @click="ck">开关</h5>
  <el-scrollbar view-class="h-full">
    <el-menu :collapse="isCollapse" class="h-full" router @open="handleOpen" @close="handleClose">
      <el-menu-item index="/test1">
        <span>Navigator One</span>
      </el-menu-item>
      <el-menu-item index="/test2">
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="/test3">
        <span>Navigator Three</span>
      </el-menu-item>
      <el-menu-item index="/test4">
        <span>Navigator Four</span>
      </el-menu-item>
    </el-menu>
  </el-scrollbar>
</template>

<script setup lang="ts">
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
</script>

<style scoped></style>

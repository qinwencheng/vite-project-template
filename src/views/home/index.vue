<template>
  <div class="container max-w-3xl mx-auto mt-40">
    <div class="h-60 mb-8">
      <div class="w-52 h-52 mx-auto mb-4"><vitecamp class="w-52 h-52"></vitecamp></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import vitecamp from '@/assets/svg/vitecamp.svg?component';

ElMessage.info({ message: 'welcome', duration: 1000 });
</script>

<style lang="scss" scoped>
a {
  @apply text-sky-400 hover:(text-sky-600) transition-all ease-out duration-100;
}
</style>

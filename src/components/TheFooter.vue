<template>
  <div class="text-center">
    <el-tooltip :content="isDark ?  'change light' :  'change dark' " placement="top">
      <button class="icon-btn mx-2 !outline-none" @click="toggleDark()">
        <i-ph-cloud-moon-bold v-if="isDark" class="icon-footer" />
        <i-ph-sun-horizon-bold v-else class="icon-footer" />
      </button>
    </el-tooltip>
  </div>
</template>

<script setup lang="ts">
import { isDark, toggleDark } from '@/utils/dark';
</script>

<style lang="scss">
.icon-footer {
  font-size: 1.3em;
}
</style>

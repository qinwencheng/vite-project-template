<template>
  <span class="w-full">1</span>
  <span class="w-full">1</span>
  <div class="demo-input-suffix">
    <el-row :gutter="20">
      <span class="ml-3 w-35 text-gray-600 inline-flex items-center">Using attributes</span>
      <el-input v-model="input1" class="w-50 m-2" placeholder="Pick a date" />
      <el-input v-model="input2" class="w-50 m-2" placeholder="Type something" />
    </el-row>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const input1 = ref('')
const input2 = ref('')
</script>

<template>
  <div class="tablePanel h-[95%]">
    <el-table :data="tableData" border width="100%" height="95%" table-layout="auto">
      <template v-for="item in columnData" :key="item.x">
        <el-table-column :prop="item.x" :label="item.x" />
      </template>
    </el-table>
  </div>

  <div class="h-[5%]">
    <el-pagination layout="prev, pager, next" :total="50" />
  </div>
</template>

<script lang="ts" setup>
import { getShowData } from './mockData';

const metaData = getShowData();
const codeInfosData = metaData.codeInfos;
const columnData = Object.keys(codeInfosData[0]).map((x) => {
  return { x };
});
const tableData = [
  ...codeInfosData,
  ...codeInfosData,
  ...codeInfosData,
  ...codeInfosData,
  ...codeInfosData,
  ...codeInfosData,
  ...codeInfosData,
  ...codeInfosData,
  ...codeInfosData,
  ...codeInfosData,
  ...codeInfosData,
  ...codeInfosData,
  ...codeInfosData,
  ...codeInfosData,
];
</script>
<style scoped>
.el-table :deep(.cell) {
  white-space: pre;
}
</style>

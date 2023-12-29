<script setup>
// 接受父组件的 参数
import { defineProps } from "vue";
defineProps({
  // 组件名字，父组件中定义的
  // 组件类型，导航栏的数据类型
  message: String,
});
</script>

<template>
  <div>
    {{ message }}
  </div>
</template>

<style scoped>
</style>

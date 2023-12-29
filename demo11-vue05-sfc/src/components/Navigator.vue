<script setup>
// 向父组件发送参数
// defineEmits用于定义向父组件提交数据的事件以及正式的提交数据
import { defineEmits } from "vue";
// 定义一个向父组件提交数据的事件，事件的名称自定义
const emits = defineEmits(["sendMenu"]);
// 触发事件，向父容器发送数据
function send(data) {
  emits("sendMenu", data);
}
</script>

<template>
  <div>
    <ul>
      <li @click="send('学员管理')">学员管理</li>
      <li @click="send('图书管理')">图书管理</li>
      <li @click="send('请假管理')">请假管理</li>
      <li @click="send('考试管理')">考试管理</li>
      <li @click="send('讲师管理')">讲师管理</li>
    </ul>
  </div>
</template>

<style scoped>
</style>

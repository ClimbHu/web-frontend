<script setup>
import request from "./axios";
import { reactive } from "vue";

let message = reactive({
  code: 1,
  content: "余生很长，想和你没完没了",
});

function getLoveWords() {
  let promise = request.post("api/rand.qinghua?format=json");
  return promise;
}

// 使用axios发送请求获取土味情话
async function getLoveMessage() {
  let { data } = await getLoveWords();
  Object.assign(message, data);
}
</script>

<template>
  <div>
    <h1 v-text="message.content"></h1>
    <button @click="getLoveMessage()">土味情话</button>
  </div>
</template>

<style scoped>
</style>

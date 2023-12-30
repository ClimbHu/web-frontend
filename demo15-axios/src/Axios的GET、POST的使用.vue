<script setup>
import axios from "axios";
import { reactive } from "vue";

let message = reactive({
  code: 1,
  content: "余生很长，想和你没完没了",
});

function getLoveWords() {
  // 发送get请求的方法
  // return axios.get(url)
  // return axios.get(url,{请求的其它参数})
  // return axios.get(url,{params:{键值对参数}，headers:{设置一些特殊的请求头}})
  // return axios.post(url,{要放入请求体中的JSON串},{请求的其它参数})

  // return axios.get("https://api.uomg.com/api/rand.qinghua")
  // return axios.get("https://api.uomg.com/api/rand.qinghua", {
  //   params: {
  //     format: "json",
  //     username: "zhangsan",
  //     userPwd: "lisi",
  //   },
  //   headers: {
  //     Accept:"application/json, text/plain, text/html, */*"
  //   },
  // });

  // return axios.post(
  //   "https://api.uomg.com/api/rand.qinghua",
  //   {
  //     username: "zhangsan",
  //     userPwd: "lisi",
  //   },
  //   {
  //     params: {
  //       format: "json",
  //     },
  //     headers: {
  //       Accept: "application/json, text/plain, text/html, */*",
  //     },
  //   }
  // );

  return axios.post("https://api.uomg.com/api/rand.qinghua?format=json");
}

// 使用axios发送请求获取土味情话
async function getLoveMessage() {
  let { data } = await getLoveWords();
  Object.assign(message, data);

  /*   let response = await getLoveWords();
  Object.assign(message, response.data) */

  // 简化为上述代码
  /* let promise = getLoveWords();
  promise.then(function (response) {
    Object.assign(message, response.data);
  }); */
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

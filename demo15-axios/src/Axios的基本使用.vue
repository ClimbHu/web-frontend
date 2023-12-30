<script setup>
import axios from "axios";
import { reactive } from "vue";

let message = reactive({
  code: 1,
  content: "余生很长，想和你没完没了",
});

// 使用axios发送请求获取土味情话
function getLoveMessage() {
  // axios({设置请求的参数})  请求三要求  1 请求的url   2 请求的方式    3 请求的参数 键值对 json ...
  let promise = axios({
    method: "get",
    url: "https://api.uomg.com/api/rand.qinghua",
    data: {
      // 这里的数据会放入请求体中 前提是请求方式为 post
      format: "json",
      username: "lisi",
    },
    params: {
      // 都是以键值对方式将数据放入url后
      format: "json",
      username: "zhangsan",
    },
  });

  promise
    .then(function (response) {
      // console.log(response);
      /* 
      response 响应结果对象
        data  服务端响应回来的数据
        status 响应状态码 200
        statusText 响应状态描述 ok
        header 本次响应的所有响应头
        config 本次请求的配置信息
        request 本次请求发送时所使用XMLHttpRequest对象
      */

      // console.log(response.data);
      // console.log(response.data.code);
      // console.log(response.data);
      Object.assign(message, response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
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

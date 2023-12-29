<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

let router = useRouter();

let username = ref("");
let password = ref("");

function login() {
  // 获取用户名和密码 校验 用户名如果是root并且密码是123456 则登录成功
  // 登录成功泽东自动跳转到 /home
  // 登录失败，不跳转页面 提示
  if (username.value == "root" && password.value == "123456") {
    // 将用户名保存在浏览器上   sessionStorage  localStorage
    window.sessionStorage.setItem("username", username.value);
    // 路径跳转
    router.push("/home");
  } else {
    alert("用户名或密码错误");
  }
}
</script>

<template>
  <div>
    账号：<input type="text" v-model="username" /><br />
    密码：<input type="password" v-model="password" /><br />
    <button @click="login()">登录</button><br />
  </div>
</template>

<style scoped>
</style>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

let router = useRouter();

// 响应式用户名
// let username = ref("");
// username.value = sessionStorage.getItem("username");

let username = window.sessionStorage.getItem("username");

function logout() {
  // 清除sessionStorage中的用户登录的信息
  window.sessionStorage.removeItem("username");
  // 跳转至login页面
  router.push("/login");
}
</script>

<template>
  <div>
    <h1>home</h1>
    <h3>欢迎 {{ username }} 登录</h3>
    <button @click="logout()">退出登录</button>
  </div>
</template>

<style scoped>
</style>

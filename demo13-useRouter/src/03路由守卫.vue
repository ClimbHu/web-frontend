<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
//创建动态路由对象
let router = useRouter();

let myPath = ref("");
/* function showList() {
  // 编程式路由实现页面跳转
  // 直接push一个路径
  //router.push('/list')
  // push一个带有path属性的对象
  router.push({ path: "/list" });
} */

function goMyPage() {
  router.push(myPath.value);
}
</script>

<template>
  <div>
    <!-- 声明式路由 -->
    <router-link to="/home">home</router-link><br />
    <router-link to="/list">list</router-link><br />
    <router-link to="/add">add</router-link><br />
    <router-link to="/update">update</router-link><br />
    <!-- 编程式路由 -->
    <button @click="goMyPage()">Go</button><input type="text" v-model="myPath" />
    <hr />
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>

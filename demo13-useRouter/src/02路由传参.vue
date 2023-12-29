<script setup>
import { useRouter } from "vue-router";

//创建动态路由对象
let router = useRouter();
// 编程式路由路径传参
function showDetail(id, language) {
  // router.push(`/showDetail/${id}/${language}`);
  router.push({ path: `/showDetail/${id}/${language}` });
}
// 编程式路由键值对传参
function showDetail2(param_id, param_language) {
  // router.push(`/showDetail2?id=${id}&language=${language}`)
  /*uri键值对参数,需要使用query */
  // router.push({}) push中可以传递一个对象
  router.push({ path: "/showDetail2", query: { id: param_id, language: param_language } });
};


</script>

<template>
  <div>
    <router-link to="/showDetail/1/java">声明式路由路径传参</router-link>
    <button @click="showDetail(2, 'PHP')">编程式路由路径传参</button>
    <hr />
    <router-link to="/showDetail2?id=1&language=java">声明式路由键值对传参</router-link>
    <!-- v-bind:to会被转换成上述路径 -->
    <router-link v-bind:to="{path:'/showDetail2',query:{id:3,language:'C++'}}">声明式路由键值对传参</router-link>
    <button @click="showDetail2(4, 'Python')">编程式路由键值对传参</button>
    <br />
    <router-view></router-view>
  </div>
</template>

<style scoped>
</style>

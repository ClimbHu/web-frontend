<script setup>
import { ref } from "vue";
/* 
事件的绑定
v-on:事件名称="函数名()"
v-on:事件名可以简写为 @事件名
原生js的事件名是 on***  onclick ondbclick onblur onfocus
vue中的事件名去掉on     click   dbclick   blur   focus
*/
function fun1() {
  alert("hi");
}
let counter = ref(1);
function fun2() {
  counter.value++;
}
function fun3(event) {
  let flag = confirm("确定要访问目标资源吗");
  if (!flag) {
    // 原生js编码方式组织组件的默认行为
    event.preventDefault();
  }
}
function fun4() {
  alert("超链接被点击了");
}
</script>

<template>
  <div>
    <!-- 事件的绑定函数 -->
    <button v-on:click="fun1()">hello</button>
    <button v-on:click="fun2()">+</button>
    <!-- 内联事件处理器 -->
    <button v-on:click="counter++">+</button>
    <!-- 事件的修饰符 .once 事件只绑定一次  -->
    <button v-on:click.once="counter++">+</button>
    <br />
    <h1>count的值是：{{ counter }}</h1>
    <br />
    <a href="http://www.atguigu.com" v-on:click="fun3($event)">尚硅谷</a><br>
    <!-- prevent 修饰符阻止组件的默认行为 -->
    <a href="http://www.atguigu.com" v-on:click.prevent="fun4()">尚硅谷</a>
  </div>
</template>

<style scoped>
</style>

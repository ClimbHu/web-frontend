<script setup>
/* 
属性渲染命令
v-bind 将数据绑定到元素的属性上
v-bind:属性名='数据名'，可以简写为 :属性名='数据名'
*/
let data = {
  name: "尚硅谷",
  logoUrl: "http://www.atguigu.com/images/index_new/logo.png",
  uri: "http://www.atguigu.com/",
};
</script>

<template>
  <div>
    <a v-bind:href="data.uri">
      <img v-bind:src="data.logoUrl" :title="data.name" />
    </a>
  </div>
</template>

<style scoped>
</style>

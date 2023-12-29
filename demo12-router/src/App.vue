<script setup>

</script>

<template>
  <div>
    App 开头的内容
    <br>
    <router-link to="/home">home页</router-link><br>
    <router-link to="/list">list页</router-link><br>
    <router-link to="/add">add页</router-link><br>
    <router-link to="/update">update页</router-link><br>
    <router-link to="/showAll">showAll页</router-link><br>
    <hr>
    <!-- 该标签会被替换成具体的.vue
         一个视图上是可以同时存在多个rouuter-view
         每个router-view 都可以设置专门把用于展示哪个组件
    -->
    <router-view></router-view>
    <!-- 一般来说，一个.vue几乎只会用一个router-view标签就可以满足99%的业务要求 -->
    <hr>
    home页<router-view name="homeView"></router-view>
    <hr>
    list页<router-view name="listView"></router-view>
    <hr>
    add页<router-view name="addView"></router-view>
    <hr>
    update页<router-view name="updateView"></router-view>
    
    <hr>
    App 结尾的内容
  </div>
</template>

<style scoped>
</style>

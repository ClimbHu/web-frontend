<script setup>
// 导入pinia数据
import { definePerson } from "../store/store";
let person = definePerson();
</script>

<template>
  <div>
    <h1>用于修改pinia数据</h1>
    名字：<input type="text" v-model="person.username"><br>
    年龄：<input type="text" v-model="person.age"><br>
    <span>{{ person.getAge }}</span><br>
    爱好：
      吃饭<input type="checkbox" value="吃饭" v-model="person.hobbies">
      睡觉<input type="checkbox" value="睡觉" v-model="person.hobbies">
      打豆豆<input type="checkbox" value="打豆豆" v-model="person.hobbies">
      唱歌<input type="checkbox" value="唱歌" v-model="person.hobbies">
      跳舞<input type="checkbox" value="跳舞" v-model="person.hobbies">
      <br>
      <button @click="person.doubleAge()">年龄加倍</button><br>
      <!-- 恢复默认值 -->
      <button @click="person.$reset">恢复默认</button>
      <!-- 一次性修改多个属性值 -->
      <button @click="person.$patch({username:'奥特曼',age:20,hobbies:['晒太阳','打怪兽']})">变身奥特曼</button>
    <hr>
    展示一下person中的数据  {{ person }}
  </div>
</template>

<style scoped>
</style>

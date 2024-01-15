<script setup>
// 导入pinia数据
import { definePerson } from "../store/store";
let person = definePerson();
</script>

<template>
  <div>
    <h1>用于展示pinia数据</h1>
    读取姓名：{{ person.username }} <br />
    读取年龄：{{ person.age }} <br />
    通过get年龄：{{ person.getAge }} <br />
    爱好数量：{{ person.getHobbiesCount }} <br />
    所有的爱好：
    <ul>
      <li
        v-for="(hobby, index) in person.hobbies"
        :key="index"
        v-text="hobby"
      ></li>
    </ul>
  </div>
</template>

<style scoped>
</style>

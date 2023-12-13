<script setup>
import { reactive, ref } from "vue";

/* 
单项绑定  v-bind  响应式数据发生变化时，更新dom树 用户的操作造成页面内容的改变不会影响响应式数据
双向绑定  v-model 页面上的数据由于用户的操作造成了改变，也会同步修改对应的响应式数据
            双向绑定一般都用于表单标签
            双向绑定也有人称为收集表单信息的命令
            v-model:value="数据" 一般都省略:value 直接写为：v-model="数据"
*/

let message = ref("张三");

let user = reactive({
  username: "",
  userPwd: "",
  intro: "",
  pro: "",
});

let hobby = ref([]);

let clearForm = function () {
  user.username = "";
  user.userPwd = "";
  user.intro = "";
  user.pro = "";
  hobby.value.splice(0, hobby.value.length);
};
</script>

<template>
  <div>
    <input type="text" v-model="user.username" /><br />
    <input type="password" v-model="user.userPwd" /><br />

    爱好 复选框： 唱 <input type="checkbox" v-model="hobby" value="sing" /> 跳
    <input type="checkbox" v-model="hobby" value="dance" /> rap
    <input type="checkbox" v-model="hobby" value="rap" />
    <hr />
    <!-- 爱好 单选框：
    唱  <input type="radio" name="hobbies" v-model="hobby" value="sing">
    跳  <input type="radio" name="hobbies" v-model="hobby" value="dance">
    rap  <input type="radio" name="hobbies" v-model="hobby" value="rap"> <br> -->
    简介：<textarea v-model="user.intro"></textarea><br />
    籍贯：
    <select v-model="user.pro">
      <option value="1">京</option>
      <option value="2">津</option>
      <option value="3">冀</option>
    </select>
    <br />
    <button @click="clearForm()">清空</button>

    <br />
    {{ user }}
    <br />
    {{ hobby }}
    <!-- <input type="text" v-bind:value="message"> -->
    <!-- <input type="text" v-model="message">
    <br>
    {{ message }} -->
  </div>
</template>

<style scoped>
</style>

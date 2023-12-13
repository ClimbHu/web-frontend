<script setup>
import { ref, reactive, toRef, toRefs } from "vue";
/* 
让一个普通数据转换为响应式数据 两种方式
  1 ref函数       更适合单个变量
      在script标签中，操作ref的响应式数据需要通过 .value 的形式操作
      在template标签中，操作ref的响应式数据，无需使用 .value
  2 reactive函数  更适合对象
      在script template 操作reactive响应式数据都直接使用对象名.属性名的方式即可
*/

let counter = ref(10);
let person = reactive({
  name: "",
  age: 10,
});
let p_age = toRef(person, "age");
function incrRefAge() {
  p_age.value++;
}

let { name, age } = toRefs(person);
function incrRefAge2() {
  age.value++;
}


function incrAge() {
  person.age++;
}
function incr() {
  counter.value++;
}
// toRef函数    将reactive响应式数据中的某个属性转换为ref响应式数据
// toRefs函数   同时将reactive响应式数据中的多个属性转换为ref响应式数据
</script>

<template>
  <div>
    <button @click="incr()">+</button>
    <button @click="counter++">+</button>
    {{ counter }}
    <hr />
    <button @click="incrAge()">+</button>
    <button @click="person.age++">+</button>
    <button @click="incrRefAge()">+</button>
    <button @click="incrRefAge2()">+</button>
    {{ person.age }}
    {{ p_age }}
    {{ age }}
  </div>
</template>

<style scoped>
</style>

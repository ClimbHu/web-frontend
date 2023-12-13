<script setup>
import { ref, reactive, watch, watchEffect } from "vue";

/* 
数据监听
*/
let fullname = ref("");
let firstname = ref("李");
let lastname = reactive({
  name: "小花",
});
// 任何的响应式数据，如果想监听，直接监听即可，无需将需要监听的响应式数据作为参数
watchEffect(() => {
  fullname.value = firstname.value + lastname.name;
});

// watch函数监听一个ref的响应式数据
/* watch(firstname, (newValue, oldValue) => {
    console.log(`${oldValue}变为${newValue}`)
    fullname.value = firstname.value + lastname.name;
}); */

// watch函数监听一个reactive的响应式数据 专门监听reactive响应式数据中的一个属性
/* watch(()=>lastname.name,(newValue, oldValue)=>{
    console.log(`${oldValue}变为${newValue}`)
    fullname.value = firstname.value + lastname.name;
}) */
// watch函数监听一个reactive的响应式数据 专门监听reactive响应式数据中的一个属性
/* watch(()=>lastname,(newValue, oldValue)=>{
    // newValue和newValue都一样，都是lastname
    // console.log(`${oldValue}变为${newValue}`)
    fullname.value = firstname.value + lastname.name;
},{deep:true,immediate:true}) */

</script>

<template>
  <div>
    姓：<input type="text" v-model="firstname" /> <br />
    名：<input type="text" v-model="lastname.name" /> <br />
    全名：{{ fullname }}
  </div>
</template>

<style scoped>
</style>

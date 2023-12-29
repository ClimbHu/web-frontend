<script setup>
import { ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated } from "vue";

// 挂载之前
onBeforeMount(() => {
  console.log("------------onBeforeMount--------------");
  console.log(document.getElementById("s1"));
});

// 挂载完成
onMounted(() => {
  console.log("------------onMounted--------------");
  console.log(document.getElementById("s1"));
});

// 更新之前
onBeforeUpdate(() => {
  console.log("------------onBeforeUpdate--------------");
  let ele = document.getElementById("s1");
  console.log(message.value, ele.innerText);
});

// 更新完成
onUpdated(() => {
  console.log("------------onUpdated--------------");
  let ele = document.getElementById("s1");
  console.log(message.value, ele.innerText);
});

let message = ref(1);
</script>

<template>
  <div>
    <span id="s1">{{ message }}</span>
    <br />
    <button @click="message++">changeMessage</button>
  </div>
</template>

<style scoped>
</style>

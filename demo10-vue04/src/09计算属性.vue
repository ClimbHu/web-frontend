<script setup>
import { computed, reactive } from "vue";

/* 
计算属性
*/

const author = reactive({
  name: "张三",
  books: ["java从入门到入土", "算法", "MySQL"],
});
// 通过方法返回数据，每使用一次，执行一次
function hasBooks() {
  console.log("hasBooks");
  return author.books.length > 0 ? "是" : "否";
}
// 通过计算属性获得数据 每次使用时都会和上次比较，如果数据没有变化，则直接使用上次的结果
let bookMessage = computed(() => {
  console.log("bookMessage");
  return author.books.length > 0 ? "是" : "否";
});
</script>

<template>
  <div>
    <p>作者：{{ author.name }}</p>
    是否出版过图书：{{ hasBooks() }}<br />
    是否出版过图书：{{ hasBooks() }}<br />
    是否出版过图书：{{ hasBooks() }}<br />
    是否出版过图书：{{ bookMessage }} <br />
    是否出版过图书：{{ bookMessage }} <br />
    是否出版过图书：{{ bookMessage }} <br />
  </div>
</template>

<style scoped>
</style>

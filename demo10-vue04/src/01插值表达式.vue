<script setup>
/* 插值表达式 语法 {{数据名字/函数/对象调用API}}*/
// 插值表达式不依赖标签，没有标签也可以单独使用
// 定义一些常见的类型的数据
let msg = "hello vue3";
function getMeg() {
  return "hello vue3 message";
}
let age = 19;
let bee = "蜜 蜂";
let carts = [
  { name: "可乐", price: "3", number: "10" },
  { name: "薯片", price: "6", number: "8" },
];
// 定义一个获得购物车商品总金额的一个方法
function compute() {
  let count = 0;
  for (let index in carts) {
    count += carts[index].price * carts[index].number;
  }
  return count;
}
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    msg的值为：{{ msg }} <br />
    <!-- 插值表达式中可以调用函数，将函数的返回值渲染到指定的位置 -->
    msg的值为：{{ getMeg() }} <br />
    <!-- 插值表达式支持一些常见的运算符 -->
    年龄：{{ age }}，是否成年：{{ age > 18 ? "是" : "否" }} <br />
    <!-- 插值表达式中支持对象调用一些API -->
    反转：{{ bee.split(" ").reverse().join("") }} <br />
    购物车总金额：{{ carts[0].price * carts[0].number + carts[1].price * carts[1].number }} <br />
    购物车总金额：{{ compute() }}
  </div>
</template>

<style scoped>
</style>

<script setup>
/* v-text   不能识别html结构的文本    innertTEXT
   v-html   识别文本中html代码的命令  innertHTML
  {{}}  插值表达式
  v-*** vue的指令 
  1 命令必须依赖标签，在开始标签中使用
*/
let msg = "hello vue3";
/* 命令支持字符串模版 */
let haha = "haha";
let msg2 = `hello ${haha}`;
/* 命令中支持常见的运算符 */
let age = 19;
/* 命令中支持常见对象的API的调用 */
let bee = "蜜 蜂";
let getMes = () => {
  return "hello";
};
let fontMes = () => {
  return "<font color='red'>你好</font>";
};
</script>

<template>
  <div>
    <h1 v-text="msg"></h1>
    <h1 v-text="msg2"></h1>
    <h1 v-text="`你好 ${haha}`"></h1>
    <h1 v-text="age > 18 ? '成年' : '未成年'"></h1>
    <h1 v-text="bee.split(' ').reverse().join('')"></h1>
    <h1 v-text="getMes()"></h1>
    <h1 v-text="fontMes()"></h1>
    <h1 v-html="fontMes()"></h1>
    <h1 v-html="`<font color='green'>${msg}</font>`"></h1>
  </div>
</template>

<style scoped>
</style>

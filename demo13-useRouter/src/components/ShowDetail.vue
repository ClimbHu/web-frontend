<script setup>
/* 接受传递过来的路径参数
  useRoute函数是用来接受参数的

  route.params表示路径参数
  route.query表示键值对参数
*/
import { useRoute } from "vue-router";
import { ref, onUpdated } from "vue";

let languageId = ref(0);
let languageName = ref("");

let route = useRoute();
languageId.value = route.params.id;
languageName.value = route.params.language;
onUpdated(() => {
  languageId.value = route.params.id;
  languageName.value = route.params.language;
});
</script>

<template>
  <div>
    <h1>ShowDetail接受路径参数</h1>
    <br />
    <h3>{{ languageId }}{{ languageName }}是世界上最好的语言</h3>
    <br />
  </div>
</template>

<style scoped>
</style>

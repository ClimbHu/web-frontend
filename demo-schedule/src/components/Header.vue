<script setup>

</script>

<template>
  <div>
    <h1 class="ht">欢迎使用日程管理系统</h1>
    <div>
      <div  class="optionDiv">
        <router-link to="/login">
          <button class="b1s">登录</button>
        </router-link>   
        <router-link to="/regist">
          <button class="b1s">注册</button>
        </router-link>
      </div>


      <div   class="optionDiv">
        欢迎xxx   
        <button class="b1b">退出登录</button> 
        <router-link to="/showSchedule">
          <button class="b1b">查看我的日程</button>
        </router-link>
      </div>

      <br>
    </div>
  </div>
</template>

<style scoped>
  .ht{
      text-align: center;
      color: cadetblue;
      font-family: 幼圆;
  }
  .b1s{
        border: 2px solid powderblue;
        border-radius: 4px;
        width:60px;
        background-color: antiquewhite;

    }

    .b1b{
        border: 2px solid powderblue;
        border-radius: 4px;
        width:100px;
        background-color: antiquewhite;
    }
    .optionDiv{
      width: 300px;
      float: right;
    }
</style>
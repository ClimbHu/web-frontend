<script setup>
import { ref, reactive } from "vue";

let registUser = reactive({
  username: "",
  userPwd: "",
});

let reUserPwd = ref("");
let usernameMsg = ref("");
let userPwdMsg = ref("");
let reUserPwdMsg = ref("");

function checkUsername() {
  // 定义正则
  let usernameReg = /^[a-zA-Z0-9]{5,10}$/;
  // 校验
  if (!usernameReg.test(registUser.username)) {
    // 格式有误
    usernameMsg.value = "格式有误";
    return false;
  }
  usernameMsg.value = "ok";
  return true;
}
function checkUserPwd() {
  // 定义正则
  let userPwdReg = /^[0-9]{6}$/;
  // 校验
  if (!userPwdReg.test(registUser.userPwd)) {
    // 格式有误
    userPwdMsg.value = "格式有误";
    return false;
  }
  userPwdMsg.value = "ok";
  return true;
}
function checkReUserPwd() {
  // 定义正则
  let reUserPwdReg = /^[0-9]{6}$/;
  // 校验
  if (!reUserPwdReg.test(reUserPwd.value)) {
    // 格式有误
    reUserPwdMsg.value = "格式有误";
    return false;
  }
  console.log(registUser.userPwd, reUserPwd.value);
  // 校验
  if (!(registUser.userPwd == reUserPwd.value)) {
    // if(!registUser.userPwd == reUserPwd.value) {
    alert("不一致");
    // 密码不一致
    reUserPwdMsg.value = "密码不一致";
    return false;
  }
  reUserPwdMsg.value = "ok";
  return true;
}
</script>

<template>
  <div>
    <h3 class="ht">请注册</h3>

    <table class="tab" cellspacing="0px">
      <tr class="ltr">
        <td>请输入账号</td>
        <td>
          <input
            class="ipt"
            id="usernameInput"
            type="text"
            name="username"
            v-model="registUser.username"
            @blur="checkUsername()"
          />
          <span id="usernameMsg" class="msg" v-text="usernameMsg"></span>
        </td>
      </tr>
      <tr class="ltr">
        <td>请输入密码</td>
        <td>
          <input
            class="ipt"
            id="userPwdInput"
            type="password"
            name="userPwd"
            v-model="registUser.userPwd"
            @blur="checkUserPwd()"
          />
          <span id="userPwdMsg" class="msg" v-text="userPwdMsg"></span>
        </td>
      </tr>
      <tr class="ltr">
        <td>确认密码</td>
        <td>
          <input
            class="ipt"
            id="reUserPwdInput"
            type="password"
            v-model="reUserPwd"
            @blur="checkReUserPwd()"
          />
          <span id="reUserPwdMsg" class="msg" v-text="reUserPwdMsg"></span>
        </td>
      </tr>
      <tr class="ltr">
        <td colspan="2" class="buttonContainer">
          <input class="btn1" type="button" value="注册" />
          <input class="btn1" type="button" value="重置" />
          <router-link to="/login">
            <button class="btn1">去登录</button>
          </router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
.ht {
  text-align: center;
  color: cadetblue;
  font-family: 幼圆;
}
.tab {
  width: 500px;
  border: 5px solid cadetblue;
  margin: 0px auto;
  border-radius: 5px;
  font-family: 幼圆;
}
.ltr td {
  border: 1px solid powderblue;
}
.ipt {
  border: 0px;
  width: 50%;
}
.btn1 {
  border: 2px solid powderblue;
  border-radius: 4px;
  width: 60px;
  background-color: antiquewhite;
}
.msg {
  color: gold;
}
.buttonContainer {
  text-align: center;
}
</style>
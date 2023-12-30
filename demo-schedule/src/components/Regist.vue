<script setup>
import { ref, reactive } from "vue";
// 导入发送请求的axios对象
import request from "../utils/request";
import { useRouter } from "vue-router";

const router = useRouter();

let registUser = reactive({
  username: "",
  userPwd: "",
});

let reUserPwd = ref("");
let usernameMsg = ref("");
let userPwdMsg = ref("");
let reUserPwdMsg = ref("");

async function checkUsername() {
  // 定义正则
  let usernameReg = /^[a-zA-Z0-9]{5,10}$/;
  // 校验
  if (!usernameReg.test(registUser.username)) {
    // 格式有误
    usernameMsg.value = "格式有误";
    return false;
  }
  // 校验用户名是否被占用
  // await后面的方法都会等待await方法执行完毕后，才会继续执行后续代码
  let { data } = await request.post(
    `user/checkUsernameUsed?username=${registUser.username}`
  );
  // console.log(data);
  // 判断业务码是否为200，200表示用户名可以使用，其他业务码表示用户名被占用
  if (data.code != 200) {
    usernameMsg.value = "用户名被占用";
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
  // console.log(registUser.userPwd, reUserPwd.value);
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

// 注册方法
async function regist() {
  // 校验所有输入框是否合法
  let flag1 = await checkUsername();
  let flag2 = await checkUserPwd();
  let flag3 = await checkReUserPwd();

  if (flag1 && flag2 && flag3) {
    // alert("校验通过，即将发送注册请求")
    let { data } = await request.post("user/regist", registUser);
    // console.log(data);
    if (data.code == 200) {
      // 注册成功，跳转至登录页
      alert("注册成功，快登录吧！");
      router.push("/login");
    } else {
      alert("抱歉，用户名被抢注了");
    }
  } else {
    alert("校验失败，请再次检查数据");
  }
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
          <input class="btn1" type="button" @click="regist()" value="注册" />
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
<template>
  <div class="login">
    <el-card class="box-card" shadow="always">
      <div class="title">智能立体仓库管理系统
      </div>
      <el-form ref="loginForm" :model="loginUser" :rules="rules" size="large" label-position="right" label-width="70px"
        style="width: 360px; margin: 0px auto">
        <el-form-item label="账号" prop="userCode">
          <el-input v-model="loginUser.userCode" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="userPwd">
          <el-input type="password" v-model="loginUser.userPwd" show-password placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input v-model="loginUser.code" placeholder="请输入验证码" style="display: inline-block; width: 150px;"></el-input>
          <el-image style="width: 110px; vertical-align: middle; margin-left: 15px;" :src="codeSrc" @click="getCaptcha"></el-image>
        </el-form-item>
        <el-form-item>
          <el-button @click="login" type="primary" size="large" style="width: 100%">登  录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { get, post, tip, setLocalToken, WAREHOUSE_CONTEXT_PATH } from "@/common";

const loginForm = ref();

const router = useRouter(); // 获取路由器

const loginUser = reactive({
  userCode: "admin",
  userPwd: "123456",
  code: "",
  uuid: ""
});
const codeSrc = ref();

// 获取验证码
const getCaptcha = async () => {
  const res = await get('/captchaImage')
  if(!res.success){
    return tip.error(res.msg)
  }
  codeSrc.value = res.data.img
  loginUser.uuid = res.data.uuid
}
getCaptcha()

const rules = reactive({
  userCode: [
    {
      required: true,
      message: "请输入账号！",
      trigger: "blur"
    },
  ],
  userPwd: [
    {
      required: true,
      message: "请输入密码！",
      trigger: "blur"
    },
  ],
  code: [
    {
      required: true,
      message: "请输入验证码！",
      trigger: "blur"
    }
  ]
});

// 登录
const login = () => {
  loginForm.value.validate(async valid => {
    if (valid) {
      // 向服务端发出post请求
      post("/login", loginUser).then(res => {
        // console.log(res)
        setLocalToken(res.data);  // 将令牌存于localStorage中
        tip.success("登录成功！");
        router.push({ path: "/home" }); // 通过路由导航到home页面
      }).catch(err => {
        // console.log(err)
        getCaptcha() // 重新加载验证码
      })
    }
  })
}

// 回车登录
window.onkeydown = ($event) => {
  if ($event.key && $event.key == 'Enter') {
    login();
  }
}
</script>


<style scoped>
.login {
  background-image: url("/login.jpg");
  background-size: 100% 100%;

  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;

  display: flex;
  justify-content: center;
  align-items: center;
}

.box-card {
  width: 450px;
  height: 380px;
  opacity: 0.92;
}

.title {
  padding: 20px 0px 30px 0px;
  text-align: center;
  color: #409eff;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 3px;
}
</style>

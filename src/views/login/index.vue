<template>
  <div class="login">
    <h2 class="login-title">饿了嘛</h2>
    <van-tabs v-model="active" @change='handleTabChange'>
      <van-tab title="注册">
        <LoginBox ref="registerBox" :userInfo='userInfo'>
          <van-button round block type="info" native-type="submit" color="#ef8247" @click="handleRegister">注册</van-button>
        </LoginBox>
      </van-tab>
      <van-tab title="登录">
        <LoginBox :userInfo='userInfo' @handleLogin='handleLogin' />
      </van-tab>
    </van-tabs>
    <ul class="text-account">
      <li class="text-account-item">测试账号：admin</li>
      <li class="text-account-item">测试密码：admin</li>
      <li class="text-account-item">注意：新注册账号信息会在关闭浏览器时清除</li>
    </ul>
  </div>
</template>

<script>
import LoginBox from './components/loginbox.vue'
import { userList } from '@/assets/data/login/index'
import { setItem, getItem } from '@/utils/storage'
export default {
  name: 'Login',
  components: {
    LoginBox
  },
  data () {
    return {
      active: 1,
      userInfo: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async handleLogin () {
      const relUserList = getItem('userList') || userList
      const flag = relUserList.some(item => (item.username === this.userInfo.username) && (item.password === this.userInfo.password))
      if (flag) {
        this.$toast('登录成功')
        setItem('isLogin', true)
        setItem('currentUser', this.userInfo)
        this.$router.push('/dashboard/home')
      } else {
        this.$toast('用户名或密码错误')
      }
    },
    async handleRegister () {
      try {
        await this.$refs.registerBox.$refs.inputForm.validate()
      } catch (err) {
        const message = err[0].message || '未知错误'
        this.$toast(message)
        return false
      }
      const relUserList = getItem('userList') || userList
      const flag = relUserList.some(item => item.username === this.userInfo.username)
      if (!flag) {
        this.active = 1
        setItem('userList', [...relUserList, this.userInfo])
        this.userInfo = {
          username: '',
          password: ''
        }
        this.$toast('注册成功')
      } else {
        this.$toast('用户名已存在')
      }
    },
    handleTabChange () {
      this.userInfo = {
        username: '',
        password: ''
      }
    }
  }
}
</script>

<style scoped lang='scss'>
  .login {
    height: 100%;
    padding-top: 80px;
    .login-title {
      font-size: 32px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 30px;
      color: #ef8247;
    }
    .text-account {
      .text-account-item {
        color: #ccc;
        font-size: 14px;
        text-align: center;
        padding-top: 10px;
      }
    }
  }
</style>

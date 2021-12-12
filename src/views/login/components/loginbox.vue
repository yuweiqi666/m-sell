<template>
  <div class="login-box">
    <van-form ref="inputForm" validate-first :show-error-message='false' :show-error='false'>
      <van-field
        v-model="userInfo.username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="userInfo.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 50px 16px 16px 16px">
        <slot>
          <van-button round block type="info" native-type="submit" color="#ef8247" @click="handleLogin">登录</van-button>
        </slot>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: 'LoginBox',
  props: {
    userInfo: {
      type: Object
    }
  },
  methods: {
    async handleLogin () {
      try {
        await this.$refs.inputForm.validate()
      } catch (err) {
        console.log(err)
        const message = err[0].message || '未知错误'
        this.$toast(message)
        return false
      }
      this.$emit('handleLogin')
    }
  }
}
</script>

<style>

</style>

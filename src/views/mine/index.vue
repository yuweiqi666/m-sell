<template>
  <div class="mine">
    <van-cell-group>
      <van-cell title="账号" :value="currentUser.username" />
      <van-cell title="性别" value="男" />
      <van-cell title="等级" value="100" />
      <van-cell title="积分" value="999" />
    </van-cell-group>
    <div class="logout-btn">
      <van-button type="primary" size="large" color="#ef8247" round @click="handleLogout">退出登录</van-button>
    </div>
  </div>
</template>

<script>
import { getItem, removeItem } from '@/utils/storage'
export default {
  name: 'Mine',
  data () {
    return {
      currentUser: getItem('currentUser')
    }
  },
  methods: {
    handleLogout () {
      removeItem('isLogin')
      removeItem('currentUser')
      removeItem('userList')
      this.$router.push('/guide')
    }
  }
}
</script>

<style scoped lang='scss'>
  .logout-btn {
    padding: 10px;
  }
</style>

<template>
  <div class="dashboard">
    <van-nav-bar :title="$route.meta.title" :border='false'/>
    <router-view />
    <van-tabbar route active-color="#ef8247" inactive-color="#F5C6AA">
      <van-tabbar-item icon="wap-home" to="/dashboard/home">首页</van-tabbar-item>
      <van-tabbar-item icon="label" to="/dashboard/order">订单</van-tabbar-item>
      <van-tabbar-item icon="manager" to="/dashboard/mine">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style scoped lang='scss'>
  .dashboard {
    position: relative;
    height: 100%;
    /deep/.van-nav-bar__content {
      background-color: rgb(239,130,71);
      .van-nav-bar__title {
        color: #fff;
        font-size: 18px;
      }
      .van-icon-arrow-left{
        color: #fff;
      }
    }
  }
</style>

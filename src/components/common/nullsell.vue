<template>
  <div class="null-sell">
    <div class="null-wrapper">
      <van-icon class="null-ico" name="smile" />
      <p class="null-content-title">暂无订单</p>
      <p class="null-content-text">快点忙里偷闲来下单吧</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NulllSell'
}
</script>

<style scoped lang='scss'>
  .null-wrapper {
      height: 280px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      .null-ico {
        font-size: 100px;
        color: rgb(179, 179, 179);
      }
      .null-content-title {
        font-size: 18px;
        font-weight: 700;
      }
      .null-content-text {
        font-size: 12px;
        color: #8F8F8F;
      }
    }
</style>

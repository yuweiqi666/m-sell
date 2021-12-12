<template>
  <div class="sell-index">
    <van-image
      width="80"
      height="80"
      :src="sellIndexData.picUrl"
    />
    <div class="sell-text">
      <div class="sell-text-title">
        <div class="sell-text-title-content">{{sellIndexData.name}}</div>
        <div class="sell-text-title-star">
          <van-icon :key='index' v-for="(num, index) in sellIndexData.star" name="star" />
        </div>
      </div>
      <ul class="sell-text-desc">
        <li v-for="(p, index) in sellIndexData.profit" :key='index'>{{p}}</li>
      </ul>
    </div>
    <div class="sell-price">
      <div class="sell-price-text">{{sellIndexData.price}}<span class="sell-price-text-icon">￥</span></div>
      <van-button type="primary" size="small" round color="#ef8247" @click="handleGo(sellIndexData)">去看看</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SellIndex',
  props: {
    sellIndexData: {
      type: Object
    }
  },
  methods: {
    handleGo (data) {
      this.$router.push({
        path: '/detail',
        query: {
          sellName: data.name,
          price: data.price
        }
      })
    }
  }
}
</script>

<style scoped lang='scss'>
  .sell-index {
    height: 105px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 2px 2px 6px 1px #F1F1F1;
    display: flex;
    margin: 0 30px;
    padding: 10px;
    .van-image {
      border-radius: 10px;
      overflow: hidden;
      margin: auto 0 auto -40px;
      .van-image__img {
        display: inline-block;
      }
    }
    .sell-text {
      display: flex;
      flex-direction: column;
      padding-left: 10px;
      .sell-text-title {
        font-size: 20px;
        margin-bottom: 3px;
        .sell-text-title-content {
          color: #ef8247;
        }
        .sell-text-title-star {
          font-size: 16px;
          color: #ef8247;
        }
      }
      .sell-text-desc {
        font-size: 10px;
      }
    }
    .sell-price {
      display: flex;
      flex: 1;
      flex-direction: column;
      align-items: flex-end;
      // padding-: 5px 8px 0 0;
      justify-content: space-between;
      .sell-price-text {
        color: #ef8247;
        font-size: 26px;
        .sell-price-text-icon {
          font-size: 16px;
        }
      }
      .van-button--small {
        height: 22px;
        width: 65px;
        margin-right: -27px;
      }
    }
  }
</style>

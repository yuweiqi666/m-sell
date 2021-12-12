<template>
  <div class="detail">
    <van-nav-bar :title="$route.name" :border='false' left-arrow  @click-left="$router.back()"/>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <van-image
          width="100%"
          height="100%"
          :src="require('../../assets/imgs/detail/1.jpg')"
        />
      </van-swipe-item>
      <van-swipe-item>
        <van-image
          width="100%"
          height="100%"
          :src="require('../../assets/imgs/detail/2.jpg')"
        />
      </van-swipe-item>
      <van-swipe-item>
        <van-image
          width="100%"
          height="100%"
          :src="require('../../assets/imgs/detail/3.jpg')"
        />
      </van-swipe-item>
      <van-swipe-item>
        <van-image
          width="100%"
          height="100%"
          :src="require('../../assets/imgs/detail/4.jpg')"
        />
      </van-swipe-item>
    </van-swipe>
    <div class="detail-title">
      <div class="detail-title-left">
        <div class="detail-title-left-text">{{$route.query.sellName}}</div>
        <div class="detail-title-left-flag">
          <div class="detail-title-left-flag-item">香辣</div>
          <div class="detail-title-left-flag-item">红烧</div>
          <div class="detail-title-left-flag-item">牛肉</div>
        </div>
        <div class="detail-title-left-desc">月销521笔 点赞68 点评网友推荐</div>
      </div>
      <div class="detail-title-right">
        <div class="detail-title-right-price"><span>￥</span> {{$route.query.price}}</div>
        <div class="detail-title-right-add">+ 加入购物车</div>
      </div>
    </div>
    <div class="detail-content">
      <div>菜品详情</div>
      <ul class="detail-content-list">
        <li class="detail-content-list-item">主料：牛肉</li>
        <li class="detail-content-list-item">口味：香辣</li>
        <li class="detail-content-list-item">口感：爽滑</li>
        <li class="detail-content-list-item">凉热：热</li>
        <li class="detail-content-list-item">荤素：荤</li>
        <li class="detail-content-list-item">制作方法：红烧</li>
        <li class="detail-content-list-item">包装费：每份额外收取费用2元</li>
      </ul>
    </div>
    <div class="detail-btn">
      <van-button type="primary" size="large" round color="#EC8353" @click="hadleGoOrder">立即购买</van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  methods: {
    hadleGoOrder () {
      this.$router.back()
    }
  }
}
</script>

<style scoped lang='scss'>
  .detail {
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
    .van-swipe-item {
      height: 250px;
      background-color: pink;
    }
    .detail-title {
      padding-top: 20px;
      display: flex;
      justify-content: space-between;
      padding-left: 10px;
      padding-right: 10px;
      margin-bottom: 25px;
      .detail-title-left {
        .detail-title-left-text {
          font-size: 32px;
          font-weight: 700;
          margin-bottom: 5px;
        }
        .detail-title-left-flag {
          font-size: 14px;
          display: flex;
          margin-bottom: 10px;
          .detail-title-left-flag-item {
            margin-right: 10px;
            padding: 0 5px;
            border-radius: 10px;
            color: #fff;
            background-color: rgb(239,130,71);
          }
        }
        .detail-title-left-desc {
          font-size: 14px;
          color: #BCBCBC;
        }
      }
      .detail-title-right {
        text-align: right;
        .detail-title-right-price {
          color: rgb(239,130,71);
          font-weight: 700;
          font-size: 26px;
          padding-top: 10px;
          margin-bottom: 6px;
        }
        .detail-title-right-add {
          color: #fff;
          background-color: rgb(239,130,71);
          border-radius: 10px;
          padding: 0 10px;
        }
      }
    }
    .detail-content {
      padding: 0 10px;
      font-weight: 700;
      font-size: 24px;
      .detail-content-list {
        font-size: 12px;
        color: #BCBCBC;
        padding-top: 10px;
        .detail-content-list-item {
          margin-bottom: 5px;
        }
      }
    }
    .detail-btn {
      height: 60px;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      box-sizing: border-box;
      padding: 5px 10px;
      .van-button__text {
        font-size: 20px;
      }
    }
  }
</style>

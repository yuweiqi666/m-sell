<template>
  <div class="home">
    <div class="bg"></div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in swiperImgList" :key='index'>
        <van-image
          :width="item.width"
          :height="item.height"
          :src="item.url"
        />
      </van-swipe-item>
    </van-swipe>
    <div class='btn-wrapper'>
      <van-button type="primary" color="#ef8247" round @click="handleClickOrder">开始点餐</van-button>
    </div>
    <div class="action">
      <div class="action-title">最新活动</div>
      <sell-index :key='index' v-for="(sellIndexData, index) in sellIndexArray" :sellIndexData='sellIndexData' />
    </div>
  </div>
</template>

<script>
import SellIndex from './components/sell-index.vue'
import { swiperImgList, sellIndexArray } from '@/assets/data/home/index'
export default {
  name: 'Home',
  components: {
    SellIndex
  },
  data () {
    return {
      swiperImgList,
      sellIndexArray
    }
  },
  methods: {
    handleClickOrder () {
      this.$router.push('/sell')
    }
  }
}
</script>

<style scoped lang='scss'>
  .home {
    padding-bottom: 50px;
    .my-swipe {
      margin-top: -95px;
      .van-swipe-item {
        color: #fff;
        font-size: 20px;
        height: 200px;
        width: 100%;
        text-align: center;
        padding: 0 10px;
        .van-image {
          border-radius: 10px;
          overflow: hidden;
        }
      }
    }
    .bg {
      background-color: rgb(239,130,71);
      height: 100px;
      border-radius: 0 0 30px 30px;
    }
    .btn-wrapper {
      padding: 20px 15px 25px 15px;
    .van-button {
        width: 100%;
        box-sizing: border-box;
      }
    }
    .action {
       padding: 0 12px;
      .action-title {
        margin-bottom: 10px;
      }
      .sell-index {
        margin-bottom: 10px;
      }
    }
  }
</style>

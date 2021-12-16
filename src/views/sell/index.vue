<template>
  <div class="sell">
    <van-nav-bar :title="$route.meta.title" :border='false' left-arrow @click-left="$router.back()"/>
    <div class="sell-wrapper">
      <van-swipe autoplay="3000" class="my-swipe" :show-indicators='false'>
        <van-swipe-item v-for="(item, index) in swiperImgList" :key='index'>
          <van-image
            :width="item.width"
            :height="item.height"
            :src="item.url"
          />
        </van-swipe-item>
      </van-swipe>
      <sell-list :sellList='sellList' @sellPlus="handleSellNum('plus')" @sellMinus="handleSellNum('minus')" />
      <div class="bottom-btn">
        <div class="cart">
          <van-icon name="cart" />
          <div v-show="totalNum !== 0" class="total-num">{{totalNum}}</div>
        </div>
        <div class="total-price"><span>￥</span> {{totalPrice}}</div>
        <van-button type="primary" round color="#ef8247" @click="handlePay">立即结算</van-button>
      </div>
    </div>
  </div>
</template>

<script>
import { swiperImgList, sellList } from '@/assets/data/sell/index'
import SellList from './components/selllist.vue'
import { getItem, setItem } from '@/utils/storage.js'
export default {
  name: 'Sell',
  components: {
    SellList
  },
  data () {
    return {
      swiperImgList,
      sellList: getItem('filterOrderedSell') || sellList,
      totalNum: getItem('totalNum') || 0
    }
  },
  computed: {
    totalPrice () {
      let result = 0
      this.sellList.map(item => item.list).flat().forEach(c => {
        result += c.num * c.price
      })
      return result
    }
  },
  methods: {
    handlePay () {
      this.$router.push({
        path: '/dashboard/order'
      })
    },
    handleSellNum (status) {
      if (status === 'plus') {
        this.totalNum++
      } else if (status === 'minus') { this.totalNum-- }
      this.filterOrderedSell()
    },
    filterOrderedSell () {
      setItem('filterOrderedSell', this.sellList)
      setItem('totalNum', this.totalNum)
    }
  }
}
</script>

<style scoped lang='scss'>
  .sell {
    width: 100%;
    height: 100%;
    position: relative;
    /deep/.van-nav-bar__content {
      background-color: rgb(239,130,71);
      margin-bottom: 10px;
      .van-nav-bar__title {
        color: #fff;
        font-size: 18px;
      }
      .van-icon-arrow-left{
        color: #fff;
      }
    }
    .sell-wrapper {
      .my-swipe {
        .van-swipe-item {
          height: 200px;
          width: 100%;
          padding: 0 10px;
          .van-image {
            border-radius: 10px;
            overflow: hidden;
          }
        }
      }
      .bottom-btn {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        padding: 0 10px 0 20px;
        height: 50px;
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 18px;
        .cart {
          position: relative;
          width: 65px;
          height: 65px;
          border-radius: 65px;
          background-color: rgb(239,130,71);
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: -48px;
          .van-icon-cart {
            font-size: 42px;
            color: #fff;
          }
          .total-num {
            position: absolute;
            top: -8px;
            right: -8px;
            width: 18px;
            height: 18px;
            border-radius: 18px;
            background-color: #E8463D;
            text-align: center;
            line-height: 18px;
            color: #fff;
          }
        }
        .total-price {
          flex: 1;
          text-align: right;
          color: rgb(239,130,71);
          padding-right: 20px;
        }
        .van-button--normal {
          font-size: 18px;
        }
      }
    }
  }
</style>

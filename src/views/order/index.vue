<template>
  <div class="order">
    <van-tabs v-model="active" title-active-color="#EC8353" title-inactive-color="#F5D0BD" background=''>
      <van-tab title="待付款">
        <sell-item :sellItem='sellItem'  :key='sellItem.id' v-for="sellItem in relSellList">
          <template #num={item}>
            <div>
              x {{item.num}}
            </div>
          </template>
        </sell-item>
        <null-sell v-if="!relSellList.length" />
        <div class="bottom-btn">
          <div style="color: #EC8353; font-weight: 700"><span>￥</span> {{totalPrice}}</div>
          <van-button type="primary" round color="#ef8247" v-if="relSellList.length" @click="handleTotal">立即结算</van-button>
        </div>
      </van-tab>
      <van-tab title="未完成">
        <null-sell />
      </van-tab>
      <van-tab title="已完成">
        <null-sell />
      </van-tab>
      <van-tab title="退款售后">
        <null-sell />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { getItem } from '@/utils/storage.js'
import SellItem from '@/components/common/sellitem.vue'
import NullSell from '@/components/common/nullsell.vue'
import { sellList } from '@/assets/data/sell/index'
export default {
  name: 'Order',
  components: {
    SellItem,
    NullSell
  },
  data () {
    return {
      sellList: getItem('filterOrderedSell') ? getItem('filterOrderedSell') : sellList,
      active: 0
    }
  },
  computed: {
    relSellList () {
      return (this.sellList.map(item => ({
        ...item,
        list: item.list.filter(item2 => item2.num > 0)
      })).filter(item3 => item3.list && item3.list.length))
    },
    totalPrice () {
      let result = 0
      if (this.sellList) {
        this.sellList.map(item => item.list).flat().forEach(c => {
          result += c.num * c.price
        })
      }
      return result
    }
  },
  methods: {
    handleTotal () {
      this.$toast('开发中')
    }
  }
}
</script>

<style scoped lang='scss'>
  .order {
    .van-tabs {
      width: 100%;
      top: 46px;
      bottom: 0;
      position: absolute;
      /deep/.van-tabs__wrap {
      margin-bottom: 5px;
      }
      /deep/.van-tabs__line {
        background-color: #EC8353;
      }
      /deep/.van-tabs__content {
        position: absolute;
        width: 100%;
        top: 46px;
        left: 0;
        bottom: 50px;
        overflow-y: auto;
        .van-tab__pane {
          padding-bottom: 50px;
        }
      }
    }
    .bottom-btn {
      position: fixed;
      bottom: 50px;
      width: 100%;
      height: 50px;
      box-sizing: border-box;
      padding: 0 20px;
      z-index: 100;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
</style>

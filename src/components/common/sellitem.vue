<template>
  <div>
    <slot name='title' />
    <div @click="handleClickDetail(item)" class="content-item" :key="index" v-for="(item, index) in sellItem.list">
      <van-image
        width="80"
        height="80"
        :src="item.picUrl"
      />
      <div class="content-text">
        <div class="content-text-title">{{item.sellName}}</div>
        <div class="content-text-price"><span class="content-text-price-icon">￥</span>{{item.price}}</div>
        <slot name='num' :item='item' />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SellItem',
  props: {
    sellItem: {
      type: Object
    }
  },
  methods: {
    handleClickDetail (data) {
      this.$router.push({
        path: '/detail',
        query: {
          sellName: data.sellName,
          price: data.price
        }
      })
    }
  }
}
</script>

<style scoped lang='scss'>
.content-item {
  background-color: #fff;
  box-shadow: 0 0 8px 1px #f6f6f6;
  border-radius: 10px;
  height: 100px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  margin-bottom: 5px;
  .van-image {
    border-radius: 10px;
    margin-right: 20px;
    overflow: hidden;
    /deep/.van-image__img {
      display: inline-block;
    }
  }
  .content-text {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .content-text-title {
      color: #ef8247;
      font-size: 18px;
      font-weight: 600;
    }
    .content-text-price {
      font-weight: 600;
      color: #ef8247;
      .content-text-price-icon {
        margin-right: 5px;
      }
    }

  }
}
</style>

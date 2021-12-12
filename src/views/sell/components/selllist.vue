<template>
  <div class="sell-list">
    <div class="left-nav">
      <div class="category-item" @click="handleClickCate(index)" :class="currentHighLight === index ? 'category-item-active' : ''" :key="index" v-for="(item, index) in cateGoryList">{{item}}</div>
    </div>
    <div ref="rightContentRef" class="right-content">
      <sell-item :sellItem='sellItem'  :key='sellItem.id' v-for="sellItem in sellList">
        <template #title>
          <div class="contenxt-category">{{sellItem.category}}</div>
        </template>
        <template #num={item}>
          <div class="content-text-num">
            <div style="width: 22px; height: 22px">
              <div @click="handleSellMinus($event, item)" v-show="item.num !== 0" class="contenxt-text-num-icon contenxt-text-num-minus">
                <van-icon name="minus" />
              </div>
            </div>
            <div class="content-text-num-wrapper">
              <span v-show="item.num !== 0">{{item.num}}</span>
            </div>
            <div class="contenxt-text-num-icon" @click="handleSellPlus($event, item)">
              <van-icon name="plus" />
            </div>
          </div>
        </template>
      </sell-item>
    </div>
  </div>
</template>

<script>
import SellItem from '@/components/common/sellitem.vue'
export default {
  name: 'SelList',
  data () {
    return {
      currentHighLight: 0,
      heightData: [0]
    }
  },
  components: {
    SellItem
  },
  props: {
    sellList: {
      type: Array
    }
  },
  computed: {
    cateGoryList () {
      return this.sellList.map(item => item.category)
    }
  },
  mounted () {
    this.$nextTick(() => {
      let singleHeight = 0
      this.sellList.forEach(item => {
        singleHeight += item.list.length * 105 + 25
        this.heightData.push(singleHeight)
      })
      const vm = this
      this.$refs.rightContentRef.addEventListener('scroll', function () {
        const matchArr = vm.heightData.filter((item, index) => {
          return (item <= this.scrollTop) && (vm.heightData[index + 1] > this.scrollTop)
        })
        vm.currentHighLight = vm.heightData.indexOf(matchArr[0])
      })
    })
  },
  methods: {
    handleClickCate (index) {
      this.$refs.rightContentRef.scrollTop = this.heightData[index]
    },
    handleSellPlus (e, sellItem) {
      e.stopPropagation()
      sellItem.num++
      this.$emit('sellPlus')
    },
    handleSellMinus (e, sellItem) {
      e.stopPropagation()
      sellItem.num--
      this.$emit('sellMinus')
    }
  }
}
</script>

<style scoped lang='scss'>
  .sell-list {
    position: absolute;
    top: 265px;
    bottom: 50px;
    width: 100%;
    overflow-y: hidden;
    display: flex;
    padding: 0 10px;
    .left-nav {
      background-color: #F5F5F5;
      width: 80px;
      height: 100%;
      overflow-y: auto;
      .category-item {
        color: #8F8F8F;
        // background-color: pink;
        // margin-bottom: 10px;
        height: 40px;
        text-align: center;
        line-height: 35px;
      }
      .category-item-active {
        background-color: #FAFAFA;
        color: #000;
      }
    }
    .right-content {
      flex: 1;
      height: 100%;
      background-color: #FAFAFA;
      padding: 0 0 0 10px;
      overflow: auto;
      .contenxt-category {
        height: 20px;
        border-radius: 10px;
        margin-bottom: 5px;
        background-color: pink;
        font-size: 14px;
        padding-left: 10px;
        color: #ccc;
        background-color: #fff;
      }
      .content-text-num {
        display: flex;
        align-items: center;
        .contenxt-text-num-icon {
          color: #fff;
          width: 22px;
          height: 22px;
          border-radius: 22px;
          text-align: center;
          line-height: 22px;
          background-color: #ef8247;
        }
        .contenxt-text-num-minus {
          background-color: #DADADA;
        }
        .content-text-num-wrapper {
          width: 50px;
          text-align: center;
          // margin: 0 20px;
        }
      }
    }
  }
</style>

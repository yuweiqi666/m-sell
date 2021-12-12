<template>
  <div class="guide" @click="hadnleClick">
    <van-swipe style="height: 100%; width: 100%;" vertical>
      <van-swipe-item>
        <van-image
          width="100%"
          height="100%"
          :src="require('../../assets/imgs/guide/1.jpg')"
        />
      </van-swipe-item>
      <van-swipe-item>
        <van-image
          width="100%"
          height="100%"
          :src="require('../../assets/imgs/guide/2.jpg')"
        />
      </van-swipe-item>
      <van-swipe-item>
        <van-image
          width="100%"
          height="100%"
          :src="require('../../assets/imgs/guide/3.jpg')"
        />
      </van-swipe-item>
      <van-swipe-item>
        <van-image
          width="100%"
          height="100%"
          :src="require('../../assets/imgs/guide/4.jpg')"
        />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { getItem } from '@/utils/storage'
export default {
  name: 'Guide',
  methods: {
    hadnleClick () {
      if (getItem('isLogin')) {
        this.$router.push('/dashboard/home')
      } else {
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style scoped lang='scss'>
  .guide {
    height: 100%;
  }
</style>

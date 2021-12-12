import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './vant/index'

import './assets/style/index.scss'

import './assets/style/reset.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

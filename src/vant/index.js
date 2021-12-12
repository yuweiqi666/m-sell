import Vue from 'vue'

import {
  Field,
  Form,
  Button,
  Tab,
  Tabs,
  NavBar,
  Tabbar,
  TabbarItem,
  Swipe,
  SwipeItem,
  Image as VanImage,
  Icon,
  Toast,
  Cell,
  CellGroup
} from 'vant'

Vue.use(Field)
Vue.use(Form)
Vue.use(Button)
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(NavBar)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(Swipe)
Vue.use(SwipeItem)
Vue.use(VanImage)
Vue.use(Icon)
Vue.use(Toast)
Vue.use(Cell)
Vue.use(CellGroup)

Vue.prototype.$toast = Toast

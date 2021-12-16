import Vue from 'vue'
import VueRouter from 'vue-router'
import { getItem } from '@/utils/storage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/guide'
  },
  {
    path: '/guide',
    name: 'guide',
    component: () => import('../views/guide')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login')
  },
  {
    path: '/sell',
    name: 'sell',
    component: () => import('../views/sell'),
    meta: {
      title: '点餐'
    }
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../views/detail'),
    meta: {
      title: '详情'
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/dashboard'),
    redirect: '/dashboard/home',
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/home'),
        meta: {
          title: '首页'
        }
      },
      {
        path: 'order',
        name: '订单',
        component: () => import('../views/order'),
        meta: {
          title: '订单'
        }
      },
      {
        path: 'mine',
        name: '个人',
        component: () => import('../views/mine'),
        meta: {
          title: '个人'
        }
      }
    ]
  }
]

const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) {
    return originalPush.call(this, location, onResolve, onReject)
  }
  return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isLogin = getItem('isLogin')
  if (isLogin) {
    if (to.path === '/login') {
      next('/dashboard')
    } else {
      next()
    }
  } else {
    if (to.path === '/guide' || to.path === '/login') {
      next()
    } else {
      next('/guide')
    }
  }
})

export default router

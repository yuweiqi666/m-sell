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
    name: '点餐',
    component: () => import('../views/sell')
  },
  {
    path: '/detail',
    name: '详情',
    component: () => import('../views/detail')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/dashboard'),
    redirect: '/dashboard/home',
    children: [
      {
        path: 'home',
        name: '首页',
        component: () => import('../views/home')
      },
      {
        path: '/dashboard/order',
        name: '订单',
        component: () => import('../views/order')
      },
      {
        path: '/dashboard/mine',
        name: '个人',
        component: () => import('../views/mine')
      }
    ]
  }
]

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

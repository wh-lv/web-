import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import List from '../views/List.vue'
import Detail from '../views/Detail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/list',
        name: 'List',
        component: List
      },
      {
        path: '/detail/:id',
        name: 'Detail',
        component: Detail,
        props: true
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    meta: { auth: true }, // 需要认证
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 全局守卫
router.beforeEach((to, from, next) => {
  if (to.meta.auth && !window.hasLogin) {
    if (window.confirm('请登录')) {
      window.hasLogin = true
      next()
    } else {
      next('/')
    }
  } else {
    next()
  }
})

export default router

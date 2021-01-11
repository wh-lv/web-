import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
// import List from '../views/List.vue'
// import Detail from '../views/Detail.vue'
import Layout from '@/layout'

Vue.use(VueRouter)

// 通用页面
export const constRoutes = [
  {
    path: '/login',
    component: () => import('@/views/Login'),
    hidden: true // 导航菜单忽略该项
  },
  {
    path: '/',
    component: Layout, // 应用布局
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/Home'),
        name: 'Home',
        meta: {
          title: 'Home', // 导航菜单项标题
          icon: 'qq' // 导航菜单项图标
        }
      }
    ]
  }
]

// 权限页面
export const asyncRoutes = [
  {
    path: '/about',
    component: Layout,
    redirect: '/about/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/About'),
        name: 'About',
        meta: {
          title: 'About',
          icon: 'wx',
          // 角色决定将来哪些用户可以看到该路由
          roles: ['admin', 'editor']
        }
      }
    ]
  }
]

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constRoutes
})

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home,
//     children: [
//       {
//         path: '/list',
//         name: 'List',
//         component: List
//       },
//       {
//         path: '/detail/:id',
//         name: 'Detail',
//         component: Detail,
//         props: true
//       }
//     ]
//   },
//   {
//     path: '/about',
//     name: 'About',
//     meta: { auth: true }, // 需要认证
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

// // 全局守卫
// router.beforeEach((to, from, next) => {
//   if (to.meta.auth && !window.hasLogin) {
//     if (window.confirm('请登录')) {
//       window.hasLogin = true
//       next()
//     } else {
//       next('/')
//     }
//   } else {
//     next()
//   }
// })

// export default router

// 做全局路由
import router from './router'
import store from './store'
import { getToken } from './utils/auth'

const whiteList = ['/list']

router.beforeEach(async (to, from, next) => {
  const hasToken = getToken()
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' })
    } else {
      // 已登录且 to.path ！== '/login'
      // 获取用户角色
      const userRoles = store.getters.roles && store.getters.roles.length > 0
      if (userRoles) {
        next()
      } else {
        // 请求用户信息
        const { roles } = await store.dispatch('user/getInfo')
        // 根据角色生成动态路由
        const accessRoutes = await store.dispatch('permission/generateRoutes', roles)
        // 添加至 router
        router.addRoutes(accessRoutes)
        // 重定向
        next({ ...to, replace: true })
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== 0) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})

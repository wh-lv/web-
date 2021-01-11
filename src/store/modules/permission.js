import { constRoutes, asyncRoutes } from '@/router'

/**
 * 根据路由 meta.role 确定当前用户是否有访问权限
 * @param {用户拥有角色} roles
 * @param {待判定路由} route
 */
function hasPermission (roles, route) {

}

export function filterAsyncRoutes (routes, roles) {
  const res = []
  routes.forEach(route => {
    const temp = { ...route }

  })
}

const state = {
  routes: [], // 完整路由表
  addRoutes: [] // 用户可访问路由表
}

const mutations = {
  SET_ROUTES: ({ state }, routes) => {
    state.addRoutes = routes
    state.routes = constRoutes.concat(routes)
  }
}

const actions = {
  generateRoutes ({ commit }, roles) {
    return new Promise((resolve, reject) => {
      let accessRoutes
      if (roles.include('damin')) {
        accessRoutes = asyncRoutes || []
      } else {
        accessRoutes = filterAsyncRoutes(asyncRoutes, roles)
      }
      commit('SET_ROLES', accessRoutes)
      resolve(accessRoutes)
    })
  }
}

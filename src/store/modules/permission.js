import { constRoutes, asyncRoutes } from '@/router'

/**
 * 根据路由 meta.role 确定当前用户是否有访问权限
 * @param {用户拥有角色} roles
 * @param {待判定路由} route
 */
function hasPermission (roles, route) {
  // 如果当前路由又 roles 字段则需判断用户访问权限
  if (route.meta && route.meta.roles) {
    // 若用户拥有的权限被包含在待判定的路由角色表中则拥有访问权
    return roles.some(role => route.meta.roles.includes(role))
  } else {
    // 没有 roles 字段的无需判断就拥有访问权限
    return true
  }
}

/**
 * 递归过滤 asyncRoutes 路由表
 * @param {待过滤路由表，首次传入的是 asyncRoutes} routes
 * @param {用户拥有的角色} roles
 */
export function filterAsyncRoutes (routes, roles) {
  const res = []
  routes.forEach(route => {
    // 复制一份
    const temp = { ...route }
    // 如果用户拥有访问权限则加入结果路由表
    if (hasPermission(roles, temp)) {
      // 如果存在子路由则递归过滤
      if (temp.children) {
        temp.children = filterAsyncRoutes(temp.children, roles)
      }
      res.push(temp)
    }
  })
  return res
}

const state = {
  routes: [], // 完整路由表
  addRoutes: [] // 用户可访问路由表
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
    state.routes = constRoutes.concat(routes)
  }
}

const actions = {
  // 路由生成：得到用户角色之后会第一时间调用
  generateRoutes ({ commit }, roles) {
    return new Promise((resolve, reject) => {
      let accessRoutes
      // 用户是管理员则拥有全部权限
      if (roles.includes('admin')) {
        accessRoutes = asyncRoutes || []
      } else {
        // 否则需要通过角色做过滤处理
        accessRoutes = filterAsyncRoutes(asyncRoutes, roles)
      }
      commit('SET_ROUTES', accessRoutes)
      resolve(accessRoutes)
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

import Vue from 'vue'
import Vuex from 'vuex'
import count from './modules/count'
import user from './modules/user'
import permission from './modules/permission'

Vue.use(Vuex)

// 增删 state
// Vue.set(state, 'age', 15)
// Vue.delete(state, 'age')

const store = new Vuex.Store({
  modules: {
    count: count,
    user: user,
    permission: permission
  },
  // 全局定义 getters 便于访问
  getters: {
    roles: state => state.user.roles,
    token: state => state.user.token,
    permission_routes: state => state.permission.routes
  }
})

export default store

import Vue from 'vue'
import Vuex from 'vuex'
import { count } from './modules/count'
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
  }
})

export default store

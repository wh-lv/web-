import Vue from 'vue'
import Vuex from '../kvuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add (state, num = 1) {
      state.count += num
    }
  },
  actions: {
    asyncAdd ({ commit }, num) {
      return new Promise(resolve => {
        setTimeout(() => {
          commit('add', num)
          resolve({ ok: true })
        }, 1000)
      })
    }
  },
  getters: {
    score (state) {
      return 'score: ' + state.count
    }
  }
})

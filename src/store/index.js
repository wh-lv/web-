import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name: 'hello vuex!'
  },
  mutations: {
    edit (state, payload) {
      state.name = 'jack'
      console.log('payload: ', payload)
    }
  },
  actions: {
  },
  modules: {
  }
})

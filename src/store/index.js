import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 增删 state
// Vue.set(state, 'age', 15)
// Vue.delete(state, 'age')

const store = new Vuex.Store({
  state: {
    name: 'tom',
    age: 15,
    count: 0
  },
  getters: {
    nameInfo (state) {
      return '姓名：' + state.name
    },
    fullInfo (state, getters) {
      return getters.nameInfo + '，年龄：' + state.age
    }
  },
  mutations: {
    edit (state, payload) {
      state.name = payload.name
      state.age = payload.age
    }
  },
  actions: {
    aEdit (context, payload) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          context.commit('edit', payload)
          resolve()
        }, 2000)
      })
    }
  },
  modules: {
  }
})

export default store

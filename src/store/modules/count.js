export const count = {
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
    },
    score (state) {
      return 'scroe: ' + state.count
    }
  },
  mutations: {
    edit (state, payload) {
      state.name = payload.name
      state.age = payload.age
    },
    add (state, num = 1) {
      state.count += num
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
    },
    asyncAdd ({ commit }, num) {
      return new Promise(resolve => {
        setTimeout(() => {
          commit('add', num)
          resolve({ ok: true })
        }, 1000)
      })
    }
  }
}

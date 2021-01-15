const state = {
  name: 'tom',
  age: 15,
  count: 0
}
const getters = {
  nameInfo (state) {
    return '姓名：' + state.name
  },
  fullInfo (state, getters) {
    return getters.nameInfo + '，年龄：' + state.age
  },
  score (state) {
    return 'scroe: ' + state.count
  }
}
const mutations = {
  edit (state, payload) {
    state.name = payload.name
    state.age = payload.age
  },
  add (state, num = 1) {
    state.count += num
  }
}

const actions = {
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

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}

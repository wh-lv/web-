/**
 * 1、维护状态 state
 * 2、修改状态 commit
 * 3、业务逻辑控制 dispatch
 * 4、状态派发 getters
 * 5、实现 state 响应式
 * 6、插件
 * 7、混入
 */

let Vue

function install (_Vue, storeName = '$store') {
  Vue = _Vue
  // 混入，把 store 选项指定到Vue原型上
  Vue.mixin({
    beforeCreate () {
      if (this.$options.store) {
        Vue.prototype[storeName] = this.$options.store
      }
    }
  })
}

class Store {
  // options = { state: { count: 0 }, mutations: { count(state) {} } }
  constructor (options = {}) {
    // 利用Vue的响应式
    this.state = new Vue({
      data: options.state
    })

    // 初始换 mutations
    this.mutations = options.mutations || {}
    // 初始换 actions
    this.actions = options.actions || {}

    options.getters && this.handleGetters(options.getters)
  }

  // 触发 mutations，需要实现 commit
  commit = (type, ...arg) => {
    const fn = this.mutations[type]
    fn(this.state, ...arg)
  }

  // 触发 actions，实现 dispatch
  dispatch = (type, ...arg) => {
    const fn = this.actions[type]
    return fn({ commit: this.commit, state: this.state }, ...arg)
  }

  handleGetters (getters) {
    this.getters = {}
    Object.keys(getters).forEach(key => {
      // 定义只读的属性
      Object.defineProperty(this.getters, key, {
        get: () => {
          return getters[key](this.state)
        }
      })
    })
  }
}

export default { Store, install }

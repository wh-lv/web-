/**
 * 配置 routes，生成 path 为 key，component 为 value 的键值对
 * 监听 url 变化，把最新 hash 保存到 current 路由
 * 实现全局组件：router-view 渲染当前匹配组件，router-link 用于修改 hash
 * current 必须为响应式的，能够触发 router-view 的重新渲染
 */

let Vue

class VueRouter {
  constructor (options) {
    this.$options = options
    this.routesMap = {}
    this.app = new Vue({
      data () {
        return {
          current: '/'
        }
      }
    })
  }

  init () {
    this.bindEvents()
    this.createRoutesMap(this.$options)
    this.initComponent()
  }

  bindEvents () {
    window.addEventListener('hashchange', this.onHashChange.bind(this))
    window.addEventListener('load', this.onHashChange.bind(this))
  }

  onHashChange () {
    this.app.current = window.location.hash.slice(1) || '/'
  }

  createRoutesMap (options) {
    options.routes.forEach(item => {
      this.routesMap[item.path] = item
    })
  }

  initComponent () {
    Vue.component('router-link', {
      props: {
        to: String
      },
      render (h) {
        return h('a', { attrs: { href: `#${this.to}` } }, this.$slots.default)
      }
    })
    Vue.component('router-view', {
      render: h => {
        const Comp = this.routesMap[this.app.current].component
        return h(Comp)
      }
    })
  }
}

VueRouter.install = function (_Vue) {
  Vue = _Vue
  Vue.mixin({
    beforeCreate () {
      if (this.$options.router) {
        Vue.prototype.$router = this.$options.router
        this.$options.router.init()
      }
    }
  })
}

export default VueRouter
